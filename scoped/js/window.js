const displace = displacejs;

function applyWindowFloat() {
	document.querySelectorAll('.window[float]').forEach(floatableWindow => {
		// Setting floatable windows using displacejs
		displace(floatableWindow, {
			handle: floatableWindow.querySelector('.title-bar'),
		});

		// Making the close button delete the window
		floatableWindow.querySelector('button[aria-label="Close"]').addEventListener("click", event => {
			floatableWindow.parentNode.removeChild(floatableWindow);
		});
	});
}

applyWindowFloat();