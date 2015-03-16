<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
    <head>
        <meta charset="UTF-8"/>
        <title>Tache 02</title>
        <!--<link rel="icon" type="image/png" href="./images/favicon.png" />-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link type="text/css" rel="stylesheet" href="./../css/materialize/css/materialize.css" />
        <link type="text/css" rel="stylesheet" href="./../css/general.css" />
    </head>
    <body>
        <?php include("./../views/view_langues.html"); ?>

        <!-- ********* DEBUT CONTENU PRINCIPAL ********* -->
        <div class="container">
        	<h3> Choix de l'avatar </h3>        	
       		<div class="row">
       			<div class="input-field col offset-l2 l4 offset-m1 m3 offset-s1 s2">
                    <img src="./../medias/choixRoxane.png" alt="Roxanne" id="imgAvatar" class="imgAvatar" />
                </div>
                <div class="input-field col offset-l2 l4 offset-m4 m2 offset-s1 s2">
                    <img src="./../medias/choixCyrano.png" alt="Cyrano" id="imgAvatar" class="imgAvatar"/>
                </div>
		    </div>
        	<div class="row">
       			<div class="input-field col offset-l2 l3 offset-m2 m3 offset-s2 s3">
                    <a href="tache02-1.php" class="btn">Roxanne</a>
                </div>
                <div class="input-field col offset-l3 l3 offset-m2 m3 offset-s2 s3">
                    <a href="tache02-2.php" class="btn">Cyrano</a>
                </div>
		    </div>
        </div>
            
        <!-- ********* FIN CONTENU PRINCIPAL ********* -->

        <!-- ********* DEBUT FOOTER ********* -->
        <footer class="footer">
            <div class="container">
			<!-- Ajouter le pied de page s'il y en a un-->
            </div>
        </footer>
        <!-- ********* FIN FOOTER ********* -->

        <!-- ********* DIV CACHE ********* -->
        <div id="site-cache"></div>

        <script type="text/javascript" src="./js/jQuery/jquery-2.1.3.js"></script>
        <script type="text/javascript" src="./js/transit.js"></script>
        <script type="text/javascript" src="./css/materialize/js/materialize.js"></script>
        <script type="text/javascript" src="./js/app.js"></script>
        <script type="text/javascript" src="./js/jquery.mixitup.min.js"></script>
        <script type="text/javascript" src="./js/jquery.fs.boxer.js"></script>
        <script type='text/javascript' src='unitegallery/themes/default/ug-theme-default.js'></script>
    </body>
</html>