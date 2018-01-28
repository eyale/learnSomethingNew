window.addEventListener('DOMContentLoaded', function () {

  var formTop = document.querySelector('#form-top'),
    startValue = getCookie('startValue') != undefined ? Number(getCookie('startValue')) : 15,
    clearParagraph = document.createElement("p"),
    bottlesCounter = document.createElement("p"),
    interval = setInterval(function () { time(); }, 5000);

  bottlesCounter.setAttribute("id", "bottlesCounter");
  bottlesCounter.innerHTML = startValue;

  formTop.appendChild(bottlesCounter);

  function time() {
    bottlesCounter.setAttribute("id", "bottlesCounter");
    bottlesCounter.innerHTML = startValue;

    startValue = (Number(startValue) >= 250) || (Number(startValue) >= 249) ? Number(startValue) : Number(startValue) + 3;
    formTop.appendChild(bottlesCounter);

    if (startValue >= 250) {
      clearInterval(interval, 100);
      startvalue = getCookie('startValue') != undefined ? Number(getCookie('startValue')) : 15;
    }
  }

  window.onbeforeunload = function () {
    if (getCookie('startValue') === undefined) {
      addCookie('startValue', 15);
    } else {
      addCookie('startValue', startValue);
    }
  }

  function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");

    for (i = 0; i < ARRcookies.length; i++) {
      x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
      y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
      x = x.replace(/^\s+|\s+$/g, "");
      if (x == c_name) {
        return unescape(y);
      }
    }
  }

  formTop.appendChild(clearParagraph);

}, false);
