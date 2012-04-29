
/* 

   VGTV Video Commercial Skip Script
   Developed by Steffen Martinsen 
   For personal use only.

*/



// Waits untill DOM is successfully loaded before injecting fixes.
$('document').ready(function(){



// Removes flash ad. Causes less hickups on OSX.
$("#reclaim-giraff").css("display", "none");



// Try to get video DIV - if it fails then we know the page isn't at the domain VGTV and we'll try to fetch article video DIV.
try{
	var videoObject = $("#drvideo-video-parent_api param[name=flashvars]").attr('value');
	var validjs = videoObject.substr(7, videoObject.length);
	var obj = jQuery.parseJSON(validjs);
	var videoURL = obj.clip.url;
	$("#drvideo-video-parent_api").html('<param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="quality" value="high"><param name="cachebusting" value="false"><param name="bgcolor" value="#000000"><param name="wmode" value="opaque"><param name="flashvars" value=\'config={"clip":"' + videoURL +'"}\' />');
	}




// If this error catches then either VGTV has fixed flaw, or we're at the mainpage (VGNETT).
catch(err){
alert('error');
}



}); // End of poetry. Written with love, and beer.


