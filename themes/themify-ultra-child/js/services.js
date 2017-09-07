$=jQuery;

$(document).ready(function() {

    var getUrlParameter = function(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;


        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');


            if (sParameterName[1] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };


    var carePlanning = getUrlParameter('care-planning');
    var inHomeServices = getUrlParameter('in-home-services');
    var concierge = getUrlParameter('concierge');
    var familyAssistance = getUrlParameter('family-assistance');

    if (carePlanning) {
        $('.concierge-row').hide();
        $('.family-assistance-row').hide();
        $('.in-home-services-row').hide();

        $('.care-planning-row').fadeIn();

    } else if (inHomeServices) {
        $('.care-planning-row').hide();
        $('.concierge-row').hide();
        $('.family-assistance-row').hide();

        $('.in-home-services-row').fadeIn();

    } else if (concierge){
        $('.care-planning-row').hide();
        $('.family-assistance-row').hide();
        $('.in-home-services-row').hide();

        $('.concierge-row').fadeIn();

    } else if(familyAssistance){

        $('.care-planning-row').hide();
        $('.concierge-row').hide();
        $('.in-home-services-row').hide();

        $('.family-assistance-row').fadeIn();

    } else {
        $('.care-planning-row').fadeIn();
    }

    name = $('tb_toolbar');

    $('.in-home-services').on('click', function () {
        $('.care-planning-row').hide();
        $('.concierge-row').hide();
        $('.family-assistance-row').hide();

        $('.in-home-services-row').fadeIn('slow');
    });

    $(".care-planning").on('click', function () {
        $('.concierge-row').hide();
        $('.family-assistance-row').hide();
        $('.in-home-services-row').hide();

        $('.care-planning-row').fadeIn('slow');
    });

    $('.concierge').on('click', function () {
        $('.care-planning-row').hide();
        $('.family-assistance-row').hide();
        $('.in-home-services-row').hide();

        $('.concierge-row').fadeIn('slow');
    });

    $('.family-assistance').on('click', function () {
        $('.care-planning-row').hide();
        $('.concierge-row').hide();
        $('.in-home-services-row').hide();

        $('.family-assistance-row').fadeIn('slow');
    });

});