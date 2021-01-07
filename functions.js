  function less(x,y){
    if(x<y)
    return x;
  
    else if (x == y)
    return "Equals";
    else
    return y;
}
 less(12,24);
 const lessthan=function(x,y){
     if(x<y)
     return x;
     else
     return y;
 }
//console.log(less(6,8));

////////// Bean counting exircise page 56 /////////////
function countBs(bString){
    let count=0;
      for(i=0;i<=bString.length-1;i++){
        if(bString[i] == "B"){
            count+=1;

        }
      }
      return count;
}

//console.log(countBs('BddddddddB'));

////////////// letter counting same exircise //////////

function countLetters(bString,letter){
    let count=0;
      for(i=0;i<=bString.length-1;i++){
        if(bString[i] == letter){
            count+=1;

        }
      }
      return count;
}

console.log(countLetters('BddddddddB','d'));