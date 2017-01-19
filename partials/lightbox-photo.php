<!-- Lightbox modal -->

<div id="photoLightbox" class="lightbox">

    <!-- Close button -->

    <span class="lightbox__close" onclick="closeModal()">&times;</span>

    <!-- Lightbox slides -->

    <!-- <script>
        for (var j = 1; j <= 8; j += 1 ) {
            html += '<div class="slide slide-0' + j + '"></div>';
        }
        document.write(html);
    </script> -->

    <div class="slide slide-01"></div>
    <div class="slide slide-02"></div>
    <div class="slide slide-03"></div>
    <div class="slide slide-04"></div>
    <div class="slide slide-05"></div>
    <div class="slide slide-06"></div>
    <div class="slide slide-07"></div>
    <div class="slide slide-08"></div>

    <!-- Lightbox navigation -->

    <div class="lightbox__nav">
        <a class="lightbox__nav--prv" onclick="plusSlides(-1)"><i class="fa fa-caret-left" aria-hidden="true"></i></a>
        <a class="lightbox__nav--nxt" onclick="plusSlides(1)"><i class="fa fa-caret-right" aria-hidden="true"></i> </a>
    </div>

</div>
