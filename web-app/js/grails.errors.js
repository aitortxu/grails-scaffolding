(function($) {
	/**
	 * Turns field-specific errors into tooltips shown on focus.
	 */
	$.fn.grailsErrors = function(options) {
		// settings that can be overridden with arguments
		var settings = {
			hide: true // if true, hides the tooltips until the corresponding input is focused
		};
		if (options) {
			$.extend(settings, options);
		}

		this.each(function() {
			// grab the error box and its input
			var errorBox = $(this);
			var input = errorBox.prev(':input');

			errorBox.addClass('error-tooltip').attr('aria-role', 'tooltip');
			input.attr('aria-invalid', 'true');

			// insert a pointer between the input and the tooltip
			var pointer = $('<div class="tooltip-pointer"/>');
			errorBox.prepend(pointer);

			// position the error box to the right of the input and vertically aligned with it
			var inputOffset = input.offset();
			var inputMidpoint = input.outerHeight() / 2;
			var errorBoxMidpoint = errorBox.outerHeight() / 2;

			errorBox.offset({
				left: inputOffset.left + input.outerWidth() + pointer.outerWidth(),
				top: inputOffset.top - (errorBoxMidpoint - inputMidpoint)
			});

			// position the pointer vertically in the middle of the error box
			pointer.offset({
				top: errorBox.offset().top - ((pointer.outerHeight() / 2) - errorBoxMidpoint)
			});

			// hide the error box until its input is focused
			if (settings.hide) {
				errorBox.hide().attr('aria-hidden', true);
				input.focus(function() {
					errorBox.show().removeAttr('aria-hidden');
				}).blur(function() {
					errorBox.hide().attr('aria-hidden', true);
				});
			}
		});
	};
})(jQuery);