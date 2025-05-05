let students = ["Ali", "Sara", "Ahmed", "Lana", "Omar", "Noor"]

let nameA = students.filter((element) => element.charAt(0) === "A")
console.log(nameA)

console.log("===========")

let name4 = students.filter((element) => element.length > 4)
console.log(name4)

console.log("===========")

let nameUpper = students.map((element) => element.toUpperCase())
console.log(nameUpper)

console.log("===========")

let nameR = students.find((element) => element.includes("r"))
console.log(nameR)

console.log("===========")

let names = students.sort()
console.log(names)

console.log("===========")

let nameOmar = students.find((element) => element.includes("Omar"))
console.log(nameOmar)

console.log("===========")

let allnames = students.reduce((total, element) => total + element.length, 0)
console.log(allnames)

console.log("===========")

let evenNames = students.filter((element) => element.length % 2 == 0)
console.log(evenNames)

console.log("===========")

let nameRev = students.map((element) => element.split("").reverse().join(""))
console.log(nameRev)

console.log("===========")

let deleteO = students.filter(
  (element) => !element.toLocaleLowerCase().includes("o")
)
console.log(deleteO)

console.log("===========")

let studentsGrade = [
  [ {name :"Ali"}, {grade : [85, 99, 79]}],
  [{name: "Sara"}, {grade: [88, 78, 97]}],
  [{name : "Ahmed"}, {grade :[98, 78, 98]}],
  [{name: "Lana"}, {grade:[90, 89, 98]}],
  [{name: "Omar"}, {grade:[89, 98, 79]}],
  [{name: "Noor"}, {grade:[78, 98, 89]}],
]

/* let calculateGrade = studentsGrade.map(element=>
    element.grade.reduce((total, element) => total + element.length, 0)/ grade.length

) 
console.log(calculateGrade); */

