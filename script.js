function getHistory(){
    return document.getElementById("history-value").innerHTML;
}
function printHistory(number){
document.getElementById("history-value").innerHTML=number;
}
function getOutput(){
     return document.getElementById("result-value").innerHTML;
}
function PrintOutput(number){
     if(number==""){
          document.getElementById("result-value").innerHTML=number;
     }else{
          document.getElementById("result-value").innerHTML=getFormatedNumber(number);
     }
     
}
function getFormatedNumber(number){
     if(number=="-"){
          return "";
     }
     var v=Number(number);
     var value=v.toLocaleString('en');
     return value;
}
function reverseFormatedNumber(num){
    return Number(num.replace(/,/g,''));
}

var operator=document.getElementsByClassName('operator');
for(var i=0;i<operator.length;i++){
     operator[i].addEventListener('click',function(){
         if(this.id=="clear"){
              printHistory("");
              PrintOutput("");
         }else if(this.id=="backspace"){
              var output=reverseFormatedNumber(getOutput()).toString();
              if(output){
               output=output.substr(0,output.length-1);
               PrintOutput(output);
              }
         }
         else{
              var output=getOutput()
              var history=getHistory();
              if(output=="" && history!=""){
               if(isNaN(history[history.length-1])){
                    history=history.substr(0,history.length-1);
               }
              }
              if(output!="" || history!=""){
               output= output==""?
               output: reverseFormatedNumber(output);
               history+=output;
               if(this.id=="="){
                    var res=eval(history);
                    PrintOutput(res);
                    printHistory("");
               }else{
                    history=history+this.id;
                    printHistory(history);
                    PrintOutput("");
               }
              }
         }
     })
}
var numbers=document.getElementsByClassName('number');
for(var i=0;i<numbers.length;i++){
     numbers[i].addEventListener('click',function(){
         var output=reverseFormatedNumber(getOutput());
         if(output!=NaN){
              output+=this.id;
              PrintOutput(output);
         }
     })
}
