// function fun2() {
// 	var sel = document.getElementById('mySelect').selectedIndex;
// 	var options = document.getElementById('mySelect').options;
// 	alert("Выбрана опция: " + options[sel].text);
// }

// function fun3() {
// 	var range = document.getElementById("r1");
// 	var p = document.getElementById('one');
// 	p.innerHTML = range.value;
// }

// function fun3() {
// 	var range = document.getElementById("r1");
// 	var i1 = document.getElementById('i1');
// 	i1.value = range.value;
// }

function fun3() {
	var range = document.getElementById("r1");
	var div = document.getElementById('test');
	div.style.width=range.value + 'px';
}