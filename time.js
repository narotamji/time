// viewButton

function gridViewsFunc() {
  document.getElementById("listView").style.display = "none";
  document.getElementById("clockView").style.display = "none";
  document.getElementById("gridView").style.display = "block";
}

function listViewsFunc() {
  document.getElementById("listView").style.display = "block";
  document.getElementById("gridView").style.display = "none";
  document.getElementById("clockView").style.display = "none";
}

function clockViewsFunc() {
  document.getElementById("listView").style.display = "none";
  document.getElementById("gridView").style.display = "none";
  document.getElementById("clockView").style.display = "block";
}

// timeCalculation

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// India

let a;
let time;

setInterval(() => {
  a = new Date();
  time =
    addZero(a.getHours()) +
    ":" +
    addZero(a.getMinutes()) +
    ":" +
    addZero(a.getSeconds());
  document.getElementById("clock").innerHTML = time;
});

// otherCountries

var c;
var hr;
var mnt;

setInterval(() => {
  c = new Date();
  hr = c.getHours();
  mnt = c.getMinutes();
});

// displaying values

function displayTimeOnScreen(h, m, place) {
  hrC = c.getHours() + h;
  mntC = c.getMinutes() + m;
  sec = c.getSeconds();
  finalHr = Math.abs(hrC);
  finalMnt = Math.abs(mntC);
  t = addZero(finalHr) + ":" + addZero(finalMnt) + ":" + addZero(sec);
  document.getElementById(`${place}`).innerHTML = t;
  shortT = addZero(finalHr) + ":" + addZero(finalMnt);
  document.getElementById(`${place}Time`).innerHTML = shortT;

  // clock
  let hoursHand = document.getElementById(`hour-${place}`);
  let minutesHand = document.getElementById(`min-${place}`);
  let secondsHand = document.getElementById(`second-${place}`);

  // hours
  let hoursDegrees = (finalHr / 12) * 360 + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

  // minutes
  let minutesDegrees = (finalMnt / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // seconds
  let secondsDegrees = (sec / 60) * 360 + 90;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

// Time Calculation

//Abu Dhabi
setInterval(() => {
  if (hr <= 1 && mnt < 30) {
    h = 22;
    m = 30;
  } else if (hr <= 1 && mnt >= 30) {
    h = 23;
    m = -30;
  } else if (hr >= 1 && mnt < 30) {
    h = -2;
    m = 30;
  } else if (hr >= 1 && mnt >= 30) {
    h = -1;
    m = -30;
  }
  displayTimeOnScreen(h, m, "abuDhabi");
  return h, m;
});

//Berlin
setInterval(() => {
  if (hr < 3 && mnt < 30) {
    h = 20;
    m = 30;
  } else if (hr < 3 && mnt >= 30) {
    h = 21;
    m = -30;
  } else if (hr > 3 && mnt < 30) {
    h = -4;
    m = 30;
  } else if (hr > 3 && mnt >= 30) {
    h = -3;
    m = -30;
  } else if (hr === 3 && mnt >= 30) {
    h = -3;
  } else if (hr === 4 && mnt < 30) {
    h = -4;
  }

  console.log(`${h} and ${m}`);
  displayTimeOnScreen(h, m, "berlin");
  return h, m;
});

//Istanbul
setInterval(() => {
  if (hr <= 2 && mnt < 30) {
    h = 21;
    m = 30;
  } else if (hr <= 2 && mnt >= 30) {
    h = 22;
    m = -30;
  } else if (hr >= 2 && mnt < 30) {
    h = -3;
    m = 30;
  } else if (hr >= 2 && mnt >= 30) {
    h = -2;
    m = -30;
  }

  displayTimeOnScreen(h, m, "istanbul");
  return h, m;
});

//London
setInterval(() => {
  if (hr <= 4 && mnt < 30) {
    h = 19;
    m = 30;
  } else if (hr <= 4 && mnt >= 30) {
    h = 20;
    m = -30;
  } else if (hr >= 4 && mnt < 30) {
    h = -5;
    m = 30;
  } else if (hr >= 4 && mnt >= 30) {
    h = -4;
    m = -30;
  }

  displayTimeOnScreen(h, m, "london");
  return h, m;
});

//Lahore, Pakistan
setInterval(() => {
  if (mnt < 30) {
    h = -1;
    m = 30;
  } else if (mnt >= 30) {
    h = 0;
    m = -30;
  }

  displayTimeOnScreen(h, m, "lahore");
  return h, m;
});

//Reykjavik
setInterval(() => {
  if (hr <= 5 && mnt < 30) {
    h = 18;
    m = 30;
  } else if (hr <= 5 && mnt >= 30) {
    h = 19;
    m = -30;
  } else if (hr >= 5 && mnt < 30) {
    h = -6;
    m = 30;
  } else if (hr >= 5 && mnt >= 30) {
    h = -5;
    m = -30;
  }
  displayTimeOnScreen(h, m, "reykjavik");
  return h, m;
});

//Toronto
setInterval(() => {
  if (hr <= 9 && mnt < 30) {
    h = 14;
    m = 30;
  } else if (hr <= 9 && mnt >= 30) {
    h = 15;
    m = -30;
  } else if (hr >= 9 && mnt < 30) {
    h = -10;
    m = 30;
  } else if (hr >= 9 && mnt >= 30) {
    h = -9;
    m = -30;
  }
  displayTimeOnScreen(h, m, "toronto");
  return h, m;
});

//vancouver
setInterval(() => {
  if (hr <= 12 && mnt < 30) {
    h = 11;
    m = 30;
  } else if (hr <= 12 && mnt >= 30) {
    h = 12;
    m = -30;
  } else if (hr >= 12 && mnt < 30) {
    h = -13;
    m = 30;
  } else if (hr >= 12 && mnt >= 30) {
    h = -12;
    m = -30;
  }
  displayTimeOnScreen(h, m, "vancouver");
  return h, m;
});
