$(function(){

    /* place holder function */
    $(['placeholder']).focus(function(){
        $(this).attr('data-text',$(this).attr('placeholder'))
        $(this).attr('placeholder','');
        
    }),blur(function(){
        $(this).attr('placeholder',data('text'))
    });

    /*  login und signup title*/
    $('.title span').click(function(){
        $(this).addClass('selected').siblings('span').removeClass('selected')
        $('.login-page form').hide()
        $($(this).data('show')).fadeIn(100);
    });
});