//data
const $year = document.getElementById('year')
const $month = document.getElementById('month')
const $day = document.getElementById('day')
const $header = document.getElementById('header')
const $title = document.getElementById('title')
const $resetbutton = document.querySelector('.reset')
const timer = document.querySelector('timer')
const $monthtitle = document.getElementById("monthtitle")
const $yeartitle = document.getElementById("yeartitle")
const $daytitle = document.getElementById("daytitle")
const $maintitle = document.getElementById("maintitle")
const $inputtitle = document.getElementById("inputtitle")
let data = ''
let future = null
let id = 0

future = localStorage.getItem('future')
data = localStorage.getItem('data')

//start timer button
$header.innerHTML = `<button class="start" id="start">Start Timer</button>`;
start.style.visibility = "block"

init();

//months
$month.addEventListener('click', function formfunction() {
    function printDays() {
        if ($month.value == 'April ' || $month.value == 'June ' || $month.value == 'September ' || $month.value == 'November ') {
            let month30days = []
            for (let i = 1; i <= 30; i++) {
                month30days.push(`<option value = ${i} id = ${i}>${i}</option>`)
            }
            $day.innerHTML = month30days.join('')
        } else if ($month.value == 'February ') {
            let month28days = []

            for (let i = 1; i <= 28; i++) {
                month28days.push(`<option value = ${i} id = ${i}>${i}</option>`)
            }
            $day.innerHTML = month28days.join('')
        } else {
            let month31days = []
            for (let i = 1; i <= 31; i++) {
                month31days.push(`<option value = ${i} id = ${i}>${i}</option>`)
            }
            $day.innerHTML = month31days.join('')
        }
    }
    printDays()
})

start.style.visibility = "block"

//when user clicks start timer button
start.addEventListener("click", function () {
    data = document.getElementById('title').value;
    //hide start button after click
    start.style.visibility = "hidden";
    //display reset button
    $resetbutton.style.display = 'block'
    //reset button function
    $resetbutton.onclick = function() {
        resetTimerButton()
    }
    console.log(data)
    //hide everything on main page after click start timer button
    $year.style.display = 'none'
    $month.style.display = 'none'
    $day.style.display = 'none'
    $monthtitle.style.display = 'none'
    $daytitle.style.display = 'none'
    $yeartitle.style.display = 'none'
    $maintitle.style.display = 'none'
    $title.style.display = 'none'

    //if title has an input
    if (data != '') {

        //if date chosen is a date in the future
        if (Date.parse(`${$month.value}${$day.value}${$year.value}`) > new Date()) {

            //timer function
            id = setInterval(function() {
                timerFunction()
            })
            incrementTimer()
            //when date chosen is < current date
        } else {
            $header.innerHTML = 'Please enter a date in the future'
            $resetbutton.style.display = 'block'
        }

        //when no title input
    } else {
        $header.innerHTML = 'Please enter a title'
        $resetbutton.style.display = 'block'
    }
})

function timerFunction() {
                    //display reset button 
                    $resetbutton.style.display = 'block'
                    if (future === null) {
                        future = Date.parse(`${$month.value}${$day.value}${$year.value}`);
                    }
                    now = new Date();
                    diff = future - now;
                    //timer
                    days = Math.floor(diff / (1000 * 60 * 60 * 24));
                    hours = Math.floor(diff / (1000 * 60 * 60));
                    mins = Math.floor(diff / (1000 * 60));
                    secs = Math.floor(diff / 1000);
                    d = days;
                    h = hours - days * 24;
                    m = mins - hours * 60;
                    s = secs - mins * 60;
                    document.getElementById("timer")
                        .innerHTML =
                        '<div>' + d + '<span>days</span></div>' +
                        '<div>' + h + '<span>hours</span></div>' +
                        '<div>' + m + '<span>minutes</span></div>' +
                        '<div>' + s + '<span>seconds</span></div>';

console.log(d)

                        if (s === 0) {
                            if (h === 0) {
                                if (d === 0) {
                                    if (m === 0) {
                                    timer.innerHTML = 'Timer Is Finished!'
                                    }
                                }
                            }
                        }

                        localStorage.setItem('future', future)
                        console.log(localStorage.getItem('future'))
            
}

function incrementTimer() {
    console.log(data)
    $inputtitle.innerHTML += (data)
    localStorage.setItem('data', data)
}
//reset timer function
function resetTimerButton() {
    $resetbutton.style.display = 'none'
    $day.value = null
    $month.value = null
    $year.value = null
    data = null
    clearInterval(id)
    localStorage.clear()
}

function init(){
    console.log(localStorage.getItem('future'))
if(localStorage.getItem('future') != null) {
    //hide start button after click
    start.style.visibility = "hidden";
    //display reset button
    $resetbutton.style.display = 'block'
    //reset button function
    $resetbutton.onclick = function() {
        resetTimerButton()
    }
    //hide everything on main page after click start timer button
    $year.style.display = 'none'
    $month.style.display = 'none'
    $day.style.display = 'none'
    $monthtitle.style.display = 'none'
    $daytitle.style.display = 'none'
    $yeartitle.style.display = 'none'
    $maintitle.style.display = 'none'
    $title.style.display = 'none'
    id = setInterval(function() {
        timerFunction()
    })
    incrementTimer()
}else{
    // formfunction();
    start.style.visibility = "block"
    //hide reset button
    $resetbutton.style.display = 'none'
    console.log('working')
}
}