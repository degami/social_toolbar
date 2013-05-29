(function($){
	$(document).ready(function(){

		var icon_w=parseInt(Drupal.settings.social_toolbar.icon_w);
		var icon_h=parseInt(Drupal.settings.social_toolbar.icon_h);
		var openpanel_w=parseInt(Drupal.settings.social_toolbar.openpanel_w);
		var openpanel_h=parseInt(Drupal.settings.social_toolbar.openpanel_h);
		var closedpanel_w=parseInt(Drupal.settings.social_toolbar.closedpanel_w);
		var closedpanel_h=parseInt(Drupal.settings.social_toolbar.closedpanel_h);
		var internal_panel_open_w = openpanel_w - icon_w;
		var internal_panel_open_h = openpanel_h - icon_h;

		var get_social_toolbar_dimensions = function(){
			var toolbar_h=0;var toolbar_w=0;
			$('.social_toolbar .icon').each(function(index,value){
				switch(Drupal.settings.social_toolbar.position){
					case '0':
						toolbar_w+=$(value).parent().width()+10;
						toolbar_h=$(value).parent().height();
						break;
					case '1':
						toolbar_w=$(value).parent().width();
						toolbar_h+=$(value).parent().height()+10;					
						break;
					case '2':
						toolbar_w+=$(value).parent().width()+10;
						toolbar_h=$(value).parent().height();
						break;
					case '3':
						toolbar_w=$(value).parent().width();
						toolbar_h+=$(value).parent().height()+10;
						break;
				}
			});
			return {
				'toolbar_h': toolbar_h,
				'toolbar_w': toolbar_w
			};
		}


		var reposition_social_toolbar = function(toolbar_w, toolbar_h){
			switch(Drupal.settings.social_toolbar.position){
				case '0':
					switch(Drupal.settings.social_toolbar.alignment){
						case '0':
							break;
						case '1':
							$('.social_toolbar').animate({'margin-left':Math.round(-1*toolbar_w/2)+'px'},500);
							break;
						case '2':
							break;
					}
					break;
				case '1':
					switch(Drupal.settings.social_toolbar.alignment){
						case '0':
							break;
						case '1':
							$('.social_toolbar').animate({'margin-top':Math.round(-1*toolbar_h/2)+'px'},500);
							break;
						case '2':
							break;
					}
					break;
				case '2':
					switch(Drupal.settings.social_toolbar.alignment){
						case '0':
							break;
						case '1':
							$('.social_toolbar').animate({'margin-left':Math.round(-1*toolbar_w/2)+'px'},500);
							break;
						case '2':
							break;
					}
					break;
				case '3':
					switch(Drupal.settings.social_toolbar.alignment){
						case '0':
							break;
						case '1':
							$('.social_toolbar').animate({'margin-top':Math.round(-1*toolbar_h/2)+'px'},500);
							break;
						case '2':
							break;
					}
					break;
			}
		}

		$('.social_toolbar .icon a').click(function(evt){
				evt.preventDefault();
				var $panel=$(this).parent().parent();
				var $others=$('.social_toolbar .icon').not($(this).parent());
				$others.each(function(){
					var $otherpanel=$(this).parent();
					if($otherpanel.hasClass('open')){
						$otherpanel.animate({height: closedpanel_h+'px',width: closedpanel_w+'px'},500,null,function(){
							$otherpanel.removeClass('open');	
						});
					}
				});

				if($panel.hasClass('open')){
					$panel.animate({height: closedpanel_h+'px',width: closedpanel_w+'px'},500,null,function(){
						var toolbar_h=0;var toolbar_w=0;
						var dimensions = get_social_toolbar_dimensions();
						toolbar_h = dimensions.toolbar_h;
						toolbar_w = dimensions.toolbar_w;
						reposition_social_toolbar(toolbar_w,toolbar_h);

						$panel.removeClass('open');
						$panel.find('.panel').css({'width':0,'height':0});
					});
				}else{
					$panel.addClass('open');
					$panelcontent=$panel.find('.panel');

					$panel.find('.panel').css({'width':internal_panel_open_w,'height':internal_panel_open_h});					
					var element=$panel.find('.panel').get(0);
					if( element.offsetHeight < element.scrollHeight || element.offsetWidth < element.scrollWidth){
						// your element have overflow
					}else{
						//your element don't have overflow
						$panel.find('.panel').css({'height':'auto'});
					}

					if($panel.find('.panel').height()>internal_panel_open_h) $panel.find('.panel').height(internal_panel_open_h);
					
					//$panel.css({'height':$panel.find('.panel').height()+'px'});
					openpanel_h = $panel.find('.panel').height()+30;
					openpanel_w = $panel.find('.panel').width()+20;

					$panel.animate({height: openpanel_h+'px',width: openpanel_w+'px'},500,null,function(){
						var toolbar_h=0;var toolbar_w=0;
						var dimensions = get_social_toolbar_dimensions();
						toolbar_h = dimensions.toolbar_h;
						toolbar_w = dimensions.toolbar_w;
						reposition_social_toolbar(toolbar_w,toolbar_h);
					});
				}
				return false;
		});
		

		var toolbar_h=0;var toolbar_w=0;
		var dimensions = get_social_toolbar_dimensions();
		toolbar_h = dimensions.toolbar_h;
		toolbar_w = dimensions.toolbar_w;
		reposition_social_toolbar(toolbar_w,toolbar_h);
	});
})(jQuery);