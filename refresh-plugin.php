<?php
/*
  Plugin Name: Refresh Plugin
  Description: Plugin for refreshing div every 3 sec
  Version: 1
  Author: Sahil Gulati
 */
add_action( 'wp_enqueue_scripts', 'so_enqueue_scripts' );
add_action( 'admin_enqueue_scripts', 'so_enqueue_scripts' );
function so_enqueue_scripts(){
    wp_register_script('jquery3','https://code.jquery.com/jquery-3.3.1.js');
    wp_enqueue_script( 'jquery3');
    wp_register_script(
        'ajaxHandle',
        '/wp-content/plugins/refresh-plugin/js/refresh-plugin.js',
        array(),
        false,
        true
    );
    wp_enqueue_script( 'ajaxHandle' );
    wp_localize_script(
        'ajaxHandle',
        'ajax_object',
        array( 'ajaxurl' => admin_url( 'admin-ajax.php' ), 'pluginurl' => plugin_dir_url( __FILE__ ) )
    );
}

add_action( 'wp_ajax_execute_code', 'execute_code' );
add_action( 'wp_ajax_nopriv_execute_code', 'execute_code' );

function execute_code() {
    $sc=$_POST['sc'];
//    if(date("s")%10==0){
//        echo "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old<br>";
//    }
//    else if(date("s")%2==0){
//        echo "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book<br>";
//    }
//    else{
//        echo "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable<br>";
//    }
   // echo $sc;
    echo  do_shortcode("[".$sc."]");

    //echo "hi";
    wp_die();
}

function time_shortcode_func(){
    return date("M,d,Y h:i:s A");
}
add_shortcode( 'time_shortcode', 'time_shortcode_func' );
