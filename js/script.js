function ibg(){
    let ibg=document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
      ibg[i].style.backgroundImage = 
      'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
   }
  }    
ibg();

let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null){
  let delay = 500;//задержка
  let body=document.querySelector("body");
  let menuBody = document.querySelector(".menu__body");
  iconMenu.addEventListener("click", (e) => {
          iconMenu.classList.toggle("_active");
          menuBody.classList.toggle("_active");
  });
};
function menu_close(){
  let iconMenu = document.querySelector(".icon-menu");
  let menuBody = document.querySelector(".menu__body");
  iconMenu.classList.remove("_active");
  menuBody.classList.remove("_active");
}
function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
  callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  
  testWebP(function (support) {
  
  if (support == true) {
  document.querySelector('body').classList.add('webp');
  }else{
  document.querySelector('body').classList.add('no-webp');
  }
});

function ibg(){
  let ibg=document.querySelectorAll(".ibg");
 for (var i = 0; i < ibg.length; i++) {
  if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 
    'url('+ibg[i].querySelector('img').getAttribute('src')+')';
  }
 }
}    
ibg();





var tabNavs = document.querySelectorAll(".nav-tab");
var tabPanes = document.querySelectorAll(".tab-pane");

for (var i = 0; i < tabNavs.length; i++) {

tabNavs[i].addEventListener("click", function(e){
  e.preventDefault();
  var activeTabAttr = e.target.getAttribute("data-tab");

  for (var j = 0; j < tabNavs.length; j++) {
    var contentAttr = tabPanes[j].getAttribute("data-tab-content");

    if (activeTabAttr === contentAttr) {
      tabNavs[j].classList.add("active");
      tabPanes[j].classList.add("active"); 
    } else {
      tabNavs[j].classList.remove("active");
      tabPanes[j].classList.remove("active");
    }
  };
});
}


const tabsBtn   = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener("click", function() {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if( ! currentBtn.classList.contains('active') ) {
          tabsBtn.forEach(function(item) {
              item.classList.remove('active');
          });
  
          tabsItems.forEach(function(item) {
              item.classList.remove('active');
          });
  
          currentBtn.classList.add('active');
          currentTab.classList.add('active');
      }
  });
}

document.querySelector('.tabs__nav-btn').click();




let tab = function () {
let tabNav = document.querySelectorAll('.tabs-nav__item'),
    tabContent = document.querySelectorAll('.tab'),
    tabName;

tabNav.forEach(item => {
    item.addEventListener('click', selectTabNav)
});

function selectTabNav() {
    tabNav.forEach(item => {
        item.classList.remove('is-active');
    });
    this.classList.add('is-active');
    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);
}

function selectTabContent(tabName) {
    tabContent.forEach(item => {
        item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
    })
}

};


tab();





var accordion = (function (element) {

var _getItem = function (elements, className) { // функция для получения элемента с указанным классом
  var element = undefined;
  elements.forEach(function (item) {
    if (item.classList.contains(className)) {
      element = item;
    }
  });
  return element;
};

return function () {
  var _mainElement = {}, // .accordion
    _items = {}, // .accordion-item
    _contents = {}; // .accordion-item-content 


  var _actionClick = function (e) {
    if (!e.target.classList.contains('accordion-item-header')) { // прекращаем выполнение функции если кликнули не по заголовку
      return;
    }
    e.preventDefault();   // Отменям стандартное действие
    // получаем необходимые данные
    var header = e.target,
      item = header.parentElement,
      itemActive = _getItem(_items, 'show');

    if (itemActive === undefined) { // добавляем класс show к элементу (в зависимости от выбранного заголовка)
      item.classList.add('show');
    } else {
      // удаляем класс show у ткущего элемента
      itemActive.classList.remove('show');
      // если следующая вкладка не равна активной
      if (itemActive !== item) {
        // добавляем класс show к элементу (в зависимости от выбранного заголовка)
        item.classList.add('show');
      }
    }
  },
    _setupListeners = function () {
      // добавим к элементу аккордиона обработчик события click
      _mainElement.addEventListener('click', _actionClick);
    };

  return {
    init: function (element) {
      _mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
      _items = _mainElement.querySelectorAll('.accordion-item');
      _setupListeners();
    }
  }

}
})();

var accordion1 = accordion();
accordion1.init('#accordion');





















new Swiper('.reviews__swiper', {
    autoplay:{
        delay:5000,
        disableOnInteraction: false,
    },
    speed:600,
    spaceBetween: 111,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerGroup: 1,
            slidesPerView: 1,
            centerSlides: true,
        },
        960: {
            spaceBetween: 40,
            slidesPerGroup: 3,
            slidesPerView: 3,
        },
        1200: {
            spaceBetween: 100,
            slidesPerGroup: 3,
            slidesPerView: 3,
        },

    }
});


new Swiper('.tabs_clan__swiper', {

    speed:600,
    slidesPerView: 5,
    slidesPerGroup: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    spaceBetween: 3,
    breakpoints: {
        480: {
            spaceBetween: 28,
        },
    }
});

new Swiper('.tabs_class__swiper', {

    speed:600,
    slidesPerView: 5,
    slidesPerGroup: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    spaceBetween: 3,
    breakpoints: {
        480: {
            spaceBetween: 28,
        },
    }
});


new Swiper('.soon__swiper', {

    speed:600,
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});





// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
			let iconMenu = document.querySelector(".icon-menu");
			let menuBody = document.querySelector(".menu__body");
			iconMenu.classList.remove("_active");
			menuBody.classList.remove("_active");
			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}
			window.scrollTo({
				
				top: gotoBlockValue,
				behavior: "smooth"
			});
			
			e.preventDefault();
			
		}
	}
}


const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_show');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_show');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}


}
