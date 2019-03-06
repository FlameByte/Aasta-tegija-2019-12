
function flash(el, c1, c2) {
    var text = document.getElementById('foo');
    text.style.color = (text.style.color == c2) ? c1 : c2;
}
var clr1 = setInterval(function() { flash('foo1', '#007bff', 'black') }, 1000);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nupp").style.display = "block";
  } else {
    document.getElementById("nupp").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}




