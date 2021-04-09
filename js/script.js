var urls = $('.content a');
var urlsbg = urls.css('background-color');
var colors = ['#428577', '#ec8f3f', '#d5d4d5', '#2d6fdc', '#5e7270'];

urls.hover(function () { //mouseover
    var newcolor = colors[Math.floor(Math.random() * colors.length)];
    $(this).css('background-color', newcolor);
}, function () { //mouseout
    $(this).css('background-color', urlsbg);
});