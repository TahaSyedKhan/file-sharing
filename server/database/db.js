import mongoose from 'mongoose';

const DBconnection = async () => {
  const MONGODB_URL = `mongodb+srv://TahaSyed:3AaCbkPIIqR3UWsC@file-sharing.feyuppn.mongodb.net/?retryWrites=true&w=majority`;
  try{
    mongoose.connect(MONGODB_URL, {useNewParser: true});
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error while connecting with the database ', error.message);
  }
}
export default DBconnection;