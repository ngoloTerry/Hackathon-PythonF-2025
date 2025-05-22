$(function () {
    //Gestion recherche 
    const salles = ["BU Sciences", "Bibliotheque", "UFR ST", "UFR Science", "Amphi Charpak", "Amphi Commerson", "Amphi D", "Amphi C", "S1-...", "S2-...", "S3-...", "S4a-...", "S4b-...", "S4d-...", "S4c-..."];

    $('#search').on('input', function () {
        let value = $(this).val().toLowerCase();
        let $suggestions = $('#suggestions');
        $suggestions.empty();

        let matches = salles.filter(salle => salle.toLowerCase().includes(value));

        if (value && matches.length) {
            $suggestions.removeClass('hidden');
            matches.forEach(match => {
                let $li = $('<li></li>')
                    .text(match)
                    .addClass('p-2 hover:bg-indigo-100 cursor-pointer')

                    .on('click', function () {
                        let match = $(this).text();
                        $('#search').val(match);
                        $suggestions.addClass('hidden');

                        // Envoie le choix et la salle au serveur
                        let direction = $("#est").hasClass("w-full") ? "est" : "ouest";

                        $.post('/api/choix', {
                            direction: direction,
                            salle: match
                        }, function () {
                            window.location.href = '/resultat'; 
                        });
                    });
                $suggestions.append($li);
            });
        } else {
            $suggestions.addClass('hidden');
        }
    });
    // Gestion avant-page
    let est = $("#est");
    let ouest = $("#ouest");
    let titre = $("#titre");
    let recherche = $("#recherche");
    recherche.hide();
    let choix = { direction : null , }
    window.click_est = function () {
        est.addClass("w-full").removeClass("flex-1");
        ouest.addClass("hidden");
        titre.addClass("hidden");

        recherche

            .addClass("flex")            // active Flexbox .hide()                      // reset pour fadeIn
            .fadeIn(500);                // animation propre
    };

    window.click_ouest = function () {
        ouest.addClass("w-full").removeClass("flex-1");
        est.addClass("hidden");
        titre.addClass("hidden");


        recherche

            .addClass("flex")            // active Flexbox pour centr
            .fadeIn(500);                // animation propre

    };
});
