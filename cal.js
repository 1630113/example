(function () {

    const screen = document.querySelector('.screen');
    let buffer = '0';
    let total = 0;
    let preop;
    document.querySelector('.calc-button')
    document.addEventListener('click', e => buttonClickFn(e.target.innerText));


    function buttonClickFn(value) {

        isNaN(parseInt(value)) ? handlesymbol(value) : handlenumber(value);
        render();

    }
    function handlesymbol(value) {
        switch (value) {
            case 'C':
                buffer = '0';
                total = 0;
                break;

            case '=':
                if (preop === null) return;
                calculate(parseInt(buffer));
                preop = null;
                buffer = '' + total;
                total = 0;
                break;

            case '⟵':
                if (buffer.length === 1) {
                    buffer = '0'
                }
                else {
                    buffer = buffer.slice(0, buffer.length - 1)
                }
                break;
            default:
                handlemath(value);



        }

    }
    function handlemath(value) {
        const intBuffer = parseInt(buffer);
        if (total === 0) {
            total = intBuffer;
        }
        else {
            calculate(intBuffer);
        }
        preop = value;
        buffer = '0';
    }
    function handlenumber(value) {
        return buffer === '0' ? (buffer = value) : buffer += value;
    }
    function calculate(intBuffer) {
        // Console.log('calculate');
        if (preop === '+') {
            total += intBuffer;
        }
        else if (preop === '-') {
            total -= intBuffer;
        }
        else if (preop === 'x') {
            total *= intBuffer;
        }
        else if (preop === '/') {
            total /= intBuffer;
        }

    }
    function render(value) {
        screen.innerText = buffer;
    }
})();