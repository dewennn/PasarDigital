import mongoose from "mongoose"
import User from "../models/user.model.js"

export const createUser = async(req, res) => {
  const user = req.body

  if(!user.email || !user.password || !user.name){
    return res.status(400).json({success:false, message:"Please provide all fields"})
  }

  const userExist = await User.findOne({email: user.email})
  if(userExist){
      return res.status(400).json({success: false, message: 'Email is already used'})
  }

  const newUser = new User(user)

  try {
    await newUser.save()
    res.status(201).json({success: true, data: newUser})

  } catch (error) {
    res.status(500).json({success:false, message:"Server Error!"})

  }
}

export const loginUser = async(req, res) => {
  const input = req.body

  if(!input.email || !input.password){
    return res.status(400).json({success:false, message:"Please provide all fields"})
  }

  const user = await User.findOne({email: input.email})
  if(!user){
    return res.status(400).json({success: false, message: 'Email not found'})
  }

  const check = await user.comparePassword(input.password)
  if(!check) return res.status(400).json({success:false, message:"Invalid password!"})

  res.status(200).json({success: true, data: user})
}