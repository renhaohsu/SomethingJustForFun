var doors = document.getElementsByClassName('door')
// var button = document.getElementsByClassName('push')

// button[0].addEventListener('click', function(){doors[0].style.width = '50%'
// doors[1].style.width = '50%'},false)

var c = 0

window.addEventListener('click', function(){
	
	if(!c){
		doors[0].style.width = '0%';
		doors[1].style.width = '0%';
		c = 1;
	} else {
		doors[0].style.width = '50%';
		doors[1].style.width = '50%';
		c = 0
	}
},false)
