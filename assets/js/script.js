const showIcon = () => {
	$("#search-icon").show();
}
const hideIcon = () => {
	$("#search-icon").hide();
}
const showButton = (element) => {
	if(element.value.length > 0) {
		$("#btn-post").show();
		$("#btn-post").addClass('button-active');
	} else {
		$("#btn-post").hide();
		$("#btn-post").removeClass('button-active');
	}
}
const post = () => {
	alert("Posting Completed!");
	$("#btn-post").hide();
}

let liked = false;
const toggleLike = () => {
	if(liked) {
		$('#like-btn').attr('src', 'assets/images/feed/24.png');
		liked = false;
	} else {
		$('#like-btn').attr('src', 'assets/images/feed/27.png');
		liked = true;
	}
}

const hover = (e) => {
	e.setAttribute('src', 'assets/images/gnb/10.png')
}
const unhover = (e) => {
	let status = $('#menu-modal').css("display")

	if(status == 'none') { 
		e.setAttribute('src', 'assets/images/gnb/6.png')
	}
}	

const menuModal = () => {
	let status = $('#menu-modal').css("display")

	if(status == 'none') {
		$('#menu-modal').css("display", "inline")
		$('#nav-menu').attr('src', 'assets/images/gnb/10.png')
	} else {
		$('#menu-modal').css("display", "none")
		$('#nav-menu').attr('src', 'assets/images/gnb/6.png')
	}
}

const accountModal = () => {
	let status = $('#account-modal').css("display")

	if(status == 'none') {
		$('#account-modal').css("display", "inline")
	} else {
		$('#account-modal').css("display", "none")
	}
}