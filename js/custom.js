// JavaScript Document
$(document).ready(
   function(e) {
    var toggle=$(".sub-nav-toggle").click(function(e) {
        $(".all-wd").width($(document).width()*0.5);
    });
	
	$(".main-nav-bar li").click(function(e) {
        $(this).siblings("li").removeClass("active");
		$(this).addClass("active");
		if($(this).hasClass("dropdown")){
			$(".sub-nav-bar").toggle();
			return null;
		}
		$(".sub-nav-bar").hide();
    });
	$(".dropdown").on("hide.bs.dropdown",function(e){
		$(".sub-nav-bar").hide();
	});
	$("#select-box").on("show.bs.collapse",function(e){
		$(".collapse-toggle").hide();
	});
	$("#select-box").on("hidden.bs.collapse",function(e){
		$(".collapse-toggle").show();
	});
	
	var $s_tab_a=$(".i_search_tab li a");
	var $s_tab_li=$(".i_search_tab li");
	var $s_tab_ul=$(".i_search_tab");
	$s_tab_li.click(function(e) {
		if($s_tab_ul.find(".i_search_tab_focus")){
			$s_tab_ul.find(".i_search_tab_focus").removeClass("i_search_tab_focus");
		}
       
	   $(this).addClass("i_search_tab_focus");
	   
    });
	$(".radio-box,.class_select a,.radio-td-txt .radio-inline,#main-class-select a,#left-nav li").click(function(e) {
		e.preventDefault();
        $(this).siblings().removeClass("active").end().addClass("active");
    });
});
function change_type(value){
	$("#search_type").attr("value",value);
}

function search() {
	var url = "";
	switch($("#search_type").val()) {
		case "1" :
			url = "search-r-list.html";
			break;
		case "2" :
			url = "search-opponent-list.html";
			break;
		case "3" :
			url = "#";
			break;
		case "4" :
			url = "#";
			break;
		case "5" :
			url = "search-news-list.html";
			break;	
	}
	window.location.href = url;
}