<?php
require('connect.php');
require_once('../smarty/libs/Smarty.class.php');

$smarty = new Smarty();
$smarty->setTemplateDir('/var/www/html/template');
$smarty->setCompileDir('/var/www/html/template_c');
$smarty->setConfigDir('/var/www/html/configs');
$smarty->setCacheDir('/var/www/html/cache');

$var1 = "patho";

$smarty->assign('name',$var1);
$smarty->display('index.tpl');
