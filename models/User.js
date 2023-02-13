// import mongoose from 'mongoose'

// const UserSchema = new mongoose.Schema(
//   {
//     firstName: {
//       type: String,
//       required: true,
//       min: 2,
//       max: 50,
//     },

//     lastName: {
//       type: String,
//       required: true,
//       min: 2,
//       max: 50,
//     },

//     email: {
//       type: String,
//       required: true,
//       max: 50,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//       min: 5,
//     },
//     picturePath: {
//       type: String,
//       default: '',
//     },
//     friends: {
//       type: Array,
//       default: [],
//     },
//     location: String,
//     occupation: String,
//     viewedProfile: Number,
//     impressions: Number,
//   },
//   { timestamps: true }
// )

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      min: 2,
      max: 50,
      required: true,
    },
    lastName: {
      type: String,
      min: 2,
      max: 50,
      required: true,
    },
    email: {
      type: String,
      max: 50,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      min: 5,
      required: true,
    },
    picturePath: {
      type: String,
      default: '',
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impression: Number,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;
