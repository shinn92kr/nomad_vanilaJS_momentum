const clock = document.querySelector("h2#clock");
const jsDate = document.querySelector("h3#js-date");

function getClock() {
    const date = new Date();
    const clockHour = String(date.getHours()).padStart(2, "0");
    const clockMinute = String(date.getMinutes()).padStart(2, "0");
    const clockSecond = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${clockHour} : ${clockMinute} : ${clockSecond}`;

    const clockYear = String(date.getFullYear());
    const clockMonth = String(date.getMonth()).padStart(2, "0");
    const clockDate = String(date.getDate()).padStart(2, "0");
    let clockDay = date.getDay();
    switch (clockDay) {
        case 0:
            clockDay = "Sun";
            break;
        case 1:
            clockDay = "Mon";
            break;
        case 2:
            clockDay = "Tus";
            break;
        case 3:
            clockDay = "Wed";
            break;
        case 4:
            clockDay = "Thu";
            break;
        case 5:
            clockDay = "Fri";
            break;
        case 6:
            clockDay = "Sat";
            break;
    }
    jsDate.innerText = `${clockYear}. ${clockMonth}. ${clockDate} ${clockDay}`;
}

getClock();
setInterval(getClock, 1000);
