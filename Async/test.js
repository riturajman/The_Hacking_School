// const input = (toPrint) => {
//     setTimeout(()=>{
//         toPrint("I am tyring to implement callback functions.");
//     } ,1000)
// }

// input((print)=> {
// console.log(print)
// })

//************************************************************************************

const input = (print) => {
    setTimeout(()=>{
    print("I am tyring to implement callback functions.");
    } ,3000)
}

input((X)=> console.log(X))


//************************************************************************************

// let b = 1;
// function abc(callback){
//     setTimeout(function(){
//         b = 0
//             callback({ data : "Server Response"});
//     }, 500);
// }
// abc(function(x){
//     if (b === 0) {
//         console.log(x)
//     }
//     else{
//         console.log("Error");
//     }
// });
// console.log('Hi');

//************************************************************************************


// const abc = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let error = true;
//             if(!error){
//                 resolve({ data : "Server Response",
//                         fun : ()=> console.log("Not Funny")
//              });
//             } 
//             else{
//                 reject({err : "Error"});
//             }  
//      }, 2000);
//     })
// }
//     abc()
//         .then((data)=> {
//             console.log(data.data);
//             data.fun();
//         })
//         .catch((err)=> console.log(err.err));
// console.log('Hi');