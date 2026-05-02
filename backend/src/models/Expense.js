import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
  description: { type: String },
  frequency: { type: String, enum: ['one-time', 'monthly', 'yearly'], default: 'one-time' }
}, { timestamps: true });

const Expense = mongoose.model('Expense', expenseSchema);
export default Expense;
