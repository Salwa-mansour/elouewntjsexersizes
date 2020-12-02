
// console.log("hello");
// firest exersize 
// let line;
// for(line="#";line.length<8;line+="#")
// {
//     console.log(line);
// }

// let num ;
// for(num=1 ;num < 101;num++){
//     if( num % 3 == 0 && num %5 == 0)
//    console.log("Fizzbizz");
//    else if (num %3 == 0)
//    console.log("Fizz");
//    else if (num %5 == 0)
//    console.log("Bizz");
//    else
//    console.log(num);
// }

// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
  
//   }
let chess="";
for(let i=0; i<=8 ;i++){
    for(let j=0 ; j<=8 ; j++){
        if(i%2!=0){
            chess+=" #"
        }
        if(i%2==0){
            chess+="# "
        }
        
    }
    // console.log("\n")
    console.log(chess)
    chess="";
}