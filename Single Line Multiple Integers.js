// Single Line Multiple Integers

function addOneToEach(nums){
    for(i=0; i<nums.length; i++){
        console.log(nums[i]+1);
    }
}




function runProgram(input) {
    input = input.trim().split(" ").map(Number);
    // console.log(input);    
    addOneToEach(input);
 }
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}