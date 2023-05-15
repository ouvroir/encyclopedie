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
