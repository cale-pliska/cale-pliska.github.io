let readMore = document.createTextNode(". . .");
let $teaser = $(".content-teaser")

$teaser.append(readMore);

$teaser.click(function () {

    $teaser = $(this);
    //getting the next element
    $content = $teaser.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.

    $content.slideToggle(500);

});