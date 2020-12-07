
const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
    updateName(skydiving){
            this.hobby = skydiving;
            
        }
    
    
  };
  user.mood = 'happy';
  user.premium = false;
  const keys = Object.keys(user);
  for (const key of keys){
    console.log(key);
  }
  console.log (user);updateName ();