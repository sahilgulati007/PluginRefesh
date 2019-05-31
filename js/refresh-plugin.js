jQuery(document).ready(function () {
    //alert('in');
    if(jQuery("div").hasClass("refresh-content")){
        //alert('content');
        jQuery('.refresh-content').each(function(){
           //console.log(jQuery(this).attr('data-shortcode'));
            var data = {
                'action': 'execute_code',
                'sc': jQuery(this).attr('data-shortcode')
            };
            var cthis=this;
            jQuery.post(ajax_object.ajaxurl, data, function(response) {
                //alert(response);
                jQuery(cthis).html(response);
            });
        });
        // var data = {
        //     'action': 'execute_code',
        //     'sc': jQuery("div.refresh-content").attr('data-shortcode')
        // };
        // jQuery.post(ajax_object.ajaxurl, data, function(response) {
        //     //alert(response);
        //     jQuery("div.refresh-content").html(response);
        // });
        setInterval(function(){
            //alert("Hello");
            //alert(jQuery("div.refresh-content").attr('data-shortcode'));
            jQuery('.refresh-content').each(function(){
                jQuery(this).fadeOut( "slow" );
                var data = {
                    'action': 'execute_code',
                    'sc': jQuery(this).attr('data-shortcode')
                };
                var cthis=this;
                jQuery.post(ajax_object.ajaxurl, data, function(response) {
                    //alert(response);
                    jQuery(cthis).html(response);
                    jQuery(cthis).fadeIn( "slow" );
                });
            });
            // var data = {
            //     'action': 'execute_code',
            //     'sc': jQuery("div.refresh-content").attr('data-shortcode')
            // };
            // jQuery.post(ajax_object.ajaxurl, data, function(response) {
            //     //alert(response);
            //     jQuery("div.refresh-content").html(response);
            // });
            }, 3000);
    }
});