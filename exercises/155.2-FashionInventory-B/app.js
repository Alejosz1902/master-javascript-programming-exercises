let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 },
    ],
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 },
    ],
  },
];

function renderAverageCostPerDesigner(inventory) {
    // your code here
    let result = [];

    for (let designer of inventory) {
    let designerName = designer.name;
    let shoes = designer.shoes;
    let totalCost = 0;

    for (let shoe of shoes) {
      totalCost += shoe.price;
    }

    let averagePrice = totalCost / shoes.length;

    result.push({ name: designerName, averagePrice: Math.round(averagePrice) });
  }

  return result;
}

console.log(renderAverageCostPerDesigner(currentInventory));
