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

// function addZero(i) {
// 	i < 10 ?
// 		i = '0' + i
// 	:
// 	return i;
// }

// India

var a;
var time;

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

/*
//Melbourne
setInterval(() => {
		if (hr <= 4 && mnt < 30) {
			h = 4;
			m = 30;
		}
		else if (hr <= 4 && mnt >= 30 ) {
			h = 5;
			m = -30;
		}
		else if (hr >= 4 && mnt < 30) {
			h = -13;
			m = 30;
		}
		else if (hr >= 4 && mnt >= 30){
			h = -12;
			m = -30;
		} 
		hrC = (c.getHours())+ h;
		mntC = (c.getMinutes()) + m;
		finalHr = Math.abs(hrC);
		finalMnt = Math.abs(mntC);
		sec = addZero(c.getSeconds());
		t = addZero(finalHr) + ":" + addZero(finalMnt) + ":" + sec;
		document.getElementById('vancouver').innerHTML = t;
},);



// // Abu Dhabi
// setInterval(() => {
// 		if (hr <= 1 && mnt < 30) {
// 			h = 22;
// 			m = 30;
// 		}
// 		else if (hr <= 1 && mnt >= 30 ) {
// 			h = 23;
// 			m = -30;
// 		}
// 		else if (hr >= 1 && mnt < 30) {
// 			h = -2;
// 			m = 30;
// 		}
// 		else if (hr >= 1 && mnt >= 30){
// 			h = -1;
// 			m = -30;
// 		} 
// 		hrC = (c.getHours())+ h;
// 		mntC = (c.getMinutes()) + m;
// 		finalHr = Math.abs(hrC);
// 		finalMnt = Math.abs(mntC);
// 		sec = addZero(c.getSeconds());
// 		t = addZero(finalHr) + ":" + addZero(finalMnt) + ":" + sec;
// 		document.getElementById('abuDhabi').innerHTML = t;
// 		shortT = addZero(finalHr) + ":" + addZero(finalMnt);
// 		document.getElementById('abuDhabiTime').innerHTML = shortT;

// 		// clock
// 		let hoursHand  = document.getElementById('hour-abuDhabi');
// 		let minutesHand  = document.getElementById('min-abuDhabi');
// 		let secondsHand  = document.getElementById('second-abuDhabi');

// 		// hours
// 		let hoursDegrees = ((finalHr / 12 ) * 360 ) + 90;
// 		hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

// 		// minutes
// 		let minutesDegrees = ((finalMnt / 60 ) * 360 ) + 90;
// 		minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

// 		// seconds
// 		let secondsDegrees = ((sec / 60 ) * 360 ) + 90;
// 		secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

// }, );


// //Berlin
// setInterval(() => {
// 		if (hr < 3 && mnt < 30) {
// 			h = 20;
// 			m = 30;
// 		}
// 		else if (hr < 3 && mnt >= 30 ) {
// 			h = 21;
// 			m = -30;
// 		}
// 		else if (hr > 3 && mnt < 30) {
// 			h = -4;
// 			m = 30;
// 		}
// 		else if (hr > 3 && mnt >= 30){
// 			h = -3;
// 			m = -30;
// 		} else if (hr == 3 && mnt >= 30){
// 			h = -3;
// 		} else if (hr == 4 && mnt < 30){
// 			h = -4;
// 		}
// 		hrC = (c.getHours())+ h;
// 		mntC = (c.getMinutes()) + m;
// 		finalHr = Math.abs(hrC);
// 		finalMnt = Math.abs(mntC);
// 		sec = addZero(c.getSeconds());
// 		t = addZero(finalHr) + ":" + addZero(finalMnt) + ":" + sec;
// 		document.getElementById('berlin').innerHTML = t;
// 		shortT = addZero(finalHr) + ":" + addZero(finalMnt);
// 		document.getElementById('berlinTime').innerHTML = shortT;

// 		// clock
// 		let hoursHand  = document.getElementById('hour-berlin');
// 		let minutesHand  = document.getElementById('min-berlin');
// 		let secondsHand  = document.getElementById('second-berlin');

// 		// hours
// 		let hoursDegrees = ((finalHr / 12 ) * 360 ) + 90;
// 		hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

// 		// minutes
// 		let minutesDegrees = ((finalMnt / 60 ) * 360 ) + 90;
// 		minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

// 		// seconds
// 		let secondsDegrees = ((sec / 60 ) * 360 ) + 90;
// 		secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

// },);


// //Istanbul
// setInterval(() => {
// 		if (hr <= 2 && mnt < 30) {
// 			h = 21;
// 			m = 30;
// 		}
// 		else if (hr < 2 && mnt >= 30 ) {
// 			h = 22;
// 			m = -30;
// 		}
// 		else if (hr >= 2 && mnt < 30) {
// 			h = -3;
// 			m = 30;
// 		}else if (hr = 2 && mnt >= 30){
// 			h = -2;
// 		}else if (hr = 3 && mnt <= 30){
// 			h = -3;
// 		} 
// 		else if (hr > 3 && mnt >= 30){
// 			h = -2;
// 			m = -30;
// 		} 
// 		hrC = (c.getHours())+ h;
// 		mntC = (c.getMinutes()) + m;
// 		finalHr = Math.abs(hrC);
// 		finalMnt = Math.abs(mntC);
// 		sec = addZero(c.getSeconds());
// 		t = addZero(finalHr) + ":" + addZero(finalMnt) + ":" + sec;
// 		document.getElementById('istanbul').innerHTML = t;
// 		shortT = addZero(finalHr) + ":" + addZero(finalMnt);
// 		document.getElementById('istanbulTime').innerHTML = shortT;

// 		// clock
// 		let hoursHand  = document.getElementById('hour-istanbul');
// 		let minutesHand  = document.getElementById('min-istanbul');
// 		let secondsHand  = document.getElementById('second-istanbul');

// 		// hours
// 		let hoursDegrees = ((finalHr / 12 ) * 360 ) + 90;
// 		hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

// 		// minutes
// 		let minutesDegrees = ((finalMnt / 60 ) * 360 ) + 90;
// 		minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

// 		// seconds
// 		let secondsDegrees = ((sec / 60 ) * 360 ) + 90;
// 		secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

// },);


// //London
// setInterval(() => {
// 		if (hr <= 4 && mnt < 30) {
// 			h = 19;
// 			m = 30;
// 		}
// 		else if (hr <= 4 && mnt >= 30 ) {
// 			h = 20;
// 			m = -30;
// 		}
// 		else if (hr >= 4 && mnt < 30) {
// 			h = -5;
// 			m = 30;
// 		}
// 		else if (hr >= 4 && mnt >= 30){
// 			h = -4;
// 			m = -30;
// 		} 
// 		hrC = (c.getHours())+ h;
// 		mntC = (c.getMinutes()) + m;
// 		finalHr = Math.abs(hrC);
// 		finalMnt = Math.abs(mntC);
// 		sec = addZero(c.getSeconds());
// 		t = addZero(finalHr) + ":" + addZero(finalMnt) + ":" + sec;
// 		document.getElementById('london').innerHTML = t;
// 		shortT = addZero(finalHr) + ":" + addZero(finalMnt);
// 		document.getElementById('londonTime').innerHTML = shortT;

// 		// clock
// 		let hoursHand  = document.getElementById('hour-london');
// 		let minutesHand  = document.getElementById('min-london');
// 		let secondsHand  = document.getElementById('second-london');

// 		// hours
// 		let hoursDegrees = ((finalHr / 12 ) * 360 ) + 90;
// 		hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

// 		// minutes
// 		let minutesDegrees = ((finalMnt / 60 ) * 360 ) + 90;
// 		minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

// 		// seconds
// 		let secondsDegrees = ((sec / 60 ) * 360 ) + 90;
// 		secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

// },);


// //Lahore, Pakistan
// setInterval(() => {
// 		if (mnt < 30) {
// 			h = -1;
// 			m = 30;
// 		}
// 		else if (mnt >= 30 ) {
// 			h = 0;
// 			m = -30;
// 		}

// 		hrC = (c.getHours())+ h;
// 		mntC = (c.getMinutes()) + m;
// 		finalHr = Math.abs(hrC);
// 		finalMnt = Math.abs(mntC);
// 		sec = addZero(c.getSeconds());
// 		t = addZero(finalHr) + ":" + addZero(finalMnt) + ":" + sec;
// 		document.getElementById('lahore').innerHTML = t;
// 		shortT = addZero(finalHr) + ":" + addZero(finalMnt);
// 		document.getElementById('lahoreTime').innerHTML = shortT;

// 		// clock
// 		let hoursHand  = document.getElementById('hour-lahore');
// 		let minutesHand  = document.getElementById('min-lahore');
// 		let secondsHand  = document.getElementById('second-lahore');

// 		// hours
// 		let hoursDegrees = ((finalHr / 12 ) * 360 ) + 90;
// 		hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

// 		// minutes
// 		let minutesDegrees = ((finalMnt / 60 ) * 360 ) + 90;
// 		minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

// 		// seconds
// 		let secondsDegrees = ((sec / 60 ) * 360 ) + 90;
// 		secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

// },);


// //Reykjavik
// setInterval(() => {
// 		if (hr <= 5 && mnt < 30) {
// 			h = 18;
// 			m = 30;
// 		}
// 		else if (hr <= 5 && mnt >= 30 ) {
// 			h = 19;
// 			m = -30;
// 		}
// 		else if (hr >= 5 && mnt < 30) {
// 			h = -6;
// 			m = 30;
// 		}
// 		else if (hr >= 5 && mnt >= 30){
// 			h = -5;
// 			m = -30;
// 		} 
// 		hrC = (c.getHours())+ h;
// 		mntC = (c.getMinutes()) + m;
// 		finalHr = Math.abs(hrC);
// 		finalMnt = Math.abs(mntC);
// 		sec = addZero(c.getSeconds());
// 		t = addZero(finalHr) + ":" + addZero(finalMnt) + ":" + sec;
// 		document.getElementById('reykjavik').innerHTML = t;
// 		shortT = addZero(finalHr) + ":" + addZero(finalMnt);
// 		document.getElementById('reykjavikTime').innerHTML = shortT;

// 		// clock
// 		let hoursHand  = document.getElementById('hour-reykjavik');
// 		let minutesHand  = document.getElementById('min-reykjavik');
// 		let secondsHand  = document.getElementById('second-reykjavik');

// 		// hours
// 		let hoursDegrees = ((finalHr / 12 ) * 360 ) + 90;
// 		hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

// 		// minutes
// 		let minutesDegrees = ((finalMnt / 60 ) * 360 ) + 90;
// 		minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

// 		// seconds
// 		let secondsDegrees = ((sec / 60 ) * 360 ) + 90;
// 		secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

// },);


// //Toronto
// setInterval(() => {
// 		if (hr <= 9 && mnt < 30) {
// 			h = 14;
// 			m = 30;
// 		}
// 		else if (hr <= 9 && mnt >= 30 ) {
// 			h = 15;
// 			m = -30;
// 		}
// 		else if (hr >= 9 && mnt < 30) {
// 			h = -10;
// 			m = 30;
// 		}
// 		else if (hr >= 9 && mnt >= 30){
// 			h = -9;
// 			m = -30;
// 		} 
// 		hrC = (c.getHours())+ h;
// 		mntC = (c.getMinutes()) + m;
// 		finalHr = Math.abs(hrC);
// 		finalMnt = Math.abs(mntC);
// 		sec = addZero(c.getSeconds());
// 		t = addZero(finalHr) + ":" + addZero(finalMnt) + ":" + sec;
// 		document.getElementById('toronto').innerHTML = t;
// 		shortT = addZero(finalHr) + ":" + addZero(finalMnt);
// 		document.getElementById('torontoTime').innerHTML = shortT;

// 		// clock
// 		let hoursHand  = document.getElementById('hour-toronto');
// 		let minutesHand  = document.getElementById('min-toronto');
// 		let secondsHand  = document.getElementById('second-toronto');

// 		// hours
// 		let hoursDegrees = ((finalHr / 12 ) * 360 ) + 90;
// 		hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

// 		// minutes
// 		let minutesDegrees = ((finalMnt / 60 ) * 360 ) + 90;
// 		minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

// 		// seconds
// 		let secondsDegrees = ((sec / 60 ) * 360 ) + 90;
// 		secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

// },);


// //vancouver
// setInterval(() => {
// 		if (hr <= 12 && mnt < 30) {
// 			h = 11;
// 			m = 30;
// 		}
// 		else if (hr <= 12 && mnt >= 30 ) {
// 			h = 12;
// 			m = -30;
// 		}
// 		else if (hr >= 12 && mnt < 30) {
// 			h = -13;
// 			m = 30;
// 		}
// 		else if (hr >= 12 && mnt >= 30){
// 			h = -12;
// 			m = -30;
// 		} 
// 		hrC = (c.getHours())+ h;
// 		mntC = (c.getMinutes()) + m;
// 		finalHr = Math.abs(hrC);
// 		finalMnt = Math.abs(mntC);
// 		sec = addZero(c.getSeconds());
// 		t = addZero(finalHr) + ":" + addZero(finalMnt) + ":" + sec;
// 		document.getElementById('vancouver').innerHTML = t;
// 		shortT = addZero(finalHr) + ":" + addZero(finalMnt);
// 		document.getElementById('vancouverTime').innerHTML = shortT;

// 		// clock
// 		let hoursHand  = document.getElementById('hour-vancouver');
// 		let minutesHand  = document.getElementById('min-vancouver');
// 		let secondsHand  = document.getElementById('second-vancouver');

// 		// hours
// 		let hoursDegrees = ((finalHr / 12 ) * 360 ) + 90;
// 		hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

// 		// minutes
// 		let minutesDegrees = ((finalMnt / 60 ) * 360 ) + 90;
// 		minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

// 		// seconds
// 		let secondsDegrees = ((sec / 60 ) * 360 ) + 90;
// 		secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

// },);
*/
