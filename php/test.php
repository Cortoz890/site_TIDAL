<?php
require_once('../smarty/libs/Smarty.class.php');

$smarty = new Smarty();
$var1 = "patho";

$smarty->assign('name',$var1);
$smarty->display('index.tpl');