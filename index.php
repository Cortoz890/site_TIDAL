<?php
require_once('smarty/libs/Smarty.class.php');

$smarty = new Smarty();
$smarty->setTemplateDir('/var/www/html/template');
$smarty->setCompileDir('/var/www/html/template_c');
$smarty->setConfigDir('/var/www/html/configs');
$smarty->setCacheDir('/var/www/html/cache');

$smarty->display('index.tpl');
require('./php/nav.php');
require('./php/recherche.php');
require('./php/connect.php');
$smarty->display('footer.tpl');
