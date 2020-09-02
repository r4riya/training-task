 let isAdmin=false
let user = {
    name: "John",
    years: 30,
    IsAdmin: isAdmin?true:false,
};

   let {name:firstname,years:age,IsAdmin}=user
   console.log(firstname,age,IsAdmin)
  //console.log(firstname,age,user.hasOwnProperty(isAdmin))