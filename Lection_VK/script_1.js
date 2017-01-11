// function fun() {
// 	var chbox;
// 	chbox=document.getElementById('one')
// 	if (chbox.checked) {
// 		alert("Выбран")
// 	}
// 	else {
// 		alert("Не выбран") 
// 	}
// }

function fun1() {
	var radiobtn=document.getElementsByName('r1');
	for (var i = 0; i < radiobtn.length; i++) {
		if (radiobtn[i].checked){
			alert("Выбран " +i+ " элумент")
		}
	}
}