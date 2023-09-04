import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import config from 'config'

export interface UserInput {
  email: string;
  name: string;
  password: string;
}

export interface UserDocument extends UserInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>
}

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true }
}, {
  timestamps: true
})

userSchema.pre("save", async function (next) {
  //we are using function express not arrow function in order to get access to the this keyword which refer to the UserDocuemt
  let user = this as UserDocument
  //if pre(save) is not modifying the password then we don't want to do anything (return next)
  if (!user.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"))
  const hash = await bcrypt.hash(user.password, salt)

  user.password = hash;
  return next();
})

//this is a method that is added to userSchema just like find() and updateOne() and it will supply this as a userDocument
userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  const user = this as UserDocument

  return bcrypt.compare(candidatePassword, user.password).catch(err => false)
}

const UserModel = mongoose.model<UserDocument>("User", userSchema)

export default UserModel