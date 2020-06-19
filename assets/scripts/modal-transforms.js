jQuery(function($) {
    $("#modal-more").click(function() {
        $(".my-modal").fadeOut("slow");
        $(".my-expanded" ).fadeIn( "slow");
    });

    $("#footer-anch").click(function() {
        $(".my-expanded" ).fadeIn( "slow");
    });

    $("#modal-ok").click(function() {
        document.cookie = "rfsrv__cpam=1; expires=30";
        $(".my-modal").fadeOut("slow");
    });

    $("#expanded-ok").click(function() {
        document.cookie = "rfsrv__cpam=1; expires=30";
        $(".my-expanded").fadeOut("slow");
    });
});