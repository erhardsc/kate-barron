<?php
/**
 * Enqueues child theme stylesheet, loading first the parent theme stylesheet.
 */
function themify_custom_enqueue_child_theme_styles() {
	wp_enqueue_style( 'parent-theme-css', get_template_directory_uri() . '/style.css' );
}
add_action( 'wp_enqueue_scripts', 'themify_custom_enqueue_child_theme_styles', 11 );

function custom_styles() {

	wp_register_style('sexy-input-css', get_stylesheet_directory_uri() . '/css/sexy-input.css' );

	wp_register_script('main-js', get_stylesheet_directory_uri() . '/js/main.js', array('jquery'), false);
	wp_register_script('services-js', get_stylesheet_directory_uri() . '/js/services.js', array('jquery'), false);

	if (is_page('services')) {
		wp_enqueue_script('services-js');
	} elseif (is_page('contact')){
		wp_enqueue_style('sexy-input-css');
	}

	wp_enqueue_script('main-js');
}
add_action( 'wp_enqueue_scripts', 'custom_styles' );