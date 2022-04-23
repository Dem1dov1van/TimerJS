document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.querySelector('.timer-start')
    const input = document.querySelector('.timer-input')
    const counter = document.querySelector('.timer__counter')
    const defaultValue = 5

    let timerTime = defaultValue
    let count 

    startBtn.addEventListener('click', startAnimation)
    input.addEventListener('input', timerInput)
    input.value = 5
    counter.innerHTML = 5

    function timerInput(e){
        if(e.target.value && e.target.value.length <= 2){
            timerTime = e.target.value
            counter.innerHTML = e.target.value
        }else {
            timerTime = defaultValue
            counter.innerHTML = defaultValue
        }
    }

    const halfCircle = document.querySelector('.timer__half-circle')
    const halfMask = document.querySelector('.timer__half-mask')

    function startAnimation(){
        halfCircle.style.setProperty('--anim-time', timerTime + 's')
        halfMask.style.setProperty('--anim-time', timerTime + 's')

        count = timerTime - 1

        let timerId = setInterval(() => {
            let a = count --
            counter.innerHTML = a
            input.value = a
        }, 1000);

        halfCircle.classList.add('animate')
        halfMask.classList.add('animate')

        
        halfCircle.addEventListener('animationend', function() {
            halfCircle.classList.remove('animate')
            halfMask.classList.remove('animate')
            clearInterval(timerId)
            counter.innerHTML = 0
            counter.style.backgroundColor = 'red'
            counter.style.color = 'white'
            setTimeout(()=> {
                counter.innerHTML = timerTime
                input.value = timerTime
                counter.style.backgroundColor = 'white'
                counter.style.color = 'black'
            }, 2000)
        });

    }


    

    


})

