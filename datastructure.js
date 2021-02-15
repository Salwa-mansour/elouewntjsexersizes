// page 79 exersizes 
//1.1

function myRange(x,y){
 var rangeArr=[];
  let  range=y-x;
if( range<0){
    range =range * -1 ;
}
   
    for(i=0;i<=range;i++){
      rangeArr.push(i+x);
    //   if(y>x){
    //   i++;
    // }
    //   else{
    //   i--;
    // }
    // console.log( Array.isArray(rangeArr));
   
}
 return rangeArr;
}
console.log(myRange(15,5));
