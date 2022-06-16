jQuery(document).ready ( function($) {
  $("#accordion").accordion({
    active: false,
    collapsible: true,
    animate: 500
  });
} );

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.catalog__artist-name').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      console.log(path)

      document.querySelectorAll('.catalog__left-content').forEach(function(tabContent) {
        tabContent.classList.remove('catalog__left-content_active')
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__left-content_active')
    })
  })
})

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#burgermenu').classList.toggle('is-active')
  })

  document.querySelector('.header__burgermenu-btn').addEventListener('click', function() {
    document.querySelector('#burgermenu').classList.toggle('is-active')
  })

  document.querySelector('.header__top-search').addEventListener('click', function() {
    document.querySelector('#searchmenu-tabl').classList.toggle('search-active')
  })

  document.querySelector('.header__closed-search').addEventListener('click', function() {
    document.querySelector('#searchmenu-tabl').classList.toggle('search-active')
  })
})

// подключение селекта в HEADER


const elements = document.querySelectorAll('.header__select');
elements.forEach(el => {
  const choices = new Choices(el, {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: ''
  })
})

// подключение селекта в GALERY

const element = document.querySelector('.galery__select');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
  classNames: {
    // containerOuter: 'galery__choices',
    containerInner: 'galery__inner',
    // input: 'galery__input',
    list: 'galery__list',
    // listItems: 'galery__list--multiple',
    // listSingle: 'galery__list--single',
    // listDropdown: 'galery__list--dropdown',
    item: 'galery__item',
    itemSelectable: 'galery__item--selectable',
    // itemDisabled: 'galery__item--disabled',
    // itemChoice: 'galery__item--choice',
    placeholder: 'galery__placeholder',
    // group: 'galery__group',
    // groupHeading: 'galery__heading',
    // button: 'galery__button',
    // activeState: 'galery__is-active',
    // focusState: 'galery__is-focused',
    // openState: 'galery__is-open',
    // disabledState: 'galery__is-disabled',
    // highlightedState: 'galery__is-highlighted',
    // selectedState: 'galery__is-selected',
    // flippedState: 'galery__is-flipped',
    // loadingState: 'galery__is-loading',
    // noResults: 'galery__has-no-results',
    // noChoices: 'galery__has-no-choices'
  }
})

// Подключение слайдера GALERY

const swiper1 = new Swiper('.galery__swiper', {
// Optional parameters
slidesPerView: 1,
spaceBetween: 20,
slidesPerGroup: 1,

breakpoints: {

  768: {
    slidesPerView: 2,
    spaceBetween: 38,
    slidesPerGroup: 2,
  },

  1024: {
    slidesPerView: 2,
    spaceBetween: 35,
    slidesPerGroup: 2,
  },

  1600: {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3
  },
},

// If we need pagination
pagination: {
  el: '.galery-swiper-pagination',
  type:'fraction'
},

// Navigation arrows
navigation: {
  nextEl: '.galery-swiper-button-next',
  prevEl: '.galery-swiper-button-prev',
},

// And if we need scrollbar
// scrollbar: {
//   el: '.swiper-scrollbar',
// },
a11y: {
  enabled: true,
  prevSlideMessage: 'предыдущий слайд',
  nextSlideMessage: 'следующий слайд',
}

});

// подключение слайдера EVENTS


const swiper2 = new Swiper('.events__swiper', {
// Optional parameters
// loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,

  breakpoints: {

    768: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },

    1000: {
      slidesPerView: 3,
      spaceBetween: 27,
      slidesPerGroup: 3,
      pagination: {
        type: 'bullets',
        clickable: true,
      },
    },

    1800: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },

  },

// If we need pagination
  pagination: {
    el: '.events-swiper-pagination',
    clickable: true,
  },

// Navigation arrows
  navigation: {
    nextEl: '.events-swiper-button-next',
    prevEl: '.events-swiper-button-prev',
  },

// And if we need scrollbar
// scrollbar: {
//   el: '.swiper-scrollbar',
// },
a11y: {
  enabled: true,
  prevSlideMessage: 'предыдущий слайд',
  nextSlideMessage: 'следующий слайд',
}

});


// подключение слайдера PROJECTS


const swiper3 = new Swiper('.projects__swiper', {
// Optional parameters
// loop: true,
slidesPerView: 1,
slidesPerGroup: 1,

breakpoints: {

  768: {
    slidesPerView: 2,
    spaceBetween: 34,
    slidesPerGroup: 2,
  },

  1024: {
    slidesPerView: 2,
    spaceBetween: 50,
    slidesPerGroup: 2,
  },

  1800: {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,
  }

},

// If we need pagination
pagination: {
  el: '.project-swiper-pagination',
  type:'fraction'
},

// Navigation arrows
  navigation: {
    nextEl: '.projects-swiper-button-next',
    prevEl: '.projects-swiper-button-prev',
},

// And if we need scrollbar
// scrollbar: {
//   el: '.swiper-scrollbar',
// },
a11y: {
  enabled: true,
  prevSlideMessage: 'предыдущий слайд',
  nextSlideMessage: 'следующий слайд',
}

});


// ВАЛИДАЦИЯ

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)999-99-99");

im.mask(selector);

new JustValidate('.contacts__validate', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 25,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue ()
        console.log(phone)
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: 'Недопустимый формат',
    tel:'Недопустимый формат',
  }
});

// подключение яндекс-карты
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.758468, 37.601088],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 14
    });

    // Создание геообъекта с типом точка (метка).
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: [55.758468, 37.601088] // координаты точки
        }
    });

    var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/contacts-point-img.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-3, -42]
    });

    // Размещение геообъекта на карте.
    // myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);
}
