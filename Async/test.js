// const input = (toPrint) => {
//     setTimeout(()=>{
//         toPrint("I am tyring to implement callback functions.");
//     } ,1000)
// }

// input((print)=> {
// console.log(print)
// })

const input = () => {
    setTimeout(()=>{
        toPrint("I am tyring to implement callback functions.");
    } ,1000)
}

input()

function toPrint(x){
    console.log(x)
}