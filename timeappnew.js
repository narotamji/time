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
//   var month;
  
  setInterval(() => {
    c = new Date();
    hr = c.getHours();
    mnt = c.getMinutes();
    // month = c.getMonth();
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

  function diffrentTimeZones(countryCode, diffInHours, diffInMinutes) {
    
        // if(countryCode === "berlin" || countryCode === "london" || countryCode === "reykjavik" || countryCode === "toronto" || countryCode === "vancouver") {
        //     if(month >= 2 && month <=10  ) {
        //         cHour1 ++;
        //         cHour2 ++;
        //         cHourNegative1 ++;
        //         cHourNegative2 ++;
        //         diffInHours --;
        //     }
        //     console.log(month);
        // }

      setInterval(() => {
        
        if (hr < diffInHours && mnt < diffInMinutes) {  
          h = 23 - diffInHours;
          m = diffInMinutes; 
        } else if (hr < diffInHours && mnt >= diffInMinutes) {  
          h = 24 - diffInHours; 
          m = - diffInMinutes; 
        } else if (hr > diffInHours && mnt < diffInMinutes) {  
          h = - diffInHours - diffInHours - 1 +  diffInHours; 
          m = diffInMinutes; 
        } else if (hr > diffInHours && mnt >= diffInMinutes) {  
          h = - diffInHours; 
          m = - diffInMinutes; 
        } else if (hr === diffInHours && mnt >= diffInMinutes) {  
          h = - diffInHours; 
        } else if (hr === diffInHours + 1 && mnt < diffInMinutes) {  
           h = - diffInHours - diffInHours - 1 +  diffInHours; 
        } else if (hr === diffInHours && mnt < diffInMinutes) {  
            h = 23 - diffInHours;
        }

        displayTimeOnScreen(h, m, countryCode);
        return h, m;
      });
  }

  diffrentTimeZones("abuDhabi", 1, 30);
  diffrentTimeZones("berlin", 4, 30);
  diffrentTimeZones("istanbul", 2, 30);
  diffrentTimeZones("lahore", 0,30);
  diffrentTimeZones("london", 5, 30);
  diffrentTimeZones("reykjavik", 5, 30);
  diffrentTimeZones("toronto", 10, 30);
  diffrentTimeZones("vancouver", 13, 30);








