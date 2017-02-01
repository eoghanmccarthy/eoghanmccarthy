<!DOCTYPE html>
<html lang="en">

    <head>

        <title>eoghanmccarthy / photography</title>

        <?php include 'partials/meta.php';?>
        <?php include 'partials/scripts.php';?>

    </head>

    <body>

        <!-- Container -->
        <div class="container">

            <!-- Header -->
            <?php include 'partials/header.php';?>

            <!-- Main -->
            <main>
                <div id="gallery" class="row">
                    <div class="col-md-6">
                        <figure class="media">
                            <img class="media__content" src="photography/img_0111-folio.jpg" onclick="topSlide(1)">
                            <figcaption class="media__meta">abashiri, japan</figcaption>
                        </figure>
                    </div>
                    <div class="col-md-6">
                        <figure class="media">
                            <img class="media__content" src="photography/img_0243-folio.jpg" onclick="topSlide(2)">
                            <figcaption class="media__meta">sapporo, japan</figcaption>
                        </figure>
                    </div>
                    <div class="col-md-6">
                        <figure class="media">
                            <img class="media__content" src="photography/img_0359-folio.jpg" onclick="topSlide(3)">
                            <figcaption class="media__meta">abashiri, japan</figcaption>
                        </figure>
                    </div>
                    <div class="col-md-6">
                        <figure class="media">
                            <img class="media__content" src="photography/img_0387-folio.jpg" onclick="topSlide(4)">
                            <figcaption class="media__meta">abashiri, japan</figcaption>
                        </figure>
                    </div>
                    <div class="col-md-6">
                        <figure class="media">
                            <img class="media__content" src="photography/img_4453-folio.jpg" onclick="topSlide(5)">
                            <figcaption class="media__meta">shizuoka, japan</figcaption>
                        </figure>
                    </div>
                    <div class="col-md-6">
                        <figure class="media">
                            <img class="media__content" src="photography/img_4480-folio.jpg" onclick="topSlide(6)">
                            <figcaption class="media__meta">shizuoka, japan</figcaption>
                        </figure>
                    </div>
                    <div class="col-md-6">
                        <figure class="media">
                            <img class="media__content" src="photography/img_3889-folio.jpg" onclick="topSlide(7)">
                            <figcaption class="media__meta">tokyo, japan</figcaption>
                        </figure>
                    </div>
                    <div class="col-md-6">
                        <figure class="media">
                            <img class="media__content" src="photography/img_3251-folio.jpg" onclick="topSlide(8)">
                            <figcaption class="media__meta">izu, japan</figcaption>
                        </figure>
                    </div>
                </div>
            </main>

            <!-- Lightbox -->
            <div id="lghtbxAA">
                <?php include 'partials/lightbox.php';?>
            </div>

            <!-- Footer -->
            <?php include 'partials/footer.php';?>

        </div>

        <?php include 'partials/scripts-js.php';?>

    </body>

</html>
