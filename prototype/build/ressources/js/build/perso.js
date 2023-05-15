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
