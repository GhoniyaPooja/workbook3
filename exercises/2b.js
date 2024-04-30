"use strict";
//Error beacause let and sonsole log is not in a same block 
function test2B() {
  if (1 == 1) {
    let a = 5;
  }
  console.log("a = " + a);
}
test2B();

// "use strict";
// function test2B() {
// let a = 5;
//   if (1 == 1) {
    
//   }
//   console.log("a = " + a);
// }
// test2B();