var $radios = $('input[type="radio"][name="feedback"]')
$('#next,#previous').click(function() {
    var $checked = $radios.filter(':checked');
    var $next = $radios.eq($radios.index($checked) + 1);
    if(!$next.length){
        $next = $radios.first();
    }
    $next.prop("checked", true);
});