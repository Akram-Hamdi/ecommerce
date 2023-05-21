const Cart = require("../../model/Cart");

async function addToCart(req, res) {
  const { userId, productId, quantity } = req.body;

  try {
    // Check if the cart already exists for the user
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // Create a new cart if it doesn't exist
      cart = new Cart({ userId, items: [] });
      console.log('not cart ',cart)
    }

    // Check if the product already exists in the cart
    const existingItem = cart.items.find(
      (item) => item.productId === productId
    );

    if (existingItem) {
      // If the product exists, update the quantity
      existingItem.quantity += quantity;
    } else {
      // If the product doesn't exist, add a new item
      cart.items.push({ productId, quantity });
    }

    // Save the updated cart
    await cart.save();

    return res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = addToCart;
