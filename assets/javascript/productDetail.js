/*-------------------
    accordion details
    --------------------- */
$(document).ready(function () {
    $('.details-desc-wrap .details-desc-list').click(function () {
        $(this).next('.details-desc-content').slideToggle();
        $(this).parent().toggleClass('action');
    })
});

