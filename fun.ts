  function add(num1,num2:number){
      return num1+num2;
  }
  console.log(add(5,10));

  function fullname(person:{firstname:string,lastname:string})
  {
    console.log(`${person.firstname} ${person.lastname}`);

  }
  let p={
      firstname:'srijan',
      lastname:'erroju'

  };
  fullname(p);

  /* interface person{
      firstname:string;
      lastname:string;
  }*/
  function fullname1(person:person)
  {
    console.log(`${person.firstname} ${person.lastname}`);

  }
  fullname1(p);