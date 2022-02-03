$(document).ready(function(){
$(".pink").click(function(){
$(this).toggleClass("orange");
});
});
$(document).ready(function(){
	$(".yellow").click(function(){
		$(this).css({
			width: function(index, value) {
				return parseFloat (value) +100;
			}
		});
	});
});
$(document).ready(function(){
	$(".blue").click(function(){
		$(this).css({
			width: function(index, value) {
				return parseFloat (value) +100;
			}
		});
		$(this).css({
			height: function(index, value) {
				return parseFloat (value) +100;
			}
		});
	});
});
$(document).ready(function(){
	$(".red").click(function(){
		$(this).css({
			opacity: function(index, value) {
				return parseFloat (value) -0.3;
			}
		});
	});
});
$(document).ready(function(){
$(".green").click(function(){
$(this).toggleClass("transform");
});
});
$(document).ready(function(){
$(".brown").click(function(){
$(this).toggleClass("transform45");
});
});
$(document).ready(function(){
$(".black").click(function(){
$(this).toggleClass("transform1");
});
});
$(document).ready(function(){
$(".purple").click(function(){
$(this).toggleClass("transform2");
});
});
$(document).ready(function(){
$(".grey").click(function(){
$(this).toggleClass("transform3");
});
});
$(document).ready(function(){
$(".magenta").click(function(){
$(this).toggleClass("transform4");
});
});
