define(function(require, exports, module) {     
	return function() {
		(function($) {
			$.extend({

				toast: function(info, options) {

					var opts = $.extend({}, $.toast.defaults, options);

					func.showOverlay(0);

					var tips = $('<p style="font-size:' + opts.font_size + 'px;text-align:center;vertical-align:middle;background-color:rgba(0,0,0,1);z-index:1000;position:fixed;width:' + opts.width + 'px;height:' + opts.height + 'px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;color:#fff;line-height:' + opts.height + 'px;">' + info + '</p>').appendTo('body');

					func.centershow(tips);

					setTimeout(function() {
						tips.remove();
						func.showOverlay(1);
					}, opts.time);
				}
			});

			$.toast.defaults = {
				time: 2000,
				width: 300,
				height: 100,
				font_size: 14
			};


			var func = {
				showOverlay: function(clear, opts) {
					var overlay = $('<div id="J_overlay" style="position:absolute;left:0;top:0;background:#000;_filter:alpha(opacity=50);z-index:999;"></div>');

					if (!clear) {
						overlay.appendTo($('body')).css({
							'width': $(window).width(),
							'height': $(window).height(),
							'opacity': 0.5
						});
					} else {
						$('#J_overlay').remove();
					}
				},
				centershow: function(divName) {
					var top = ($(window).height() - $(divName).height()) / 2;
					var left = ($(window).width() - $(divName).width()) / 2;
					var scrollTop = $(document).scrollTop() || 0;
					var scrollLeft = $(document).scrollLeft() || 0;
					$(divName).css({
						position: 'absolute',
						'top': top + scrollTop,
						'left': left + scrollLeft
					}).show();
					//$('#_overlay_').show();
				}
			}
		})(jQuery);
	}
})