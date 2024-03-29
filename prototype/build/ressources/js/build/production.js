(function(global) {
var charmap = {
    // Latin
    'À': 'A', 'Á': 'A', 'Â': 'A', 'Ã': 'A', 'Ä': 'A', 'Å': 'A', 'Æ': 'AE',
    'Ç': 'C', 'È': 'E', 'É': 'E', 'Ê': 'E', 'Ë': 'E', 'Ì': 'I', 'Í': 'I',
    'Î': 'I', 'Ï': 'I', 'Ð': 'D', 'Ñ': 'N', 'Ò': 'O', 'Ó': 'O', 'Ô': 'O',
    'Õ': 'O', 'Ö': 'O', 'Ő': 'O', 'Ø': 'O', 'Ù': 'U', 'Ú': 'U', 'Û': 'U',
    'Ü': 'U', 'Ű': 'U', 'Ý': 'Y', 'Þ': 'TH', 'ß': 'ss',
    'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a', 'æ': 'ae',
    'ç': 'c', 'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e', 'ì': 'i', 'í': 'i',
    'î': 'i', 'ï': 'i', 'ð': 'd', 'ñ': 'n', 'ò': 'o', 'ó': 'o', 'ô': 'o',
    'õ': 'o', 'ö': 'o', 'ő': 'o', 'ø': 'o', 'ù': 'u', 'ú': 'u', 'û': 'u',
    'ü': 'u', 'ű': 'u', 'ý': 'y', 'þ': 'th', 'ÿ': 'y', 'ẞ': 'SS',
  
    // Greek
    'Α': 'A', 'Β': 'B', 'Γ': 'G', 'Δ': 'D', 'Ε': 'E', 'Ζ': 'Z', 'Η': 'H',
    'Θ': '8', 'Ι': 'I', 'Κ': 'K', 'Λ': 'L', 'Μ': 'M', 'Ν': 'N', 'Ξ': '3',
    'Ο': 'O', 'Π': 'P', 'Ρ': 'R', 'Σ': 'S', 'Τ': 'T', 'Υ': 'Y', 'Φ': 'F',
    'Χ': 'X', 'Ψ': 'PS', 'Ω': 'W',
    'Ά': 'A', 'Έ': 'E', 'Ί': 'I', 'Ό': 'O', 'Ύ': 'Y', 'Ή': 'H', 'Ώ': 'W',
    'Ϊ': 'I', 'Ϋ': 'Y',
    'α': 'a', 'β': 'b', 'γ': 'g', 'δ': 'd', 'ε': 'e', 'ζ': 'z', 'η': 'h',
    'θ': '8', 'ι': 'i', 'κ': 'k', 'λ': 'l', 'μ': 'm', 'ν': 'n', 'ξ': '3',
    'ο': 'o', 'π': 'p', 'ρ': 'r', 'σ': 's', 'τ': 't', 'υ': 'y', 'φ': 'f',
    'χ': 'x', 'ψ': 'ps', 'ω': 'w',
    'ά': 'a', 'έ': 'e', 'ί': 'i', 'ό': 'o', 'ύ': 'y', 'ή': 'h', 'ώ': 'w',
    'ς': 's', 'ϊ': 'i', 'ΰ': 'y', 'ϋ': 'y', 'ΐ': 'i',
  
    // Turkish
    'Ş': 'S', 'İ': 'I', 'Ğ': 'G',
    'ş': 's', 'ı': 'i', 'ğ': 'g',
  
    // Russian
    'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'Yo',
    'Ж': 'Zh', 'З': 'Z', 'И': 'I', 'Й': 'J', 'К': 'K', 'Л': 'L', 'М': 'M',
    'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U',
    'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Sh', 'Ъ': 'U',
    'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya',
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo',
    'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm',
    'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
    'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh', 'ъ': 'u',
    'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya',
  
    // Ukranian
    'Є': 'Ye', 'І': 'I', 'Ї': 'Yi', 'Ґ': 'G',
    'є': 'ye', 'і': 'i', 'ї': 'yi', 'ґ': 'g',
  
    // Czech
    'Č': 'C', 'Ď': 'D', 'Ě': 'E', 'Ň': 'N', 'Ř': 'R', 'Š': 'S', 'Ť': 'T',
    'Ů': 'U', 'Ž': 'Z',
    'č': 'c', 'ď': 'd', 'ě': 'e', 'ň': 'n', 'ř': 'r', 'š': 's', 'ť': 't',
    'ů': 'u', 'ž': 'z',
  
    // Polish
    'Ą': 'A', 'Ć': 'C', 'Ę': 'e', 'Ł': 'L', 'Ń': 'N', 'Ś': 'S', 'Ź': 'Z',
    'Ż': 'Z',
    'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ś': 's', 'ź': 'z',
    'ż': 'z',
  
    // Latvian
    'Ā': 'A', 'Ē': 'E', 'Ģ': 'G', 'Ī': 'i', 'Ķ': 'k', 'Ļ': 'L', 'Ņ': 'N',
    'Ū': 'u',
    'ā': 'a', 'ē': 'e', 'ģ': 'g', 'ī': 'i', 'ķ': 'k', 'ļ': 'l', 'ņ': 'n',
    'ū': 'u',
  
    // Currency
    '€': 'euro', '₢': 'cruzeiro', '₣': 'french franc', '£': 'pound',
    '₤': 'lira', '₥': 'mill', '₦': 'naira', '₧': 'peseta', '₨': 'rupee',
    '₩': 'won', '₪': 'new shequel', '₫': 'dong', '₭': 'kip', '₮': 'tugrik',
    '₯': 'drachma', '₰': 'penny', '₱': 'peso', '₲': 'guarani',
    '₳': 'austral', '₴': 'hryvnia', '₵': 'cedi', '¢': 'cent', '¥': 'yen',
    '元': 'yuan', '円': 'yen', '﷼': 'rial', '₠': 'ecu', '¤': 'currency',
    '฿': 'baht', "$": 'dollar', '₹': 'indian rupee',
  
    // Symbols
    '©': '(c)', 'œ': 'oe', 'Œ': 'OE', '∑': 'sum', '®': '(r)', '†': '+',
    '“': '"', '”': '"', '‘': "'", '’': "'", '∂': 'd', 'ƒ': 'f', '™': 'tm',
    '℠': 'sm', '…': '...', '˚': 'o', 'º': 'o', 'ª': 'a', '•': '*',
    '∆': 'delta', '∞': 'infinity', '♥': 'love', '&': 'and', '|': 'or',
    '<': 'less', '>': 'greater'
  };
  var charmapPattern = Object.keys(charmap).map(function(char) {
    // Update this with every normalized character that is also a unicode
    // operator.
    return char.replace(/[\|\$]/g, '\\$&');  // `$&` -> returns matched text
  }).join('|');
  var charmapRegExp = new RegExp('(' + charmapPattern + ')', 'g');
  
  /**
   * A function for normalizing unicode characters from a string.
   *
   * @module
   * @param {String} str The string ready to be tokenized
   * @returns {String}
   */
  var unicodeNormalizer = function(str) {
    return str.replace(charmapRegExp, function(char) {
      return charmap[char];
    });
  };

  global.unicodeNormalizer = unicodeNormalizer;
})(this);
(function(global) {

	var support = {},
		ua = navigator.userAgent;


	function toCameCase(name) {
		return name.replace(/([a-z])-([a-z])/g, function(str, m1, m2) {
			return m1 + m2.toUpperCase();
		}).replace(/^-/, '');
	}


	//Test d'une propriété css
	function testCSS(prop) {
		if (prop.indexOf('-') != -1) {
			prop = toCameCase(prop);
		}
		var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
				prefixes = 'Moz O ms Webkit',
				prefixesArr = prefixes.split(' '),
				props = (prop + ' ' + prefixesArr.join(ucProp + ' ') + ucProp).split(' ');

		var el = document.createElement('a');
		var propsLength = props.length,
				i,
				p;

		for (i = 0; i < propsLength; i++) {
			p = props[i];
			if (el.style[p] !== undefined) {
				return p;
			}
		}
		return false;
	}


	//Support history
	function test_history() {
		if((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
				ua.indexOf('Mobile Safari') !== -1 &&
				ua.indexOf('Chrome') === -1 &&
				ua.indexOf('Windows Phone') === -1 &&
				location.protocol !== 'file:') {
			return false;
		}
		// if(ua.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/)) {
		// 	return false;
		// }
		return (window.history && 'pushState' in window.history && 'replaceState' in window.history);
	}
	support.history = test_history();


	//Event animation/transition end
	function transitionEndEventName() {
		var i,
				el = document.createElement('div'),
				transitions = {
						'transition':'transitionend',
						'OTransition':'otransitionend',  // oTransitionEnd in very old Opera
						'MozTransition':'transitionend',
						'WebkitTransition':'webkitTransitionEnd'
				};
		for (i in transitions) {
			if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
				return transitions[i];
			}
		}
		return false;
	}
	// support.transitionend = transitionEndEventName();

	function animationEndEventName() {
		var i,
				el = document.createElement('div'),
				animations = {
					'animation':'animationend',
					'OAnimation':'oanimationend',  // oAnimationEnd in very old Opera
					'MozAnimation':'animationend',
					'WebkitAnimation':'webkitAnimationEnd'
				};
		for (i in animations) {
			if (animations.hasOwnProperty(i) && el.style[i] !== undefined) {
				return animations[i];
			}
		}
		return false;
	}
	// support.animationend = animationEndEventName();


  	global.support = support;
	global.testCSS = testCSS;

})(this);

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

//Closest & matches
(function (ELEMENT) {
	ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector || function matches(selector) {
		var element = this,
		elements = (element.document || element.ownerDocument).querySelectorAll(selector),
		index = 0;
		while (elements[index] && elements[index] !== element) {
			++index;
		}
		return elements[index] ? true : false;
	};

	ELEMENT.closest = ELEMENT.closest || function closest(selector) {
		var element = this;
		while (element) {
			if (element.matches(selector)) {
				break;
			}
			element = element.parentElement;
		}
		return element;
	};
}(Element.prototype));


//Remove
(function (ELEMENT) {
	ELEMENT.remove = ELEMENT.remove || function remove() {
		if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
	};
}(Element.prototype));


// Prepend
// Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/prepend()/prepend().md
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('prepend')) {
      return;
    }
    Object.defineProperty(item, 'prepend', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function prepend() {
        var argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();

        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });

        this.insertBefore(docFrag, this.firstChild);
      }
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);


// Append
// Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/append()/append().md
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('append')) {
      return;
    }
    Object.defineProperty(item, 'append', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function append() {
        var argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();

        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });

        this.appendChild(docFrag);
      }
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);


// Before
// from: https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/before()/before().md
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('before')) {
      return;
    }
    Object.defineProperty(item, 'before', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function before() {
        var argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();

        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });

        this.parentNode.insertBefore(docFrag, this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);


// After
//from: https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/after()/after().md
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('after')) {
      return;
    }
    Object.defineProperty(item, 'after', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function after() {
        var argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();

        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });

        this.parentNode.insertBefore(docFrag, this.nextSibling);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.expand = 200;
window.lazySizesConfig.loadHidden = false;

/*! lazysizes - v5.2.1-rc2 */

!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,a=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,l=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],i={},G=Array.prototype.forEach,J=function(e,t){if(!i[t]){i[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return i[t].test(e[$]("class")||"")&&i[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var i;if(i=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(i," "))}},V=function(t,i,e){var a=e?P:"removeEventListener";if(e){V(t,i)}r.forEach(function(e){t[a](e,i)})},X=function(e,t,i,a,r){var n=D.createEvent("Event");if(!i){i={}}i.instance=k;n.initEvent(t,!a,!r);n.detail=i;e.dispatchEvent(n);return n},Y=function(e,t){var i;if(!a&&(i=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}i({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,i){i=i||e.offsetWidth;while(i<H.minSize&&t&&!e._lazysizesWidth){i=t.offsetWidth;t=t.parentNode}return i},ee=function(){var i,a;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;i=true;a=false;while(e.length){e.shift()()}i=false};var e=function(e,t){if(i&&!t){e.apply(this,arguments)}else{n.push(e);if(!a){a=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(i,e){return e?function(){ee(i)}:function(){var e=this;var t=arguments;ee(function(){i.apply(e,t)})}},ie=function(e){var i;var a=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){i=false;a=f.now();e()};var s=l&&n>49?function(){l(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(i){return}i=true;t=r-(f.now()-a);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ae=function(e){var t,i;var a=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-i;if(e<a){I(n,a-e)}else{(l||r)(r)}};return function(){i=f.now();if(!t){t=I(n,a)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var N=0;var M=-1;var x=function(e){N--;if(!e||N<0||!e.target){N=0}};var W=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var S=function(e,t){var i;var a=e;var r=W(e);g-=t;b+=t;p-=t;C+=t;while(r&&(a=a.offsetParent)&&a!=D.body&&a!=O){r=(Z(a,"opacity")||1)>0;if(r&&Z(a,"overflow")!="visible"){i=a.getBoundingClientRect();r=C>i.left&&p<i.right&&b>i.top-1&&g<i.bottom+1}}return r};var t=function(){var e,t,i,a,r,n,s,l,o,u,f,c;var d=k.elements;if((h=H.loadMode)&&N<8&&(e=d.length)){t=0;M++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(l=d[t][$]("data-expand"))||!(n=l*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&N<1&&M>2&&h>2&&!D.hidden){w=f;M=0}else if(h>1&&M>1&&N<6){w=u}else{w=_}}if(o!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;o=n}i=d[t].getBoundingClientRect();if((b=i.bottom)>=s&&(g=i.top)<=z&&(C=i.right)>=s*c&&(p=i.left)<=y&&(b||C||p||g)&&(H.loadHidden||W(d[t]))&&(m&&N<3&&!l&&(h<3||M<4)||S(d[t],n))){R(d[t]);r=true;if(N>9){break}}else if(!r&&m&&!a&&N<4&&M<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!l&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){a=v[0]||d[t]}}if(a&&!r){R(a)}}};var i=ie(t);var B=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}x(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,L);X(t,"lazyloaded")};var a=te(B);var L=function(e){a({target:e.target})};var T=function(t,i){try{t.contentWindow.location.replace(i)}catch(e){t.src=i}};var F=function(e){var t;var i=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(i){e.setAttribute("srcset",i)}};var s=te(function(t,e,i,a,r){var n,s,l,o,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(a){if(i){K(t,H.autosizesClass)}else{t.setAttribute("sizes",a)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){l=t.parentNode;o=l&&j.test(l.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||o);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(x,2500);V(t,L,true)}if(o){G.call(l.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!o){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||o)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,"ls-is-cached")}B(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){N--}},true)});var R=function(e){if(e._lazyRace){return}var t;var i=n.test(e.nodeName);var a=i&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=a=="auto";if((r||!m)&&i&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;N++;s(e,t,r,a,i)};var r=ae(function(){H.loadMode=3;i()});var l=function(){if(H.loadMode==3){H.loadMode=2}r()};var o=function(){if(m){return}if(f.now()-e<999){I(o,999);return}m=true;H.loadMode=3;i();q("scroll",l,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",i,true);q("resize",i,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(i).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",i,true);O[P]("DOMAttrModified",i,true);setInterval(i,999)}q("hashchange",i,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,i,true)});if(/d$|^c/.test(D.readyState)){o()}else{q("load",o);D[P]("DOMContentLoaded",i);I(o,2e4)}if(k.elements.length){t();ee._lsFlush()}else{i()}},checkElems:i,unveil:R,_aLSL:l}}(),re=function(){var i;var n=te(function(e,t,i,a){var r,n,s;e._lazysizesWidth=a;a+="px";e.setAttribute("sizes",a);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",a)}}if(!i.detail.dataAttr){Y(e,i.detail)}});var a=function(e,t,i){var a;var r=e.parentNode;if(r){i=s(e,r,i);a=X(e,"lazybeforesizes",{width:i,dataAttr:!!t});if(!a.defaultPrevented){i=a.detail.width;if(i&&i!==e._lazysizesWidth){n(e,r,a,i)}}}};var e=function(){var e;var t=i.length;if(t){e=0;for(;e<t;e++){a(i[e])}}};var t=ae(e);return{_:function(){i=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:a}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});
/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v5.2.9
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("whatInput",[],t):"object"==typeof exports?exports.whatInput=t():e.whatInput=t()}(this,function(){return i={},n.m=o=[function(e,t){"use strict";e.exports=function(){if("undefined"==typeof document||"undefined"==typeof window)return{ask:function(){return"initial"},element:function(){return null},ignoreKeys:function(){},specificKeys:function(){},registerOnChange:function(){},unRegisterOnChange:function(){}};var t=document.documentElement,n=null,s="initial",u=s,o=Date.now(),i="false",d=["button","input","select","textarea"],r=[],c=[16,17,18,91,93],w=[],p={keydown:"keyboard",keyup:"keyboard",mousedown:"mouse",mousemove:"mouse",MSPointerDown:"pointer",MSPointerMove:"pointer",pointerdown:"pointer",pointermove:"pointer",touchstart:"touch",touchend:"touch"},a=!1,f={x:null,y:null},l={2:"touch",3:"touch",4:"mouse"},m=!1;try{var e=Object.defineProperty({},"passive",{get:function(){m=!0}});window.addEventListener("test",null,e)}catch(e){}var h=function(){var e=!!m&&{passive:!0};document.addEventListener("DOMContentLoaded",v),window.PointerEvent?(window.addEventListener("pointerdown",y),window.addEventListener("pointermove",E)):window.MSPointerEvent?(window.addEventListener("MSPointerDown",y),window.addEventListener("MSPointerMove",E)):(window.addEventListener("mousedown",y),window.addEventListener("mousemove",E),"ontouchstart"in window&&(window.addEventListener("touchstart",y,e),window.addEventListener("touchend",y))),window.addEventListener(O(),E,e),window.addEventListener("keydown",y),window.addEventListener("keyup",y),window.addEventListener("focusin",L),window.addEventListener("focusout",b)},v=function(){if(i=!(t.getAttribute("data-whatpersist")||"false"===document.body.getAttribute("data-whatpersist")))try{window.sessionStorage.getItem("what-input")&&(s=window.sessionStorage.getItem("what-input")),window.sessionStorage.getItem("what-intent")&&(u=window.sessionStorage.getItem("what-intent"))}catch(e){}g("input"),g("intent")},y=function(e){var t=e.which,n=p[e.type];"pointer"===n&&(n=S(e));var o=!w.length&&-1===c.indexOf(t),i=w.length&&-1!==w.indexOf(t),r="keyboard"===n&&t&&(o||i)||"mouse"===n||"touch"===n;if(M(n)&&(r=!1),r&&s!==n&&(x("input",s=n),g("input")),r&&u!==n){var a=document.activeElement;a&&a.nodeName&&(-1===d.indexOf(a.nodeName.toLowerCase())||"button"===a.nodeName.toLowerCase()&&!C(a,"form"))&&(x("intent",u=n),g("intent"))}},g=function(e){t.setAttribute("data-what"+e,"input"===e?s:u),k(e)},E=function(e){var t=p[e.type];"pointer"===t&&(t=S(e)),A(e),(!a&&!M(t)||a&&"wheel"===e.type||"mousewheel"===e.type||"DOMMouseScroll"===e.type)&&u!==t&&(x("intent",u=t),g("intent"))},L=function(e){e.target.nodeName?(n=e.target.nodeName.toLowerCase(),t.setAttribute("data-whatelement",n),e.target.classList&&e.target.classList.length&&t.setAttribute("data-whatclasses",e.target.classList.toString().replace(" ",","))):b()},b=function(){n=null,t.removeAttribute("data-whatelement"),t.removeAttribute("data-whatclasses")},x=function(e,t){if(i)try{window.sessionStorage.setItem("what-"+e,t)}catch(e){}},S=function(e){return"number"==typeof e.pointerType?l[e.pointerType]:"pen"===e.pointerType?"touch":e.pointerType},M=function(e){var t=Date.now(),n="mouse"===e&&"touch"===s&&t-o<200;return o=t,n},O=function(){return"onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll"},k=function(e){for(var t=0,n=r.length;t<n;t++)r[t].type===e&&r[t].fn.call(void 0,"input"===e?s:u)},A=function(e){f.x!==e.screenX||f.y!==e.screenY?(a=!1,f.x=e.screenX,f.y=e.screenY):a=!0},C=function(e,t){var n=window.Element.prototype;if(n.matches||(n.matches=n.msMatchesSelector||n.webkitMatchesSelector),n.closest)return e.closest(t);do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null};return"addEventListener"in window&&Array.prototype.indexOf&&(p[O()]="mouse",h()),{ask:function(e){return"intent"===e?u:s},element:function(){return n},ignoreKeys:function(e){c=e},specificKeys:function(e){w=e},registerOnChange:function(e,t){r.push({fn:e,type:t||"input"})},unRegisterOnChange:function(e){var t=function(e){for(var t=0,n=r.length;t<n;t++)if(r[t].fn===e)return t}(e);!t&&0!==t||r.splice(t,1)},clearStorage:function(){window.sessionStorage.clear()}}}()}],n.c=i,n.p="",n(0);function n(e){if(i[e])return i[e].exports;var t=i[e]={exports:{},id:e,loaded:!1};return o[e].call(t.exports,t,t.exports,n),t.loaded=!0,t.exports}var o,i});
//# sourceMappingURL=what-input.min.js.map

/**
 * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 2.3.9
 * Copyright (C) 2020 Oliver Nightingale
 * @license MIT
 */

;(function(){

/**
 * A convenience function for configuring and constructing
 * a new lunr Index.
 *
 * A lunr.Builder instance is created and the pipeline setup
 * with a trimmer, stop word filter and stemmer.
 *
 * This builder object is yielded to the configuration function
 * that is passed as a parameter, allowing the list of fields
 * and other builder parameters to be customised.
 *
 * All documents _must_ be added within the passed config function.
 *
 * @example
 * var idx = lunr(function () {
 *   this.field('title')
 *   this.field('body')
 *   this.ref('id')
 *
 *   documents.forEach(function (doc) {
 *     this.add(doc)
 *   }, this)
 * })
 *
 * @see {@link lunr.Builder}
 * @see {@link lunr.Pipeline}
 * @see {@link lunr.trimmer}
 * @see {@link lunr.stopWordFilter}
 * @see {@link lunr.stemmer}
 * @namespace {function} lunr
 */
var lunr = function (config) {
  var builder = new lunr.Builder

  builder.pipeline.add(
    lunr.trimmer,
    lunr.stopWordFilter,
    lunr.stemmer
  )

  builder.searchPipeline.add(
    lunr.stemmer
  )

  config.call(builder, builder)
  return builder.build()
}

lunr.version = "2.3.9"
/*!
 * lunr.utils
 * Copyright (C) 2020 Oliver Nightingale
 */

/**
 * A namespace containing utils for the rest of the lunr library
 * @namespace lunr.utils
 */
lunr.utils = {}

/**
 * Print a warning message to the console.
 *
 * @param {String} message The message to be printed.
 * @memberOf lunr.utils
 * @function
 */
lunr.utils.warn = (function (global) {
  /* eslint-disable no-console */
  return function (message) {
    if (global.console && console.warn) {
      console.warn(message)
    }
  }
  /* eslint-enable no-console */
})(this)

/**
 * Convert an object to a string.
 *
 * In the case of `null` and `undefined` the function returns
 * the empty string, in all other cases the result of calling
 * `toString` on the passed object is returned.
 *
 * @param {Any} obj The object to convert to a string.
 * @return {String} string representation of the passed object.
 * @memberOf lunr.utils
 */
lunr.utils.asString = function (obj) {
  if (obj === void 0 || obj === null) {
    return ""
  } else {
    return obj.toString()
  }
}

/**
 * Clones an object.
 *
 * Will create a copy of an existing object such that any mutations
 * on the copy cannot affect the original.
 *
 * Only shallow objects are supported, passing a nested object to this
 * function will cause a TypeError.
 *
 * Objects with primitives, and arrays of primitives are supported.
 *
 * @param {Object} obj The object to clone.
 * @return {Object} a clone of the passed object.
 * @throws {TypeError} when a nested object is passed.
 * @memberOf Utils
 */
lunr.utils.clone = function (obj) {
  if (obj === null || obj === undefined) {
    return obj
  }

  var clone = Object.create(null),
      keys = Object.keys(obj)

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i],
        val = obj[key]

    if (Array.isArray(val)) {
      clone[key] = val.slice()
      continue
    }

    if (typeof val === 'string' ||
        typeof val === 'number' ||
        typeof val === 'boolean') {
      clone[key] = val
      continue
    }

    throw new TypeError("clone is not deep and does not support nested objects")
  }

  return clone
}
lunr.FieldRef = function (docRef, fieldName, stringValue) {
  this.docRef = docRef
  this.fieldName = fieldName
  this._stringValue = stringValue
}

lunr.FieldRef.joiner = "/"

lunr.FieldRef.fromString = function (s) {
  var n = s.indexOf(lunr.FieldRef.joiner)

  if (n === -1) {
    throw "malformed field ref string"
  }

  var fieldRef = s.slice(0, n),
      docRef = s.slice(n + 1)

  return new lunr.FieldRef (docRef, fieldRef, s)
}

lunr.FieldRef.prototype.toString = function () {
  if (this._stringValue == undefined) {
    this._stringValue = this.fieldName + lunr.FieldRef.joiner + this.docRef
  }

  return this._stringValue
}
/*!
 * lunr.Set
 * Copyright (C) 2020 Oliver Nightingale
 */

/**
 * A lunr set.
 *
 * @constructor
 */
lunr.Set = function (elements) {
  this.elements = Object.create(null)

  if (elements) {
    this.length = elements.length

    for (var i = 0; i < this.length; i++) {
      this.elements[elements[i]] = true
    }
  } else {
    this.length = 0
  }
}

/**
 * A complete set that contains all elements.
 *
 * @static
 * @readonly
 * @type {lunr.Set}
 */
lunr.Set.complete = {
  intersect: function (other) {
    return other
  },

  union: function () {
    return this
  },

  contains: function () {
    return true
  }
}

/**
 * An empty set that contains no elements.
 *
 * @static
 * @readonly
 * @type {lunr.Set}
 */
lunr.Set.empty = {
  intersect: function () {
    return this
  },

  union: function (other) {
    return other
  },

  contains: function () {
    return false
  }
}

/**
 * Returns true if this set contains the specified object.
 *
 * @param {object} object - Object whose presence in this set is to be tested.
 * @returns {boolean} - True if this set contains the specified object.
 */
lunr.Set.prototype.contains = function (object) {
  return !!this.elements[object]
}

/**
 * Returns a new set containing only the elements that are present in both
 * this set and the specified set.
 *
 * @param {lunr.Set} other - set to intersect with this set.
 * @returns {lunr.Set} a new set that is the intersection of this and the specified set.
 */

lunr.Set.prototype.intersect = function (other) {
  var a, b, elements, intersection = []

  if (other === lunr.Set.complete) {
    return this
  }

  if (other === lunr.Set.empty) {
    return other
  }

  if (this.length < other.length) {
    a = this
    b = other
  } else {
    a = other
    b = this
  }

  elements = Object.keys(a.elements)

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i]
    if (element in b.elements) {
      intersection.push(element)
    }
  }

  return new lunr.Set (intersection)
}

/**
 * Returns a new set combining the elements of this and the specified set.
 *
 * @param {lunr.Set} other - set to union with this set.
 * @return {lunr.Set} a new set that is the union of this and the specified set.
 */

lunr.Set.prototype.union = function (other) {
  if (other === lunr.Set.complete) {
    return lunr.Set.complete
  }

  if (other === lunr.Set.empty) {
    return this
  }

  return new lunr.Set(Object.keys(this.elements).concat(Object.keys(other.elements)))
}
/**
 * A function to calculate the inverse document frequency for
 * a posting. This is shared between the builder and the index
 *
 * @private
 * @param {object} posting - The posting for a given term
 * @param {number} documentCount - The total number of documents.
 */
lunr.idf = function (posting, documentCount) {
  var documentsWithTerm = 0

  for (var fieldName in posting) {
    if (fieldName == '_index') continue // Ignore the term index, its not a field
    documentsWithTerm += Object.keys(posting[fieldName]).length
  }

  var x = (documentCount - documentsWithTerm + 0.5) / (documentsWithTerm + 0.5)

  return Math.log(1 + Math.abs(x))
}

/**
 * A token wraps a string representation of a token
 * as it is passed through the text processing pipeline.
 *
 * @constructor
 * @param {string} [str=''] - The string token being wrapped.
 * @param {object} [metadata={}] - Metadata associated with this token.
 */
lunr.Token = function (str, metadata) {
  this.str = str || ""
  this.metadata = metadata || {}
}

/**
 * Returns the token string that is being wrapped by this object.
 *
 * @returns {string}
 */
lunr.Token.prototype.toString = function () {
  return this.str
}

/**
 * A token update function is used when updating or optionally
 * when cloning a token.
 *
 * @callback lunr.Token~updateFunction
 * @param {string} str - The string representation of the token.
 * @param {Object} metadata - All metadata associated with this token.
 */

/**
 * Applies the given function to the wrapped string token.
 *
 * @example
 * token.update(function (str, metadata) {
 *   return str.toUpperCase()
 * })
 *
 * @param {lunr.Token~updateFunction} fn - A function to apply to the token string.
 * @returns {lunr.Token}
 */
lunr.Token.prototype.update = function (fn) {
  this.str = fn(this.str, this.metadata)
  return this
}

/**
 * Creates a clone of this token. Optionally a function can be
 * applied to the cloned token.
 *
 * @param {lunr.Token~updateFunction} [fn] - An optional function to apply to the cloned token.
 * @returns {lunr.Token}
 */
lunr.Token.prototype.clone = function (fn) {
  fn = fn || function (s) { return s }
  return new lunr.Token (fn(this.str, this.metadata), this.metadata)
}
/*!
 * lunr.tokenizer
 * Copyright (C) 2020 Oliver Nightingale
 */

/**
 * A function for splitting a string into tokens ready to be inserted into
 * the search index. Uses `lunr.tokenizer.separator` to split strings, change
 * the value of this property to change how strings are split into tokens.
 *
 * This tokenizer will convert its parameter to a string by calling `toString` and
 * then will split this string on the character in `lunr.tokenizer.separator`.
 * Arrays will have their elements converted to strings and wrapped in a lunr.Token.
 *
 * Optional metadata can be passed to the tokenizer, this metadata will be cloned and
 * added as metadata to every token that is created from the object to be tokenized.
 *
 * @static
 * @param {?(string|object|object[])} obj - The object to convert into tokens
 * @param {?object} metadata - Optional metadata to associate with every token
 * @returns {lunr.Token[]}
 * @see {@link lunr.Pipeline}
 */
lunr.tokenizer = function (obj, metadata) {
  if (obj == null || obj == undefined) {
    return []
  }

  if (Array.isArray(obj)) {
    return obj.map(function (t) {
      return new lunr.Token(
        unicodeNormalizer(lunr.utils.asString(t)).toLowerCase(),
        lunr.utils.clone(metadata)
      )
    })
  }

  var str = unicodeNormalizer(obj.toString()).toLowerCase(),
      len = str.length,
      tokens = []

  for (var sliceEnd = 0, sliceStart = 0; sliceEnd <= len; sliceEnd++) {
    var char = str.charAt(sliceEnd),
        sliceLength = sliceEnd - sliceStart

    if ((char.match(lunr.tokenizer.separator) || sliceEnd == len)) {

      if (sliceLength > 0) {
        var tokenMetadata = lunr.utils.clone(metadata) || {}
        tokenMetadata["position"] = [sliceStart, sliceLength]
        tokenMetadata["index"] = tokens.length

        tokens.push(
          new lunr.Token (
            str.slice(sliceStart, sliceEnd),
            tokenMetadata
          )
        )
      }

      sliceStart = sliceEnd + 1
    }

  }

  return tokens
}

/**
 * The separator used to split a string into tokens. Override this property to change the behaviour of
 * `lunr.tokenizer` behaviour when tokenizing strings. By default this splits on whitespace and hyphens.
 *
 * @static
 * @see lunr.tokenizer
 */
lunr.tokenizer.separator = /[\s\-]+/
/*!
 * lunr.Pipeline
 * Copyright (C) 2020 Oliver Nightingale
 */

/**
 * lunr.Pipelines maintain an ordered list of functions to be applied to all
 * tokens in documents entering the search index and queries being ran against
 * the index.
 *
 * An instance of lunr.Index created with the lunr shortcut will contain a
 * pipeline with a stop word filter and an English language stemmer. Extra
 * functions can be added before or after either of these functions or these
 * default functions can be removed.
 *
 * When run the pipeline will call each function in turn, passing a token, the
 * index of that token in the original list of all tokens and finally a list of
 * all the original tokens.
 *
 * The output of functions in the pipeline will be passed to the next function
 * in the pipeline. To exclude a token from entering the index the function
 * should return undefined, the rest of the pipeline will not be called with
 * this token.
 *
 * For serialisation of pipelines to work, all functions used in an instance of
 * a pipeline should be registered with lunr.Pipeline. Registered functions can
 * then be loaded. If trying to load a serialised pipeline that uses functions
 * that are not registered an error will be thrown.
 *
 * If not planning on serialising the pipeline then registering pipeline functions
 * is not necessary.
 *
 * @constructor
 */
lunr.Pipeline = function () {
  this._stack = []
}

lunr.Pipeline.registeredFunctions = Object.create(null)

/**
 * A pipeline function maps lunr.Token to lunr.Token. A lunr.Token contains the token
 * string as well as all known metadata. A pipeline function can mutate the token string
 * or mutate (or add) metadata for a given token.
 *
 * A pipeline function can indicate that the passed token should be discarded by returning
 * null, undefined or an empty string. This token will not be passed to any downstream pipeline
 * functions and will not be added to the index.
 *
 * Multiple tokens can be returned by returning an array of tokens. Each token will be passed
 * to any downstream pipeline functions and all will returned tokens will be added to the index.
 *
 * Any number of pipeline functions may be chained together using a lunr.Pipeline.
 *
 * @interface lunr.PipelineFunction
 * @param {lunr.Token} token - A token from the document being processed.
 * @param {number} i - The index of this token in the complete list of tokens for this document/field.
 * @param {lunr.Token[]} tokens - All tokens for this document/field.
 * @returns {(?lunr.Token|lunr.Token[])}
 */

/**
 * Register a function with the pipeline.
 *
 * Functions that are used in the pipeline should be registered if the pipeline
 * needs to be serialised, or a serialised pipeline needs to be loaded.
 *
 * Registering a function does not add it to a pipeline, functions must still be
 * added to instances of the pipeline for them to be used when running a pipeline.
 *
 * @param {lunr.PipelineFunction} fn - The function to check for.
 * @param {String} label - The label to register this function with
 */
lunr.Pipeline.registerFunction = function (fn, label) {
  if (label in this.registeredFunctions) {
    lunr.utils.warn('Overwriting existing registered function: ' + label)
  }

  fn.label = label
  lunr.Pipeline.registeredFunctions[fn.label] = fn
}

/**
 * Warns if the function is not registered as a Pipeline function.
 *
 * @param {lunr.PipelineFunction} fn - The function to check for.
 * @private
 */
lunr.Pipeline.warnIfFunctionNotRegistered = function (fn) {
  var isRegistered = fn.label && (fn.label in this.registeredFunctions)

  if (!isRegistered) {
    lunr.utils.warn('Function is not registered with pipeline. This may cause problems when serialising the index.\n', fn)
  }
}

/**
 * Loads a previously serialised pipeline.
 *
 * All functions to be loaded must already be registered with lunr.Pipeline.
 * If any function from the serialised data has not been registered then an
 * error will be thrown.
 *
 * @param {Object} serialised - The serialised pipeline to load.
 * @returns {lunr.Pipeline}
 */
lunr.Pipeline.load = function (serialised) {
  var pipeline = new lunr.Pipeline

  serialised.forEach(function (fnName) {
    var fn = lunr.Pipeline.registeredFunctions[fnName]

    if (fn) {
      pipeline.add(fn)
    } else {
      throw new Error('Cannot load unregistered function: ' + fnName)
    }
  })

  return pipeline
}

/**
 * Adds new functions to the end of the pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction[]} functions - Any number of functions to add to the pipeline.
 */
lunr.Pipeline.prototype.add = function () {
  var fns = Array.prototype.slice.call(arguments)

  fns.forEach(function (fn) {
    lunr.Pipeline.warnIfFunctionNotRegistered(fn)
    this._stack.push(fn)
  }, this)
}

/**
 * Adds a single function after a function that already exists in the
 * pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.
 * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.
 */
lunr.Pipeline.prototype.after = function (existingFn, newFn) {
  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)

  var pos = this._stack.indexOf(existingFn)
  if (pos == -1) {
    throw new Error('Cannot find existingFn')
  }

  pos = pos + 1
  this._stack.splice(pos, 0, newFn)
}

/**
 * Adds a single function before a function that already exists in the
 * pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.
 * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.
 */
lunr.Pipeline.prototype.before = function (existingFn, newFn) {
  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)

  var pos = this._stack.indexOf(existingFn)
  if (pos == -1) {
    throw new Error('Cannot find existingFn')
  }

  this._stack.splice(pos, 0, newFn)
}

/**
 * Removes a function from the pipeline.
 *
 * @param {lunr.PipelineFunction} fn The function to remove from the pipeline.
 */
lunr.Pipeline.prototype.remove = function (fn) {
  var pos = this._stack.indexOf(fn)
  if (pos == -1) {
    return
  }

  this._stack.splice(pos, 1)
}

/**
 * Runs the current list of functions that make up the pipeline against the
 * passed tokens.
 *
 * @param {Array} tokens The tokens to run through the pipeline.
 * @returns {Array}
 */
lunr.Pipeline.prototype.run = function (tokens) {
  var stackLength = this._stack.length

  for (var i = 0; i < stackLength; i++) {
    var fn = this._stack[i]
    var memo = []

    for (var j = 0; j < tokens.length; j++) {
      var result = fn(tokens[j], j, tokens)

      if (result === null || result === void 0 || result === '') continue

      if (Array.isArray(result)) {
        for (var k = 0; k < result.length; k++) {
          memo.push(result[k])
        }
      } else {
        memo.push(result)
      }
    }

    tokens = memo
  }

  return tokens
}

/**
 * Convenience method for passing a string through a pipeline and getting
 * strings out. This method takes care of wrapping the passed string in a
 * token and mapping the resulting tokens back to strings.
 *
 * @param {string} str - The string to pass through the pipeline.
 * @param {?object} metadata - Optional metadata to associate with the token
 * passed to the pipeline.
 * @returns {string[]}
 */
lunr.Pipeline.prototype.runString = function (str, metadata) {
  var token = new lunr.Token (str, metadata)

  return this.run([token]).map(function (t) {
    return t.toString()
  })
}

/**
 * Resets the pipeline by removing any existing processors.
 *
 */
lunr.Pipeline.prototype.reset = function () {
  this._stack = []
}

/**
 * Returns a representation of the pipeline ready for serialisation.
 *
 * Logs a warning if the function has not been registered.
 *
 * @returns {Array}
 */
lunr.Pipeline.prototype.toJSON = function () {
  return this._stack.map(function (fn) {
    lunr.Pipeline.warnIfFunctionNotRegistered(fn)

    return fn.label
  })
}
/*!
 * lunr.Vector
 * Copyright (C) 2020 Oliver Nightingale
 */

/**
 * A vector is used to construct the vector space of documents and queries. These
 * vectors support operations to determine the similarity between two documents or
 * a document and a query.
 *
 * Normally no parameters are required for initializing a vector, but in the case of
 * loading a previously dumped vector the raw elements can be provided to the constructor.
 *
 * For performance reasons vectors are implemented with a flat array, where an elements
 * index is immediately followed by its value. E.g. [index, value, index, value]. This
 * allows the underlying array to be as sparse as possible and still offer decent
 * performance when being used for vector calculations.
 *
 * @constructor
 * @param {Number[]} [elements] - The flat list of element index and element value pairs.
 */
lunr.Vector = function (elements) {
  this._magnitude = 0
  this.elements = elements || []
}


/**
 * Calculates the position within the vector to insert a given index.
 *
 * This is used internally by insert and upsert. If there are duplicate indexes then
 * the position is returned as if the value for that index were to be updated, but it
 * is the callers responsibility to check whether there is a duplicate at that index
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @returns {Number}
 */
lunr.Vector.prototype.positionForIndex = function (index) {
  // For an empty vector the tuple can be inserted at the beginning
  if (this.elements.length == 0) {
    return 0
  }

  var start = 0,
      end = this.elements.length / 2,
      sliceLength = end - start,
      pivotPoint = Math.floor(sliceLength / 2),
      pivotIndex = this.elements[pivotPoint * 2]

  while (sliceLength > 1) {
    if (pivotIndex < index) {
      start = pivotPoint
    }

    if (pivotIndex > index) {
      end = pivotPoint
    }

    if (pivotIndex == index) {
      break
    }

    sliceLength = end - start
    pivotPoint = start + Math.floor(sliceLength / 2)
    pivotIndex = this.elements[pivotPoint * 2]
  }

  if (pivotIndex == index) {
    return pivotPoint * 2
  }

  if (pivotIndex > index) {
    return pivotPoint * 2
  }

  if (pivotIndex < index) {
    return (pivotPoint + 1) * 2
  }
}

/**
 * Inserts an element at an index within the vector.
 *
 * Does not allow duplicates, will throw an error if there is already an entry
 * for this index.
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @param {Number} val - The value to be inserted into the vector.
 */
lunr.Vector.prototype.insert = function (insertIdx, val) {
  this.upsert(insertIdx, val, function () {
    throw "duplicate index"
  })
}

/**
 * Inserts or updates an existing index within the vector.
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @param {Number} val - The value to be inserted into the vector.
 * @param {function} fn - A function that is called for updates, the existing value and the
 * requested value are passed as arguments
 */
lunr.Vector.prototype.upsert = function (insertIdx, val, fn) {
  this._magnitude = 0
  var position = this.positionForIndex(insertIdx)

  if (this.elements[position] == insertIdx) {
    this.elements[position + 1] = fn(this.elements[position + 1], val)
  } else {
    this.elements.splice(position, 0, insertIdx, val)
  }
}

/**
 * Calculates the magnitude of this vector.
 *
 * @returns {Number}
 */
lunr.Vector.prototype.magnitude = function () {
  if (this._magnitude) return this._magnitude

  var sumOfSquares = 0,
      elementsLength = this.elements.length

  for (var i = 1; i < elementsLength; i += 2) {
    var val = this.elements[i]
    sumOfSquares += val * val
  }

  return this._magnitude = Math.sqrt(sumOfSquares)
}

/**
 * Calculates the dot product of this vector and another vector.
 *
 * @param {lunr.Vector} otherVector - The vector to compute the dot product with.
 * @returns {Number}
 */
lunr.Vector.prototype.dot = function (otherVector) {
  var dotProduct = 0,
      a = this.elements, b = otherVector.elements,
      aLen = a.length, bLen = b.length,
      aVal = 0, bVal = 0,
      i = 0, j = 0

  while (i < aLen && j < bLen) {
    aVal = a[i], bVal = b[j]
    if (aVal < bVal) {
      i += 2
    } else if (aVal > bVal) {
      j += 2
    } else if (aVal == bVal) {
      dotProduct += a[i + 1] * b[j + 1]
      i += 2
      j += 2
    }
  }

  return dotProduct
}

/**
 * Calculates the similarity between this vector and another vector.
 *
 * @param {lunr.Vector} otherVector - The other vector to calculate the
 * similarity with.
 * @returns {Number}
 */
lunr.Vector.prototype.similarity = function (otherVector) {
  return this.dot(otherVector) / this.magnitude() || 0
}

/**
 * Converts the vector to an array of the elements within the vector.
 *
 * @returns {Number[]}
 */
lunr.Vector.prototype.toArray = function () {
  var output = new Array (this.elements.length / 2)

  for (var i = 1, j = 0; i < this.elements.length; i += 2, j++) {
    output[j] = this.elements[i]
  }

  return output
}

/**
 * A JSON serializable representation of the vector.
 *
 * @returns {Number[]}
 */
lunr.Vector.prototype.toJSON = function () {
  return this.elements
}
/* eslint-disable */
/*!
 * lunr.stemmer
 * Copyright (C) 2020 Oliver Nightingale
 * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
 */

/**
 * lunr.stemmer is an english language stemmer, this is a JavaScript
 * implementation of the PorterStemmer taken from http://tartarus.org/~martin
 *
 * @static
 * @implements {lunr.PipelineFunction}
 * @param {lunr.Token} token - The string to stem
 * @returns {lunr.Token}
 * @see {@link lunr.Pipeline}
 * @function
 */
lunr.stemmer = (function(){
  var step2list = {
      "ational" : "ate",
      "tional" : "tion",
      "enci" : "ence",
      "anci" : "ance",
      "izer" : "ize",
      "bli" : "ble",
      "alli" : "al",
      "entli" : "ent",
      "eli" : "e",
      "ousli" : "ous",
      "ization" : "ize",
      "ation" : "ate",
      "ator" : "ate",
      "alism" : "al",
      "iveness" : "ive",
      "fulness" : "ful",
      "ousness" : "ous",
      "aliti" : "al",
      "iviti" : "ive",
      "biliti" : "ble",
      "logi" : "log"
    },

    step3list = {
      "icate" : "ic",
      "ative" : "",
      "alize" : "al",
      "iciti" : "ic",
      "ical" : "ic",
      "ful" : "",
      "ness" : ""
    },

    c = "[^aeiou]",          // consonant
    v = "[aeiouy]",          // vowel
    C = c + "[^aeiouy]*",    // consonant sequence
    V = v + "[aeiou]*",      // vowel sequence

    mgr0 = "^(" + C + ")?" + V + C,               // [C]VC... is m>0
    meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$",  // [C]VC[V] is m=1
    mgr1 = "^(" + C + ")?" + V + C + V + C,       // [C]VCVC... is m>1
    s_v = "^(" + C + ")?" + v;                   // vowel in stem

  var re_mgr0 = new RegExp(mgr0);
  var re_mgr1 = new RegExp(mgr1);
  var re_meq1 = new RegExp(meq1);
  var re_s_v = new RegExp(s_v);

  var re_1a = /^(.+?)(ss|i)es$/;
  var re2_1a = /^(.+?)([^s])s$/;
  var re_1b = /^(.+?)eed$/;
  var re2_1b = /^(.+?)(ed|ing)$/;
  var re_1b_2 = /.$/;
  var re2_1b_2 = /(at|bl|iz)$/;
  var re3_1b_2 = new RegExp("([^aeiouylsz])\\1$");
  var re4_1b_2 = new RegExp("^" + C + v + "[^aeiouwxy]$");

  var re_1c = /^(.+?[^aeiou])y$/;
  var re_2 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;

  var re_3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;

  var re_4 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
  var re2_4 = /^(.+?)(s|t)(ion)$/;

  var re_5 = /^(.+?)e$/;
  var re_5_1 = /ll$/;
  var re3_5 = new RegExp("^" + C + v + "[^aeiouwxy]$");

  var porterStemmer = function porterStemmer(w) {
    var stem,
      suffix,
      firstch,
      re,
      re2,
      re3,
      re4;

    if (w.length < 3) { return w; }

    firstch = w.substr(0,1);
    if (firstch == "y") {
      w = firstch.toUpperCase() + w.substr(1);
    }

    // Step 1a
    re = re_1a
    re2 = re2_1a;

    if (re.test(w)) { w = w.replace(re,"$1$2"); }
    else if (re2.test(w)) { w = w.replace(re2,"$1$2"); }

    // Step 1b
    re = re_1b;
    re2 = re2_1b;
    if (re.test(w)) {
      var fp = re.exec(w);
      re = re_mgr0;
      if (re.test(fp[1])) {
        re = re_1b_2;
        w = w.replace(re,"");
      }
    } else if (re2.test(w)) {
      var fp = re2.exec(w);
      stem = fp[1];
      re2 = re_s_v;
      if (re2.test(stem)) {
        w = stem;
        re2 = re2_1b_2;
        re3 = re3_1b_2;
        re4 = re4_1b_2;
        if (re2.test(w)) { w = w + "e"; }
        else if (re3.test(w)) { re = re_1b_2; w = w.replace(re,""); }
        else if (re4.test(w)) { w = w + "e"; }
      }
    }

    // Step 1c - replace suffix y or Y by i if preceded by a non-vowel which is not the first letter of the word (so cry -> cri, by -> by, say -> say)
    re = re_1c;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      w = stem + "i";
    }

    // Step 2
    re = re_2;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      suffix = fp[2];
      re = re_mgr0;
      if (re.test(stem)) {
        w = stem + step2list[suffix];
      }
    }

    // Step 3
    re = re_3;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      suffix = fp[2];
      re = re_mgr0;
      if (re.test(stem)) {
        w = stem + step3list[suffix];
      }
    }

    // Step 4
    re = re_4;
    re2 = re2_4;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      re = re_mgr1;
      if (re.test(stem)) {
        w = stem;
      }
    } else if (re2.test(w)) {
      var fp = re2.exec(w);
      stem = fp[1] + fp[2];
      re2 = re_mgr1;
      if (re2.test(stem)) {
        w = stem;
      }
    }

    // Step 5
    re = re_5;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      re = re_mgr1;
      re2 = re_meq1;
      re3 = re3_5;
      if (re.test(stem) || (re2.test(stem) && !(re3.test(stem)))) {
        w = stem;
      }
    }

    re = re_5_1;
    re2 = re_mgr1;
    if (re.test(w) && re2.test(w)) {
      re = re_1b_2;
      w = w.replace(re,"");
    }

    // and turn initial Y back to y

    if (firstch == "y") {
      w = firstch.toLowerCase() + w.substr(1);
    }

    return w;
  };

  return function (token) {
    return token.update(porterStemmer);
  }
})();

lunr.Pipeline.registerFunction(lunr.stemmer, 'stemmer')
/*!
 * lunr.stopWordFilter
 * Copyright (C) 2020 Oliver Nightingale
 */

/**
 * lunr.generateStopWordFilter builds a stopWordFilter function from the provided
 * list of stop words.
 *
 * The built in lunr.stopWordFilter is built using this generator and can be used
 * to generate custom stopWordFilters for applications or non English languages.
 *
 * @function
 * @param {Array} token The token to pass through the filter
 * @returns {lunr.PipelineFunction}
 * @see lunr.Pipeline
 * @see lunr.stopWordFilter
 */
lunr.generateStopWordFilter = function (stopWords) {
  var words = stopWords.reduce(function (memo, stopWord) {
    memo[stopWord] = stopWord
    return memo
  }, {})

  return function (token) {
    if (token && words[token.toString()] !== token.toString()) return token
  }
}

/**
 * lunr.stopWordFilter is an English language stop word list filter, any words
 * contained in the list will not be passed through the filter.
 *
 * This is intended to be used in the Pipeline. If the token does not pass the
 * filter then undefined will be returned.
 *
 * @function
 * @implements {lunr.PipelineFunction}
 * @params {lunr.Token} token - A token to check for being a stop word.
 * @returns {lunr.Token}
 * @see {@link lunr.Pipeline}
 */
lunr.stopWordFilter = lunr.generateStopWordFilter([
  'a',
  'able',
  'about',
  'across',
  'after',
  'all',
  'almost',
  'also',
  'am',
  'among',
  'an',
  'and',
  'any',
  'are',
  'as',
  'at',
  'be',
  'because',
  'been',
  'but',
  'by',
  'can',
  'cannot',
  'could',
  'dear',
  'did',
  'do',
  'does',
  'either',
  'else',
  'ever',
  'every',
  'for',
  'from',
  'get',
  'got',
  'had',
  'has',
  'have',
  'he',
  'her',
  'hers',
  'him',
  'his',
  'how',
  'however',
  'i',
  'if',
  'in',
  'into',
  'is',
  'it',
  'its',
  'just',
  'least',
  'let',
  'like',
  'likely',
  'may',
  'me',
  'might',
  'most',
  'must',
  'my',
  'neither',
  'no',
  'nor',
  'not',
  'of',
  'off',
  'often',
  'on',
  'only',
  'or',
  'other',
  'our',
  'own',
  'rather',
  'said',
  'say',
  'says',
  'she',
  'should',
  'since',
  'so',
  'some',
  'than',
  'that',
  'the',
  'their',
  'them',
  'then',
  'there',
  'these',
  'they',
  'this',
  'tis',
  'to',
  'too',
  'twas',
  'us',
  'wants',
  'was',
  'we',
  'were',
  'what',
  'when',
  'where',
  'which',
  'while',
  'who',
  'whom',
  'why',
  'will',
  'with',
  'would',
  'yet',
  'you',
  'your'
])

lunr.Pipeline.registerFunction(lunr.stopWordFilter, 'stopWordFilter')
/*!
 * lunr.trimmer
 * Copyright (C) 2020 Oliver Nightingale
 */

/**
 * lunr.trimmer is a pipeline function for trimming non word
 * characters from the beginning and end of tokens before they
 * enter the index.
 *
 * This implementation may not work correctly for non latin
 * characters and should either be removed or adapted for use
 * with languages with non-latin characters.
 *
 * @static
 * @implements {lunr.PipelineFunction}
 * @param {lunr.Token} token The token to pass through the filter
 * @returns {lunr.Token}
 * @see lunr.Pipeline
 */
lunr.trimmer = function (token) {
  return token.update(function (s) {
    return s.replace(/^\W+/, '').replace(/\W+$/, '')
  })
}

lunr.Pipeline.registerFunction(lunr.trimmer, 'trimmer')
/*!
 * lunr.TokenSet
 * Copyright (C) 2020 Oliver Nightingale
 */

/**
 * A token set is used to store the unique list of all tokens
 * within an index. Token sets are also used to represent an
 * incoming query to the index, this query token set and index
 * token set are then intersected to find which tokens to look
 * up in the inverted index.
 *
 * A token set can hold multiple tokens, as in the case of the
 * index token set, or it can hold a single token as in the
 * case of a simple query token set.
 *
 * Additionally token sets are used to perform wildcard matching.
 * Leading, contained and trailing wildcards are supported, and
 * from this edit distance matching can also be provided.
 *
 * Token sets are implemented as a minimal finite state automata,
 * where both common prefixes and suffixes are shared between tokens.
 * This helps to reduce the space used for storing the token set.
 *
 * @constructor
 */
lunr.TokenSet = function () {
  this.final = false
  this.edges = {}
  this.id = lunr.TokenSet._nextId
  lunr.TokenSet._nextId += 1
}

/**
 * Keeps track of the next, auto increment, identifier to assign
 * to a new tokenSet.
 *
 * TokenSets require a unique identifier to be correctly minimised.
 *
 * @private
 */
lunr.TokenSet._nextId = 1

/**
 * Creates a TokenSet instance from the given sorted array of words.
 *
 * @param {String[]} arr - A sorted array of strings to create the set from.
 * @returns {lunr.TokenSet}
 * @throws Will throw an error if the input array is not sorted.
 */
lunr.TokenSet.fromArray = function (arr) {
  var builder = new lunr.TokenSet.Builder

  for (var i = 0, len = arr.length; i < len; i++) {
    builder.insert(arr[i])
  }

  builder.finish()
  return builder.root
}

/**
 * Creates a token set from a query clause.
 *
 * @private
 * @param {Object} clause - A single clause from lunr.Query.
 * @param {string} clause.term - The query clause term.
 * @param {number} [clause.editDistance] - The optional edit distance for the term.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.fromClause = function (clause) {
  if ('editDistance' in clause) {
    return lunr.TokenSet.fromFuzzyString(clause.term, clause.editDistance)
  } else {
    return lunr.TokenSet.fromString(clause.term)
  }
}

/**
 * Creates a token set representing a single string with a specified
 * edit distance.
 *
 * Insertions, deletions, substitutions and transpositions are each
 * treated as an edit distance of 1.
 *
 * Increasing the allowed edit distance will have a dramatic impact
 * on the performance of both creating and intersecting these TokenSets.
 * It is advised to keep the edit distance less than 3.
 *
 * @param {string} str - The string to create the token set from.
 * @param {number} editDistance - The allowed edit distance to match.
 * @returns {lunr.Vector}
 */
lunr.TokenSet.fromFuzzyString = function (str, editDistance) {
  var root = new lunr.TokenSet

  var stack = [{
    node: root,
    editsRemaining: editDistance,
    str: str
  }]

  while (stack.length) {
    var frame = stack.pop()

    // no edit
    if (frame.str.length > 0) {
      var char = frame.str.charAt(0),
          noEditNode

      if (char in frame.node.edges) {
        noEditNode = frame.node.edges[char]
      } else {
        noEditNode = new lunr.TokenSet
        frame.node.edges[char] = noEditNode
      }

      if (frame.str.length == 1) {
        noEditNode.final = true
      }

      stack.push({
        node: noEditNode,
        editsRemaining: frame.editsRemaining,
        str: frame.str.slice(1)
      })
    }

    if (frame.editsRemaining == 0) {
      continue
    }

    // insertion
    if ("*" in frame.node.edges) {
      var insertionNode = frame.node.edges["*"]
    } else {
      var insertionNode = new lunr.TokenSet
      frame.node.edges["*"] = insertionNode
    }

    if (frame.str.length == 0) {
      insertionNode.final = true
    }

    stack.push({
      node: insertionNode,
      editsRemaining: frame.editsRemaining - 1,
      str: frame.str
    })

    // deletion
    // can only do a deletion if we have enough edits remaining
    // and if there are characters left to delete in the string
    if (frame.str.length > 1) {
      stack.push({
        node: frame.node,
        editsRemaining: frame.editsRemaining - 1,
        str: frame.str.slice(1)
      })
    }

    // deletion
    // just removing the last character from the str
    if (frame.str.length == 1) {
      frame.node.final = true
    }

    // substitution
    // can only do a substitution if we have enough edits remaining
    // and if there are characters left to substitute
    if (frame.str.length >= 1) {
      if ("*" in frame.node.edges) {
        var substitutionNode = frame.node.edges["*"]
      } else {
        var substitutionNode = new lunr.TokenSet
        frame.node.edges["*"] = substitutionNode
      }

      if (frame.str.length == 1) {
        substitutionNode.final = true
      }

      stack.push({
        node: substitutionNode,
        editsRemaining: frame.editsRemaining - 1,
        str: frame.str.slice(1)
      })
    }

    // transposition
    // can only do a transposition if there are edits remaining
    // and there are enough characters to transpose
    if (frame.str.length > 1) {
      var charA = frame.str.charAt(0),
          charB = frame.str.charAt(1),
          transposeNode

      if (charB in frame.node.edges) {
        transposeNode = frame.node.edges[charB]
      } else {
        transposeNode = new lunr.TokenSet
        frame.node.edges[charB] = transposeNode
      }

      if (frame.str.length == 1) {
        transposeNode.final = true
      }

      stack.push({
        node: transposeNode,
        editsRemaining: frame.editsRemaining - 1,
        str: charA + frame.str.slice(2)
      })
    }
  }

  return root
}

/**
 * Creates a TokenSet from a string.
 *
 * The string may contain one or more wildcard characters (*)
 * that will allow wildcard matching when intersecting with
 * another TokenSet.
 *
 * @param {string} str - The string to create a TokenSet from.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.fromString = function (str) {
  var node = new lunr.TokenSet,
      root = node

  /*
   * Iterates through all characters within the passed string
   * appending a node for each character.
   *
   * When a wildcard character is found then a self
   * referencing edge is introduced to continually match
   * any number of any characters.
   */
  for (var i = 0, len = str.length; i < len; i++) {
    var char = str[i],
        final = (i == len - 1)

    if (char == "*") {
      node.edges[char] = node
      node.final = final

    } else {
      var next = new lunr.TokenSet
      next.final = final

      node.edges[char] = next
      node = next
    }
  }

  return root
}

/**
 * Converts this TokenSet into an array of strings
 * contained within the TokenSet.
 *
 * This is not intended to be used on a TokenSet that
 * contains wildcards, in these cases the results are
 * undefined and are likely to cause an infinite loop.
 *
 * @returns {string[]}
 */
lunr.TokenSet.prototype.toArray = function () {
  var words = []

  var stack = [{
    prefix: "",
    node: this
  }]

  while (stack.length) {
    var frame = stack.pop(),
        edges = Object.keys(frame.node.edges),
        len = edges.length

    if (frame.node.final) {
      /* In Safari, at this point the prefix is sometimes corrupted, see:
       * https://github.com/olivernn/lunr.js/issues/279 Calling any
       * String.prototype method forces Safari to "cast" this string to what
       * it's supposed to be, fixing the bug. */
      frame.prefix.charAt(0)
      words.push(frame.prefix)
    }

    for (var i = 0; i < len; i++) {
      var edge = edges[i]

      stack.push({
        prefix: frame.prefix.concat(edge),
        node: frame.node.edges[edge]
      })
    }
  }

  return words
}

/**
 * Generates a string representation of a TokenSet.
 *
 * This is intended to allow TokenSets to be used as keys
 * in objects, largely to aid the construction and minimisation
 * of a TokenSet. As such it is not designed to be a human
 * friendly representation of the TokenSet.
 *
 * @returns {string}
 */
lunr.TokenSet.prototype.toString = function () {
  // NOTE: Using Object.keys here as this.edges is very likely
  // to enter 'hash-mode' with many keys being added
  //
  // avoiding a for-in loop here as it leads to the function
  // being de-optimised (at least in V8). From some simple
  // benchmarks the performance is comparable, but allowing
  // V8 to optimize may mean easy performance wins in the future.

  if (this._str) {
    return this._str
  }

  var str = this.final ? '1' : '0',
      labels = Object.keys(this.edges).sort(),
      len = labels.length

  for (var i = 0; i < len; i++) {
    var label = labels[i],
        node = this.edges[label]

    str = str + label + node.id
  }

  return str
}

/**
 * Returns a new TokenSet that is the intersection of
 * this TokenSet and the passed TokenSet.
 *
 * This intersection will take into account any wildcards
 * contained within the TokenSet.
 *
 * @param {lunr.TokenSet} b - An other TokenSet to intersect with.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.prototype.intersect = function (b) {
  var output = new lunr.TokenSet,
      frame = undefined

  var stack = [{
    qNode: b,
    output: output,
    node: this
  }]

  while (stack.length) {
    frame = stack.pop()

    // NOTE: As with the #toString method, we are using
    // Object.keys and a for loop instead of a for-in loop
    // as both of these objects enter 'hash' mode, causing
    // the function to be de-optimised in V8
    var qEdges = Object.keys(frame.qNode.edges),
        qLen = qEdges.length,
        nEdges = Object.keys(frame.node.edges),
        nLen = nEdges.length

    for (var q = 0; q < qLen; q++) {
      var qEdge = qEdges[q]

      for (var n = 0; n < nLen; n++) {
        var nEdge = nEdges[n]

        if (nEdge == qEdge || qEdge == '*') {
          var node = frame.node.edges[nEdge],
              qNode = frame.qNode.edges[qEdge],
              final = node.final && qNode.final,
              next = undefined

          if (nEdge in frame.output.edges) {
            // an edge already exists for this character
            // no need to create a new node, just set the finality
            // bit unless this node is already final
            next = frame.output.edges[nEdge]
            next.final = next.final || final

          } else {
            // no edge exists yet, must create one
            // set the finality bit and insert it
            // into the output
            next = new lunr.TokenSet
            next.final = final
            frame.output.edges[nEdge] = next
          }

          stack.push({
            qNode: qNode,
            output: next,
            node: node
          })
        }
      }
    }
  }

  return output
}
lunr.TokenSet.Builder = function () {
  this.previousWord = ""
  this.root = new lunr.TokenSet
  this.uncheckedNodes = []
  this.minimizedNodes = {}
}

lunr.TokenSet.Builder.prototype.insert = function (word) {
  var node,
      commonPrefix = 0

  if (word < this.previousWord) {
    throw new Error ("Out of order word insertion")
  }

  for (var i = 0; i < word.length && i < this.previousWord.length; i++) {
    if (word[i] != this.previousWord[i]) break
    commonPrefix++
  }

  this.minimize(commonPrefix)

  if (this.uncheckedNodes.length == 0) {
    node = this.root
  } else {
    node = this.uncheckedNodes[this.uncheckedNodes.length - 1].child
  }

  for (var i = commonPrefix; i < word.length; i++) {
    var nextNode = new lunr.TokenSet,
        char = word[i]

    node.edges[char] = nextNode

    this.uncheckedNodes.push({
      parent: node,
      char: char,
      child: nextNode
    })

    node = nextNode
  }

  node.final = true
  this.previousWord = word
}

lunr.TokenSet.Builder.prototype.finish = function () {
  this.minimize(0)
}

lunr.TokenSet.Builder.prototype.minimize = function (downTo) {
  for (var i = this.uncheckedNodes.length - 1; i >= downTo; i--) {
    var node = this.uncheckedNodes[i],
        childKey = node.child.toString()

    if (childKey in this.minimizedNodes) {
      node.parent.edges[node.char] = this.minimizedNodes[childKey]
    } else {
      // Cache the key for this node since
      // we know it can't change anymore
      node.child._str = childKey

      this.minimizedNodes[childKey] = node.child
    }

    this.uncheckedNodes.pop()
  }
}
/*!
 * lunr.Index
 * Copyright (C) 2020 Oliver Nightingale
 */

/**
 * An index contains the built index of all documents and provides a query interface
 * to the index.
 *
 * Usually instances of lunr.Index will not be created using this constructor, instead
 * lunr.Builder should be used to construct new indexes, or lunr.Index.load should be
 * used to load previously built and serialized indexes.
 *
 * @constructor
 * @param {Object} attrs - The attributes of the built search index.
 * @param {Object} attrs.invertedIndex - An index of term/field to document reference.
 * @param {Object<string, lunr.Vector>} attrs.fieldVectors - Field vectors
 * @param {lunr.TokenSet} attrs.tokenSet - An set of all corpus tokens.
 * @param {string[]} attrs.fields - The names of indexed document fields.
 * @param {lunr.Pipeline} attrs.pipeline - The pipeline to use for search terms.
 */
lunr.Index = function (attrs) {
  this.invertedIndex = attrs.invertedIndex
  this.fieldVectors = attrs.fieldVectors
  this.tokenSet = attrs.tokenSet
  this.fields = attrs.fields
  this.pipeline = attrs.pipeline
}

/**
 * A result contains details of a document matching a search query.
 * @typedef {Object} lunr.Index~Result
 * @property {string} ref - The reference of the document this result represents.
 * @property {number} score - A number between 0 and 1 representing how similar this document is to the query.
 * @property {lunr.MatchData} matchData - Contains metadata about this match including which term(s) caused the match.
 */

/**
 * Although lunr provides the ability to create queries using lunr.Query, it also provides a simple
 * query language which itself is parsed into an instance of lunr.Query.
 *
 * For programmatically building queries it is advised to directly use lunr.Query, the query language
 * is best used for human entered text rather than program generated text.
 *
 * At its simplest queries can just be a single term, e.g. `hello`, multiple terms are also supported
 * and will be combined with OR, e.g `hello world` will match documents that contain either 'hello'
 * or 'world', though those that contain both will rank higher in the results.
 *
 * Wildcards can be included in terms to match one or more unspecified characters, these wildcards can
 * be inserted anywhere within the term, and more than one wildcard can exist in a single term. Adding
 * wildcards will increase the number of documents that will be found but can also have a negative
 * impact on query performance, especially with wildcards at the beginning of a term.
 *
 * Terms can be restricted to specific fields, e.g. `title:hello`, only documents with the term
 * hello in the title field will match this query. Using a field not present in the index will lead
 * to an error being thrown.
 *
 * Modifiers can also be added to terms, lunr supports edit distance and boost modifiers on terms. A term
 * boost will make documents matching that term score higher, e.g. `foo^5`. Edit distance is also supported
 * to provide fuzzy matching, e.g. 'hello~2' will match documents with hello with an edit distance of 2.
 * Avoid large values for edit distance to improve query performance.
 *
 * Each term also supports a presence modifier. By default a term's presence in document is optional, however
 * this can be changed to either required or prohibited. For a term's presence to be required in a document the
 * term should be prefixed with a '+', e.g. `+foo bar` is a search for documents that must contain 'foo' and
 * optionally contain 'bar'. Conversely a leading '-' sets the terms presence to prohibited, i.e. it must not
 * appear in a document, e.g. `-foo bar` is a search for documents that do not contain 'foo' but may contain 'bar'.
 *
 * To escape special characters the backslash character '\' can be used, this allows searches to include
 * characters that would normally be considered modifiers, e.g. `foo\~2` will search for a term "foo~2" instead
 * of attempting to apply a boost of 2 to the search term "foo".
 *
 * @typedef {string} lunr.Index~QueryString
 * @example <caption>Simple single term query</caption>
 * hello
 * @example <caption>Multiple term query</caption>
 * hello world
 * @example <caption>term scoped to a field</caption>
 * title:hello
 * @example <caption>term with a boost of 10</caption>
 * hello^10
 * @example <caption>term with an edit distance of 2</caption>
 * hello~2
 * @example <caption>terms with presence modifiers</caption>
 * -foo +bar baz
 */

/**
 * Performs a search against the index using lunr query syntax.
 *
 * Results will be returned sorted by their score, the most relevant results
 * will be returned first.  For details on how the score is calculated, please see
 * the {@link https://lunrjs.com/guides/searching.html#scoring|guide}.
 *
 * For more programmatic querying use lunr.Index#query.
 *
 * @param {lunr.Index~QueryString} queryString - A string containing a lunr query.
 * @throws {lunr.QueryParseError} If the passed query string cannot be parsed.
 * @returns {lunr.Index~Result[]}
 */
lunr.Index.prototype.search = function (queryString) {
  return this.query(function (query) {
    var parser = new lunr.QueryParser(queryString, query)
    parser.parse()
  })
}

/**
 * A query builder callback provides a query object to be used to express
 * the query to perform on the index.
 *
 * @callback lunr.Index~queryBuilder
 * @param {lunr.Query} query - The query object to build up.
 * @this lunr.Query
 */

/**
 * Performs a query against the index using the yielded lunr.Query object.
 *
 * If performing programmatic queries against the index, this method is preferred
 * over lunr.Index#search so as to avoid the additional query parsing overhead.
 *
 * A query object is yielded to the supplied function which should be used to
 * express the query to be run against the index.
 *
 * Note that although this function takes a callback parameter it is _not_ an
 * asynchronous operation, the callback is just yielded a query object to be
 * customized.
 *
 * @param {lunr.Index~queryBuilder} fn - A function that is used to build the query.
 * @returns {lunr.Index~Result[]}
 */
lunr.Index.prototype.query = function (fn) {
  // for each query clause
  // * process terms
  // * expand terms from token set
  // * find matching documents and metadata
  // * get document vectors
  // * score documents

  var query = new lunr.Query(this.fields),
      matchingFields = Object.create(null),
      queryVectors = Object.create(null),
      termFieldCache = Object.create(null),
      requiredMatches = Object.create(null),
      prohibitedMatches = Object.create(null)

  /*
   * To support field level boosts a query vector is created per
   * field. An empty vector is eagerly created to support negated
   * queries.
   */
  for (var i = 0; i < this.fields.length; i++) {
    queryVectors[this.fields[i]] = new lunr.Vector
  }

  fn.call(query, query)

  for (var i = 0; i < query.clauses.length; i++) {
    /*
     * Unless the pipeline has been disabled for this term, which is
     * the case for terms with wildcards, we need to pass the clause
     * term through the search pipeline. A pipeline returns an array
     * of processed terms. Pipeline functions may expand the passed
     * term, which means we may end up performing multiple index lookups
     * for a single query term.
     */
    var clause = query.clauses[i],
        terms = null,
        clauseMatches = lunr.Set.empty

    if (clause.usePipeline) {
      terms = this.pipeline.runString(clause.term, {
        fields: clause.fields
      })
    } else {
      terms = [clause.term]
    }

    for (var m = 0; m < terms.length; m++) {
      var term = terms[m]

      /*
       * Each term returned from the pipeline needs to use the same query
       * clause object, e.g. the same boost and or edit distance. The
       * simplest way to do this is to re-use the clause object but mutate
       * its term property.
       */
      clause.term = term

      /*
       * From the term in the clause we create a token set which will then
       * be used to intersect the indexes token set to get a list of terms
       * to lookup in the inverted index
       */
      var termTokenSet = lunr.TokenSet.fromClause(clause),
          expandedTerms = this.tokenSet.intersect(termTokenSet).toArray()

      /*
       * If a term marked as required does not exist in the tokenSet it is
       * impossible for the search to return any matches. We set all the field
       * scoped required matches set to empty and stop examining any further
       * clauses.
       */
      if (expandedTerms.length === 0 && clause.presence === lunr.Query.presence.REQUIRED) {
        for (var k = 0; k < clause.fields.length; k++) {
          var field = clause.fields[k]
          requiredMatches[field] = lunr.Set.empty
        }

        break
      }

      for (var j = 0; j < expandedTerms.length; j++) {
        /*
         * For each term get the posting and termIndex, this is required for
         * building the query vector.
         */
        var expandedTerm = expandedTerms[j],
            posting = this.invertedIndex[expandedTerm],
            termIndex = posting._index

        for (var k = 0; k < clause.fields.length; k++) {
          /*
           * For each field that this query term is scoped by (by default
           * all fields are in scope) we need to get all the document refs
           * that have this term in that field.
           *
           * The posting is the entry in the invertedIndex for the matching
           * term from above.
           */
          var field = clause.fields[k],
              fieldPosting = posting[field],
              matchingDocumentRefs = Object.keys(fieldPosting),
              termField = expandedTerm + "/" + field,
              matchingDocumentsSet = new lunr.Set(matchingDocumentRefs)

          /*
           * if the presence of this term is required ensure that the matching
           * documents are added to the set of required matches for this clause.
           *
           */
          if (clause.presence == lunr.Query.presence.REQUIRED) {
            clauseMatches = clauseMatches.union(matchingDocumentsSet)

            if (requiredMatches[field] === undefined) {
              requiredMatches[field] = lunr.Set.complete
            }
          }

          /*
           * if the presence of this term is prohibited ensure that the matching
           * documents are added to the set of prohibited matches for this field,
           * creating that set if it does not yet exist.
           */
          if (clause.presence == lunr.Query.presence.PROHIBITED) {
            if (prohibitedMatches[field] === undefined) {
              prohibitedMatches[field] = lunr.Set.empty
            }

            prohibitedMatches[field] = prohibitedMatches[field].union(matchingDocumentsSet)

            /*
             * Prohibited matches should not be part of the query vector used for
             * similarity scoring and no metadata should be extracted so we continue
             * to the next field
             */
            continue
          }

          /*
           * The query field vector is populated using the termIndex found for
           * the term and a unit value with the appropriate boost applied.
           * Using upsert because there could already be an entry in the vector
           * for the term we are working with. In that case we just add the scores
           * together.
           */
          queryVectors[field].upsert(termIndex, clause.boost, function (a, b) { return a + b })

          /**
           * If we've already seen this term, field combo then we've already collected
           * the matching documents and metadata, no need to go through all that again
           */
          if (termFieldCache[termField]) {
            continue
          }

          for (var l = 0; l < matchingDocumentRefs.length; l++) {
            /*
             * All metadata for this term/field/document triple
             * are then extracted and collected into an instance
             * of lunr.MatchData ready to be returned in the query
             * results
             */
            var matchingDocumentRef = matchingDocumentRefs[l],
                matchingFieldRef = new lunr.FieldRef (matchingDocumentRef, field),
                metadata = fieldPosting[matchingDocumentRef],
                fieldMatch

            if ((fieldMatch = matchingFields[matchingFieldRef]) === undefined) {
              matchingFields[matchingFieldRef] = new lunr.MatchData (expandedTerm, field, metadata)
            } else {
              fieldMatch.add(expandedTerm, field, metadata)
            }

          }

          termFieldCache[termField] = true
        }
      }
    }

    /**
     * If the presence was required we need to update the requiredMatches field sets.
     * We do this after all fields for the term have collected their matches because
     * the clause terms presence is required in _any_ of the fields not _all_ of the
     * fields.
     */
    if (clause.presence === lunr.Query.presence.REQUIRED) {
      for (var k = 0; k < clause.fields.length; k++) {
        var field = clause.fields[k]
        requiredMatches[field] = requiredMatches[field].intersect(clauseMatches)
      }
    }
  }

  /**
   * Need to combine the field scoped required and prohibited
   * matching documents into a global set of required and prohibited
   * matches
   */
  var allRequiredMatches = lunr.Set.complete,
      allProhibitedMatches = lunr.Set.empty

  for (var i = 0; i < this.fields.length; i++) {
    var field = this.fields[i]

    if (requiredMatches[field]) {
      allRequiredMatches = allRequiredMatches.intersect(requiredMatches[field])
    }

    if (prohibitedMatches[field]) {
      allProhibitedMatches = allProhibitedMatches.union(prohibitedMatches[field])
    }
  }

  var matchingFieldRefs = Object.keys(matchingFields),
      results = [],
      matches = Object.create(null)

  /*
   * If the query is negated (contains only prohibited terms)
   * we need to get _all_ fieldRefs currently existing in the
   * index. This is only done when we know that the query is
   * entirely prohibited terms to avoid any cost of getting all
   * fieldRefs unnecessarily.
   *
   * Additionally, blank MatchData must be created to correctly
   * populate the results.
   */
  if (query.isNegated()) {
    matchingFieldRefs = Object.keys(this.fieldVectors)

    for (var i = 0; i < matchingFieldRefs.length; i++) {
      var matchingFieldRef = matchingFieldRefs[i]
      var fieldRef = lunr.FieldRef.fromString(matchingFieldRef)
      matchingFields[matchingFieldRef] = new lunr.MatchData
    }
  }

  for (var i = 0; i < matchingFieldRefs.length; i++) {
    /*
     * Currently we have document fields that match the query, but we
     * need to return documents. The matchData and scores are combined
     * from multiple fields belonging to the same document.
     *
     * Scores are calculated by field, using the query vectors created
     * above, and combined into a final document score using addition.
     */
    var fieldRef = lunr.FieldRef.fromString(matchingFieldRefs[i]),
        docRef = fieldRef.docRef

    if (!allRequiredMatches.contains(docRef)) {
      continue
    }

    if (allProhibitedMatches.contains(docRef)) {
      continue
    }

    var fieldVector = this.fieldVectors[fieldRef],
        score = queryVectors[fieldRef.fieldName].similarity(fieldVector),
        docMatch

    if ((docMatch = matches[docRef]) !== undefined) {
      docMatch.score += score
      docMatch.matchData.combine(matchingFields[fieldRef])
    } else {
      var match = {
        ref: docRef,
        score: score,
        matchData: matchingFields[fieldRef]
      }
      matches[docRef] = match
      results.push(match)
    }
  }

  /*
   * Sort the results objects by score, highest first.
   */
  return results.sort(function (a, b) {
    return b.score - a.score
  })
}

/**
 * Prepares the index for JSON serialization.
 *
 * The schema for this JSON blob will be described in a
 * separate JSON schema file.
 *
 * @returns {Object}
 */
lunr.Index.prototype.toJSON = function () {
  var invertedIndex = Object.keys(this.invertedIndex)
    .sort()
    .map(function (term) {
      return [term, this.invertedIndex[term]]
    }, this)

  var fieldVectors = Object.keys(this.fieldVectors)
    .map(function (ref) {
      return [ref, this.fieldVectors[ref].toJSON()]
    }, this)

  return {
    version: lunr.version,
    fields: this.fields,
    fieldVectors: fieldVectors,
    invertedIndex: invertedIndex,
    pipeline: this.pipeline.toJSON()
  }
}

/**
 * Loads a previously serialized lunr.Index
 *
 * @param {Object} serializedIndex - A previously serialized lunr.Index
 * @returns {lunr.Index}
 */
lunr.Index.load = function (serializedIndex) {
  var attrs = {},
      fieldVectors = {},
      serializedVectors = serializedIndex.fieldVectors,
      invertedIndex = Object.create(null),
      serializedInvertedIndex = serializedIndex.invertedIndex,
      tokenSetBuilder = new lunr.TokenSet.Builder,
      pipeline = lunr.Pipeline.load(serializedIndex.pipeline)

  if (serializedIndex.version != lunr.version) {
    lunr.utils.warn("Version mismatch when loading serialised index. Current version of lunr '" + lunr.version + "' does not match serialized index '" + serializedIndex.version + "'")
  }

  for (var i = 0; i < serializedVectors.length; i++) {
    var tuple = serializedVectors[i],
        ref = tuple[0],
        elements = tuple[1]

    fieldVectors[ref] = new lunr.Vector(elements)
  }

  for (var i = 0; i < serializedInvertedIndex.length; i++) {
    var tuple = serializedInvertedIndex[i],
        term = tuple[0],
        posting = tuple[1]

    tokenSetBuilder.insert(term)
    invertedIndex[term] = posting
  }

  tokenSetBuilder.finish()

  attrs.fields = serializedIndex.fields

  attrs.fieldVectors = fieldVectors
  attrs.invertedIndex = invertedIndex
  attrs.tokenSet = tokenSetBuilder.root
  attrs.pipeline = pipeline

  return new lunr.Index(attrs)
}
/*!
 * lunr.Builder
 * Copyright (C) 2020 Oliver Nightingale
 */

/**
 * lunr.Builder performs indexing on a set of documents and
 * returns instances of lunr.Index ready for querying.
 *
 * All configuration of the index is done via the builder, the
 * fields to index, the document reference, the text processing
 * pipeline and document scoring parameters are all set on the
 * builder before indexing.
 *
 * @constructor
 * @property {string} _ref - Internal reference to the document reference field.
 * @property {string[]} _fields - Internal reference to the document fields to index.
 * @property {object} invertedIndex - The inverted index maps terms to document fields.
 * @property {object} documentTermFrequencies - Keeps track of document term frequencies.
 * @property {object} documentLengths - Keeps track of the length of documents added to the index.
 * @property {lunr.tokenizer} tokenizer - Function for splitting strings into tokens for indexing.
 * @property {lunr.Pipeline} pipeline - The pipeline performs text processing on tokens before indexing.
 * @property {lunr.Pipeline} searchPipeline - A pipeline for processing search terms before querying the index.
 * @property {number} documentCount - Keeps track of the total number of documents indexed.
 * @property {number} _b - A parameter to control field length normalization, setting this to 0 disabled normalization, 1 fully normalizes field lengths, the default value is 0.75.
 * @property {number} _k1 - A parameter to control how quickly an increase in term frequency results in term frequency saturation, the default value is 1.2.
 * @property {number} termIndex - A counter incremented for each unique term, used to identify a terms position in the vector space.
 * @property {array} metadataWhitelist - A list of metadata keys that have been whitelisted for entry in the index.
 */
lunr.Builder = function () {
  this._ref = "id"
  this._fields = Object.create(null)
  this._documents = Object.create(null)
  this.invertedIndex = Object.create(null)
  this.fieldTermFrequencies = {}
  this.fieldLengths = {}
  this.tokenizer = lunr.tokenizer
  this.pipeline = new lunr.Pipeline
  this.searchPipeline = new lunr.Pipeline
  this.documentCount = 0
  this._b = 0.75
  this._k1 = 1.2
  this.termIndex = 0
  this.metadataWhitelist = []
}

/**
 * Sets the document field used as the document reference. Every document must have this field.
 * The type of this field in the document should be a string, if it is not a string it will be
 * coerced into a string by calling toString.
 *
 * The default ref is 'id'.
 *
 * The ref should _not_ be changed during indexing, it should be set before any documents are
 * added to the index. Changing it during indexing can lead to inconsistent results.
 *
 * @param {string} ref - The name of the reference field in the document.
 */
lunr.Builder.prototype.ref = function (ref) {
  this._ref = ref
}

/**
 * A function that is used to extract a field from a document.
 *
 * Lunr expects a field to be at the top level of a document, if however the field
 * is deeply nested within a document an extractor function can be used to extract
 * the right field for indexing.
 *
 * @callback fieldExtractor
 * @param {object} doc - The document being added to the index.
 * @returns {?(string|object|object[])} obj - The object that will be indexed for this field.
 * @example <caption>Extracting a nested field</caption>
 * function (doc) { return doc.nested.field }
 */

/**
 * Adds a field to the list of document fields that will be indexed. Every document being
 * indexed should have this field. Null values for this field in indexed documents will
 * not cause errors but will limit the chance of that document being retrieved by searches.
 *
 * All fields should be added before adding documents to the index. Adding fields after
 * a document has been indexed will have no effect on already indexed documents.
 *
 * Fields can be boosted at build time. This allows terms within that field to have more
 * importance when ranking search results. Use a field boost to specify that matches within
 * one field are more important than other fields.
 *
 * @param {string} fieldName - The name of a field to index in all documents.
 * @param {object} attributes - Optional attributes associated with this field.
 * @param {number} [attributes.boost=1] - Boost applied to all terms within this field.
 * @param {fieldExtractor} [attributes.extractor] - Function to extract a field from a document.
 * @throws {RangeError} fieldName cannot contain unsupported characters '/'
 */
lunr.Builder.prototype.field = function (fieldName, attributes) {
  if (/\//.test(fieldName)) {
    throw new RangeError ("Field '" + fieldName + "' contains illegal character '/'")
  }

  this._fields[fieldName] = attributes || {}
}

/**
 * A parameter to tune the amount of field length normalisation that is applied when
 * calculating relevance scores. A value of 0 will completely disable any normalisation
 * and a value of 1 will fully normalise field lengths. The default is 0.75. Values of b
 * will be clamped to the range 0 - 1.
 *
 * @param {number} number - The value to set for this tuning parameter.
 */
lunr.Builder.prototype.b = function (number) {
  if (number < 0) {
    this._b = 0
  } else if (number > 1) {
    this._b = 1
  } else {
    this._b = number
  }
}

/**
 * A parameter that controls the speed at which a rise in term frequency results in term
 * frequency saturation. The default value is 1.2. Setting this to a higher value will give
 * slower saturation levels, a lower value will result in quicker saturation.
 *
 * @param {number} number - The value to set for this tuning parameter.
 */
lunr.Builder.prototype.k1 = function (number) {
  this._k1 = number
}

/**
 * Adds a document to the index.
 *
 * Before adding fields to the index the index should have been fully setup, with the document
 * ref and all fields to index already having been specified.
 *
 * The document must have a field name as specified by the ref (by default this is 'id') and
 * it should have all fields defined for indexing, though null or undefined values will not
 * cause errors.
 *
 * Entire documents can be boosted at build time. Applying a boost to a document indicates that
 * this document should rank higher in search results than other documents.
 *
 * @param {object} doc - The document to add to the index.
 * @param {object} attributes - Optional attributes associated with this document.
 * @param {number} [attributes.boost=1] - Boost applied to all terms within this document.
 */
lunr.Builder.prototype.add = function (doc, attributes) {
  var docRef = doc[this._ref],
      fields = Object.keys(this._fields)

  this._documents[docRef] = attributes || {}
  this.documentCount += 1

  for (var i = 0; i < fields.length; i++) {
    var fieldName = fields[i],
        extractor = this._fields[fieldName].extractor,
        field = extractor ? extractor(doc) : doc[fieldName],
        tokens = this.tokenizer(field, {
          fields: [fieldName]
        }),
        terms = this.pipeline.run(tokens),
        fieldRef = new lunr.FieldRef (docRef, fieldName),
        fieldTerms = Object.create(null)

    this.fieldTermFrequencies[fieldRef] = fieldTerms
    this.fieldLengths[fieldRef] = 0

    // store the length of this field for this document
    this.fieldLengths[fieldRef] += terms.length

    // calculate term frequencies for this field
    for (var j = 0; j < terms.length; j++) {
      var term = terms[j]

      if (fieldTerms[term] == undefined) {
        fieldTerms[term] = 0
      }

      fieldTerms[term] += 1

      // add to inverted index
      // create an initial posting if one doesn't exist
      if (this.invertedIndex[term] == undefined) {
        var posting = Object.create(null)
        posting["_index"] = this.termIndex
        this.termIndex += 1

        for (var k = 0; k < fields.length; k++) {
          posting[fields[k]] = Object.create(null)
        }

        this.invertedIndex[term] = posting
      }

      // add an entry for this term/fieldName/docRef to the invertedIndex
      if (this.invertedIndex[term][fieldName][docRef] == undefined) {
        this.invertedIndex[term][fieldName][docRef] = Object.create(null)
      }

      // store all whitelisted metadata about this token in the
      // inverted index
      for (var l = 0; l < this.metadataWhitelist.length; l++) {
        var metadataKey = this.metadataWhitelist[l],
            metadata = term.metadata[metadataKey]

        if (this.invertedIndex[term][fieldName][docRef][metadataKey] == undefined) {
          this.invertedIndex[term][fieldName][docRef][metadataKey] = []
        }

        this.invertedIndex[term][fieldName][docRef][metadataKey].push(metadata)
      }
    }

  }
}

/**
 * Calculates the average document length for this index
 *
 * @private
 */
lunr.Builder.prototype.calculateAverageFieldLengths = function () {

  var fieldRefs = Object.keys(this.fieldLengths),
      numberOfFields = fieldRefs.length,
      accumulator = {},
      documentsWithField = {}

  for (var i = 0; i < numberOfFields; i++) {
    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),
        field = fieldRef.fieldName

    documentsWithField[field] || (documentsWithField[field] = 0)
    documentsWithField[field] += 1

    accumulator[field] || (accumulator[field] = 0)
    accumulator[field] += this.fieldLengths[fieldRef]
  }

  var fields = Object.keys(this._fields)

  for (var i = 0; i < fields.length; i++) {
    var fieldName = fields[i]
    accumulator[fieldName] = accumulator[fieldName] / documentsWithField[fieldName]
  }

  this.averageFieldLength = accumulator
}

/**
 * Builds a vector space model of every document using lunr.Vector
 *
 * @private
 */
lunr.Builder.prototype.createFieldVectors = function () {
  var fieldVectors = {},
      fieldRefs = Object.keys(this.fieldTermFrequencies),
      fieldRefsLength = fieldRefs.length,
      termIdfCache = Object.create(null)

  for (var i = 0; i < fieldRefsLength; i++) {
    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),
        fieldName = fieldRef.fieldName,
        fieldLength = this.fieldLengths[fieldRef],
        fieldVector = new lunr.Vector,
        termFrequencies = this.fieldTermFrequencies[fieldRef],
        terms = Object.keys(termFrequencies),
        termsLength = terms.length


    var fieldBoost = this._fields[fieldName].boost || 1,
        docBoost = this._documents[fieldRef.docRef].boost || 1

    for (var j = 0; j < termsLength; j++) {
      var term = terms[j],
          tf = termFrequencies[term],
          termIndex = this.invertedIndex[term]._index,
          idf, score, scoreWithPrecision

      if (termIdfCache[term] === undefined) {
        idf = lunr.idf(this.invertedIndex[term], this.documentCount)
        termIdfCache[term] = idf
      } else {
        idf = termIdfCache[term]
      }

      score = idf * ((this._k1 + 1) * tf) / (this._k1 * (1 - this._b + this._b * (fieldLength / this.averageFieldLength[fieldName])) + tf)
      score *= fieldBoost
      score *= docBoost
      scoreWithPrecision = Math.round(score * 1000) / 1000
      // Converts 1.23456789 to 1.234.
      // Reducing the precision so that the vectors take up less
      // space when serialised. Doing it now so that they behave
      // the same before and after serialisation. Also, this is
      // the fastest approach to reducing a number's precision in
      // JavaScript.

      fieldVector.insert(termIndex, scoreWithPrecision)
    }

    fieldVectors[fieldRef] = fieldVector
  }

  this.fieldVectors = fieldVectors
}

/**
 * Creates a token set of all tokens in the index using lunr.TokenSet
 *
 * @private
 */
lunr.Builder.prototype.createTokenSet = function () {
  this.tokenSet = lunr.TokenSet.fromArray(
    Object.keys(this.invertedIndex).sort()
  )
}

/**
 * Builds the index, creating an instance of lunr.Index.
 *
 * This completes the indexing process and should only be called
 * once all documents have been added to the index.
 *
 * @returns {lunr.Index}
 */
lunr.Builder.prototype.build = function () {
  this.calculateAverageFieldLengths()
  this.createFieldVectors()
  this.createTokenSet()

  return new lunr.Index({
    invertedIndex: this.invertedIndex,
    fieldVectors: this.fieldVectors,
    tokenSet: this.tokenSet,
    fields: Object.keys(this._fields),
    pipeline: this.searchPipeline
  })
}

/**
 * Applies a plugin to the index builder.
 *
 * A plugin is a function that is called with the index builder as its context.
 * Plugins can be used to customise or extend the behaviour of the index
 * in some way. A plugin is just a function, that encapsulated the custom
 * behaviour that should be applied when building the index.
 *
 * The plugin function will be called with the index builder as its argument, additional
 * arguments can also be passed when calling use. The function will be called
 * with the index builder as its context.
 *
 * @param {Function} plugin The plugin to apply.
 */
lunr.Builder.prototype.use = function (fn) {
  var args = Array.prototype.slice.call(arguments, 1)
  args.unshift(this)
  fn.apply(this, args)
}
/**
 * Contains and collects metadata about a matching document.
 * A single instance of lunr.MatchData is returned as part of every
 * lunr.Index~Result.
 *
 * @constructor
 * @param {string} term - The term this match data is associated with
 * @param {string} field - The field in which the term was found
 * @param {object} metadata - The metadata recorded about this term in this field
 * @property {object} metadata - A cloned collection of metadata associated with this document.
 * @see {@link lunr.Index~Result}
 */
lunr.MatchData = function (term, field, metadata) {
  var clonedMetadata = Object.create(null),
      metadataKeys = Object.keys(metadata || {})

  // Cloning the metadata to prevent the original
  // being mutated during match data combination.
  // Metadata is kept in an array within the inverted
  // index so cloning the data can be done with
  // Array#slice
  for (var i = 0; i < metadataKeys.length; i++) {
    var key = metadataKeys[i]
    clonedMetadata[key] = metadata[key].slice()
  }

  this.metadata = Object.create(null)

  if (term !== undefined) {
    this.metadata[term] = Object.create(null)
    this.metadata[term][field] = clonedMetadata
  }
}

/**
 * An instance of lunr.MatchData will be created for every term that matches a
 * document. However only one instance is required in a lunr.Index~Result. This
 * method combines metadata from another instance of lunr.MatchData with this
 * objects metadata.
 *
 * @param {lunr.MatchData} otherMatchData - Another instance of match data to merge with this one.
 * @see {@link lunr.Index~Result}
 */
lunr.MatchData.prototype.combine = function (otherMatchData) {
  var terms = Object.keys(otherMatchData.metadata)

  for (var i = 0; i < terms.length; i++) {
    var term = terms[i],
        fields = Object.keys(otherMatchData.metadata[term])

    if (this.metadata[term] == undefined) {
      this.metadata[term] = Object.create(null)
    }

    for (var j = 0; j < fields.length; j++) {
      var field = fields[j],
          keys = Object.keys(otherMatchData.metadata[term][field])

      if (this.metadata[term][field] == undefined) {
        this.metadata[term][field] = Object.create(null)
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k]

        if (this.metadata[term][field][key] == undefined) {
          this.metadata[term][field][key] = otherMatchData.metadata[term][field][key]
        } else {
          this.metadata[term][field][key] = this.metadata[term][field][key].concat(otherMatchData.metadata[term][field][key])
        }

      }
    }
  }
}

/**
 * Add metadata for a term/field pair to this instance of match data.
 *
 * @param {string} term - The term this match data is associated with
 * @param {string} field - The field in which the term was found
 * @param {object} metadata - The metadata recorded about this term in this field
 */
lunr.MatchData.prototype.add = function (term, field, metadata) {
  if (!(term in this.metadata)) {
    this.metadata[term] = Object.create(null)
    this.metadata[term][field] = metadata
    return
  }

  if (!(field in this.metadata[term])) {
    this.metadata[term][field] = metadata
    return
  }

  var metadataKeys = Object.keys(metadata)

  for (var i = 0; i < metadataKeys.length; i++) {
    var key = metadataKeys[i]

    if (key in this.metadata[term][field]) {
      this.metadata[term][field][key] = this.metadata[term][field][key].concat(metadata[key])
    } else {
      this.metadata[term][field][key] = metadata[key]
    }
  }
}
/**
 * A lunr.Query provides a programmatic way of defining queries to be performed
 * against a {@link lunr.Index}.
 *
 * Prefer constructing a lunr.Query using the {@link lunr.Index#query} method
 * so the query object is pre-initialized with the right index fields.
 *
 * @constructor
 * @property {lunr.Query~Clause[]} clauses - An array of query clauses.
 * @property {string[]} allFields - An array of all available fields in a lunr.Index.
 */
lunr.Query = function (allFields) {
  this.clauses = []
  this.allFields = allFields
}

/**
 * Constants for indicating what kind of automatic wildcard insertion will be used when constructing a query clause.
 *
 * This allows wildcards to be added to the beginning and end of a term without having to manually do any string
 * concatenation.
 *
 * The wildcard constants can be bitwise combined to select both leading and trailing wildcards.
 *
 * @constant
 * @default
 * @property {number} wildcard.NONE - The term will have no wildcards inserted, this is the default behaviour
 * @property {number} wildcard.LEADING - Prepend the term with a wildcard, unless a leading wildcard already exists
 * @property {number} wildcard.TRAILING - Append a wildcard to the term, unless a trailing wildcard already exists
 * @see lunr.Query~Clause
 * @see lunr.Query#clause
 * @see lunr.Query#term
 * @example <caption>query term with trailing wildcard</caption>
 * query.term('foo', { wildcard: lunr.Query.wildcard.TRAILING })
 * @example <caption>query term with leading and trailing wildcard</caption>
 * query.term('foo', {
 *   wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING
 * })
 */

lunr.Query.wildcard = new String ("*")
lunr.Query.wildcard.NONE = 0
lunr.Query.wildcard.LEADING = 1
lunr.Query.wildcard.TRAILING = 2

/**
 * Constants for indicating what kind of presence a term must have in matching documents.
 *
 * @constant
 * @enum {number}
 * @see lunr.Query~Clause
 * @see lunr.Query#clause
 * @see lunr.Query#term
 * @example <caption>query term with required presence</caption>
 * query.term('foo', { presence: lunr.Query.presence.REQUIRED })
 */
lunr.Query.presence = {
  /**
   * Term's presence in a document is optional, this is the default value.
   */
  OPTIONAL: 1,

  /**
   * Term's presence in a document is required, documents that do not contain
   * this term will not be returned.
   */
  REQUIRED: 2,

  /**
   * Term's presence in a document is prohibited, documents that do contain
   * this term will not be returned.
   */
  PROHIBITED: 3
}

/**
 * A single clause in a {@link lunr.Query} contains a term and details on how to
 * match that term against a {@link lunr.Index}.
 *
 * @typedef {Object} lunr.Query~Clause
 * @property {string[]} fields - The fields in an index this clause should be matched against.
 * @property {number} [boost=1] - Any boost that should be applied when matching this clause.
 * @property {number} [editDistance] - Whether the term should have fuzzy matching applied, and how fuzzy the match should be.
 * @property {boolean} [usePipeline] - Whether the term should be passed through the search pipeline.
 * @property {number} [wildcard=lunr.Query.wildcard.NONE] - Whether the term should have wildcards appended or prepended.
 * @property {number} [presence=lunr.Query.presence.OPTIONAL] - The terms presence in any matching documents.
 */

/**
 * Adds a {@link lunr.Query~Clause} to this query.
 *
 * Unless the clause contains the fields to be matched all fields will be matched. In addition
 * a default boost of 1 is applied to the clause.
 *
 * @param {lunr.Query~Clause} clause - The clause to add to this query.
 * @see lunr.Query~Clause
 * @returns {lunr.Query}
 */
lunr.Query.prototype.clause = function (clause) {
  if (!('fields' in clause)) {
    clause.fields = this.allFields
  }

  if (!('boost' in clause)) {
    clause.boost = 1
  }

  if (!('usePipeline' in clause)) {
    clause.usePipeline = true
  }

  if (!('wildcard' in clause)) {
    clause.wildcard = lunr.Query.wildcard.NONE
  }

  if ((clause.wildcard & lunr.Query.wildcard.LEADING) && (clause.term.charAt(0) != lunr.Query.wildcard)) {
    clause.term = "*" + clause.term
  }

  if ((clause.wildcard & lunr.Query.wildcard.TRAILING) && (clause.term.slice(-1) != lunr.Query.wildcard)) {
    clause.term = "" + clause.term + "*"
  }

  if (!('presence' in clause)) {
    clause.presence = lunr.Query.presence.OPTIONAL
  }

  this.clauses.push(clause)

  return this
}

/**
 * A negated query is one in which every clause has a presence of
 * prohibited. These queries require some special processing to return
 * the expected results.
 *
 * @returns boolean
 */
lunr.Query.prototype.isNegated = function () {
  for (var i = 0; i < this.clauses.length; i++) {
    if (this.clauses[i].presence != lunr.Query.presence.PROHIBITED) {
      return false
    }
  }

  return true
}

/**
 * Adds a term to the current query, under the covers this will create a {@link lunr.Query~Clause}
 * to the list of clauses that make up this query.
 *
 * The term is used as is, i.e. no tokenization will be performed by this method. Instead conversion
 * to a token or token-like string should be done before calling this method.
 *
 * The term will be converted to a string by calling `toString`. Multiple terms can be passed as an
 * array, each term in the array will share the same options.
 *
 * @param {object|object[]} term - The term(s) to add to the query.
 * @param {object} [options] - Any additional properties to add to the query clause.
 * @returns {lunr.Query}
 * @see lunr.Query#clause
 * @see lunr.Query~Clause
 * @example <caption>adding a single term to a query</caption>
 * query.term("foo")
 * @example <caption>adding a single term to a query and specifying search fields, term boost and automatic trailing wildcard</caption>
 * query.term("foo", {
 *   fields: ["title"],
 *   boost: 10,
 *   wildcard: lunr.Query.wildcard.TRAILING
 * })
 * @example <caption>using lunr.tokenizer to convert a string to tokens before using them as terms</caption>
 * query.term(lunr.tokenizer("foo bar"))
 */
lunr.Query.prototype.term = function (term, options) {
  if (Array.isArray(term)) {
    term.forEach(function (t) { this.term(t, lunr.utils.clone(options)) }, this)
    return this
  }

  var clause = options || {}
  clause.term = term.toString()

  this.clause(clause)

  return this
}
lunr.QueryParseError = function (message, start, end) {
  this.name = "QueryParseError"
  this.message = message
  this.start = start
  this.end = end
}

lunr.QueryParseError.prototype = new Error
lunr.QueryLexer = function (str) {
  this.lexemes = []
  this.str = str
  this.length = str.length
  this.pos = 0
  this.start = 0
  this.escapeCharPositions = []
}

lunr.QueryLexer.prototype.run = function () {
  var state = lunr.QueryLexer.lexText

  while (state) {
    state = state(this)
  }
}

lunr.QueryLexer.prototype.sliceString = function () {
  var subSlices = [],
      sliceStart = this.start,
      sliceEnd = this.pos

  for (var i = 0; i < this.escapeCharPositions.length; i++) {
    sliceEnd = this.escapeCharPositions[i]
    subSlices.push(this.str.slice(sliceStart, sliceEnd))
    sliceStart = sliceEnd + 1
  }

  subSlices.push(this.str.slice(sliceStart, this.pos))
  this.escapeCharPositions.length = 0

  return subSlices.join('')
}

lunr.QueryLexer.prototype.emit = function (type) {
  this.lexemes.push({
    type: type,
    str: this.sliceString(),
    start: this.start,
    end: this.pos
  })

  this.start = this.pos
}

lunr.QueryLexer.prototype.escapeCharacter = function () {
  this.escapeCharPositions.push(this.pos - 1)
  this.pos += 1
}

lunr.QueryLexer.prototype.next = function () {
  if (this.pos >= this.length) {
    return lunr.QueryLexer.EOS
  }

  var char = this.str.charAt(this.pos)
  this.pos += 1
  return char
}

lunr.QueryLexer.prototype.width = function () {
  return this.pos - this.start
}

lunr.QueryLexer.prototype.ignore = function () {
  if (this.start == this.pos) {
    this.pos += 1
  }

  this.start = this.pos
}

lunr.QueryLexer.prototype.backup = function () {
  this.pos -= 1
}

lunr.QueryLexer.prototype.acceptDigitRun = function () {
  var char, charCode

  do {
    char = this.next()
    charCode = char.charCodeAt(0)
  } while (charCode > 47 && charCode < 58)

  if (char != lunr.QueryLexer.EOS) {
    this.backup()
  }
}

lunr.QueryLexer.prototype.more = function () {
  return this.pos < this.length
}

lunr.QueryLexer.EOS = 'EOS'
lunr.QueryLexer.FIELD = 'FIELD'
lunr.QueryLexer.TERM = 'TERM'
lunr.QueryLexer.EDIT_DISTANCE = 'EDIT_DISTANCE'
lunr.QueryLexer.BOOST = 'BOOST'
lunr.QueryLexer.PRESENCE = 'PRESENCE'

lunr.QueryLexer.lexField = function (lexer) {
  lexer.backup()
  lexer.emit(lunr.QueryLexer.FIELD)
  lexer.ignore()
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexTerm = function (lexer) {
  if (lexer.width() > 1) {
    lexer.backup()
    lexer.emit(lunr.QueryLexer.TERM)
  }

  lexer.ignore()

  if (lexer.more()) {
    return lunr.QueryLexer.lexText
  }
}

lunr.QueryLexer.lexEditDistance = function (lexer) {
  lexer.ignore()
  lexer.acceptDigitRun()
  lexer.emit(lunr.QueryLexer.EDIT_DISTANCE)
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexBoost = function (lexer) {
  lexer.ignore()
  lexer.acceptDigitRun()
  lexer.emit(lunr.QueryLexer.BOOST)
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexEOS = function (lexer) {
  if (lexer.width() > 0) {
    lexer.emit(lunr.QueryLexer.TERM)
  }
}

// This matches the separator used when tokenising fields
// within a document. These should match otherwise it is
// not possible to search for some tokens within a document.
//
// It is possible for the user to change the separator on the
// tokenizer so it _might_ clash with any other of the special
// characters already used within the search string, e.g. :.
//
// This means that it is possible to change the separator in
// such a way that makes some words unsearchable using a search
// string.
lunr.QueryLexer.termSeparator = lunr.tokenizer.separator

lunr.QueryLexer.lexText = function (lexer) {
  while (true) {
    var char = lexer.next()

    if (char == lunr.QueryLexer.EOS) {
      return lunr.QueryLexer.lexEOS
    }

    // Escape character is '\'
    if (char.charCodeAt(0) == 92) {
      lexer.escapeCharacter()
      continue
    }

    if (char == ":") {
      return lunr.QueryLexer.lexField
    }

    if (char == "~") {
      lexer.backup()
      if (lexer.width() > 0) {
        lexer.emit(lunr.QueryLexer.TERM)
      }
      return lunr.QueryLexer.lexEditDistance
    }

    if (char == "^") {
      lexer.backup()
      if (lexer.width() > 0) {
        lexer.emit(lunr.QueryLexer.TERM)
      }
      return lunr.QueryLexer.lexBoost
    }

    // "+" indicates term presence is required
    // checking for length to ensure that only
    // leading "+" are considered
    if (char == "+" && lexer.width() === 1) {
      lexer.emit(lunr.QueryLexer.PRESENCE)
      return lunr.QueryLexer.lexText
    }

    // "-" indicates term presence is prohibited
    // checking for length to ensure that only
    // leading "-" are considered
    if (char == "-" && lexer.width() === 1) {
      lexer.emit(lunr.QueryLexer.PRESENCE)
      return lunr.QueryLexer.lexText
    }

    if (char.match(lunr.QueryLexer.termSeparator)) {
      return lunr.QueryLexer.lexTerm
    }
  }
}

lunr.QueryParser = function (str, query) {
  this.lexer = new lunr.QueryLexer (str)
  this.query = query
  this.currentClause = {}
  this.lexemeIdx = 0
}

lunr.QueryParser.prototype.parse = function () {
  this.lexer.run()
  this.lexemes = this.lexer.lexemes

  var state = lunr.QueryParser.parseClause

  while (state) {
    state = state(this)
  }

  return this.query
}

lunr.QueryParser.prototype.peekLexeme = function () {
  return this.lexemes[this.lexemeIdx]
}

lunr.QueryParser.prototype.consumeLexeme = function () {
  var lexeme = this.peekLexeme()
  this.lexemeIdx += 1
  return lexeme
}

lunr.QueryParser.prototype.nextClause = function () {
  var completedClause = this.currentClause
  this.query.clause(completedClause)
  this.currentClause = {}
}

lunr.QueryParser.parseClause = function (parser) {
  var lexeme = parser.peekLexeme()

  if (lexeme == undefined) {
    return
  }

  switch (lexeme.type) {
    case lunr.QueryLexer.PRESENCE:
      return lunr.QueryParser.parsePresence
    case lunr.QueryLexer.FIELD:
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.TERM:
      return lunr.QueryParser.parseTerm
    default:
      var errorMessage = "expected either a field or a term, found " + lexeme.type

      if (lexeme.str.length >= 1) {
        errorMessage += " with value '" + lexeme.str + "'"
      }

      throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }
}

lunr.QueryParser.parsePresence = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  switch (lexeme.str) {
    case "-":
      parser.currentClause.presence = lunr.Query.presence.PROHIBITED
      break
    case "+":
      parser.currentClause.presence = lunr.Query.presence.REQUIRED
      break
    default:
      var errorMessage = "unrecognised presence operator'" + lexeme.str + "'"
      throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    var errorMessage = "expecting term or field, found nothing"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.FIELD:
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.TERM:
      return lunr.QueryParser.parseTerm
    default:
      var errorMessage = "expecting term or field, found '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseField = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  if (parser.query.allFields.indexOf(lexeme.str) == -1) {
    var possibleFields = parser.query.allFields.map(function (f) { return "'" + f + "'" }).join(', '),
        errorMessage = "unrecognised field '" + lexeme.str + "', possible fields: " + possibleFields

    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.fields = [lexeme.str]

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    var errorMessage = "expecting term, found nothing"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      return lunr.QueryParser.parseTerm
    default:
      var errorMessage = "expecting term, found '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseTerm = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  parser.currentClause.term = lexeme.str.toLowerCase()

  if (lexeme.str.indexOf("*") != -1) {
    parser.currentClause.usePipeline = false
  }

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    case lunr.QueryLexer.PRESENCE:
      parser.nextClause()
      return lunr.QueryParser.parsePresence
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseEditDistance = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  var editDistance = parseInt(lexeme.str, 10)

  if (isNaN(editDistance)) {
    var errorMessage = "edit distance must be numeric"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.editDistance = editDistance

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    case lunr.QueryLexer.PRESENCE:
      parser.nextClause()
      return lunr.QueryParser.parsePresence
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseBoost = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  var boost = parseInt(lexeme.str, 10)

  if (isNaN(boost)) {
    var errorMessage = "boost must be numeric"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.boost = boost

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    case lunr.QueryLexer.PRESENCE:
      parser.nextClause()
      return lunr.QueryParser.parsePresence
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

  /**
   * export the module via AMD, CommonJS or as a browser global
   * Export code from https://github.com/umdjs/umd/blob/master/returnExports.js
   */
  ;(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define(factory)
    } else if (typeof exports === 'object') {
      /**
       * Node. Does not work with strict CommonJS, but
       * only CommonJS-like enviroments that support module.exports,
       * like Node.
       */
      module.exports = factory()
    } else {
      // Browser globals (root is window)
      root.lunr = factory()
    }
  }(this, function () {
    /**
     * Just return a value to define the module export.
     * This example returns an object, but the module
     * can return a function as the exported value.
     */
    return lunr
  }))
})();
/*!
 * Snowball JavaScript Library v0.3
 * http://code.google.com/p/urim/
 * http://snowball.tartarus.org/
 *
 * Copyright 2010, Oleg Mazko
 * http://www.mozilla.org/MPL/
 */

/**
 * export the module via AMD, CommonJS or as a browser global
 * Export code from https://github.com/umdjs/umd/blob/master/returnExports.js
 */
;(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory)
    } else if (typeof exports === 'object') {
        /**
         * Node. Does not work with strict CommonJS, but
         * only CommonJS-like environments that support module.exports,
         * like Node.
         */
        module.exports = factory()
    } else {
        // Browser globals (root is window)
        factory()(root.lunr);
    }
}(this, function () {
    /**
     * Just return a value to define the module export.
     * This example returns an object, but the module
     * can return a function as the exported value.
     */
    return function(lunr) {
        /* provides utilities for the included stemmers */
        lunr.stemmerSupport = {
            Among: function(s, substring_i, result, method) {
                this.toCharArray = function(s) {
                    var sLength = s.length, charArr = new Array(sLength);
                    for (var i = 0; i < sLength; i++)
                        charArr[i] = s.charCodeAt(i);
                    return charArr;
                };

                if ((!s && s != "") || (!substring_i && (substring_i != 0)) || !result)
                    throw ("Bad Among initialisation: s:" + s + ", substring_i: "
                        + substring_i + ", result: " + result);
                this.s_size = s.length;
                this.s = this.toCharArray(s);
                this.substring_i = substring_i;
                this.result = result;
                this.method = method;
            },
            SnowballProgram: function() {
                var current;
                return {
                    bra : 0,
                    ket : 0,
                    limit : 0,
                    cursor : 0,
                    limit_backward : 0,
                    setCurrent : function(word) {
                        current = word;
                        this.cursor = 0;
                        this.limit = word.length;
                        this.limit_backward = 0;
                        this.bra = this.cursor;
                        this.ket = this.limit;
                    },
                    getCurrent : function() {
                        var result = current;
                        current = null;
                        return result;
                    },
                    in_grouping : function(s, min, max) {
                        if (this.cursor < this.limit) {
                            var ch = current.charCodeAt(this.cursor);
                            if (ch <= max && ch >= min) {
                                ch -= min;
                                if (s[ch >> 3] & (0X1 << (ch & 0X7))) {
                                    this.cursor++;
                                    return true;
                                }
                            }
                        }
                        return false;
                    },
                    in_grouping_b : function(s, min, max) {
                        if (this.cursor > this.limit_backward) {
                            var ch = current.charCodeAt(this.cursor - 1);
                            if (ch <= max && ch >= min) {
                                ch -= min;
                                if (s[ch >> 3] & (0X1 << (ch & 0X7))) {
                                    this.cursor--;
                                    return true;
                                }
                            }
                        }
                        return false;
                    },
                    out_grouping : function(s, min, max) {
                        if (this.cursor < this.limit) {
                            var ch = current.charCodeAt(this.cursor);
                            if (ch > max || ch < min) {
                                this.cursor++;
                                return true;
                            }
                            ch -= min;
                            if (!(s[ch >> 3] & (0X1 << (ch & 0X7)))) {
                                this.cursor++;
                                return true;
                            }
                        }
                        return false;
                    },
                    out_grouping_b : function(s, min, max) {
                        if (this.cursor > this.limit_backward) {
                            var ch = current.charCodeAt(this.cursor - 1);
                            if (ch > max || ch < min) {
                                this.cursor--;
                                return true;
                            }
                            ch -= min;
                            if (!(s[ch >> 3] & (0X1 << (ch & 0X7)))) {
                                this.cursor--;
                                return true;
                            }
                        }
                        return false;
                    },
                    eq_s : function(s_size, s) {
                        if (this.limit - this.cursor < s_size)
                            return false;
                        for (var i = 0; i < s_size; i++)
                            if (current.charCodeAt(this.cursor + i) != s.charCodeAt(i))
                                return false;
                        this.cursor += s_size;
                        return true;
                    },
                    eq_s_b : function(s_size, s) {
                        if (this.cursor - this.limit_backward < s_size)
                            return false;
                        for (var i = 0; i < s_size; i++)
                            if (current.charCodeAt(this.cursor - s_size + i) != s
                                .charCodeAt(i))
                                return false;
                        this.cursor -= s_size;
                        return true;
                    },
                    find_among : function(v, v_size) {
                        var i = 0, j = v_size, c = this.cursor, l = this.limit, common_i = 0, common_j = 0, first_key_inspected = false;
                        while (true) {
                            var k = i + ((j - i) >> 1), diff = 0, common = common_i < common_j
                                ? common_i
                                : common_j, w = v[k];
                            for (var i2 = common; i2 < w.s_size; i2++) {
                                if (c + common == l) {
                                    diff = -1;
                                    break;
                                }
                                diff = current.charCodeAt(c + common) - w.s[i2];
                                if (diff)
                                    break;
                                common++;
                            }
                            if (diff < 0) {
                                j = k;
                                common_j = common;
                            } else {
                                i = k;
                                common_i = common;
                            }
                            if (j - i <= 1) {
                                if (i > 0 || j == i || first_key_inspected)
                                    break;
                                first_key_inspected = true;
                            }
                        }
                        while (true) {
                            var w = v[i];
                            if (common_i >= w.s_size) {
                                this.cursor = c + w.s_size;
                                if (!w.method)
                                    return w.result;
                                var res = w.method();
                                this.cursor = c + w.s_size;
                                if (res)
                                    return w.result;
                            }
                            i = w.substring_i;
                            if (i < 0)
                                return 0;
                        }
                    },
                    find_among_b : function(v, v_size) {
                        var i = 0, j = v_size, c = this.cursor, lb = this.limit_backward, common_i = 0, common_j = 0, first_key_inspected = false;
                        while (true) {
                            var k = i + ((j - i) >> 1), diff = 0, common = common_i < common_j
                                ? common_i
                                : common_j, w = v[k];
                            for (var i2 = w.s_size - 1 - common; i2 >= 0; i2--) {
                                if (c - common == lb) {
                                    diff = -1;
                                    break;
                                }
                                diff = current.charCodeAt(c - 1 - common) - w.s[i2];
                                if (diff)
                                    break;
                                common++;
                            }
                            if (diff < 0) {
                                j = k;
                                common_j = common;
                            } else {
                                i = k;
                                common_i = common;
                            }
                            if (j - i <= 1) {
                                if (i > 0 || j == i || first_key_inspected)
                                    break;
                                first_key_inspected = true;
                            }
                        }
                        while (true) {
                            var w = v[i];
                            if (common_i >= w.s_size) {
                                this.cursor = c - w.s_size;
                                if (!w.method)
                                    return w.result;
                                var res = w.method();
                                this.cursor = c - w.s_size;
                                if (res)
                                    return w.result;
                            }
                            i = w.substring_i;
                            if (i < 0)
                                return 0;
                        }
                    },
                    replace_s : function(c_bra, c_ket, s) {
                        var adjustment = s.length - (c_ket - c_bra), left = current
                            .substring(0, c_bra), right = current.substring(c_ket);
                        current = left + s + right;
                        this.limit += adjustment;
                        if (this.cursor >= c_ket)
                            this.cursor += adjustment;
                        else if (this.cursor > c_bra)
                            this.cursor = c_bra;
                        return adjustment;
                    },
                    slice_check : function() {
                        if (this.bra < 0 || this.bra > this.ket || this.ket > this.limit
                            || this.limit > current.length)
                            throw ("faulty slice operation");
                    },
                    slice_from : function(s) {
                        this.slice_check();
                        this.replace_s(this.bra, this.ket, s);
                    },
                    slice_del : function() {
                        this.slice_from("");
                    },
                    insert : function(c_bra, c_ket, s) {
                        var adjustment = this.replace_s(c_bra, c_ket, s);
                        if (c_bra <= this.bra)
                            this.bra += adjustment;
                        if (c_bra <= this.ket)
                            this.ket += adjustment;
                    },
                    slice_to : function() {
                        this.slice_check();
                        return current.substring(this.bra, this.ket);
                    },
                    eq_v_b : function(s) {
                        return this.eq_s_b(s.length, s);
                    }
                };
            }
        };

        lunr.trimmerSupport = {
            generateTrimmer: function(wordCharacters) {
                var startRegex = new RegExp("^[^" + wordCharacters + "]+")
                var endRegex = new RegExp("[^" + wordCharacters + "]+$")

                return function(token) {
                    // for lunr version 2
                    if (typeof token.update === "function") {
                        return token.update(function (s) {
                            return s
                                .replace(startRegex, '')
                                .replace(endRegex, '');
                        })
                    } else { // for lunr version 1
                        return token
                            .replace(startRegex, '')
                            .replace(endRegex, '');
                    }
                };
            }
        }
    }
}));

/*!
 * Lunr languages, `French` language
 * https://github.com/MihaiValentin/lunr-languages
 *
 * Copyright 2014, Mihai Valentin
 * http://www.mozilla.org/MPL/
 */
/*!
 * based on
 * Snowball JavaScript Library v0.3
 * http://code.google.com/p/urim/
 * http://snowball.tartarus.org/
 *
 * Copyright 2010, Oleg Mazko
 * http://www.mozilla.org/MPL/
 */

/**
 * export the module via AMD, CommonJS or as a browser global
 * Export code from https://github.com/umdjs/umd/blob/master/returnExports.js
 */
;
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(factory)
  } else if (typeof exports === 'object') {
    /**
     * Node. Does not work with strict CommonJS, but
     * only CommonJS-like environments that support module.exports,
     * like Node.
     */
    module.exports = factory()
  } else {
    // Browser globals (root is window)
    factory()(root.lunr);
  }
}(this, function() {
  /**
   * Just return a value to define the module export.
   * This example returns an object, but the module
   * can return a function as the exported value.
   */
  return function(lunr) {
    /* throw error if lunr is not yet included */
    if ('undefined' === typeof lunr) {
      throw new Error('Lunr is not present. Please include / require Lunr before this script.');
    }

    /* throw error if lunr stemmer support is not yet included */
    if ('undefined' === typeof lunr.stemmerSupport) {
      throw new Error('Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.');
    }

    /* register specific locale function */
    lunr.fr = function() {
      this.pipeline.reset();
      this.pipeline.add(
        lunr.fr.trimmer,
        lunr.fr.stopWordFilter,
        lunr.fr.stemmer
      );

      // for lunr version 2
      // this is necessary so that every searched word is also stemmed before
      // in lunr <= 1 this is not needed, as it is done using the normal pipeline
      if (this.searchPipeline) {
        this.searchPipeline.reset();
        this.searchPipeline.add(lunr.fr.stemmer)
      }
    };

    /* lunr trimmer function */
    lunr.fr.wordCharacters = "A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A";
    lunr.fr.trimmer = lunr.trimmerSupport.generateTrimmer(lunr.fr.wordCharacters);

    lunr.Pipeline.registerFunction(lunr.fr.trimmer, 'trimmer-fr');

    /* lunr stemmer function */
    lunr.fr.stemmer = (function() {
      /* create the wrapped stemmer object */
      var Among = lunr.stemmerSupport.Among,
        SnowballProgram = lunr.stemmerSupport.SnowballProgram,
        st = new function FrenchStemmer() {
          var a_0 = [new Among("col", -1, -1), new Among("par", -1, -1),
              new Among("tap", -1, -1)
            ],
            a_1 = [new Among("", -1, 4),
              new Among("I", 0, 1), new Among("U", 0, 2), new Among("Y", 0, 3)
            ],
            a_2 = [
              new Among("iqU", -1, 3), new Among("abl", -1, 3),
              new Among("I\u00E8r", -1, 4), new Among("i\u00E8r", -1, 4),
              new Among("eus", -1, 2), new Among("iv", -1, 1)
            ],
            a_3 = [
              new Among("ic", -1, 2), new Among("abil", -1, 1),
              new Among("iv", -1, 3)
            ],
            a_4 = [new Among("iqUe", -1, 1),
              new Among("atrice", -1, 2), new Among("ance", -1, 1),
              new Among("ence", -1, 5), new Among("logie", -1, 3),
              new Among("able", -1, 1), new Among("isme", -1, 1),
              new Among("euse", -1, 11), new Among("iste", -1, 1),
              new Among("ive", -1, 8), new Among("if", -1, 8),
              new Among("usion", -1, 4), new Among("ation", -1, 2),
              new Among("ution", -1, 4), new Among("ateur", -1, 2),
              new Among("iqUes", -1, 1), new Among("atrices", -1, 2),
              new Among("ances", -1, 1), new Among("ences", -1, 5),
              new Among("logies", -1, 3), new Among("ables", -1, 1),
              new Among("ismes", -1, 1), new Among("euses", -1, 11),
              new Among("istes", -1, 1), new Among("ives", -1, 8),
              new Among("ifs", -1, 8), new Among("usions", -1, 4),
              new Among("ations", -1, 2), new Among("utions", -1, 4),
              new Among("ateurs", -1, 2), new Among("ments", -1, 15),
              new Among("ements", 30, 6), new Among("issements", 31, 12),
              new Among("it\u00E9s", -1, 7), new Among("ment", -1, 15),
              new Among("ement", 34, 6), new Among("issement", 35, 12),
              new Among("amment", 34, 13), new Among("emment", 34, 14),
              new Among("aux", -1, 10), new Among("eaux", 39, 9),
              new Among("eux", -1, 1), new Among("it\u00E9", -1, 7)
            ],
            a_5 = [
              new Among("ira", -1, 1), new Among("ie", -1, 1),
              new Among("isse", -1, 1), new Among("issante", -1, 1),
              new Among("i", -1, 1), new Among("irai", 4, 1),
              new Among("ir", -1, 1), new Among("iras", -1, 1),
              new Among("ies", -1, 1), new Among("\u00EEmes", -1, 1),
              new Among("isses", -1, 1), new Among("issantes", -1, 1),
              new Among("\u00EEtes", -1, 1), new Among("is", -1, 1),
              new Among("irais", 13, 1), new Among("issais", 13, 1),
              new Among("irions", -1, 1), new Among("issions", -1, 1),
              new Among("irons", -1, 1), new Among("issons", -1, 1),
              new Among("issants", -1, 1), new Among("it", -1, 1),
              new Among("irait", 21, 1), new Among("issait", 21, 1),
              new Among("issant", -1, 1), new Among("iraIent", -1, 1),
              new Among("issaIent", -1, 1), new Among("irent", -1, 1),
              new Among("issent", -1, 1), new Among("iront", -1, 1),
              new Among("\u00EEt", -1, 1), new Among("iriez", -1, 1),
              new Among("issiez", -1, 1), new Among("irez", -1, 1),
              new Among("issez", -1, 1)
            ],
            a_6 = [new Among("a", -1, 3),
              new Among("era", 0, 2), new Among("asse", -1, 3),
              new Among("ante", -1, 3), new Among("\u00E9e", -1, 2),
              new Among("ai", -1, 3), new Among("erai", 5, 2),
              new Among("er", -1, 2), new Among("as", -1, 3),
              new Among("eras", 8, 2), new Among("\u00E2mes", -1, 3),
              new Among("asses", -1, 3), new Among("antes", -1, 3),
              new Among("\u00E2tes", -1, 3), new Among("\u00E9es", -1, 2),
              new Among("ais", -1, 3), new Among("erais", 15, 2),
              new Among("ions", -1, 1), new Among("erions", 17, 2),
              new Among("assions", 17, 3), new Among("erons", -1, 2),
              new Among("ants", -1, 3), new Among("\u00E9s", -1, 2),
              new Among("ait", -1, 3), new Among("erait", 23, 2),
              new Among("ant", -1, 3), new Among("aIent", -1, 3),
              new Among("eraIent", 26, 2), new Among("\u00E8rent", -1, 2),
              new Among("assent", -1, 3), new Among("eront", -1, 2),
              new Among("\u00E2t", -1, 3), new Among("ez", -1, 2),
              new Among("iez", 32, 2), new Among("eriez", 33, 2),
              new Among("assiez", 33, 3), new Among("erez", 32, 2),
              new Among("\u00E9", -1, 2)
            ],
            a_7 = [new Among("e", -1, 3),
              new Among("I\u00E8re", 0, 2), new Among("i\u00E8re", 0, 2),
              new Among("ion", -1, 1), new Among("Ier", -1, 2),
              new Among("ier", -1, 2), new Among("\u00EB", -1, 4)
            ],
            a_8 = [
              new Among("ell", -1, -1), new Among("eill", -1, -1),
              new Among("enn", -1, -1), new Among("onn", -1, -1),
              new Among("ett", -1, -1)
            ],
            g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 128, 130, 103, 8, 5
            ],
            g_keep_with_s = [1, 65, 20, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128
            ],
            I_p2, I_p1, I_pV, sbp = new SnowballProgram();
          this.setCurrent = function(word) {
            sbp.setCurrent(word);
          };
          this.getCurrent = function() {
            return sbp.getCurrent();
          };

          function habr1(c1, c2, v_1) {
            if (sbp.eq_s(1, c1)) {
              sbp.ket = sbp.cursor;
              if (sbp.in_grouping(g_v, 97, 251)) {
                sbp.slice_from(c2);
                sbp.cursor = v_1;
                return true;
              }
            }
            return false;
          }

          function habr2(c1, c2, v_1) {
            if (sbp.eq_s(1, c1)) {
              sbp.ket = sbp.cursor;
              sbp.slice_from(c2);
              sbp.cursor = v_1;
              return true;
            }
            return false;
          }

          function r_prelude() {
            var v_1, v_2;
            while (true) {
              v_1 = sbp.cursor;
              if (sbp.in_grouping(g_v, 97, 251)) {
                sbp.bra = sbp.cursor;
                v_2 = sbp.cursor;
                if (habr1("u", "U", v_1))
                  continue;
                sbp.cursor = v_2;
                if (habr1("i", "I", v_1))
                  continue;
                sbp.cursor = v_2;
                if (habr2("y", "Y", v_1))
                  continue;
              }
              sbp.cursor = v_1;
              sbp.bra = v_1;
              if (!habr1("y", "Y", v_1)) {
                sbp.cursor = v_1;
                if (sbp.eq_s(1, "q")) {
                  sbp.bra = sbp.cursor;
                  if (habr2("u", "U", v_1))
                    continue;
                }
                sbp.cursor = v_1;
                if (v_1 >= sbp.limit)
                  return;
                sbp.cursor++;
              }
            }
          }

          function habr3() {
            while (!sbp.in_grouping(g_v, 97, 251)) {
              if (sbp.cursor >= sbp.limit)
                return true;
              sbp.cursor++;
            }
            while (!sbp.out_grouping(g_v, 97, 251)) {
              if (sbp.cursor >= sbp.limit)
                return true;
              sbp.cursor++;
            }
            return false;
          }

          function r_mark_regions() {
            var v_1 = sbp.cursor;
            I_pV = sbp.limit;
            I_p1 = I_pV;
            I_p2 = I_pV;
            if (sbp.in_grouping(g_v, 97, 251) && sbp.in_grouping(g_v, 97, 251) &&
              sbp.cursor < sbp.limit)
              sbp.cursor++;
            else {
              sbp.cursor = v_1;
              if (!sbp.find_among(a_0, 3)) {
                sbp.cursor = v_1;
                do {
                  if (sbp.cursor >= sbp.limit) {
                    sbp.cursor = I_pV;
                    break;
                  }
                  sbp.cursor++;
                } while (!sbp.in_grouping(g_v, 97, 251));
              }
            }
            I_pV = sbp.cursor;
            sbp.cursor = v_1;
            if (!habr3()) {
              I_p1 = sbp.cursor;
              if (!habr3())
                I_p2 = sbp.cursor;
            }
          }

          function r_postlude() {
            var among_var, v_1;
            while (true) {
              v_1 = sbp.cursor;
              sbp.bra = v_1;
              among_var = sbp.find_among(a_1, 4);
              if (!among_var)
                break;
              sbp.ket = sbp.cursor;
              switch (among_var) {
                case 1:
                  sbp.slice_from("i");
                  break;
                case 2:
                  sbp.slice_from("u");
                  break;
                case 3:
                  sbp.slice_from("y");
                  break;
                case 4:
                  if (sbp.cursor >= sbp.limit)
                    return;
                  sbp.cursor++;
                  break;
              }
            }
          }

          function r_RV() {
            return I_pV <= sbp.cursor;
          }

          function r_R1() {
            return I_p1 <= sbp.cursor;
          }

          function r_R2() {
            return I_p2 <= sbp.cursor;
          }

          function r_standard_suffix() {
            var among_var, v_1;
            sbp.ket = sbp.cursor;
            among_var = sbp.find_among_b(a_4, 43);
            if (among_var) {
              sbp.bra = sbp.cursor;
              switch (among_var) {
                case 1:
                  if (!r_R2())
                    return false;
                  sbp.slice_del();
                  break;
                case 2:
                  if (!r_R2())
                    return false;
                  sbp.slice_del();
                  sbp.ket = sbp.cursor;
                  if (sbp.eq_s_b(2, "ic")) {
                    sbp.bra = sbp.cursor;
                    if (!r_R2())
                      sbp.slice_from("iqU");
                    else
                      sbp.slice_del();
                  }
                  break;
                case 3:
                  if (!r_R2())
                    return false;
                  sbp.slice_from("log");
                  break;
                case 4:
                  if (!r_R2())
                    return false;
                  sbp.slice_from("u");
                  break;
                case 5:
                  if (!r_R2())
                    return false;
                  sbp.slice_from("ent");
                  break;
                case 6:
                  if (!r_RV())
                    return false;
                  sbp.slice_del();
                  sbp.ket = sbp.cursor;
                  among_var = sbp.find_among_b(a_2, 6);
                  if (among_var) {
                    sbp.bra = sbp.cursor;
                    switch (among_var) {
                      case 1:
                        if (r_R2()) {
                          sbp.slice_del();
                          sbp.ket = sbp.cursor;
                          if (sbp.eq_s_b(2, "at")) {
                            sbp.bra = sbp.cursor;
                            if (r_R2())
                              sbp.slice_del();
                          }
                        }
                        break;
                      case 2:
                        if (r_R2())
                          sbp.slice_del();
                        else if (r_R1())
                          sbp.slice_from("eux");
                        break;
                      case 3:
                        if (r_R2())
                          sbp.slice_del();
                        break;
                      case 4:
                        if (r_RV())
                          sbp.slice_from("i");
                        break;
                    }
                  }
                  break;
                case 7:
                  if (!r_R2())
                    return false;
                  sbp.slice_del();
                  sbp.ket = sbp.cursor;
                  among_var = sbp.find_among_b(a_3, 3);
                  if (among_var) {
                    sbp.bra = sbp.cursor;
                    switch (among_var) {
                      case 1:
                        if (r_R2())
                          sbp.slice_del();
                        else
                          sbp.slice_from("abl");
                        break;
                      case 2:
                        if (r_R2())
                          sbp.slice_del();
                        else
                          sbp.slice_from("iqU");
                        break;
                      case 3:
                        if (r_R2())
                          sbp.slice_del();
                        break;
                    }
                  }
                  break;
                case 8:
                  if (!r_R2())
                    return false;
                  sbp.slice_del();
                  sbp.ket = sbp.cursor;
                  if (sbp.eq_s_b(2, "at")) {
                    sbp.bra = sbp.cursor;
                    if (r_R2()) {
                      sbp.slice_del();
                      sbp.ket = sbp.cursor;
                      if (sbp.eq_s_b(2, "ic")) {
                        sbp.bra = sbp.cursor;
                        if (r_R2())
                          sbp.slice_del();
                        else
                          sbp.slice_from("iqU");
                        break;
                      }
                    }
                  }
                  break;
                case 9:
                  sbp.slice_from("eau");
                  break;
                case 10:
                  if (!r_R1())
                    return false;
                  sbp.slice_from("al");
                  break;
                case 11:
                  if (r_R2())
                    sbp.slice_del();
                  else if (!r_R1())
                    return false;
                  else
                    sbp.slice_from("eux");
                  break;
                case 12:
                  if (!r_R1() || !sbp.out_grouping_b(g_v, 97, 251))
                    return false;
                  sbp.slice_del();
                  break;
                case 13:
                  if (r_RV())
                    sbp.slice_from("ant");
                  return false;
                case 14:
                  if (r_RV())
                    sbp.slice_from("ent");
                  return false;
                case 15:
                  v_1 = sbp.limit - sbp.cursor;
                  if (sbp.in_grouping_b(g_v, 97, 251) && r_RV()) {
                    sbp.cursor = sbp.limit - v_1;
                    sbp.slice_del();
                  }
                  return false;
              }
              return true;
            }
            return false;
          }

          function r_i_verb_suffix() {
            var among_var, v_1;
            if (sbp.cursor < I_pV)
              return false;
            v_1 = sbp.limit_backward;
            sbp.limit_backward = I_pV;
            sbp.ket = sbp.cursor;
            among_var = sbp.find_among_b(a_5, 35);
            if (!among_var) {
              sbp.limit_backward = v_1;
              return false;
            }
            sbp.bra = sbp.cursor;
            if (among_var == 1) {
              if (!sbp.out_grouping_b(g_v, 97, 251)) {
                sbp.limit_backward = v_1;
                return false;
              }
              sbp.slice_del();
            }
            sbp.limit_backward = v_1;
            return true;
          }

          function r_verb_suffix() {
            var among_var, v_2, v_3;
            if (sbp.cursor < I_pV)
              return false;
            v_2 = sbp.limit_backward;
            sbp.limit_backward = I_pV;
            sbp.ket = sbp.cursor;
            among_var = sbp.find_among_b(a_6, 38);
            if (!among_var) {
              sbp.limit_backward = v_2;
              return false;
            }
            sbp.bra = sbp.cursor;
            switch (among_var) {
              case 1:
                if (!r_R2()) {
                  sbp.limit_backward = v_2;
                  return false;
                }
                sbp.slice_del();
                break;
              case 2:
                sbp.slice_del();
                break;
              case 3:
                sbp.slice_del();
                v_3 = sbp.limit - sbp.cursor;
                sbp.ket = sbp.cursor;
                if (sbp.eq_s_b(1, "e")) {
                  sbp.bra = sbp.cursor;
                  sbp.slice_del();
                } else
                  sbp.cursor = sbp.limit - v_3;
                break;
            }
            sbp.limit_backward = v_2;
            return true;
          }

          function r_residual_suffix() {
            var among_var, v_1 = sbp.limit - sbp.cursor,
              v_2, v_4, v_5;
            sbp.ket = sbp.cursor;
            if (sbp.eq_s_b(1, "s")) {
              sbp.bra = sbp.cursor;
              v_2 = sbp.limit - sbp.cursor;
              if (sbp.out_grouping_b(g_keep_with_s, 97, 232)) {
                sbp.cursor = sbp.limit - v_2;
                sbp.slice_del();
              } else
                sbp.cursor = sbp.limit - v_1;
            } else
              sbp.cursor = sbp.limit - v_1;
            if (sbp.cursor >= I_pV) {
              v_4 = sbp.limit_backward;
              sbp.limit_backward = I_pV;
              sbp.ket = sbp.cursor;
              among_var = sbp.find_among_b(a_7, 7);
              if (among_var) {
                sbp.bra = sbp.cursor;
                switch (among_var) {
                  case 1:
                    if (r_R2()) {
                      v_5 = sbp.limit - sbp.cursor;
                      if (!sbp.eq_s_b(1, "s")) {
                        sbp.cursor = sbp.limit - v_5;
                        if (!sbp.eq_s_b(1, "t"))
                          break;
                      }
                      sbp.slice_del();
                    }
                    break;
                  case 2:
                    sbp.slice_from("i");
                    break;
                  case 3:
                    sbp.slice_del();
                    break;
                  case 4:
                    if (sbp.eq_s_b(2, "gu"))
                      sbp.slice_del();
                    break;
                }
              }
              sbp.limit_backward = v_4;
            }
          }

          function r_un_double() {
            var v_1 = sbp.limit - sbp.cursor;
            if (sbp.find_among_b(a_8, 5)) {
              sbp.cursor = sbp.limit - v_1;
              sbp.ket = sbp.cursor;
              if (sbp.cursor > sbp.limit_backward) {
                sbp.cursor--;
                sbp.bra = sbp.cursor;
                sbp.slice_del();
              }
            }
          }

          function r_un_accent() {
            var v_1, v_2 = 1;
            while (sbp.out_grouping_b(g_v, 97, 251))
              v_2--;
            if (v_2 <= 0) {
              sbp.ket = sbp.cursor;
              v_1 = sbp.limit - sbp.cursor;
              if (!sbp.eq_s_b(1, "\u00E9")) {
                sbp.cursor = sbp.limit - v_1;
                if (!sbp.eq_s_b(1, "\u00E8"))
                  return;
              }
              sbp.bra = sbp.cursor;
              sbp.slice_from("e");
            }
          }

          function habr5() {
            if (!r_standard_suffix()) {
              sbp.cursor = sbp.limit;
              if (!r_i_verb_suffix()) {
                sbp.cursor = sbp.limit;
                if (!r_verb_suffix()) {
                  sbp.cursor = sbp.limit;
                  r_residual_suffix();
                  return;
                }
              }
            }
            sbp.cursor = sbp.limit;
            sbp.ket = sbp.cursor;
            if (sbp.eq_s_b(1, "Y")) {
              sbp.bra = sbp.cursor;
              sbp.slice_from("i");
            } else {
              sbp.cursor = sbp.limit;
              if (sbp.eq_s_b(1, "\u00E7")) {
                sbp.bra = sbp.cursor;
                sbp.slice_from("c");
              }
            }
          }
          this.stem = function() {
            var v_1 = sbp.cursor;
            r_prelude();
            sbp.cursor = v_1;
            r_mark_regions();
            sbp.limit_backward = v_1;
            sbp.cursor = sbp.limit;
            habr5();
            sbp.cursor = sbp.limit;
            r_un_double();
            sbp.cursor = sbp.limit;
            r_un_accent();
            sbp.cursor = sbp.limit_backward;
            r_postlude();
            return true;
          }
        };

      /* and return a function that stems a word for the current locale */
      return function(token) {
        // for lunr version 2
        if (typeof token.update === "function") {
          return token.update(function(word) {
            st.setCurrent(word);
            st.stem();
            return st.getCurrent();
          })
        } else { // for lunr version <= 1
          st.setCurrent(token);
          st.stem();
          return st.getCurrent();
        }
      }
    })();

    lunr.Pipeline.registerFunction(lunr.fr.stemmer, 'stemmer-fr');

    lunr.fr.stopWordFilter = lunr.generateStopWordFilter('ai aie aient aies ait as au aura aurai auraient aurais aurait auras aurez auriez aurions aurons auront aux avaient avais avait avec avez aviez avions avons ayant ayez ayons c ce ceci celà ces cet cette d dans de des du elle en es est et eu eue eues eurent eus eusse eussent eusses eussiez eussions eut eux eûmes eût eûtes furent fus fusse fussent fusses fussiez fussions fut fûmes fût fûtes ici il ils j je l la le les leur leurs lui m ma mais me mes moi mon même n ne nos notre nous on ont ou par pas pour qu que quel quelle quelles quels qui s sa sans se sera serai seraient serais serait seras serez seriez serions serons seront ses soi soient sois soit sommes son sont soyez soyons suis sur t ta te tes toi ton tu un une vos votre vous y à étaient étais était étant étiez étions été étée étées étés êtes'.split(' '));

    lunr.Pipeline.registerFunction(lunr.fr.stopWordFilter, 'stopWordFilter-fr');
  };
}))
//! openseadragon 3.1.0
//! Built on 2022-06-07
//! Git commit: v3.1.0-1-c1c380f
//! http://openseadragon.github.io
//! License: http://openseadragon.github.io/license/


function OpenSeadragon(e){return new OpenSeadragon.Viewer(e)}!function(n){n.version={versionStr:"3.1.0",major:parseInt("3",10),minor:parseInt("1",10),revision:parseInt("0",10)};var t={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Object]":"object"},i=Object.prototype.toString,o=Object.prototype.hasOwnProperty;n.isFunction=function(e){return"function"===n.type(e)};n.isArray=Array.isArray||function(e){return"array"===n.type(e)};n.isWindow=function(e){return e&&"object"==typeof e&&"setInterval"in e};n.type=function(e){return null==e?String(e):t[i.call(e)]||"object"};n.isPlainObject=function(e){if(!e||"object"!==OpenSeadragon.type(e)||e.nodeType||n.isWindow(e))return!1;if(e.constructor&&!o.call(e,"constructor")&&!o.call(e.constructor.prototype,"isPrototypeOf"))return!1;var t;for(var i in e)t=i;return void 0===t||o.call(e,t)};n.isEmptyObject=function(e){for(var t in e)return!1;return!0};n.freezeObject=function(e){Object.freeze?n.freezeObject=Object.freeze:n.freezeObject=function(e){return e};return n.freezeObject(e)};n.supportsCanvas=(e=document.createElement("canvas"),!(!n.isFunction(e.getContext)||!e.getContext("2d")));var e;n.isCanvasTainted=function(e){var t=!1;try{e.getContext("2d").getImageData(0,0,1,1)}catch(e){t=!0}return t};n.supportsAddEventListener=!(!document.documentElement.addEventListener||!document.addEventListener);n.supportsRemoveEventListener=!(!document.documentElement.removeEventListener||!document.removeEventListener);n.supportsEventListenerOptions=function(){var t=0;if(n.supportsAddEventListener)try{var e={get capture(){t++;return!1},get once(){t++;return!1},get passive(){t++;return!1}};window.addEventListener("test",null,e);window.removeEventListener("test",null,e)}catch(e){t=0}return 3<=t}();n.getCurrentPixelDensityRatio=function(){if(n.supportsCanvas){var e=document.createElement("canvas").getContext("2d");var t=window.devicePixelRatio||1;e=e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return Math.max(t,1)/e}return 1};n.pixelDensityRatio=n.getCurrentPixelDensityRatio()}(OpenSeadragon);!function(u){u.extend=function(){var e,t,i,n,o,r,s=arguments[0]||{},a=arguments.length,l=!1,h=1;if("boolean"==typeof s){l=s;s=arguments[1]||{};h=2}"object"==typeof s||OpenSeadragon.isFunction(s)||(s={});if(a===h){s=this;--h}for(;h<a;h++)if(null!==(e=arguments[h])||void 0!==e)for(t in e){i=s[t];if(s!==(n=e[t]))if(l&&n&&(OpenSeadragon.isPlainObject(n)||(o=OpenSeadragon.isArray(n)))){if(o){o=!1;r=i&&OpenSeadragon.isArray(i)?i:[]}else r=i&&OpenSeadragon.isPlainObject(i)?i:{};s[t]=OpenSeadragon.extend(l,r,n)}else void 0!==n&&(s[t]=n)}return s};u.extend(u,{DEFAULT_SETTINGS:{xmlPath:null,tileSources:null,tileHost:null,initialPage:0,crossOriginPolicy:!1,ajaxWithCredentials:!1,loadTilesWithAjax:!1,ajaxHeaders:{},splitHashDataForPost:!1,panHorizontal:!0,panVertical:!0,constrainDuringPan:!1,wrapHorizontal:!1,wrapVertical:!1,visibilityRatio:.5,minPixelRatio:.5,defaultZoomLevel:0,minZoomLevel:null,maxZoomLevel:null,homeFillsViewer:!1,clickTimeThreshold:300,clickDistThreshold:5,dblClickTimeThreshold:300,dblClickDistThreshold:20,springStiffness:6.5,animationTime:1.2,gestureSettingsMouse:{dragToPan:!0,scrollToZoom:!0,clickToZoom:!0,dblClickToZoom:!1,pinchToZoom:!1,zoomToRefPoint:!0,flickEnabled:!1,flickMinSpeed:120,flickMomentum:.25,pinchRotate:!1},gestureSettingsTouch:{dragToPan:!0,scrollToZoom:!1,clickToZoom:!1,dblClickToZoom:!0,pinchToZoom:!0,zoomToRefPoint:!0,flickEnabled:!0,flickMinSpeed:120,flickMomentum:.25,pinchRotate:!1},gestureSettingsPen:{dragToPan:!0,scrollToZoom:!1,clickToZoom:!0,dblClickToZoom:!1,pinchToZoom:!1,zoomToRefPoint:!0,flickEnabled:!1,flickMinSpeed:120,flickMomentum:.25,pinchRotate:!1},gestureSettingsUnknown:{dragToPan:!0,scrollToZoom:!1,clickToZoom:!1,dblClickToZoom:!0,pinchToZoom:!0,zoomToRefPoint:!0,flickEnabled:!0,flickMinSpeed:120,flickMomentum:.25,pinchRotate:!1},zoomPerClick:2,zoomPerScroll:1.2,zoomPerSecond:1,blendTime:0,alwaysBlend:!1,autoHideControls:!0,immediateRender:!1,minZoomImageRatio:.9,maxZoomPixelRatio:1.1,smoothTileEdgesMinZoom:1.1,iOSDevice:function(){if("object"!=typeof navigator)return!1;var e=navigator.userAgent;return"string"==typeof e&&(-1!==e.indexOf("iPhone")||-1!==e.indexOf("iPad")||-1!==e.indexOf("iPod"))}(),pixelsPerWheelLine:40,pixelsPerArrowPress:40,autoResize:!0,preserveImageSizeOnResize:!1,minScrollDeltaTime:50,rotationIncrement:90,showSequenceControl:!0,sequenceControlAnchor:null,preserveViewport:!1,preserveOverlays:!1,navPrevNextWrap:!1,showNavigationControl:!0,navigationControlAnchor:null,showZoomControl:!0,showHomeControl:!0,showFullPageControl:!0,showRotationControl:!1,showFlipControl:!1,controlsFadeDelay:2e3,controlsFadeLength:1500,mouseNavEnabled:!0,showNavigator:!1,navigatorId:null,navigatorPosition:null,navigatorSizeRatio:.2,navigatorMaintainSizeRatio:!1,navigatorTop:null,navigatorLeft:null,navigatorHeight:null,navigatorWidth:null,navigatorAutoResize:!0,navigatorAutoFade:!0,navigatorRotate:!0,navigatorBackground:"#000",navigatorOpacity:.8,navigatorBorderColor:"#555",navigatorDisplayRegionColor:"#900",degrees:0,flipped:!1,opacity:1,preload:!1,compositeOperation:null,imageSmoothingEnabled:!0,placeholderFillStyle:null,subPixelRoundingForTransparency:null,showReferenceStrip:!1,referenceStripScroll:"horizontal",referenceStripElement:null,referenceStripHeight:null,referenceStripWidth:null,referenceStripPosition:"BOTTOM_LEFT",referenceStripSizeRatio:.2,collectionRows:3,collectionColumns:0,collectionLayout:"horizontal",collectionMode:!1,collectionTileSize:800,collectionTileMargin:80,imageLoaderLimit:0,maxImageCacheCount:200,timeout:3e4,useCanvas:!0,prefixUrl:"/images/",navImages:{zoomIn:{REST:"zoomin_rest.png",GROUP:"zoomin_grouphover.png",HOVER:"zoomin_hover.png",DOWN:"zoomin_pressed.png"},zoomOut:{REST:"zoomout_rest.png",GROUP:"zoomout_grouphover.png",HOVER:"zoomout_hover.png",DOWN:"zoomout_pressed.png"},home:{REST:"home_rest.png",GROUP:"home_grouphover.png",HOVER:"home_hover.png",DOWN:"home_pressed.png"},fullpage:{REST:"fullpage_rest.png",GROUP:"fullpage_grouphover.png",HOVER:"fullpage_hover.png",DOWN:"fullpage_pressed.png"},rotateleft:{REST:"rotateleft_rest.png",GROUP:"rotateleft_grouphover.png",HOVER:"rotateleft_hover.png",DOWN:"rotateleft_pressed.png"},rotateright:{REST:"rotateright_rest.png",GROUP:"rotateright_grouphover.png",HOVER:"rotateright_hover.png",DOWN:"rotateright_pressed.png"},flip:{REST:"flip_rest.png",GROUP:"flip_grouphover.png",HOVER:"flip_hover.png",DOWN:"flip_pressed.png"},previous:{REST:"previous_rest.png",GROUP:"previous_grouphover.png",HOVER:"previous_hover.png",DOWN:"previous_pressed.png"},next:{REST:"next_rest.png",GROUP:"next_grouphover.png",HOVER:"next_hover.png",DOWN:"next_pressed.png"}},debugMode:!1,debugGridColor:["#437AB2","#1B9E77","#D95F02","#7570B3","#E7298A","#66A61E","#E6AB02","#A6761D","#666666"],silenceMultiImageWarnings:!1},SIGNAL:"----seadragon----",delegate:function(t,i){return function(){var e=arguments;return i.apply(t,e=void 0===e?[]:e)}},BROWSERS:{UNKNOWN:0,IE:1,FIREFOX:2,SAFARI:3,CHROME:4,OPERA:5,EDGE:6,CHROMEEDGE:7},SUBPIXEL_ROUNDING_OCCURRENCES:{NEVER:0,ONLY_AT_REST:1,ALWAYS:2},_viewers:new Map,getViewer:function(e){return u._viewers.get(this.getElement(e))},getElement:function(e){return e="string"==typeof e?document.getElementById(e):e},getElementPosition:function(e){var t,i,n=new u.Point;i=o(e=u.getElement(e),t="fixed"===u.getElementStyle(e).position);for(;i;){n.x+=e.offsetLeft;n.y+=e.offsetTop;t&&(n=n.plus(u.getPageScroll()));i=o(e=i,t="fixed"===u.getElementStyle(e).position)}return n},getElementOffset:function(e){var t,i=(e=u.getElement(e))&&e.ownerDocument,n={top:0,left:0};if(!i)return new u.Point;t=i.documentElement;void 0!==e.getBoundingClientRect&&(n=e.getBoundingClientRect());i=i===i.window?i:9===i.nodeType&&(i.defaultView||i.parentWindow);return new u.Point(n.left+(i.pageXOffset||t.scrollLeft)-(t.clientLeft||0),n.top+(i.pageYOffset||t.scrollTop)-(t.clientTop||0))},getElementSize:function(e){e=u.getElement(e);return new u.Point(e.clientWidth,e.clientHeight)},getElementStyle:document.documentElement.currentStyle?function(e){return(e=u.getElement(e)).currentStyle}:function(e){e=u.getElement(e);return window.getComputedStyle(e,"")},getCssPropertyWithVendorPrefix:function(e){var a={};u.getCssPropertyWithVendorPrefix=function(e){if(void 0!==a[e])return a[e];var t=document.createElement("div").style;var i=null;if(void 0!==t[e])i=e;else{var n=["Webkit","Moz","MS","O","webkit","moz","ms","o"];var o=u.capitalizeFirstLetter(e);for(var r=0;r<n.length;r++){var s=n[r]+o;if(void 0!==t[s]){i=s;break}}}return a[e]=i};return u.getCssPropertyWithVendorPrefix(e)},capitalizeFirstLetter:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},positiveModulo:function(e,t){e%=t;e<0&&(e+=t);return e},pointInElement:function(e,t){e=u.getElement(e);var i=u.getElementOffset(e),e=u.getElementSize(e);return t.x>=i.x&&t.x<i.x+e.x&&t.y<i.y+e.y&&t.y>=i.y},getMousePosition:function(e){if("number"==typeof e.pageX)u.getMousePosition=function(e){var t=new u.Point;t.x=e.pageX;t.y=e.pageY;return t};else{if("number"!=typeof e.clientX)throw new Error("Unknown event mouse position, no known technique.");u.getMousePosition=function(e){var t=new u.Point;t.x=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;t.y=e.clientY+document.body.scrollTop+document.documentElement.scrollTop;return t}}return u.getMousePosition(e)},getPageScroll:function(){var e=document.documentElement||{},t=document.body||{};if("number"==typeof window.pageXOffset)u.getPageScroll=function(){return new u.Point(window.pageXOffset,window.pageYOffset)};else if(t.scrollLeft||t.scrollTop)u.getPageScroll=function(){return new u.Point(document.body.scrollLeft,document.body.scrollTop)};else{if(!e.scrollLeft&&!e.scrollTop)return new u.Point(0,0);u.getPageScroll=function(){return new u.Point(document.documentElement.scrollLeft,document.documentElement.scrollTop)}}return u.getPageScroll()},setPageScroll:function(e){if(void 0!==window.scrollTo)u.setPageScroll=function(e){window.scrollTo(e.x,e.y)};else{var t=u.getPageScroll();if(t.x===e.x&&t.y===e.y)return;document.body.scrollLeft=e.x;document.body.scrollTop=e.y;var i=u.getPageScroll();if(i.x!==t.x&&i.y!==t.y){u.setPageScroll=function(e){document.body.scrollLeft=e.x;document.body.scrollTop=e.y};return}document.documentElement.scrollLeft=e.x;document.documentElement.scrollTop=e.y;if((i=u.getPageScroll()).x!==t.x&&i.y!==t.y){u.setPageScroll=function(e){document.documentElement.scrollLeft=e.x;document.documentElement.scrollTop=e.y};return}u.setPageScroll=function(e){}}u.setPageScroll(e)},getWindowSize:function(){var e=document.documentElement||{},t=document.body||{};if("number"==typeof window.innerWidth)u.getWindowSize=function(){return new u.Point(window.innerWidth,window.innerHeight)};else if(e.clientWidth||e.clientHeight)u.getWindowSize=function(){return new u.Point(document.documentElement.clientWidth,document.documentElement.clientHeight)};else{if(!t.clientWidth&&!t.clientHeight)throw new Error("Unknown window size, no known technique.");u.getWindowSize=function(){return new u.Point(document.body.clientWidth,document.body.clientHeight)}}return u.getWindowSize()},makeCenteredNode:function(e){e=u.getElement(e);var t=[u.makeNeutralElement("div"),u.makeNeutralElement("div"),u.makeNeutralElement("div")];u.extend(t[0].style,{display:"table",height:"100%",width:"100%"});u.extend(t[1].style,{display:"table-row"});u.extend(t[2].style,{display:"table-cell",verticalAlign:"middle",textAlign:"center"});t[0].appendChild(t[1]);t[1].appendChild(t[2]);t[2].appendChild(e);return t[0]},makeNeutralElement:function(e){var t=document.createElement(e),e=t.style;e.background="transparent none";e.border="none";e.margin="0px";e.padding="0px";e.position="static";return t},now:function(){Date.now?u.now=Date.now:u.now=function(){return(new Date).getTime()};return u.now()},makeTransparentImage:function(e){var t=u.makeNeutralElement("img");t.src=e;return t},setElementOpacity:function(e,t,i){e=u.getElement(e);i&&!u.Browser.alpha&&(t=Math.round(t));if(u.Browser.opacity)e.style.opacity=t<1?t:"";else if(t<1){t=Math.round(100*t);e.style.filter="alpha(opacity="+t+")"}else e.style.filter=""},setElementTouchActionNone:function(e){void 0!==(e=u.getElement(e)).style.touchAction?e.style.touchAction="none":void 0!==e.style.msTouchAction&&(e.style.msTouchAction="none")},setElementPointerEvents:function(e,t){void 0!==(e=u.getElement(e)).style&&void 0!==e.style.pointerEvents&&(e.style.pointerEvents=t)},setElementPointerEventsNone:function(e){u.setElementPointerEvents(e,"none")},addClass:function(e,t){(e=u.getElement(e)).className?-1===(" "+e.className+" ").indexOf(" "+t+" ")&&(e.className+=" "+t):e.className=t},indexOf:function(e,t,i){Array.prototype.indexOf?this.indexOf=function(e,t,i){return e.indexOf(t,i)}:this.indexOf=function(e,t,i){var n,o,i=i||0;if(!e)throw new TypeError;if(0===(o=e.length)||o<=i)return-1;for(n=i=i<0?o-Math.abs(i):i;n<o;n++)if(e[n]===t)return n;return-1};return this.indexOf(e,t,i)},removeClass:function(e,t){var i,n,o=[];i=(e=u.getElement(e)).className.split(/\s+/);for(n=0;n<i.length;n++)i[n]&&i[n]!==t&&o.push(i[n]);e.className=o.join(" ")},normalizeEventListenerOptions:function(e){return void 0!==e?"boolean"==typeof e?u.supportsEventListenerOptions?{capture:e}:e:u.supportsEventListenerOptions?e:void 0!==e.capture&&e.capture:!!u.supportsEventListenerOptions&&{capture:!1}},addEvent:function(){if(u.supportsAddEventListener)return function(e,t,i,n){n=u.normalizeEventListenerOptions(n);(e=u.getElement(e)).addEventListener(t,i,n)};if(document.documentElement.attachEvent&&document.attachEvent)return function(e,t,i){(e=u.getElement(e)).attachEvent("on"+t,i)};throw new Error("No known event model.")}(),removeEvent:function(){if(u.supportsRemoveEventListener)return function(e,t,i,n){n=u.normalizeEventListenerOptions(n);(e=u.getElement(e)).removeEventListener(t,i,n)};if(document.documentElement.detachEvent&&document.detachEvent)return function(e,t,i){(e=u.getElement(e)).detachEvent("on"+t,i)};throw new Error("No known event model.")}(),cancelEvent:function(e){e.preventDefault()},eventIsCanceled:function(e){return e.defaultPrevented},stopEvent:function(e){e.stopPropagation()},createCallback:function(i,n){var e,o=[];for(e=2;e<arguments.length;e++)o.push(arguments[e]);return function(){var e,t=o.concat([]);for(e=0;e<arguments.length;e++)t.push(arguments[e]);return n.apply(i,t)}},getUrlParameter:function(e){e=a[e];return e||null},getUrlProtocol:function(e){e=e.match(/^([a-z]+:)\/\//i);return null===e?window.location.protocol:e[1].toLowerCase()},createAjaxRequest:function(e){var t;try{t=!!new ActiveXObject("Microsoft.XMLHTTP")}catch(e){t=!1}if(t)window.XMLHttpRequest?u.createAjaxRequest=function(e){return e?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest}:u.createAjaxRequest=function(){return new ActiveXObject("Microsoft.XMLHTTP")};else{if(!window.XMLHttpRequest)throw new Error("Browser doesn't support XMLHttpRequest.");u.createAjaxRequest=function(){return new XMLHttpRequest}}return u.createAjaxRequest(e)},makeAjaxRequest:function(e,t,i){var n;var o;var r;var s;if(u.isPlainObject(e)){t=e.success;i=e.error;n=e.withCredentials;o=e.headers;r=e.responseType||null;s=e.postData||null;e=e.url}var a=u.getUrlProtocol(e);var l=u.createAjaxRequest("file:"===a);if(!u.isFunction(t))throw new Error("makeAjaxRequest requires a success callback");l.onreadystatechange=function(){if(4===l.readyState){l.onreadystatechange=function(){};200<=l.status&&l.status<300||0===l.status&&"http:"!==a&&"https:"!==a?t(l):u.isFunction(i)?i(l):u.console.error("AJAX request returned %d: %s",l.status,e)}};var h=s?"POST":"GET";try{l.open(h,e,!0);r&&(l.responseType=r);if(o)for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&l.setRequestHeader(c,o[c]);n&&(l.withCredentials=!0);l.send(s)}catch(e){u.console.error("%s while making AJAX request: %s",e.name,e.message);l.onreadystatechange=function(){};u.isFunction(i)&&i(l,e)}return l},jsonp:function(e){var i,t=e.url,n=document.head||document.getElementsByTagName("head")[0]||document.documentElement,o=e.callbackName||"openseadragon"+u.now(),r=window[o],s=e.param||"callback",a=e.callback;t=t.replace(/(=)\?(&|$)|\?\?/i,"$1"+o+"$2");t+=(/\?/.test(t)?"&":"?")+s+"="+o;window[o]=function(e){if(r)window[o]=r;else try{delete window[o]}catch(e){}a&&u.isFunction(a)&&a(e)};i=document.createElement("script");void 0===e.async&&!1===e.async||(i.async="async");e.scriptCharset&&(i.charset=e.scriptCharset);i.src=t;i.onload=i.onreadystatechange=function(e,t){if(t||!i.readyState||/loaded|complete/.test(i.readyState)){i.onload=i.onreadystatechange=null;n&&i.parentNode&&n.removeChild(i);i=void 0}};n.insertBefore(i,n.firstChild)},createFromDZI:function(){throw"OpenSeadragon.createFromDZI is deprecated, use Viewer.open."},parseXml:function(e){if(window.DOMParser)u.parseXml=function(e){return(new DOMParser).parseFromString(e,"text/xml")};else{if(!window.ActiveXObject)throw new Error("Browser doesn't support XML DOM.");u.parseXml=function(e){var t=null;(t=new ActiveXObject("Microsoft.XMLDOM")).async=!1;t.loadXML(e);return t}}return u.parseXml(e)},parseJSON:function(e){u.parseJSON=window.JSON.parse;return u.parseJSON(e)},imageFormatSupported:function(e){return!!t[(e=e||"").toLowerCase()]},setImageFormatsSupported:function(e){u.extend(t,e)}});function e(e){}u.console=window.console||{log:e,debug:e,info:e,warn:e,error:e,assert:e};var t={bmp:!(u.Browser={vendor:u.BROWSERS.UNKNOWN,version:0,alpha:!0}),jpeg:!0,jpg:!0,png:!0,tif:!1,wdp:!1},a={};!function(){var e=navigator.appVersion,t=navigator.userAgent;switch(navigator.appName){case"Microsoft Internet Explorer":if(window.attachEvent&&window.ActiveXObject){u.Browser.vendor=u.BROWSERS.IE;u.Browser.version=parseFloat(t.substring(t.indexOf("MSIE")+5,t.indexOf(";",t.indexOf("MSIE"))))}break;case"Netscape":if(window.addEventListener)if(0<=t.indexOf("Edge")){u.Browser.vendor=u.BROWSERS.EDGE;u.Browser.version=parseFloat(t.substring(t.indexOf("Edge")+5))}else if(0<=t.indexOf("Edg")){u.Browser.vendor=u.BROWSERS.CHROMEEDGE;u.Browser.version=parseFloat(t.substring(t.indexOf("Edg")+4))}else if(0<=t.indexOf("Firefox")){u.Browser.vendor=u.BROWSERS.FIREFOX;u.Browser.version=parseFloat(t.substring(t.indexOf("Firefox")+8))}else if(0<=t.indexOf("Safari")){u.Browser.vendor=0<=t.indexOf("Chrome")?u.BROWSERS.CHROME:u.BROWSERS.SAFARI;u.Browser.version=parseFloat(t.substring(t.substring(0,t.indexOf("Safari")).lastIndexOf("/")+1,t.indexOf("Safari")))}else if(null!==new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(t)){u.Browser.vendor=u.BROWSERS.IE;u.Browser.version=parseFloat(RegExp.$1)}break;case"Opera":u.Browser.vendor=u.BROWSERS.OPERA;u.Browser.version=parseFloat(e)}var i,n,o=window.location.search.substring(1).split("&");for(n=0;n<o.length;n++)if(0<(s=(i=o[n]).indexOf("="))){var r=i.substring(0,s),s=i.substring(s+1);try{a[r]=decodeURIComponent(s)}catch(e){u.console.error("Ignoring malformed URL parameter: %s=%s",r,s)}}u.Browser.alpha=!(u.Browser.vendor===u.BROWSERS.CHROME&&u.Browser.version<2);u.Browser.opacity=!0;u.Browser.vendor===u.BROWSERS.IE&&u.Browser.version<11&&u.console.error("Internet Explorer versions < 11 are not supported by OpenSeadragon")}();!function(e){var t=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||e.msRequestAnimationFrame;var i=e.cancelAnimationFrame||e.mozCancelAnimationFrame||e.webkitCancelAnimationFrame||e.msCancelAnimationFrame;if(t&&i){u.requestAnimationFrame=function(){return t.apply(e,arguments)};u.cancelAnimationFrame=function(){return i.apply(e,arguments)}}else{var n,o=[],r=[],s=0;u.requestAnimationFrame=function(e){o.push([++s,e]);n=n||setInterval(function(){if(o.length){var e=u.now();var t=r;r=o;o=t;for(;r.length;)r.shift()[1](e)}else{clearInterval(n);n=void 0}},20);return s};u.cancelAnimationFrame=function(e){var t,i;for(t=0,i=o.length;t<i;t+=1)if(o[t][0]===e){o.splice(t,1);return}for(t=0,i=r.length;t<i;t+=1)if(r[t][0]===e){r.splice(t,1);return}}}}(window);function o(e,t){return t&&e!==document.body?document.body:e.offsetParent}}(OpenSeadragon);!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof module&&module.exports?module.exports=t():e.OpenSeadragon=t()}(this,function(){return OpenSeadragon});!function(e){var t={supportsFullScreen:!1,isFullScreen:function(){return!1},getFullScreenElement:function(){return null},requestFullScreen:function(){},exitFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",fullScreenErrorEventName:""};if(document.exitFullscreen){t.supportsFullScreen=!0;t.getFullScreenElement=function(){return document.fullscreenElement};t.requestFullScreen=function(e){return e.requestFullscreen()};t.exitFullScreen=function(){document.exitFullscreen()};t.fullScreenEventName="fullscreenchange";t.fullScreenErrorEventName="fullscreenerror"}else if(document.msExitFullscreen){t.supportsFullScreen=!0;t.getFullScreenElement=function(){return document.msFullscreenElement};t.requestFullScreen=function(e){return e.msRequestFullscreen()};t.exitFullScreen=function(){document.msExitFullscreen()};t.fullScreenEventName="MSFullscreenChange";t.fullScreenErrorEventName="MSFullscreenError"}else if(document.webkitExitFullscreen){t.supportsFullScreen=!0;t.getFullScreenElement=function(){return document.webkitFullscreenElement};t.requestFullScreen=function(e){return e.webkitRequestFullscreen()};t.exitFullScreen=function(){document.webkitExitFullscreen()};t.fullScreenEventName="webkitfullscreenchange";t.fullScreenErrorEventName="webkitfullscreenerror"}else if(document.webkitCancelFullScreen){t.supportsFullScreen=!0;t.getFullScreenElement=function(){return document.webkitCurrentFullScreenElement};t.requestFullScreen=function(e){return e.webkitRequestFullScreen()};t.exitFullScreen=function(){document.webkitCancelFullScreen()};t.fullScreenEventName="webkitfullscreenchange";t.fullScreenErrorEventName="webkitfullscreenerror"}else if(document.mozCancelFullScreen){t.supportsFullScreen=!0;t.getFullScreenElement=function(){return document.mozFullScreenElement};t.requestFullScreen=function(e){return e.mozRequestFullScreen()};t.exitFullScreen=function(){document.mozCancelFullScreen()};t.fullScreenEventName="mozfullscreenchange";t.fullScreenErrorEventName="mozfullscreenerror"}t.isFullScreen=function(){return null!==t.getFullScreenElement()};t.cancelFullScreen=function(){e.console.error("cancelFullScreen is deprecated. Use exitFullScreen instead.");t.exitFullScreen()};e.extend(e,t)}(OpenSeadragon);!function(r){r.EventSource=function(){this.events={}};r.EventSource.prototype={addOnceHandler:function(t,i,e,n){var o=this;n=n||1;var r=0;function s(e){++r===n&&o.removeHandler(t,s);i(e)}this.addHandler(t,s,e)},addHandler:function(e,t,i){var n=this.events[e];n||(this.events[e]=n=[]);t&&r.isFunction(t)&&(n[n.length]={handler:t,userData:i||null})},removeHandler:function(e,t){var i,n=this.events[e],o=[];if(n&&r.isArray(n)){for(i=0;i<n.length;i++)n[i].handler!==t&&o.push(n[i]);this.events[e]=o}},numberOfHandlers:function(e){e=this.events[e];return e?e.length:0},removeAllHandlers:function(e){if(e)this.events[e]=[];else for(var t in this.events)this.events[t]=[]},getHandler:function(e){var o=this.events[e];if(!o||!o.length)return null;o=1===o.length?[o[0]]:Array.apply(null,o);return function(e,t){var i,n=o.length;for(i=0;i<n;i++)if(o[i]){t.eventSource=e;t.userData=o[i].userData;o[i].handler(t)}}},raiseEvent:function(e,t){e=this.getHandler(e);e&&e(this,t=t||{})}}}(OpenSeadragon);!function(c){var n=[];var u={};c.MouseTracker=function(e){n.push(this);var t=arguments;c.isPlainObject(e)||(e={element:t[0],clickTimeThreshold:t[1],clickDistThreshold:t[2]});this.hash=Math.random();this.element=c.getElement(e.element);this.clickTimeThreshold=e.clickTimeThreshold||c.DEFAULT_SETTINGS.clickTimeThreshold;this.clickDistThreshold=e.clickDistThreshold||c.DEFAULT_SETTINGS.clickDistThreshold;this.dblClickTimeThreshold=e.dblClickTimeThreshold||c.DEFAULT_SETTINGS.dblClickTimeThreshold;this.dblClickDistThreshold=e.dblClickDistThreshold||c.DEFAULT_SETTINGS.dblClickDistThreshold;this.userData=e.userData||null;this.stopDelay=e.stopDelay||50;this.preProcessEventHandler=e.preProcessEventHandler||null;this.contextMenuHandler=e.contextMenuHandler||null;this.enterHandler=e.enterHandler||null;this.leaveHandler=e.leaveHandler||null;this.exitHandler=e.exitHandler||null;this.overHandler=e.overHandler||null;this.outHandler=e.outHandler||null;this.pressHandler=e.pressHandler||null;this.nonPrimaryPressHandler=e.nonPrimaryPressHandler||null;this.releaseHandler=e.releaseHandler||null;this.nonPrimaryReleaseHandler=e.nonPrimaryReleaseHandler||null;this.moveHandler=e.moveHandler||null;this.scrollHandler=e.scrollHandler||null;this.clickHandler=e.clickHandler||null;this.dblClickHandler=e.dblClickHandler||null;this.dragHandler=e.dragHandler||null;this.dragEndHandler=e.dragEndHandler||null;this.pinchHandler=e.pinchHandler||null;this.stopHandler=e.stopHandler||null;this.keyDownHandler=e.keyDownHandler||null;this.keyUpHandler=e.keyUpHandler||null;this.keyHandler=e.keyHandler||null;this.focusHandler=e.focusHandler||null;this.blurHandler=e.blurHandler||null;var i=this;u[this.hash]={click:function(e){!function(e,t){var i={originalEvent:t,eventType:"click",pointerType:"mouse",isEmulated:!1};z(e,i);i.preventDefault&&!i.defaultPrevented&&c.cancelEvent(t);i.stopPropagation&&c.stopEvent(t)}(i,e)},dblclick:function(e){!function(e,t){var i={originalEvent:t,eventType:"dblclick",pointerType:"mouse",isEmulated:!1};z(e,i);i.preventDefault&&!i.defaultPrevented&&c.cancelEvent(t);i.stopPropagation&&c.stopEvent(t)}(i,e)},keydown:function(e){!function(e,t){var i=null;var n={originalEvent:t,eventType:"keydown",pointerType:"",isEmulated:!1};z(e,n);if(e.keyDownHandler&&!n.preventGesture&&!n.defaultPrevented){i={eventSource:e,keyCode:t.keyCode||t.charCode,ctrl:t.ctrlKey,shift:t.shiftKey,alt:t.altKey,meta:t.metaKey,originalEvent:t,preventDefault:n.preventDefault||n.defaultPrevented,userData:e.userData};e.keyDownHandler(i)}(i&&i.preventDefault||n.preventDefault&&!n.defaultPrevented)&&c.cancelEvent(t);n.stopPropagation&&c.stopEvent(t)}(i,e)},keyup:function(e){!function(e,t){var i=null;var n={originalEvent:t,eventType:"keyup",pointerType:"",isEmulated:!1};z(e,n);if(e.keyUpHandler&&!n.preventGesture&&!n.defaultPrevented){i={eventSource:e,keyCode:t.keyCode||t.charCode,ctrl:t.ctrlKey,shift:t.shiftKey,alt:t.altKey,meta:t.metaKey,originalEvent:t,preventDefault:n.preventDefault||n.defaultPrevented,userData:e.userData};e.keyUpHandler(i)}(i&&i.preventDefault||n.preventDefault&&!n.defaultPrevented)&&c.cancelEvent(t);n.stopPropagation&&c.stopEvent(t)}(i,e)},keypress:function(e){!function(e,t){var i=null;var n={originalEvent:t,eventType:"keypress",pointerType:"",isEmulated:!1};z(e,n);if(e.keyHandler&&!n.preventGesture&&!n.defaultPrevented){i={eventSource:e,keyCode:t.keyCode||t.charCode,ctrl:t.ctrlKey,shift:t.shiftKey,alt:t.altKey,meta:t.metaKey,originalEvent:t,preventDefault:n.preventDefault||n.defaultPrevented,userData:e.userData};e.keyHandler(i)}(i&&i.preventDefault||n.preventDefault&&!n.defaultPrevented)&&c.cancelEvent(t);n.stopPropagation&&c.stopEvent(t)}(i,e)},focus:function(e){!function(e,t){var i={originalEvent:t,eventType:"focus",pointerType:"",isEmulated:!1};z(e,i);e.focusHandler&&!i.preventGesture&&e.focusHandler({eventSource:e,originalEvent:t,userData:e.userData})}(i,e)},blur:function(e){!function(e,t){var i={originalEvent:t,eventType:"blur",pointerType:"",isEmulated:!1};z(e,i);e.blurHandler&&!i.preventGesture&&e.blurHandler({eventSource:e,originalEvent:t,userData:e.userData})}(i,e)},contextmenu:function(e){!function(e,t){var i=null;var n={originalEvent:t,eventType:"contextmenu",pointerType:"mouse",isEmulated:!1};z(e,n);if(e.contextMenuHandler&&!n.preventGesture&&!n.defaultPrevented){i={eventSource:e,position:T(y(t),e.element),originalEvent:n.originalEvent,preventDefault:n.preventDefault||n.defaultPrevented,userData:e.userData};e.contextMenuHandler(i)}(i&&i.preventDefault||n.preventDefault&&!n.defaultPrevented)&&c.cancelEvent(t);n.stopPropagation&&c.stopEvent(t)}(i,e)},wheel:function(e){E(i,e,e)},mousewheel:function(e){S(i,e)},DOMMouseScroll:function(e){S(i,e)},MozMousePixelScroll:function(e){S(i,e)},losecapture:function(e){!function(e,t){var i={id:c.MouseTracker.mousePointerId,type:"mouse"};var n={originalEvent:t,eventType:"lostpointercapture",pointerType:"mouse",isEmulated:!1};z(e,n);t.target===e.element&&L(e,i,!1);n.stopPropagation&&c.stopEvent(t)}(i,e)},mouseenter:function(e){P(i,e)},mouseleave:function(e){_(i,e)},mouseover:function(e){R(i,e)},mouseout:function(e){C(i,e)},mousedown:function(e){b(i,e)},mouseup:function(e){D(i,e)},mousemove:function(e){O(i,e)},touchstart:function(e){!function(e,t){var i,n,o,r=t.changedTouches.length,s=e.getActivePointersListByType("touch");i=c.now();s.getLength()>t.touches.length-r&&c.console.warn("Tracked touch contact count doesn't match event.touches.length");var a={originalEvent:t,eventType:"pointerdown",pointerType:"touch",isEmulated:!1};z(e,a);for(n=0;n<r;n++){o={id:t.changedTouches[n].identifier,type:"touch",isPrimary:0===s.getLength(),currentPos:y(t.changedTouches[n]),currentTime:i};F(e,a,o);N(e,a,o,0);L(e,o,!0)}a.preventDefault&&!a.defaultPrevented&&c.cancelEvent(t);a.stopPropagation&&c.stopEvent(t)}(i,e)},touchend:function(e){!function(e,t){var i,n,o,r=t.changedTouches.length;i=c.now();var s={originalEvent:t,eventType:"pointerup",pointerType:"touch",isEmulated:!1};z(e,s);for(n=0;n<r;n++){o={id:t.changedTouches[n].identifier,type:"touch",currentPos:y(t.changedTouches[n]),currentTime:i};A(e,s,o,0);L(e,o,!1);M(e,s,o)}s.preventDefault&&!s.defaultPrevented&&c.cancelEvent(t);s.stopPropagation&&c.stopEvent(t)}(i,e)},touchmove:function(e){!function(e,t){var i,n,o,r=t.changedTouches.length;i=c.now();var s={originalEvent:t,eventType:"pointermove",pointerType:"touch",isEmulated:!1};z(e,s);for(n=0;n<r;n++){o={id:t.changedTouches[n].identifier,type:"touch",currentPos:y(t.changedTouches[n]),currentTime:i};W(e,s,o)}s.preventDefault&&!s.defaultPrevented&&c.cancelEvent(t);s.stopPropagation&&c.stopEvent(t)}(i,e)},touchcancel:function(e){!function(e,t){var i,n,o=t.changedTouches.length;var r={originalEvent:t,eventType:"pointercancel",pointerType:"touch",isEmulated:!1};z(e,r);for(i=0;i<o;i++){n={id:t.changedTouches[i].identifier,type:"touch"};U(e,0,n)}r.stopPropagation&&c.stopEvent(t)}(i,e)},gesturestart:function(e){!(e=e,c.eventIsCanceled(e)||e.preventDefault())},gesturechange:function(e){!(e=e,c.eventIsCanceled(e)||e.preventDefault())},gotpointercapture:function(e){!function(e,t){var i={originalEvent:t,eventType:"gotpointercapture",pointerType:v(t),isEmulated:!1};z(e,i);t.target===e.element&&L(e,{id:t.pointerId,type:v(t)},!0);i.stopPropagation&&c.stopEvent(t)}(i,e)},lostpointercapture:function(e){!function(e,t){var i={originalEvent:t,eventType:"lostpointercapture",pointerType:v(t),isEmulated:!1};z(e,i);t.target===e.element&&L(e,{id:t.pointerId,type:v(t)},!1);i.stopPropagation&&c.stopEvent(t)}(i,e)},pointerenter:function(e){P(i,e)},pointerleave:function(e){_(i,e)},pointerover:function(e){R(i,e)},pointerout:function(e){C(i,e)},pointerdown:function(e){b(i,e)},pointerup:function(e){D(i,e)},pointermove:function(e){O(i,e)},pointercancel:function(e){!function(e,t){var i={id:t.pointerId,type:v(t)};var n={originalEvent:t,eventType:"pointercancel",pointerType:i.type,isEmulated:!1};z(e,n);U(e,0,i);n.stopPropagation&&c.stopEvent(t)}(i,e)},pointerupcaptured:function(e){!function(e,t){e.getActivePointersListByType(v(t)).getById(t.pointerId)&&I(e,t);c.stopEvent(t)}(i,e)},pointermovecaptured:function(e){!function(e,t){e.getActivePointersListByType(v(t)).getById(t.pointerId)&&k(e,t);c.stopEvent(t)}(i,e)},tracking:!1,activePointersLists:[],lastClickPos:null,dblClickTimeOut:null,pinchGPoints:[],lastPinchDist:0,currentPinchDist:0,lastPinchCenter:null,currentPinchCenter:null,sentDragEvent:!1};this.hasGestureHandlers=!!(this.pressHandler||this.nonPrimaryPressHandler||this.releaseHandler||this.nonPrimaryReleaseHandler||this.clickHandler||this.dblClickHandler||this.dragHandler||this.dragEndHandler||this.pinchHandler);this.hasScrollHandler=!!this.scrollHandler;c.MouseTracker.havePointerEvents&&c.setElementPointerEvents(this.element,"auto");this.exitHandler&&c.console.error("MouseTracker.exitHandler is deprecated. Use MouseTracker.leaveHandler instead.");e.startDisabled||this.setTracking(!0)};c.MouseTracker.prototype={destroy:function(){var e;t(this);this.element=null;for(e=0;e<n.length;e++)if(n[e]===this){n.splice(e,1);break}u[this.hash]=null;delete u[this.hash]},isTracking:function(){return u[this.hash].tracking},setTracking:function(e){(e?function(e){var t,i,n=u[e.hash];if(!n.tracking){for(i=0;i<c.MouseTracker.subscribeEvents.length;i++){t=c.MouseTracker.subscribeEvents[i];c.addEvent(e.element,t,n[t],t===c.MouseTracker.wheelEventName&&{passive:!1,capture:!1})}o(e);n.tracking=!0}}:t)(this);return this},getActivePointersListByType:function(e){var t,i,n=u[this.hash],o=n.activePointersLists.length;for(t=0;t<o;t++)if(n.activePointersLists[t].type===e)return n.activePointersLists[t];i=new c.MouseTracker.GesturePointList(e);n.activePointersLists.push(i);return i},getActivePointerCount:function(){var e,t=u[this.hash],i=t.activePointersLists.length,n=0;for(e=0;e<i;e++)n+=t.activePointersLists[e].getLength();return n},preProcessEventHandler:function(){},contextMenuHandler:function(){},enterHandler:function(){},leaveHandler:function(){},exitHandler:function(){},overHandler:function(){},outHandler:function(){},pressHandler:function(){},nonPrimaryPressHandler:function(){},releaseHandler:function(){},nonPrimaryReleaseHandler:function(){},moveHandler:function(){},scrollHandler:function(){},clickHandler:function(){},dblClickHandler:function(){},dragHandler:function(){},dragEndHandler:function(){},pinchHandler:function(){},stopHandler:function(){},keyDownHandler:function(){},keyUpHandler:function(){},keyHandler:function(){},focusHandler:function(){},blurHandler:function(){}};var r=function(){try{return window.self!==window.top}catch(e){return!0}}();function s(e){try{return e.addEventListener&&e.removeEventListener}catch(e){return}}c.MouseTracker.gesturePointVelocityTracker=(l=[],d=h=0,{addPoint:function(e,t){e=a(e,t);l.push({guid:e,gPoint:t,lastPos:t.currentPos});if(1===l.length){d=c.now();h=window.setInterval(i,50)}},removePoint:function(e,t){var i,n=a(e,t),o=l.length;for(i=0;i<o;i++)if(l[i].guid===n){l.splice(i,1);0===--o&&window.clearInterval(h);break}}});function a(e,t){return e.hash.toString()+t.type+t.id.toString()}function i(){var e,t,i,n,o,r=l.length,s=c.now();n=s-d;d=s;for(e=0;e<r;e++){(i=(t=l[e]).gPoint).direction=Math.atan2(i.currentPos.y-t.lastPos.y,i.currentPos.x-t.lastPos.x);o=t.lastPos.distanceTo(i.currentPos);t.lastPos=i.currentPos;i.speed=.75*(1e3*o/(1+n))+.25*i.speed}}var l,h,d;c.MouseTracker.captureElement=document;c.MouseTracker.wheelEventName=c.Browser.vendor===c.BROWSERS.IE&&8<c.Browser.version||"onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll";c.MouseTracker.subscribeEvents=["click","dblclick","keydown","keyup","keypress","focus","blur","contextmenu",c.MouseTracker.wheelEventName];"DOMMouseScroll"===c.MouseTracker.wheelEventName&&c.MouseTracker.subscribeEvents.push("MozMousePixelScroll");if(window.PointerEvent){c.MouseTracker.havePointerEvents=!0;c.MouseTracker.subscribeEvents.push("pointerenter","pointerleave","pointerover","pointerout","pointerdown","pointerup","pointermove","pointercancel");c.MouseTracker.havePointerCapture=(e=document.createElement("div"),c.isFunction(e.setPointerCapture)&&c.isFunction(e.releasePointerCapture));c.MouseTracker.havePointerCapture&&c.MouseTracker.subscribeEvents.push("gotpointercapture","lostpointercapture")}else{c.MouseTracker.havePointerEvents=!1;c.MouseTracker.subscribeEvents.push("mouseenter","mouseleave","mouseover","mouseout","mousedown","mouseup","mousemove");c.MouseTracker.mousePointerId="legacy-mouse";c.MouseTracker.havePointerCapture=(e=document.createElement("div"),c.isFunction(e.setCapture)&&c.isFunction(e.releaseCapture));c.MouseTracker.havePointerCapture&&c.MouseTracker.subscribeEvents.push("losecapture");"ontouchstart"in window&&c.MouseTracker.subscribeEvents.push("touchstart","touchend","touchmove","touchcancel");"ongesturestart"in window&&c.MouseTracker.subscribeEvents.push("gesturestart","gesturechange")}var e;c.MouseTracker.GesturePointList=function(e){this._gPoints=[];this.type=e;this.buttons=0;this.contacts=0;this.clicks=0;this.captureCount=0};c.MouseTracker.GesturePointList.prototype={getLength:function(){return this._gPoints.length},asArray:function(){return this._gPoints},add:function(e){return this._gPoints.push(e)},removeById:function(e){var t,i=this._gPoints.length;for(t=0;t<i;t++)if(this._gPoints[t].id===e){this._gPoints.splice(t,1);break}return this._gPoints.length},getByIndex:function(e){return e<this._gPoints.length?this._gPoints[e]:null},getById:function(e){var t,i=this._gPoints.length;for(t=0;t<i;t++)if(this._gPoints[t].id===e)return this._gPoints[t];return null},getPrimary:function(e){var t,i=this._gPoints.length;for(t=0;t<i;t++)if(this._gPoints[t].isPrimary)return this._gPoints[t];return null},addContact:function(){++this.contacts;if(1<this.contacts&&("mouse"===this.type||"pen"===this.type)){c.console.warn("GesturePointList.addContact() Implausible contacts value");this.contacts=1}},removeContact:function(){--this.contacts;this.contacts<0&&(this.contacts=0)}};function o(e){var t,i,n,o,r,s=u[e.hash],a=s.activePointersLists.length;for(t=0;t<a;t++)if(0<(n=s.activePointersLists[t]).getLength()){r=[];o=n.asArray();for(i=0;i<o.length;i++)r.push(o[i]);for(i=0;i<r.length;i++)H(e,n,r[i])}for(t=0;t<a;t++)s.activePointersLists.pop();s.sentDragEvent=!1}function t(e){var t,i,n=u[e.hash];if(n.tracking){for(i=0;i<c.MouseTracker.subscribeEvents.length;i++){t=c.MouseTracker.subscribeEvents[i];c.removeEvent(e.element,t,n[t],!1)}o(e);n.tracking=!1}}function p(e,t){e=u[e.hash];if("pointerevent"===t)return{upName:"pointerup",upHandler:e.pointerupcaptured,moveName:"pointermove",moveHandler:e.pointermovecaptured};if("mouse"===t)return{upName:"pointerup",upHandler:e.pointerupcaptured,moveName:"pointermove",moveHandler:e.pointermovecaptured};if("touch"===t)return{upName:"touchend",upHandler:e.touchendcaptured,moveName:"touchmove",moveHandler:e.touchmovecaptured};throw new Error("MouseTracker.getCaptureEventParams: Unknown pointer type.")}function g(e,t){var i;if(c.MouseTracker.havePointerCapture)if(c.MouseTracker.havePointerEvents){if(!(i=e.getActivePointersListByType(t.type).getById(t.id))||!i.captured)return;try{e.element.releasePointerCapture(t.id)}catch(e){}}else e.element.releaseCapture();else{i=p(e,c.MouseTracker.havePointerEvents?"pointerevent":t.type);r&&s(window.top)&&c.removeEvent(window.top,i.upName,i.upHandler,!0);c.removeEvent(c.MouseTracker.captureElement,i.moveName,i.moveHandler,!0);c.removeEvent(c.MouseTracker.captureElement,i.upName,i.upHandler,!0)}L(e,t,!1)}function m(e){return c.MouseTracker.havePointerEvents?e.pointerId:c.MouseTracker.mousePointerId}function v(e){return c.MouseTracker.havePointerEvents?e.pointerType||(c.Browser.vendor===c.BROWSERS.IE?"mouse":""):"mouse"}function f(e){return!c.MouseTracker.havePointerEvents||e.isPrimary}function y(e){return c.getMousePosition(e)}function w(e,t){return T(y(e),t)}function T(e,t){t=c.getElementOffset(t);return e.minus(t)}function x(e,t){return new c.Point((e.x+t.x)/2,(e.y+t.y)/2)}function S(e,t){var i={target:t.target||t.srcElement,type:"wheel",shiftKey:t.shiftKey||!1,clientX:t.clientX,clientY:t.clientY,pageX:t.pageX||t.clientX,pageY:t.pageY||t.clientY,deltaMode:"MozMousePixelScroll"===t.type?0:1,deltaX:0,deltaZ:0};"mousewheel"===c.MouseTracker.wheelEventName?i.deltaY=-t.wheelDelta/c.DEFAULT_SETTINGS.pixelsPerWheelLine:i.deltaY=t.detail;E(e,i,t)}function E(e,t,i){var n,o;var r=null;n=t.deltaY<0?1:-1;z(e,o={originalEvent:t,eventType:"wheel",pointerType:"mouse",isEmulated:t!==i});if(e.scrollHandler&&!o.preventGesture&&!o.defaultPrevented){r={eventSource:e,pointerType:"mouse",position:w(t,e.element),scroll:n,shift:t.shiftKey,isTouchEvent:!1,originalEvent:i,preventDefault:o.preventDefault||o.defaultPrevented,userData:e.userData};e.scrollHandler(r)}o.stopPropagation&&c.stopEvent(i);(r&&r.preventDefault||o.preventDefault&&!o.defaultPrevented)&&c.cancelEvent(i)}function P(e,t){var i={id:m(t),type:v(t),isPrimary:f(t),currentPos:y(t),currentTime:c.now()};t={originalEvent:t,eventType:"pointerenter",pointerType:i.type,isEmulated:!1};z(e,t);F(e,t,i)}function _(e,t){var i={id:m(t),type:v(t),isPrimary:f(t),currentPos:y(t),currentTime:c.now()};t={originalEvent:t,eventType:"pointerleave",pointerType:i.type,isEmulated:!1};z(e,t);M(e,t,i)}function R(e,t){var i={id:m(t),type:v(t),isPrimary:f(t),currentPos:y(t),currentTime:c.now()};var n={originalEvent:t,eventType:"pointerover",pointerType:i.type,isEmulated:!1};z(e,n);!function(e,t,i){var n,o;n=e.getActivePointersListByType(i.type);if(o=n.getById(i.id))i=o;else{i.captured=!1;i.insideElementPressed=!1}e.overHandler&&e.overHandler({eventSource:e,pointerType:i.type,position:T(i.currentPos,e.element),buttons:n.buttons,pointers:e.getActivePointerCount(),insideElementPressed:i.insideElementPressed,buttonDownAny:0!==n.buttons,isTouchEvent:"touch"===i.type,originalEvent:t.originalEvent,userData:e.userData})}(e,n,i);n.preventDefault&&!n.defaultPrevented&&c.cancelEvent(t);n.stopPropagation&&c.stopEvent(t)}function C(e,t){var i={id:m(t),type:v(t),isPrimary:f(t),currentPos:y(t),currentTime:c.now()};var n={originalEvent:t,eventType:"pointerout",pointerType:i.type,isEmulated:!1};z(e,n);!function(e,t,i){var n,o;n=e.getActivePointersListByType(i.type);if(o=n.getById(i.id))i=o;else{i.captured=!1;i.insideElementPressed=!1}e.outHandler&&e.outHandler({eventSource:e,pointerType:i.type,position:i.currentPos&&T(i.currentPos,e.element),buttons:n.buttons,pointers:e.getActivePointerCount(),insideElementPressed:i.insideElementPressed,buttonDownAny:0!==n.buttons,isTouchEvent:"touch"===i.type,originalEvent:t.originalEvent,userData:e.userData})}(e,n,i);n.preventDefault&&!n.defaultPrevented&&c.cancelEvent(t);n.stopPropagation&&c.stopEvent(t)}function b(e,t){var i={id:m(t),type:v(t),isPrimary:f(t),currentPos:y(t),currentTime:c.now()};var n=c.MouseTracker.havePointerEvents&&"touch"===i.type&&c.Browser.vendor!==c.BROWSERS.IE;var o={originalEvent:t,eventType:"pointerdown",pointerType:i.type,isEmulated:!1};z(e,o);N(e,o,i,t.button);o.preventDefault&&!o.defaultPrevented&&c.cancelEvent(t);o.stopPropagation&&c.stopEvent(t);o.shouldCapture&&(n?L(e,i,!0):function(e,t){var i;if(c.MouseTracker.havePointerCapture)if(c.MouseTracker.havePointerEvents)try{e.element.setPointerCapture(t.id)}catch(e){c.console.warn("setPointerCapture() called on invalid pointer ID");return}else e.element.setCapture(!0);else{i=p(e,c.MouseTracker.havePointerEvents?"pointerevent":t.type);r&&s(window.top)&&c.addEvent(window.top,i.upName,i.upHandler,!0);c.addEvent(c.MouseTracker.captureElement,i.upName,i.upHandler,!0);c.addEvent(c.MouseTracker.captureElement,i.moveName,i.moveHandler,!0)}L(e,t,!0)}(e,i))}function D(e,t){I(e,t)}function I(e,t){var i;var n={originalEvent:t,eventType:"pointerup",pointerType:(i={id:m(t),type:v(t),isPrimary:f(t),currentPos:y(t),currentTime:c.now()}).type,isEmulated:!1};z(e,n);A(e,n,i,t.button);n.preventDefault&&!n.defaultPrevented&&c.cancelEvent(t);n.stopPropagation&&c.stopEvent(t);n.shouldReleaseCapture&&(t.target===e.element?g(e,i):L(e,i,!1))}function O(e,t){k(e,t)}function k(e,t){var i={id:m(t),type:v(t),isPrimary:f(t),currentPos:y(t),currentTime:c.now()};var n={originalEvent:t,eventType:"pointermove",pointerType:i.type,isEmulated:!1};z(e,n);W(e,n,i);n.preventDefault&&!n.defaultPrevented&&c.cancelEvent(t);n.stopPropagation&&c.stopEvent(t)}function B(e,t){t.speed=0;t.direction=0;t.contactPos=t.currentPos;t.contactTime=t.currentTime;t.lastPos=t.currentPos;t.lastTime=t.currentTime;return e.add(t)}function H(e,t,i){var n;var o=t.getById(i.id);if(o){if(o.captured){c.console.warn("stopTrackingPointer() called on captured pointer");g(e,o)}t.removeContact();n=t.removeById(i.id)}else n=t.getLength();return n}function z(e,t){t.eventSource=e;t.eventPhase=t.originalEvent&&void 0!==t.originalEvent.eventPhase?t.originalEvent.eventPhase:0;t.defaultPrevented=c.eventIsCanceled(t.originalEvent);t.shouldCapture=!1;t.shouldReleaseCapture=!1;t.userData=e.userData;!function(e,t){switch(t.eventType){case"pointermove":t.isStoppable=!0;t.isCancelable=!0;t.preventDefault=!1;t.preventGesture=!e.hasGestureHandlers;t.stopPropagation=!1;break;case"pointerover":case"pointerout":case"contextmenu":case"keydown":case"keyup":case"keypress":t.isStoppable=!0;t.isCancelable=!0;t.preventDefault=!1;t.preventGesture=!1;t.stopPropagation=!1;break;case"pointerdown":case"pointerup":t.isStoppable=!0;t.isCancelable=!0;t.preventDefault=!1;t.preventGesture=!e.hasGestureHandlers;t.stopPropagation=!1;break;case"wheel":t.isStoppable=!0;t.isCancelable=!0;t.preventDefault=!1;t.preventGesture=!e.hasScrollHandler;t.stopPropagation=!1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":t.isStoppable=!0;t.isCancelable=!1;t.preventDefault=!1;t.preventGesture=!1;t.stopPropagation=!1;break;case"click":t.isStoppable=!0;t.isCancelable=!0;t.preventDefault=!!e.clickHandler;t.preventGesture=!1;t.stopPropagation=!1;break;case"dblclick":t.isStoppable=!0;t.isCancelable=!0;t.preventDefault=!!e.dblClickHandler;t.preventGesture=!1;t.stopPropagation=!1;break;default:t.isStoppable=!1;t.isCancelable=!1;t.preventDefault=!1;t.preventGesture=!1;t.stopPropagation=!1}}(e,t);e.preProcessEventHandler&&e.preProcessEventHandler(t)}function L(e,t,i){e=e.getActivePointersListByType(t.type);t=e.getById(t.id);if(t){if(i&&!t.captured){t.captured=!0;e.captureCount++}else if(!i&&t.captured){t.captured=!1;e.captureCount--;if(e.captureCount<0){e.captureCount=0;c.console.warn("updatePointerCaptured() - pointsList.captureCount went negative")}}}else c.console.warn("updatePointerCaptured() called on untracked pointer")}function F(e,t,i){var n,o=e.getActivePointersListByType(i.type);if(n=o.getById(i.id)){n.insideElement=!0;n.lastPos=n.currentPos;n.lastTime=n.currentTime;n.currentPos=i.currentPos;n.currentTime=i.currentTime;i=n}else{i.captured=!1;i.insideElementPressed=!1;i.insideElement=!0;B(o,i)}e.enterHandler&&e.enterHandler({eventSource:e,pointerType:i.type,position:T(i.currentPos,e.element),buttons:o.buttons,pointers:e.getActivePointerCount(),insideElementPressed:i.insideElementPressed,buttonDownAny:0!==o.buttons,isTouchEvent:"touch"===i.type,originalEvent:t.originalEvent,userData:e.userData})}function M(e,t,i){var n,o=e.getActivePointersListByType(i.type);if(n=o.getById(i.id)){if(n.captured){n.insideElement=!1;n.lastPos=n.currentPos;n.lastTime=n.currentTime;n.currentPos=i.currentPos;n.currentTime=i.currentTime}else H(e,o,n);i=n}else{i.captured=!1;i.insideElementPressed=!1}if(e.leaveHandler||e.exitHandler){t={eventSource:e,pointerType:i.type,position:i.currentPos&&T(i.currentPos,e.element),buttons:o.buttons,pointers:e.getActivePointerCount(),insideElementPressed:i.insideElementPressed,buttonDownAny:0!==o.buttons,isTouchEvent:"touch"===i.type,originalEvent:t.originalEvent,userData:e.userData};e.leaveHandler&&e.leaveHandler(t);e.exitHandler&&e.exitHandler(t)}}function N(e,t,i,n){var o,r=u[e.hash],s=e.getActivePointersListByType(i.type);void 0!==t.originalEvent.buttons?s.buttons=t.originalEvent.buttons:0===n?s.buttons|=1:1===n?s.buttons|=4:2===n?s.buttons|=2:3===n?s.buttons|=8:4===n?s.buttons|=16:5===n&&(s.buttons|=32);if(0===n){if(o=s.getById(i.id)){o.insideElementPressed=!0;o.insideElement=!0;o.originalTarget=t.originalEvent.target;o.contactPos=i.currentPos;o.contactTime=i.currentTime;o.lastPos=o.currentPos;o.lastTime=o.currentTime;o.currentPos=i.currentPos;o.currentTime=i.currentTime;i=o}else{i.captured=!1;i.insideElementPressed=!0;i.insideElement=!0;i.originalTarget=t.originalEvent.target;B(s,i)}s.addContact();if(t.preventGesture||t.defaultPrevented){t.shouldCapture=!1;t.shouldReleaseCapture=!1}else{t.shouldCapture=!0;t.shouldReleaseCapture=!1;t.preventDefault=!0;(e.dragHandler||e.dragEndHandler||e.pinchHandler)&&c.MouseTracker.gesturePointVelocityTracker.addPoint(e,i);if(1===s.contacts)e.pressHandler&&!t.preventGesture&&e.pressHandler({eventSource:e,pointerType:i.type,position:T(i.contactPos,e.element),buttons:s.buttons,isTouchEvent:"touch"===i.type,originalEvent:t.originalEvent,userData:e.userData});else if(2===s.contacts&&e.pinchHandler&&"touch"===i.type){r.pinchGPoints=s.asArray();r.lastPinchDist=r.currentPinchDist=r.pinchGPoints[0].currentPos.distanceTo(r.pinchGPoints[1].currentPos);r.lastPinchCenter=r.currentPinchCenter=x(r.pinchGPoints[0].currentPos,r.pinchGPoints[1].currentPos)}}}else{t.shouldCapture=!1;t.shouldReleaseCapture=!1;if(e.nonPrimaryPressHandler&&!t.preventGesture&&!t.defaultPrevented){t.preventDefault=!0;e.nonPrimaryPressHandler({eventSource:e,pointerType:i.type,position:T(i.currentPos,e.element),button:n,buttons:s.buttons,isTouchEvent:"touch"===i.type,originalEvent:t.originalEvent,userData:e.userData})}}}function A(e,t,i,n){var o,r,s,a=u[e.hash],l=e.getActivePointersListByType(i.type),h=!1;void 0!==t.originalEvent.buttons?l.buttons=t.originalEvent.buttons:0===n?l.buttons^=-2:1===n?l.buttons^=-5:2===n?l.buttons^=-3:3===n?l.buttons^=-9:4===n?l.buttons^=-17:5===n&&(l.buttons^=-33);t.shouldCapture=!1;if(0===n){if(r=l.getById(i.id)){l.removeContact();r.captured&&(h=!0);r.lastPos=r.currentPos;r.lastTime=r.currentTime;r.currentPos=i.currentPos;r.currentTime=i.currentTime;r.insideElement||H(e,l,r);o=r.currentPos;s=r.currentTime}else{i.captured=!1;i.insideElementPressed=!1;i.insideElement=!0;B(l,i);r=i}if(!t.preventGesture&&!t.defaultPrevented)if(h){t.shouldReleaseCapture=!0;t.preventDefault=!0;(e.dragHandler||e.dragEndHandler||e.pinchHandler)&&c.MouseTracker.gesturePointVelocityTracker.removePoint(e,r);if(0===l.contacts){e.releaseHandler&&o&&e.releaseHandler({eventSource:e,pointerType:r.type,position:T(o,e.element),buttons:l.buttons,insideElementPressed:r.insideElementPressed,insideElementReleased:r.insideElement,isTouchEvent:"touch"===r.type,originalEvent:t.originalEvent,userData:e.userData});e.dragEndHandler&&a.sentDragEvent&&e.dragEndHandler({eventSource:e,pointerType:r.type,position:T(r.currentPos,e.element),speed:r.speed,direction:r.direction,shift:t.originalEvent.shiftKey,isTouchEvent:"touch"===r.type,originalEvent:t.originalEvent,userData:e.userData});a.sentDragEvent=!1;if((e.clickHandler||e.dblClickHandler)&&r.insideElement){s=s-r.contactTime<=e.clickTimeThreshold&&r.contactPos.distanceTo(o)<=e.clickDistThreshold;e.clickHandler&&e.clickHandler({eventSource:e,pointerType:r.type,position:T(r.currentPos,e.element),quick:s,shift:t.originalEvent.shiftKey,isTouchEvent:"touch"===r.type,originalEvent:t.originalEvent,originalTarget:r.originalTarget,userData:e.userData});if(e.dblClickHandler&&s){l.clicks++;if(1===l.clicks){a.lastClickPos=o;a.dblClickTimeOut=setTimeout(function(){l.clicks=0},e.dblClickTimeThreshold)}else if(2===l.clicks){clearTimeout(a.dblClickTimeOut);l.clicks=0;a.lastClickPos.distanceTo(o)<=e.dblClickDistThreshold&&e.dblClickHandler({eventSource:e,pointerType:r.type,position:T(r.currentPos,e.element),shift:t.originalEvent.shiftKey,isTouchEvent:"touch"===r.type,originalEvent:t.originalEvent,userData:e.userData});a.lastClickPos=null}}}}else if(2===l.contacts&&e.pinchHandler&&"touch"===r.type){a.pinchGPoints=l.asArray();a.lastPinchDist=a.currentPinchDist=a.pinchGPoints[0].currentPos.distanceTo(a.pinchGPoints[1].currentPos);a.lastPinchCenter=a.currentPinchCenter=x(a.pinchGPoints[0].currentPos,a.pinchGPoints[1].currentPos)}}else{t.shouldReleaseCapture=!1;if(e.releaseHandler&&o){e.releaseHandler({eventSource:e,pointerType:r.type,position:T(o,e.element),buttons:l.buttons,insideElementPressed:r.insideElementPressed,insideElementReleased:r.insideElement,isTouchEvent:"touch"===r.type,originalEvent:t.originalEvent,userData:e.userData});t.preventDefault=!0}}}else{t.shouldReleaseCapture=!1;if(e.nonPrimaryReleaseHandler&&!t.preventGesture&&!t.defaultPrevented){t.preventDefault=!0;e.nonPrimaryReleaseHandler({eventSource:e,pointerType:i.type,position:T(i.currentPos,e.element),button:n,buttons:l.buttons,isTouchEvent:"touch"===i.type,originalEvent:t.originalEvent,userData:e.userData})}}}function W(n,o,r){var e,t,i=u[n.hash],s=n.getActivePointersListByType(r.type);void 0!==o.originalEvent.buttons&&(s.buttons=o.originalEvent.buttons);if(e=s.getById(r.id)){e.lastPos=e.currentPos;e.lastTime=e.currentTime;e.currentPos=r.currentPos;e.currentTime=r.currentTime;o.shouldCapture=!1;o.shouldReleaseCapture=!1;if(n.stopHandler&&"mouse"===r.type){clearTimeout(n.stopTimeOut);n.stopTimeOut=setTimeout(function(){e=n,t=o.originalEvent,i=r.type,e.stopHandler&&e.stopHandler({eventSource:e,pointerType:i,position:w(t,e.element),buttons:e.getActivePointersListByType(i).buttons,isTouchEvent:"touch"===i,originalEvent:t,userData:e.userData});var e,t,i},n.stopDelay)}if(0===s.contacts)n.moveHandler&&n.moveHandler({eventSource:n,pointerType:r.type,position:T(r.currentPos,n.element),buttons:s.buttons,isTouchEvent:"touch"===r.type,originalEvent:o.originalEvent,userData:n.userData});else if(1===s.contacts){if(n.moveHandler){e=s.asArray()[0];n.moveHandler({eventSource:n,pointerType:e.type,position:T(e.currentPos,n.element),buttons:s.buttons,isTouchEvent:"touch"===e.type,originalEvent:o.originalEvent,userData:n.userData})}if(n.dragHandler&&!o.preventGesture&&!o.defaultPrevented){t=(e=s.asArray()[0]).currentPos.minus(e.lastPos);n.dragHandler({eventSource:n,pointerType:e.type,position:T(e.currentPos,n.element),buttons:s.buttons,delta:t,speed:e.speed,direction:e.direction,shift:o.originalEvent.shiftKey,isTouchEvent:"touch"===e.type,originalEvent:o.originalEvent,userData:n.userData});o.preventDefault=!0;i.sentDragEvent=!0}}else if(2===s.contacts){if(n.moveHandler){e=s.asArray();n.moveHandler({eventSource:n,pointerType:e[0].type,position:T(x(e[0].currentPos,e[1].currentPos),n.element),buttons:s.buttons,isTouchEvent:"touch"===e[0].type,originalEvent:o.originalEvent,userData:n.userData})}if(n.pinchHandler&&"touch"===r.type&&!o.preventGesture&&!o.defaultPrevented&&(t=i.pinchGPoints[0].currentPos.distanceTo(i.pinchGPoints[1].currentPos))!==i.currentPinchDist){i.lastPinchDist=i.currentPinchDist;i.currentPinchDist=t;i.lastPinchCenter=i.currentPinchCenter;i.currentPinchCenter=x(i.pinchGPoints[0].currentPos,i.pinchGPoints[1].currentPos);n.pinchHandler({eventSource:n,pointerType:"touch",gesturePoints:i.pinchGPoints,lastCenter:T(i.lastPinchCenter,n.element),center:T(i.currentPinchCenter,n.element),lastDistance:i.lastPinchDist,distance:i.currentPinchDist,shift:o.originalEvent.shiftKey,originalEvent:o.originalEvent,userData:n.userData});o.preventDefault=!0}}}}function U(e,t,i){var n=e.getActivePointersListByType(i.type);(i=n.getById(i.id))&&H(e,n,i)}}(OpenSeadragon);!function(o){o.ControlAnchor={NONE:0,TOP_LEFT:1,TOP_RIGHT:2,BOTTOM_RIGHT:3,BOTTOM_LEFT:4,ABSOLUTE:5};o.Control=function(e,t,i){var n=e.parentNode;if("number"==typeof t){o.console.error("Passing an anchor directly into the OpenSeadragon.Control constructor is deprecated; please use an options object instead.  Support for this deprecated variant is scheduled for removal in December 2013");t={anchor:t}}t.attachToViewer=void 0===t.attachToViewer||t.attachToViewer;this.autoFade=void 0===t.autoFade||t.autoFade;this.element=e;this.anchor=t.anchor;this.container=i;if(this.anchor===o.ControlAnchor.ABSOLUTE){this.wrapper=o.makeNeutralElement("div");this.wrapper.style.position="absolute";this.wrapper.style.top="number"==typeof t.top?t.top+"px":t.top;this.wrapper.style.left="number"==typeof t.left?t.left+"px":t.left;this.wrapper.style.height="number"==typeof t.height?t.height+"px":t.height;this.wrapper.style.width="number"==typeof t.width?t.width+"px":t.width;this.wrapper.style.margin="0px";this.wrapper.style.padding="0px";this.element.style.position="relative";this.element.style.top="0px";this.element.style.left="0px";this.element.style.height="100%";this.element.style.width="100%"}else{this.wrapper=o.makeNeutralElement("div");this.wrapper.style.display="inline-block";this.anchor===o.ControlAnchor.NONE&&(this.wrapper.style.width=this.wrapper.style.height="100%")}this.wrapper.appendChild(this.element);t.attachToViewer?this.anchor===o.ControlAnchor.TOP_RIGHT||this.anchor===o.ControlAnchor.BOTTOM_RIGHT?this.container.insertBefore(this.wrapper,this.container.firstChild):this.container.appendChild(this.wrapper):n.appendChild(this.wrapper)};o.Control.prototype={destroy:function(){this.wrapper.removeChild(this.element);this.anchor!==o.ControlAnchor.NONE&&this.container.removeChild(this.wrapper)},isVisible:function(){return"none"!==this.wrapper.style.display},setVisible:function(e){this.wrapper.style.display=e?this.anchor===o.ControlAnchor.ABSOLUTE?"block":"inline-block":"none"},setOpacity:function(e){this.element[o.SIGNAL]&&o.Browser.vendor===o.BROWSERS.IE?o.setElementOpacity(this.element,e,!0):o.setElementOpacity(this.wrapper,e,!0)}}}(OpenSeadragon);!function(o){o.ControlDock=function(e){var t,i,n=["topleft","topright","bottomright","bottomleft"];o.extend(!0,this,{id:"controldock-"+o.now()+"-"+Math.floor(1e6*Math.random()),container:o.makeNeutralElement("div"),controls:[]},e);this.container.onsubmit=function(){return!1};if(this.element){this.element=o.getElement(this.element);this.element.appendChild(this.container);this.element.style.position="relative";this.container.style.width="100%";this.container.style.height="100%"}for(i=0;i<n.length;i++){this.controls[t=n[i]]=o.makeNeutralElement("div");this.controls[t].style.position="absolute";t.match("left")&&(this.controls[t].style.left="0px");t.match("right")&&(this.controls[t].style.right="0px");t.match("top")&&(this.controls[t].style.top="0px");t.match("bottom")&&(this.controls[t].style.bottom="0px")}this.container.appendChild(this.controls.topleft);this.container.appendChild(this.controls.topright);this.container.appendChild(this.controls.bottomright);this.container.appendChild(this.controls.bottomleft)};o.ControlDock.prototype={addControl:function(e,t){var i=null;if(!(0<=n(this,e=o.getElement(e)))){switch(t.anchor){case o.ControlAnchor.TOP_RIGHT:i=this.controls.topright;e.style.position="relative";e.style.paddingRight="0px";e.style.paddingTop="0px";break;case o.ControlAnchor.BOTTOM_RIGHT:i=this.controls.bottomright;e.style.position="relative";e.style.paddingRight="0px";e.style.paddingBottom="0px";break;case o.ControlAnchor.BOTTOM_LEFT:i=this.controls.bottomleft;e.style.position="relative";e.style.paddingLeft="0px";e.style.paddingBottom="0px";break;case o.ControlAnchor.TOP_LEFT:i=this.controls.topleft;e.style.position="relative";e.style.paddingLeft="0px";e.style.paddingTop="0px";break;case o.ControlAnchor.ABSOLUTE:i=this.container;e.style.margin="0px";e.style.padding="0px";break;default:case o.ControlAnchor.NONE:i=this.container;e.style.margin="0px";e.style.padding="0px"}this.controls.push(new o.Control(e,t,i));e.style.display="inline-block"}},removeControl:function(e){e=n(this,e=o.getElement(e));if(0<=e){this.controls[e].destroy();this.controls.splice(e,1)}return this},clearControls:function(){for(;0<this.controls.length;)this.controls.pop().destroy();return this},areControlsEnabled:function(){var e;for(e=this.controls.length-1;0<=e;e--)if(this.controls[e].isVisible())return!0;return!1},setControlsEnabled:function(e){var t;for(t=this.controls.length-1;0<=t;t--)this.controls[t].setVisible(e);return this}};function n(e,t){var i,n=e.controls;for(i=n.length-1;0<=i;i--)if(n[i].element===t)return i;return-1}}(OpenSeadragon);!function(e){e.Placement=e.freezeObject({CENTER:0,TOP_LEFT:1,TOP:2,TOP_RIGHT:3,RIGHT:4,BOTTOM_RIGHT:5,BOTTOM:6,BOTTOM_LEFT:7,LEFT:8,properties:{0:{isLeft:!1,isHorizontallyCentered:!0,isRight:!1,isTop:!1,isVerticallyCentered:!0,isBottom:!1},1:{isLeft:!0,isHorizontallyCentered:!1,isRight:!1,isTop:!0,isVerticallyCentered:!1,isBottom:!1},2:{isLeft:!1,isHorizontallyCentered:!0,isRight:!1,isTop:!0,isVerticallyCentered:!1,isBottom:!1},3:{isLeft:!1,isHorizontallyCentered:!1,isRight:!0,isTop:!0,isVerticallyCentered:!1,isBottom:!1},4:{isLeft:!1,isHorizontallyCentered:!1,isRight:!0,isTop:!1,isVerticallyCentered:!0,isBottom:!1},5:{isLeft:!1,isHorizontallyCentered:!1,isRight:!0,isTop:!1,isVerticallyCentered:!1,isBottom:!0},6:{isLeft:!1,isHorizontallyCentered:!0,isRight:!1,isTop:!1,isVerticallyCentered:!1,isBottom:!0},7:{isLeft:!0,isHorizontallyCentered:!1,isRight:!1,isTop:!1,isVerticallyCentered:!1,isBottom:!0},8:{isLeft:!0,isHorizontallyCentered:!1,isRight:!1,isTop:!1,isVerticallyCentered:!0,isBottom:!1}}})}(OpenSeadragon);!function(m){var c={};var o=1;m.Viewer=function(e){var t,i=arguments,n=this;if((e=!m.isPlainObject(e)?{id:i[0],xmlPath:1<i.length?i[1]:void 0,prefixUrl:2<i.length?i[2]:void 0,controls:3<i.length?i[3]:void 0,overlays:4<i.length?i[4]:void 0}:e).config){m.extend(!0,e,e.config);delete e.config}m.extend(!0,this,{id:e.id,hash:e.hash||o++,initialPage:0,element:null,container:null,canvas:null,overlays:[],overlaysContainer:null,previousBody:[],customControls:[],source:null,drawer:null,world:null,viewport:null,navigator:null,collectionViewport:null,collectionDrawer:null,navImages:null,buttons:null,profiler:null},m.DEFAULT_SETTINGS,e);if(void 0===this.hash)throw new Error("A hash must be defined, either by specifying options.id or options.hash.");void 0!==c[this.hash]&&m.console.warn("Hash "+this.hash+" has already been used.");c[this.hash]={fsBoundsDelta:new m.Point(1,1),prevContainerSize:null,animating:!1,forceRedraw:!1,mouseInside:!1,group:null,zooming:!1,zoomFactor:null,lastZoomTime:null,fullPage:!1,onfullscreenchange:null};this._sequenceIndex=0;this._firstOpen=!0;this._updateRequestId=null;this._loadQueue=[];this.currentOverlays=[];this._updatePixelDensityRatioBind=null;this._lastScrollTime=m.now();m.EventSource.call(this);this.addHandler("open-failed",function(e){e=m.getString("Errors.OpenFailed",e.eventSource,e.message);n._showMessage(e)});m.ControlDock.call(this,e);this.xmlPath&&(this.tileSources=[this.xmlPath]);this.element=this.element||document.getElementById(this.id);this.canvas=m.makeNeutralElement("div");this.canvas.className="openseadragon-canvas";!function(e){e.width="100%";e.height="100%";e.overflow="hidden";e.position="absolute";e.top="0px";e.left="0px"}(this.canvas.style);m.setElementTouchActionNone(this.canvas);""!==e.tabIndex&&(this.canvas.tabIndex=void 0===e.tabIndex?0:e.tabIndex);this.container.className="openseadragon-container";!function(e){e.width="100%";e.height="100%";e.position="relative";e.overflow="hidden";e.left="0px";e.top="0px";e.textAlign="left"}(this.container.style);m.setElementTouchActionNone(this.container);this.container.insertBefore(this.canvas,this.container.firstChild);this.element.appendChild(this.container);this.bodyWidth=document.body.style.width;this.bodyHeight=document.body.style.height;this.bodyOverflow=document.body.style.overflow;this.docOverflow=document.documentElement.style.overflow;this.innerTracker=new m.MouseTracker({userData:"Viewer.innerTracker",element:this.canvas,startDisabled:!this.mouseNavEnabled,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,dblClickTimeThreshold:this.dblClickTimeThreshold,dblClickDistThreshold:this.dblClickDistThreshold,contextMenuHandler:m.delegate(this,p),keyDownHandler:m.delegate(this,g),keyHandler:m.delegate(this,y),clickHandler:m.delegate(this,w),dblClickHandler:m.delegate(this,T),dragHandler:m.delegate(this,x),dragEndHandler:m.delegate(this,S),enterHandler:m.delegate(this,E),leaveHandler:m.delegate(this,P),pressHandler:m.delegate(this,_),releaseHandler:m.delegate(this,R),nonPrimaryPressHandler:m.delegate(this,C),nonPrimaryReleaseHandler:m.delegate(this,b),scrollHandler:m.delegate(this,I),pinchHandler:m.delegate(this,D)});this.outerTracker=new m.MouseTracker({userData:"Viewer.outerTracker",element:this.container,startDisabled:!this.mouseNavEnabled,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,dblClickTimeThreshold:this.dblClickTimeThreshold,dblClickDistThreshold:this.dblClickDistThreshold,enterHandler:m.delegate(this,O),leaveHandler:m.delegate(this,k)});this.toolbar&&(this.toolbar=new m.ControlDock({element:this.toolbar}));this.bindStandardControls();c[this.hash].prevContainerSize=s(this.container);this.world=new m.World({viewer:this});this.world.addHandler("add-item",function(e){n.source=n.world.getItemAt(0).source;c[n.hash].forceRedraw=!0;n._updateRequestId||(n._updateRequestId=a(n,B))});this.world.addHandler("remove-item",function(e){n.world.getItemCount()?n.source=n.world.getItemAt(0).source:n.source=null;c[n.hash].forceRedraw=!0});this.world.addHandler("metrics-change",function(e){n.viewport&&n.viewport._setContentBounds(n.world.getHomeBounds(),n.world.getContentFactor())});this.world.addHandler("item-index-change",function(e){n.source=n.world.getItemAt(0).source});this.viewport=new m.Viewport({containerSize:c[this.hash].prevContainerSize,springStiffness:this.springStiffness,animationTime:this.animationTime,minZoomImageRatio:this.minZoomImageRatio,maxZoomPixelRatio:this.maxZoomPixelRatio,visibilityRatio:this.visibilityRatio,wrapHorizontal:this.wrapHorizontal,wrapVertical:this.wrapVertical,defaultZoomLevel:this.defaultZoomLevel,minZoomLevel:this.minZoomLevel,maxZoomLevel:this.maxZoomLevel,viewer:this,degrees:this.degrees,flipped:this.flipped,navigatorRotate:this.navigatorRotate,homeFillsViewer:this.homeFillsViewer,margins:this.viewportMargins,silenceMultiImageWarnings:this.silenceMultiImageWarnings});this.viewport._setContentBounds(this.world.getHomeBounds(),this.world.getContentFactor());this.imageLoader=new m.ImageLoader({jobLimit:this.imageLoaderLimit,timeout:e.timeout});this.tileCache=new m.TileCache({maxImageCacheCount:this.maxImageCacheCount});this.drawer=new m.Drawer({viewer:this,viewport:this.viewport,element:this.canvas,debugGridColor:this.debugGridColor});this.overlaysContainer=m.makeNeutralElement("div");this.canvas.appendChild(this.overlaysContainer);if(!this.drawer.canRotate()){if(this.rotateLeft){t=this.buttonGroup.buttons.indexOf(this.rotateLeft);this.buttonGroup.buttons.splice(t,1);this.buttonGroup.element.removeChild(this.rotateLeft.element)}if(this.rotateRight){t=this.buttonGroup.buttons.indexOf(this.rotateRight);this.buttonGroup.buttons.splice(t,1);this.buttonGroup.element.removeChild(this.rotateRight.element)}}this._addUpdatePixelDensityRatioEvent();this.showNavigator&&(this.navigator=new m.Navigator({id:this.navigatorId,position:this.navigatorPosition,sizeRatio:this.navigatorSizeRatio,maintainSizeRatio:this.navigatorMaintainSizeRatio,top:this.navigatorTop,left:this.navigatorLeft,width:this.navigatorWidth,height:this.navigatorHeight,autoResize:this.navigatorAutoResize,autoFade:this.navigatorAutoFade,prefixUrl:this.prefixUrl,viewer:this,navigatorRotate:this.navigatorRotate,background:this.navigatorBackground,opacity:this.navigatorOpacity,borderColor:this.navigatorBorderColor,displayRegionColor:this.navigatorDisplayRegionColor,crossOriginPolicy:this.crossOriginPolicy}));this.sequenceMode&&this.bindSequenceControls();this.tileSources&&this.open(this.tileSources);for(t=0;t<this.customControls.length;t++)this.addControl(this.customControls[t].id,{anchor:this.customControls[t].anchor});m.requestAnimationFrame(function(){u(n)});void 0===this.imageSmoothingEnabled||this.imageSmoothingEnabled||this.drawer.setImageSmoothingEnabled(this.imageSmoothingEnabled);m._viewers.set(this.element,this)};m.extend(m.Viewer.prototype,m.EventSource.prototype,m.ControlDock.prototype,{isOpen:function(){return!!this.world.getItemCount()},openDzi:function(e){m.console.error("[Viewer.openDzi] this function is deprecated; use Viewer.open() instead.");return this.open(e)},openTileSource:function(e){m.console.error("[Viewer.openTileSource] this function is deprecated; use Viewer.open() instead.");return this.open(e)},get buttons(){m.console.warn("Viewer.buttons is deprecated; Please use Viewer.buttonGroup");return this.buttonGroup},open:function(i,e){var o=this;this.close();if(!i)return this;if(this.sequenceMode&&m.isArray(i)){if(this.referenceStrip){this.referenceStrip.destroy();this.referenceStrip=null}void 0===e||isNaN(e)||(this.initialPage=e);this.tileSources=i;this._sequenceIndex=Math.max(0,Math.min(this.tileSources.length-1,this.initialPage));if(this.tileSources.length){this.open(this.tileSources[this._sequenceIndex]);this.showReferenceStrip&&this.addReferenceStrip()}this._updateSequenceButtons(this._sequenceIndex);return this}if(!(i=!m.isArray(i)?[i]:i).length)return this;this._opening=!0;var n=i.length;var r=0;var s=0;var a;var l=function(){if(r+s===n)if(r){if(o._firstOpen||!o.preserveViewport){o.viewport.goHome(!0);o.viewport.update()}o._firstOpen=!1;var e=i[0];e.tileSource&&(e=e.tileSource);if(o.overlays&&!o.preserveOverlays)for(var t=0;t<o.overlays.length;t++)o.currentOverlays[t]=h(o,o.overlays[t]);o._drawOverlays();o._opening=!1;o.raiseEvent("open",{source:e})}else{o._opening=!1;o.raiseEvent("open-failed",a)}};for(var t=0;t<i.length;t++)!function(i){if(void 0!==(i=!m.isPlainObject(i)||!i.tileSource?{tileSource:i}:i).index){m.console.error("[Viewer.open] setting indexes here is not supported; use addTiledImage instead");delete i.index}void 0===i.collectionImmediately&&(i.collectionImmediately=!0);var n=i.success;i.success=function(e){r++;if(i.tileSource.overlays)for(var t=0;t<i.tileSource.overlays.length;t++)o.addOverlay(i.tileSource.overlays[t]);n&&n(e);l()};var t=i.error;i.error=function(e){s++;a=a||e;t&&t(e);l()};o.addTiledImage(i)}(i[t]);return this},close:function(){if(!c[this.hash])return this;this._opening=!1;this.navigator&&this.navigator.close();if(!this.preserveOverlays){this.clearOverlays();this.overlaysContainer.innerHTML=""}c[this.hash].animating=!1;this.world.removeAll();this.imageLoader.clear();this.raiseEvent("close");return this},destroy:function(){if(c[this.hash]){this._removeUpdatePixelDensityRatioEvent();this.close();this.clearOverlays();this.overlaysContainer.innerHTML="";if(this.referenceStrip){this.referenceStrip.destroy();this.referenceStrip=null}if(null!==this._updateRequestId){m.cancelAnimationFrame(this._updateRequestId);this._updateRequestId=null}this.drawer&&this.drawer.destroy();if(this.navigator){this.navigator.destroy();c[this.navigator.hash]=null;delete c[this.navigator.hash];this.navigator=null}this.removeAllHandlers();if(this.buttonGroup)this.buttonGroup.destroy();else if(this.customButtons)for(;this.customButtons.length;)this.customButtons.pop().destroy();this.paging&&this.paging.destroy();if(this.element)for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);this.container.onsubmit=null;this.clearControls();this.innerTracker&&this.innerTracker.destroy();this.outerTracker&&this.outerTracker.destroy();c[this.hash]=null;delete c[this.hash];this.canvas=null;this.container=null;m._viewers.delete(this.element);this.element=null}},isMouseNavEnabled:function(){return this.innerTracker.isTracking()},setMouseNavEnabled:function(e){this.innerTracker.setTracking(e);this.outerTracker.setTracking(e);this.raiseEvent("mouse-enabled",{enabled:e});return this},areControlsEnabled:function(){var e,t=this.controls.length;for(e=0;e<this.controls.length;e++)t=t&&this.controls[e].isVisible();return t},setControlsEnabled:function(e){(e?d:u)(this);this.raiseEvent("controls-enabled",{enabled:e});return this},setDebugMode:function(e){for(var t=0;t<this.world.getItemCount();t++)this.world.getItemAt(t).debugMode=e;this.debugMode=e;this.forceRedraw()},isFullPage:function(){return c[this.hash].fullPage},setFullPage:function(e){var t,i,n=document.body,o=n.style,r=document.documentElement.style,s=this;if(e===this.isFullPage())return this;var a={fullPage:e,preventDefaultAction:!1};this.raiseEvent("pre-full-page",a);if(a.preventDefaultAction)return this;if(e){this.elementSize=m.getElementSize(this.element);this.pageScroll=m.getPageScroll();this.elementMargin=this.element.style.margin;this.element.style.margin="0";this.elementPadding=this.element.style.padding;this.element.style.padding="0";this.bodyMargin=o.margin;this.docMargin=r.margin;o.margin="0";r.margin="0";this.bodyPadding=o.padding;this.docPadding=r.padding;o.padding="0";r.padding="0";this.bodyWidth=o.width;this.docWidth=r.width;o.width="100%";r.width="100%";this.bodyHeight=o.height;this.docHeight=r.height;o.height="100%";r.height="100%";this.bodyDisplay=o.display;o.display="block";this.previousBody=[];c[this.hash].prevElementParent=this.element.parentNode;c[this.hash].prevNextSibling=this.element.nextSibling;c[this.hash].prevElementWidth=this.element.style.width;c[this.hash].prevElementHeight=this.element.style.height;t=n.childNodes.length;for(i=0;i<t;i++){this.previousBody.push(n.childNodes[0]);n.removeChild(n.childNodes[0])}if(this.toolbar&&this.toolbar.element){this.toolbar.parentNode=this.toolbar.element.parentNode;this.toolbar.nextSibling=this.toolbar.element.nextSibling;n.appendChild(this.toolbar.element);m.addClass(this.toolbar.element,"fullpage")}m.addClass(this.element,"fullpage");n.appendChild(this.element);this.element.style.height="100vh";this.element.style.width="100vw";this.toolbar&&this.toolbar.element&&(this.element.style.height=m.getElementSize(this.element).y-m.getElementSize(this.toolbar.element).y+"px");c[this.hash].fullPage=!0;m.delegate(this,O)({})}else{this.element.style.margin=this.elementMargin;this.element.style.padding=this.elementPadding;o.margin=this.bodyMargin;r.margin=this.docMargin;o.padding=this.bodyPadding;r.padding=this.docPadding;o.width=this.bodyWidth;r.width=this.docWidth;o.height=this.bodyHeight;r.height=this.docHeight;o.display=this.bodyDisplay;n.removeChild(this.element);t=this.previousBody.length;for(i=0;i<t;i++)n.appendChild(this.previousBody.shift());m.removeClass(this.element,"fullpage");c[this.hash].prevElementParent.insertBefore(this.element,c[this.hash].prevNextSibling);if(this.toolbar&&this.toolbar.element){n.removeChild(this.toolbar.element);m.removeClass(this.toolbar.element,"fullpage");this.toolbar.parentNode.insertBefore(this.toolbar.element,this.toolbar.nextSibling);delete this.toolbar.parentNode;delete this.toolbar.nextSibling}this.element.style.width=c[this.hash].prevElementWidth;this.element.style.height=c[this.hash].prevElementHeight;var l=0;var h=function(){m.setPageScroll(s.pageScroll);var e=m.getPageScroll();++l<10&&(e.x!==s.pageScroll.x||e.y!==s.pageScroll.y)&&m.requestAnimationFrame(h)};m.requestAnimationFrame(h);c[this.hash].fullPage=!1;m.delegate(this,k)({})}this.navigator&&this.viewport&&this.navigator.update(this.viewport);this.raiseEvent("full-page",{fullPage:e});return this},setFullScreen:function(e){var t=this;if(!m.supportsFullScreen)return this.setFullPage(e);if(m.isFullScreen()===e)return this;var i={fullScreen:e,preventDefaultAction:!1};this.raiseEvent("pre-full-screen",i);if(i.preventDefaultAction)return this;if(e){this.setFullPage(!0);if(!this.isFullPage())return this;this.fullPageStyleWidth=this.element.style.width;this.fullPageStyleHeight=this.element.style.height;this.element.style.width="100%";this.element.style.height="100%";var n=function(){var e=m.isFullScreen();if(!e){m.removeEvent(document,m.fullScreenEventName,n);m.removeEvent(document,m.fullScreenErrorEventName,n);t.setFullPage(!1);if(t.isFullPage()){t.element.style.width=t.fullPageStyleWidth;t.element.style.height=t.fullPageStyleHeight}}t.navigator&&t.viewport&&setTimeout(function(){t.navigator.update(t.viewport)});t.raiseEvent("full-screen",{fullScreen:e})};m.addEvent(document,m.fullScreenEventName,n);m.addEvent(document,m.fullScreenErrorEventName,n);m.requestFullScreen(document.body)}else m.exitFullScreen();return this},isVisible:function(){return"hidden"!==this.container.style.visibility},isFullScreen:function(){return m.isFullScreen()&&this.isFullPage()},setVisible:function(e){this.container.style.visibility=e?"":"hidden";this.raiseEvent("visible",{visible:e});return this},addTiledImage:function(i){m.console.assert(i,"[Viewer.addTiledImage] options is required");m.console.assert(i.tileSource,"[Viewer.addTiledImage] options.tileSource is required");m.console.assert(!i.replace||-1<i.index&&i.index<this.world.getItemCount(),"[Viewer.addTiledImage] if options.replace is used, options.index must be a valid index in Viewer.world");var n=this;i.replace&&(i.replaceItem=n.world.getItemAt(i.index));this._hideMessage();void 0===i.placeholderFillStyle&&(i.placeholderFillStyle=this.placeholderFillStyle);void 0===i.opacity&&(i.opacity=this.opacity);void 0===i.preload&&(i.preload=this.preload);void 0===i.compositeOperation&&(i.compositeOperation=this.compositeOperation);void 0===i.crossOriginPolicy&&(i.crossOriginPolicy=(void 0!==i.tileSource.crossOriginPolicy?i.tileSource:this).crossOriginPolicy);void 0===i.ajaxWithCredentials&&(i.ajaxWithCredentials=this.ajaxWithCredentials);void 0===i.loadTilesWithAjax&&(i.loadTilesWithAjax=this.loadTilesWithAjax);void 0===i.ajaxHeaders||null===i.ajaxHeaders?i.ajaxHeaders=this.ajaxHeaders:m.isPlainObject(i.ajaxHeaders)&&m.isPlainObject(this.ajaxHeaders)&&(i.ajaxHeaders=m.extend({},this.ajaxHeaders,i.ajaxHeaders));var o={options:i};function t(e){for(var t=0;t<n._loadQueue.length;t++)if(n._loadQueue[t]===o){n._loadQueue.splice(t,1);break}0===n._loadQueue.length&&r(o);n.raiseEvent("add-item-failed",e);i.error&&i.error(e)}function r(e){if(n.collectionMode){n.world.arrange({immediately:e.options.collectionImmediately,rows:n.collectionRows,columns:n.collectionColumns,layout:n.collectionLayout,tileSize:n.collectionTileSize,tileMargin:n.collectionTileMargin});n.world.setAutoRefigureSizes(!0)}}if(m.isArray(i.tileSource))setTimeout(function(){t({message:"[Viewer.addTiledImage] Sequences can not be added; add them one at a time instead.",source:i.tileSource,options:i})});else{this._loadQueue.push(o);!function(i,n,o,r,s){var a=i;if("string"===m.type(n))if(n.match(/^\s*<.*>\s*$/))n=m.parseXml(n);else if(n.match(/^\s*[{[].*[}\]]\s*$/))try{var e=m.parseJSON(n);n=e}catch(e){}function l(e,t){if(e.ready)r(e);else{e.addHandler("ready",function(){r(e)});e.addHandler("open-failed",function(e){s({message:e.message,source:t})})}}setTimeout(function(){if("string"===m.type(n))(n=new m.TileSource({url:n,crossOriginPolicy:(void 0!==o.crossOriginPolicy?o:i).crossOriginPolicy,ajaxWithCredentials:i.ajaxWithCredentials,ajaxHeaders:o.ajaxHeaders||i.ajaxHeaders,splitHashDataForPost:i.splitHashDataForPost,useCanvas:i.useCanvas,success:function(e){r(e.tileSource)}})).addHandler("open-failed",function(e){s(e)});else if(m.isPlainObject(n)||n.nodeType){void 0!==n.crossOriginPolicy||void 0===o.crossOriginPolicy&&void 0===i.crossOriginPolicy||(n.crossOriginPolicy=(void 0!==o.crossOriginPolicy?o:i).crossOriginPolicy);void 0===n.ajaxWithCredentials&&(n.ajaxWithCredentials=i.ajaxWithCredentials);void 0===n.useCanvas&&(n.useCanvas=i.useCanvas);if(m.isFunction(n.getTileUrl)){var e=new m.TileSource(n);e.getTileUrl=n.getTileUrl;r(e)}else{var t=m.TileSource.determineType(a,n);if(t){e=t.prototype.configure.apply(a,[n]);l(new t(e),n)}else s({message:"Unable to load TileSource",source:n})}}else l(n,n)})}(this,i.tileSource,i,function(e){o.tileSource=e;s()},function(e){e.options=i;t(e);s()})}function s(){var e,t;for(;n._loadQueue.length&&(e=n._loadQueue[0]).tileSource;){n._loadQueue.splice(0,1);if(e.options.replace){var i=n.world.getIndexOfItem(e.options.replaceItem);-1!==i&&(e.options.index=i);n.world.removeItem(e.options.replaceItem)}t=new m.TiledImage({viewer:n,source:e.tileSource,viewport:n.viewport,drawer:n.drawer,tileCache:n.tileCache,imageLoader:n.imageLoader,x:e.options.x,y:e.options.y,width:e.options.width,height:e.options.height,fitBounds:e.options.fitBounds,fitBoundsPlacement:e.options.fitBoundsPlacement,clip:e.options.clip,placeholderFillStyle:e.options.placeholderFillStyle,opacity:e.options.opacity,preload:e.options.preload,degrees:e.options.degrees,flipped:e.options.flipped,compositeOperation:e.options.compositeOperation,springStiffness:n.springStiffness,animationTime:n.animationTime,minZoomImageRatio:n.minZoomImageRatio,wrapHorizontal:n.wrapHorizontal,wrapVertical:n.wrapVertical,immediateRender:n.immediateRender,blendTime:n.blendTime,alwaysBlend:n.alwaysBlend,minPixelRatio:n.minPixelRatio,smoothTileEdgesMinZoom:n.smoothTileEdgesMinZoom,iOSDevice:n.iOSDevice,crossOriginPolicy:e.options.crossOriginPolicy,ajaxWithCredentials:e.options.ajaxWithCredentials,loadTilesWithAjax:e.options.loadTilesWithAjax,ajaxHeaders:e.options.ajaxHeaders,debugMode:n.debugMode,subPixelRoundingForTransparency:n.subPixelRoundingForTransparency});n.collectionMode&&n.world.setAutoRefigureSizes(!1);if(n.navigator){i=m.extend({},e.options,{replace:!1,originalTiledImage:t,tileSource:e.tileSource});n.navigator.addTiledImage(i)}n.world.addItem(t,{index:e.options.index});0===n._loadQueue.length&&r(e);1!==n.world.getItemCount()||n.preserveViewport||n.viewport.goHome(!0);e.options.success&&e.options.success({item:t})}}},addSimpleImage:function(e){m.console.assert(e,"[Viewer.addSimpleImage] options is required");m.console.assert(e.url,"[Viewer.addSimpleImage] options.url is required");e=m.extend({},e,{tileSource:{type:"image",url:e.url}});delete e.url;this.addTiledImage(e)},addLayer:function(t){var i=this;m.console.error("[Viewer.addLayer] this function is deprecated; use Viewer.addTiledImage() instead.");var e=m.extend({},t,{success:function(e){i.raiseEvent("add-layer",{options:t,drawer:e.item})},error:function(e){i.raiseEvent("add-layer-failed",e)}});this.addTiledImage(e);return this},getLayerAtLevel:function(e){m.console.error("[Viewer.getLayerAtLevel] this function is deprecated; use World.getItemAt() instead.");return this.world.getItemAt(e)},getLevelOfLayer:function(e){m.console.error("[Viewer.getLevelOfLayer] this function is deprecated; use World.getIndexOfItem() instead.");return this.world.getIndexOfItem(e)},getLayersCount:function(){m.console.error("[Viewer.getLayersCount] this function is deprecated; use World.getItemCount() instead.");return this.world.getItemCount()},setLayerLevel:function(e,t){m.console.error("[Viewer.setLayerLevel] this function is deprecated; use World.setItemIndex() instead.");return this.world.setItemIndex(e,t)},removeLayer:function(e){m.console.error("[Viewer.removeLayer] this function is deprecated; use World.removeItem() instead.");return this.world.removeItem(e)},forceRedraw:function(){c[this.hash].forceRedraw=!0;return this},bindSequenceControls:function(){var e=m.delegate(this,v),t=m.delegate(this,f),i=m.delegate(this,this.goToNextPage),n=m.delegate(this,this.goToPreviousPage),o=this.navImages,r=!0;if(this.showSequenceControl){(this.previousButton||this.nextButton)&&(r=!1);this.previousButton=new m.Button({element:this.previousButton?m.getElement(this.previousButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:m.getString("Tooltips.PreviousPage"),srcRest:H(this.prefixUrl,o.previous.REST),srcGroup:H(this.prefixUrl,o.previous.GROUP),srcHover:H(this.prefixUrl,o.previous.HOVER),srcDown:H(this.prefixUrl,o.previous.DOWN),onRelease:n,onFocus:e,onBlur:t});this.nextButton=new m.Button({element:this.nextButton?m.getElement(this.nextButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:m.getString("Tooltips.NextPage"),srcRest:H(this.prefixUrl,o.next.REST),srcGroup:H(this.prefixUrl,o.next.GROUP),srcHover:H(this.prefixUrl,o.next.HOVER),srcDown:H(this.prefixUrl,o.next.DOWN),onRelease:i,onFocus:e,onBlur:t});this.navPrevNextWrap||this.previousButton.disable();this.tileSources&&this.tileSources.length||this.nextButton.disable();if(r){this.paging=new m.ButtonGroup({buttons:[this.previousButton,this.nextButton],clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold});this.pagingControl=this.paging.element;this.toolbar?this.toolbar.addControl(this.pagingControl,{anchor:m.ControlAnchor.BOTTOM_RIGHT}):this.addControl(this.pagingControl,{anchor:this.sequenceControlAnchor||m.ControlAnchor.TOP_LEFT})}}return this},bindStandardControls:function(){var e=m.delegate(this,z),t=m.delegate(this,F),i=m.delegate(this,M),n=m.delegate(this,L),o=m.delegate(this,N),r=m.delegate(this,W),s=m.delegate(this,U),a=m.delegate(this,V),l=m.delegate(this,G),h=m.delegate(this,j),c=m.delegate(this,v),u=m.delegate(this,f),d=this.navImages,p=[],g=!0;if(this.showNavigationControl){(this.zoomInButton||this.zoomOutButton||this.homeButton||this.fullPageButton||this.rotateLeftButton||this.rotateRightButton||this.flipButton)&&(g=!1);if(this.showZoomControl){p.push(this.zoomInButton=new m.Button({element:this.zoomInButton?m.getElement(this.zoomInButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:m.getString("Tooltips.ZoomIn"),srcRest:H(this.prefixUrl,d.zoomIn.REST),srcGroup:H(this.prefixUrl,d.zoomIn.GROUP),srcHover:H(this.prefixUrl,d.zoomIn.HOVER),srcDown:H(this.prefixUrl,d.zoomIn.DOWN),onPress:e,onRelease:t,onClick:i,onEnter:e,onExit:t,onFocus:c,onBlur:u}));p.push(this.zoomOutButton=new m.Button({element:this.zoomOutButton?m.getElement(this.zoomOutButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:m.getString("Tooltips.ZoomOut"),srcRest:H(this.prefixUrl,d.zoomOut.REST),srcGroup:H(this.prefixUrl,d.zoomOut.GROUP),srcHover:H(this.prefixUrl,d.zoomOut.HOVER),srcDown:H(this.prefixUrl,d.zoomOut.DOWN),onPress:n,onRelease:t,onClick:o,onEnter:n,onExit:t,onFocus:c,onBlur:u}))}this.showHomeControl&&p.push(this.homeButton=new m.Button({element:this.homeButton?m.getElement(this.homeButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:m.getString("Tooltips.Home"),srcRest:H(this.prefixUrl,d.home.REST),srcGroup:H(this.prefixUrl,d.home.GROUP),srcHover:H(this.prefixUrl,d.home.HOVER),srcDown:H(this.prefixUrl,d.home.DOWN),onRelease:r,onFocus:c,onBlur:u}));this.showFullPageControl&&p.push(this.fullPageButton=new m.Button({element:this.fullPageButton?m.getElement(this.fullPageButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:m.getString("Tooltips.FullPage"),srcRest:H(this.prefixUrl,d.fullpage.REST),srcGroup:H(this.prefixUrl,d.fullpage.GROUP),srcHover:H(this.prefixUrl,d.fullpage.HOVER),srcDown:H(this.prefixUrl,d.fullpage.DOWN),onRelease:s,onFocus:c,onBlur:u}));if(this.showRotationControl){p.push(this.rotateLeftButton=new m.Button({element:this.rotateLeftButton?m.getElement(this.rotateLeftButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:m.getString("Tooltips.RotateLeft"),srcRest:H(this.prefixUrl,d.rotateleft.REST),srcGroup:H(this.prefixUrl,d.rotateleft.GROUP),srcHover:H(this.prefixUrl,d.rotateleft.HOVER),srcDown:H(this.prefixUrl,d.rotateleft.DOWN),onRelease:a,onFocus:c,onBlur:u}));p.push(this.rotateRightButton=new m.Button({element:this.rotateRightButton?m.getElement(this.rotateRightButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:m.getString("Tooltips.RotateRight"),srcRest:H(this.prefixUrl,d.rotateright.REST),srcGroup:H(this.prefixUrl,d.rotateright.GROUP),srcHover:H(this.prefixUrl,d.rotateright.HOVER),srcDown:H(this.prefixUrl,d.rotateright.DOWN),onRelease:l,onFocus:c,onBlur:u}))}this.showFlipControl&&p.push(this.flipButton=new m.Button({element:this.flipButton?m.getElement(this.flipButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:m.getString("Tooltips.Flip"),srcRest:H(this.prefixUrl,d.flip.REST),srcGroup:H(this.prefixUrl,d.flip.GROUP),srcHover:H(this.prefixUrl,d.flip.HOVER),srcDown:H(this.prefixUrl,d.flip.DOWN),onRelease:h,onFocus:c,onBlur:u}));if(g){this.buttonGroup=new m.ButtonGroup({buttons:p,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold});this.navControl=this.buttonGroup.element;this.addHandler("open",m.delegate(this,A));(this.toolbar||this).addControl(this.navControl,{anchor:this.navigationControlAnchor||m.ControlAnchor.TOP_LEFT})}else this.customButtons=p}return this},currentPage:function(){return this._sequenceIndex},goToPage:function(e){if(this.tileSources&&0<=e&&e<this.tileSources.length){this._sequenceIndex=e;this._updateSequenceButtons(e);this.open(this.tileSources[e]);this.referenceStrip&&this.referenceStrip.setFocus(e);this.raiseEvent("page",{page:e})}return this},addOverlay:function(e,t,i,n){i=m.isPlainObject(e)?e:{element:e,location:t,placement:i,onDraw:n};e=m.getElement(i.element);if(0<=r(this.currentOverlays,e))return this;n=h(this,i);this.currentOverlays.push(n);n.drawHTML(this.overlaysContainer,this.viewport);this.raiseEvent("add-overlay",{element:e,location:i.location,placement:i.placement});return this},updateOverlay:function(e,t,i){var n;e=m.getElement(e);if(0<=(n=r(this.currentOverlays,e))){this.currentOverlays[n].update(t,i);c[this.hash].forceRedraw=!0;this.raiseEvent("update-overlay",{element:e,location:t,placement:i})}return this},removeOverlay:function(e){var t;e=m.getElement(e);if(0<=(t=r(this.currentOverlays,e))){this.currentOverlays[t].destroy();this.currentOverlays.splice(t,1);c[this.hash].forceRedraw=!0;this.raiseEvent("remove-overlay",{element:e})}return this},clearOverlays:function(){for(;0<this.currentOverlays.length;)this.currentOverlays.pop().destroy();c[this.hash].forceRedraw=!0;this.raiseEvent("clear-overlay",{});return this},getOverlayById:function(e){e=m.getElement(e);return 0<=(e=r(this.currentOverlays,e))?this.currentOverlays[e]:null},_updateSequenceButtons:function(e){this.nextButton&&(this.tileSources&&this.tileSources.length-1!==e?this.nextButton.enable():this.navPrevNextWrap||this.nextButton.disable());this.previousButton&&(0<e?this.previousButton.enable():this.navPrevNextWrap||this.previousButton.disable())},_showMessage:function(e){this._hideMessage();var t=m.makeNeutralElement("div");t.appendChild(document.createTextNode(e));this.messageDiv=m.makeCenteredNode(t);m.addClass(this.messageDiv,"openseadragon-message");this.container.appendChild(this.messageDiv)},_hideMessage:function(){var e=this.messageDiv;if(e){e.parentNode.removeChild(e);delete this.messageDiv}},gestureSettingsByDeviceType:function(e){switch(e){case"mouse":return this.gestureSettingsMouse;case"touch":return this.gestureSettingsTouch;case"pen":return this.gestureSettingsPen;default:return this.gestureSettingsUnknown}},_drawOverlays:function(){var e,t=this.currentOverlays.length;for(e=0;e<t;e++)this.currentOverlays[e].drawHTML(this.overlaysContainer,this.viewport)},_cancelPendingImages:function(){this._loadQueue=[]},removeReferenceStrip:function(){this.showReferenceStrip=!1;if(this.referenceStrip){this.referenceStrip.destroy();this.referenceStrip=null}},addReferenceStrip:function(){this.showReferenceStrip=!0;if(this.sequenceMode){if(!this.referenceStrip&&this.tileSources.length&&1<this.tileSources.length){this.referenceStrip=new m.ReferenceStrip({id:this.referenceStripElement,position:this.referenceStripPosition,sizeRatio:this.referenceStripSizeRatio,scroll:this.referenceStripScroll,height:this.referenceStripHeight,width:this.referenceStripWidth,tileSources:this.tileSources,prefixUrl:this.prefixUrl,useCanvas:this.useCanvas,viewer:this});this.referenceStrip.setFocus(this._sequenceIndex)}}else m.console.warn('Attempting to display a reference strip while "sequenceMode" is off.')},_addUpdatePixelDensityRatioEvent:function(){this._updatePixelDensityRatioBind=this._updatePixelDensityRatio.bind(this);m.addEvent(window,"resize",this._updatePixelDensityRatioBind)},_removeUpdatePixelDensityRatioEvent:function(){m.removeEvent(window,"resize",this._updatePixelDensityRatioBind)},_updatePixelDensityRatio:function(){var e=m.pixelDensityRatio;var t=m.getCurrentPixelDensityRatio();if(e!==t){m.pixelDensityRatio=t;this.world.resetItems();this.forceRedraw()}},goToPreviousPage:function(){var e=this._sequenceIndex-1;this.navPrevNextWrap&&e<0&&(e+=this.tileSources.length);this.goToPage(e)},goToNextPage:function(){var e=this._sequenceIndex+1;this.navPrevNextWrap&&e>=this.tileSources.length&&(e=0);this.goToPage(e)},isAnimating:function(){return c[this.hash].animating}});function s(e){e=m.getElement(e);return new m.Point(0===e.clientWidth?1:e.clientWidth,0===e.clientHeight?1:e.clientHeight)}function h(e,t){if(t instanceof m.Overlay)return t;var i=null;if(t.element)i=m.getElement(t.element);else{var n=t.id||"openseadragon-overlay-"+Math.floor(1e7*Math.random());(i=m.getElement(t.id))||((i=document.createElement("a")).href="#/overlay/"+n);i.id=n;m.addClass(i,t.className||"openseadragon-overlay")}var o=t.location;var r=t.width;var s=t.height;if(!o){n=t.x;var a=t.y;if(void 0!==t.px){e=e.viewport.imageToViewportRectangle(new m.Rect(t.px,t.py,r||0,s||0));n=e.x;a=e.y;r=void 0!==r?e.width:void 0;s=void 0!==s?e.height:void 0}o=new m.Point(n,a)}a=t.placement;a&&"string"===m.type(a)&&(a=m.Placement[t.placement.toUpperCase()]);return new m.Overlay({element:i,location:o,placement:a,onDraw:t.onDraw,checkResize:t.checkResize,width:r,height:s,rotationMode:t.rotationMode})}function r(e,t){var i;for(i=e.length-1;0<=i;i--)if(e[i].element===t)return i;return-1}function a(e,t){return m.requestAnimationFrame(function(){t(e)})}function l(e){m.requestAnimationFrame(function(){!function(e){var t,i,n;if(e.controlsShouldFade){t=m.now();t=t-e.controlsFadeBeginTime;i=1-t/e.controlsFadeLength;i=Math.min(1,i);i=Math.max(0,i);for(n=e.controls.length-1;0<=n;n--)e.controls[n].autoFade&&e.controls[n].setOpacity(i);0<i&&l(e)}}(e)})}function u(e){if(e.autoHideControls){e.controlsShouldFade=!0;e.controlsFadeBeginTime=m.now()+e.controlsFadeDelay;window.setTimeout(function(){l(e)},e.controlsFadeDelay)}}function d(e){var t;e.controlsShouldFade=!1;for(t=e.controls.length-1;0<=t;t--)e.controls[t].setOpacity(1)}function v(){d(this)}function f(){u(this)}function p(e){var t={tracker:e.eventSource,position:e.position,originalEvent:e.originalEvent,preventDefault:e.preventDefault};this.raiseEvent("canvas-contextmenu",t);e.preventDefault=t.preventDefault}function g(e){var t={originalEvent:e.originalEvent,preventDefaultAction:!1,preventVerticalPan:e.preventVerticalPan||!this.panVertical,preventHorizontalPan:e.preventHorizontalPan||!this.panHorizontal};this.raiseEvent("canvas-key",t);if(t.preventDefaultAction||e.ctrl||e.alt||e.meta)e.preventDefault=!1;else switch(e.keyCode){case 38:if(!t.preventVerticalPan){e.shift?this.viewport.zoomBy(1.1):this.viewport.panBy(this.viewport.deltaPointsFromPixels(new m.Point(0,-this.pixelsPerArrowPress)));this.viewport.applyConstraints()}e.preventDefault=!0;break;case 40:if(!t.preventVerticalPan){e.shift?this.viewport.zoomBy(.9):this.viewport.panBy(this.viewport.deltaPointsFromPixels(new m.Point(0,this.pixelsPerArrowPress)));this.viewport.applyConstraints()}e.preventDefault=!0;break;case 37:if(!t.preventHorizontalPan){this.viewport.panBy(this.viewport.deltaPointsFromPixels(new m.Point(-this.pixelsPerArrowPress,0)));this.viewport.applyConstraints()}e.preventDefault=!0;break;case 39:if(!t.preventHorizontalPan){this.viewport.panBy(this.viewport.deltaPointsFromPixels(new m.Point(this.pixelsPerArrowPress,0)));this.viewport.applyConstraints()}e.preventDefault=!0;break;default:e.preventDefault=!1}}function y(e){var t={originalEvent:e.originalEvent,preventDefaultAction:!1,preventVerticalPan:e.preventVerticalPan||!this.panVertical,preventHorizontalPan:e.preventHorizontalPan||!this.panHorizontal};this.raiseEvent("canvas-key",t);if(t.preventDefaultAction||e.ctrl||e.alt||e.meta)e.preventDefault=!1;else switch(e.keyCode){case 43:case 61:this.viewport.zoomBy(1.1);this.viewport.applyConstraints();e.preventDefault=!0;break;case 45:this.viewport.zoomBy(.9);this.viewport.applyConstraints();e.preventDefault=!0;break;case 48:this.viewport.goHome();this.viewport.applyConstraints();e.preventDefault=!0;break;case 119:case 87:if(!t.preventVerticalPan){e.shift?this.viewport.zoomBy(1.1):this.viewport.panBy(this.viewport.deltaPointsFromPixels(new m.Point(0,-40)));this.viewport.applyConstraints()}e.preventDefault=!0;break;case 115:case 83:if(!t.preventVerticalPan){e.shift?this.viewport.zoomBy(.9):this.viewport.panBy(this.viewport.deltaPointsFromPixels(new m.Point(0,40)));this.viewport.applyConstraints()}e.preventDefault=!0;break;case 97:if(!t.preventHorizontalPan){this.viewport.panBy(this.viewport.deltaPointsFromPixels(new m.Point(-40,0)));this.viewport.applyConstraints()}e.preventDefault=!0;break;case 100:if(!t.preventHorizontalPan){this.viewport.panBy(this.viewport.deltaPointsFromPixels(new m.Point(40,0)));this.viewport.applyConstraints()}e.preventDefault=!0;break;case 114:this.viewport.flipped?this.viewport.setRotation(m.positiveModulo(this.viewport.degrees-this.rotationIncrement,360)):this.viewport.setRotation(m.positiveModulo(this.viewport.degrees+this.rotationIncrement,360));this.viewport.applyConstraints();e.preventDefault=!0;break;case 82:this.viewport.flipped?this.viewport.setRotation(m.positiveModulo(this.viewport.degrees+this.rotationIncrement,360)):this.viewport.setRotation(m.positiveModulo(this.viewport.degrees-this.rotationIncrement,360));this.viewport.applyConstraints();e.preventDefault=!0;break;case 102:this.viewport.toggleFlip();e.preventDefault=!0;break;case 106:this.goToPreviousPage();break;case 107:this.goToNextPage();break;default:e.preventDefault=!1}}function w(e){var t;document.activeElement===this.canvas||this.canvas.focus();this.viewport.flipped&&(e.position.x=this.viewport.getContainerSize().x-e.position.x);var i={tracker:e.eventSource,position:e.position,quick:e.quick,shift:e.shift,originalEvent:e.originalEvent,originalTarget:e.originalTarget,preventDefaultAction:!1};this.raiseEvent("canvas-click",i);if(!i.preventDefaultAction&&this.viewport&&e.quick&&(t=this.gestureSettingsByDeviceType(e.pointerType)).clickToZoom){this.viewport.zoomBy(e.shift?1/this.zoomPerClick:this.zoomPerClick,t.zoomToRefPoint?this.viewport.pointFromPixel(e.position,!0):null);this.viewport.applyConstraints()}}function T(e){var t;var i={tracker:e.eventSource,position:e.position,shift:e.shift,originalEvent:e.originalEvent,preventDefaultAction:!1};this.raiseEvent("canvas-double-click",i);if(!i.preventDefaultAction&&this.viewport&&(t=this.gestureSettingsByDeviceType(e.pointerType)).dblClickToZoom){this.viewport.zoomBy(e.shift?1/this.zoomPerClick:this.zoomPerClick,t.zoomToRefPoint?this.viewport.pointFromPixel(e.position,!0):null);this.viewport.applyConstraints()}}function x(e){var t;var i={tracker:e.eventSource,pointerType:e.pointerType,position:e.position,delta:e.delta,speed:e.speed,direction:e.direction,shift:e.shift,originalEvent:e.originalEvent,preventDefaultAction:!1};this.raiseEvent("canvas-drag",i);if((t=this.gestureSettingsByDeviceType(e.pointerType)).dragToPan&&!i.preventDefaultAction&&this.viewport){this.panHorizontal||(e.delta.x=0);this.panVertical||(e.delta.y=0);this.viewport.flipped&&(e.delta.x=-e.delta.x);if(this.constrainDuringPan){var n=this.viewport.deltaPointsFromPixels(e.delta.negate());this.viewport.centerSpringX.target.value+=n.x;this.viewport.centerSpringY.target.value+=n.y;var o=this.viewport.getBounds();i=this.viewport.getConstrainedBounds();this.viewport.centerSpringX.target.value-=n.x;this.viewport.centerSpringY.target.value-=n.y;o.x!==i.x&&(e.delta.x=0);o.y!==i.y&&(e.delta.y=0)}this.viewport.panBy(this.viewport.deltaPointsFromPixels(e.delta.negate()),t.flickEnabled&&!this.constrainDuringPan)}}function S(e){var t={tracker:e.eventSource,pointerType:e.pointerType,position:e.position,speed:e.speed,direction:e.direction,shift:e.shift,originalEvent:e.originalEvent,preventDefaultAction:!1};this.raiseEvent("canvas-drag-end",t);if(!t.preventDefaultAction&&this.viewport){var i=this.gestureSettingsByDeviceType(e.pointerType);if(i.flickEnabled&&e.speed>=i.flickMinSpeed){var n=0;this.panHorizontal&&(n=i.flickMomentum*e.speed*Math.cos(e.direction));t=0;this.panVertical&&(t=i.flickMomentum*e.speed*Math.sin(e.direction));e=this.viewport.pixelFromPoint(this.viewport.getCenter(!0));t=this.viewport.pointFromPixel(new m.Point(e.x-n,e.y-t));this.viewport.panTo(t,!1)}this.viewport.applyConstraints()}}function E(e){this.raiseEvent("canvas-enter",{tracker:e.eventSource,pointerType:e.pointerType,position:e.position,buttons:e.buttons,pointers:e.pointers,insideElementPressed:e.insideElementPressed,buttonDownAny:e.buttonDownAny,originalEvent:e.originalEvent})}function P(e){this.raiseEvent("canvas-exit",{tracker:e.eventSource,pointerType:e.pointerType,position:e.position,buttons:e.buttons,pointers:e.pointers,insideElementPressed:e.insideElementPressed,buttonDownAny:e.buttonDownAny,originalEvent:e.originalEvent})}function _(e){this.raiseEvent("canvas-press",{tracker:e.eventSource,pointerType:e.pointerType,position:e.position,insideElementPressed:e.insideElementPressed,insideElementReleased:e.insideElementReleased,originalEvent:e.originalEvent})}function R(e){this.raiseEvent("canvas-release",{tracker:e.eventSource,pointerType:e.pointerType,position:e.position,insideElementPressed:e.insideElementPressed,insideElementReleased:e.insideElementReleased,originalEvent:e.originalEvent})}function C(e){this.raiseEvent("canvas-nonprimary-press",{tracker:e.eventSource,position:e.position,pointerType:e.pointerType,button:e.button,buttons:e.buttons,originalEvent:e.originalEvent})}function b(e){this.raiseEvent("canvas-nonprimary-release",{tracker:e.eventSource,position:e.position,pointerType:e.pointerType,button:e.button,buttons:e.buttons,originalEvent:e.originalEvent})}function D(e){var t,i,n;var o={tracker:e.eventSource,pointerType:e.pointerType,gesturePoints:e.gesturePoints,lastCenter:e.lastCenter,center:e.center,lastDistance:e.lastDistance,distance:e.distance,shift:e.shift,originalEvent:e.originalEvent,preventDefaultPanAction:!1,preventDefaultZoomAction:!1,preventDefaultRotateAction:!1};this.raiseEvent("canvas-pinch",o);if(this.viewport){if((t=this.gestureSettingsByDeviceType(e.pointerType)).pinchToZoom&&(!o.preventDefaultPanAction||!o.preventDefaultZoomAction)){i=this.viewport.pointFromPixel(e.center,!0);if(t.zoomToRefPoint&&!o.preventDefaultPanAction){n=this.viewport.pointFromPixel(e.lastCenter,!0).minus(i);this.panHorizontal||(n.x=0);this.panVertical||(n.y=0);this.viewport.panBy(n,!0)}o.preventDefaultZoomAction||this.viewport.zoomBy(e.distance/e.lastDistance,i,!0);this.viewport.applyConstraints()}if(t.pinchRotate&&!o.preventDefaultRotateAction){o=Math.atan2(e.gesturePoints[0].currentPos.y-e.gesturePoints[1].currentPos.y,e.gesturePoints[0].currentPos.x-e.gesturePoints[1].currentPos.x);e=Math.atan2(e.gesturePoints[0].lastPos.y-e.gesturePoints[1].lastPos.y,e.gesturePoints[0].lastPos.x-e.gesturePoints[1].lastPos.x);this.viewport.setRotation(this.viewport.getRotation()+(o-e)*(180/Math.PI))}}}function I(e){var t,i,n;if((n=m.now())-this._lastScrollTime>this.minScrollDeltaTime){this._lastScrollTime=n;t={tracker:e.eventSource,position:e.position,scroll:e.scroll,shift:e.shift,originalEvent:e.originalEvent,preventDefaultAction:!1,preventDefault:!0};this.raiseEvent("canvas-scroll",t);if(!t.preventDefaultAction&&this.viewport){this.viewport.flipped&&(e.position.x=this.viewport.getContainerSize().x-e.position.x);if((i=this.gestureSettingsByDeviceType(e.pointerType)).scrollToZoom){n=Math.pow(this.zoomPerScroll,e.scroll);this.viewport.zoomBy(n,i.zoomToRefPoint?this.viewport.pointFromPixel(e.position,!0):null);this.viewport.applyConstraints()}}e.preventDefault=t.preventDefault}else e.preventDefault=!0}function O(e){c[this.hash].mouseInside=!0;d(this);this.raiseEvent("container-enter",{tracker:e.eventSource,pointerType:e.pointerType,position:e.position,buttons:e.buttons,pointers:e.pointers,insideElementPressed:e.insideElementPressed,buttonDownAny:e.buttonDownAny,originalEvent:e.originalEvent})}function k(e){if(e.pointers<1){c[this.hash].mouseInside=!1;c[this.hash].animating||u(this)}this.raiseEvent("container-exit",{tracker:e.eventSource,pointerType:e.pointerType,position:e.position,buttons:e.buttons,pointers:e.pointers,insideElementPressed:e.insideElementPressed,buttonDownAny:e.buttonDownAny,originalEvent:e.originalEvent})}function B(e){!function(e){if(!e._opening&&c[e.hash]){if(e.autoResize){var t=s(e.container);var i=c[e.hash].prevContainerSize;if(!t.equals(i)){var n=e.viewport;if(e.preserveImageSizeOnResize){var o=i.x/t.x;i=n.getZoom()*o;o=n.getCenter();n.resize(t,!1);n.zoomTo(i,null,!0);n.panTo(o,!0)}else{var r=n.getBounds();n.resize(t,!0);n.fitBoundsWithConstraints(r,!0)}c[e.hash].prevContainerSize=t;c[e.hash].forceRedraw=!0}}r=e.viewport.update();t=e.world.update()||r;r&&e.raiseEvent("viewport-change");e.referenceStrip&&(t=e.referenceStrip.update(e.viewport)||t);r=c[e.hash].animating;if(!r&&t){e.raiseEvent("animation-start");d(e)}r=r&&!t;r&&(c[e.hash].animating=!1);if(t||r||c[e.hash].forceRedraw||e.world.needsDraw()){!function(e){e.imageLoader.clear();e.drawer.clear();e.world.draw();e.raiseEvent("update-viewport",{})}(e);e._drawOverlays();e.navigator&&e.navigator.update(e.viewport);c[e.hash].forceRedraw=!1;t&&e.raiseEvent("animation")}if(r){e.raiseEvent("animation-finish");c[e.hash].mouseInside||u(e)}c[e.hash].animating=t}}(e);e.isOpen()?e._updateRequestId=a(e,B):e._updateRequestId=!1}function H(e,t){return e?e+t:t}function z(){c[this.hash].lastZoomTime=m.now();c[this.hash].zoomFactor=this.zoomPerSecond;c[this.hash].zooming=!0;i(this)}function L(){c[this.hash].lastZoomTime=m.now();c[this.hash].zoomFactor=1/this.zoomPerSecond;c[this.hash].zooming=!0;i(this)}function F(){c[this.hash].zooming=!1}function i(e){m.requestAnimationFrame(m.delegate(e,t))}function t(){var e,t;if(c[this.hash].zooming&&this.viewport){t=(e=m.now())-c[this.hash].lastZoomTime;t=Math.pow(c[this.hash].zoomFactor,t/1e3);this.viewport.zoomBy(t);this.viewport.applyConstraints();c[this.hash].lastZoomTime=e;i(this)}}function M(){if(this.viewport){c[this.hash].zooming=!1;this.viewport.zoomBy(+this.zoomPerClick);this.viewport.applyConstraints()}}function N(){if(this.viewport){c[this.hash].zooming=!1;this.viewport.zoomBy(1/this.zoomPerClick);this.viewport.applyConstraints()}}function A(){if(this.buttonGroup){this.buttonGroup.emulateEnter();this.buttonGroup.emulateLeave()}}function W(){this.viewport&&this.viewport.goHome()}function U(){this.isFullPage()&&!m.isFullScreen()?this.setFullPage(!1):this.setFullScreen(!this.isFullPage());this.buttonGroup&&this.buttonGroup.emulateLeave();this.fullPageButton.element.focus();this.viewport&&this.viewport.applyConstraints()}function V(){if(this.viewport){var e=this.viewport.getRotation();e=this.viewport.flipped?m.positiveModulo(e+this.rotationIncrement,360):m.positiveModulo(e-this.rotationIncrement,360);this.viewport.setRotation(e)}}function G(){if(this.viewport){var e=this.viewport.getRotation();e=this.viewport.flipped?m.positiveModulo(e-this.rotationIncrement,360):m.positiveModulo(e+this.rotationIncrement,360);this.viewport.setRotation(e)}}function j(){this.viewport.toggleFlip()}}(OpenSeadragon);!function(r){r.Navigator=function(i){var e,t=i.viewer,n=this;if(i.id){this.element=document.getElementById(i.id);i.controlOptions={anchor:r.ControlAnchor.NONE,attachToViewer:!1,autoFade:!1}}else{i.id="navigator-"+r.now();this.element=r.makeNeutralElement("div");i.controlOptions={anchor:r.ControlAnchor.TOP_RIGHT,attachToViewer:!0,autoFade:i.autoFade};if(i.position)if("BOTTOM_RIGHT"===i.position)i.controlOptions.anchor=r.ControlAnchor.BOTTOM_RIGHT;else if("BOTTOM_LEFT"===i.position)i.controlOptions.anchor=r.ControlAnchor.BOTTOM_LEFT;else if("TOP_RIGHT"===i.position)i.controlOptions.anchor=r.ControlAnchor.TOP_RIGHT;else if("TOP_LEFT"===i.position)i.controlOptions.anchor=r.ControlAnchor.TOP_LEFT;else if("ABSOLUTE"===i.position){i.controlOptions.anchor=r.ControlAnchor.ABSOLUTE;i.controlOptions.top=i.top;i.controlOptions.left=i.left;i.controlOptions.height=i.height;i.controlOptions.width=i.width}}this.element.id=i.id;this.element.className+=" navigator";(i=r.extend(!0,{sizeRatio:r.DEFAULT_SETTINGS.navigatorSizeRatio},i,{element:this.element,tabIndex:-1,showNavigator:!1,mouseNavEnabled:!1,showNavigationControl:!1,showSequenceControl:!1,immediateRender:!0,blendTime:0,animationTime:0,autoResize:i.autoResize,minZoomImageRatio:1,background:i.background,opacity:i.opacity,borderColor:i.borderColor,displayRegionColor:i.displayRegionColor})).minPixelRatio=this.minPixelRatio=t.minPixelRatio;r.setElementTouchActionNone(this.element);this.borderWidth=2;this.fudge=new r.Point(1,1);this.totalBorderWidths=new r.Point(2*this.borderWidth,2*this.borderWidth).minus(this.fudge);i.controlOptions.anchor!==r.ControlAnchor.NONE&&function(e,t){e.margin="0px";e.border=t+"px solid "+i.borderColor;e.padding="0px";e.background=i.background;e.opacity=i.opacity;e.overflow="hidden"}(this.element.style,this.borderWidth);this.displayRegion=r.makeNeutralElement("div");this.displayRegion.id=this.element.id+"-displayregion";this.displayRegion.className="displayregion";!function(e,t){e.position="relative";e.top="0px";e.left="0px";e.fontSize="0px";e.overflow="hidden";e.border=t+"px solid "+i.displayRegionColor;e.margin="0px";e.padding="0px";e.background="transparent";e.float="left";e.cssFloat="left";e.styleFloat="left";e.zIndex=999999999;e.cursor="default"}(this.displayRegion.style,this.borderWidth);r.setElementPointerEventsNone(this.displayRegion);r.setElementTouchActionNone(this.displayRegion);this.displayRegionContainer=r.makeNeutralElement("div");this.displayRegionContainer.id=this.element.id+"-displayregioncontainer";this.displayRegionContainer.className="displayregioncontainer";this.displayRegionContainer.style.width="100%";this.displayRegionContainer.style.height="100%";r.setElementPointerEventsNone(this.displayRegionContainer);r.setElementTouchActionNone(this.displayRegionContainer);t.addControl(this.element,i.controlOptions);this._resizeWithViewer=i.controlOptions.anchor!==r.ControlAnchor.ABSOLUTE&&i.controlOptions.anchor!==r.ControlAnchor.NONE;if(i.width&&i.height){this.setWidth(i.width);this.setHeight(i.height)}else if(this._resizeWithViewer){e=r.getElementSize(t.element);this.element.style.height=Math.round(e.y*i.sizeRatio)+"px";this.element.style.width=Math.round(e.x*i.sizeRatio)+"px";this.oldViewerSize=e;e=r.getElementSize(this.element);this.elementArea=e.x*e.y}this.oldContainerSize=new r.Point(0,0);r.Viewer.apply(this,[i]);this.displayRegionContainer.appendChild(this.displayRegion);this.element.getElementsByTagName("div")[0].appendChild(this.displayRegionContainer);function o(e){c(n.displayRegionContainer,e);c(n.displayRegion,-e);n.viewport.setRotation(e)}if(i.navigatorRotate){o(i.viewer.viewport?i.viewer.viewport.getRotation():i.viewer.degrees||0);i.viewer.addHandler("rotate",function(e){o(e.degrees)})}this.innerTracker.destroy();this.innerTracker=new r.MouseTracker({userData:"Navigator.innerTracker",element:this.element,dragHandler:r.delegate(this,a),clickHandler:r.delegate(this,s),releaseHandler:r.delegate(this,l),scrollHandler:r.delegate(this,h),preProcessEventHandler:function(e){"wheel"===e.eventType&&(e.preventDefault=!0)}});this.outerTracker.userData="Navigator.outerTracker";r.setElementPointerEventsNone(this.canvas);r.setElementPointerEventsNone(this.container);this.addHandler("reset-size",function(){n.viewport&&n.viewport.goHome(!0)});t.world.addHandler("item-index-change",function(t){window.setTimeout(function(){var e=n.world.getItemAt(t.previousIndex);n.world.setItemIndex(e,t.newIndex)},1)});t.world.addHandler("remove-item",function(e){e=e.item;e=n._getMatchingItem(e);e&&n.world.removeItem(e)});this.update(t.viewport)};r.extend(r.Navigator.prototype,r.EventSource.prototype,r.Viewer.prototype,{updateSize:function(){if(this.viewport){var e=new r.Point(0===this.container.clientWidth?1:this.container.clientWidth,0===this.container.clientHeight?1:this.container.clientHeight);if(!e.equals(this.oldContainerSize)){this.viewport.resize(e,!0);this.viewport.goHome(!0);this.oldContainerSize=e;this.drawer.clear();this.world.draw()}}},setWidth:function(e){this.width=e;this.element.style.width="number"==typeof e?e+"px":e;this._resizeWithViewer=!1},setHeight:function(e){this.height=e;this.element.style.height="number"==typeof e?e+"px":e;this._resizeWithViewer=!1},setFlip:function(e){this.viewport.setFlip(e);this.setDisplayTransform(this.viewer.viewport.getFlip()?"scale(-1,1)":"scale(1,1)");return this},setDisplayTransform:function(e){i(this.displayRegion,e);i(this.canvas,e);i(this.element,e)},update:function(e){var t;i=r.getElementSize(this.viewer.element);if(this._resizeWithViewer&&i.x&&i.y&&!i.equals(this.oldViewerSize)){this.oldViewerSize=i;if(this.maintainSizeRatio||!this.elementArea){t=i.x*this.sizeRatio;n=i.y*this.sizeRatio}else{t=Math.sqrt(this.elementArea*(i.x/i.y));n=this.elementArea/t}this.element.style.width=Math.round(t)+"px";this.element.style.height=Math.round(n)+"px";this.elementArea||(this.elementArea=t*n);this.updateSize()}if(e&&this.viewport){i=e.getBoundsNoRotate(!0);t=this.viewport.pixelFromPointNoRotate(i.getTopLeft(),!1);n=this.viewport.pixelFromPointNoRotate(i.getBottomRight(),!1).minus(this.totalBorderWidths);e=this.displayRegion.style;e.display=this.world.getItemCount()?"block":"none";e.top=Math.round(t.y)+"px";e.left=Math.round(t.x)+"px";var i=Math.abs(t.x-n.x);var n=Math.abs(t.y-n.y);e.width=Math.round(Math.max(i,0))+"px";e.height=Math.round(Math.max(n,0))+"px"}},addTiledImage:function(e){var n=this;var o=e.originalTiledImage;delete e.original;e=r.extend({},e,{success:function(e){var t=e.item;t._originalForNavigator=o;n._matchBounds(t,o,!0);n._matchOpacity(t,o);n._matchCompositeOperation(t,o);function i(){n._matchBounds(t,o)}o.addHandler("bounds-change",i);o.addHandler("clip-change",i);o.addHandler("opacity-change",function(){n._matchOpacity(t,o)});o.addHandler("composite-operation-change",function(){n._matchCompositeOperation(t,o)})}});return r.Viewer.prototype.addTiledImage.apply(this,[e])},destroy:function(){return r.Viewer.prototype.destroy.apply(this)},_getMatchingItem:function(e){var t=this.world.getItemCount();var i;for(var n=0;n<t;n++)if((i=this.world.getItemAt(n))._originalForNavigator===e)return i;return null},_matchBounds:function(e,t,i){var n=t.getBoundsNoRotate();e.setPosition(n.getTopLeft(),i);e.setWidth(n.width,i);e.setRotation(t.getRotation(),i);e.setClip(t.getClip());e.setFlip(t.getFlip())},_matchOpacity:function(e,t){e.setOpacity(t.opacity)},_matchCompositeOperation:function(e,t){e.setCompositeOperation(t.compositeOperation)}});function s(e){var t={tracker:e.eventSource,position:e.position,quick:e.quick,shift:e.shift,originalEvent:e.originalEvent,preventDefaultAction:!1};this.viewer.raiseEvent("navigator-click",t);if(!t.preventDefaultAction&&e.quick&&this.viewer.viewport&&(this.panVertical||this.panHorizontal)){this.viewer.viewport.flipped&&(e.position.x=this.viewport.getContainerSize().x-e.position.x);e=this.viewport.pointFromPixel(e.position);this.panVertical?this.panHorizontal||(e.x=this.viewer.viewport.getCenter(!0).x):e.y=this.viewer.viewport.getCenter(!0).y;this.viewer.viewport.panTo(e);this.viewer.viewport.applyConstraints()}}function a(e){var t={tracker:e.eventSource,position:e.position,delta:e.delta,speed:e.speed,direction:e.direction,shift:e.shift,originalEvent:e.originalEvent,preventDefaultAction:!1};this.viewer.raiseEvent("navigator-drag",t);if(!t.preventDefaultAction&&this.viewer.viewport){this.panHorizontal||(e.delta.x=0);this.panVertical||(e.delta.y=0);this.viewer.viewport.flipped&&(e.delta.x=-e.delta.x);this.viewer.viewport.panBy(this.viewport.deltaPointsFromPixels(e.delta));this.viewer.constrainDuringPan&&this.viewer.viewport.applyConstraints()}}function l(e){e.insideElementPressed&&this.viewer.viewport&&this.viewer.viewport.applyConstraints()}function h(e){var t={tracker:e.eventSource,position:e.position,scroll:e.scroll,shift:e.shift,originalEvent:e.originalEvent,preventDefault:e.preventDefault};this.viewer.raiseEvent("navigator-scroll",t);e.preventDefault=t.preventDefault}function c(e,t){i(e,"rotate("+t+"deg)")}function i(e,t){e.style.webkitTransform=t;e.style.mozTransform=t;e.style.msTransform=t;e.style.oTransform=t;e.style.transform=t}}(OpenSeadragon);!function(s){var a={Errors:{Dzc:"Sorry, we don't support Deep Zoom Collections!",Dzi:"Hmm, this doesn't appear to be a valid Deep Zoom Image.",Xml:"Hmm, this doesn't appear to be a valid Deep Zoom Image.",ImageFormat:"Sorry, we don't support {0}-based Deep Zoom Images.",Security:"It looks like a security restriction stopped us from loading this Deep Zoom Image.",Status:"This space unintentionally left blank ({0} {1}).",OpenFailed:"Unable to open {0}: {1}"},Tooltips:{FullPage:"Toggle full page",Home:"Go home",ZoomIn:"Zoom in",ZoomOut:"Zoom out",NextPage:"Next page",PreviousPage:"Previous page",RotateLeft:"Rotate left",RotateRight:"Rotate right",Flip:"Flip Horizontally"}};s.extend(s,{getString:function(e){var t,i=e.split("."),n=null,o=arguments,r=a;for(t=0;t<i.length-1;t++)r=r[i[t]]||{};if("string"!=typeof(n=r[i[t]])){s.console.error("Untranslated source string:",e);n=""}return n.replace(/\{\d+\}/g,function(e){e=parseInt(e.match(/\d+/),10)+1;return e<o.length?o[e]:""})},setString:function(e,t){var i,n=e.split("."),o=a;for(i=0;i<n.length-1;i++){o[n[i]]||(o[n[i]]={});o=o[n[i]]}o[n[i]]=t}})}(OpenSeadragon);!function(r){r.Point=function(e,t){this.x="number"==typeof e?e:0;this.y="number"==typeof t?t:0};r.Point.prototype={clone:function(){return new r.Point(this.x,this.y)},plus:function(e){return new r.Point(this.x+e.x,this.y+e.y)},minus:function(e){return new r.Point(this.x-e.x,this.y-e.y)},times:function(e){return new r.Point(this.x*e,this.y*e)},divide:function(e){return new r.Point(this.x/e,this.y/e)},negate:function(){return new r.Point(-this.x,-this.y)},distanceTo:function(e){return Math.sqrt(Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2))},squaredDistanceTo:function(e){return Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2)},apply:function(e){return new r.Point(e(this.x),e(this.y))},equals:function(e){return e instanceof r.Point&&this.x===e.x&&this.y===e.y},rotate:function(e,t){t=t||new r.Point(0,0);var i;var n;if(e%90==0)switch(r.positiveModulo(e,360)){case 0:i=1;n=0;break;case 90:i=0;n=1;break;case 180:i=-1;n=0;break;case 270:i=0;n=-1}else{var o=e*Math.PI/180;i=Math.cos(o);n=Math.sin(o)}o=i*(this.x-t.x)-n*(this.y-t.y)+t.x;t=n*(this.x-t.x)+i*(this.y-t.y)+t.y;return new r.Point(o,t)},toString:function(){return"("+Math.round(100*this.x)/100+","+Math.round(100*this.y)/100+")"}}}(OpenSeadragon);!function(h){h.TileSource=function(e,t,i,n,o,r){var s=this;var a,l=arguments;l=h.isPlainObject(e)?e:{width:l[0],height:l[1],tileSize:l[2],tileOverlap:l[3],minLevel:l[4],maxLevel:l[5]};h.EventSource.call(this);h.extend(!0,this,l);if(!this.success)for(a=0;a<arguments.length;a++)if(h.isFunction(arguments[a])){this.success=arguments[a];break}this.success&&this.addHandler("ready",function(e){s.success(e)});"string"===h.type(e)&&(this.url=e);if(this.url){this.aspectRatio=1;this.dimensions=new h.Point(10,10);this._tileWidth=0;this._tileHeight=0;this.tileOverlap=0;this.minLevel=0;this.maxLevel=0;this.ready=!1;this.getImageInfo(this.url)}else{this.ready=!0;this.aspectRatio=l.width&&l.height?l.width/l.height:1;this.dimensions=new h.Point(l.width,l.height);if(this.tileSize){this._tileWidth=this._tileHeight=this.tileSize;delete this.tileSize}else{if(this.tileWidth){this._tileWidth=this.tileWidth;delete this.tileWidth}else this._tileWidth=0;if(this.tileHeight){this._tileHeight=this.tileHeight;delete this.tileHeight}else this._tileHeight=0}this.tileOverlap=l.tileOverlap||0;this.minLevel=l.minLevel||0;this.maxLevel=void 0!==l.maxLevel&&null!==l.maxLevel?l.maxLevel:l.width&&l.height?Math.ceil(Math.log(Math.max(l.width,l.height))/Math.log(2)):0;this.success&&h.isFunction(this.success)&&this.success(this)}};h.TileSource.prototype={getTileSize:function(e){h.console.error("[TileSource.getTileSize] is deprecated. Use TileSource.getTileWidth() and TileSource.getTileHeight() instead");return this._tileWidth},getTileWidth:function(e){return this._tileWidth||this.getTileSize(e)},getTileHeight:function(e){return this._tileHeight||this.getTileSize(e)},setMaxLevel:function(e){this.maxLevel=e;this._memoizeLevelScale()},getLevelScale:function(e){this._memoizeLevelScale();return this.getLevelScale(e)},_memoizeLevelScale:function(){var e,t={};for(e=0;e<=this.maxLevel;e++)t[e]=1/Math.pow(2,this.maxLevel-e);this.getLevelScale=function(e){return t[e]}},getNumTiles:function(e){var t=this.getLevelScale(e),i=Math.ceil(t*this.dimensions.x/this.getTileWidth(e)),e=Math.ceil(t*this.dimensions.y/this.getTileHeight(e));return new h.Point(i,e)},getPixelRatio:function(e){var t=this.dimensions.times(this.getLevelScale(e)),e=1/t.x*h.pixelDensityRatio,t=1/t.y*h.pixelDensityRatio;return new h.Point(e,t)},getClosestLevel:function(){var e,t;for(e=this.minLevel+1;e<=this.maxLevel&&!(1<(t=this.getNumTiles(e)).x||1<t.y);e++);return e-1},getTileAtPoint:function(e,t){var i=0<=t.x&&t.x<=1&&0<=t.y&&t.y<=1/this.aspectRatio;h.console.assert(i,"[TileSource.getTileAtPoint] must be called with a valid point.");var n=this.dimensions.x*this.getLevelScale(e);i=t.x*n;n=t.y*n;i=Math.floor(i/this.getTileWidth(e));n=Math.floor(n/this.getTileHeight(e));1<=t.x&&(i=this.getNumTiles(e).x-1);t.y>=1/this.aspectRatio-1e-15&&(n=this.getNumTiles(e).y-1);return new h.Point(i,n)},getTileBounds:function(e,t,i,n){var o=this.dimensions.times(this.getLevelScale(e)),r=this.getTileWidth(e),s=this.getTileHeight(e),a=0===t?0:r*t-this.tileOverlap,e=0===i?0:s*i-this.tileOverlap,t=r+(0===t?1:2)*this.tileOverlap,s=s+(0===i?1:2)*this.tileOverlap,i=1/o.x;t=Math.min(t,o.x-a);s=Math.min(s,o.y-e);return n?new h.Rect(0,0,t,s):new h.Rect(a*i,e*i,t*i,s*i)},getImageInfo:function(n){var t,i,e,o,r,s=this;n&&-1<(r=(o=(e=n.split("/"))[e.length-1]).lastIndexOf("."))&&(e[e.length-1]=o.slice(0,r));var a=null;if(this.splitHashDataForPost){var l=n.indexOf("#");if(-1!==l){a=n.substring(l+1);n=n.substr(0,l)}}t=function(e){"string"==typeof e&&(e=h.parseXml(e));var t=h.TileSource.determineType(s,e,n);if(t){void 0===(i=t.prototype.configure.apply(s,[e,n,a])).ajaxWithCredentials&&(i.ajaxWithCredentials=s.ajaxWithCredentials);i=new t(i);s.ready=!0;s.raiseEvent("ready",{tileSource:i})}else s.raiseEvent("open-failed",{message:"Unable to load TileSource",source:n})};if(n.match(/\.js$/)){l=n.split("/").pop().replace(".js","");h.jsonp({url:n,async:!1,callbackName:l,callback:t})}else h.makeAjaxRequest({url:n,postData:a,withCredentials:this.ajaxWithCredentials,headers:this.ajaxHeaders,success:function(e){e=function(t){var e,i,n=t.responseText,o=t.status;{if(!t)throw new Error(h.getString("Errors.Security"));if(200!==t.status&&0!==t.status){o=t.status;e=404===o?"Not Found":t.statusText;throw new Error(h.getString("Errors.Status",o,e))}}if(n.match(/\s*<.*/))try{i=t.responseXML&&t.responseXML.documentElement?t.responseXML:h.parseXml(n)}catch(e){i=t.responseText}else if(n.match(/\s*[{[].*/))try{i=h.parseJSON(n)}catch(e){i=n}else i=n;return i}(e);t(e)},error:function(e,t){var i;try{i="HTTP "+e.status+" attempting to load TileSource: "+n}catch(e){i=(void 0!==t&&t.toString?t.toString():"Unknown error")+" attempting to load TileSource: "+n}h.console.error(i);s.raiseEvent("open-failed",{message:i,source:n,postData:a})}})},supports:function(e,t){return!1},configure:function(e,t,i){throw new Error("Method not implemented.")},getTileUrl:function(e,t,i){throw new Error("Method not implemented.")},getTilePostData:function(e,t,i){return null},getTileAjaxHeaders:function(e,t,i){return{}},getTileHashKey:function(e,t,i,n,o,r){return o?n+"+"+JSON.stringify(o):n},tileExists:function(e,t,i){var n=this.getNumTiles(e);return e>=this.minLevel&&e<=this.maxLevel&&0<=t&&0<=i&&t<n.x&&i<n.y}};h.extend(!0,h.TileSource.prototype,h.EventSource.prototype);h.TileSource.determineType=function(e,t,i){for(var n in OpenSeadragon)if(n.match(/.+TileSource$/)&&h.isFunction(OpenSeadragon[n])&&h.isFunction(OpenSeadragon[n].prototype.supports)&&OpenSeadragon[n].prototype.supports.call(e,t,i))return OpenSeadragon[n];h.console.error("No TileSource was able to open %s %s",i,t);return null}}(OpenSeadragon);!function(p){p.DziTileSource=function(e,t,i,n,o,r,s,a,l){var h,c,u,d;d=p.isPlainObject(e)?e:{width:e,height:t,tileSize:i,tileOverlap:n,tilesUrl:o,fileFormat:r,displayRects:s,minLevel:a,maxLevel:l};this._levelRects={};this.tilesUrl=d.tilesUrl;this.fileFormat=d.fileFormat;this.displayRects=d.displayRects;if(this.displayRects)for(h=this.displayRects.length-1;0<=h;h--)for(u=(c=this.displayRects[h]).minLevel;u<=c.maxLevel;u++){this._levelRects[u]||(this._levelRects[u]=[]);this._levelRects[u].push(c)}p.TileSource.apply(this,[d])};p.extend(p.DziTileSource.prototype,p.TileSource.prototype,{supports:function(e,t){var i;e.Image?i=e.Image.xmlns:e.documentElement&&("Image"!==e.documentElement.localName&&"Image"!==e.documentElement.tagName||(i=e.documentElement.namespaceURI));return-1!==(i=(i||"").toLowerCase()).indexOf("schemas.microsoft.com/deepzoom/2008")||-1!==i.indexOf("schemas.microsoft.com/deepzoom/2009")},configure:function(e,t,i){e=(p.isPlainObject(e)?u:function(e,t){if(!t||!t.documentElement)throw new Error(p.getString("Errors.Xml"));var i,n,o,r,s,a=t.documentElement,l=a.localName||a.tagName,h=t.documentElement.namespaceURI,t=null,c=[];if("Image"===l)try{void 0===(r=a.getElementsByTagName("Size")[0])&&(r=a.getElementsByTagNameNS(h,"Size")[0]);t={Image:{xmlns:"http://schemas.microsoft.com/deepzoom/2008",Url:a.getAttribute("Url"),Format:a.getAttribute("Format"),DisplayRect:null,Overlap:parseInt(a.getAttribute("Overlap"),10),TileSize:parseInt(a.getAttribute("TileSize"),10),Size:{Height:parseInt(r.getAttribute("Height"),10),Width:parseInt(r.getAttribute("Width"),10)}}};if(!p.imageFormatSupported(t.Image.Format))throw new Error(p.getString("Errors.ImageFormat",t.Image.Format.toUpperCase()));void 0===(i=a.getElementsByTagName("DisplayRect"))&&(i=a.getElementsByTagNameNS(h,"DisplayRect")[0]);for(s=0;s<i.length;s++){n=i[s];void 0===(o=n.getElementsByTagName("Rect")[0])&&(o=n.getElementsByTagNameNS(h,"Rect")[0]);c.push({Rect:{X:parseInt(o.getAttribute("X"),10),Y:parseInt(o.getAttribute("Y"),10),Width:parseInt(o.getAttribute("Width"),10),Height:parseInt(o.getAttribute("Height"),10),MinLevel:parseInt(n.getAttribute("MinLevel"),10),MaxLevel:parseInt(n.getAttribute("MaxLevel"),10)}})}c.length&&(t.Image.DisplayRect=c);return u(0,t)}catch(e){throw e instanceof Error?e:new Error(p.getString("Errors.Dzi"))}else{if("Collection"===l)throw new Error(p.getString("Errors.Dzc"));if("Error"===l){a=a.getElementsByTagName("Message")[0].firstChild.nodeValue;throw new Error(a)}}throw new Error(p.getString("Errors.Dzi"))})(this,e);if(t&&!e.tilesUrl){e.tilesUrl=t.replace(/([^/]+?)(\.(dzi|xml|js)?(\?[^/]*)?)?\/?$/,"$1_files/");-1!==t.search(/\.(dzi|xml|js)\?/)?e.queryParams=t.match(/\?.*/):e.queryParams=""}return e},getTileUrl:function(e,t,i){return[this.tilesUrl,e,"/",t,"_",i,".",this.fileFormat,this.queryParams].join("")},tileExists:function(e,t,i){var n,o,r,s,a,l,h=this._levelRects[e];if(this.minLevel&&e<this.minLevel||this.maxLevel&&e>this.maxLevel)return!1;if(!h||!h.length)return!0;for(l=h.length-1;0<=l;l--)if(!(e<(n=h[l]).minLevel||e>n.maxLevel)){a=this.getLevelScale(e);o=n.x*a;r=n.y*a;s=o+n.width*a;a=r+n.height*a;o=Math.floor(o/this._tileWidth);r=Math.floor(r/this._tileWidth);s=Math.ceil(s/this._tileWidth);a=Math.ceil(a/this._tileWidth);if(o<=t&&t<s&&r<=i&&i<a)return!0}return!1}});function u(e,t){var i,n,o=t.Image,r=o.Url,s=o.Format,a=o.Size,l=o.DisplayRect||[],h=parseInt(a.Width,10),c=parseInt(a.Height,10),a=parseInt(o.TileSize,10),o=parseInt(o.Overlap,10),u=[];for(n=0;n<l.length;n++){i=l[n].Rect;u.push(new p.DisplayRect(parseInt(i.X,10),parseInt(i.Y,10),parseInt(i.Width,10),parseInt(i.Height,10),parseInt(i.MinLevel,10),parseInt(i.MaxLevel,10)))}return p.extend(!0,{width:h,height:c,tileSize:a,tileOverlap:o,minLevel:null,maxLevel:null,tilesUrl:r,fileFormat:s,displayRects:u},t)}}(OpenSeadragon);!function(h){h.IIIFTileSource=function(e){h.extend(!0,this,e);if(!(this.height&&this.width&&this["@id"]))throw new Error("IIIF required parameters not provided.");e.tileSizePerScaleFactor={};this.tileFormat=this.tileFormat||"jpg";this.version=e.version;if(this.tile_width&&this.tile_height){e.tileWidth=this.tile_width;e.tileHeight=this.tile_height}else if(this.tile_width)e.tileSize=this.tile_width;else if(this.tile_height)e.tileSize=this.tile_height;else if(this.tiles)if(1===this.tiles.length){e.tileWidth=this.tiles[0].width;e.tileHeight=this.tiles[0].height||this.tiles[0].width;this.scale_factors=this.tiles[0].scaleFactors}else{this.scale_factors=[];for(var t=0;t<this.tiles.length;t++)for(var i=0;i<this.tiles[t].scaleFactors.length;i++){var n=this.tiles[t].scaleFactors[i];this.scale_factors.push(n);e.tileSizePerScaleFactor[n]={width:this.tiles[t].width,height:this.tiles[t].height||this.tiles[t].width}}}else if(c(e)){var o=Math.min(this.height,this.width),r=[256,512,1024],s=[];for(var a=0;a<r.length;a++)r[a]<=o&&s.push(r[a]);0<s.length?e.tileSize=Math.max.apply(null,s):e.tileSize=o}else if(this.sizes&&0<this.sizes.length){this.emulateLegacyImagePyramid=!0;e.levels=u(this);h.extend(!0,e,{width:e.levels[e.levels.length-1].width,height:e.levels[e.levels.length-1].height,tileSize:Math.max(e.height,e.width),tileOverlap:0,minLevel:0,maxLevel:e.levels.length-1});this.levels=e.levels}else h.console.error("Nothing in the info.json to construct image pyramids from");if(!e.maxLevel&&!this.emulateLegacyImagePyramid)if(this.scale_factors){var l=Math.max.apply(null,this.scale_factors);e.maxLevel=Math.round(Math.log(l)*Math.LOG2E)}else e.maxLevel=Number(Math.ceil(Math.log(Math.max(this.width,this.height),2)));h.TileSource.apply(this,[e])};h.extend(h.IIIFTileSource.prototype,h.TileSource.prototype,{supports:function(e,t){return!(!e.protocol||"http://iiif.io/api/image"!==e.protocol)||(!(!e["@context"]||"http://library.stanford.edu/iiif/image-api/1.1/context.json"!==e["@context"]&&"http://iiif.io/api/image/1/context.json"!==e["@context"])||(!(!e.profile||0!==e.profile.indexOf("http://library.stanford.edu/iiif/image-api/compliance.html"))||(!!(e.identifier&&e.width&&e.height)||!(!e.documentElement||"info"!==e.documentElement.tagName||"http://library.stanford.edu/iiif/image-api/ns/"!==e.documentElement.namespaceURI))))},configure:function(e,t,i){if(h.isPlainObject(e)){if(e["@context"]){var n=e["@context"];if(Array.isArray(n))for(var o=0;o<n.length;o++)if("string"==typeof n[o]&&(/^http:\/\/iiif\.io\/api\/image\/[1-3]\/context\.json$/.test(n[o])||"http://library.stanford.edu/iiif/image-api/1.1/context.json"===n[o])){n=n[o];break}switch(n){case"http://iiif.io/api/image/1/context.json":case"http://library.stanford.edu/iiif/image-api/1.1/context.json":e.version=1;break;case"http://iiif.io/api/image/2/context.json":e.version=2;break;case"http://iiif.io/api/image/3/context.json":e.version=3;break;default:h.console.error("Data has a @context property which contains no known IIIF context URI.")}}else{e["@context"]="http://iiif.io/api/image/1.0/context.json";e["@id"]=t.replace("/info.json","");e.version=1}!e["@id"]&&e.id&&(e["@id"]=e.id);if(e.preferredFormats)for(var r=0;r<e.preferredFormats.length;r++)if(OpenSeadragon.imageFormatSupported(e.preferredFormats[r])){e.tileFormat=e.preferredFormats[r];break}return e}var s=function(e){if(!e||!e.documentElement)throw new Error(h.getString("Errors.Xml"));var t=e.documentElement,i=t.tagName,e=null;if("info"===i)try{!function e(t,i,n){var o,r;if(3===t.nodeType&&n){(r=t.nodeValue.trim()).match(/^\d*$/)&&(r=Number(r));if(i[n]){h.isArray(i[n])||(i[n]=[i[n]]);i[n].push(r)}else i[n]=r}else if(1===t.nodeType)for(o=0;o<t.childNodes.length;o++)e(t.childNodes[o],i,t.nodeName)}(t,e={});return e}catch(e){throw e instanceof Error?e:new Error(h.getString("Errors.IIIF"))}throw new Error(h.getString("Errors.IIIF"))}(e);s["@context"]="http://iiif.io/api/image/1.0/context.json";s["@id"]=t.replace("/info.xml","");s.version=1;return s},getTileWidth:function(e){if(this.emulateLegacyImagePyramid)return h.TileSource.prototype.getTileWidth.call(this,e);e=Math.pow(2,this.maxLevel-e);return this.tileSizePerScaleFactor&&this.tileSizePerScaleFactor[e]?this.tileSizePerScaleFactor[e].width:this._tileWidth},getTileHeight:function(e){if(this.emulateLegacyImagePyramid)return h.TileSource.prototype.getTileHeight.call(this,e);e=Math.pow(2,this.maxLevel-e);return this.tileSizePerScaleFactor&&this.tileSizePerScaleFactor[e]?this.tileSizePerScaleFactor[e].height:this._tileHeight},getLevelScale:function(e){if(this.emulateLegacyImagePyramid){var t=NaN;return t=0<this.levels.length&&e>=this.minLevel&&e<=this.maxLevel?this.levels[e].width/this.levels[this.maxLevel].width:t}return h.TileSource.prototype.getLevelScale.call(this,e)},getNumTiles:function(e){if(this.emulateLegacyImagePyramid)return this.getLevelScale(e)?new h.Point(1,1):new h.Point(0,0);return h.TileSource.prototype.getNumTiles.call(this,e)},getTileAtPoint:function(e,t){return this.emulateLegacyImagePyramid?new h.Point(0,0):h.TileSource.prototype.getTileAtPoint.call(this,e,t)},getTileUrl:function(e,t,i){if(this.emulateLegacyImagePyramid){var n=null;return n=0<this.levels.length&&e>=this.minLevel&&e<=this.maxLevel?this.levels[e].url:n}var o,r,s,a,l,h=Math.pow(.5,this.maxLevel-e),c=Math.ceil(this.width*h),u=Math.ceil(this.height*h);o=this.getTileWidth(e);r=this.getTileHeight(e);l=Math.ceil(o/h);n=Math.ceil(r/h);e=1===this.version?"native."+this.tileFormat:"default."+this.tileFormat;if(c<o&&u<r){a=2===this.version&&c===this.width?"full":3===this.version&&c===this.width&&u===this.height?"max":3===this.version?c+","+u:c+",";s="full"}else{u=t*l;c=i*n;l=Math.min(l,this.width-u);n=Math.min(n,this.height-c);s=0===t&&0===i&&l===this.width&&n===this.height?"full":[u,c,l,n].join(",");l=Math.ceil(l*h);h=Math.ceil(n*h);a=2===this.version&&l===this.width?"full":3===this.version&&l===this.width&&h===this.height?"max":3===this.version?l+","+h:l+","}return[this["@id"],s,a,"0",e].join("/")},__testonly__:{canBeTiled:c,constructLevels:u}});function c(e){var t=Array.isArray(e.profile)?e.profile[0]:e.profile;var i=-1!==["http://library.stanford.edu/iiif/image-api/compliance.html#level0","http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0","http://iiif.io/api/image/2/level0.json","level0","https://iiif.io/api/image/3/level0.json"].indexOf(t);t=!1;2===e.version&&1<e.profile.length&&e.profile[1].supports&&(t=-1!==e.profile[1].supports.indexOf("sizeByW"));3===e.version&&e.extraFeatures&&(t=-1!==e.extraFeatures.indexOf("sizeByWh"));return!i||t}function u(e){var t=[];for(var i=0;i<e.sizes.length;i++)t.push({url:e["@id"]+"/full/"+e.sizes[i].width+","+(3===e.version?e.sizes[i].height:"")+"/0/default."+e.tileFormat,width:e.sizes[i].width,height:e.sizes[i].height});return t.sort(function(e,t){return e.width-t.width})}}(OpenSeadragon);!function(s){s.OsmTileSource=function(e,t,i,n,o){var r;if(!(r=s.isPlainObject(e)?e:{width:e,height:t,tileSize:i,tileOverlap:n,tilesUrl:o}).width||!r.height){r.width=65572864;r.height=65572864}if(!r.tileSize){r.tileSize=256;r.tileOverlap=0}r.tilesUrl||(r.tilesUrl="http://tile.openstreetmap.org/");r.minLevel=8;s.TileSource.apply(this,[r])};s.extend(s.OsmTileSource.prototype,s.TileSource.prototype,{supports:function(e,t){return e.type&&"openstreetmaps"===e.type},configure:function(e,t,i){return e},getTileUrl:function(e,t,i){return this.tilesUrl+(e-8)+"/"+t+"/"+i+".png"}})}(OpenSeadragon);!function(h){h.TmsTileSource=function(e,t,i,n,o){var r;r=h.isPlainObject(e)?e:{width:e,height:t,tileSize:i,tileOverlap:n,tilesUrl:o};var s,a=256*Math.ceil(r.width/256),l=256*Math.ceil(r.height/256);s=l<a?a/256:l/256;r.maxLevel=Math.ceil(Math.log(s)/Math.log(2))-1;r.tileSize=256;r.width=a;r.height=l;h.TileSource.apply(this,[r])};h.extend(h.TmsTileSource.prototype,h.TileSource.prototype,{supports:function(e,t){return e.type&&"tiledmapservice"===e.type},configure:function(e,t,i){return e},getTileUrl:function(e,t,i){var n=this.getNumTiles(e).y-1;return this.tilesUrl+e+"/"+t+"/"+(n-i)+".png"}})}(OpenSeadragon);!function(e){e.ZoomifyTileSource=function(e){void 0===e.tileSize&&(e.tileSize=256);if(void 0===e.fileFormat){e.fileFormat="jpg";this.fileFormat=e.fileFormat}var t={x:e.width,y:e.height};e.imageSizes=[{x:e.width,y:e.height}];e.gridSize=[this._getGridSize(e.width,e.height,e.tileSize)];for(;parseInt(t.x,10)>e.tileSize||parseInt(t.y,10)>e.tileSize;){t.x=Math.floor(t.x/2);t.y=Math.floor(t.y/2);e.imageSizes.push({x:t.x,y:t.y});e.gridSize.push(this._getGridSize(t.x,t.y,e.tileSize))}e.imageSizes.reverse();e.gridSize.reverse();e.minLevel=0;e.maxLevel=e.gridSize.length-1;OpenSeadragon.TileSource.apply(this,[e])};e.extend(e.ZoomifyTileSource.prototype,e.TileSource.prototype,{_getGridSize:function(e,t,i){return{x:Math.ceil(e/i),y:Math.ceil(t/i)}},_calculateAbsoluteTileNumber:function(e,t,i){var n=0;var o={};for(var r=0;r<e;r++)n+=(o=this.gridSize[r]).x*o.y;return n+=(o=this.gridSize[e]).x*i+t},supports:function(e,t){return e.type&&"zoomifytileservice"===e.type},configure:function(e,t,i){return e},getTileUrl:function(e,t,i){var n=this._calculateAbsoluteTileNumber(e,t,i);n=Math.floor(n/256);return this.tilesUrl+"TileGroup"+n+"/"+e+"-"+t+"-"+i+"."+this.fileFormat}})}(OpenSeadragon);!function(a){a.LegacyTileSource=function(e){var t,i,n;(t=a.isArray(e)?{type:"legacy-image-pyramid",levels:e}:t).levels=function(e){var t,i,n=[];for(i=0;i<e.length;i++)(t=e[i]).height&&t.width&&t.url?n.push({url:t.url,width:Number(t.width),height:Number(t.height)}):a.console.error("Unsupported image format: %s",t.url||"<no URL>");return n.sort(function(e,t){return e.height-t.height})}(t.levels);if(0<t.levels.length){i=t.levels[t.levels.length-1].width;n=t.levels[t.levels.length-1].height}else{n=i=0;a.console.error("No supported image formats found")}a.extend(!0,t,{width:i,height:n,tileSize:Math.max(n,i),tileOverlap:0,minLevel:0,maxLevel:0<t.levels.length?t.levels.length-1:0});a.TileSource.apply(this,[t]);this.levels=t.levels};a.extend(a.LegacyTileSource.prototype,a.TileSource.prototype,{supports:function(e,t){return e.type&&"legacy-image-pyramid"===e.type||e.documentElement&&"legacy-image-pyramid"===e.documentElement.getAttribute("type")},configure:function(e,t,i){return a.isPlainObject(e)?e.levels:function(e){if(!e||!e.documentElement)throw new Error(a.getString("Errors.Xml"));var t,i,n=e.documentElement,o=n.tagName,r=null,s=[];if("image"===o)try{r={type:n.getAttribute("type"),levels:[]};s=n.getElementsByTagName("level");for(i=0;i<s.length;i++){t=s[i];r.levels.push({url:t.getAttribute("url"),width:parseInt(t.getAttribute("width"),10),height:parseInt(t.getAttribute("height"),10)})}return r.levels}catch(e){throw e instanceof Error?e:new Error("Unknown error parsing Legacy Image Pyramid XML.")}else{if("collection"===o)throw new Error("Legacy Image Pyramid Collections not yet supported.");if("error"===o)throw new Error("Error: "+e)}throw new Error("Unknown element "+o)}(e)},getLevelScale:function(e){var t=NaN;return t=0<this.levels.length&&e>=this.minLevel&&e<=this.maxLevel?this.levels[e].width/this.levels[this.maxLevel].width:t},getNumTiles:function(e){return this.getLevelScale(e)?new a.Point(1,1):new a.Point(0,0)},getTileUrl:function(e,t,i){var n=null;return n=0<this.levels.length&&e>=this.minLevel&&e<=this.maxLevel?this.levels[e].url:n}})}(OpenSeadragon);!function(a){a.ImageTileSource=function(e){e=a.extend({buildPyramid:!0,crossOriginPolicy:!1,ajaxWithCredentials:!1,useCanvas:!0},e);a.TileSource.apply(this,[e])};a.extend(a.ImageTileSource.prototype,a.TileSource.prototype,{supports:function(e,t){return e.type&&"image"===e.type},configure:function(e,t,i){return e},getImageInfo:function(e){var t=this._image=new Image;var i=this;this.crossOriginPolicy&&(t.crossOrigin=this.crossOriginPolicy);this.ajaxWithCredentials&&(t.useCredentials=this.ajaxWithCredentials);a.addEvent(t,"load",function(){i.width=t.naturalWidth;i.height=t.naturalHeight;i.aspectRatio=i.width/i.height;i.dimensions=new a.Point(i.width,i.height);i._tileWidth=i.width;i._tileHeight=i.height;i.tileOverlap=0;i.minLevel=0;i.levels=i._buildLevels();i.maxLevel=i.levels.length-1;i.ready=!0;i.raiseEvent("ready",{tileSource:i})});a.addEvent(t,"error",function(){i.raiseEvent("open-failed",{message:"Error loading image at "+e,source:e})});t.src=e},getLevelScale:function(e){var t=NaN;return t=e>=this.minLevel&&e<=this.maxLevel?this.levels[e].width/this.levels[this.maxLevel].width:t},getNumTiles:function(e){return this.getLevelScale(e)?new a.Point(1,1):new a.Point(0,0)},getTileUrl:function(e,t,i){var n=null;return n=e>=this.minLevel&&e<=this.maxLevel?this.levels[e].url:n},getContext2D:function(e,t,i){var n=null;return n=e>=this.minLevel&&e<=this.maxLevel?this.levels[e].context2D:n},destroy:function(){this._freeupCanvasMemory()},_buildLevels:function(){var e=[{url:this._image.src,width:this._image.naturalWidth,height:this._image.naturalHeight}];if(!this.buildPyramid||!a.supportsCanvas||!this.useCanvas){delete this._image;return e}var t=this._image.naturalWidth;var i=this._image.naturalHeight;var n=document.createElement("canvas");var o=n.getContext("2d");n.width=t;n.height=i;o.drawImage(this._image,0,0,t,i);e[0].context2D=o;delete this._image;if(a.isCanvasTainted(n))return e;for(;2<=t&&2<=i;){t=Math.floor(t/2);i=Math.floor(i/2);var r=document.createElement("canvas");var s=r.getContext("2d");r.width=t;r.height=i;s.drawImage(n,0,0,t,i);e.splice(0,0,{context2D:s,width:t,height:i});n=r;o=s}return e},_freeupCanvasMemory:function(){for(var e=0;e<this.levels.length;e++)if(this.levels[e].context2D){this.levels[e].context2D.canvas.height=0;this.levels[e].context2D.canvas.width=0}}})}(OpenSeadragon);!function(o){o.TileSourceCollection=function(e,t,i,n){o.console.error("TileSourceCollection is deprecated; use World instead")}}(OpenSeadragon);!function(i){i.ButtonState={REST:0,GROUP:1,HOVER:2,DOWN:3};i.Button=function(e){var t=this;i.EventSource.call(this);i.extend(!0,this,{tooltip:null,srcRest:null,srcGroup:null,srcHover:null,srcDown:null,clickTimeThreshold:i.DEFAULT_SETTINGS.clickTimeThreshold,clickDistThreshold:i.DEFAULT_SETTINGS.clickDistThreshold,fadeDelay:0,fadeLength:2e3,onPress:null,onRelease:null,onClick:null,onEnter:null,onExit:null,onFocus:null,onBlur:null,userData:null},e);this.element=e.element||i.makeNeutralElement("div");if(!e.element){this.imgRest=i.makeTransparentImage(this.srcRest);this.imgGroup=i.makeTransparentImage(this.srcGroup);this.imgHover=i.makeTransparentImage(this.srcHover);this.imgDown=i.makeTransparentImage(this.srcDown);this.imgRest.alt=this.imgGroup.alt=this.imgHover.alt=this.imgDown.alt=this.tooltip;i.setElementPointerEventsNone(this.imgRest);i.setElementPointerEventsNone(this.imgGroup);i.setElementPointerEventsNone(this.imgHover);i.setElementPointerEventsNone(this.imgDown);this.element.style.position="relative";i.setElementTouchActionNone(this.element);this.imgGroup.style.position=this.imgHover.style.position=this.imgDown.style.position="absolute";this.imgGroup.style.top=this.imgHover.style.top=this.imgDown.style.top="0px";this.imgGroup.style.left=this.imgHover.style.left=this.imgDown.style.left="0px";this.imgHover.style.visibility=this.imgDown.style.visibility="hidden";i.Browser.vendor===i.BROWSERS.FIREFOX&&i.Browser.version<3&&(this.imgGroup.style.top=this.imgHover.style.top=this.imgDown.style.top="");this.element.appendChild(this.imgRest);this.element.appendChild(this.imgGroup);this.element.appendChild(this.imgHover);this.element.appendChild(this.imgDown)}this.addHandler("press",this.onPress);this.addHandler("release",this.onRelease);this.addHandler("click",this.onClick);this.addHandler("enter",this.onEnter);this.addHandler("exit",this.onExit);this.addHandler("focus",this.onFocus);this.addHandler("blur",this.onBlur);this.currentState=i.ButtonState.GROUP;this.fadeBeginTime=null;this.shouldFade=!1;this.element.style.display="inline-block";this.element.style.position="relative";this.element.title=this.tooltip;this.tracker=new i.MouseTracker({userData:"Button.tracker",element:this.element,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,enterHandler:function(e){if(e.insideElementPressed){o(t,i.ButtonState.DOWN);t.raiseEvent("enter",{originalEvent:e.originalEvent})}else e.buttonDownAny||o(t,i.ButtonState.HOVER)},focusHandler:function(e){t.tracker.enterHandler(e);t.raiseEvent("focus",{originalEvent:e.originalEvent})},leaveHandler:function(e){r(t,i.ButtonState.GROUP);e.insideElementPressed&&t.raiseEvent("exit",{originalEvent:e.originalEvent})},blurHandler:function(e){t.tracker.leaveHandler(e);t.raiseEvent("blur",{originalEvent:e.originalEvent})},pressHandler:function(e){o(t,i.ButtonState.DOWN);t.raiseEvent("press",{originalEvent:e.originalEvent})},releaseHandler:function(e){if(e.insideElementPressed&&e.insideElementReleased){r(t,i.ButtonState.HOVER);t.raiseEvent("release",{originalEvent:e.originalEvent})}else e.insideElementPressed?r(t,i.ButtonState.GROUP):o(t,i.ButtonState.HOVER)},clickHandler:function(e){e.quick&&t.raiseEvent("click",{originalEvent:e.originalEvent})},keyHandler:function(e){if(13===e.keyCode){t.raiseEvent("click",{originalEvent:e.originalEvent});t.raiseEvent("release",{originalEvent:e.originalEvent});e.preventDefault=!0}else e.preventDefault=!1}});r(this,i.ButtonState.REST)};i.extend(i.Button.prototype,i.EventSource.prototype,{notifyGroupEnter:function(){o(this,i.ButtonState.GROUP)},notifyGroupExit:function(){r(this,i.ButtonState.REST)},disable:function(){this.notifyGroupExit();this.element.disabled=!0;i.setElementOpacity(this.element,.2,!0)},enable:function(){this.element.disabled=!1;i.setElementOpacity(this.element,1,!0);this.notifyGroupEnter()},destroy:function(){if(this.imgRest){this.element.removeChild(this.imgRest);this.imgRest=null}if(this.imgGroup){this.element.removeChild(this.imgGroup);this.imgGroup=null}if(this.imgHover){this.element.removeChild(this.imgHover);this.imgHover=null}if(this.imgDown){this.element.removeChild(this.imgDown);this.imgDown=null}this.removeAllHandlers();this.tracker.destroy();this.element=null}});function n(e){i.requestAnimationFrame(function(){!function(e){var t;if(e.shouldFade){t=i.now();t=t-e.fadeBeginTime;t=1-t/e.fadeLength;t=Math.min(1,t);t=Math.max(0,t);e.imgGroup&&i.setElementOpacity(e.imgGroup,t,!0);0<t&&n(e)}}(e)})}function o(e,t){if(!e.element.disabled){if(t>=i.ButtonState.GROUP&&e.currentState===i.ButtonState.REST){!function(e){e.shouldFade=!1;e.imgGroup&&i.setElementOpacity(e.imgGroup,1,!0)}(e);e.currentState=i.ButtonState.GROUP}if(t>=i.ButtonState.HOVER&&e.currentState===i.ButtonState.GROUP){e.imgHover&&(e.imgHover.style.visibility="");e.currentState=i.ButtonState.HOVER}if(t>=i.ButtonState.DOWN&&e.currentState===i.ButtonState.HOVER){e.imgDown&&(e.imgDown.style.visibility="");e.currentState=i.ButtonState.DOWN}}}function r(e,t){if(!e.element.disabled){if(t<=i.ButtonState.HOVER&&e.currentState===i.ButtonState.DOWN){e.imgDown&&(e.imgDown.style.visibility="hidden");e.currentState=i.ButtonState.HOVER}if(t<=i.ButtonState.GROUP&&e.currentState===i.ButtonState.HOVER){e.imgHover&&(e.imgHover.style.visibility="hidden");e.currentState=i.ButtonState.GROUP}if(t<=i.ButtonState.REST&&e.currentState===i.ButtonState.GROUP){!function(e){e.shouldFade=!0;e.fadeBeginTime=i.now()+e.fadeDelay;window.setTimeout(function(){n(e)},e.fadeDelay)}(e);e.currentState=i.ButtonState.REST}}}}(OpenSeadragon);!function(o){o.ButtonGroup=function(e){o.extend(!0,this,{buttons:[],clickTimeThreshold:o.DEFAULT_SETTINGS.clickTimeThreshold,clickDistThreshold:o.DEFAULT_SETTINGS.clickDistThreshold,labelText:""},e);var t,i=this.buttons.concat([]),n=this;this.element=e.element||o.makeNeutralElement("div");if(!e.group){this.element.style.display="inline-block";for(t=0;t<i.length;t++)this.element.appendChild(i[t].element)}o.setElementTouchActionNone(this.element);this.tracker=new o.MouseTracker({userData:"ButtonGroup.tracker",element:this.element,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,enterHandler:function(e){var t;for(t=0;t<n.buttons.length;t++)n.buttons[t].notifyGroupEnter()},leaveHandler:function(e){var t;if(!e.insideElementPressed)for(t=0;t<n.buttons.length;t++)n.buttons[t].notifyGroupExit()}})};o.ButtonGroup.prototype={emulateEnter:function(){this.tracker.enterHandler({eventSource:this.tracker})},emulateLeave:function(){this.tracker.leaveHandler({eventSource:this.tracker})},destroy:function(){for(;this.buttons.length;){var e=this.buttons.pop();this.element.removeChild(e.element);e.destroy()}this.tracker.destroy();this.element=null}}}(OpenSeadragon);!function(v){v.Rect=function(e,t,i,n,o){this.x="number"==typeof e?e:0;this.y="number"==typeof t?t:0;this.width="number"==typeof i?i:0;this.height="number"==typeof n?n:0;this.degrees="number"==typeof o?o:0;this.degrees=v.positiveModulo(this.degrees,360);var r,s;if(270<=this.degrees){r=this.getTopRight();this.x=r.x;this.y=r.y;s=this.height;this.height=this.width;this.width=s;this.degrees-=270}else if(180<=this.degrees){r=this.getBottomRight();this.x=r.x;this.y=r.y;this.degrees-=180}else if(90<=this.degrees){r=this.getBottomLeft();this.x=r.x;this.y=r.y;s=this.height;this.height=this.width;this.width=s;this.degrees-=90}};v.Rect.fromSummits=function(e,t,i){var n=e.distanceTo(t);var o=e.distanceTo(i);i=t.minus(e);t=Math.atan(i.y/i.x);i.x<0?t+=Math.PI:i.y<0&&(t+=2*Math.PI);return new v.Rect(e.x,e.y,n,o,t/Math.PI*180)};v.Rect.prototype={clone:function(){return new v.Rect(this.x,this.y,this.width,this.height,this.degrees)},getAspectRatio:function(){return this.width/this.height},getTopLeft:function(){return new v.Point(this.x,this.y)},getBottomRight:function(){return new v.Point(this.x+this.width,this.y+this.height).rotate(this.degrees,this.getTopLeft())},getTopRight:function(){return new v.Point(this.x+this.width,this.y).rotate(this.degrees,this.getTopLeft())},getBottomLeft:function(){return new v.Point(this.x,this.y+this.height).rotate(this.degrees,this.getTopLeft())},getCenter:function(){return new v.Point(this.x+this.width/2,this.y+this.height/2).rotate(this.degrees,this.getTopLeft())},getSize:function(){return new v.Point(this.width,this.height)},equals:function(e){return e instanceof v.Rect&&this.x===e.x&&this.y===e.y&&this.width===e.width&&this.height===e.height&&this.degrees===e.degrees},times:function(e){return new v.Rect(this.x*e,this.y*e,this.width*e,this.height*e,this.degrees)},translate:function(e){return new v.Rect(this.x+e.x,this.y+e.y,this.width,this.height,this.degrees)},union:function(e){var t=this.getBoundingBox();var i=e.getBoundingBox();var n=Math.min(t.x,i.x);var o=Math.min(t.y,i.y);e=Math.max(t.x+t.width,i.x+i.width);i=Math.max(t.y+t.height,i.y+i.height);return new v.Rect(n,o,e-n,i-o)},intersection:function(e){var s=1e-10;var t=[];var i=this.getTopLeft();e.containsPoint(i,s)&&t.push(i);i=this.getTopRight();e.containsPoint(i,s)&&t.push(i);i=this.getBottomLeft();e.containsPoint(i,s)&&t.push(i);i=this.getBottomRight();e.containsPoint(i,s)&&t.push(i);i=e.getTopLeft();this.containsPoint(i,s)&&t.push(i);i=e.getTopRight();this.containsPoint(i,s)&&t.push(i);i=e.getBottomLeft();this.containsPoint(i,s)&&t.push(i);i=e.getBottomRight();this.containsPoint(i,s)&&t.push(i);var n=this._getSegments();var o=e._getSegments();for(var r=0;r<n.length;r++){var a=n[r];for(var l=0;l<o.length;l++){var h=o[l];h=function(e,t,i,n){var o=t.minus(e);var r=n.minus(i);t=-r.x*o.y+o.x*r.y;if(0==t)return null;n=(o.x*(e.y-i.y)-o.y*(e.x-i.x))/t;t=(r.x*(e.y-i.y)-r.y*(e.x-i.x))/t;if(-s<=n&&n<=1-s&&-s<=t&&t<=1-s)return new v.Point(e.x+t*o.x,e.y+t*o.y);return null}(a[0],a[1],h[0],h[1]);h&&t.push(h)}}if(0===t.length)return null;var c=t[0].x;var u=t[0].x;var d=t[0].y;var p=t[0].y;for(var g=1;g<t.length;g++){var m=t[g];m.x<c&&(c=m.x);m.x>u&&(u=m.x);m.y<d&&(d=m.y);m.y>p&&(p=m.y)}return new v.Rect(c,d,u-c,p-d)},_getSegments:function(){var e=this.getTopLeft();var t=this.getTopRight();var i=this.getBottomLeft();var n=this.getBottomRight();return[[e,t],[t,n],[n,i],[i,e]]},rotate:function(e,t){if(0===(e=v.positiveModulo(e,360)))return this.clone();t=t||this.getCenter();var i=this.getTopLeft().rotate(e,t);e=this.getTopRight().rotate(e,t).minus(i);e=e.apply(function(e){return Math.abs(e)<1e-15?0:e});t=Math.atan(e.y/e.x);e.x<0?t+=Math.PI:e.y<0&&(t+=2*Math.PI);return new v.Rect(i.x,i.y,this.width,this.height,t/Math.PI*180)},getBoundingBox:function(){if(0===this.degrees)return this.clone();var e=this.getTopLeft();var t=this.getTopRight();var i=this.getBottomLeft();var n=this.getBottomRight();var o=Math.min(e.x,t.x,i.x,n.x);var r=Math.max(e.x,t.x,i.x,n.x);var s=Math.min(e.y,t.y,i.y,n.y);n=Math.max(e.y,t.y,i.y,n.y);return new v.Rect(o,s,r-o,n-s)},getIntegerBoundingBox:function(){var e=this.getBoundingBox();var t=Math.floor(e.x);var i=Math.floor(e.y);var n=Math.ceil(e.width+e.x-t);e=Math.ceil(e.height+e.y-i);return new v.Rect(t,i,n,e)},containsPoint:function(e,t){t=t||0;var i=this.getTopLeft();var n=this.getTopRight();var o=this.getBottomLeft();var r=n.minus(i);var s=o.minus(i);return(e.x-i.x)*r.x+(e.y-i.y)*r.y>=-t&&(e.x-n.x)*r.x+(e.y-n.y)*r.y<=t&&(e.x-i.x)*s.x+(e.y-i.y)*s.y>=-t&&(e.x-o.x)*s.x+(e.y-o.y)*s.y<=t},toString:function(){return"["+Math.round(100*this.x)/100+", "+Math.round(100*this.y)/100+", "+Math.round(100*this.width)/100+"x"+Math.round(100*this.height)/100+", "+Math.round(100*this.degrees)/100+"deg]"}}}(OpenSeadragon);!function(h){var s={};h.ReferenceStrip=function(e){var t,i,n,o=e.viewer,r=h.getElementSize(o.element);if(!e.id){e.id="referencestrip-"+h.now();this.element=h.makeNeutralElement("div");this.element.id=e.id;this.element.className="referencestrip"}e=h.extend(!0,{sizeRatio:h.DEFAULT_SETTINGS.referenceStripSizeRatio,position:h.DEFAULT_SETTINGS.referenceStripPosition,scroll:h.DEFAULT_SETTINGS.referenceStripScroll,clickTimeThreshold:h.DEFAULT_SETTINGS.clickTimeThreshold},e,{element:this.element});h.extend(this,e);s[this.id]={animating:!1};this.minPixelRatio=this.viewer.minPixelRatio;this.element.tabIndex=0;(i=this.element.style).marginTop="0px";i.marginRight="0px";i.marginBottom="0px";i.marginLeft="0px";i.left="0px";i.bottom="0px";i.border="0px";i.background="#000";i.position="relative";h.setElementTouchActionNone(this.element);h.setElementOpacity(this.element,.8);this.viewer=o;this.tracker=new h.MouseTracker({userData:"ReferenceStrip.tracker",element:this.element,clickHandler:h.delegate(this,a),dragHandler:h.delegate(this,l),scrollHandler:h.delegate(this,c),enterHandler:h.delegate(this,d),leaveHandler:h.delegate(this,p),keyDownHandler:h.delegate(this,g),keyHandler:h.delegate(this,m),preProcessEventHandler:function(e){"wheel"===e.eventType&&(e.preventDefault=!0)}});if(e.width&&e.height){this.element.style.width=e.width+"px";this.element.style.height=e.height+"px";o.addControl(this.element,{anchor:h.ControlAnchor.BOTTOM_LEFT})}else if("horizontal"===e.scroll){this.element.style.width=r.x*e.sizeRatio*o.tileSources.length+12*o.tileSources.length+"px";this.element.style.height=r.y*e.sizeRatio+"px";o.addControl(this.element,{anchor:h.ControlAnchor.BOTTOM_LEFT})}else{this.element.style.height=r.y*e.sizeRatio*o.tileSources.length+12*o.tileSources.length+"px";this.element.style.width=r.x*e.sizeRatio+"px";o.addControl(this.element,{anchor:h.ControlAnchor.TOP_LEFT})}this.panelWidth=r.x*this.sizeRatio+8;this.panelHeight=r.y*this.sizeRatio+8;this.panels=[];this.miniViewers={};for(n=0;n<o.tileSources.length;n++){(t=h.makeNeutralElement("div")).id=this.element.id+"-"+n;t.style.width=this.panelWidth+"px";t.style.height=this.panelHeight+"px";t.style.display="inline";t.style.float="left";t.style.cssFloat="left";t.style.styleFloat="left";t.style.padding="2px";h.setElementTouchActionNone(t);h.setElementPointerEventsNone(t);this.element.appendChild(t);t.activePanel=!1;this.panels.push(t)}u(this,"vertical"===this.scroll?r.y:r.x,0);this.setFocus(0)};h.ReferenceStrip.prototype={setFocus:function(e){var t,i=this.element.querySelector("#"+this.element.id+"-"+e),n=h.getElementSize(this.viewer.canvas),o=Number(this.element.style.width.replace("px","")),r=Number(this.element.style.height.replace("px","")),s=-Number(this.element.style.marginLeft.replace("px","")),a=-Number(this.element.style.marginTop.replace("px",""));if(this.currentSelected!==i){this.currentSelected&&(this.currentSelected.style.background="#000");this.currentSelected=i;this.currentSelected.style.background="#999";if("horizontal"===this.scroll){if((t=Number(e)*(this.panelWidth+3))>s+n.x-this.panelWidth){t=Math.min(t,o-n.x);this.element.style.marginLeft=-t+"px";u(this,n.x,-t)}else if(t<s){t=Math.max(0,t-n.x/2);this.element.style.marginLeft=-t+"px";u(this,n.x,-t)}}else if((t=Number(e)*(this.panelHeight+3))>a+n.y-this.panelHeight){t=Math.min(t,r-n.y);this.element.style.marginTop=-t+"px";u(this,n.y,-t)}else if(t<a){t=Math.max(0,t-n.y/2);this.element.style.marginTop=-t+"px";u(this,n.y,-t)}this.currentPage=e;d.call(this,{eventSource:this.tracker})}},update:function(){return!!s[this.id].animating},destroy:function(){if(this.miniViewers)for(var e in this.miniViewers)this.miniViewers[e].destroy();this.tracker.destroy();this.element&&this.viewer.removeControl(this.element)}};function a(e){if(e.quick){e="horizontal"===this.scroll?Math.floor(e.position.x/this.panelWidth):Math.floor(e.position.y/this.panelHeight);this.viewer.goToPage(e)}this.element.focus()}function l(e){this.dragging=!0;if(this.element){var t=Number(this.element.style.marginLeft.replace("px","")),i=Number(this.element.style.marginTop.replace("px","")),n=Number(this.element.style.width.replace("px","")),o=Number(this.element.style.height.replace("px","")),r=h.getElementSize(this.viewer.canvas);if("horizontal"===this.scroll){if(0<-e.delta.x){if(t>-(n-r.x)){this.element.style.marginLeft=t+2*e.delta.x+"px";u(this,r.x,t+2*e.delta.x)}}else if(-e.delta.x<0&&t<0){this.element.style.marginLeft=t+2*e.delta.x+"px";u(this,r.x,t+2*e.delta.x)}}else if(0<-e.delta.y){if(i>-(o-r.y)){this.element.style.marginTop=i+2*e.delta.y+"px";u(this,r.y,i+2*e.delta.y)}}else if(-e.delta.y<0&&i<0){this.element.style.marginTop=i+2*e.delta.y+"px";u(this,r.y,i+2*e.delta.y)}}}function c(e){if(this.element){var t=Number(this.element.style.marginLeft.replace("px","")),i=Number(this.element.style.marginTop.replace("px","")),n=Number(this.element.style.width.replace("px","")),o=Number(this.element.style.height.replace("px","")),r=h.getElementSize(this.viewer.canvas);if("horizontal"===this.scroll){if(0<e.scroll){if(t>-(n-r.x)){this.element.style.marginLeft=t-60*e.scroll+"px";u(this,r.x,t-60*e.scroll)}}else if(e.scroll<0&&t<0){this.element.style.marginLeft=t-60*e.scroll+"px";u(this,r.x,t-60*e.scroll)}}else if(e.scroll<0){if(i>r.y-o){this.element.style.marginTop=i+60*e.scroll+"px";u(this,r.y,i+60*e.scroll)}}else if(0<e.scroll&&i<0){this.element.style.marginTop=i+60*e.scroll+"px";u(this,r.y,i+60*e.scroll)}e.preventDefault=!0}}function u(e,t,i){var n,o,r,s,a;n="horizontal"===e.scroll?e.panelWidth:e.panelHeight;o=Math.ceil(t/n)+5;for(s=o=(o=(r=Math.ceil((Math.abs(i)+t)/n)+1)-o)<0?0:o;s<r&&s<e.panels.length;s++)if(!(a=e.panels[s]).activePanel){var l=e.viewer.tileSources[s];l=l.referenceStripThumbnailUrl?{type:"image",url:l.referenceStripThumbnailUrl}:l;l=new h.Viewer({id:a.id,tileSources:[l],element:a,navigatorSizeRatio:e.sizeRatio,showNavigator:!1,mouseNavEnabled:!1,showNavigationControl:!1,showSequenceControl:!1,immediateRender:!0,blendTime:0,animationTime:0,loadTilesWithAjax:e.viewer.loadTilesWithAjax,ajaxHeaders:e.viewer.ajaxHeaders,useCanvas:e.useCanvas});h.setElementPointerEventsNone(l.canvas);h.setElementPointerEventsNone(l.container);l.innerTracker.setTracking(!1);l.outerTracker.setTracking(!1);e.miniViewers[a.id]=l;a.activePanel=!0}}function d(e){e=e.eventSource.element;"horizontal"===this.scroll?e.style.marginBottom="0px":e.style.marginLeft="0px"}function p(e){e=e.eventSource.element;"horizontal"===this.scroll?e.style.marginBottom="-"+h.getElementSize(e).y/2+"px":e.style.marginLeft="-"+h.getElementSize(e).x/2+"px"}function g(e){if(e.ctrl||e.alt||e.meta)e.preventDefault=!1;else switch(e.keyCode){case 38:c.call(this,{eventSource:this.tracker,position:null,scroll:1,shift:null});e.preventDefault=!0;break;case 40:case 37:c.call(this,{eventSource:this.tracker,position:null,scroll:-1,shift:null});e.preventDefault=!0;break;case 39:c.call(this,{eventSource:this.tracker,position:null,scroll:1,shift:null});e.preventDefault=!0;break;default:e.preventDefault=!1}}function m(e){if(e.ctrl||e.alt||e.meta)e.preventDefault=!1;else switch(e.keyCode){case 61:c.call(this,{eventSource:this.tracker,position:null,scroll:1,shift:null});e.preventDefault=!0;break;case 45:c.call(this,{eventSource:this.tracker,position:null,scroll:-1,shift:null});e.preventDefault=!0;break;case 48:case 119:case 87:c.call(this,{eventSource:this.tracker,position:null,scroll:1,shift:null});e.preventDefault=!0;break;case 115:case 83:case 97:c.call(this,{eventSource:this.tracker,position:null,scroll:-1,shift:null});e.preventDefault=!0;break;case 100:c.call(this,{eventSource:this.tracker,position:null,scroll:1,shift:null});e.preventDefault=!0;break;default:e.preventDefault=!1}}}(OpenSeadragon);!function(s){s.DisplayRect=function(e,t,i,n,o,r){s.Rect.apply(this,[e,t,i,n]);this.minLevel=o;this.maxLevel=r};s.extend(s.DisplayRect.prototype,s.Rect.prototype)}(OpenSeadragon);!function(o){o.Spring=function(e){var t=arguments;"object"!=typeof e&&(e={initial:t.length&&"number"==typeof t[0]?t[0]:void 0,springStiffness:1<t.length?t[1].springStiffness:5,animationTime:1<t.length?t[1].animationTime:1.5});o.console.assert("number"==typeof e.springStiffness&&0!==e.springStiffness,"[OpenSeadragon.Spring] options.springStiffness must be a non-zero number");o.console.assert("number"==typeof e.animationTime&&0<=e.animationTime,"[OpenSeadragon.Spring] options.animationTime must be a number greater than or equal to 0");if(e.exponential){this._exponential=!0;delete e.exponential}o.extend(!0,this,e);this.current={value:"number"==typeof this.initial?this.initial:this._exponential?0:1,time:o.now()};o.console.assert(!this._exponential||0!==this.current.value,"[OpenSeadragon.Spring] value must be non-zero for exponential springs");this.start={value:this.current.value,time:this.current.time};this.target={value:this.current.value,time:this.current.time};if(this._exponential){this.start._logValue=Math.log(this.start.value);this.target._logValue=Math.log(this.target.value);this.current._logValue=Math.log(this.current.value)}};o.Spring.prototype={resetTo:function(e){o.console.assert(!this._exponential||0!==e,"[OpenSeadragon.Spring.resetTo] target must be non-zero for exponential springs");this.start.value=this.target.value=this.current.value=e;this.start.time=this.target.time=this.current.time=o.now();if(this._exponential){this.start._logValue=Math.log(this.start.value);this.target._logValue=Math.log(this.target.value);this.current._logValue=Math.log(this.current.value)}},springTo:function(e){o.console.assert(!this._exponential||0!==e,"[OpenSeadragon.Spring.springTo] target must be non-zero for exponential springs");this.start.value=this.current.value;this.start.time=this.current.time;this.target.value=e;this.target.time=this.start.time+1e3*this.animationTime;if(this._exponential){this.start._logValue=Math.log(this.start.value);this.target._logValue=Math.log(this.target.value)}},shiftBy:function(e){this.start.value+=e;this.target.value+=e;if(this._exponential){o.console.assert(0!==this.target.value&&0!==this.start.value,"[OpenSeadragon.Spring.shiftBy] spring value must be non-zero for exponential springs");this.start._logValue=Math.log(this.start.value);this.target._logValue=Math.log(this.target.value)}},setExponential:function(e){this._exponential=e;if(this._exponential){o.console.assert(0!==this.current.value&&0!==this.target.value&&0!==this.start.value,"[OpenSeadragon.Spring.setExponential] spring value must be non-zero for exponential springs");this.start._logValue=Math.log(this.start.value);this.target._logValue=Math.log(this.target.value);this.current._logValue=Math.log(this.current.value)}},update:function(){this.current.time=o.now();var e,t;if(this._exponential){e=this.start._logValue;t=this.target._logValue}else{e=this.start.value;t=this.target.value}i=this.current.time>=this.target.time?t:e+(t-e)*(n=this.springStiffness,i=(this.current.time-this.start.time)/(this.target.time-this.start.time),(1-Math.exp(n*-i))/(1-Math.exp(-n)));var i;var n=this.current.value;this._exponential?this.current.value=Math.exp(i):this.current.value=i;return n!==this.current.value},isAtTargetValue:function(){return this.current.value===this.target.value}}}(OpenSeadragon);!function(t){function n(e){t.extend(!0,this,{timeout:t.DEFAULT_SETTINGS.timeout,jobId:null},e);this.image=null}n.prototype={errorMsg:null,start:function(){var o=this;var e=this.abort;this.image=new Image;this.image.onload=function(){o.finish(!0)};this.image.onabort=this.image.onerror=function(){o.errorMsg="Image load aborted";o.finish(!1)};this.jobId=window.setTimeout(function(){o.errorMsg="Image load exceeded timeout ("+o.timeout+" ms)";o.finish(!1)},this.timeout);if(this.loadWithAjax){this.request=t.makeAjaxRequest({url:this.src,withCredentials:this.ajaxWithCredentials,headers:this.ajaxHeaders,responseType:"arraybuffer",postData:this.postData,success:function(t){try{n=new window.Blob([t.response])}catch(e){var i=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder;if("TypeError"===e.name&&i){i=new i;i.append(t.response);n=i.getBlob()}}if(0===n.size){o.errorMsg="Empty image response.";o.finish(!1)}var n=(window.URL||window.webkitURL).createObjectURL(n);o.image.src=n},error:function(e){o.errorMsg="Image load aborted - XHR error: Ajax returned "+e.status;o.finish(!1)}});this.abort=function(){o.request.abort();"function"==typeof e&&e()}}else{!1!==this.crossOriginPolicy&&(this.image.crossOrigin=this.crossOriginPolicy);this.image.src=this.src}},finish:function(e){this.image.onload=this.image.onerror=this.image.onabort=null;e||(this.image=null);this.jobId&&window.clearTimeout(this.jobId);this.callback(this)}};t.ImageLoader=function(e){t.extend(!0,this,{jobLimit:t.DEFAULT_SETTINGS.imageLoaderLimit,timeout:t.DEFAULT_SETTINGS.timeout,jobQueue:[],jobsInProgress:0},e)};t.ImageLoader.prototype={addJob:function(t){var i=this,e=new n({src:t.src,loadWithAjax:t.loadWithAjax,ajaxHeaders:t.loadWithAjax?t.ajaxHeaders:null,crossOriginPolicy:t.crossOriginPolicy,ajaxWithCredentials:t.ajaxWithCredentials,postData:t.postData,callback:function(e){!function(e,t,i){e.jobsInProgress--;if((!e.jobLimit||e.jobsInProgress<e.jobLimit)&&0<e.jobQueue.length){e.jobQueue.shift().start();e.jobsInProgress++}i(t.image,t.errorMsg,t.request)}(i,e,t.callback)},abort:t.abort,timeout:this.timeout});if(!this.jobLimit||this.jobsInProgress<this.jobLimit){e.start();this.jobsInProgress++}else this.jobQueue.push(e)},clear:function(){for(var e=0;e<this.jobQueue.length;e++){var t=this.jobQueue[e];"function"==typeof t.abort&&t.abort()}this.jobQueue=[]}}}(OpenSeadragon);!function(d){d.Tile=function(e,t,i,n,o,r,s,a,l,h,c,u){this.level=e;this.x=t;this.y=i;this.bounds=n;this.sourceBounds=h;this.exists=o;this.url=r;this.postData=c;this.context2D=s;this.loadWithAjax=a;this.ajaxHeaders=l;if(void 0===u){d.console.error("Tile constructor needs 'cacheKey' variable: creation tile cache in Tile class is deprecated. TileSource.prototype.getTileHashKey will be used.");u=d.TileSource.prototype.getTileHashKey(e,t,i,r,l,c)}this.cacheKey=u;this.loaded=!1;this.loading=!1;this.element=null;this.imgElement=null;this.image=null;this.style=null;this.position=null;this.size=null;this.flipped=!1;this.blendStart=null;this.opacity=null;this.squaredDistance=null;this.visibility=null;this.beingDrawn=!1;this.lastTouchTime=0;this.isRightMost=!1;this.isBottomMost=!1};d.Tile.prototype={toString:function(){return this.level+"/"+this.x+"_"+this.y},_hasTransparencyChannel:function(){return!!this.context2D||this.url.match(".png")},drawHTML:function(e){if(this.cacheImageRecord)if(this.loaded){if(!this.element){this.element=d.makeNeutralElement("div");this.imgElement=this.cacheImageRecord.getImage().cloneNode();this.imgElement.style.msInterpolationMode="nearest-neighbor";this.imgElement.style.width="100%";this.imgElement.style.height="100%";this.style=this.element.style;this.style.position="absolute"}this.element.parentNode!==e&&e.appendChild(this.element);this.imgElement.parentNode!==this.element&&this.element.appendChild(this.imgElement);this.style.top=this.position.y+"px";this.style.left=this.position.x+"px";this.style.height=this.size.y+"px";this.style.width=this.size.x+"px";this.flipped&&(this.style.transform="scaleX(-1)");d.setElementOpacity(this.element,this.opacity)}else d.console.warn("Attempting to draw tile %s when it's not yet loaded.",this.toString());else d.console.warn("[Tile.drawHTML] attempting to draw tile %s when it's not cached",this.toString())},drawCanvas:function(e,t,i,n,o){var r,s=this.position.times(d.pixelDensityRatio),a=this.size.times(d.pixelDensityRatio);if(this.context2D||this.cacheImageRecord){r=this.context2D||this.cacheImageRecord.getRenderedContext();if(this.loaded&&r){e.save();e.globalAlpha=this.opacity;if("number"==typeof i&&1!==i){s=s.times(i);a=a.times(i)}n instanceof d.Point&&(s=s.plus(n));if(1===e.globalAlpha&&this._hasTransparencyChannel()){if(o){s.x=Math.round(s.x);s.y=Math.round(s.y);a.x=Math.round(a.x);a.y=Math.round(a.y)}e.clearRect(s.x,s.y,a.x,a.y)}t({context:e,tile:this,rendered:r});var l,h;if(this.sourceBounds){l=Math.min(this.sourceBounds.width,r.canvas.width);h=Math.min(this.sourceBounds.height,r.canvas.height)}else{l=r.canvas.width;h=r.canvas.height}e.translate(s.x+a.x/2,0);this.flipped&&e.scale(-1,1);e.drawImage(r.canvas,0,0,l,h,-a.x/2,s.y,a.x,a.y);e.restore()}else d.console.warn("Attempting to draw tile %s when it's not yet loaded.",this.toString())}else d.console.warn("[Tile.drawCanvas] attempting to draw tile %s when it's not cached",this.toString())},getScaleForEdgeSmoothing:function(){var e;if(this.cacheImageRecord)e=this.cacheImageRecord.getRenderedContext();else{if(!this.context2D){d.console.warn("[Tile.drawCanvas] attempting to get tile scale %s when tile's not cached",this.toString());return 1}e=this.context2D}return e.canvas.width/(this.size.x*d.pixelDensityRatio)},getTranslationForEdgeSmoothing:function(e,t,i){var n=Math.max(1,Math.ceil((i.x-t.x)/2));t=Math.max(1,Math.ceil((i.y-t.y)/2));return new d.Point(n,t).minus(this.position.times(d.pixelDensityRatio).times(e||1).apply(function(e){return e%1}))},unload:function(){this.imgElement&&this.imgElement.parentNode&&this.imgElement.parentNode.removeChild(this.imgElement);this.element&&this.element.parentNode&&this.element.parentNode.removeChild(this.element);this.element=null;this.imgElement=null;this.loaded=!1;this.loading=!1}}}(OpenSeadragon);!function(r){r.OverlayPlacement=r.Placement;r.OverlayRotationMode=r.freezeObject({NO_ROTATION:1,EXACT:2,BOUNDING_BOX:3});r.Overlay=function(e,t,i){i=r.isPlainObject(e)?e:{element:e,location:t,placement:i};this.element=i.element;this.style=i.element.style;this._init(i)};r.Overlay.prototype={_init:function(e){this.location=e.location;this.placement=void 0===e.placement?r.Placement.TOP_LEFT:e.placement;this.onDraw=e.onDraw;this.checkResize=void 0===e.checkResize||e.checkResize;this.width=void 0===e.width?null:e.width;this.height=void 0===e.height?null:e.height;this.rotationMode=e.rotationMode||r.OverlayRotationMode.EXACT;if(this.location instanceof r.Rect){this.width=this.location.width;this.height=this.location.height;this.location=this.location.getTopLeft();this.placement=r.Placement.TOP_LEFT}this.scales=null!==this.width&&null!==this.height;this.bounds=new r.Rect(this.location.x,this.location.y,this.width,this.height);this.position=this.location},adjust:function(e,t){var i=r.Placement.properties[this.placement];if(i){i.isHorizontallyCentered?e.x-=t.x/2:i.isRight&&(e.x-=t.x);i.isVerticallyCentered?e.y-=t.y/2:i.isBottom&&(e.y-=t.y)}},destroy:function(){var e=this.element;var t=this.style;if(e.parentNode){e.parentNode.removeChild(e);if(e.prevElementParent){t.display="none";document.body.appendChild(e)}}this.onDraw=null;t.top="";t.left="";t.position="";null!==this.width&&(t.width="");null!==this.height&&(t.height="");var i=r.getCssPropertyWithVendorPrefix("transformOrigin");e=r.getCssPropertyWithVendorPrefix("transform");if(i&&e){t[i]="";t[e]=""}},drawHTML:function(e,t){var i=this.element;if(i.parentNode!==e){i.prevElementParent=i.parentNode;i.prevNextSibling=i.nextSibling;e.appendChild(i);this.style.position="absolute";this.size=r.getElementSize(i)}var n=this._getOverlayPositionAndSize(t);e=n.position;i=this.size=n.size;t=n.rotate;if(this.onDraw)this.onDraw(e,i,this.element);else{n=this.style;n.left=e.x+"px";n.top=e.y+"px";null!==this.width&&(n.width=i.x+"px");null!==this.height&&(n.height=i.y+"px");e=r.getCssPropertyWithVendorPrefix("transformOrigin");i=r.getCssPropertyWithVendorPrefix("transform");if(e&&i)if(t){n[e]=this._getTransformOrigin();n[i]="rotate("+t+"deg)"}else{n[e]="";n[i]=""}n.display="block"}},_getOverlayPositionAndSize:function(e){var t=e.pixelFromPoint(this.location,!0);var i=this._getSizeInPixels(e);this.adjust(t,i);var n=0;if(e.degrees&&this.rotationMode!==r.OverlayRotationMode.NO_ROTATION)if(this.rotationMode===r.OverlayRotationMode.BOUNDING_BOX&&null!==this.width&&null!==this.height){var o=new r.Rect(t.x,t.y,i.x,i.y);o=this._getBoundingBox(o,e.degrees);t=o.getTopLeft();i=o.getSize()}else n=e.degrees;return{position:t,size:i,rotate:n}},_getSizeInPixels:function(e){var t=this.size.x;var i=this.size.y;if(null!==this.width||null!==this.height){var n=e.deltaPixelsFromPointsNoRotate(new r.Point(this.width||0,this.height||0),!0);null!==this.width&&(t=n.x);null!==this.height&&(i=n.y)}if(this.checkResize&&(null===this.width||null===this.height)){n=this.size=r.getElementSize(this.element);null===this.width&&(t=n.x);null===this.height&&(i=n.y)}return new r.Point(t,i)},_getBoundingBox:function(e,t){var i=this._getPlacementPoint(e);return e.rotate(t,i).getBoundingBox()},_getPlacementPoint:function(e){var t=new r.Point(e.x,e.y);var i=r.Placement.properties[this.placement];if(i){i.isHorizontallyCentered?t.x+=e.width/2:i.isRight&&(t.x+=e.width);i.isVerticallyCentered?t.y+=e.height/2:i.isBottom&&(t.y+=e.height)}return t},_getTransformOrigin:function(){var e="";var t=r.Placement.properties[this.placement];if(!t)return e;t.isLeft?e="left":t.isRight&&(e="right");t.isTop?e+=" top":t.isBottom&&(e+=" bottom");return e},update:function(e,t){t=r.isPlainObject(e)?e:{location:e,placement:t};this._init({location:t.location||this.location,placement:(void 0!==t.placement?t:this).placement,onDraw:t.onDraw||this.onDraw,checkResize:t.checkResize||this.checkResize,width:(void 0!==t.width?t:this).width,height:(void 0!==t.height?t:this).height,rotationMode:t.rotationMode||this.rotationMode})},getBounds:function(e){r.console.assert(e,"A viewport must now be passed to Overlay.getBounds.");var t=this.width;var i=this.height;if(null===t||null===i){var n=e.deltaPointsFromPixelsNoRotate(this.size,!0);null===t&&(t=n.x);null===i&&(i=n.y)}n=this.location.clone();this.adjust(n,new r.Point(t,i));return this._adjustBoundsForRotation(e,new r.Rect(n.x,n.y,t,i))},_adjustBoundsForRotation:function(e,t){if(!e||0===e.degrees||this.rotationMode===r.OverlayRotationMode.EXACT)return t;if(this.rotationMode!==r.OverlayRotationMode.BOUNDING_BOX)return t.rotate(-e.degrees,this._getPlacementPoint(t));if(null===this.width||null===this.height)return t;t=this._getOverlayPositionAndSize(e);return e.viewerElementToViewportRectangle(new r.Rect(t.position.x,t.position.y,t.size.x,t.size.y))}}}(OpenSeadragon);!function(a){a.Drawer=function(e){a.console.assert(e.viewer,"[Drawer] options.viewer is required");var t=arguments;a.isPlainObject(e)||(e={source:t[0],viewport:t[1],element:t[2]});a.console.assert(e.viewport,"[Drawer] options.viewport is required");a.console.assert(e.element,"[Drawer] options.element is required");e.source&&a.console.error("[Drawer] options.source is no longer accepted; use TiledImage instead");this.viewer=e.viewer;this.viewport=e.viewport;this.debugGridColor="string"==typeof e.debugGridColor?[e.debugGridColor]:e.debugGridColor||a.DEFAULT_SETTINGS.debugGridColor;e.opacity&&a.console.error("[Drawer] options.opacity is no longer accepted; set the opacity on the TiledImage instead");this.useCanvas=a.supportsCanvas&&(!this.viewer||this.viewer.useCanvas);this.container=a.getElement(e.element);this.canvas=a.makeNeutralElement(this.useCanvas?"canvas":"div");this.context=this.useCanvas?this.canvas.getContext("2d"):null;this.sketchCanvas=null;this.sketchContext=null;this.element=this.container;this.container.dir="ltr";if(this.useCanvas){t=this._calculateCanvasSize();this.canvas.width=t.x;this.canvas.height=t.y}this.canvas.style.width="100%";this.canvas.style.height="100%";this.canvas.style.position="absolute";a.setElementOpacity(this.canvas,this.opacity,!0);a.setElementPointerEventsNone(this.canvas);a.setElementTouchActionNone(this.canvas);this.container.style.textAlign="left";this.container.appendChild(this.canvas);this._imageSmoothingEnabled=!0};a.Drawer.prototype={addOverlay:function(e,t,i,n){a.console.error("drawer.addOverlay is deprecated. Use viewer.addOverlay instead.");this.viewer.addOverlay(e,t,i,n);return this},updateOverlay:function(e,t,i){a.console.error("drawer.updateOverlay is deprecated. Use viewer.updateOverlay instead.");this.viewer.updateOverlay(e,t,i);return this},removeOverlay:function(e){a.console.error("drawer.removeOverlay is deprecated. Use viewer.removeOverlay instead.");this.viewer.removeOverlay(e);return this},clearOverlays:function(){a.console.error("drawer.clearOverlays is deprecated. Use viewer.clearOverlays instead.");this.viewer.clearOverlays();return this},viewportCoordToDrawerCoord:function(e){e=this.viewport.pixelFromPointNoRotate(e,!0);return new a.Point(e.x*a.pixelDensityRatio,e.y*a.pixelDensityRatio)},clipWithPolygons:function(e,t){if(this.useCanvas){var i=this._getContext(t);i.beginPath();e.forEach(function(e){e.forEach(function(e,t){i[0===t?"moveTo":"lineTo"](e.x,e.y)})});i.clip()}},setOpacity:function(e){a.console.error("drawer.setOpacity is deprecated. Use tiledImage.setOpacity instead.");var t=this.viewer.world;for(var i=0;i<t.getItemCount();i++)t.getItemAt(i).setOpacity(e);return this},getOpacity:function(){a.console.error("drawer.getOpacity is deprecated. Use tiledImage.getOpacity instead.");var e=this.viewer.world;var t=0;for(var i=0;i<e.getItemCount();i++){var n=e.getItemAt(i).getOpacity();t<n&&(t=n)}return t},needsUpdate:function(){a.console.error("[Drawer.needsUpdate] this function is deprecated. Use World.needsDraw instead.");return this.viewer.world.needsDraw()},numTilesLoaded:function(){a.console.error("[Drawer.numTilesLoaded] this function is deprecated. Use TileCache.numTilesLoaded instead.");return this.viewer.tileCache.numTilesLoaded()},reset:function(){a.console.error("[Drawer.reset] this function is deprecated. Use World.resetItems instead.");this.viewer.world.resetItems();return this},update:function(){a.console.error("[Drawer.update] this function is deprecated. Use Drawer.clear and World.draw instead.");this.clear();this.viewer.world.draw();return this},canRotate:function(){return this.useCanvas},destroy:function(){this.canvas.width=1;this.canvas.height=1;this.sketchCanvas=null;this.sketchContext=null},clear:function(){this.canvas.innerHTML="";if(this.useCanvas){var e=this._calculateCanvasSize();if(this.canvas.width!==e.x||this.canvas.height!==e.y){this.canvas.width=e.x;this.canvas.height=e.y;this._updateImageSmoothingEnabled(this.context);if(null!==this.sketchCanvas){e=this._calculateSketchCanvasSize();this.sketchCanvas.width=e.x;this.sketchCanvas.height=e.y;this._updateImageSmoothingEnabled(this.sketchContext)}}this._clear()}},_clear:function(e,t){if(this.useCanvas){e=this._getContext(e);if(t)e.clearRect(t.x,t.y,t.width,t.height);else{t=e.canvas;e.clearRect(0,0,t.width,t.height)}}},viewportToDrawerRectangle:function(e){var t=this.viewport.pixelFromPointNoRotate(e.getTopLeft(),!0);e=this.viewport.deltaPixelsFromPointsNoRotate(e.getSize(),!0);return new a.Rect(t.x*a.pixelDensityRatio,t.y*a.pixelDensityRatio,e.x*a.pixelDensityRatio,e.y*a.pixelDensityRatio)},drawTile:function(e,t,i,n,o,r){a.console.assert(e,"[Drawer.drawTile] tile is required");a.console.assert(t,"[Drawer.drawTile] drawingHandler is required");if(this.useCanvas){i=this._getContext(i);e.drawCanvas(i,t,n=n||1,o,r)}else e.drawHTML(this.canvas)},_getContext:function(e){var t=this.context;if(e){if(null===this.sketchCanvas){this.sketchCanvas=document.createElement("canvas");e=this._calculateSketchCanvasSize();this.sketchCanvas.width=e.x;this.sketchCanvas.height=e.y;this.sketchContext=this.sketchCanvas.getContext("2d");if(0===this.viewport.getRotation()){var i=this;this.viewer.addHandler("rotate",function e(){if(0!==i.viewport.getRotation()){i.viewer.removeHandler("rotate",e);var t=i._calculateSketchCanvasSize();i.sketchCanvas.width=t.x;i.sketchCanvas.height=t.y}})}this._updateImageSmoothingEnabled(this.sketchContext)}t=this.sketchContext}return t},saveContext:function(e){this.useCanvas&&this._getContext(e).save()},restoreContext:function(e){this.useCanvas&&this._getContext(e).restore()},setClip:function(e,t){if(this.useCanvas){t=this._getContext(t);t.beginPath();t.rect(e.x,e.y,e.width,e.height);t.clip()}},drawRectangle:function(e,t,i){if(this.useCanvas){i=this._getContext(i);i.save();i.fillStyle=t;i.fillRect(e.x,e.y,e.width,e.height);i.restore()}},blendSketch:function(e,t,i,n){var o=e;a.isPlainObject(o)||(o={opacity:e,scale:t,translate:i,compositeOperation:n});if(this.useCanvas&&this.sketchCanvas){e=o.opacity;n=o.compositeOperation;var r=o.bounds;this.context.save();this.context.globalAlpha=e;n&&(this.context.globalCompositeOperation=n);if(r){if(r.x<0){r.width+=r.x;r.x=0}r.x+r.width>this.canvas.width&&(r.width=this.canvas.width-r.x);if(r.y<0){r.height+=r.y;r.y=0}r.y+r.height>this.canvas.height&&(r.height=this.canvas.height-r.y);this.context.drawImage(this.sketchCanvas,r.x,r.y,r.width,r.height,r.x,r.y,r.width,r.height)}else{t=o.scale||1;e=(i=o.translate)instanceof a.Point?i:new a.Point(0,0);n=0;r=0;if(i){o=this.sketchCanvas.width-this.canvas.width;i=this.sketchCanvas.height-this.canvas.height;n=Math.round(o/2);r=Math.round(i/2)}this.context.drawImage(this.sketchCanvas,e.x-n*t,e.y-r*t,(this.canvas.width+2*n)*t,(this.canvas.height+2*r)*t,-n,-r,this.canvas.width+2*n,this.canvas.height+2*r)}this.context.restore()}},drawDebugInfo:function(e,t,i,n){if(this.useCanvas){var o=this.viewer.world.getIndexOfItem(n)%this.debugGridColor.length;var r=this.context;r.save();r.lineWidth=2*a.pixelDensityRatio;r.font="small-caps bold "+13*a.pixelDensityRatio+"px arial";r.strokeStyle=this.debugGridColor[o];r.fillStyle=this.debugGridColor[o];0!==this.viewport.degrees&&this._offsetForRotation({degrees:this.viewport.degrees});n.getRotation(!0)%360!=0&&this._offsetForRotation({degrees:n.getRotation(!0),point:n.viewport.pixelFromPointNoRotate(n._getRotationPoint(!0),!0)});0===n.viewport.degrees&&n.getRotation(!0)%360==0&&n._drawer.viewer.viewport.getFlip()&&n._drawer._flip();r.strokeRect(e.position.x*a.pixelDensityRatio,e.position.y*a.pixelDensityRatio,e.size.x*a.pixelDensityRatio,e.size.y*a.pixelDensityRatio);var s=(e.position.x+e.size.x/2)*a.pixelDensityRatio;o=(e.position.y+e.size.y/2)*a.pixelDensityRatio;r.translate(s,o);r.rotate(Math.PI/180*-this.viewport.degrees);r.translate(-s,-o);if(0===e.x&&0===e.y){r.fillText("Zoom: "+this.viewport.getZoom(),e.position.x*a.pixelDensityRatio,(e.position.y-30)*a.pixelDensityRatio);r.fillText("Pan: "+this.viewport.getBounds().toString(),e.position.x*a.pixelDensityRatio,(e.position.y-20)*a.pixelDensityRatio)}r.fillText("Level: "+e.level,(e.position.x+10)*a.pixelDensityRatio,(e.position.y+20)*a.pixelDensityRatio);r.fillText("Column: "+e.x,(e.position.x+10)*a.pixelDensityRatio,(e.position.y+30)*a.pixelDensityRatio);r.fillText("Row: "+e.y,(e.position.x+10)*a.pixelDensityRatio,(e.position.y+40)*a.pixelDensityRatio);r.fillText("Order: "+i+" of "+t,(e.position.x+10)*a.pixelDensityRatio,(e.position.y+50)*a.pixelDensityRatio);r.fillText("Size: "+e.size.toString(),(e.position.x+10)*a.pixelDensityRatio,(e.position.y+60)*a.pixelDensityRatio);r.fillText("Position: "+e.position.toString(),(e.position.x+10)*a.pixelDensityRatio,(e.position.y+70)*a.pixelDensityRatio);0!==this.viewport.degrees&&this._restoreRotationChanges();n.getRotation(!0)%360!=0&&this._restoreRotationChanges();0===n.viewport.degrees&&n.getRotation(!0)%360==0&&n._drawer.viewer.viewport.getFlip()&&n._drawer._flip();r.restore()}},debugRect:function(e){if(this.useCanvas){var t=this.context;t.save();t.lineWidth=2*a.pixelDensityRatio;t.strokeStyle=this.debugGridColor[0];t.fillStyle=this.debugGridColor[0];t.strokeRect(e.x*a.pixelDensityRatio,e.y*a.pixelDensityRatio,e.width*a.pixelDensityRatio,e.height*a.pixelDensityRatio);t.restore()}},setImageSmoothingEnabled:function(e){if(this.useCanvas){this._imageSmoothingEnabled=e;this._updateImageSmoothingEnabled(this.context);this.viewer.forceRedraw()}},_updateImageSmoothingEnabled:function(e){e.msImageSmoothingEnabled=this._imageSmoothingEnabled;e.imageSmoothingEnabled=this._imageSmoothingEnabled},getCanvasSize:function(e){e=this._getContext(e).canvas;return new a.Point(e.width,e.height)},getCanvasCenter:function(){return new a.Point(this.canvas.width/2,this.canvas.height/2)},_offsetForRotation:function(e){var t=e.point?e.point.times(a.pixelDensityRatio):this.getCanvasCenter();var i=this._getContext(e.useSketch);i.save();i.translate(t.x,t.y);if(this.viewer.viewport.flipped){i.rotate(Math.PI/180*-e.degrees);i.scale(-1,1)}else i.rotate(Math.PI/180*e.degrees);i.translate(-t.x,-t.y)},_flip:function(e){var t=(e=e||{}).point?e.point.times(a.pixelDensityRatio):this.getCanvasCenter();e=this._getContext(e.useSketch);e.translate(t.x,0);e.scale(-1,1);e.translate(-t.x,0)},_restoreRotationChanges:function(e){this._getContext(e).restore()},_calculateCanvasSize:function(){var e=a.pixelDensityRatio;var t=this.viewport.getContainerSize();return{x:Math.round(t.x*e),y:Math.round(t.y*e)}},_calculateSketchCanvasSize:function(){var e=this._calculateCanvasSize();if(0===this.viewport.getRotation())return e;e=Math.ceil(Math.sqrt(e.x*e.x+e.y*e.y));return{x:e,y:e}}}}(OpenSeadragon);!function(a){a.Viewport=function(e){var t=arguments;if((e=t.length&&t[0]instanceof a.Point?{containerSize:t[0],contentSize:t[1],config:t[2]}:e).config){a.extend(!0,e,e.config);delete e.config}this._margins=a.extend({left:0,top:0,right:0,bottom:0},e.margins||{});delete e.margins;a.extend(!0,this,{containerSize:null,contentSize:null,zoomPoint:null,viewer:null,springStiffness:a.DEFAULT_SETTINGS.springStiffness,animationTime:a.DEFAULT_SETTINGS.animationTime,minZoomImageRatio:a.DEFAULT_SETTINGS.minZoomImageRatio,maxZoomPixelRatio:a.DEFAULT_SETTINGS.maxZoomPixelRatio,visibilityRatio:a.DEFAULT_SETTINGS.visibilityRatio,wrapHorizontal:a.DEFAULT_SETTINGS.wrapHorizontal,wrapVertical:a.DEFAULT_SETTINGS.wrapVertical,defaultZoomLevel:a.DEFAULT_SETTINGS.defaultZoomLevel,minZoomLevel:a.DEFAULT_SETTINGS.minZoomLevel,maxZoomLevel:a.DEFAULT_SETTINGS.maxZoomLevel,degrees:a.DEFAULT_SETTINGS.degrees,flipped:a.DEFAULT_SETTINGS.flipped,homeFillsViewer:a.DEFAULT_SETTINGS.homeFillsViewer,silenceMultiImageWarnings:a.DEFAULT_SETTINGS.silenceMultiImageWarnings},e);this._updateContainerInnerSize();this.centerSpringX=new a.Spring({initial:0,springStiffness:this.springStiffness,animationTime:this.animationTime});this.centerSpringY=new a.Spring({initial:0,springStiffness:this.springStiffness,animationTime:this.animationTime});this.zoomSpring=new a.Spring({exponential:!0,initial:1,springStiffness:this.springStiffness,animationTime:this.animationTime});this._oldCenterX=this.centerSpringX.current.value;this._oldCenterY=this.centerSpringY.current.value;this._oldZoom=this.zoomSpring.current.value;this._setContentBounds(new a.Rect(0,0,1,1),1);this.goHome(!0);this.update()};a.Viewport.prototype={resetContentSize:function(e){a.console.assert(e,"[Viewport.resetContentSize] contentSize is required");a.console.assert(e instanceof a.Point,"[Viewport.resetContentSize] contentSize must be an OpenSeadragon.Point");a.console.assert(0<e.x,"[Viewport.resetContentSize] contentSize.x must be greater than 0");a.console.assert(0<e.y,"[Viewport.resetContentSize] contentSize.y must be greater than 0");this._setContentBounds(new a.Rect(0,0,1,e.y/e.x),e.x);return this},setHomeBounds:function(e,t){a.console.error("[Viewport.setHomeBounds] this function is deprecated; The content bounds should not be set manually.");this._setContentBounds(e,t)},_setContentBounds:function(e,t){a.console.assert(e,"[Viewport._setContentBounds] bounds is required");a.console.assert(e instanceof a.Rect,"[Viewport._setContentBounds] bounds must be an OpenSeadragon.Rect");a.console.assert(0<e.width,"[Viewport._setContentBounds] bounds.width must be greater than 0");a.console.assert(0<e.height,"[Viewport._setContentBounds] bounds.height must be greater than 0");this._contentBoundsNoRotate=e.clone();this._contentSizeNoRotate=this._contentBoundsNoRotate.getSize().times(t);this._contentBounds=e.rotate(this.degrees).getBoundingBox();this._contentSize=this._contentBounds.getSize().times(t);this._contentAspectRatio=this._contentSize.x/this._contentSize.y;this.viewer&&this.viewer.raiseEvent("reset-size",{contentSize:this._contentSizeNoRotate.clone(),contentFactor:t,homeBounds:this._contentBoundsNoRotate.clone(),contentBounds:this._contentBounds.clone()})},getHomeZoom:function(){if(this.defaultZoomLevel)return this.defaultZoomLevel;var e=this._contentAspectRatio/this.getAspectRatio();return(this.homeFillsViewer?1<=e?e:1:1<=e?1:e)/this._contentBounds.width},getHomeBounds:function(){return this.getHomeBoundsNoRotate().rotate(-this.getRotation())},getHomeBoundsNoRotate:function(){var e=this._contentBounds.getCenter();var t=1/this.getHomeZoom();var i=t/this.getAspectRatio();return new a.Rect(e.x-t/2,e.y-i/2,t,i)},goHome:function(e){this.viewer&&this.viewer.raiseEvent("home",{immediately:e});return this.fitBounds(this.getHomeBounds(),e)},getMinZoom:function(){var e=this.getHomeZoom();return this.minZoomLevel||this.minZoomImageRatio*e},getMaxZoom:function(){var e=this.maxZoomLevel;if(!e){e=this._contentSize.x*this.maxZoomPixelRatio/this._containerInnerSize.x;e/=this._contentBounds.width}return Math.max(e,this.getHomeZoom())},getAspectRatio:function(){return this._containerInnerSize.x/this._containerInnerSize.y},getContainerSize:function(){return new a.Point(this.containerSize.x,this.containerSize.y)},getMargins:function(){return a.extend({},this._margins)},setMargins:function(e){a.console.assert("object"===a.type(e),"[Viewport.setMargins] margins must be an object");this._margins=a.extend({left:0,top:0,right:0,bottom:0},e);this._updateContainerInnerSize();this.viewer&&this.viewer.forceRedraw()},getBounds:function(e){return this.getBoundsNoRotate(e).rotate(-this.getRotation())},getBoundsNoRotate:function(e){var t=this.getCenter(e);var i=1/this.getZoom(e);e=i/this.getAspectRatio();return new a.Rect(t.x-i/2,t.y-e/2,i,e)},getBoundsWithMargins:function(e){return this.getBoundsNoRotateWithMargins(e).rotate(-this.getRotation(),this.getCenter(e))},getBoundsNoRotateWithMargins:function(e){var t=this.getBoundsNoRotate(e);e=this._containerInnerSize.x*this.getZoom(e);t.x-=this._margins.left/e;t.y-=this._margins.top/e;t.width+=(this._margins.left+this._margins.right)/e;t.height+=(this._margins.top+this._margins.bottom)/e;return t},getCenter:function(e){var t,i,n,o=new a.Point(this.centerSpringX.current.value,this.centerSpringY.current.value),r=new a.Point(this.centerSpringX.target.value,this.centerSpringY.target.value);if(e)return o;if(!this.zoomPoint)return r;t=this.pixelFromPoint(this.zoomPoint,!0);e=(i=1/(n=this.getZoom()))/this.getAspectRatio();e=new a.Rect(o.x-i/2,o.y-e/2,i,e);n=this._pixelFromPoint(this.zoomPoint,e).minus(t).divide(this._containerInnerSize.x*n);return r.plus(n)},getZoom:function(e){return(e?this.zoomSpring.current:this.zoomSpring.target).value},_applyZoomConstraints:function(e){return Math.max(Math.min(e,this.getMaxZoom()),this.getMinZoom())},_applyBoundaryConstraints:function(e){e=new a.Rect(e.x,e.y,e.width,e.height);if(!this.wrapHorizontal){var t=this.visibilityRatio*e.width;var i=e.x+e.width;var n=this._contentBoundsNoRotate.x+this._contentBoundsNoRotate.width;i=this._contentBoundsNoRotate.x-i+t;n=n-e.x-t;t>this._contentBoundsNoRotate.width?e.x+=(i+n)/2:n<0?e.x+=n:0<i&&(e.x+=i)}if(!this.wrapVertical){t=this.visibilityRatio*e.height;n=e.y+e.height;i=this._contentBoundsNoRotate.y+this._contentBoundsNoRotate.height;n=this._contentBoundsNoRotate.y-n+t;i=i-e.y-t;t>this._contentBoundsNoRotate.height?e.y+=(n+i)/2:i<0?e.y+=i:0<n&&(e.y+=n)}return e},_raiseConstraintsEvent:function(e){this.viewer&&this.viewer.raiseEvent("constrain",{immediately:e})},applyConstraints:function(e){var t=this.getZoom();var i=this._applyZoomConstraints(t);t!==i&&this.zoomTo(i,this.zoomPoint,e);t=this.getBoundsNoRotate();i=this._applyBoundaryConstraints(t);this._raiseConstraintsEvent(e);t.x===i.x&&t.y===i.y&&!e||this.fitBounds(i.rotate(-this.getRotation()),e);return this},ensureVisible:function(e){return this.applyConstraints(e)},_fitBounds:function(e,t){var i=(t=t||{}).immediately||!1;var n=t.constraints||!1;var o=this.getAspectRatio();t=e.getCenter();e=new a.Rect(e.x,e.y,e.width,e.height,e.degrees+this.getRotation()).getBoundingBox();e.getAspectRatio()>=o?e.height=e.width/o:e.width=e.height*o;e.x=t.x-e.width/2;e.y=t.y-e.height/2;o=1/e.width;if(n){var r=e.getAspectRatio();var s=this._applyZoomConstraints(o);if(o!==s){e.width=1/(o=s);e.x=t.x-e.width/2;e.height=e.width/r;e.y=t.y-e.height/2}t=(e=this._applyBoundaryConstraints(e)).getCenter();this._raiseConstraintsEvent(i)}if(i){this.panTo(t,!0);return this.zoomTo(o,null,!0)}this.panTo(this.getCenter(!0),!0);this.zoomTo(this.getZoom(!0),null,!0);s=this.getBounds();r=this.getZoom();if(0===r||Math.abs(o/r-1)<1e-8){this.zoomTo(o,!0);return this.panTo(t,i)}r=(e=e.rotate(-this.getRotation())).getTopLeft().times(o).minus(s.getTopLeft().times(r)).divide(o-r);return this.zoomTo(o,r,i)},fitBounds:function(e,t){return this._fitBounds(e,{immediately:t,constraints:!1})},fitBoundsWithConstraints:function(e,t){return this._fitBounds(e,{immediately:t,constraints:!0})},fitVertically:function(e){var t=new a.Rect(this._contentBounds.x+this._contentBounds.width/2,this._contentBounds.y,0,this._contentBounds.height);return this.fitBounds(t,e)},fitHorizontally:function(e){var t=new a.Rect(this._contentBounds.x,this._contentBounds.y+this._contentBounds.height/2,this._contentBounds.width,0);return this.fitBounds(t,e)},getConstrainedBounds:function(e){e=this.getBounds(e);return this._applyBoundaryConstraints(e)},panBy:function(e,t){var i=new a.Point(this.centerSpringX.target.value,this.centerSpringY.target.value);return this.panTo(i.plus(e),t)},panTo:function(e,t){if(t){this.centerSpringX.resetTo(e.x);this.centerSpringY.resetTo(e.y)}else{this.centerSpringX.springTo(e.x);this.centerSpringY.springTo(e.y)}this.viewer&&this.viewer.raiseEvent("pan",{center:e,immediately:t});return this},zoomBy:function(e,t,i){return this.zoomTo(this.zoomSpring.target.value*e,t,i)},zoomTo:function(e,t,i){var n=this;this.zoomPoint=t instanceof a.Point&&!isNaN(t.x)&&!isNaN(t.y)?t:null;i?this._adjustCenterSpringsForZoomPoint(function(){n.zoomSpring.resetTo(e)}):this.zoomSpring.springTo(e);this.viewer&&this.viewer.raiseEvent("zoom",{zoom:e,refPoint:t,immediately:i});return this},setRotation:function(e){if(!this.viewer||!this.viewer.drawer.canRotate())return this;this.degrees=a.positiveModulo(e,360);this._setContentBounds(this.viewer.world.getHomeBounds(),this.viewer.world.getContentFactor());this.viewer.forceRedraw();this.viewer.raiseEvent("rotate",{degrees:e});return this},getRotation:function(){return this.degrees},resize:function(e,t){var i,n=this.getBoundsNoRotate(),o=n;this.containerSize.x=e.x;this.containerSize.y=e.y;this._updateContainerInnerSize();if(t){i=e.x/this.containerSize.x;o.width=n.width*i;o.height=o.width/this.getAspectRatio()}this.viewer&&this.viewer.raiseEvent("resize",{newContainerSize:e,maintain:t});return this.fitBounds(o,!0)},_updateContainerInnerSize:function(){this._containerInnerSize=new a.Point(Math.max(1,this.containerSize.x-(this._margins.left+this._margins.right)),Math.max(1,this.containerSize.y-(this._margins.top+this._margins.bottom)))},update:function(){var e=this;this._adjustCenterSpringsForZoomPoint(function(){e.zoomSpring.update()});this.centerSpringX.update();this.centerSpringY.update();var t=this.centerSpringX.current.value!==this._oldCenterX||this.centerSpringY.current.value!==this._oldCenterY||this.zoomSpring.current.value!==this._oldZoom;this._oldCenterX=this.centerSpringX.current.value;this._oldCenterY=this.centerSpringY.current.value;this._oldZoom=this.zoomSpring.current.value;return t},_adjustCenterSpringsForZoomPoint:function(e){if(this.zoomPoint){var t=this.pixelFromPoint(this.zoomPoint,!0);e();t=this.pixelFromPoint(this.zoomPoint,!0).minus(t);t=this.deltaPointsFromPixels(t,!0);this.centerSpringX.shiftBy(t.x);this.centerSpringY.shiftBy(t.y);this.zoomSpring.isAtTargetValue()&&(this.zoomPoint=null)}else e()},deltaPixelsFromPointsNoRotate:function(e,t){return e.times(this._containerInnerSize.x*this.getZoom(t))},deltaPixelsFromPoints:function(e,t){return this.deltaPixelsFromPointsNoRotate(e.rotate(this.getRotation()),t)},deltaPointsFromPixelsNoRotate:function(e,t){return e.divide(this._containerInnerSize.x*this.getZoom(t))},deltaPointsFromPixels:function(e,t){return this.deltaPointsFromPixelsNoRotate(e,t).rotate(-this.getRotation())},pixelFromPointNoRotate:function(e,t){return this._pixelFromPointNoRotate(e,this.getBoundsNoRotate(t))},pixelFromPoint:function(e,t){return this._pixelFromPoint(e,this.getBoundsNoRotate(t))},_pixelFromPointNoRotate:function(e,t){return e.minus(t.getTopLeft()).times(this._containerInnerSize.x/t.width).plus(new a.Point(this._margins.left,this._margins.top))},_pixelFromPoint:function(e,t){return this._pixelFromPointNoRotate(e.rotate(this.getRotation(),this.getCenter(!0)),t)},pointFromPixelNoRotate:function(e,t){t=this.getBoundsNoRotate(t);return e.minus(new a.Point(this._margins.left,this._margins.top)).divide(this._containerInnerSize.x/t.width).plus(t.getTopLeft())},pointFromPixel:function(e,t){return this.pointFromPixelNoRotate(e,t).rotate(-this.getRotation(),this.getCenter(!0))},_viewportToImageDelta:function(e,t){var i=this._contentBoundsNoRotate.width;return new a.Point(e*this._contentSizeNoRotate.x/i,t*this._contentSizeNoRotate.x/i)},viewportToImageCoordinates:function(e,t){if(e instanceof a.Point)return this.viewportToImageCoordinates(e.x,e.y);if(this.viewer){var i=this.viewer.world.getItemCount();if(1<i)this.silenceMultiImageWarnings||a.console.error("[Viewport.viewportToImageCoordinates] is not accurate with multi-image; use TiledImage.viewportToImageCoordinates instead.");else if(1===i)return this.viewer.world.getItemAt(0).viewportToImageCoordinates(e,t,!0)}return this._viewportToImageDelta(e-this._contentBoundsNoRotate.x,t-this._contentBoundsNoRotate.y)},_imageToViewportDelta:function(e,t){var i=this._contentBoundsNoRotate.width;return new a.Point(e/this._contentSizeNoRotate.x*i,t/this._contentSizeNoRotate.x*i)},imageToViewportCoordinates:function(e,t){if(e instanceof a.Point)return this.imageToViewportCoordinates(e.x,e.y);if(this.viewer){var i=this.viewer.world.getItemCount();if(1<i)this.silenceMultiImageWarnings||a.console.error("[Viewport.imageToViewportCoordinates] is not accurate with multi-image; use TiledImage.imageToViewportCoordinates instead.");else if(1===i)return this.viewer.world.getItemAt(0).imageToViewportCoordinates(e,t,!0)}t=this._imageToViewportDelta(e,t);t.x+=this._contentBoundsNoRotate.x;t.y+=this._contentBoundsNoRotate.y;return t},imageToViewportRectangle:function(e,t,i,n){var o=e;o instanceof a.Rect||(o=new a.Rect(e,t,i,n));if(this.viewer){var r=this.viewer.world.getItemCount();if(1<r)this.silenceMultiImageWarnings||a.console.error("[Viewport.imageToViewportRectangle] is not accurate with multi-image; use TiledImage.imageToViewportRectangle instead.");else if(1===r)return this.viewer.world.getItemAt(0).imageToViewportRectangle(e,t,i,n,!0)}i=this.imageToViewportCoordinates(o.x,o.y);n=this._imageToViewportDelta(o.width,o.height);return new a.Rect(i.x,i.y,n.x,n.y,o.degrees)},viewportToImageRectangle:function(e,t,i,n){var o=e;o instanceof a.Rect||(o=new a.Rect(e,t,i,n));if(this.viewer){var r=this.viewer.world.getItemCount();if(1<r)this.silenceMultiImageWarnings||a.console.error("[Viewport.viewportToImageRectangle] is not accurate with multi-image; use TiledImage.viewportToImageRectangle instead.");else if(1===r)return this.viewer.world.getItemAt(0).viewportToImageRectangle(e,t,i,n,!0)}i=this.viewportToImageCoordinates(o.x,o.y);n=this._viewportToImageDelta(o.width,o.height);return new a.Rect(i.x,i.y,n.x,n.y,o.degrees)},viewerElementToImageCoordinates:function(e){e=this.pointFromPixel(e,!0);return this.viewportToImageCoordinates(e)},imageToViewerElementCoordinates:function(e){e=this.imageToViewportCoordinates(e);return this.pixelFromPoint(e,!0)},windowToImageCoordinates:function(e){a.console.assert(this.viewer,"[Viewport.windowToImageCoordinates] the viewport must have a viewer.");e=e.minus(a.getElementPosition(this.viewer.element));return this.viewerElementToImageCoordinates(e)},imageToWindowCoordinates:function(e){a.console.assert(this.viewer,"[Viewport.imageToWindowCoordinates] the viewport must have a viewer.");return this.imageToViewerElementCoordinates(e).plus(a.getElementPosition(this.viewer.element))},viewerElementToViewportCoordinates:function(e){return this.pointFromPixel(e,!0)},viewportToViewerElementCoordinates:function(e){return this.pixelFromPoint(e,!0)},viewerElementToViewportRectangle:function(e){return a.Rect.fromSummits(this.pointFromPixel(e.getTopLeft(),!0),this.pointFromPixel(e.getTopRight(),!0),this.pointFromPixel(e.getBottomLeft(),!0))},viewportToViewerElementRectangle:function(e){return a.Rect.fromSummits(this.pixelFromPoint(e.getTopLeft(),!0),this.pixelFromPoint(e.getTopRight(),!0),this.pixelFromPoint(e.getBottomLeft(),!0))},windowToViewportCoordinates:function(e){a.console.assert(this.viewer,"[Viewport.windowToViewportCoordinates] the viewport must have a viewer.");e=e.minus(a.getElementPosition(this.viewer.element));return this.viewerElementToViewportCoordinates(e)},viewportToWindowCoordinates:function(e){a.console.assert(this.viewer,"[Viewport.viewportToWindowCoordinates] the viewport must have a viewer.");return this.viewportToViewerElementCoordinates(e).plus(a.getElementPosition(this.viewer.element))},viewportToImageZoom:function(e){if(this.viewer){var t=this.viewer.world.getItemCount();if(1<t)this.silenceMultiImageWarnings||a.console.error("[Viewport.viewportToImageZoom] is not accurate with multi-image.");else if(1===t)return this.viewer.world.getItemAt(0).viewportToImageZoom(e)}t=this._contentSizeNoRotate.x;return e*(this._containerInnerSize.x/t*this._contentBoundsNoRotate.width)},imageToViewportZoom:function(e){if(this.viewer){var t=this.viewer.world.getItemCount();if(1<t)this.silenceMultiImageWarnings||a.console.error("[Viewport.imageToViewportZoom] is not accurate with multi-image.");else if(1===t)return this.viewer.world.getItemAt(0).imageToViewportZoom(e)}return e*(this._contentSizeNoRotate.x/this._containerInnerSize.x/this._contentBoundsNoRotate.width)},toggleFlip:function(){this.setFlip(!this.getFlip());return this},getFlip:function(){return this.flipped},setFlip:function(e){if(this.flipped===e)return this;this.flipped=e;this.viewer.navigator&&this.viewer.navigator.setFlip(this.getFlip());this.viewer.forceRedraw();this.viewer.raiseEvent("flip",{flipped:e});return this}}}(OpenSeadragon);!function(y){y.TiledImage=function(e){var t=this;y.console.assert(e.tileCache,"[TiledImage] options.tileCache is required");y.console.assert(e.drawer,"[TiledImage] options.drawer is required");y.console.assert(e.viewer,"[TiledImage] options.viewer is required");y.console.assert(e.imageLoader,"[TiledImage] options.imageLoader is required");y.console.assert(e.source,"[TiledImage] options.source is required");y.console.assert(!e.clip||e.clip instanceof y.Rect,"[TiledImage] options.clip must be an OpenSeadragon.Rect if present");y.EventSource.call(this);this._tileCache=e.tileCache;delete e.tileCache;this._drawer=e.drawer;delete e.drawer;this._imageLoader=e.imageLoader;delete e.imageLoader;e.clip instanceof y.Rect&&(this._clip=e.clip.clone());delete e.clip;var i=e.x||0;delete e.x;var n=e.y||0;delete e.y;this.normHeight=e.source.dimensions.y/e.source.dimensions.x;this.contentAspectX=e.source.dimensions.x/e.source.dimensions.y;var o=1;if(e.width){o=e.width;delete e.width;if(e.height){y.console.error("specifying both width and height to a tiledImage is not supported");delete e.height}}else if(e.height){o=e.height/this.normHeight;delete e.height}var r=e.fitBounds;delete e.fitBounds;var s=e.fitBoundsPlacement||OpenSeadragon.Placement.CENTER;delete e.fitBoundsPlacement;var a=e.degrees||0;delete e.degrees;y.extend(!0,this,{viewer:null,tilesMatrix:{},coverage:{},loadingCoverage:{},lastDrawn:[],lastResetTime:0,_midDraw:!1,_needsDraw:!0,_hasOpaqueTile:!1,_tilesLoading:0,springStiffness:y.DEFAULT_SETTINGS.springStiffness,animationTime:y.DEFAULT_SETTINGS.animationTime,minZoomImageRatio:y.DEFAULT_SETTINGS.minZoomImageRatio,wrapHorizontal:y.DEFAULT_SETTINGS.wrapHorizontal,wrapVertical:y.DEFAULT_SETTINGS.wrapVertical,immediateRender:y.DEFAULT_SETTINGS.immediateRender,blendTime:y.DEFAULT_SETTINGS.blendTime,alwaysBlend:y.DEFAULT_SETTINGS.alwaysBlend,minPixelRatio:y.DEFAULT_SETTINGS.minPixelRatio,smoothTileEdgesMinZoom:y.DEFAULT_SETTINGS.smoothTileEdgesMinZoom,iOSDevice:y.DEFAULT_SETTINGS.iOSDevice,debugMode:y.DEFAULT_SETTINGS.debugMode,crossOriginPolicy:y.DEFAULT_SETTINGS.crossOriginPolicy,ajaxWithCredentials:y.DEFAULT_SETTINGS.ajaxWithCredentials,placeholderFillStyle:y.DEFAULT_SETTINGS.placeholderFillStyle,opacity:y.DEFAULT_SETTINGS.opacity,preload:y.DEFAULT_SETTINGS.preload,compositeOperation:y.DEFAULT_SETTINGS.compositeOperation,subPixelRoundingForTransparency:y.DEFAULT_SETTINGS.subPixelRoundingForTransparency},e);this._preload=this.preload;delete this.preload;this._fullyLoaded=!1;this._xSpring=new y.Spring({initial:i,springStiffness:this.springStiffness,animationTime:this.animationTime});this._ySpring=new y.Spring({initial:n,springStiffness:this.springStiffness,animationTime:this.animationTime});this._scaleSpring=new y.Spring({initial:o,springStiffness:this.springStiffness,animationTime:this.animationTime});this._degreesSpring=new y.Spring({initial:a,springStiffness:this.springStiffness,animationTime:this.animationTime});this._updateForScale();r&&this.fitBounds(r,s,!0);this._drawingHandler=function(e){t.viewer.raiseEvent("tile-drawing",y.extend({tiledImage:t},e))}};y.extend(y.TiledImage.prototype,y.EventSource.prototype,{needsDraw:function(){return this._needsDraw},getFullyLoaded:function(){return this._fullyLoaded},_setFullyLoaded:function(e){if(e!==this._fullyLoaded){this._fullyLoaded=e;this.raiseEvent("fully-loaded-change",{fullyLoaded:this._fullyLoaded})}},reset:function(){this._tileCache.clearTilesFor(this);this.lastResetTime=y.now();this._needsDraw=!0},update:function(){var e=this._xSpring.update();var t=this._ySpring.update();var i=this._scaleSpring.update();var n=this._degreesSpring.update();if(e||t||i||n){this._updateForScale();return this._needsDraw=!0}return!1},draw:function(){if(0!==this.opacity||this._preload){this._midDraw=!0;this._updateViewport();this._midDraw=!1}else this._needsDraw=!1},destroy:function(){this.reset();this.source.destroy&&this.source.destroy()},getBounds:function(e){return this.getBoundsNoRotate(e).rotate(this.getRotation(e),this._getRotationPoint(e))},getBoundsNoRotate:function(e){return e?new y.Rect(this._xSpring.current.value,this._ySpring.current.value,this._worldWidthCurrent,this._worldHeightCurrent):new y.Rect(this._xSpring.target.value,this._ySpring.target.value,this._worldWidthTarget,this._worldHeightTarget)},getWorldBounds:function(){y.console.error("[TiledImage.getWorldBounds] is deprecated; use TiledImage.getBounds instead");return this.getBounds()},getClippedBounds:function(e){var t=this.getBoundsNoRotate(e);if(this._clip){var i=(e?this._worldWidthCurrent:this._worldWidthTarget)/this.source.dimensions.x;i=this._clip.times(i);t=new y.Rect(t.x+i.x,t.y+i.y,i.width,i.height)}return t.rotate(this.getRotation(e),this._getRotationPoint(e))},getTileBounds:function(e,t,i){var n=this.source.getNumTiles(e);var o=(n.x+t%n.x)%n.x;var r=(n.y+i%n.y)%n.y;e=this.source.getTileBounds(e,o,r);this.getFlip()&&(e.x=1-e.x-e.width);e.x+=(t-o)/n.x;e.y+=this._worldHeightCurrent/this._worldWidthCurrent*((i-r)/n.y);return e},getContentSize:function(){return new y.Point(this.source.dimensions.x,this.source.dimensions.y)},getSizeInWindowCoordinates:function(){var e=this.imageToWindowCoordinates(new y.Point(0,0));var t=this.imageToWindowCoordinates(this.getContentSize());return new y.Point(t.x-e.x,t.y-e.y)},_viewportToImageDelta:function(e,t,i){i=(i?this._scaleSpring.current:this._scaleSpring.target).value;return new y.Point(e*(this.source.dimensions.x/i),t*(this.source.dimensions.y*this.contentAspectX/i))},viewportToImageCoordinates:function(e,t,i){var n;if(e instanceof y.Point){i=t;n=e}else n=new y.Point(e,t);n=n.rotate(-this.getRotation(i),this._getRotationPoint(i));return i?this._viewportToImageDelta(n.x-this._xSpring.current.value,n.y-this._ySpring.current.value):this._viewportToImageDelta(n.x-this._xSpring.target.value,n.y-this._ySpring.target.value)},_imageToViewportDelta:function(e,t,i){i=(i?this._scaleSpring.current:this._scaleSpring.target).value;return new y.Point(e/this.source.dimensions.x*i,t/this.source.dimensions.y/this.contentAspectX*i)},imageToViewportCoordinates:function(e,t,i){if(e instanceof y.Point){i=t;t=e.y;e=e.x}t=this._imageToViewportDelta(e,t);if(i){t.x+=this._xSpring.current.value;t.y+=this._ySpring.current.value}else{t.x+=this._xSpring.target.value;t.y+=this._ySpring.target.value}return t.rotate(this.getRotation(i),this._getRotationPoint(i))},imageToViewportRectangle:function(e,t,i,n,o){var r=e;r instanceof y.Rect?o=t:r=new y.Rect(e,t,i,n);i=this.imageToViewportCoordinates(r.getTopLeft(),o);n=this._imageToViewportDelta(r.width,r.height,o);return new y.Rect(i.x,i.y,n.x,n.y,r.degrees+this.getRotation(o))},viewportToImageRectangle:function(e,t,i,n,o){var r=e;e instanceof y.Rect?o=t:r=new y.Rect(e,t,i,n);i=this.viewportToImageCoordinates(r.getTopLeft(),o);n=this._viewportToImageDelta(r.width,r.height,o);return new y.Rect(i.x,i.y,n.x,n.y,r.degrees-this.getRotation(o))},viewerElementToImageCoordinates:function(e){e=this.viewport.pointFromPixel(e,!0);return this.viewportToImageCoordinates(e)},imageToViewerElementCoordinates:function(e){e=this.imageToViewportCoordinates(e);return this.viewport.pixelFromPoint(e,!0)},windowToImageCoordinates:function(e){e=e.minus(OpenSeadragon.getElementPosition(this.viewer.element));return this.viewerElementToImageCoordinates(e)},imageToWindowCoordinates:function(e){return this.imageToViewerElementCoordinates(e).plus(OpenSeadragon.getElementPosition(this.viewer.element))},_viewportToTiledImageRectangle:function(e){var t=this._scaleSpring.current.value;e=e.rotate(-this.getRotation(!0),this._getRotationPoint(!0));return new y.Rect((e.x-this._xSpring.current.value)/t,(e.y-this._ySpring.current.value)/t,e.width/t,e.height/t,e.degrees)},viewportToImageZoom:function(e){return this._scaleSpring.current.value*this.viewport._containerInnerSize.x/this.source.dimensions.x*e},imageToViewportZoom:function(e){return e/(this._scaleSpring.current.value*this.viewport._containerInnerSize.x/this.source.dimensions.x)},setPosition:function(e,t){var i=this._xSpring.target.value===e.x&&this._ySpring.target.value===e.y;if(t){if(i&&this._xSpring.current.value===e.x&&this._ySpring.current.value===e.y)return;this._xSpring.resetTo(e.x);this._ySpring.resetTo(e.y);this._needsDraw=!0}else{if(i)return;this._xSpring.springTo(e.x);this._ySpring.springTo(e.y);this._needsDraw=!0}i||this._raiseBoundsChange()},setWidth:function(e,t){this._setScale(e,t)},setHeight:function(e,t){this._setScale(e/this.normHeight,t)},setCroppingPolygons:function(e){var t=function(e){return e instanceof y.Point||"number"==typeof e.x&&"number"==typeof e.y};try{if(!y.isArray(e))throw new Error("Provided cropping polygon is not an array");this._croppingPolygons=e.map(function(e){return e.map(function(e){try{if(t(e))return{x:e.x,y:e.y};throw new Error}catch(e){throw new Error("A Provided cropping polygon point is not supported")}})})}catch(e){y.console.error("[TiledImage.setCroppingPolygons] Cropping polygon format not supported");y.console.error(e);this._croppingPolygons=null}},resetCroppingPolygons:function(){this._croppingPolygons=null},fitBounds:function(e,t,i){t=t||y.Placement.CENTER;var n=y.Placement.properties[t];var o=this.contentAspectX;var r=0;var s=0;var a=1;t=1;if(this._clip){o=this._clip.getAspectRatio();a=this._clip.width/this.source.dimensions.x;t=this._clip.height/this.source.dimensions.y;if(e.getAspectRatio()>o){r=this._clip.x/this._clip.height*e.height;s=this._clip.y/this._clip.height*e.height}else{r=this._clip.x/this._clip.width*e.width;s=this._clip.y/this._clip.width*e.width}}if(e.getAspectRatio()>o){var l=e.height/t;t=0;n.isHorizontallyCentered?t=(e.width-e.height*o)/2:n.isRight&&(t=e.width-e.height*o);this.setPosition(new y.Point(e.x-r+t,e.y-s),i);this.setHeight(l,i)}else{l=e.width/a;a=0;n.isVerticallyCentered?a=(e.height-e.width/o)/2:n.isBottom&&(a=e.height-e.width/o);this.setPosition(new y.Point(e.x-r,e.y-s+a),i);this.setWidth(l,i)}},getClip:function(){return this._clip?this._clip.clone():null},setClip:function(e){y.console.assert(!e||e instanceof y.Rect,"[TiledImage.setClip] newClip must be an OpenSeadragon.Rect or null");e instanceof y.Rect?this._clip=e.clone():this._clip=null;this._needsDraw=!0;this.raiseEvent("clip-change")},getFlip:function(){return!!this.flipped},setFlip:function(e){this.flipped=!!e;this._needsDraw=!0;this._raiseBoundsChange()},getOpacity:function(){return this.opacity},setOpacity:function(e){if(e!==this.opacity){this.opacity=e;this._needsDraw=!0;this.raiseEvent("opacity-change",{opacity:this.opacity})}},getPreload:function(){return this._preload},setPreload:function(e){this._preload=!!e;this._needsDraw=!0},getRotation:function(e){return(e?this._degreesSpring.current:this._degreesSpring.target).value},setRotation:function(e,t){if(this._degreesSpring.target.value!==e||!this._degreesSpring.isAtTargetValue()){t?this._degreesSpring.resetTo(e):this._degreesSpring.springTo(e);this._needsDraw=!0;this._raiseBoundsChange()}},_getRotationPoint:function(e){return this.getBoundsNoRotate(e).getCenter()},getCompositeOperation:function(){return this.compositeOperation},setCompositeOperation:function(e){if(e!==this.compositeOperation){this.compositeOperation=e;this._needsDraw=!0;this.raiseEvent("composite-operation-change",{compositeOperation:this.compositeOperation})}},_setScale:function(e,t){var i=this._scaleSpring.target.value===e;if(t){if(i&&this._scaleSpring.current.value===e)return;this._scaleSpring.resetTo(e);this._updateForScale();this._needsDraw=!0}else{if(i)return;this._scaleSpring.springTo(e);this._updateForScale();this._needsDraw=!0}i||this._raiseBoundsChange()},_updateForScale:function(){this._worldWidthTarget=this._scaleSpring.target.value;this._worldHeightTarget=this.normHeight*this._scaleSpring.target.value;this._worldWidthCurrent=this._scaleSpring.current.value;this._worldHeightCurrent=this.normHeight*this._scaleSpring.current.value},_raiseBoundsChange:function(){this.raiseEvent("bounds-change")},_isBottomItem:function(){return this.viewer.world.getItemAt(0)===this},_getLevelsInterval:function(){var e=Math.max(this.source.minLevel,Math.floor(Math.log(this.minZoomImageRatio)/Math.log(2)));var t=this.viewport.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(0),!0).x*this._scaleSpring.current.value;t=Math.min(Math.abs(this.source.maxLevel),Math.abs(Math.floor(Math.log(t/this.minPixelRatio)/Math.log(2))));t=Math.max(t,this.source.minLevel||0);return{lowestLevel:Math.min(e,t),highestLevel:t}},_updateViewport:function(){this._needsDraw=!1;this._tilesLoading=0;this.loadingCoverage={};for(;0<this.lastDrawn.length;)this.lastDrawn.pop().beingDrawn=!1;var e=this.viewport;var t=this._viewportToTiledImageRectangle(e.getBoundsWithMargins(!0));if(!this.wrapHorizontal&&!this.wrapVertical){var i=this._viewportToTiledImageRectangle(this.getClippedBounds(!0));if(null===(t=t.intersection(i)))return}i=this._getLevelsInterval();var n=i.lowestLevel;i=i.highestLevel;var o=null;var r=!1;var s=y.now();for(var a=i;n<=a;a--){var l=!1;var h=e.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(a),!0).x*this._scaleSpring.current.value;if(a===n||!r&&h>=this.minPixelRatio)r=l=!0;else if(!r)continue;var c=e.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(a),!1).x*this._scaleSpring.current.value;var u=e.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(Math.max(this.source.getClosestLevel(),0)),!1).x*this._scaleSpring.current.value;u=this.immediateRender?1:u;h=Math.min(1,(h-.5)/.5);c=u/Math.abs(u-c);o=this._updateLevel(r,l,a,h,c,t,s,o);if(this._providesCoverage(this.coverage,a))break}this._drawTiles(this.lastDrawn);if(o&&!o.context2D){this._loadTile(o,s);this._needsDraw=!0;this._setFullyLoaded(!1)}else this._setFullyLoaded(0===this._tilesLoading)},_getCornerTiles:function(e,t,i){var n;var o;if(this.wrapHorizontal){n=y.positiveModulo(t.x,1);o=y.positiveModulo(i.x,1)}else{n=Math.max(0,t.x);o=Math.min(1,i.x)}var r=1/this.source.aspectRatio;if(this.wrapVertical){s=y.positiveModulo(t.y,r);a=y.positiveModulo(i.y,r)}else{s=Math.max(0,t.y);a=Math.min(r,i.y)}var s=this.source.getTileAtPoint(e,new y.Point(n,s));var a=this.source.getTileAtPoint(e,new y.Point(o,a));e=this.source.getNumTiles(e);if(this.wrapHorizontal){s.x+=e.x*Math.floor(t.x);a.x+=e.x*Math.floor(i.x)}if(this.wrapVertical){s.y+=e.y*Math.floor(t.y/r);a.y+=e.y*Math.floor(i.y/r)}return{topLeft:s,bottomRight:a}},_updateLevel:function(e,t,i,n,o,r,s,a){var l=r.getBoundingBox().getTopLeft();var h=r.getBoundingBox().getBottomRight();this.viewer&&this.viewer.raiseEvent("update-level",{tiledImage:this,havedrawn:e,level:i,opacity:n,visibility:o,drawArea:r,topleft:l,bottomright:h,currenttime:s,best:a});this._resetCoverage(this.coverage,i);this._resetCoverage(this.loadingCoverage,i);h=this._getCornerTiles(i,l,h);var c=h.topLeft;var u=h.bottomRight;var d=this.source.getNumTiles(i);var p=this.viewport.pixelFromPoint(this.viewport.getCenter());if(this.getFlip()){u.x+=1;this.wrapHorizontal||(u.x=Math.min(u.x,d.x-1))}for(var g=c.x;g<=u.x;g++)for(var m=c.y;m<=u.y;m++){if(this.getFlip()){var v=(d.x+g%d.x)%d.x;v=g+d.x-v-v-1}else v=g;null!==r.intersection(this.getTileBounds(i,v,m))&&(a=this._updateTile(t,e,v,m,i,n,o,p,d,s,a))}return a},_updateTile:function(e,t,i,n,o,r,s,a,l,h,c){var u=this._getTile(i,n,o,h,l,this._worldWidthCurrent,this._worldHeightCurrent),l=t;this.viewer&&this.viewer.raiseEvent("update-tile",{tiledImage:this,tile:u});this._setCoverage(this.coverage,o,i,n,!1);t=u.loaded||u.loading||this._isCovered(this.loadingCoverage,o,i,n);this._setCoverage(this.loadingCoverage,o,i,n,t);if(!u.exists)return c;e&&!l&&(this._isCovered(this.coverage,o,i,n)?this._setCoverage(this.coverage,o,i,n,!0):l=!0);if(!l)return c;this._positionTile(u,this.source.tileOverlap,this.viewport,a,s);if(!u.loaded)if(u.context2D)this._setTileLoaded(u);else{s=this._tileCache.getImageRecord(u.cacheKey);if(s){s=s.getImage();this._setTileLoaded(u,s)}}u.loaded?this._blendTile(u,i,n,o,r,h)&&(this._needsDraw=!0):u.loading?this._tilesLoading++:t||(c=this._compareTiles(c,u));return c},_getTile:function(e,t,i,n,o,r,s){var a,l,h,c,u,d,p,g,m,v=this.tilesMatrix,f=this.source;v[i]||(v[i]={});v[i][e]||(v[i][e]={});if(!v[i][e][t]||!v[i][e][t].flipped!=!this.flipped){a=(o.x+e%o.x)%o.x;l=(o.y+t%o.y)%o.y;h=this.getTileBounds(i,e,t);c=f.getTileBounds(i,a,l,!0);u=f.tileExists(i,a,l);d=f.getTileUrl(i,a,l);m=f.getTilePostData(i,a,l);if(this.loadTilesWithAjax){p=f.getTileAjaxHeaders(i,a,l);y.isPlainObject(this.ajaxHeaders)&&(p=y.extend({},this.ajaxHeaders,p))}else p=null;g=f.getContext2D?f.getContext2D(i,a,l):void 0;m=new y.Tile(i,e,t,h,u,d,g,this.loadTilesWithAjax,p,c,m,f.getTileHashKey(i,a,l,d,p,m));this.getFlip()?0==a&&(m.isRightMost=!0):a==o.x-1&&(m.isRightMost=!0);l==o.y-1&&(m.isBottomMost=!0);m.flipped=this.flipped;v[i][e][t]=m}(m=v[i][e][t]).lastTouchTime=n;return m},_loadTile:function(n,o){var r=this;n.loading=!0;this._imageLoader.addJob({src:n.url,postData:n.postData,loadWithAjax:n.loadWithAjax,ajaxHeaders:n.ajaxHeaders,crossOriginPolicy:this.crossOriginPolicy,ajaxWithCredentials:this.ajaxWithCredentials,callback:function(e,t,i){r._onTileLoad(n,o,e,t,i)},abort:function(){n.loading=!1}})},_onTileLoad:function(t,e,i,n,o){if(i)if(e<this.lastResetTime){y.console.warn("Ignoring tile %s loaded before reset: %s",t,t.url);t.loading=!1}else{function r(){var e=s.source.getClosestLevel();s._setTileLoaded(t,i,e,o)}var s=this;this._midDraw?window.setTimeout(r,1):r()}else{y.console.error("Tile %s failed to load: %s - error: %s",t,t.url,n);this.viewer.raiseEvent("tile-load-failed",{tile:t,tiledImage:this,time:e,message:n,tileRequest:o});t.loading=!1;t.exists=!1}},_setTileLoaded:function(e,t,i,n){var o=0,r=this;function s(){o++;return a}function a(){if(0===--o){e.loading=!1;e.loaded=!0;e.context2D||r._tileCache.cacheTile({image:t,tile:e,cutoff:i,tiledImage:r});r._needsDraw=!0}}this.viewer.raiseEvent("tile-loaded",{tile:e,tiledImage:this,tileRequest:n,image:t,getCompletionCallback:s});s()()},_positionTile:function(e,t,i,n,o){var r=e.bounds.getTopLeft();r.x*=this._scaleSpring.current.value;r.y*=this._scaleSpring.current.value;r.x+=this._xSpring.current.value;r.y+=this._ySpring.current.value;var s=e.bounds.getSize();s.x*=this._scaleSpring.current.value;s.y*=this._scaleSpring.current.value;var a=i.pixelFromPointNoRotate(r,!0),l=i.pixelFromPointNoRotate(r,!1),r=i.deltaPixelsFromPointsNoRotate(s,!0),s=i.deltaPixelsFromPointsNoRotate(s,!1),s=l.plus(s.divide(2)),s=n.squaredDistanceTo(s);t||(r=r.plus(new y.Point(1,1)));e.isRightMost&&this.wrapHorizontal&&(r.x+=.75);e.isBottomMost&&this.wrapVertical&&(r.y+=.75);e.position=a;e.size=r;e.squaredDistance=s;e.visibility=o},_blendTile:function(e,t,i,n,o,r){var s,a=1e3*this.blendTime;e.blendStart||(e.blendStart=r);s=r-e.blendStart;r=a?Math.min(1,s/a):1;this.alwaysBlend&&(r*=o);e.opacity=r;this.lastDrawn.push(e);if(1===r){this._setCoverage(this.coverage,n,t,i,!0);this._hasOpaqueTile=!0}else if(s<a)return!0;return!1},_compareTiles:function(e,t){return!e||t.visibility>e.visibility||t.visibility===e.visibility&&t.squaredDistance<e.squaredDistance?t:e},_drawTiles:function(e){if(0!==this.opacity&&(0!==e.length||this.placeholderFillStyle)){var t=e[0];var i;t&&(i=this.opacity<1||this.compositeOperation&&"source-over"!==this.compositeOperation||!this._isBottomItem()&&t._hasTransparencyChannel());var n;var o;var r=this.viewport.getZoom(!0);var s=this.viewportToImageZoom(r);if(1<e.length&&s>this.smoothTileEdgesMinZoom&&!this.iOSDevice&&this.getRotation(!0)%360==0&&y.supportsCanvas&&this.viewer.useCanvas){i=!0;n=t.getScaleForEdgeSmoothing();o=t.getTranslationForEdgeSmoothing(n,this._drawer.getCanvasSize(!1),this._drawer.getCanvasSize(!0))}var a;if(i){if(!n){a=this.viewport.viewportToViewerElementRectangle(this.getClippedBounds(!0)).getIntegerBoundingBox();this._drawer.viewer.viewport.getFlip()&&(0===this.viewport.degrees&&this.getRotation(!0)%360==0||(a.x=this._drawer.viewer.container.clientWidth-(a.x+a.width)));a=a.times(y.pixelDensityRatio)}this._drawer._clear(!0,a)}if(!n){0!==this.viewport.degrees&&this._drawer._offsetForRotation({degrees:this.viewport.degrees,useSketch:i});this.getRotation(!0)%360!=0&&this._drawer._offsetForRotation({degrees:this.getRotation(!0),point:this.viewport.pixelFromPointNoRotate(this._getRotationPoint(!0),!0),useSketch:i});0===this.viewport.degrees&&this.getRotation(!0)%360==0&&this._drawer.viewer.viewport.getFlip()&&this._drawer._flip()}r=!1;if(this._clip){this._drawer.saveContext(i);s=this.imageToViewportRectangle(this._clip,!0);s=s.rotate(-this.getRotation(!0),this._getRotationPoint(!0));s=this._drawer.viewportToDrawerRectangle(s);n&&(s=s.times(n));o&&(s=s.translate(o));this._drawer.setClip(s,i);r=!0}if(this._croppingPolygons){this._drawer.saveContext(i);try{var l=this._croppingPolygons.map(function(e){return e.map(function(e){e=this.imageToViewportCoordinates(e.x,e.y,!0).rotate(-this.getRotation(!0),this._getRotationPoint(!0));e=this._drawer.viewportCoordToDrawerCoord(e);return e=n?e.times(n):e})});this._drawer.clipWithPolygons(l,i)}catch(e){y.console.error(e)}r=!0}if(this.placeholderFillStyle&&!1===this._hasOpaqueTile){l=this._drawer.viewportToDrawerRectangle(this.getBounds(!0));n&&(l=l.times(n));o&&(l=l.translate(o));var h=null;h="function"==typeof this.placeholderFillStyle?this.placeholderFillStyle(this,this._drawer.context):this.placeholderFillStyle;this._drawer.drawRectangle(l,h,i)}h=function(e){if("number"==typeof e)return g(e);if(!e||!y.Browser)return d;var t=e[y.Browser.vendor];p(t)&&(t=e["*"]);return g(t)}(this.subPixelRoundingForTransparency);var c=!1;h===y.SUBPIXEL_ROUNDING_OCCURRENCES.ALWAYS?c=!0:h===y.SUBPIXEL_ROUNDING_OCCURRENCES.ONLY_AT_REST&&(c=!(this.viewer&&this.viewer.isAnimating()));for(var u=e.length-1;0<=u;u--){t=e[u];this._drawer.drawTile(t,this._drawingHandler,i,n,o,c);t.beingDrawn=!0;this.viewer&&this.viewer.raiseEvent("tile-drawn",{tiledImage:this,tile:t})}r&&this._drawer.restoreContext(i);if(!n){this.getRotation(!0)%360!=0&&this._drawer._restoreRotationChanges(i);0!==this.viewport.degrees&&this._drawer._restoreRotationChanges(i)}if(i){if(n){0!==this.viewport.degrees&&this._drawer._offsetForRotation({degrees:this.viewport.degrees,useSketch:!1});this.getRotation(!0)%360!=0&&this._drawer._offsetForRotation({degrees:this.getRotation(!0),point:this.viewport.pixelFromPointNoRotate(this._getRotationPoint(!0),!0),useSketch:!1})}this._drawer.blendSketch({opacity:this.opacity,scale:n,translate:o,compositeOperation:this.compositeOperation,bounds:a});if(n){this.getRotation(!0)%360!=0&&this._drawer._restoreRotationChanges(!1);0!==this.viewport.degrees&&this._drawer._restoreRotationChanges(!1)}}n||0===this.viewport.degrees&&this.getRotation(!0)%360==0&&this._drawer.viewer.viewport.getFlip()&&this._drawer._flip();this._drawDebugInfo(e)}},_drawDebugInfo:function(e){if(this.debugMode)for(var t=e.length-1;0<=t;t--){var i=e[t];try{this._drawer.drawDebugInfo(i,e.length,t,this)}catch(e){y.console.error(e)}}},_providesCoverage:function(e,t,i,n){var o,r,s,a;if(!e[t])return!1;if(void 0!==i&&void 0!==n)return void 0===e[t][i]||void 0===e[t][i][n]||!0===e[t][i][n];for(s in o=e[t])if(Object.prototype.hasOwnProperty.call(o,s))for(a in r=o[s])if(Object.prototype.hasOwnProperty.call(r,a)&&!r[a])return!1;return!0},_isCovered:function(e,t,i,n){return void 0===i||void 0===n?this._providesCoverage(e,t+1):this._providesCoverage(e,t+1,2*i,2*n)&&this._providesCoverage(e,t+1,2*i,2*n+1)&&this._providesCoverage(e,t+1,2*i+1,2*n)&&this._providesCoverage(e,t+1,2*i+1,2*n+1)},_setCoverage:function(e,t,i,n,o){if(e[t]){e[t][i]||(e[t][i]={});e[t][i][n]=o}else y.console.warn("Setting coverage for a tile before its level's coverage has been reset: %s",t)},_resetCoverage:function(e,t){e[t]={}}});var d=y.SUBPIXEL_ROUNDING_OCCURRENCES.NEVER;function p(e){return e!==y.SUBPIXEL_ROUNDING_OCCURRENCES.ALWAYS&&e!==y.SUBPIXEL_ROUNDING_OCCURRENCES.ONLY_AT_REST&&e!==y.SUBPIXEL_ROUNDING_OCCURRENCES.NEVER}function g(e){return p(e)?d:e}}(OpenSeadragon);!function(g){function m(e){g.console.assert(e,"[TileCache.cacheTile] options is required");g.console.assert(e.tile,"[TileCache.cacheTile] options.tile is required");g.console.assert(e.tiledImage,"[TileCache.cacheTile] options.tiledImage is required");this.tile=e.tile;this.tiledImage=e.tiledImage}function v(e){g.console.assert(e,"[ImageRecord] options is required");g.console.assert(e.image,"[ImageRecord] options.image is required");this._image=e.image;this._tiles=[]}v.prototype={destroy:function(){this._image=null;this._renderedContext=null;this._tiles=null},getImage:function(){return this._image},getRenderedContext:function(){if(!this._renderedContext){var e=document.createElement("canvas");e.width=this._image.width;e.height=this._image.height;this._renderedContext=e.getContext("2d");this._renderedContext.drawImage(this._image,0,0);this._image=null}return this._renderedContext},setRenderedContext:function(e){g.console.error("ImageRecord.setRenderedContext is deprecated. The rendered context should be created by the ImageRecord itself when calling ImageRecord.getRenderedContext.");this._renderedContext=e},addTile:function(e){g.console.assert(e,"[ImageRecord.addTile] tile is required");this._tiles.push(e)},removeTile:function(e){for(var t=0;t<this._tiles.length;t++)if(this._tiles[t]===e){this._tiles.splice(t,1);return}g.console.warn("[ImageRecord.removeTile] trying to remove unknown tile",e)},getTileCount:function(){return this._tiles.length}};g.TileCache=function(e){this._maxImageCacheCount=(e=e||{}).maxImageCacheCount||g.DEFAULT_SETTINGS.maxImageCacheCount;this._tilesLoaded=[];this._imagesLoaded=[];this._imagesLoadedCount=0};g.TileCache.prototype={numTilesLoaded:function(){return this._tilesLoaded.length},cacheTile:function(e){g.console.assert(e,"[TileCache.cacheTile] options is required");g.console.assert(e.tile,"[TileCache.cacheTile] options.tile is required");g.console.assert(e.tile.cacheKey,"[TileCache.cacheTile] options.tile.cacheKey is required");g.console.assert(e.tiledImage,"[TileCache.cacheTile] options.tiledImage is required");var t=e.cutoff||0;var i=this._tilesLoaded.length;var n=this._imagesLoaded[e.tile.cacheKey];if(!n){g.console.assert(e.image,"[TileCache.cacheTile] options.image is required to create an ImageRecord");n=this._imagesLoaded[e.tile.cacheKey]=new v({image:e.image});this._imagesLoadedCount++}n.addTile(e.tile);e.tile.cacheImageRecord=n;if(this._imagesLoadedCount>this._maxImageCacheCount){var o=null;var r=-1;var s=null;var a,l,h,c,u,d;for(var p=this._tilesLoaded.length-1;0<=p;p--)if(!((a=(d=this._tilesLoaded[p]).tile).level<=t||a.beingDrawn))if(o){c=a.lastTouchTime;l=o.lastTouchTime;u=a.level;h=o.level;if(c<l||c===l&&h<u){o=a;r=p;s=d}}else{o=a;r=p;s=d}if(o&&0<=r){this._unloadTile(s);i=r}}this._tilesLoaded[i]=new m({tile:e.tile,tiledImage:e.tiledImage})},clearTilesFor:function(e){g.console.assert(e,"[TileCache.clearTilesFor] tiledImage is required");var t;for(var i=0;i<this._tilesLoaded.length;++i)if((t=this._tilesLoaded[i]).tiledImage===e){this._unloadTile(t);this._tilesLoaded.splice(i,1);i--}},getImageRecord:function(e){g.console.assert(e,"[TileCache.getImageRecord] cacheKey is required");return this._imagesLoaded[e]},_unloadTile:function(e){g.console.assert(e,"[TileCache._unloadTile] tileRecord is required");var t=e.tile;var i=e.tiledImage;t.unload();t.cacheImageRecord=null;e=this._imagesLoaded[t.cacheKey];e.removeTile(t);if(!e.getTileCount()){e.destroy();delete this._imagesLoaded[t.cacheKey];this._imagesLoadedCount--}i.viewer.raiseEvent("tile-unloaded",{tile:t,tiledImage:i})}}}(OpenSeadragon);!function(g){g.World=function(e){var t=this;g.console.assert(e.viewer,"[World] options.viewer is required");g.EventSource.call(this);this.viewer=e.viewer;this._items=[];this._needsDraw=!1;this._autoRefigureSizes=!0;this._needsSizesFigured=!1;this._delegatedFigureSizes=function(e){t._autoRefigureSizes?t._figureSizes():t._needsSizesFigured=!0};this._figureSizes()};g.extend(g.World.prototype,g.EventSource.prototype,{addItem:function(e,t){g.console.assert(e,"[World.addItem] item is required");g.console.assert(e instanceof g.TiledImage,"[World.addItem] only TiledImages supported at this time");if(void 0!==(t=t||{}).index){t=Math.max(0,Math.min(this._items.length,t.index));this._items.splice(t,0,e)}else this._items.push(e);this._autoRefigureSizes?this._figureSizes():this._needsSizesFigured=!0;this._needsDraw=!0;e.addHandler("bounds-change",this._delegatedFigureSizes);e.addHandler("clip-change",this._delegatedFigureSizes);this.raiseEvent("add-item",{item:e})},getItemAt:function(e){g.console.assert(void 0!==e,"[World.getItemAt] index is required");return this._items[e]},getIndexOfItem:function(e){g.console.assert(e,"[World.getIndexOfItem] item is required");return g.indexOf(this._items,e)},getItemCount:function(){return this._items.length},setItemIndex:function(e,t){g.console.assert(e,"[World.setItemIndex] item is required");g.console.assert(void 0!==t,"[World.setItemIndex] index is required");var i=this.getIndexOfItem(e);if(t>=this._items.length)throw new Error("Index bigger than number of layers.");if(t!==i&&-1!==i){this._items.splice(i,1);this._items.splice(t,0,e);this._needsDraw=!0;this.raiseEvent("item-index-change",{item:e,previousIndex:i,newIndex:t})}},removeItem:function(e){g.console.assert(e,"[World.removeItem] item is required");var t=g.indexOf(this._items,e);if(-1!==t){e.removeHandler("bounds-change",this._delegatedFigureSizes);e.removeHandler("clip-change",this._delegatedFigureSizes);e.destroy();this._items.splice(t,1);this._figureSizes();this._needsDraw=!0;this._raiseRemoveItem(e)}},removeAll:function(){this.viewer._cancelPendingImages();var e;var t;for(t=0;t<this._items.length;t++){(e=this._items[t]).removeHandler("bounds-change",this._delegatedFigureSizes);e.removeHandler("clip-change",this._delegatedFigureSizes);e.destroy()}var i=this._items;this._items=[];this._figureSizes();this._needsDraw=!0;for(t=0;t<i.length;t++){e=i[t];this._raiseRemoveItem(e)}},resetItems:function(){for(var e=0;e<this._items.length;e++)this._items[e].reset()},update:function(){var e=!1;for(var t=0;t<this._items.length;t++)e=this._items[t].update()||e;return e},draw:function(){for(var e=0;e<this._items.length;e++)this._items[e].draw();this._needsDraw=!1},needsDraw:function(){for(var e=0;e<this._items.length;e++)if(this._items[e].needsDraw())return!0;return this._needsDraw},getHomeBounds:function(){return this._homeBounds.clone()},getContentFactor:function(){return this._contentFactor},setAutoRefigureSizes:function(e){if((this._autoRefigureSizes=e)&this._needsSizesFigured){this._figureSizes();this._needsSizesFigured=!1}},arrange:function(e){var t=(e=e||{}).immediately||!1;var i=e.layout||g.DEFAULT_SETTINGS.collectionLayout;var n=e.rows||g.DEFAULT_SETTINGS.collectionRows;var o=e.columns||g.DEFAULT_SETTINGS.collectionColumns;var r=e.tileSize||g.DEFAULT_SETTINGS.collectionTileSize;var s=r+(e.tileMargin||g.DEFAULT_SETTINGS.collectionTileMargin);var a;a=!e.rows&&o?o:Math.ceil(this._items.length/n);var l=0;var h=0;var c,u,d;this.setAutoRefigureSizes(!1);for(var p=0;p<this._items.length;p++){if(p&&p%a==0)if("horizontal"===i){h+=s;l=0}else{l+=s;h=0}d=(u=(d=(c=this._items[p]).getBounds()).width>d.height?r:r*(d.width/d.height))*(d.height/d.width);d=new g.Point(l+(r-u)/2,h+(r-d)/2);c.setPosition(d,t);c.setWidth(u,t);"horizontal"===i?l+=s:h+=s}this.setAutoRefigureSizes(!0)},_figureSizes:function(){var e=this._homeBounds?this._homeBounds.clone():null;var t=this._contentSize?this._contentSize.clone():null;var i=this._contentFactor||0;if(this._items.length){var n=this._items[0];var o=n.getBounds();this._contentFactor=n.getContentSize().x/o.width;var r=n.getClippedBounds().getBoundingBox();var s=r.x;var a=r.y;var l=r.x+r.width;var h=r.y+r.height;for(var c=1;c<this._items.length;c++){o=(n=this._items[c]).getBounds();this._contentFactor=Math.max(this._contentFactor,n.getContentSize().x/o.width);r=n.getClippedBounds().getBoundingBox();s=Math.min(s,r.x);a=Math.min(a,r.y);l=Math.max(l,r.x+r.width);h=Math.max(h,r.y+r.height)}this._homeBounds=new g.Rect(s,a,l-s,h-a);this._contentSize=new g.Point(this._homeBounds.width*this._contentFactor,this._homeBounds.height*this._contentFactor)}else{this._homeBounds=new g.Rect(0,0,1,1);this._contentSize=new g.Point(1,1);this._contentFactor=1}this._contentFactor===i&&this._homeBounds.equals(e)&&this._contentSize.equals(t)||this.raiseEvent("metrics-change",{})},_raiseRemoveItem:function(e){this.raiseEvent("remove-item",{item:e})}})}(OpenSeadragon);
//# sourceMappingURL=openseadragon.min.js.map
(function(global) {
  //NodeList to array
  function toArray(list) {
    return list ? Array.prototype.slice.call(list) : [];
  }

  //Select only the first node (or #id)
  function $(selector, container) {
    if (!container && selector.indexOf('#') === 0) return document.getElementById(selector.substr(1, selector.length));
    return (container || document).querySelector(selector);
  };

  //Select all the node and convert to array
  function $$(selector, container) {
    return toArray( (container || document).querySelectorAll(selector) );
  }

  global.$ = $;
  global.$$ = $$;
  global.ff = {
    "toArray": toArray
  };
})(this);


(function(window) {
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //Variables
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    var w = window,
        d = document,
        html = d.documentElement,
        body = d.body,
        header = $('#header'),
        main = $('#main'),
        page = $('.page',main),
        headerH,
        windowH,
        windowW,
        scrollT,
        scrollUp = false,
        vhCssVar = false,
        sauvScroll = 0;

    setTimeout(function() { html.classList.add('is-js-init'); }, 400);

    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //Dimensions
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    function update_dimensions() {
      windowH = w.innerHeight;
      windowW = w.innerWidth;
      headerH = header ? header.offsetHeight : 0;
      update_scroll();
    }

    function update_scroll() {
      var newScrollT = (w.pageYOffset || html.scrollTop);
      if(newScrollT < scrollT) {
        scrollUp = true;
      } else {
        scrollUp = false;
      }
      scrollT = newScrollT;
    }

    update_dimensions();

    function setCssVarVH() {
      if(!vhCssVar || Math.abs(vhCssVar - windowH) > 250) {
        vhCssVar = windowH;
        html.style.setProperty('--vh', windowH+'px');
      }
    }


    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //Helper functions
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //Easing functions (inspired by http://gizma.com/easing/)
    var easing = {
      linear: function (t) { return t },
      easeInQuad: function (t) { return t*t },
      easeOutQuad: function (t) { return t*(2-t) },
      easeInOutQuad: function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
      easeInCubic: function (t) { return t*t*t },
      easeOutCubic: function (t) { return (--t)*t*t+1 },
      easeInOutCubic: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
      easeInQuart: function (t) { return t*t*t*t },
      easeOutQuart: function (t) { return 1-(--t)*t*t*t },
      easeInOutQuart: function (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
      easeInQuint: function (t) { return t*t*t*t*t },
      easeOutQuint: function (t) { return 1+(--t)*t*t*t*t },
      easeInOutQuint: function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }
    }

    //ScrollTo animate
    function scrollTo(Y, duration, easingFunction, callback) {
      var start = Date.now(),
          from = window.pageYOffset;

      if(from === Y) {
        if(callback) callback();
        return;
      }

      if(!easingFunction) easingFunction = easing.linear;

      function scroll(timestamp) {
        var currentTime = Date.now(),
            time = Math.min(1, ((currentTime - start) / duration)),
            easedT = easingFunction(time);

        yPos = (easedT * (Y - from)) + from;
        window.scrollTo(0, yPos);

        if(time < 1) requestAnimationFrame(scroll);
        else if(callback) callback();
      }

      requestAnimationFrame(scroll);
    }

    //Debounce
    function debounce(func, wait, immediate) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };


    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //Supports
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    var transformProp;
    (function () {
      var style = document.createElement('a').style;
      var prop;
      if (style[prop = 'webkitTransform'] !== undefined) {
        transformProp = prop;
      }
      if (style[prop = 'msTransform'] !== undefined) {
        transformProp = prop;
      }
      if (style[prop = 'transform'] !== undefined) {
        transformProp = prop;
      }
    }());


    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //Global events manager (events delegation)
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    var globalEvents = [];

    function setEvents(selector, callback) {
      globalEvents.push({
        'selector': selector,
        'callback': callback
      });
    }

    //if document the right click event is triggered
    body.addEventListener('click', function (event) {
      if(event.ctrlKey) return;

      globalEvents.forEach(function(ev) {
        if (event.target && event.target.matches(ev.selector+', '+ev.selector+' *')) {
          event.stopPropagation();
          ev.callback(event,event.target.closest(ev.selector));
      	}
      });
    }, false);

    function simulateClick(el) {
      var eventClick = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      var canceled = !el.dispatchEvent(eventClick);
    }


    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //Menu
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    var idMenuTimeOut = false;
    $('#primaryNav').setAttribute('aria-hidden','true');

    setEvents('.js-nav-open', function(event) {
      event.preventDefault();
      close_panel();
      if(!html.classList.contains('is-menu-open')) {
        open_menu();
      } else {
        close_menu()
      }
    });
    setEvents('.js-nav-close', function(event) {
      event.preventDefault();
      close_menu()
    });

    function open_menu() {
      if(html.classList.contains('is-menu-open')) return;
      if(idMenuTimeOut) w.clearTimeout(idMenuTimeOut);
      sauvScroll = scrollT;
      html.classList.add("is-menu-open");
      $('.header_btn [aria-controls="primaryNav"]').setAttribute('aria-expanded','true');
      $('#primaryNav').setAttribute('aria-hidden','false');
      idMenuTimeOut = w.setTimeout(function() {
        html.classList.add('is-scrollBlocked');
      }, 100);
    }

    function close_menu() {
      if(!html.classList.contains('is-menu-open')) return;
      if(idMenuTimeOut) w.clearTimeout(idMenuTimeOut);
      html.classList.remove("is-scrollBlocked");
      $('.header_btn [aria-controls="primaryNav"]').setAttribute('aria-expanded','false');
      $('#primaryNav').setAttribute('aria-hidden','true');
      html.scrollTop = sauvScroll;
      w.setTimeout(function() {
        html.classList.remove("is-menu-open");
        html.classList.remove("is-nav-hide");
      }, 50);
    }


    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //header hide / show
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    function auto_hide_header() {
      // if(is_menu_mobile) {
      //   return;
      // }
      if(scrollUp || scrollT < headerH) {
        html.classList.remove("is-nav-hide");
      } else {
        // close_menu();
        close_panel();
        html.classList.add("is-nav-hide");
      }
    }


    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //Panel settings / search
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    setEvents('.js-panel-toggle[aria-controls]', toggle_panel);
    setEvents('.js-panel-close', function(event,btn) {
      toggle_panel(event,$('.js-panel-toggle[aria-controls="'+btn.closest('[aria-modal="true"], [role="dialog"]').id+'"]'));
    });

    function toggle_panel(event,btn) {
      if(event) {
        event.preventDefault();
      }
      close_menu();
      if(btn.matches('[aria-expanded="true"]')) {
        close_panel(btn.getAttribute('aria-controls'));
      } else if(html.classList.contains('is-panel-open')) {
        close_panel();
        open_panel(btn.getAttribute('aria-controls'));
      } else {
        open_panel(btn.getAttribute('aria-controls'));
      }
    }

    function close_panel(panelID) {
      if(!html.classList.contains('is-panel-open')) return;
      var btn = panelID ? $('.js-panel-toggle[aria-controls="'+panelID+'"][aria-expanded="true"]') : $('.js-panel-toggle[aria-controls][aria-expanded="true"]');
      var panel = btn ? $('#'+btn.getAttribute('aria-controls')) : false;
      html.classList.remove('is-panel-open');
      if(btn) {
        btn.setAttribute('aria-expanded','false');
      }
      if(panel) {
        panel.setAttribute('aria-hidden','true');
      }
    }

    function open_panel(panelID) {
      var panel = $('#'+panelID);
      var btn = $('.js-panel-toggle[aria-controls="'+panelID+'"]');
      if(!btn || !panel) return;
      html.classList.add('is-panel-open');
      btn.setAttribute('aria-expanded','true');
      panel.setAttribute('aria-hidden','false');
    }


    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //Settings
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    var initialFontSize = parseInt(w.getComputedStyle(body,null).getPropertyValue("font-size"));
    var fontSize = initialFontSize;

    setEvents('.js-settings-size-dec', decrease_font_size);
    setEvents('.js-settings-size-inc', increase_font_size);
    
    function decrease_font_size(event) {
      if(event) {
        event.preventDefault();
      }
      fontSize -= 1;
      // body.style.fontSize = fontSize+'px';
      html.style.setProperty('--text-font-size', fontSize+'px');
      check_font_size();
    }

    function increase_font_size(event) {
      if(event) {
        event.preventDefault();
      }
      fontSize += 1;
      // body.style.fontSize = fontSize+'px';
      html.style.setProperty('--text-font-size', fontSize+'px');
      check_font_size();
    }

    function check_font_size() {
      notes_update_position();
      plates_imgs_size_update();
      if(fontSize >= 24) {
        $('.js-settings-size-inc').setAttribute('disabled','disabled');
      } else {
        $('.js-settings-size-inc').removeAttribute('disabled');
      }
      if(fontSize <= 12) {
        $('.js-settings-size-dec').setAttribute('disabled','disabled');
      } else {
        $('.js-settings-size-dec').removeAttribute('disabled');
      }
    }

    var themeCheckboxes = $$('input[name="color-theme-radios"]',header);
    themeCheckboxes.forEach(function(el) {
      el.addEventListener('change', function (event) {
        if(this.value == 'dark') {
          html.setAttribute('data-theme-color','dark');
        } else {
          html.removeAttribute('data-theme-color');
        }
      }, false);
    });

    setEvents('.js-settings-reset', reset_settings);
    function reset_settings(event) {
      if(event) {
        event.preventDefault();
      }
      // body.style.fontSize = '';
      html.style.removeProperty('--text-font-size');
      fontSize = initialFontSize;
      check_font_size();
      html.removeAttribute('data-theme-color');
      $('input[name="color-theme-radios"][value="light"]',header).checked = true;
    }
    reset_settings();


    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //Page nav
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    var pageNav = $('.page_nav',main);
    var pageContent = $('.page_content',main);
    // var pageNavMargin = pageNav ? parseInt(w.getComputedStyle(pageNav,null).getPropertyValue("margin-top")) : 0;

    function page_nav_update() {
      if(!page || !pageNav || !pageContent) return;
      if(pageContent.getBoundingClientRect().top < headerH && page.getBoundingClientRect().top + page.clientHeight > pageNav.clientHeight + headerH) {
        pageNav.classList.add('is-fixed');
      } else {
        pageNav.classList.remove('is-fixed');
      }
    }
    


    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //Accordion
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    var accsID = 0;
    function accs_init() {
      var accs = $$('.js-acc',main);
      accs.forEach(function(acc) {
        var accHead = acc.firstElementChild;
        var accContent = acc.lastElementChild;
        var accBtnID = 'acc-btn-'+accsID;
        var accContentID = 'acc-content-'+accsID;
        if(!accHead || !accContent) return;
        var accHeadLink = $('a',accHead);
        if(accHeadLink) {
          accHeadLink.classList.add('js-acc-trigger');
          accHeadLink.setAttribute('aria-expanded','false');
          accHeadLink.setAttribute('aria-controls',accContentID);
          accHeadLink.id = accBtnID;
        } else {
          var accHeadClasses = accHead.className;
          accHead.className = '';
          accHead.innerHTML = '<button type="button" aria-expanded="false" class="js-acc-trigger '+accHeadClasses+'" aria-controls="'+accContentID+'" id="'+accBtnID+'">'+accHead.innerHTML+'</button>';
        }
        accContent.setAttribute('aria-hidden','true');
        accContent.setAttribute('aria-labelledby',accBtnID);
        accContent.id = accContentID;
        accContent.classList.add('js-acc-content');
        accsID++;
      });
    }
    accs_init();

    setEvents('.js-acc-trigger[aria-expanded][aria-controls]', acc_trigger);

    function acc_trigger(event, btn) {
      if(event) {
        event.preventDefault();
      }
      var target = $('#'+btn.getAttribute('aria-controls'));
      if(btn.getAttribute('aria-expanded') == 'true') {
        btn.setAttribute('aria-expanded','false');
        target.setAttribute('aria-hidden','true');
      } else {
        btn.setAttribute('aria-expanded','true');
        target.setAttribute('aria-hidden','false');
      }
    }


    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //Notes
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    setEvents('.page_content a[href^="#note-"]:not([href^="#note-p"])', notes_trigger);

    function notes_trigger(event,link) {
      var notesSection = $('.page_infos #notes .js-acc-content',main);
      if(notesSection && notesSection.matches('[aria-hidden="true"]')) {
        simulateClick($('.page_infos #notes .js-acc-trigger',main));
        // if(event) {
        //   event.preventDefault();
        //   setTimeout(function() { simulateClick(link); }, 50);
        // }
      }
    }

    function notes_init(cont) {
      var notes = $$('a[href^="#note-"][id^="note-anchor-"]',(cont || main));
      notes.forEach(function(note) {
        var targetNote = $(note.getAttribute('href'));
        note.setAttribute('aria-hidden','true');
        if(!targetNote) return;
        var noteHTML = targetNote.parentNode.innerHTML;
        var noteEl = d.createElement('small');
        noteEl.classList.add('note');
        noteEl.innerHTML = noteHTML;
        $('*'+note.getAttribute('href'),noteEl).outerHTML = note.outerHTML;
        $('[href^="#note-anchor-"]',noteEl).remove();
        $('[id^="note-anchor-"]',noteEl).setAttribute('aria-label','Voir la note en fin d’article');
        $('[id^="note-anchor-"]',noteEl).removeAttribute('id');
        note.after(noteEl);
      });
    }
    notes_init();

    setEvents('.page_content a[href^="#note-p"], .page_content a[href^="#note-p"] + .note', notes_edition_toggle);

    function notes_edition_toggle(event, el) {
      if(event) {
        event.preventDefault();
      }
      var note = el.matches('.note') ? el : el.nextElementSibling;
      var href = el.matches('a') ? el.href : (el.previousElementSibling ? el.previousElementSibling.href : false);
      if(!note || !note.matches('.note')) return;
      var oldNoteOpen = $('.note.is-open',main);
      note.classList.toggle('is-open');
      if(oldNoteOpen && oldNoteOpen != note) {
        oldNoteOpen.classList.remove('is-open');
      }
      if(href && support.history && note.classList.contains('is-open')) {
        history.replaceState({}, '', href);
      }
    }

    function notes_edition_init(cont) {
      var notes = $$('.note[id^="note-p"]',(cont || main));
      notes.forEach(function(note) {
        var noteBtn = d.createElement('a');
        var noteLabel = $('.note_label',note);
        noteBtn.setAttribute('aria-hidden','true');
        noteBtn.setAttribute('href','#'+note.id);
        noteBtn.id = note.id;
        note.removeAttribute('id');
        noteBtn.innerHTML = noteLabel ? noteLabel.innerHTML : '1';
        note.before(noteBtn);
      });
    }
    notes_edition_init();

    function notes_update_position() {
      var notes = $$('.note',main);
      var content = $('.page_content',main);
      notes.forEach(function(note, idx) {
        if(idx === 0) return;
        note.style[transformProp] = '';
        if(note.getBoundingClientRect().top < notes[idx - 1].getBoundingClientRect().top + notes[idx - 1].offsetHeight) {
          note.style[transformProp] = 'translateY('+(notes[idx - 1].getBoundingClientRect().top + notes[idx - 1].offsetHeight - note.getBoundingClientRect().top)+'px)';
        }
        if(content && idx === notes.length - 1) {
          content.style.marginBottom = '';
          if(note.getBoundingClientRect().top + note.offsetHeight > content.getBoundingClientRect().top + content.offsetHeight) {
            content.style.marginBottom = (note.getBoundingClientRect().top + note.offsetHeight - content.getBoundingClientRect().top - content.offsetHeight)+'px';
          }
        }
      });
    }


    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //Summary
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    var summaryTrigger = false;
    var summary = false;
    var summaryParent = false;

    function summary_init() {
      summaryTrigger = $('.side_trigger button',main);
      summary = $('#side-summary');
      summaryParent = summary ? summary.parentNode : false;
      if(!summaryTrigger || !summary || !summaryParent) return;
      setEvents('.side_trigger button', summary_trigger);
      summaryTriggerInitialText = summaryTrigger.innerHTML;
      summaryTrigger.setAttribute('aria-haspopup','true');
      summaryTrigger.setAttribute('aria-controls','side-summary');
      summaryTrigger.setAttribute('aria-expanded','false');
      summary.setAttribute('aria-hidden','true');
      summary.setAttribute('aria-modal','true');
      summary.setAttribute('role','dialog');
      summary.setAttribute('aria-labelledby','summarySideTitle');
    }
    summary_init();

    function summary_trigger(event,btn) {
      if(!summary || !summaryTrigger || !summaryParent) return
      if(summaryParent.classList.contains('is-open')) {
        summary_close();
      } else {
        summary_open();
      }
    }

    function summary_close() {
      if(!summary || !summaryTrigger || !summaryParent || !summaryParent.classList.contains('is-open')) return
      summaryTrigger.setAttribute('aria-expanded','true');
      summary.setAttribute('aria-hidden','false');
      summaryParent.classList.remove('is-open');
    }

    function summary_open() {
      if(!summary || !summaryTrigger || !summaryParent || summaryParent.classList.contains('is-open')) return
      summaryTrigger.setAttribute('aria-expanded','false');
      summary.setAttribute('aria-hidden','true');
      summaryParent.classList.add('is-open');
    }

    setEvents('.side_inner a[href^="#"]', summary_click_link);

    function summary_click_link() {
      if(summary && summaryParent && summaryParent.classList.contains('is-open') && Math.abs(windowW - summary.clientWidth) < 10) {
        summary_close();
      }
    }


    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //Plates
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    var platesSections = [];
    var platesActiveSection = false;
    var platesEls = [];
    var activePlates = false;

    function plates_create_wrapper(section) {
      var plates = $$('.txt_plate[data-views]',section);
      if(!plates.length) return;
      var el = d.createElement('div');
      var elHTML = '';
      var platesinfos = [];
      // el.setAttribute('aria-hidden','true');
      el.classList.add('plates');
      plates.forEach(function(plate) {
        var views = plate.getAttribute('data-views');
        views = views.split(',');
        views.forEach(function(view, idx) {
          platesinfos.push({
            src: apiURL+bookID+view+'/full/1000,/0/native.jpg',
            lgd: plate.hasAttribute('data-lgd'+(idx + 1)) ? plate.getAttribute('data-lgd'+(idx + 1)) : (idx === 0 && plate.hasAttribute('data-lgd') ? plate.getAttribute('data-lgd') : '')
          });
        });
      });
      platesinfos = platesinfos.slice(0,4);
      el.classList.remove('plates-1');
      el.classList.remove('plates-2');
      el.classList.remove('plates-3');
      el.classList.remove('plates-4');
      el.classList.add('plates-'+platesinfos.length);
      elHTML += '<div class="plates_inner"><div class="plates_figs">';
        platesinfos.forEach(function(fig) {
          elHTML += '<figure class="plates_fig"><img src="'+fig.src+'" alt=""><button class="viewer_trigger" type="button"><span class="icon-zoom_in"></span><span class="srOnly">Voir dans la visionneuse</span></button><figcaption class="srOnly">'+fig.lgd+'</figcaption></figure>';
        });
      elHTML += '</div><div class="plates_lgds" aria-hidden="true">';
        platesinfos.forEach(function(fig) {
          elHTML += fig.lgd && fig.lgd !== '' ? '<div class="plates_lgd">'+fig.lgd+'</div>' : '';
        });
      elHTML += '</div></div>';
      el.innerHTML = elHTML;
      section.append(el);
      plates_imgs_size(el);
      platesEls.push(el);
    }

    function plates_init(cont) {
      // plates = $$('.txt_plate[data-views]',(cont || main));
      var sections = $$('.txt_plate[data-views]:not(.txt_plate[data-views] ~ .txt_plate[data-views])',(cont || main)).map(function(el) {
        return el.closest('.page_chapter');
      });
      if(sections.length) {
        sections.forEach(function(section, idx) {
          plates_create_wrapper(section);
        });
      }
      platesSections = $$('.plates',main).map(function(el) {
        return el.closest('.page_chapter');
      });
    }
    plates_init();

    function plates_update() {
      if(!platesSections.length) return;
      var newActiveSection = false;
      var newActivePlates = false;
      platesSections.forEach(function(section, idx) {
        if(section.getBoundingClientRect().top <= windowH * .8 && section.getBoundingClientRect().top + section.clientHeight >= headerH) {
          newActiveSection = section;
        }
      });
      if(platesActiveSection != newActiveSection) {
        if(newActiveSection) {
          newActivePlates = $('.plates',newActiveSection);
        }
        if(activePlates) {
          activePlates.classList.remove('is-visible');
        }
        if(newActivePlates) {
          plates_imgs_size(newActivePlates);
          newActivePlates.classList.add('is-visible');
        }
        platesActiveSection = newActiveSection;
        activePlates = newActivePlates;
      }
    }
    plates_update();

    function plates_imgs_size(el) {
      var figsCont = $('.plates_figs',el);
      var figs = $$('.plates_fig',figsCont);
      if(!figs.length) return;
      var borderFig = figs.length ? parseInt(w.getComputedStyle(figs[0],null).getPropertyValue("border-left-width")) : 0;
      var contW = figsCont.clientWidth - 1;
      var contH = figsCont.clientHeight - 1;
      var imgRatio = (1496 / 1000);
      var imgW = false;
      var imgH = false;
      var imgIdealW;
      var imgIdealH;
      if(figs.length > 1) {
        if((((contW / 2) - 2 * borderFig) * imgRatio + 2 * borderFig) * 2 > contH) {
          imgH = contH / 2;
          imgW = ((imgH - 2 * borderFig) / imgRatio) + 2 * borderFig;
        } else {
          imgW = contW / 2;
          imgH = (imgW - 2 * borderFig) * imgRatio + 2 * borderFig;
        }
      } else if(figs.length == 1) {
        if((contW - 2 * borderFig) * imgRatio + 2 * borderFig > contH) {
          imgH = contH;
          imgW = ((imgH - 2 * borderFig) / imgRatio) + 2 * borderFig;
        } else {
          imgW = contW;
          imgH = (imgW - 2 * borderFig) * imgRatio + 2 * borderFig;
        }
      }
      figs.forEach(function(fig) {
        fig.style.height = imgH ? Math.floor(imgH)+'px' : '';
        fig.style.width = imgW ? Math.floor(imgW)+'px' : '';
      });
    }

    function plates_imgs_size_update() {
      if(activePlates) {
        plates_imgs_size(activePlates);
      }
    }


    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //Viewer
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    var viewerParent = false;
    var viewer = false;
    function viewer_create_btns(cont) {
      var imgs = $$('.illusTab_i img, .figure_img',(cont || main));
      imgs.forEach(function(img) {
        img.insertAdjacentHTML('afterend','<button class="viewer_trigger" type="button"><span class="icon-zoom_in"></span><span class="srOnly">Voir dans la visionneuse</span></button>');
      });
      if(imgs.length) {
        viewerParent = d.createElement('div');
        viewerParent.setAttribute('aria-hidden','true');
        viewerParent.classList.add('viewer');
        viewerParent.innerHTML = '<button type="button" class="viewer_close"><span class="icon-clear"></span></button><div class="viewer_panel" data-panel-name="infos"><button type="button" class="viewer_panelClose"><span class="icon-clear"></span></button><div class="viewer_panelInner txt txt-xs"></div></div><div class="viewer_nav"><button type="button" class="viewer_btn viewer_btn-infos"><span class="icon-info"></span></button><button type="button" class="viewer_btn viewer_btn-zoom_in" id="viewer-zoom-in"><span class="icon-zoom_in"></span></button><button type="button" class="viewer_btn viewer_btn-zoom_out" id="viewer-zoom-out"><span class="icon-zoom_out"></span></button><button type="button" class="viewer_btn viewer_btn-rotate" id="viewer-rotate-left"><span class="icon-rotate_left"></span></button><a href="#" class="viewer_btn viewer_btn-dl" target="_blank"><span class="icon-vertical_align_bottom"></span></a></div><div class="viewer_navigator" id="viewer-navigator"></div>';
        body.append(viewerParent);
        viewer = OpenSeadragon({
          element: viewerParent,
          viewportMargins: {left: 40, top: 40, right: 40, bottom: 40},
          // visibilityRatio: 1.0,
          // constrainDuringPan: true,
          showHomeControl: false,
          showFullPageControl: false,
          zoomInButton: "viewer-zoom-in",
          zoomOutButton: "viewer-zoom-out",
          rotateLeftButton: "viewer-rotate-left",
          showRotationControl: true,
          gestureSettingsTouch: {
            pinchRotate: true
          },
          showNavigator: true,
          navigatorId: "viewer-navigator",
          // navigatorAutoFade: false,
          // navigatorPosition: "ABSOLUTE",
          // navigatorBottom: (40 / 16)+"em",
          // navigatorRight: (40 / 16)+"em",
          // // navigatorHeight: (217 / 16)+"em",
          // navigatorHeight: ((47 * 5 + 2 * 4) / 16)+"em",
          // navigatorWidth: ((47 * 5 + 2 * 4) / 16)+"em",
          navigatorOpacity: 1,
          navigatorBorderColor: '#000',
          navigatorDisplayRegionColor: '#979797',
          // navigatorRotate: false,
          // ...
        });
        viewer.addHandler("open", function (data) {
          viewerParent.classList.add('is-open');
        });
        viewer.addHandler("close", function (data) {
          viewerParent.classList.remove('is-open');
          viewerParent.classList.remove('has-panel-infos-open');
        });
      }
    }
    viewer_create_btns();

    setEvents('.viewer_trigger', viewver_trigger);
    function viewver_trigger(event,btn) {
      if(event) {
        event.preventDefault();
      }
      if(!viewerParent) return;
      var img = btn.previousElementSibling;
      if(!img || !img.matches('img[src]')) return;
      set_viewer(img);
    }

    function set_viewer(img) {
      if(!viewerParent || !viewer) return;
      var src = img.getAttribute('src');
      var iiifView = get_iiif_view_from_src(src);
      var source = iiifView ? apiURL+bookID+iiifView+'/info.json' : {
        type: 'image',
        url:  src,
        buildPyramid: false
      };
      var dlURL = iiifView ? apiURL+bookID+iiifView+'/full/full/0/native.jpg' : src;
      var parent = img.closest('figure');
      var lgd = parent ? $('figcaption',parent) : false;
      $('.viewer_btn-dl',viewerParent).setAttribute('href',dlURL);
      $('.viewer_panel[data-panel-name="infos"] .viewer_panelInner',viewerParent).innerHTML = lgd ? '<p>'+lgd.innerHTML+'</p>' : '';
      viewer.open(source);
    }

    function get_iiif_view_from_src(src) {
      var view = false;
      if(src.indexOf(apiURL+bookID) !== -1) {
        view = src.replace(apiURL+bookID,'');
        view = view.split('/');
        view = view[0];
      }
      return view;
    }

    function close_viewer(event) {
      if(!viewerParent || !viewer) return;
      if(event) {
        event.preventDefault();
      }
      viewer.close();
    }

    setEvents('.viewer_close', close_viewer);

    setEvents('.viewer_btn-infos', viewer_show_infos);
    function viewer_show_infos(event) {
      if(event) {
        event.preventDefault();
      }
      viewerParent.classList.toggle('has-panel-infos-open');
    }

    setEvents('.viewer_panel[data-panel-name="infos"] .viewer_panelClose', viewer_close_infos);
    function viewer_close_infos(event) {
      if(event) {
        event.preventDefault();
      }
      viewerParent.classList.remove('has-panel-infos-open');
    }


    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //Search
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    var searchJson = false;
    var searchIdx = false;
    fetch('./index.json').then((response) => response.json()).then((datas) => {
      if(datas && datas.length) {
        searchJson = {};
        searchIdx = lunr(function () {
          this.use(lunr.fr);
          this.ref('link');
          this.field('title');
          this.field('body');
          datas.forEach(function(doc) {
            this.add(doc);
            searchJson[doc.link] = doc;
          }, this);
        });
      }
    });

    var searchform = $('.search_form');
    var searchInput = $('#search-query');
    var searchContainer = $('.search_results');
    searchform.addEventListener('submit', function(event) {
      event.preventDefault();
    });
    searchInput.addEventListener('input', function(e) {
      searchContainer.innerHTML = '';
      if(searchJson && searchIdx) {
        var results = [];
        var htmlResults = '';
        if(this.value != '') {
          results = searchIdx.search(unicodeNormalizer(this.value));
          if(results.length) {
            htmlResults += '<p class="search_resultsNb f1-14 op-50 txt-r">'+results.length+' '+(results.length > 1 ? 'résultats' : 'résultat')+'</p>';
            results.forEach(function(result) {
              if(searchJson[result.ref]) {
                htmlResults += '<article class="search_i resultItem">';
                  htmlResults += searchJson[result.ref].type ? '<p class="resultItem_type f1-14 op-50">'+searchJson[result.ref].type+'</p>' : '';
                  htmlResults += '<p class="resultItem_t f1-18"><a href="'+searchJson[result.ref].link+'">'+searchJson[result.ref].title+'</a></p>';
                htmlResults += '</article>';
              }
            }, this);
          } else {
            htmlResults += '<p class="search_resultsNb f1-14 op-50 txt-r">0 résultat</p>';
          }
        }
        searchContainer.innerHTML = htmlResults;
      }
    });

    // function init_search(datas) {
    //   console.log(datas);
    // }


    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //Keys event
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    d.addEventListener('keydown', function(e) {
      if(e.keyCode == 27) {
        if(viewer && viewer.isOpen()) {
          close_viewer();
        } else if(html.classList.contains('is-menu-open')) {
          close_menu();
        } else if(html.classList.contains('is-panel-open')) {
          close_panel();
        } else {
          summary_close();
        }
      }
    });


    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //On resize
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    function onResize() {
      update_dimensions();
    }
    w.addEventListener('resize', onResize, false);

    // Avec debounce
    var onResizeDebounce = debounce(function() {
      setCssVarVH();
      notes_update_position();
      plates_imgs_size_update();
    }, 300);
    w.addEventListener('resize', onResizeDebounce, false);
    onResizeDebounce();


    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //Media queries
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    // var mediaQuery = w.matchMedia('(min-width: 768px)');
    // function mediaQueryCheck(e) {
    //   if (e.matches) {
    //     console.log('Media Query Matched!');
    //   }
    // }
    // mediaQuery.addListener(mediaQueryCheck);
    // mediaQueryCheck(mediaQuery);


    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //On scroll
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    var ticking = false;
    function onScroll() {
      update_scroll();
      requestTick();
    }
    w.addEventListener('scroll', onScroll, false);

    function requestTick() {
      if (!ticking) {
        ticking = true;
        w.requestAnimationFrame(trigger_scroll);
      }
    }
  
    function trigger_scroll() {
      ticking = false;
      auto_hide_header();
      page_nav_update();
      plates_update();
    }

})(window);
