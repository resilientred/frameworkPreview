window.bootstrap = function () {
    angular.bootstrap(document, ['FrameworkPreview']);
}

window.init = function () {
    window.bootstrap() 		
}

$(document).ready(function () {
	//Fixing facebook bug with redirect
	if (window.location.hash == "#_=_") window.location.hash = ""
	window.init()
});