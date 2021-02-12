function showFooter() {
  $("#footer-emails").slideDown({
    start: function () {
      $(this).css({
        display: "inline-flex"
      });
    }
  });
  $("#footer-links").slideDown({
    start: function () {
      $(this).css({
        display: "inline-flex"
      });
    }
  });
  $("#social").slideDown({
    start: function () {
      $(this).css({
        display: "inline-flex"
      });
    }
  });
  document.getElementById("footer-expand-up").style.display = "none";
  document.getElementById("footer-expand-down").style.display = "flex";
  $("#mobile-footer-contact-us").hide();
}

function hideFooter() {
  $("#footer-emails").slideUp({
    end: function () {
      $(this).css({
        display: "none"
      });
    }
  });
  $("#footer-links").slideUp({
    end: function () {
      $(this).css({
        display: "none"
      });
    }
  });
  $("#social").slideUp({
    end: function () {
      $(this).css({
        display: "none"
      });
    }
  });
  document.getElementById("footer-expand-up").style.display = "flex";
  document.getElementById("footer-expand-down").style.display = "none";
  $("#mobile-footer-contact-us").show();
}
