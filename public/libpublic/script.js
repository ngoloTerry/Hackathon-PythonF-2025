$(document).ready(function () {
	$('#envoyer').click(function () {
		$.ajax({
			url: '/api/donnees',
			method: 'POST',
			contentType: 'application/json',
			data: JSON.stringify({ info: 'Données envoyées avec jQuery' }),
			success: function (data) {
				$('#reponse').text(data.message);
			},
			error: function () {
				$('#reponse').text('Erreur lors de l’envoi.');
			}
		});
	});
});

