const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];
  
  const calculateTotalPrice = function(allProdcuts, productName) {   
    
    for (const product of allProdcuts){
      const {name, price, quantity} = product;    
      if(product.name === productName ){
        const totalPrice = (product.price * product.quantity);          
        return totalPrice;
      }    
    }  
  }
  
  

  console.log(calculateTotalPrice(products, 'Радар')); 
  
  console.log(calculateTotalPrice(products, 'Дроид')); 