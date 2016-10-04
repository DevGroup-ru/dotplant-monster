<?php
return function ($bh) {

    $bh->match('progressbar', function ($ctx, $json) {
        $val = $json->val ?: 0;
        $ctx
            ->js([ 'val' => $val ])
            ->attrs([
                'role' => 'progressbar',
                'aria-valuenow' => $val . '%'  // NOTE: JAWS doesn't add 'percent' automatically
            ])
            ->content([
                'elem' => 'bar',
                'attrs' => [ 'style' => 'width:' . $val . '%' ]
            ]);
    });
};
