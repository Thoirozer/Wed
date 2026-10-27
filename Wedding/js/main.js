// Countdown to the wedding (8 Feb 2027, 12:05 PM IST)
(function () {
  var target = new Date("2027-02-08T12:05:00+05:30").getTime();
  var el = document.getElementById("cd");

  function tick() {
    var d = target - Date.now();
    if (d <= 0) {
      el.innerHTML = '<p class="script" style="font-size:40px;margin:0">Today is the day!</p>';
      return;
    }
    var parts = [
      [Math.floor(d / 864e5), "days"],
      [Math.floor(d % 864e5 / 36e5), "hours"],
      [Math.floor(d % 36e5 / 6e4), "minutes"],
      [Math.floor(d % 6e4 / 1e3), "seconds"]
    ];
    el.innerHTML = parts.map(function (x) {
      return "<div><b>" + x[0] + "</b><span>" + x[1] + "</span></div>";
    }).join("");
  }
  tick();
  setInterval(tick, 1000);
})();
