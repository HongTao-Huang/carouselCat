var $allButtons = $('#buttons > span');

for (let i = 0; i < $allButtons.length; i++) {
    $allButtons.eq(i).on('click', function(e) {
        var index = $(e.currentTarget).index();
        var pp = -600 * index;
        $('#images').css({
            transform: 'translate(' + pp + 'px)'
        })
        n = index;
        addRedClass($allButtons.eq(n));
    })
}
var n = 0;
addRedClass($allButtons.eq(n).trigger('click'))
var timeId = setTimer();
function setTimer(){
    return setInterval(()=>{
        n += 1;
        n %= $allButtons.length;
        addRedClass($allButtons.eq(n).trigger('click'))
},1500)
}

function addRedClass($buttons){
    $buttons.addClass('red')
        .siblings('.red').removeClass('red');
}

$('.window').on('mouseenter',function(){
    window.clearInterval(timeId);
})

$('.window').on('mouseleave',function(){
    timeId = setTimer();
})