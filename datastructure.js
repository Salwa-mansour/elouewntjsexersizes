// page 79 exersizes 
//1.1

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
console.log(myRange(15,5,2));
// console.log(sum(range(1,10)))
function arrSum(arr){
  sum = 0;
  for(i=0;i < arr.length;i++){

    sum+=arr[i];
  }
  return sum;
}
a=[1,2,3,4,5,6,7,8,9,10];
console.log(arrSum(a));