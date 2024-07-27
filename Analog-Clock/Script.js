setInterval(() => {

    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    hrotation = 30 * hours + minutes / 2;
    mrotation = 6 * minutes + seconds/10;
    srotation = 6 * seconds;
    document.getElementById("hour").style.transform = `rotate(${hrotation}deg)`;
    document.getElementById("minute").style.transform = `rotate(${mrotation}deg)`;
    document.getElementById("second").style.transform = `rotate(${srotation}deg)`;
}, 1000);