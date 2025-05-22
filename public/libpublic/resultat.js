$(async function () {
    const res = await fetch('/api/images');
    const data = await res.json();

    if (!data.images || !data.images.length) {
        $('#carousel').text("Aucune image à afficher.");
        return;
    }

    let current = 0;
    const $carousel = $('#carousel');

    data.images.forEach((img, i) => {
        const $img = $('<img>')
            .attr('src', img.src)
            .addClass('carousel-img hidden w-full h-full object-cover absolute top-0 left-0')
            .toggleClass('block', i === 0);
        $carousel.append($img);
    });

    // Texte du haut : titre du trajet
    const $bubble_top = $(`<div class="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white w-1/2 h-20 flex items-center justify-center text-center text-5xl opacity-80">
        Voici le chemin vers ${data.titre}
    </div>`);
    // Texte du bas : description de l'image courante
    const $bubble_bottom = $('<div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white w-3/4 h-1/4 flex items-center justify-center text-center text-3xl opacity-80"></div>');
    $bubble_bottom.text(data.images[0].description);

    const $controls = $('<div class="absolute top-1/2 w-full flex justify-between transform -translate-y-1/2 z-10 px-4"></div>');
    const $prev = $('<button class="bg-white p-2 text-4xl opacity-80 hover:opacity-100 transition">◀</button>');
    const $next = $('<button class="bg-white p-2 text-4xl opacity-80 hover:opacity-100 transition">▶</button>');

    $prev.click(() => showImage((current - 1 + data.images.length) % data.images.length));
    $next.click(() => showImage((current + 1) % data.images.length));

    $controls.append($prev, $next);
    $carousel.append($controls);
    $carousel.append($bubble_top);
    $carousel.append($bubble_bottom);

    function showImage(index) {
        $('.carousel-img').removeClass('block').addClass('hidden');
        $('.carousel-img').eq(index).removeClass('hidden').addClass('block');
        current = index;
        $bubble_bottom.text(data.images[index].description);
    }
});