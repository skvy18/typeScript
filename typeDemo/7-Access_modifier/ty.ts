//Access Modifier = public(by-default) protected(can't access outside of the class) private(can't access outside of the class)
class Souravk{


    constructor(private firstname:string, private lastname:string, private age:number){

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