import mongoose from 'mongoose';

// Create a `schema` for the `Todo` object
let computerSchema = new mongoose.Schema({
  name: { type : String },
  dateCreated: { type : String },
  available: { type : Boolean },
  price: { type : Number }
});


export default mongoose.model('Computer', computerSchema);
