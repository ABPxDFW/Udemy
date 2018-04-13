<?php
/**
 * Created by PhpStorm.
 * User: abpdfw
 * Date: 4/13/2018
 * Time: 9:04 AM
 */

    require_once('load.php');

    // Handle logins
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $login_status = $login->verify_login($_POST);
    }

    // Verify session
    if($login->verify_session()) {
        $user = $login->user;
        include('home.php');
    }
    else {
        include('login.php');
    }