const pass = document.querySelector('.pass');
const e1 = document.querySelector('.err1');
const e2 = document.querySelector('.err2');
const e3 = document.querySelector('.err3');
const e4 = document.querySelector('.err4');



pass.addEventListener('input', function (e) {
    e.preventDefault();
    // console.log(pass.value);
    if (pass.value.length >= 8) {
        e1.style.color = "green";
    }
    else {
        e1.style.color = "black";
    }
    if (/\d/g.test(pass.value) == true) {
        e2.style.color = "green";
    }
    else {
        e2.style.color = "black";
    }
    if (/[A-Z]/g.test(pass.value) == true || /[a-z]/g.test(pass.value) == true) {
        e3.style.color = "green";
    }
    else {
        e3.style.color = "black";
    }
    if (/[!-*]/g.test(pass.value) == true) {
        e4.style.color = "green";
    }
    else {
        e4.style.color = "black";
    }
});
