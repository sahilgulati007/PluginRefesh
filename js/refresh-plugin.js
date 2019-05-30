jQuery(document).ready(function () {
    //alert('in');
    if(jQuery("div").hasClass("refresh-content")){
        //alert('content');
        var data = {
            'action': 'execute_code',
            'sc': jQuery("div.refresh-content").attr('data-shortcode')
        };
        jQuery.post(ajax_object.ajaxurl, data, function(response) {
            //alert(response);
            jQuery("div.refresh-content").html(response);
        });
        setInterval(function(){
            //alert("Hello");
            //alert(jQuery("div.refresh-content").attr('data-shortcode'));
            var data = {
                'action': 'execute_code',
                'sc': jQuery("div.refresh-content").attr('data-shortcode')
            };
            jQuery.post(ajax_object.ajaxurl, data, function(response) {
                //alert(response);
                jQuery("div.refresh-content").html(response);
            });
            }, 3000);
    }
});