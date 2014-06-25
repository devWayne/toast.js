(function($) {

	$.showTips = function(info,options) {
		var defaults = {
			time: 2000,
			width:300,
			font_size: 14
		};

		var opts = $.extend(defaults, options);

		func.showOverlay(0);

		var tips = $('<p class="ajax-tips weixin-sharex-tips" style="font-size:'+opts.font_size+'px;text-align:center;background-color:rgba(0,0,0,0.8);position:fixed;width:'+opts.width+'px;padding:40px 10px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;color:#fff;line-height:180%;">' + info + '</p>').appendTo('body');

		func.centershow(tips);

		setTimeout(function() {
			tips.remove();
			func.showOverlay(1);
		}, opts.time);
	};

	var func = {
		showOverlay: function (clear,opts) {
			var overlay = $('<div id="J_overlay" class="dialogue_overlay" style="position:absolute;left:0;top:0;background:#000;_filter:alpha(opacity=50);z-index:50000;"></div>');

			if (!clear) {
				overlay.appendTo($('body')).css({
					'width': $(window).width(),
					'height': $('body').height(),
					'opacity': 0.5
				});
			} else {
				$('#J_overlay').remove();
			}
		},
		centershow: function (divName) {
			var top = ($(window).height() - $(divName).height()) / 2;
			var left = ($(window).width() - $(divName).width()) / 2;
			var scrollTop = $(document).scrollTop();
			var scrollLeft = $(document).scrollLeft();
			$(divName).css({
				position: 'absolute',
				'top': top + scrollTop,
				'left': left + scrollLeft
			}).show();
			//$('#_overlay_').show();
		}
	}
})(jQuery);