
$(document).ready(function() {
    $('.question').click(function(e) {
        changeOpen(e.target.id)
    });
      $('.question').children('h3').click(function(e){
        changeOpen(e.target.parentElement.id)
    });
    closeAnswers();
});



// to allow multiple questions to be opened comment out the closeAnswers()
// call in the if statement below.
// we can also poentially animate the opening and closings to make them smoother
function changeOpen(e) {
    var a = e.replace('q', 'a')
    var aobj = $('#' + a)

    if (aobj.is(":visible") === false) {
        // closeAnswers()
        aobj.show()
    } else {
        aobj.hide()
    }
}


function closeAnswers() {
    var a = $('.answer');
    for (var i = 0; i < a.length; i++) {
        $('#' + a[i].id).hide()
    }

}
