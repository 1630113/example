function ready() {

    const total = 5;
    let score = 0;
    const res = document.querySelector('.result');



    //get the data
    const q1 = document.forms['quiz']["q1"].value;

    const q2 = document.forms['quiz']['q2'].value;

    const q3 = document.forms['quiz']['q3'].value;
    const q4 = document.forms['quiz']['q4'].value;
    const q5 = document.forms['quiz']['q5'].value;
    const Fa = document.querySelector('.Fa');
    // const Fa = document.querySelector('.Fa');
    // console.log(fa);

    //validation
    for (i = 1; i <= total; i++) {
        if (eval('q' + i) == null || eval('q' + i) == '') {
            alert("you have missed the question" + i);
            return false;

        }

    }
    //set answer
    const ans = ['a', 'a', 'a', 'a', 'd'];
    for (i = 1; i <= total; i++) {
        if (eval('q' + i) == ans[i - 1]) {
            score++;
        }

    }
    alert(score);
    Fa.innerHTML = score;
    return false;
}



//set minutes 
var mins = 90;

//calculate the seconds 
var secs = mins * 60;

//countdown function is evoked when page is loaded 

function countdown() {


    setTimeout('Decrement()', 1000);
}

//Decrement function decrement the value. 
function Decrement() {
    if (document.getElementById) {
        minutes = document.getElementById("minutes");
        seconds = document.getElementById("seconds");

        //if less than a minute remaining 
        //Display only seconds value. 
        if (seconds < 59) {
            seconds.value = secs;
        }

        //Display both minutes and seconds 
        //getminutes and getseconds is used to 
        //get minutes and seconds 
        else {
            minutes.value = getminutes();
            seconds.value = getseconds();
        }
        //when less than a minute remaining 
        //colour of the minutes and seconds 
        //changes to red 
        if (mins < 1) {
            minutes.style.color = "red";
            seconds.style.color = "red";
        }
        //if seconds becomes zero, 
        //then page alert time up 
        if (mins < 0) {
            alert('time up');
            minutes.value = 0;
            seconds.value = 0;
        }
        //if seconds > 0 then seconds is decremented 
        else {
            secs--;
            setTimeout('Decrement()', 1000);
        }
    }
}

function getminutes() {
    //minutes is seconds divided by 60, rounded down 
    mins = Math.floor(secs / 60);
    return mins;
}

function getseconds() {
    //take minutes remaining (as seconds) away  
    //from total seconds remaining 
    return secs - Math.round(mins * 60);
}