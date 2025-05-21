$(document).ready(function () {
    const $est = $("#est");
    const $ouest = $("#ouest");
    const $titre = $("#titre");
    const $recherche = $("#recherche");

    window.click_est = function () {
        $est.addClass("w-full").removeClass("flex-1");
        $ouest.addClass("hidden");
        $titre.addClass("hidden");

        $recherche.fadeIn(500); // ou slideDown()
    };

    window.click_ouest = function () {
        $ouest.addClass("w-full").removeClass("flex-1");
        $est.addClass("hidden");
        $titre.addClass("hidden");

        $recherche.fadeIn(500);
    };
});
