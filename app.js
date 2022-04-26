// const employees =[
//     {name:"hamza",salary:90000},
//     {name:"ali",salary:4000},
//     {name:"arsal",salary:6000},
// ]

// const empNew=[]
// employees.forEach(item => {
//     item.salary += 1000
//     empNew.push(item)
// })

// console.log(empNew)
// const  fetchPost = async ()=>{
//     try{
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//         const result = await res.json()
//         console.log(result)
//     }catch(err){
//         console.log(err)
//     }
// }




// for(var i=0;i<=3;i++){
//     console.log(i)
// }
// console.log(i)




// const nam ="hamza"
// const age= 20
// const greeting="hello "+ name + " my age is "+ age

// const greeting = `Hello my name is ${nam} and my age is ${age}`
// console.log(greeting)

// const nam=false
// if(nam){
//     console.log("you are a noob")
// }else{
//     console.log("you are adult")
// }

// const token = ""//"abcd123###hd"
// let user = false
// if (token) {
//     user = true
// } else {
//     user = false
// }

// const user = token ? true : false
// console.log(user)
// const Name = "hamza"
// const emailVerified = false

// const userName = (Name && emailVerified) || "user"
// console.log(userName)





// Short =Circuiting

// const person = {
//     Name : "hamza",
//     age : 20,
//     details: {
//         Status: "coder"
//     }
// }

// // const {Name,age,details:{Status} }= person
// const {Name:UserName,age,details:{Status} }= person
// console.log(`My name is ${UserName}`)
// console.log(`My age is ${age}`)
// console.log(`Status is ${Status}`)





// sum()
// function sum(){
//     const x = 3
//     const y = 4
//     console.log(x+y)
// }

// const sum2 = function () {
//     const x = 3;
//     const y = 4;
//     console.log(x + y);
// }

// sum2();
// const sum2 = () => {
//   const x = 3;
//   const y = 4;
//   console.log(x + y);
// };
// sum2();




// const greet = (Name,age)=> `Hello ${Name}, My age is ${age}`;
// console.log(greet("Hamza",19));
// const greet = (person)=> {
//     const{Name,age} =person
//     return`Hello ${Name}, My age is ${age}`;
// }

// console.log(greet({Name: "Hamza",age: 19}));

// const greet = ({Name,age}) => ({result:`Hello ${Name}, My age is ${age}`})
// console.log(greet({Name:"Hmaza",age:11}).result);





// primitive vs Reference

// const obj1 ={
//     name: "hamza`",
//     Status:"coder`"
// }

// const obj2= obj1
// const obj2={
//     ...obj1,
// }

// obj1.name="arsal"
// console.log(obj2);
// let x = 4
// let y = 5
// x=10
// console.log(x,y)
// const arr=[10,20,30,40,50,60,]
// const arr2= arr
// arr.push(100)
// console.log(arr2)

// const user ={
//     id:1,
//     userName:"hamza",
//     password:"abcdef",
//     item:"book"
// }

// const cart ={
//     ...user,
//     item :"shoes",
// }
// console.log(cart)



// const numbers = [10,20,30,40]
// const numbers2 = [50,60,70,80]
// console.log(numbers[3])

// console.table(numbers)

// const n2=[...numbers,...numbers2]

// const [a,b,c,d]=numbers
// console.table(a,b,c,d)



// const fruits =["mango", "apple", "banana"]
// // for (let i = 0; i < fruits.length; i++) {
// //     // const element = fruits[i];
// //     console.log(fruits[i])  
// // }

// fruits.forEach((fruits)=>{
//     console.log(fruits)
// })

// const employees = [
//     {name: "hamza", salary:1000},
//     {name: "arsal", salary:2000},
//     {name: "ali", salary:3000}
// ]

// const empNew=[]
//  employees.forEach(items=>{
//      items.salary += 1000;
//      empNew.push(items)
//  })

// employees.map(item=>{
//     item.salary += 2000;
//     empNew.push(item)
// })
//  console.table(empNew)

//  const todos =[
//      {id:1, todo:"eat"},
//      {id:2, todo:"sleep"},
//      {id:3, todo:"code"}
//  ]

// //  const newTodos = todos.filter((item)=>{
// //      return item.todo != "code"
// //  })

// //  const newTodos = todos.filter((item)=>item.todo != "code")
// // console.table(newTodos)

// const removeTodos = (id)=>{
//     const newtodos = todos.filter((item)=>item.id != id)
//     console.table(newtodos)
// }
// removeTodos(1)




// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res)=>{
//     res.json().then((result)=>{console.table(result)})
// })

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res)=>{
//     return res.json()
// })
// .then((result)=>{
//     console.table(result)
// })

// function fetchPost(){
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res)=>{
//     return  res.json()
// })
// .then((result)=>{
//     console.table(result)
// })
// .catch((err)=>{
//     console.log(err)
// })
// }
// fetchPost()




// style console.log
// console.log('%cmy name is hamza and my status is coder',
// "color:orange;font-size:20px;background:blue")
// function Print(text) {
//     console.log(`%c ${text}`,"color:orange;font-size:20px;background:blue")
// }
// Print("hamza ")



// Class & Extends
// const bullet ={
//     color: 'red',
//     maxSpeed: 5000,
//     intro:()=>{
//         Print(`bullet bike in color is ${bullet.color} and max speed is ${bullet.maxSpeed}`)
//     }
// }
// bullet.intro()

// const Avenger ={
//     color: 'red',
//     maxSpeed: 6000,
//     intro:()=>{
//         Print(`Avenger bike in color is ${Avenger.color} and max speed is ${Avenger.maxSpeed}`)
//     }
// }
// // Avenger.intro()

// class Bike {
//     constructor(name,color , mspeed){
//         this.color = color;
//         this.maxSpeed =mspeed;
//         this.name= name;
//     }
//     intro(){
//         Print(`${this.name} in color is ${this.color} and max speed is ${this.maxSpeed}`)
//     }
// }
// class car extends Bike{
//     constructor(name,color,mspeed,airbag){
//         super(name,color, mspeed)
//         this.airbag = airbag
//     }

// }
// const honda = new car("foxy","green",200,true)
// const bullet = new Bike("Bullet","red",120)
// const Avenger = new Bike("Avenger","black",15)

// Print(bullet.intro())
// Print(Avenger.intro())
// Print(honda.airbag)

// console.log(fetch("https://reqres.in/api/users"))
// fetch("https://reqres.in/api/users")
// .then(res => console.log(res))

// fetch("https://reqres.in/api/users/5")
//   .then((res) => {
//       if (res.ok) {
//           console.log("success")
//       }else {
//           console.log("error")
//       }
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))


fetch("https://reqres.in/api/users",{
    method: "POST",
    headers:{
        "content-type": "application/json"
    },
    body: JSON.stringify({
        name:"user 1"
    })
}).then(res =>{
    return res .json()
})
.then(data => console.log(data))
.catch(err => console.log(err))





























































