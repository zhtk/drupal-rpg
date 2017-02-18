window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
    window.setTimeout(callback, 1000 / 30);
  };
})();

function animate(c, c2, startTime) {
  var time = (new Date()).getTime() - startTime;
  
  var mid_y = c.height * (1 - hp/max_hp);
  var scale_y = 6;

  var res_x = 40;
  var scale_x = c.width / res_x;
  var per_x = 5 * Math.PI;

  var linearSpeed = 8;
  var phase = linearSpeed * time / 1000;
  
  c2.globalCompositeOperation = 'source-over';
  c2.clearRect(0, 0, c.width, c.height);
  
  c2.beginPath();
  c2.arc(c.width/2, c.height/2, 120, 0, 2 * Math.PI, false);
  c2.fillStyle = 'red';
  c2.fill(); 
  
  c2.globalCompositeOperation = 'source-in';
  
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

window.addEventListener('load', function(){
	var text_pos = 35;
	if (hp / max_hp < 0.60)
		text_pos = 50;
	if (hp / max_hp < 0.30)
		text_pos = 35;
	
	var canvas = document.createElement('canvas');
	var hp_el = document.createElement('div');
	hp_el.appendChild(document.createTextNode(hp.toString() + ' / ' + max_hp.toString()));
	hp_el.style.position = "absolute";
	hp_el.style.top = text_pos.toString() + "%";
	hp_el.style.width = "100%";
	hp_el.style.height = (100 - text_pos).toString() + "%";
	hp_el.style.textAlign = "center";
	hp_el.style.fontSize = "24px";
	hp_el.style.textShadow = "2px 1px black";
	
	var hp_bar = document.getElementById('hp-bar');
	hp_bar.appendChild(canvas);
	hp_bar.appendChild(hp_el);
	
	var c2 = canvas.getContext('2d');
	
	canvas.height = 300;
	canvas.width = 300;
	canvas.style.width = "100%";

	var startTime = (new Date()).getTime();
	animate(canvas, c2, startTime);
});