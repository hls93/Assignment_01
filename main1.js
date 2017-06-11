console.log("test");
$(".middleButton").click(function() {
  var buyButton = $(".middleButton");
  if (buyButton.html() === "Buy Now!"){
    buyButton.html("Added to cart");
  }


  var cartCount = parseInt($('.cartCount').text());
    console.log(cartCount);
    cartCount += 1;
    console.log(cartCount);
    $('.cartCount').text(cartCount);

    window.setTimeout(function(){
      $('.middleButton').text('Buy Now!');
      $('.middleButton').removeClass('active');
    }, 500);
});
