<?php session_start(); ?>
<pre>
  SERVER_ADDR: <?=$_SERVER['SERVER_ADDR']?><br />
  REMOTE_ADDR: <?=$_SERVER['REMOTE_ADDR']?><br />
</pre>

<pre>
  numero di visite: <?php $_SESSION['counter'] = (int)@$_SESSION['counter'] + 1; echo $_SESSION['counter']; ?>
</pre>