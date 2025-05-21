$(function () {
	const salles = ["B204", "A101", "Amphi 3", "Salle Polytech", "Informatique 1", "Robotique 2"];

	$('#search').on('input', function () {
		const value = $(this).val().toLowerCase();
		const $suggestions = $('#suggestions');
		$suggestions.empty();

		const matches = salles.filter(salle => salle.toLowerCase().includes(value));

		if (value && matches.length) {
			$suggestions.removeClass('hidden');
			matches.forEach(match => {
				const $li = $('<li></li>')
					.text(match)
					.addClass('p-2 hover:bg-indigo-100 cursor-pointer')
					.on('click', function () {
						$('#search').val(match);
						$suggestions.addClass('hidden');
					});
				$suggestions.append($li);
			});
		} else {
			$suggestions.addClass('hidden');
		}
	});
});

