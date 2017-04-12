function setDate(){
    const now = new Date();
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.hour-hand');

    const hour = now.getHours();
    const minute = now.getMinutes();
    const seconds = now.getSeconds();

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutesDegrees = ((minute / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hoursDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}
setDate();
setInterval(setDate, 1000);
