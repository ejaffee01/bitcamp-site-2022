// Responsive table for the sponsorship prospectus
// Copied from 
// - https://codepen.io/team/css-tricks/pen/PNpMaj?editors=0100
// - https://css-tricks.com/accessible-simple-responsive-tables/

(function ($) {
  "use strict";
  $.fn.responsiveTable = function() { 

    var toggleColumns = function($table) {
      var selectedControls = [];
      $table.find(".Tab").each( function() {
        selectedControls.push( $(this).attr("aria-selected") );
      });
      var cellCount = 0, colCount = 0;
      var setNum = $table.find(".Rtable-cell").length / $table.find(".Tab").length;
      $table.find(".Rtable-cell").each( function() {
        $(this).addClass("hiddenSmall");
        if( selectedControls[colCount] === "true" ) $(this).removeClass("hiddenSmall");
        cellCount++;
        if( cellCount % setNum === 0 ) colCount++; 
      });
    };
    $(this).each(function(){ toggleColumns($(this)); });

    $(this).find(".Tab").click( function() {
      $(this).attr("aria-selected","true").siblings().attr("aria-selected","false");
      toggleColumns( $(this).parents(".Rtable") );
    });
  };
}(jQuery));


$(".js-RtableTabs").responsiveTable();
