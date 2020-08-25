var sex=document.querySelector("#sex");
var inch = document.querySelector("#inch");
var weight = document.querySelector("#weight");
var age = document.querySelector("#age");
var activity=document.querySelector("#selectActivity");
var calculate=document.querySelector("#calculate");

    calculate.onclick=function(){
        if(sex.value=="male"){
         var bmrCalc=(65+(6.23*weight.value)+(12.7*inch.value)-(6.8*age.value))/100;
         var result=bmrCalc*Number(activity.value);
         document.getElementById("resultText").innerHTML=result.toFixed(2);
        }

        else if(sex.value=="female"){
         var bmrCalc=(655+(4.35*weight.value)+(4.7*inch.value)-(4.7*age.value))/100;
         var result=bmrCalc*Number(activity.value);
         document.getElementById("resultText").innerHTML=result.toFixed(2);
        }
	}