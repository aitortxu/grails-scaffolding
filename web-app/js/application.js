(function($) {
	$(document).ready(function() {
		if (Modernizr.inputtypes.range) {
			$('select.range').grailsRange();
		}

		if (Modernizr.history) {
			$('.scaffold-list').grailsList();
		}

		if ($().autocomplete != undefined) {
			$('select.many-to-many').grailsAutocomplete();
		}

		$('body').grailsAjaxLoader();

		// prevent FOUC by only making body visible once document is ready
		$('body').addClass('ready');

		// focus first error field (this only works once page content is visible)
		$('.error:first').find('input, select, textarea').focus();
	});
})(jQuery);