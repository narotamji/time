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
  
    // round clock
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

  function diffrentTimeZones(countryCode, cHour1, cHour2, cHourNegative1, cHourNegative2, cMinute, cMinuteNegative, diffInHours, diffInMinutes) {
    setInterval(() => {
        if (hr < diffInHours && mnt < diffInMinutes) {  
          h = cHour1;
          m = cMinute; 
        } else if (hr < diffInHours && mnt >= diffInMinutes) {  
          h = cHour2; 
          m = cMinuteNegative; 
        } else if (hr > diffInHours && mnt < diffInMinutes) {  
          h = cHourNegative1; 
          m = cMinute; 
        } else if (hr > diffInHours && mnt >= diffInMinutes) {  
          h = cHourNegative2; 
          m = cMinuteNegative; 
        } else if (hr === diffInHours && mnt >= diffInMinutes) {  
          h = cHourNegative2; 
        } else if (hr === diffInHours + 1 && mnt < diffInMinutes) {  
           h = cHourNegative1; 
        } else if (hr === diffInHours && mnt < diffInMinutes) {  
            h = cHour1;
        }

        displayTimeOnScreen(h, m, countryCode);
        return h, m;
      });
  }

  diffrentTimeZones("abuDhabi", 22, 23, -2, -1, 30, -30, 1, 30);
  diffrentTimeZones("berlin", 19, 20, -5, -4, 30, -30, 4, 30);
  diffrentTimeZones("istanbul", 21, 22, -3, -2, 30, -30, 2, 30);
  diffrentTimeZones("lahore",0,0,-1,0,30,-30,0,30);
  diffrentTimeZones("london", 18, 19, -6, -5, 30, -30, 5, 30);
  diffrentTimeZones("reykjavik", 17, 18, -7, -6, 30, -30, 6, 30);
  diffrentTimeZones("toronto", 13, 14, -11, -10, 30, -30, 10, 30);
  diffrentTimeZones("vancouver", 10, 11, -14, -13, 30, -30, 13, 30);








