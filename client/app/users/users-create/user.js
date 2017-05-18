'use strict';
function op(id) {
  var label = $("label[for='" + $(id).attr('id') + "']");
  if ($(id).hasClass('ng-invalid')) {
    label.addClass("md-required");
  } else {
    label.removeClass("md-required");
  }
}
