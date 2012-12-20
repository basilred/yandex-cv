(function($, undefined) {
	$(function() {
	// 	$("p").css("color", "#966");
		$("#common").addClass("b-menu__item_state_active");
		$(".develop").hide();

		$("#common").click(function() {
			$("#develop").removeClass("b-menu__item_state_active");
			$(".develop").hide('slow');
			$("#common").addClass("b-menu__item_state_active");
			$(".common").show('slow');
		});

		$("#develop").click(function() {
			$("#common").removeClass("b-menu__item_state_active");
			$(".common").hide('slow');
			$("#develop").addClass("b-menu__item_state_active");
			$(".develop").show('slow');
		});
	});
})(jQuery);