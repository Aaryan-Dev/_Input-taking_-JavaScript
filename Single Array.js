// Single Array

function addOneToEach(size, arr){
    bag = "";
    for(i=0; i<size; i++){
       bag = bag + (arr[i]+1)+ " ";
    }
    console.log(bag);
}


function runProgram(input) {
    input = input.trim().split("\n");

    size = input[0];
    arr = input[1].trim().split(" ").map(Number);
    addOneToEach(size, arr);
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