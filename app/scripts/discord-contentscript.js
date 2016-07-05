"use strict";

$(document).ready(function () {
	console.log("Hello Discord!");

	console.log($('.messages-wrapper'));

	var checkMessagesContainer = setInterval(function () {
		if ($(".messages-wrapper").length > 0) {
			// Check if element has been found
			console.log('Add CSS to Messages Panel');
			$('.messages-wrapper').css('height', '400px');
			clearInterval(checkMessagesContainer);
		}
	}, 1000);

	var checkLinks = setInterval(function () {
		if ($(".links").length > 0) {
			// Check if element has been found
			console.log('Add Switch to Links Panel');
			$('.links').html('<label for="twitch-player-display" id="twitch-player-display-label">Twitch Player Embed</label>');
			$('.links').append("<input type=\"checkbox\" data-size=\"mini\" name=\"twitch-player-display\">");
			clearInterval(checkLinks);

			$("[name='twitch-player-display']").bootstrapSwitch();
			console.log($("[name='twitch-player-display']").bootstrapSwitch('state'));

			$('input[name="twitch-player-display"]').on('switchChange.bootstrapSwitch', function (event, state) {
				console.log('Clicked Twitch Switch.');
				console.log($("[name='twitch-player-display']").bootstrapSwitch('state'));
				if ($('input[name="twitch-player-display"]').bootstrapSwitch('state')) {
					updateTwitchPlayer('add');
				} else {
					updateTwitchPlayer('remove');
				}
			});
		}
	}, 1000);

	function updateTwitchPlayer(msg) {
		if (msg == 'add') {
			console.log('Switch is on. Adding Twitch iframe and modifying UI.');
			$('.messages-wrapper').before('<iframe id="twitch-embed" src="https://player.twitch.tv/?channel=gamesdonequick" style="margin: auto;" width="560" height="315" frameborder="0" scrolling="no" allowFullscreen="true" class="center-block"></iframe>');
		} else if (msg == 'remove') {
			console.log('Switch is off. Removing UI.');
			$('#twitch-embed').remove();
		}
	}
});