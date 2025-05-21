$(document).ready(function () {
    const $est = $("#est");
    const $ouest = $("#ouest");
    const $titre = $("#titre");
    const $recherche = $("#recherche");

    window.click_est = function () {
        $est.addClass("w-full").removeClass("flex-1");
        $ouest.addClass("hidden");
        $titre.addClass("hidden");

        $recherche
            .removeClass("hidden")       // retire display: none
            .addClass("flex")            // active Flexbox pour centrer
            .hide()                      // reset pour fadeIn
            .fadeIn(500);                // animation propre
    };

    window.click_ouest = function () {
        $ouest.addClass("w-full").removeClass("flex-1");
        $est.addClass("hidden");
        $titre.addClass("hidden");


        $recherche
            .removeClass("hidden")       // retire display: none
            .addClass("flex")            // active Flexbox pour centrer
            .hide()                      // reset pour fadeIn
            .fadeIn(500);                // animation propre

    };
});
