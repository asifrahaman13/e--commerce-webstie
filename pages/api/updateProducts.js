import Product from "../../models/Product";
import connectDb from "../../middleware/connection";

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let p = await Product.findByIdAndUpdate(req.body[i]._id,req.body[i]);
      await p.save();
    }
   
    res.send("success")
  } else {
    res.status(404).json({ error: "This method is not allowed" });
  }

};

export default connectDb(handler);
