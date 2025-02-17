const Order = require("./order.model")
const createAorder = async (req, res) => {
    try {
      //console.log("Formatted Request Body:", JSON.stringify(req.body, null, 2)); // Debugging log
      const newOrder = new Order(req.body);
      await newOrder.save();
      res.status(201).json(newOrder);
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports={ createAorder ,};