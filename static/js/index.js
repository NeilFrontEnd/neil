$(document).ready(function(){
	var title = document.title;
	switch(title){
	  	case 'Trading|Index':
	    	$("#foot .menu").find(".levs").removeClass('col');
	    	$("#foot .menu").find(".lev1").addClass('col');
	    	$("#foot .menu").find(".levs .item1").removeClass('display');
	    	$("#foot .menu").find(".levs .item2").addClass('display');
	    	$("#foot .menu").find(".lev1 .item1").addClass('display');
        	$("#foot .menu").find(".lev1 .item2").removeClass('display');
	    	break;
	    case 'Shop|Index':
	    	$("#foot .menu").find(".levs").removeClass('col');
	    	$("#foot .menu").find(".lev2").addClass('col');
	    	$("#foot .menu").find(".levs .item1").removeClass('display');
	    	$("#foot .menu").find(".levs .item2").addClass('display');
	    	$("#foot .menu").find(".lev2 .item1").addClass('display');
        	$("#foot .menu").find(".lev2 .item2").removeClass('display');
	    	break;
	    case 'Article|Index':
	    	$("#foot .menu").find(".levs").removeClass('col');
	    	$("#foot .menu").find(".lev4").addClass('col');
	    	$("#foot .menu").find(".levs .item1").removeClass('display');
	    	$("#foot .menu").find(".levs .item2").addClass('display');
	    	$("#foot .menu").find(".lev4 .item1").addClass('display');
        	$("#foot .menu").find(".lev4 .item2").removeClass('display');
	    	break;
	    case 'Market|Index':
	    	$("#foot .menu").find(".levs").removeClass('col');
	    	$("#foot .menu").find(".lev4").addClass('col');
	    	$("#foot .menu").find(".levs .item1").removeClass('display');
	    	$("#foot .menu").find(".levs .item2").addClass('display');
	    	$("#foot .menu").find(".lev4 .item1").addClass('display');
        	$("#foot .menu").find(".lev4 .item2").removeClass('display');
	    	break;
	    case 'Member|Index':
	    	$("#foot .menu").find(".levs").removeClass('col');
	    	$("#foot .menu").find(".lev5").addClass('col');
	    	$("#foot .menu").find(".levs .item1").removeClass('display');
	    	$("#foot .menu").find(".levs .item2").addClass('display');
	    	$("#foot .menu").find(".lev5 .item1").addClass('display');
        	$("#foot .menu").find(".lev5 .item2").removeClass('display');
	    	break;
	}
});