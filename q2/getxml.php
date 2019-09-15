<?php
header('Content-type: text/plain');
$file = readfile('https://g1.globo.com/rss/g1/');
echo $file;
