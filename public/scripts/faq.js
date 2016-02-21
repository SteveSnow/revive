
$(document).ready(function() {
    $('.question').click(function(e) {
        changeOpen(e)
    });
    closeAnswers();
});



// to allow multiple questions to be opened comment out the closeAnswers()
// call in the if statement below.
// we can also poentially animate the opening and closings to make them smoother
function changeOpen(e) {
    var q = e.target.id
    var a = q.replace('q', 'a')
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
