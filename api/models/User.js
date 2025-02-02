import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true, minLength: 4, unique: true },
  password: { type: String, required: true },
});

const UserModel = model('User', UserSchema);

export default UserModel;
