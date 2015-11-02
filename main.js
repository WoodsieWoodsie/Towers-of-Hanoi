'use strict';

$(document).ready(init);

function init() {
  $('.disk').on('click', selectDisk);
  $('.tower').on('click', moveDisk);
}

let $selectedDisk = '';


function win() {
  $('.win').show();
}

function selectDisk() {
  let $anySelected = $('.disk').parent().parent().find('.selected')
  if ($anySelected !== $selectedDisk) {
    $anySelected.removeClass('selected');
  }
  $selectedDisk = $(this).parent().children(':first');
  $($selectedDisk).toggleClass('selected');
}

function moveDisk() {
  let $selectedTower = $(this);
  let $containerBottom = $selectedTower.find('.containerBottom');
  let $topDisk = $containerBottom.find('.disk:first-child');
  if ($selectedDisk.width() < $topDisk.width() || !$topDisk.width()) {
    $($containerBottom).prepend($selectedDisk);
    $selectedDisk.removeClass('selected');
    $selectedDisk = '';    
  }
  let $towerThreeContents = $('.tower3').find('.containerBottom').children();
  if ($towerThreeContents.length === 3) {
    win();
  }

}