const filteredOptions = [
  // Sizes
  ["XS", "S", "M", "L", "XL", "XXL"],
  // Colors
  [
    "white",
    "black",
    "navy-blue",
    "charcoal-mel",
    "grey mel",
    "red mel",
    "ink blue mel",
    "light denim mel",
    "navy",
    "zone red",
    "mid grey mel",
  ],
  // Categories
  [
    { name: "innerwear", id: 3 },
    { name: "outerwear", id: 4 },
    { name: "vest", id: 5 },
    { name: "undershirt", id: 30 },
    { name: "brief", id: 15 },
    { name: "trunk", id: 20 },
    { name: "boxer", id: 25 },
    { name: "tank top", id: 31 },
    { name: "t-shirt", id: 10 },
    { name: "jacket", id: 32 },
    { name: "sweatshirt", id: 33 },
    { name: "shorts", id: 34 },
    { name: "bermuda", id: 35 },
    { name: "track-pant", id: 36 },
    { name: "pyjama", id: 37 },
  ],
  // Price
  [
    { name: "₹0 - ₹199", priceLower: 0, priceUpper: 199 },
    { name: "₹200 - ₹499", priceLower: 200, priceUpper: 499 },
    { name: "₹500 - ₹1000", priceLower: 500, priceUpper: 1000 },
    { name: "Above ₹1000", priceLower: 1000, priceUpper: 10000 },
  ],
  // Discount
  ["Above 50%", "40% - 50%", "30% - 20%", "Below 20%"],
];

export default filteredOptions;
