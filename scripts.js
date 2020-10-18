
// side

function openNav() {
	document.getElementById("mySidebar").style.width = "300px";
	document.getElementById("main").style.marginLeft = "300px";
  }
  

  function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
  }

//   go top

window.onscroll = function(){
	if(document.documentElement.scrollTop > 100){
		document.querySelector('.go-top-container')
		.classList.add('show-b');
	}else{
		document.querySelector('.go-top-container')
		.classList.remove('show-b');
	}
}

