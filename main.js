'use strict';

$(document).ready(init);

function init() {
  $('.disk').on('click', selectDisk);
  $('.tower').on('click', moveDisk);
}

let $selectedDisk = '';

function selectDisk() {
  $selectedDisk = '';
  $selectedDisk = $(this).parent().children(':first');
  $($selectedDisk).toggleClass('selected');
}

function moveDisk() {
  let $selectedTower = $(this);
  let $containerBottom = $selectedTower.find('.containerBottom');
  let $topDisk = $containerBottom.find('.disk:first-child');
  console.log($topDisk);
  if ($selectedDisk.width() < $topDisk.width() || !$topDisk.width()) {
    // $selectedDisk = $($selectedDisk).detach();
    $($containerBottom).prepend($selectedDisk);
    $selectedDisk.removeClass('selected');
    $selectedDisk = '';
    
  }

}