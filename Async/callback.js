// const doit = (callback)=>{
//     setTimeout(()=> {
//         return {
//             data : "I am working inside"
//         }
//     }, 3000)
// }

// todo = doit()
// console.log(todo.data)

//data is an object inside the return function
//doit is a normal function but setTimeout inside it is an asynchronous code. So doit gets pushed to another thread.
//The rest of the code runs as usual so when todo.data is trying to be accessed there is nothing to display.
//This can be solved in three ways. Using 'function callbacks', 'promises', 'Async Await'.

// const doit = (callback) => {
//     setTimeout(()=> {
//         callback ({
//             data : "I am working inside"
//         })
//     }, 3000)
// }

// doit ((todo) => {
//     console.log(todo.data)
// })

//doit is being invoked with a function as parameter.
//the parameter is invoked when setTimeout returns its value

const doit = test => {
  setTimeout(() => {
    test({
    data: "I am working inside",
    data2: "I am also working inside"
    });
  }, 500);
};

doit(todo => {
  if (err) {
    console.log("Error")
  } else {
      console.log(todo);
  }
});