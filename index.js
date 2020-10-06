$(document).ready(function () {
  firstForm = $("#fs1");
  lastForm = $("#fs2");
  progressBar = $("#progressbar");
  progress1 = $("#progressbar li:first-child");
  progress2 = $("#progressbar li:last-child");

  thankYou = $("#thankyou");

  progress1.addClass("active");

  $("#next").click(function (e) {
    e.preventDefault();

    firstForm.animate(
      { opacity: 0 },
      {
        step: function (time) {
          scale = 1 - (1 - time) * 0.1;
          left = time * 50 + "%";
          opacity = 1 - time * 5;

          firstForm.css({
            transform: "scale(" + scale + ")",
            position: "absolute",
            zIndex: 0,
            marginTop: "120px",
          });
          lastForm.css({
            background: "white",
            zIndex: 1,
            left: left,
            opacity: opacity,
          });
        },
        duration: 800,
        complete: function () {
          firstForm.hide();
        },
        easing: "easeInOutBack",
      }
    );
    progress2.addClass("active");
    lastForm.show();
  });

  $("#done").click(function (e) {
    e.preventDefault();

    $(lastForm).animate(
      {
        opacity: 0,
      },
      200
    );
    $(progressBar).animate(
      {
        opacity: 0,
      },
      200
    );
    lastForm.hide();
    $("#done").hide();
    thankYou.show();
    thankYou.animate(
      {
        display: "block",
        bottom: "+=250",
        opacity: 1,
      },
      1500
    );
  });
});
