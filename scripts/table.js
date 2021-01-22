// Responsive table for the sponsorship prospectus
// Copied from
// - https://codepen.io/team/css-tricks/pen/PNpMaj?editors=0100
// - https://css-tricks.com/accessible-simple-responsive-tables/

(function ($) {
  "use strict";
  $.fn.responsiveTable = function () {
    var toggleColumns = function ($table) {
      var selectedCol;
      var colNames = [];

      // Find current tab
      $table.find(".Tab").each(function () {
        if ($(this).attr("aria-selected") === "true") {
          selectedCol = $(this).text();
        }
        colNames.push($(this).text());
      });

      // Set the specified tab as active on the larger table and all table cells
      colNames.forEach((name) => {
        if (name === selectedCol) {
          $table.addClass(`${name}-active`);
          $table.find(`.Rtable-cell-${name}`).removeClass("hiddenSmall");
        } else {
          $table.removeClass(`${name}-active`);
          $table.find(`.Rtable-cell-${name}`).addClass("hiddenSmall");
        }
      });
    };

    $(this).each(function () {
      toggleColumns($(this));
    });

    $(this)
      .find(".Tab")
      .click(function () {
        $(this)
          .blur()
          .attr("aria-selected", "true")
          .siblings()
          .attr("aria-selected", "false");
        toggleColumns($(this).parents(".Rtable"));
      });
  };
})(jQuery);

$(".js-RtableTabs").responsiveTable();
