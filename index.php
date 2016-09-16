<?php defined('_JEXEC') or die;?>

<!doctype html>
<html lang="es">

<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<jdoc:include type="head" />
	<!--[if lt IE 9]>
		<script src="<?php echo JUri::root(true); ?>/media/jui/js/html5.js"></script>
	<![endif]-->

	<link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/font-awesome.min.css">
	<link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/style.css">
	<link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/custom.css">
	<link rel="shortcut icon" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/favicon.png" />
</head>

<body>
	<!--[if gte IE 6 ]>
		<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->
  
  <?php// if ($this->countModules( '' )) : ?>
  <?php// endif; ?>

	<main class="st-main">
		<div class="container">
			<div class="row">
				<div class="col-md-12" style="background: #F5F5F5; text-align:center;">
						<jdoc:include type="message" />
						<jdoc:include type="component" />
						<jdoc:include type="modules" name="" style="xhtml" />
				</div>
			</div>
		</div>
	</main>
</body>

</html>
