<?php
/**
 * Plugin Name:       My test plugin
 * Description:       New custom gutenberg block for posts
 * Author:            Anmol kumar
 * License:           GPL v2 or later
 */

 function ideapro_custom_block_script_register()
 {
   wp_enqueue_script('ideapro-custom-block',plugin_dir_url(__FILE__).'ideapro-block.js',array('wp-blocks','wp-editor'),true,false);
 }
 add_action('enqueue_block_editor_assests','ideapro_custom_block_script_register');

 ?>
