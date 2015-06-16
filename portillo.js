
var test;
var img;
var mmjsCountryCode = geoip_country_code();
var mmjsCity = geoip_city();
var mmjsRegionName = geoip_region_name();
var $j = jQuery.noConflict();
$j(function(){
  $j('#ad').text(test);
  $j('#adImg').attr('src',img);
    addImpression();
});
var click_location = mmjsRegionName + " " + mmjsCity +" "+ mmjsCountryCode;
  $j('#adImg').click(function () {
            alert("ad: " + img);
  	addClick( publisher , 'portillo', img, click_location,'000');
});
function addImpression() {
 $j.ajax({
       url: 'http://sonyainc.net/polyads/php/add_impression.php',
             dataType: 'jsonp',
            success: function(dataWeGotViaJsonp){
                 alert("impression added: " + dataWeGotViaJsonp );
                 }
        });
      }//end addImpression
function addClick (publisher, campaign, ad, location, adno ) {
  var d = new Date();
    var time = d.toDateString()+" " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  $j.ajax({
       url: 'http://sonyainc.net/polyads/php/insert_data.php?publisher='+publisher+'&campaign='+campaign+'&ad='+ad+'&location='+mmjsCity+'&adno='+adno+'&clickdate='+time,
       dataType: 'jsonp',
            success: function(dataWeGotViaJsonp){
                // alert("oiula: " + dataWeGotViaJsonp );
             }
    });
  window.open("http://www.skiportillo.com/?lang=en");
}
function myCallback(data){
    test = data.name;
    publisher = data.publisher;
    img = data.image;
}//end myCallback
function putBack(response) {
//	alert("putBack complete: " + response);
}