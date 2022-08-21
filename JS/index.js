console.log('ok');
// optional chaining
// let obj  ={
    // na: "kartik"
// };
// console.log(obj?.na?.l);
// end op

// maps

// const mmp = new Map();
// const k1 = 'my',k2={name:'ok'},k3=function(){};

// mmp.set(k1,'strigg');
// mmp.set(k2,'strigggggggggg');
// mmp.set(k3,'strigggg');
// console.log(mmp);
// let v1= mmp.get(k3)
// console.log(v1);

// // console.log(mmp.size);
//  for(let [key,value] of mmp)
//  {
//     console.log(key,value);
//  }
   

//to get key only
//  for(let key of mmp.keys())
//  {
//     console.log('kaey is',key);
//  }
//  //to get value only
//  for(let value of mmp.values())
//  {
//     console.log('val is',value);
//  }

//  mmp.forEach((value,key)=>{
//     console.log('kaey is',key);
//     console.log('val is',value);
//  })

// converting map to array
//  let mary=Array.from(mmp);
//  console.log('map to array',mary);

//  // converting map keys to array 
//  let maryy=Array.from(mmp.keys());
//  console.log('map to array',maryy);

//  // converting map values to array 
//  let maryyy=Array.from(mmp.values());
//  console.log('map to array',maryyy);

 // SETS in js

//  const mset = new Set();
// console.log(mset);

// mset.add('this');
// mset.add('my name');
// mset.add(24);
// console.log(mset);

// let mset1= new Set([1,23,'this',false,{a:4,b:8}]);
// console.log('new set : ',mset1);

// console.log(mset.size);
// console.log(mset.has(274));

// console.log('before removal',mset.has('this'));
// mset.delete(24);
// console.log(mset.has(24));

//iterating a set
// for(let item of mset){
//     console.log('item is :',item);
// }

// // mset.forEach((item)=>{
// //     console.log('item is :',item);
// // })
// const cars = ["Saab", "Volvo", "BMW","BMW",24];
// console.log(cars)


// const mset1 = new Set();

// for(let item of cars){
//    mset1.add(item);
// }
// // let sst=Array.from(cars);
//  console.log('map to array',mset1);

// iterators in JS
//  const cars = ["Saab", "Volvo","BMW",24];
//  console.log(cars);

//  //making iterators
//  function fruits(val)
//  {
//     let nest =0;
//     return {
//         next:function(){
//             if(nest<val.length) {
//                 return{
//                     value:val[nest++],
//                     done:false
//                 }
//             }
//                 else
//                 {
//                     return{
//                         done : true
//                     }
//                 }
//             }
//         }
//     }
//     const ok = fruits(cars)
//     console.log(ok.next().value);
//     console.log(ok.next().value);
//     console.log(ok.next().value);
//     console.log(ok.next().value);
    // console.log(ok.next().value);  m


// generators in JS

// function* numberGen(){
//     let i=0;
//     // yield 1;
//     // yield 2;
//     // yield 3;
//     // yield 4;
//     while(true)
//     {
//      yield i++   
//     }
// }
//  const gen = numberGen();
//  let c=0;

//  while(c!=100+1)
// {
//  console.log(gen.next());
// c++;
// }


//asybchronous programming and synchronous programing


// setTimeout(()=>{
//     for(let i=0;i<40;i++)
//     {
//        console.log(i);
//     }
// },100)
 
//  console.log("done");
 
//promimses
// resolve
// reject
// pending


// function func1(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{I
//             const error=true;
//             if(error){
//     })
// })
//                 console.log('Function:Your promise has been resolved')
//                 resolve();
//             }
//             else{
//                 console.log('Function:Your promise has not been resolved')
//                 reject('Sorry not fulfilled');
//             }
//         },2000);
// func1().then(function(){
//     console.log("Harry:Thanks for resolving")
// }).catch(function(error){
//     console.log("Harry:Very bad bro.Reason:"+error)
// let n=1;
// for(let i=0;i<100;i++)
// {
// setTimeout(()=>{
//     console.log("kartik");
// },2000)
// }