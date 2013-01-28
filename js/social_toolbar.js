(function($){
	$(document).ready(function(){
		
		var openpanel_w=parseInt(Drupal.settings.social_toolbar.openpanel_w);
		var openpanel_h=parseInt(Drupal.settings.social_toolbar.openpanel_h);
		var closedpanel_w=parseInt(Drupal.settings.social_toolbar.closedpanel_w);
		var closedpanel_h=parseInt(Drupal.settings.social_toolbar.closedpanel_h);
		var internal_panel_open_w = openpanel_w;
		var internal_panel_open_h = openpanel_h;
		
		switch(Drupal.settings.social_toolbar.position){
			case '0':
				internal_panel_open_w-=40;
				internal_panel_open_h-=20;
				break;
			case '1':
				internal_panel_open_w-=20;
				internal_panel_open_h-=40;
				break;
			case '2':
				internal_panel_open_w-=40;
				internal_panel_open_h-=20;
				break;
			case '3':
				internal_panel_open_w-=20;
				internal_panel_open_h-=40;
				break;
		}
		
		$('.social_toolbar .icon').click(function(evt){
				evt.preventDefault();
				var $panel=$(this).parent();
				var $others=$('.social_toolbar .icon').not($(this));
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
						switch(Drupal.settings.social_toolbar.position){
							case '0':
								$('.social_toolbar').animate({'margin-left':Math.round(-1*toolbar_w/2)+'px'},500);
								break;
							case '1':
								$('.social_toolbar').animate({'margin-top':Math.round(-1*toolbar_h/2)+'px'},500);
								break;
							case '2':
								$('.social_toolbar').animate({'margin-left':Math.round(-1*toolbar_w/2)+'px'},500);
								break;
							case '3':
								$('.social_toolbar').animate({'margin-top':Math.round(-1*toolbar_h/2)+'px'},500);
								break;
						}
						$panel.removeClass('open');
						$panel.find('.panel').css({'width':0,'height':0});
					});
				}else{
					$panel.addClass('open');
					$panelcontent=$panel.find('.panel');

					$panel.find('.panel').css({'width':internal_panel_open_w,'height':internal_panel_open_h});					
					var element=$panel.find('.panel').get(0);console.log(element)
					if( element.offsetHeight < element.scrollHeight || element.offsetWidth < element.scrollWidth){
						// your element have overflow
					}else{
						//your element don't have overflow
						$panel.find('.panel').css({'height':'auto'});
					}
					
					if($panel.find('.panel').height()>internal_panel_open_h)$panel.find('.panel').height(internal_panel_open_h);
					
					$panel.animate({height: openpanel_h+'px',width: openpanel_w+'px'},500,null,function(){
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
						switch(Drupal.settings.social_toolbar.position){
							case '0':
								$('.social_toolbar').animate({'margin-left':Math.round(-1*toolbar_w/2)+'px'},500);
								break;
							case '1':
								$('.social_toolbar').animate({'margin-top':Math.round(-1*toolbar_h/2)+'px'},500);
								break;
							case '2':
								$('.social_toolbar').animate({'margin-left':Math.round(-1*toolbar_w/2)+'px'},500);
								break;
							case '3':
								$('.social_toolbar').animate({'margin-top':Math.round(-1*toolbar_h/2)+'px'},500);
								break;
						}
					});
				}
				return false;
		});
		
		var toolbar_h=0;var toolbar_w=0;
		$('.social_toolbar .icon').each(function(index,value){
			switch(Drupal.settings.social_toolbar.position){
				case '0':
					toolbar_w+=$(value).parent().width()+10;
					toolbar_h=$(value).parent().height();
					break;
				case '1':
					toolbar_w=$(value).parent().height();
					toolbar_h+=$(value).parent().height()+10;					
					break;
				case '2':
					toolbar_w+=$(value).parent().height()+10;
					toolbar_h=$(value).parent().height();
					break;
				case '3':
					toolbar_w=$(value).parent().height();
					toolbar_h+=$(value).parent().height()+10;
					break;
			}
		});
		switch(Drupal.settings.social_toolbar.position){
			case '0':
				$('.social_toolbar').animate({'margin-left':Math.round(-1*toolbar_w/2)+'px'},500);
				break;
			case '1':
				$('.social_toolbar').animate({'margin-top':Math.round(-1*toolbar_h/2)+'px'},500);
				break;
			case '2':
				$('.social_toolbar').animate({'margin-left':Math.round(-1*toolbar_w/2)+'px'},500);
				break;
			case '3':
				$('.social_toolbar').animate({'margin-top':Math.round(-1*toolbar_h/2)+'px'},500);
				break;
		}
	});
})(jQuery);