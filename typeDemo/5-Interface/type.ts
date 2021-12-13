let namet = (first, last) => {
    console.log(first+last);
}
namet("hii","byy");

let namess = (first:string, last:string) => {
    console.log(first+last);
}
// namess(12,"hii")    error
namess("gg","ff")

let sou = (details: {firstName:string, lastName: string, age: number}) => {
    console.log(details.firstName);
    console.log(details.lastName);
    console.log(details.age);
}

sou({
    firstName : "Sourav",
    lastName : "Kumar",
    age : 21
})

//INTERFAC 

interface Persondet{
    firstName:string, 
    lastName: string,
    age: number
}

let sou1 = (details: Persondet) => {
    console.log(details.firstName);
    console.log(details.lastName);
    console.log(details.age);
}

sou1({
    firstName : "SOURAV",
    lastName : "KUMAR",
    age : 21
})
