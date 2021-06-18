$.extend({
  getUrlVars: function(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name){
    return $.getUrlVars()[name];
  }
});

/*!
 * jQuery EU Cookie Law Plugin
 * http://www.ss88.co.uk/eu-cookie-law-jquery-tool/
 *
 * Copyright 2012, Steven Sullivan
 * Free to for all except the 'jQuery Cookie Plugin' plugin attached.
 */
 
jQuery.fn.extend( {
	acceptCookies: function(options) {
			var hostname = document.location.host;
			if(hostname.indexOf(".dk")>0 && hostname.indexOf("int.")==-1 && hostname.indexOf(".dkpto.org")==-1 && hostname.indexOf(".stopfakes.dk")==-1){
				var txt1 = 'Vi bruger cookies på hjemmesiden. Når du klikker dig videre accepterer du cookies. <a href="http://www.dkpto.dk/info/information-om-cookies/" target="_blank">Læs mere her</a><div style="padding:15px 0"><button id="ac_accept">Ok, så ved jeg det</button><button id="ac_decline">Jeg afviser cookies</button></div>';
				var txt2 = 'Ved at afvise vores brug af cookies, kan der være funktioner og sider som helt eller delvist er utilgængelige, da de kræver cookies.\nBemærk: der bliver placeret en enkelt cookie på din computer for at huske afvisningen';
			}else{
				var txt1 = 'Our homepage uses cookies to optimize content and to collect statistics. <a href="http://www.dkpto.org/cookies.aspx" target="_blank">Read more about our use of cookies here</a>.<br/>By continued use of this homepage you automatically accepts our use of cookies<br/><br/><button id="ac_accept">ACCEPT COOKIES</button><button id="ac_decline">DECLINE COOKIES</button>';
				var txt2 = 'By rejecting our use of cookies, there may be features and pages that are inaccessible because they require cookies to work as intended.\nPlease note: there is placed a single cookie on your computer to remember the cookie rejection';
			}

			$('.allowCookiesBtn').click(function(e) {
				$().setCookies();
				window.location.replace($('#ourl').val());
			});

			if($.getUrlVar('hideCookieWarning')!=1 && $.cookie('dkptoDisallowCookies')== null){
				$("a").click(function() {
  					$().setCookies();
				});
			}

			if($.getUrlVar('hideCookieWarning')!=1){
            //Set the value names / defaults
            var defaults = {
				position: 'bottom',
				textcolour: '#333',
				fontfamily: '\'Open Sans\', sans-serif'
            }
                 
            var options =  $.extend(defaults, options);
 
            return this.each(function() {
                var o = options;
				
			if($.cookie('dkptoAllowCookies')!= null) {
				return $();
			}
			else if($.cookie('dkptoDisallowCookies')!= null) {
				return setInterval(function() {$().deleteAllCookies()}, 1000);
			}
		
			$('body').append('<div id="accept_cookies">'+txt1+'</div>');
			
			$('#accept_cookies').css({
				'background-color' : '#f3f3f3',
				'font-size' : '13px',
				'z-index': 999999,
				'opacity' : 1,
				'position' : 'fixed',
				'padding' : '15px',
				'padding-top' : '25px',
				'width' : '100%',
				'text-align' : 'center',
				'left' : 0,
				'color' : o.textcolour,
				'font-family' : o.fontfamily,
				'border-top' : '1px solid #ccc',
			});
			
			if(o.position == 'top')
				$('#accept_cookies').css('top',0)
			else
				$('#accept_cookies').css('bottom',0)
			
			$('#accept_cookies span').css({
				'display' : 'block',
				'font-size' : '80%',
				'margin' : '5px 0'
			});
			
			$('#accept_cookies a').css({
				'text-decoration' : 'underline',
				'color' : '#000'
			});
			
			$('#accept_cookies a#ac_link').css({
				'display' : 'block',
				'font-size' : '60%',
				'text-decoration' : 'none',
				'position' : 'absolute',
				'right' : '20px',
				'bottom' : '10px',
				'color' : '#FFF'
			});
			    
			$('#accept_cookies button').css({
				'border-radius' : '0 !important',
				'background-color': '#fb8631',
				'border':0,
				'padding':'10px 20px',
				'font-weight':'bold',
				'cursor' : 'pointer',
				'margin' : '0 10px',
				'color' : '#fff',
			});
			
			$('#accept_cookies button#ac_decline').css({
				'background-color': 'transparent',
				'color':'#F9863D',
				'font-weight': 'bold',
            }).click(function(e) {
				e.preventDefault();
				var conf = confirm(txt2);
				if(conf)
				{
					//setInterval(function() {$().deleteAllCookies()}, 1000);
					$.cookie('dkptoDisallowCookies', true, { expires: 365, path: '/' });
					$.cookie('dkptoDisallowCookies', true, { expires: 365, path: '/' });
					$('#accept_cookies').fadeOut();
				}
			});


			
			$('#accept_cookies button#ac_accept').click(function(e) {
				e.preventDefault();
				$().setCookies();
				$('#accept_cookies').fadeOut();
			});
            });
			}
        },
    setCookies: function(){
				var cookies = document.cookie.split(";");
				var ccc = document.cookie;
				for (var i = 0; i < cookies.length; i++) {
					var cookie = cookies[i];
					var eqPos = cookie.indexOf("=");
					var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
					if($.trim(name) == 'dkptoDisallowCookies') {
						$.cookie($.trim(name), null, { domain: $().ACgetDomain(), path: '/' });
						$.cookie($.trim(name), null, { domain: 'www.' + $().ACgetDomain(), path: '/' });
						$.cookie($.trim(name), null, { domain: '.' + $().ACgetDomain(), path: '/' });
						$.cookie($.trim(name), null, { domain: document.domain, path: '/' });
						$.cookie($.trim(name), null, { path: '/' });
					}
				}
    			$.cookie('dkptoAllowCookies', true, { expires: 365, path: '/', domain: '.dkpto.dk' });
				$.cookie('dkptoAllowCookies', true, { expires: 365, path: '/', domain: '.dkpto.dk' });
				$.cookie('dkptoAllowCookies', true, { expires: 365, path: '/', domain: '.dkpto.org' });
				$.cookie('dkptoAllowCookies', true, { expires: 365, path: '/', domain: '.dkpto.org' });
				$.cookie('dkptoAllowCookies', true, { expires: 365, path: '/', domain: '.ip-handelsportal.dk' });
				$.cookie('dkptoAllowCookies', true, { expires: 365, path: '/', domain: '.ip-handelsportal.dk' });
				$.cookie('dkptoAllowCookies', true, { expires: 365, path: '/', domain: '.ip-tradeportal.org' });
				$.cookie('dkptoAllowCookies', true, { expires: 365, path: '/', domain: '.ip-tradeportal.org' });
				$.cookie('dkptoAllowCookies', true, { expires: 365, path: '/', domain: '.ip-tradeportal.com' });
				$.cookie('dkptoAllowCookies', true, { expires: 365, path: '/', domain: '.ip-tradeportal.com' });
				$.cookie('dkptoAllowCookies', true, { expires: 365, path: '/', domain: '.iprturnaround.dk' });
				$.cookie('dkptoAllowCookies', true, { expires: 365, path: '/', domain: '.iprturnaround.dk' });
				$.cookie('dkptoAllowCookies', true, { expires: 365, path: '/', domain: '.iprcostbenefitguide.dk' });
				$.cookie('dkptoAllowCookies', true, { expires: 365, path: '/', domain: '.iprcostbenefitguide.dk' });
				$.cookie('dkptoAllowCookies', true, { expires: 365, path: '/', domain: '.iprcostbenefitguide.com' });
				$.cookie('dkptoAllowCookies', true, { expires: 365, path: '/', domain: '.iprcostbenefitguide.com' });				
				$.cookie('dkptoAllowCookies', true, { expires: 365, path: '/', domain: '.stoppiraterne.dk' });
				$.cookie('dkptoAllowCookies', true, { expires: 365, path: '/', domain: '.stoppiraterne.dk' });
				$.cookie('dkptoAllowCookies', true, { expires: 365, path: '/', domain: '.styrkdinide.dk' });
				$.cookie('dkptoAllowCookies', true, { expires: 365, path: '/', domain: '.styrkdinide.dk' });
				$.cookie('dkptoAllowCookies', true, { expires: 365, path: '/', domain: '.boostyouridea.org' });
				$.cookie('dkptoAllowCookies', true, { expires: 365, path: '/', domain: '.boostyouridea.org' });
				$.cookie('dkptoAllowCookies', true, { expires: 365, path: '/', domain: '.stopfakes.dk' });
				$.cookie('dkptoAllowCookies', true, { expires: 365, path: '/', domain: '.stopfakes.dk' });				
				$.cookie('dkptoAllowCookies', true, { expires: 365, path: '/', domain: '.stoppiratkopiering.dk' });
				$.cookie('dkptoAllowCookies', true, { expires: 365, path: '/', domain: '.stoppiratkopiering.dk' });				
				$.cookie('dkptoAllowCookies', true, { expires: 365, path: '/', domain: '.ip-marketplace.org' });
				$.cookie('dkptoAllowCookies', true, { expires: 365, path: '/', domain: '.ip-marketplace.org' });				
    }
        ,
	deleteAllCookies: function() {
		return $();
		var cookies = document.cookie.split(";");
		var ccc = document.cookie;
		for (var i = 0; i < cookies.length; i++) {
			var cookie = cookies[i];
			var eqPos = cookie.indexOf("=");
			var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
			if($.trim(name) != 'dkptoDisallowCookies') {
				$.cookie($.trim(name), null, { domain: $().ACgetDomain(), path: '/' });
				$.cookie($.trim(name), null, { domain: 'www.' + $().ACgetDomain(), path: '/' });
				$.cookie($.trim(name), null, { domain: '.' + $().ACgetDomain(), path: '/' });
				$.cookie($.trim(name), null, { domain: document.domain, path: '/' });
				$.cookie($.trim(name), null, { path: '/' });
				//alert('+'+$.trim(name)+'+ - ' + $().ACgetDomain() + '-' + 'www.' + $().ACgetDomain());
				//console.log('+'+$.trim(name)+'+ -' + $().ACgetDomain() + '-' + 'www.' + $().ACgetDomain() + '-');
			}
		}
		
		return $();
	},
	ACgetDomain: function() {
		return window.location.hostname.replace(/([a-zA-Z0-9]+.)/,"");
	}
});

$(document).ready(function() { $(this).acceptCookies(); });


/*!
 * jQuery Cookie Plugin v1.2
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function(a,b,c){function e(a){return a}function f(a){return decodeURIComponent(a.replace(d," "))}var d=/\+/g;a.cookie=function(d,g,h){if(g!==c&&!/Object/.test(Object.prototype.toString.call(g))){h=a.extend({},a.cookie.defaults,h);if(g===null){h.expires=-1}if(typeof h.expires==="number"){var i=h.expires,j=h.expires=new Date;j.setDate(j.getDate()+i)}g=String(g);return b.cookie=[encodeURIComponent(d),"=",h.raw?g:encodeURIComponent(g),h.expires?"; expires="+h.expires.toUTCString():"",h.path?"; path="+h.path:"",h.domain?"; domain="+h.domain:"",h.secure?"; secure":""].join("")}h=g||a.cookie.defaults||{};var k=h.raw?e:f;var l=b.cookie.split("; ");for(var m=0,n;n=l[m]&&l[m].split("=");m++){if(k(n.shift())===d){return k(n.join("="))}}return null};a.cookie.defaults={};a.removeCookie=function(b,c){if(a.cookie(b,c)!==null){a.cookie(b,null,c);return true}return false}})(jQuery,document)

