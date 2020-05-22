document.addEventListener("DOMContentLoaded", () => {

    const btnStart = document.getElementById('btnStart');
    const banner__start = document.getElementById('banner__start');
    const questions = document.getElementById('questions');
    const banner__end = document.getElementById('banner__end');
    const btnResult = document.getElementById('formBtnResutl');
    const inputFild = document.getElementsByTagName('input');

    const resultFild = document.getElementById('resultFild');

    btnStart.addEventListener('click', () => {

        banner__start.style.display = "none";
        questions.style.display = "block";
    });

    btnResult.addEventListener('click', () => {

        questions.style.display = "none";
        banner__end.style.display = "block";

        let resultedInputs = document.querySelectorAll("input[type='radio']:checked");
        let result = 0;

        Array.prototype.map.call(resultedInputs, (el) => {
            result += parseInt(el.dataset.value);
        });

        let resultSchow = Math.ceil(result * 100 / 12);

        resultFild.innerHTML = 'Вы набрали ' + resultSchow + ' баллов';

    });


});

