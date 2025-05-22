$(function () {
    //Gestion recherche 
    const salles = [
        {salle : "BU Sciences", num : 1}, 
        {salle : "Bibliotheque U" , num : 1}, 
        {salle : "UFR ST", num : 2}, 
        {salle : "UFR Science", num : 2}, 
        {salle : "Amphi Charpak", num : 3}, 
        {salle : "Amphi Commerson", num : 4}, 
        {salle : "Amphi B", num : 5}, 
        {salle : "Amphi A", num : 6}, 
        {salle : "Amphi C", num : 7}, 
        {salle : "S1-...", num : 8}, 
        {salle : "S2-...", num : 9}, 
        {salle : "S3-...", num : 10}, 
        {salle : "S4a-...", num : 11}, 
        {salle : "S4b-...", num : 12}, 
        {salle : "S4d-...", num : 13}, 
        {salle : "S4c-...", num : 14}
    ];

    $('#search').on('input', function () {
        let value = $(this).val().toLowerCase();
        let $suggestions = $('#suggestions');
        $suggestions.empty();

        let matches = salles.filter(salleO => salleO.salle.toLowerCase().includes(value));

        if (value && matches.length) {
            $suggestions.removeClass('hidden');
            matches.forEach(match => {
                let $li = $('<li></li>')
                    .text(match.salle)
                    .data('num', match.num)
                    .addClass('p-num :  hover:bg-indigo-100 cursor-pointer')

                    .on('click', function () {
                        let salle = $(this).text();
                        let num = $(this).data('num');
                        $('#search').val(salle);
                        $suggestions.addClass('hidden');

                        // Envoie le choix et la salle au serveur
                        let isWest = $("#est").hasClass("w-full") ? 0 : 1;

                        $.post('/api/choix', {

                            direction: isWest, //Est = 0 ; West = 1
                            salle: num
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
    window.click_est = function () {
        est.addClass("w-full").removeClass("flex-1");
        ouest.addClass("hidden");
        titre.addClass("hidden");

        recherche
            .addClass("flex")
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
