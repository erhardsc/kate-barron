$=jQuery;

var search = 'Barron';
jQuery(function () {

    // Wrap services tabs in a div since I can't do that in the themify settings


    $("#site-logo a span:contains('"+search+"')").each(function () {
        var regex = new RegExp(search,'gi');
        $(this).html($(this).text().replace(regex, "<span class='purple'>"+search+"</span>"));
    });

    // $(".barron-contact .sexy-field label").before($(".barron-contact .sexy-field input[type=text]"));

    $('.barron-contact .sexy-field label').each(function( i ) {
        $(this).attr('id', 'sexy-label-' + i);
    });


    $('.barron-contact .sexy-field input[type=text]').each(function( i ) {
            $(this).attr('id', 'sexy-input-' + i);

            $(this).click(function () {
                $("#sexy-label-" + i).addClass("animate");
            });

        // jQuery('sexy-input-' + i).click(function(){
        //     $(this).addClass('id', 'sexy-input-' + i);
        // });
        //
        // $("*").click(function(){
        //     if($(this).attr("id") !== "sexy-input" + 1){
        //         //
        //         console.log("this");
        //     }
        // });


        // $('html').click(function(e) {
        //     if ( !$(e.target).hasClass('wpforms-field-medium') ) {
        //         $("#sexy-label-" + i).toggleClass("return-to-origin");
        //
        //
        //     }
        // });
    });

    $("#sexy-input-5").click(function () {
        $("#sexy-label-5").addClass("animate-2");
    });

});