var weather_nav = $("#weather_nav")
var isNavOn = false


var card = $("#card")

function hideNav(){
	weather_nav.hide()
	card.css({'margin-top': '0px'})
}

function showNav(){
	weather_nav.show()
	card.css({'margin-top': '20px'})
}

function toggleNav(){
	if(isNavOn)}{
		isNavOn = false
		hideNav()
	}else{
		isNavOn = true
		showNav()
	}
}


var button = $("#toggle_nav").bind('click',toggleNav)

