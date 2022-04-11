
function timer(id, deadline){
 

    function getTimeRemaining(endtime){
        const k = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(k / (((1000 * 60) * 60) * 24)),
        hours = Math.floor((k / (1000 * 60 * 60) % 24)),
        minutes = Math.floor((k / 1000 / 60) % 60),
        seconds = Math.floor((k / 1000) % 60);
        return {
        "total" : k,
        "days" : days,
        "hours" : hours,
        "minutes" : minutes,
        "seconds" : seconds
        };
    }

    function getZero(num){
        if(num > 0 && num < 10){
            return `0${num}`;
        } else if (num == 0) {
            return num;
        } else {
            return num;
        }
        
    }
    
    function setClock(sel, endtime){
        const timer = document.querySelector(sel),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);
        updateClock();
        function updateClock(){
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            if(t.total <= 0){
                clearInterval(timeInterval);
            }
        }
    }
    setClock(id, deadline);
}

export default timer;