window.addEvent('domready', function () {

	$('multilang').store('index', 0);
	var tot = $$("#multilang > h3").set('tween', {
		duration: 400,
		transition: Fx.Transitions.Back.easeInOut
	}).length;

	$$("#multilang > h3")[0].tween('top', 0);
	(function () {

		var i = $('multilang').retrieve('index'),
			n = ($('multilang').retrieve('index') + 1) % tot;

		$$("#multilang > h3")[i].tween('top', -24);
		$$("#multilang > h3")[n].tween('top', 0);
		$('multilang').store('index', n);

	}).periodical(4000);

	new Element("script", {
		type: "text/javascript",
		async: true,
		src: "http://twitter.com/status/user_timeline/GarageCodeIt.json?count=10&callback=twitterCB"
	}).inject($(document.head), "bottom");
});
function twitterCB(data) {
	$$("#tw > h2 > span").set('text', data[0].text);
}
