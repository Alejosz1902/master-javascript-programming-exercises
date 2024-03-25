let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];

function getLaceNameDataForShoes(inventory) {
    // your code here
    let result = [];

    for (let designer of inventory) {
      let shoes = designer.shoes;

      for (let shoe of shoes) {
        let name = shoe.name;
  
        if (name.includes('lace') || name.includes('laced')) {
          let words = name.split(' ');
  
          let targetWordIndex = words.findIndex(word => word.includes('lace') || word.includes('laced'));
  
          result.push({
            nameWords: words,
            targetWordIndex: targetWordIndex
          });
        }
      }
    }
  
    return result;
}

console.log(getLaceNameDataForShoes(currentInventory));
