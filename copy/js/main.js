/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function() {
	// The DOM (document object model) is constructed
	// We will initialize and run our plugin here

	//当点击跳转链接后，回到页面顶部位置

	$("#goTop").click(function() {
		//console.log("Templates")
		window.scrollTo(0, 0)
		/*$('body,html').animate({
			scrollTop: 0
		}, 1000);
		return false;*/
	});
	$('.back').click(function() {
		window.history.go(-1);
	});
});