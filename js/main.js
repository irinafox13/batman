$(document).ready(function () {
   let tabsItem = $('.tabs-item');

   tabsItem.on('click', function (event) {
      event.preventDefault();
      // this-конструкция, по которой мы кликнули, attr - атрибут, который нас интересует
      let activeContent = $(this).attr('href');
      // находим элемент, у которого есть класс visible? отключим его и поместим туда, где находится activeContent
      $('.visible').toggleClass('visible');
      $(activeContent).toggleClass('visible');

      // блоку, на который мы кликнули, нужно присвоить tabs-item-active
      $('.tabs-item-active').toggleClass('tabs-item-active');
      $(this).toggleClass('tabs-item-active');
   });

});