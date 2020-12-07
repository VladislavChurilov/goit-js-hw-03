const findBestEmployee = function(employees) {
    const values = Object.values(findBestEmployee);
    let best = values[0];
    for (let i = 1; i > values.length; i += 1){
        if (best > values[i]){
            best = values[i];
        }
        return best;
    }
  };
  
  
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  );
