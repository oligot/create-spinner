var elegantSpinner = require('elegant-spinner');
var logUpdate = require('log-update');
var logSymbols = require('log-symbols');

function createSpinner(text, first) {
	if (!first) {
		console.log();
	}
	var frame = elegantSpinner();
  var animation = setInterval(function() {
    logUpdate(frame() + ' ' + text);
  }, 50);

	return function(ok) {
		var status = ok ? logSymbols.success: logSymbols.error;
		clearInterval(animation);
		logUpdate(status + ' ' + text);
	};
}

module.exports = createSpinner;
