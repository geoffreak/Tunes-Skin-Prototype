/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

// proto.js for Anime Bite (c) 2010 Sugoida Designs
$(document).ready(function(){
	var json = $.parseJSON($.ajax({url: "talk.php", async: false}).responseText);
	var nav_html = "";
	$.each(json.navigation, function(category, category_data){
		nav_html += "<div class=\"nav_menu\" id=\"group-" + category + "\">" + category_data.title + "</div>";
		$.each(category_data.elements, function(element, element_data){
			nav_html += "<div class=\"nav_element\" id=\"group-" + category + "\"><div class=\"nav_link\"" + (element_data.icon.length ? " style=\"background-image: url(" + element_data.icon + ")\"" : "") + " id=\"code-" + element_data.code_format_id + "\">" + element_data.title + "</div></div>";
		});
	});
	$(".nav").append(nav_html);
	$.extend($.fn.disableTextSelect = function() {
		return this.each(function(){
			if($.browser.mozilla){//Firefox
				$(this).css('MozUserSelect','none');
			}else if($.browser.msie){//IE
				$(this).bind('selectstart',function(){return false;});
			}else{//Opera, etc.
				$(this).mousedown(function(){return false;});
			}
		});
	});
	$(document).keydown(function(e){
		if (left_active && $(".nav").data("highlighted") != null && (e.keyCode == 38 || e.keyCode == 40))
		{
			var element = $(".nav").data("highlighted");
			var last_valid = $(".nav").data("highlighted");
			if (e.keyCode == 40) // down
			{
				while (element.next().html() != null)
				{
					element = element.next();
					if (element.hasClass("nav_element") && element.is(':visible'))
					{
						last_valid = element;
						break;
					}
				}
			}
			else if (e.keyCode == 38) // up
			{
				while (element.prev().html() != null)
				{
					element = element.prev();
					if (element.hasClass("nav_element") && element.is(':visible'))
					{
						last_valid = element;
						break;
					}
				}
			}
			var same = false;
			if (last_valid == $(".nav").data("highlighted"))
				same = true
			last_valid.click();
			var spacing = 10;
			if (last_valid.position().top + last_valid.height() > $(".nav").height() - spacing)
				$(".nav").scrollTo(last_valid, 0, {offset: (spacing - $(".nav").height() + last_valid.height())});
			else if (last_valid.position().top < + spacing)
				$(".nav").scrollTo(last_valid, 0, {offset: (0 - spacing)});
			return same;
		}
		else if (e.keyCode == 39) //right
		{
			var next = $("body").data("right").next(".right");
			if (next.html() == null)
				return false;
			next.css("width", $("body").data("right").width()).css("left", $(window).width()).show();
			$("body").data("right").css("width", $("body").data("right").width()).removeAttr("id");
			$("body").data("right").animate({left: $("#left").width() - $("body").data("right").width()}, "normal", function(){ $(this).hide(); });
			next.animate({left: $("#left").width(), right: "0px"}, "normal");
			next.attr("id", "active_div").css("width", "auto");
			$("body").data("right", next);
			return false;
		}
		else if (e.keyCode == 37) // left
		{
			var prev = $("body").data("right").prev(".right");
			if (prev.html() == null)
				return false;
			prev.css("width", $("body").data("right").width()).css("left", $("#left").width() - $("body").data("right").width()).show();
			$("body").data("right").css("width", $("body").data("right").width()).removeAttr("id");
			$("body").data("right").animate({left: $(window).width()}, "normal", function(){ $(this).hide(); });
			prev.animate({left: $("#left").width(), right: "0px"}, "normal");
			prev.attr("id", "active_div").css("width", "auto");
			$("body").data("right", prev);
			return false;
		}
	});
	$(".nav").data("highlighted", null);
	$(".no_select").disableTextSelect();
	var left_active = false;
	$("body").click(function(){
		if ($(".nav").data("highlighted") != null)
		{
			$(".nav").data("highlighted").children("div").removeClass("highlighted");
			$(".nav").data("highlighted").children("div").addClass("highlighted_dim");
		}
		left_active = false;
	});
	$("#left").click(function(){
		if ($(".nav").data("highlighted") != null)
		{
			$(".nav").data("highlighted").children("div").removeClass("highlighted_dim");
			$(".nav").data("highlighted").children("div").addClass("highlighted");
		}
		left_active = true;
		return false;
	});
	$("#left .nav_element").click(function(){
		left_active = true;
		if ($(".nav").data("highlighted") != null)
		{
			if ($(".nav").data("highlighted") == $(this))
			{
				return false;
			}
			$(".nav").data("highlighted").children("div").removeClass("highlighted");
			$(".nav").data("highlighted").children("div").removeClass("highlighted_dim");
		}
		$(".nav").data("highlighted", $(this));
		$(this).children("div").addClass("highlighted");
		return false;
	});
	$("#breadcrumbs").data("mouse_down", false);
	$("#breadcrumbs").data("highlighted", null);
	$("#breadcrumbs").data("highlighted_prev", null);
	$(document).mouseup(function(){
		$("#breadcrumbs").data("mouse_down", false);
		bread_clear();
	});
	$("#breadcrumbs .breadcrumb").mouseup(function(){
		$(document).mouseup();
		// do breadcrumb action
		return false;
	});
	$("#breadcrumbs .breadcrumb").mousedown(function(){
		$("#breadcrumbs").data("mouse_down", true);
		bread_clear();
		bread_click($(this));
	});
	$("#breadcrumbs").mouseout(function(){
		bread_clear();
	});
	$("#breadcrumbs").mouseover(function(){
		if ($("#breadcrumbs").data("mouse_down"))
		{
			bread_click($("#breadcrumbs").data("highlighted"));
		}
	});
	function bread_clear()
	{
		if ($("#breadcrumbs").data("highlighted") != null)
		{
			$("#breadcrumbs").data("highlighted").removeClass("breadcrumb_clicked");
			if ($("#breadcrumbs").data("highlighted_prev") != null)
			{
				$("#breadcrumbs").data("highlighted_prev").removeClass("breadcrumb_clicked_next");
			}
		}
	}
	function bread_click(element)
	{
		element.addClass("breadcrumb_clicked");
		$("#breadcrumbs").data("highlighted", element);
		if (element.prev().html() != null)
		{
			element.prev().addClass("breadcrumb_clicked_next");
			$("#breadcrumbs").data("highlighted_prev", element.prev());
		}
		else
		{
			$("#breadcrumbs").data("highlighted_prev", null);
		}
	}

	// go!
	$("#left .nav_element:first").click();
	$("body").data("right", $(".right[id='active_div']"));
	$(".right[id!='active_div']").each(function(){
		$(this).hide();
	});
});
