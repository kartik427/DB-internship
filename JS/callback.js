// const funA= ()=>{
//     console.log("welcomwe funA");
// } 
// const funB = ()=>{
//     console.log("welcom funB");
// }

// funA();
// funB();



//example 2
// const perOne=(friend,callfrnd)=>{
//     console.log(`Iam busy right Now.Iam talking to ${
//         friend}.Iwill call you back.`);
//     callfrnd();
// }
// const perTwo=()=>{
//     console.log('Hey whats up.Icall back you dekha.')
// }
// perOne("kartik",perTwo);


const getr=()=>{
setTimeout(()=>{
    // console.log("object");
    let roll=[1,2,3,4,5];
    console.log(roll);
    setTimeout((roll)=>{

        const bio={
            name:'kartik',
            age:24
        }
        console.log(`my name ${roll} is ${bio.name} and age is ${bio.age}`);
    },200,roll[1]);
},2000)
}
getr();