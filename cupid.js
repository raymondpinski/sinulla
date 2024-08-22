   const user = {
       name: "John",
       address: {
           street: "123 Main St",
           city: "Anytown"
       }
   };

   const { name, address: { street, city } } = user;

   console.log(name);   // Output: "John"
   console.log(street); // Output: "123 Main St"
   console.log(city);   // Output: "Anytown"
   