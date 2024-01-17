<?php

$food=array ("vegetable"=>array("carrot"=>"人参",
                             "tomato"=>"トマト",
                             "onion"=>"玉ねぎ"),
            "fruit"=>array("apple"=>"りんご",
                         "orange"=>"オレンジ",
                         "grape"=>"ぶどう"));
foreach ($food as $groupkey=>$namekey){
    echo"■".$groupkey."<br>";
    foreach ($namekey as $eigoname=>$nihonname){
        echo $eigoname.":".$nihonname."<br>";
    }
    echo "<br>";
    echo "<br>";
    echo "<br>";
}
?>