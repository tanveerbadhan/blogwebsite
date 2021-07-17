var a=0;
function openphonenavbar()
{   var A=document.getElementsByClassName("phone")[0];
    
    if(a==0)
    {A.style.display="block";
    a=1;
    }
    else
    {A.style.display="none";
    a=0;
    }
}
function closephonenavbar()
{
    document.getElementsByClassName("phone")[0].style.display="none";
    a=0;
}



const getcurrentdate = ()=>{

let weekday = new Array(7);
weekday[0]="Sun";
weekday[1]="Mon";
weekday[2]="Tues";
weekday[3]="Wed";
weekday[4]="Thrus";
weekday[5]="Fri";
weekday[6]="Sat";

var currenttime = new Date();
var days = weekday[currenttime.getDay()];
var date = currenttime.getDate();
var month = currenttime.getMonth()+1;
var year = currenttime.getFullYear();
const day = document.getElementById("day");

day.innerText = `${days}/${date}/${month}/${year}`;
}


getcurrentdate();