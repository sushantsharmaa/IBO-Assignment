/* PROBLEM STATEMENT:

2. You need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]*/

const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];

const getUniquePrducts = [
  ...listOfProducts
    .reduce((map, current) => {
      const { productName } = current;
      const grouped = map.get(productName);
      if (!grouped) {
        map.set(productName, { ...current });
      } else {
        map.set(productName, {
          ...grouped,
          quantity: grouped.quantity + current.quantity,
        });
      }
      return map;
    }, new Map())
    .values(),
];

console.log(getUniquePrducts);
