let a,r
function check(r){
  if (r==1){
    x="stone"
  }
    else if(r==2){
      x="paper"
    }
    else{
      x="scissor"
    }
  return x
}
function comp(a){
let b=Math.floor(Math.random() * (3) + 1)
  if((a==1 && b==3)||(a==2 && b==1)||(a==3 && b==2)){
    document.getElementById("Score").innerHTML=`You won as you choose ${check(a)} and computer choose ${check(b)}`
  }
  else if(a==b){
     document.getElementById("Score").innerHTML=`Draw as both choose ${check(a)}`
  }
  else {
     document.getElementById("Score").innerHTML=`You loss as you choose ${check(a)} and computer choose ${check(b)}`
  }
}
function stone(){
a=1
  comp(a)
}
function paper(){
a=2
comp(2)
}
function scissor(){
a=3
comp(3)
}






