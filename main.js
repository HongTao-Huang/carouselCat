var $allButtons = $('#buttons > li');

for (let i = 0; i < $allButtons.length; i++) {
    $allButtons.eq(i).on('click', function(e) {
        var index = $(e.currentTarget).index();
        var pp = -920 * index;
        $('#images').css({
            transform: 'translate(' + pp + 'px)'
        })
        n = index;
        addActiveClass($allButtons.eq(n));
    })
}
var n = 0;
addActiveClass($allButtons.eq(n).trigger('click'))
var timeId = setTimer();
document.addEventListener('visibilitychange',function () {
    if(document.hidden) {
        window.clearInterval(timeId);
    } else {
         timeId = setTimer();
    }
})



function setTimer(){
    return setInterval(()=>{
        n += 1;
        n %= $allButtons.length;
        addActiveClass($allButtons.eq(n).trigger('click'))
},1500)
}

function addActiveClass($buttons){
    $buttons.addClass('active')
        .siblings('.active').removeClass('active');
}

$('.window').on('mouseenter',function(){
    window.clearInterval(timeId);
})

$('.window').on('mouseleave',function(){
    timeId = setTimer();
})