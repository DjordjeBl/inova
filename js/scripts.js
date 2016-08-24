jQuery(document).ready(function(){
    jQuery("a.fancybox, .gallery-item .gallery-icon a").attr('rel','postsgallery').fancybox({
        'overlayOpacity' : 0.9,
        'overlayColor' : '#111',
        'hideOnOverlayClick' : 'true',
        'enableEscapeButton' : 'true',
        'showCloseButton' : 'true'
    });
});