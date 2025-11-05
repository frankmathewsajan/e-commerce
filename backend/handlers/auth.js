const bcrypt = require("bcrypt")
const users = require("../schemas/users")
const jwt = require("jsonwebtoken")

const { OAuth2Client } = require("google-auth-library")

require("dotenv").config()
const CLIENT_ID = process.env.CLIENT_ID
const client = new OAuth2Client(CLIENT_ID)
const { generateToken } = require("./jwts")

const signup = async (req, res) => {
    const salt = 10
    const { name, email, role, password } = req.body
    try {
        const hashed = await bcrypt.hash(password, salt)
        const User = new users({
            name: name,
            email: email,
            role: role,
            password: hashed,
            isOAuthUser: false
        })
        const find = await users.findOne({ email: email })
        if (find !== null) {
            res.status(400).json(["Error", `User with email ${email} already exists`])
        } else {
            await User.save()
            res.status(200).json(["Success", "You have signed up successfully. You will receive a confirmation email shortly."])
        }
    } catch (error) {
        console.error("Signup error:", error)
        res.status(500).json(["Error", "An error occurred during signup"])
    }
}

const login = async (req, res) => {
    try {
        const user = await users.findOne({ email: req.body.email })
        if (!user) {
            return res.status(400).json(["Error", "Invalid credentials"])
        }
        const match = await bcrypt.compare(req.body.password, user.password)
        const token = generateToken(user)
        if (match) {
            res.status(200).cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 7 * 24 * 60 * 60 * 1000
            }).json(["Success", "You have logged in successfully"])
        } else {
            res.status(400).json(["Error", "Invalid credentials"])
        }
    } catch (error) {
        console.error("Login error:", error)
        res.status(500).json(["Error", "An error occurred during login"])
    }
}

const oauth = async (req, res) => {
    try {
        const { token } = req.body
        
        // Verify the Google ID token (follows latest Google Identity Services)
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID
        })
        
        const payload = ticket.getPayload()
        const email = payload.email
        const name = payload.name
        const emailVerified = payload.email_verified
        
        // Security: Only accept verified emails
        if (!emailVerified) {
            return res.status(400).json(["Error", "Email not verified by Google"])
        }
        
        let user = await users.findOne({ email })
        
        if (user) {
            // Existing user - login
            const jwtToken = jwt.sign(
                { id: user._id, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: "7d" }
            )
            res.cookie("token", jwtToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 7 * 24 * 60 * 60 * 1000
            })
            return res.status(200).json(["Success", "Login Successful"])
        } else {
            // New user - create account
            const newUser = new users({
                name,
                email,
                role: "Consumer",
                isOAuthUser: true
            })
            await newUser.save()
            
            const jwtToken = jwt.sign(
                { id: newUser._id, role: newUser.role },
                process.env.JWT_SECRET,
                { expiresIn: "7d" }
            )
            res.cookie("token", jwtToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 7 * 24 * 60 * 60 * 1000
            })
            return res.status(201).json(["Success", "Account created and logged in successfully"])
        }
    } catch (error) {
        console.error("OAuth Error:", error)
        
        // Provide specific error messages
        if (error.message?.includes("Token used too late")) {
            return res.status(401).json(["Error", "Token expired. Please try again."])
        }
        if (error.message?.includes("Invalid token")) {
            return res.status(401).json(["Error", "Invalid authentication token."])
        }
        
        res.status(500).json(["Error", "Authentication failed. Please try again."])
    }
}

module.exports = { signup, login, oauth }