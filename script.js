
function updatetime(){
    const today=new Date();
    const birthdaydate=new Date(`August 12 2024 00:00:00`);
    const rem=birthdaydate-today;
    var day=Math.floor(rem/1000/60/60/24);
    var hour=Math.floor((rem/1000/60/60)%24);
    var min=Math.floor((rem/1000/60)%60);
    var sec=Math.floor((rem/1000)%60);
    days.innerHTML=day<10?"0"+day:day;
    hours.innerHTML=hour<10?"0"+hour:hour;
    minutes.innerHTML=min<10?"0"+min:min;
    seconds.innerHTML=sec<10?"0"+sec:sec;
    if(day==0 && hour==0 && min==0){
        placeh.innerHTML="HAPPY BIRTHDAY THANGO";
    }
    }
    setInterval(updatetime,1000);