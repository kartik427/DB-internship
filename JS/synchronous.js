//this is the synchronous call
// in this all the tasks are performed in a sequence


const fun2=()=>{
    
        console.log('fun2 is starting');
    
}

const fun1=()=>{
    console.log('fun1 is starting');//first this line excutes
    fun2();// then here we makes a function call it goes 
    //to the above decalared function and print the line
    console.log('fun1 is ending');//then this line excutes.
}
fun1();

//output - :
// fun1 is starting
// fun2 is starting
// fun1 is ending




//and here the synchronous implementation of this function
// here we use setTimteout function


const fun21=()=>{
    setTimeout(() =>{
        console.log('fun21 is starting');
    },3000);
}

        
const fun11=()=>{
    console.log('fun11 is starting');//first this line excutes
    fun21();//then this function get call
    console.log('fun11 is ending');// then immedaitely this line prints
//and after 3 seconds the above function's statement excutes.
}
fun11();


//output
//fun11 is starting
///fun11 is ending
//after 3 secnds this line excutes
//fun21 is starting

// all the statements are excuting on their own 
// no one is depend on each other 

