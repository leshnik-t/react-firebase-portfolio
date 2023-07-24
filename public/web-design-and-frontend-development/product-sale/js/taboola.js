// JavaScript Document
$(document).ready(function() {
	var printScript1 = "<div id='taboola-below-article-thumbnails'></div><script type='text/javascript'>window._taboola = window._taboola || []; _taboola.push({mode: 'thumbnails-a',container: 'taboola-below-article-thumbnails',placement: 'Below Article Thumbnails',target_type: 'mix'});</script>"
	var printScript2 = "<script type='text/javascript'>window._taboola = window._taboola || [];_taboola.push({article:'auto'});!function (e, f, u) {e.async = 1;e.src = u;f.parentNode.insertBefore(e, f);}(document.createElement('script'),document.getElementsByTagName('script')[0],'http://cdn.taboola.com/libtrc/mediavibessnc-actualitesco/loader.js');</script>";
	var printScript3 = "<script type='text/javascript'>window._taboola = window._taboola || []; _taboola.push({flush: true});</script> "
 $("#taboola").append(printScript1);
 $("head").append(printScript2);
 $("body").append(printScript3);
});