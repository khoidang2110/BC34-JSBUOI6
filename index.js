
//Bài 1
document.getElementById("integer").onclick = function(){
//input
  var total = 0;
  var count = 0;
//process
  do{
    count++;
    total += count;
   
  }
  while (total<10000);
//output
  document.getElementById("showInteger").innerHTML = count;
};
//Bài 2
//input
document.getElementById("expression").onclick = function (){
  var numberX = document.getElementById("numberX").value*1;
  var numberN = document.getElementById("numberN").value*1;
var Sn=0;
//process 
for(i=0;i<=numberN;i++){
Sn+=Math.pow(i,2);

  };
  //output
  document.getElementById("showExpression").innerHTML = Sn;
}


//Bài 3
document.getElementById("factorial").onclick = function(){
  //input
  var number2 = document.getElementById("number2").value*1;
  var n=1;
  //process
  for(i=1;i<=number2;i++){
n*=i;
  }
  //output
  document.getElementById("showFactorial").innerHTML = n;
}

//Bài 4
document.getElementById("div").onclick = function(){
  //input
  var div="";
  var soChan=0;
  var soLe=0;
  //process
for(i=0;i<=10;i++){
  if(i%2==0){
  soChan=i;
div +="<p class='bg-danger'>Div chẵn "+ soChan +"</p>";
  }else{
    soLe=i;
    div +="<p class='bg-primary'>Div lẻ "+ soLe +"</p>";
  }
}
//output
document.getElementById("showDiv").innerHTML = div ;
}


//Bài 5
document.getElementById("element").onclick = function(){
  //input
var number3 = document.getElementById("number3").value*1;
//process
var number4="";

for(i=2;i<=number3;i++){

if(element(i)>0){
  number4+=element(i)*1 +" ";
}
}

//number4+=i +" ";

// number4=element(number3);

//output
document.getElementById("showElement").innerHTML =  number4 ;


}
function element(num){
  var elementNum="";
  var count="";
  if(num<2){
    elementNum= "";
  }
  else{
  for(var i=2;i<=Math.sqrt(num);i++){
    if(num%i==0){
      count++;
    }
  };
  if (count==0){
    elementNum=num;
  }else {
    elementNum= "";
  }
}
  return elementNum;
}