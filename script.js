$(document).ready(function(){
  $("#about").click(function(){
    $(".intro").toggleClass("about");
  });
});


function updateSize(newVal) {
    var newFontSize = newVal + 'px';
    $('.sample').css('font-size', newFontSize);
}

function updateLineHeight(newVal) {
    var newFontSize = newVal + 'px';
    $('.sample').css('line-height', newFontSize);
}

function updateFont(newVal) {
    $('.sample').css('font-family', newVal);
}


function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode")
  
}

