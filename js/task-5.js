const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];
  
  const getAllPropValues = function(arr, prop) {    
    const names = [];
    const prices = [];
    const quantities = [];
    let result = [];
    for(const product of arr){      
      if(prop === 'name'){
        names.push(product.name);
        result = names;          
      }     
      
      if(prop === 'price'){
        prices.push(product.price);
        result = prices;            
      }      
      if(prop === 'quantity'){
        quantities.push(product.quantity);
        result = quantities;           
      }
    }
    return result;
  }

    
  
  
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
console.log(getAllPropValues(products, 'category'));