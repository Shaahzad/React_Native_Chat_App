import type { Request, Response } from "express"
import User from "../models/User.js"
import bcrypt from "bcryptjs"
import { generateToken } from "../utils/token.js"

export const registerUser = async (req: Request, res: Response) => {
    const { email, password, name, avatar } = req.body
    try {
        let user = await User.findOne({ email });
        if (user) {
            res.status(400).json({ success: false, message: "User already Exists" })
            return
        }

        user = new User({
            email,
            password,
            name,
            avatar: avatar || ""
        })

        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt)

        await user.save()

        const token = generateToken(user)

        res.json({
            success: true,
            token
        })
    } catch (error) {
        console.log('error', error)
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}


export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body
    try {


        const user = await User.findOne({ email })

        if (!user) {
            res.status(400).json({
                success: false,
                message: "Invalid Credentials"
            })
            return
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            res.status(400).json({
                success: false,
                message: "Invalid Credentials"
            })
            return
        }
        const token = generateToken(user)

        res.json({
            success: true,
            token
        })
    } catch (error) {
        console.log('error', error)
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}