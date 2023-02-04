const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    trim: true,
  },
  phoneNumber: {
    type: Number,
    required: [true, "phoneNumber is required"],
    trim: true,
  },
  address: {
    type: String,
    required: [true, "address is required"],
    trim: true,
  },
  note: {
    type: String,
    required: [true, "note is required"],
    trim: true,
  },
  payment: {
    type: String,
    enum: ["Yes", "No", "Half"],
    default: "No",
    trim: true,
  },
  isProductReady: {
    type: String,
    enum: ["Yes", "No"],
    default: "No",
    trim: true,
  },
  isCouriered: {
    type: String,
    enum: ["Yes", "No"],
    default: "No",
    trim: true,
  },
  isProductReceivedByCustomer: {
    type: String,
    enum: ["Yes", "No"],
    default: "No",
    trim: true,
  },
});

module.exports = mongoose.model("Customer", customerSchema);
// name:string,
// contactNumber:number,
// address:string,
// payment:enum:[yes,no,half],
// isProductReady:enum:[yes,no],
// note:string,
// isCouriered:enum:[yes,no],
// isProductReceivedByCustomer:enum:[yes,no]
