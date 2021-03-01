// page 79 exersizes 
////////////////////1.1----------------------------------------------------

function myRange(x,y,step=1){
 var rangeArr=[];
  let  range=y-x;
if( range<0){
    range =range * -1 ;
}
   
    for(i=0;i<=range;i=i+step){
      rangeArr.push(i+x);
    //   if(y>x){
    //   i++;
    // }
    //   else{
    //   i--;
    // }
    // console.log( Array.isArray(rangeArr));
   //**negative step is not working */
}
 return rangeArr;
}
// console.log(myRange(15,5,2));
// console.log(sum(range(1,10)))
function arrSum(arr){
  sum = 0;
  for(i=0;i < arr.length;i++){

    sum+=arr[i];
  }
  return sum;
}
a=[1,2,3,4,5,6,7,8,9,10];
b=[1,2,3,4,5,6,7,8,9];
// console.log(a.length);
 console.log(arrSum(a));

/////////////////// 2nd exersize----------------------------------------------

function revArr1(arr){

 let r=[];
  let len= arr.length;
  for(i=0;i<len;i++){
  
     r.push(arr.pop());
  }

  return r ;
}
// console.log(revArr1(a));
///////
function revArr2(arr){
  let x;
  for(i=1 ;i< arr.length;i++){
    // for(k= Math.floor(arr.length/2);k>0;k--){
      x= arr[i];
      console.log(arr.length)
      console.log(i)
      arr[i]=arr[arr.length-2];
      arr[arr.length-i]=x;
    }
  // }
  return arr;
}
// console.log(revArr2(a));
// problem not sovled
function reverseArrayInPlace(arr){
  let middle= Math.floor(arr.length / 2);
  let x;
  for(i=0;i<middle;i++){
    x=arr[i];
    arr.shift();
    arr.unshift(arr.pop());
    arr.push(x);
  }
  return arr;
}
// console.log(reverseArrayInPlace(b)) ;
/////////////////// 3nd exersize----------------------------------------------
///////3.0
let c=['dogs','cats','chikens']

function arryToList(arry){
   opj={};
   for(i=0;i<arry.length;i++){
   opj[i]=arry[i];
  }
  return opj;
}
console.log(arryToList(c));
let myL
ist =arryToList(c);
///////////////////3.1
function addToList(list,elemnt){

}
