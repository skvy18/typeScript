//Cohesive
class Souravk{
    firstname:string;
    lastname:string;
    age:number;

    constructor(firstnames:string, lastname:string, age:number){
        this.firstname = firstnames;
        this.lastname = lastname;
        this.age = age;
    }

    getFirstname(){
        console.log("My First Name is "+ this.firstname);
    }
    getLastname(){
        console.log("My last name is :"+ this.lastname);
    }
    getAge(){
        console.log("My age is :"+ this.age);
    }
}

let souObj = new Souravk("So","ku",12);
souObj.getFirstname();
souObj.getLastname();
souObj.getAge();


//souObj.firstname="Sourav";
//souObj.getFirstname();
//souObj.lastname="Kumar";
//souObj.getLastname();