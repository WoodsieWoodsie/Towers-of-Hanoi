'use strict';

$(document).ready(init);

function init() {
  $('.disk').on('click', selectDisk);
}

function selectDisk() {
  let $selected = $(this).parent().children(':first');
  $($selected).toggleClass('selected');
}