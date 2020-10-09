$(document).ready(function () {
  progressShipping = $("ul li:first-of-type");
  progresspayment = $("ul li:last-of-type");
  shippingForm = $("#shipping");
  confirmshippingBtn = $("#next");
  paymentForm = $("#payment");
  reviseShippingBtn = $("#revise");
  confirmPaymentBtn = $("#done");
  thankYou = $("#thankyou");
  redoBtn = $("#thankyou button");

  // To start, the 'shipping' part of the progress bar is active (green)
  progressShipping.addClass("active");

  // When the confirm shipping button is pressed, the shipping form shrinks, fades, and has no display. The second form comes in from the right with animation. the progress bar is altered
  confirmshippingBtn.click(function (e) {
    e.preventDefault();
    shippingForm.hide();
    paymentForm.show();
    paymentForm.addClass("slide-in-right");
    progresspayment.addClass("active");
    setTimeout(() => {
      paymentForm.removeClass("slide-in-right");
      shippingForm.removeClass("scale-out");
    }, 500);
  });

  // when we click the revise shipping button, the payment form shrinks, fades, and has no display. The first form comes in from the left. the progress bar is altered
  reviseShippingBtn.click(function (e) {
    e.preventDefault();
    paymentForm.hide();
    shippingForm.show();
    shippingForm.addClass("slide-in-left");
    progresspayment.removeClass("active");
    setTimeout(() => {
      paymentForm.removeClass("scale-out");
      shippingForm.removeClass("slide-in-left");
    }, 500);
  });

  // when we click the confirm payment button,

  confirmPaymentBtn.click(function (e) {
    e.preventDefault();
    paymentForm.hide();
    thankYou.show();
    thankYou.addClass("slide-up");
    setTimeout(() => {
      redoBtn.show();
      redoBtn.addClass("appear");
    }, 500);
  });
});
