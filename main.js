 character = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eyeColor: "brown"
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eyeColor: "blue"
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eyeColor: "brown"
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eyeColor: "black"
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eyeColor: "red"
    }
  ];

  //map
  let names = character.map(element=> 
    element.name
  ) 
  console.log(names);
  
  
  let heights = character.map(element=> 
    element.height
  ) 
  console.log(heights);
  console.log("==============");
//reduce

const totalHeight = character.reduce((total, element) =>
     total + element.height, 0);
console.log(totalHeight);

  console.log("==============");
//filter
  const short = character.filter(element => 
    element.height < 200);
console.log(short);

const male = character.filter(element => 
    element.gender === "male");
console.log(male);

console.log("==============");
//sort

const sortMass = character.sort((a, b) =>
     a.mass - b.mass);
console.log(sortMass);

const sortHeight = character.sort((a, b) => 
    a.height - b.height);
console.log(sortHeight);

console.log("==============");
//every
const Mass40 = character.every(element => 
    element.mass > 40);
console.log(Mass40);

const Height200 = character.every(element =>
     element.height < 200);
console.log(Height200);


console.log("==============");

//some
const BlueEyes = character.some(element => 
    element.eyeColor === "blue");
console.log(BlueEyes);

const Tall = character.some(element => 
    element.height > 210);
console.log( Tall);