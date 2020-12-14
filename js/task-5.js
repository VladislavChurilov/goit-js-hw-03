const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];
  const getAllPropValues = function(arr, prop) {      
    let result = [];
    for(const product of arr){      
      result.push(product[prop]) 
      if (product[prop] === undefined){
        result = [];
      }      
    }
    return result;
  } 
  
  // const getAllPropValues = function(arr, prop){
  //   let result = [];
  //   // console.log(prop);
  //   // console.log(products[0]);
  //   // const obj = Object.keys(products);
  //   const a = Object.values(products);
    
  //   for (const key in a){
      
  //     // console.log(a[key]);
  //   const obj = Object.keys(a[key]);
    
  //   // console.log(obj[key]);
  //   // console.log(Object.values(obj[key]));
  //     if (obj[key] === prop){
  //     result.push(obj[key]);
  //     console.log(Object.values(obj));
  //     }
  //     // console.log(obj[prop]);
  //   }
  //   return result;
  // }

  // const getAllPropValues = function(arr, prop) {    
  //   // const names = [];
  //   // const prices = [];
  //   // const quantities = [];
  //   let result = [];
  //   for(const product of arr){    
  //     // console.log(product.name);
  //     // console.log(product[prop]); 
  //     result.push(product[prop]) 
      
  //     // if(prop === 'name'){
  //     //   names.push(product.name);
  //     //   result = names;          
  //     // }     
      
  //     // if(prop === 'price'){
  //     //   prices.push(product.price);
  //     //   result = prices;            
  //     // }      
  //     // if(prop === 'quantity'){
  //     //   quantities.push(product.quantity);
  //     //   result = quantities;           
  //     // }
  //   }
  //   return result;
  // }

  // const getAllPropValues = function(arr, prop) {      
  //   let result = [];
  //   for(const product of arr){      
  //     result.push(product[prop]) 
  //     if (product[prop] === undefined){
  //       result = [];
  //     }      
  //   }
  //   return result;
  // } 
  
  
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
console.log(getAllPropValues(products, 'category'));