
const countProps = function(obj) {  

  let totalKeys = 0;
   const keys = Object.keys(obj);  
    
    for (const key of keys){
        totalKeys = keys.length;        
    }    
    return totalKeys;    

  };
  
  console.log(countProps({})); 
  
  console.log(countProps({ name: 'Mango', age: 2})); 
  
  console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); 
