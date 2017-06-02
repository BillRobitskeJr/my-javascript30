function updateTime(hourHand, minuteHand, secondHand) {
  const now = new Date();
  console.log(now);
  const secondAngle = calculateAngle(now.getSeconds(), 60);
  secondHand.style.transform = `rotate(${secondAngle}deg)`;
  const minuteAngle = calculateAngle(now.getMinutes(), 60);
  minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
  const hourAngle = calculateAngle(now.getHours(), 12);
  hourHand.style.transform = `rotate(${hourAngle}deg)`;
}

function calculateAngle(time, maxTime) {
  return time / maxTime * 360;
}

function updateHand(hand, angle) {
  hand.style.transform = `rotate(${angle}deg)`;
}

function startClock() {
  function generateInterval(hourHand, minuteHand, secondHand) {
    return () => updateTime(hourHand, minuteHand, secondHand);
  }
  const interval = generateInterval(document.querySelector('.hand.hour-hand'),
                                    document.querySelector('.hand.minute-hand'),
                                    document.querySelector('.hand.second-hand'));
  const timer = setInterval(interval, 1000);
}

window.addEventListener('load', startClock);