<?php

require_once('config/config.php');

$current_url = $_SERVER['REQUEST_URI'];
$main_dir = 'smartcontribution';

switch ($current_url) {
    case '/'. $main_dir. '/transactions.php':
        $title = 'Reports - Transactions';
        break;
    case '/'. $main_dir. '/viewAllCustomers.php':
        $title = 'Customers';
        break;
    case '/'. $main_dir. '/payment.php':
        $title = 'Make a Payment';
        break;
    case '/'. $main_dir. '/admin_section.php':
        $title = 'Admin Section';
        break;
    case '/'. $main_dir. '/balances.php':
        $title = 'Reports - Balances';
        break;
    case '/'. $main_dir. '/login.php':
        $title = 'Admin Login';
        break;
    case '/'. $main_dir. '/index.php':
        $title = 'Home';
        break;
    default:
        $title = '';
        break;
};

login_required();


if (isset($_GET['logout'])) {
    logout();
    }

//Set the uniqueness of the session;
$user = $_SESSION['user'];
$role = $_SESSION['role'];

?>


<!DOCTYPE html>
<html lang="en" ng-app>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/w3.css">
    <link rel="stylesheet" href="css/myStyles.css">
    <link rel="stylesheet" href="css/font-awesome-4.7.0/css/font-awesome.css" />
    <link rel="stylesheet" href="css/jquery-ui.min.css">
    <link rel="stylesheet" href="css/jquery.dataTables.min.css">
    <link rel="stylesheet" href="css/buttons.dataTables.min.css">
    <script src="js/jquery-3.4.1.min.js"></script>
    <!-- <script type="text/javascript" src="js/angular.min.js"> -->
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.dataTables.min.js"></script>
    <script src="js/dataTables.buttons.min.js"></script>
    <script src="js/buttons.flash.min.js"></script>
    <script src="js/jszip.min.js"></script>
    <script src="js/buttons.html5.min.js"></script>
    <script src="js/buttons.print.min.js"></script>
    <script src="js/sum().js"></script>
    <script src="js/functions.js"></script>
    <title>The PayDay App | <?php echo $title;?> </title>
</head>

<body>

<header class="container-fluid w3-container w3-padding-16 powder-blue my-header">
    <div class="w3-left">
    <h2 class="w3-text-light-grey"><a href="index.php"><img src="lib/smart-icon.png" width="50" height="50"/><i> The PayDay App</i></a></h2>
    </div>
    <div class="w3-right w3-padding-16">
        <a href="./index.php"><button class="btn btn-dark"><i class="fa fa-home"></i> Home</button></a>
        <a href="./viewAllCustomers.php"><button type="button" class="btn btn-dark"><i class="fa fa-users"></i> Customers </button></a>
        
            <button type="" class="btn btn-dark dropdown-toggle" data-toggle="dropdown"><i class="fa fa-book"></i> Reports<span class="caret"></span></button>
            <ul class="dropdown-menu btn-dark">
                <li><a href="./transactions.php">Transaction Reports</a></li>
                <li class="dropdown-divider"></li>
                <li><a href="./balances.php">Balance Reports</a></li>
            </ul>
        
        
        <a href="./payment.php"><button type="" class="btn btn-dark"><i class="fa fa-euro"></i> Perform Transaction</button></a>
        <?php if ($role == "SUPERADMIN") {echo "<a href=\"admin_section.php\"><button class=\"btn btn-dark\"><i class=\"fa fa-gear\"></i> Admins</button></a>"; } ?>
        <a href="./?logout"><button type="" class="btn btn-dark"><i class=" fa fa-user"></i> <?php echo strtoupper($user) . ' ['.ucfirst(strtolower($role)).']'?> (Logout)</i></button></a>
    </div>
</header>
<hr>

