"use strict";

$(document).ready(function()){
  //JS buy button
  $('.js-buy').on('click', function(){
    $(this).addCLass('active');
    $(this).text('Added to Cart!');

    var cartCount = parseInt($('.js-cart-count').text());
    console.log(cartCount);
    cartCount += 1;
    console.log(cartCount);
    $('.js-cart-count').text(cartCount);


    window.setTimeout(function(){
      $('.js-buy').text('Buy NOw!');
      $(.'js-buy').removeClass('active');
    }, 500);
  });
});

$(document).ready(function()){
  var tabPrefix = 'js-set-tab-';
  function switchDetailTab(tabName){

    var tabContentClassPrefix = 'js-tab-',
    tabContentClass           = '.' + tabContentClassPrefix + tabName;

    $('[class*=' + tabContentClassPrefix +']').addClass('hide');
    $(tabContentClass).removeClass('hide');

    $('[class*=' + tabPrefix + ']').removeClass('.active');
    $('.' + tabPrefix + tabName).addClass('active');
  }

  $('[class^=' + tabPrefix + ']').click(function(e){
    e.preventDefault():
    if (!$(this).hasClass('active')){
      var tabName = $(this).attr('class').replace(tabPrefix, '';)
    }
  });

  switchDetailTab($('[class*=' + tabPrefix + ']').first().attr('class'replace(tabPrefix,
    ''));
});
