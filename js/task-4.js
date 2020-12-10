const countTotalSalary = function(employees) {
    const values = Object.values(employees);
    // console.log(employees);
    let total = 0;
    for(const salary of values){
        // console.log(values)
        total += salary;
        
    }
    return total;
  };
  
  
  console.log(countTotalSalary({}));

  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
  );
  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
  );