const Billing = require("../models/Billing");

exports.createBill = async (req, res) => {
  try {

    const bill = await Billing.create({
      customerName: req.body.customerName,
      amount: req.body.amount,
      status: req.body.status,
      createdBy: req.user.id
    });

    res.status(201).json(bill);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.getBills = async (req, res) => {

  try {

    const bills = await Billing.find();

    res.json(bills);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};