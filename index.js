'use strict';

const refs = {
  timer: document.querySelector('#timer-1'),
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate, currentDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.currentDate = currentDate;
  }

  start() {
    this.timerStart = setInterval(() => {
      const currentDate = new Date();
      const time = this.targetDate - currentDate;
      const days = String(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), );
      const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
      updateTimerFace(days, hours, mins, secs);
    }, 1000);
  }
}

function updateTimerFace(days, hours, mins, secs) {
  refs.days.innerHTML = `${days}`;
  refs.hours.innerHTML = `${hours}`;
  refs.mins.innerHTML = `${mins}`;
  refs.secs.innerHTML = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

const startFligth = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 12, 2020'),
});

startFligth.start();
