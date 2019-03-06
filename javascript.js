
function flash(el, c1, c2) {
    var text = document.getElementById('foo');
    text.style.color = (text.style.color == c2) ? c1 : c2;
}
var clr1 = setInterval(function() { flash('foo1', '#007bff', 'black') }, 1000);






