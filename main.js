
function ready() {

    const total = 3;
    let score = 0;
    const res = document.querySelector('.result');



    //get the data
    const q1 = document.forms['quiz']["q1"].value;

    const q2 = document.forms['quiz']['q2'].value;

    const q3 = document.forms['quiz']['q3'].value;
    const Fa = document.querySelector('.Fa');
    // console.log(fa);

    //validation
    for (i = 1; i <= total; i++) {
        if (eval('q' + i) == null || eval('q' + i) == '') {
            alert("you have missed the question" + i);
            return false;

        }

    }
    //set answer
    const ans = ['a', 'b', 'b'];
    for (i = 1; i <= total; i++) {
        if (eval('q' + i) == ans[i - 1]) {
            score++;
        }

    }
    alert(score);
    Fa.innerHTML = score;
    return false;
}