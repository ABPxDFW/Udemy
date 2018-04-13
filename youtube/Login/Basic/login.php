<?php
/**
 * Created by PhpStorm.
 * User: abpdfw
 * Date: 4/13/2018
 * Time: 10:29 AM
 */

    include('header.php');
?>
<div class="wrapper">
    <form action="index.php" method="post">
        <h1 class="text-center">Login</h1>
        <?php if(isset($login_status) && false == $login_status) : ?>
        <div class="error">
            <p>Your username and password are incorrect. Please try again.</p>
        </div>
        <?php endif; ?>
        <input type="text" class="text" name="username" placeholder="Enter username">
        <input type="password" class="text" name="password" placeholder="Enter password">
        <input type="submit" class="submit" placeholder="Submit">
    </form>
</div>
<?php include('footer.php'); ?>