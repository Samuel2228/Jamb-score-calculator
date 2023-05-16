let title = document.getElementsByClassName('title');
let check = document.getElementById('check');
let pTag = document.getElementById('paragraph');
let body = document.getElementById('body');


check.addEventListener('click', function() {
    let maths = title[0].value;
    let eng = title[1].value;
    let igbo = title[2].value;
    let civic = title[3].value;
    let totalScore = Number(maths) + Number(eng) + Number(igbo) + Number(civic);

    // pTag.textContent = 'Your Jamb Score Is ' + totalScore + ' Good Job.';

    if (totalScore >= 200) {
        body.style.backgroundColor = 'blue'
        check.style.backgroundColor ='blue';
        check.style.color = 'white';
        pTag.textContent = 'Nice Accolade ! Your (JAMB) Score Is ' + totalScore + ' You Did Well.';
        pTag.style.color = 'white';
    }

    else if (totalScore >= 100 && totalScore < 200) {
        body.style.backgroundColor = 'green';
        check.style.backgroundColor = 'green';
        check.style.color = 'white';
        pTag.textContent = 'Good Job, Your (JAMB) Score Is  ' + totalScore + ' You Did Well.';
        pTag.style.color = 'white';
    }

    else {
        body.style.backgroundColor = 'red';
        check.style.backgroundColor = 'red';
        check.style.color = 'white';
        pTag.textContent = 'You Failed, Your (JAMB) Score Is  ' + totalScore;
        pTag.style.color = 'white';
    }
})



