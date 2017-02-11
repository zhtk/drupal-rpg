window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
    window.setTimeout(callback, 1000 / 30);
  };
})();

function animate(c, c2, startTime) {
  var time = (new Date()).getTime() - startTime;
  
  var mid_y = c.height * (1 - hp);
  var scale_y = 6;

  var res_x = 40;
  var scale_x = c.width / res_x;
  var per_x = 5 * Math.PI;

  var linearSpeed = 8;
  var phase = linearSpeed * time / 1000;
  
  c2.clearRect(0, 0, c.width, c.height);
  c2.fillStyle = '#b00';
  c2.beginPath();
  c2.moveTo(0, mid_y + Math.sin(per_x * phase / res_x) * scale_y);
  for(i = 1; i <= res_x; i++) {
    c2.lineTo(i * scale_x, mid_y + Math.sin(per_x * (phase + i) / res_x) * scale_y);
  }

	c2.lineTo(c.width, c.height);
  c2.lineTo(0, c.height);
  c2.closePath();
  c2.fill();

  requestAnimFrame(function() {
    animate(c, c2, startTime);
  });
}

window.onload = function(){
	var c = document.getElementById('c');
	var c2 = c.getContext('2d');

	var startTime = (new Date()).getTime();
	animate(c, c2, startTime);
}