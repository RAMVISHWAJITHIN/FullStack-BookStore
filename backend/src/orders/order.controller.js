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
  const getOrderByEmail=async(req,res)=>{
    try{
    const {email}=req.params;
    const orders=await Order.find({email:email}).sort({createdAt:-1})
    if(!orders){
      return res.status(404).json({message:"order not found"})
    }
    res.status(200).json(orders)

    }
    catch(error){
      console.error("Error fetching order:", error);
      res.status(400).json({ error: error.message });
    }
  }
  
  module.exports={ createAorder ,getOrderByEmail};