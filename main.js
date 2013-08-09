(function () {
	var input,
		output,
		submit,
		colourise,

	/**
	 * Display the colours to the document
	 */
	displayColours = function () {
		var table = document.getElementById('table'),
			width = colourise.colours.length / 100;
		while (table.hasChildNodes()) {
		    table.removeChild(table.lastChild);
		}
		for (var i = 0, len = colourise.colours.length; i < len; i++) {
			var div = document.createElement('div');
			div.className = 'table-cell';
			div.style.width = width + '%';
			div.style.backgroundColor = colourise.colours[i];
			table.appendChild(div);
		}
	},

	/**
	 * Called once the form is submitted
	 */
	formSubmitted = function (e) {
		input = document.getElementById('input').value;
		if (input.trim().length === 0) return;
		colourise = new Colourise(input);
		displayColours();
		e.preventDefault();
	};


	window.addEventListener('load', function () {
        document.getElementById('submit')
        .addEventListener('click', formSubmitted);
    }, false);

})();