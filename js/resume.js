(function($, undefined) {
	$(function() {
	// 	$("p").css("color", "#966");
		$("#common").addClass("b-menu__item_state_active");
		$(".develop").hide();

		$("#common").click(function() {
			$("#develop").removeClass("b-menu__item_state_active");
			$(".develop").slideUp('slow');
			$("#common").addClass("b-menu__item_state_active");
			$(".common").slideDown('slow');
		});

		$("#develop").click(function() {
			$("#common").removeClass("b-menu__item_state_active");
			$(".common").slideUp('slow');
			$("#develop").addClass("b-menu__item_state_active");
			$(".develop").slideDown('slow');
		});
	});
})(jQuery);