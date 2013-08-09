/**
 * Class Constructor
 */
function Colourise (text) {
	this.text = text;
	this.hex = '';
	this.colours = [];

	this.toHex();
}

/**
 * Instance method to convert the text to hex
 */
Colourise.prototype.toHex = function () {

	// Convert each character in the string to hexadecimal and add it to the
	// hex property
	for (var i = 0, len = this.text.length; i < len; i++) {
		this.hex += '' + this.text.charCodeAt(i).toString(16);
	}

	// Now we have the hex for the string, build the colours
	this.buildColours();

}

/**
 * Instance method to build the array of colours
 */
Colourise.prototype.buildColours = function () {

	var colour,
		ext,
		len = this.hex.length
		div = Math.floor(len / 6),
		rem = this.hex.length % 6;

	// If there are less then 3 hex values, no colours can be made
	if (div === 0 && rem < 3) return;

	// Check for number of full colours (e.g #FF0000)
	if (div >= 1) {
		for (var i = 0; i < div; i++) {
			colour = this.hex.substr(i * 6, 6);
			this.colours.push('#' + colour);
		}
		this.hex = this.hex.slice(div * 6, len);
	}

	// Check for any partial colours (e.g #F00)
	if (this.hex.length >= 3) this.colours.push('#' + this.hex.substr(0, 3));

}