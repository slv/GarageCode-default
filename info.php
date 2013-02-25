<?php session_start(); ?>
<pre>
  SERVER_ADDR: <?php echo $_SERVER['SERVER_ADDR']; ?>
  REMOTE_ADDR: <?php echo $_SERVER['REMOTE_ADDR']; ?>
</pre>

<pre>
  numero di visite: <?php $_SESSION['counter'] = (int)@$_SESSION['counter'] + 1; echo $_SESSION['counter']; ?>
</pre>
