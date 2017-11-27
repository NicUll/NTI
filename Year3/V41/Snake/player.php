<?php
/**
 * Created by PhpStorm.
 * User: nic.lundmarkullman
 * Date: 2017-11-27
 * Time: 14:41
 */

class Player
{
    public $name;
    public $score;

    function __construct($name, $score)
    {
        $this->name = $name;
        $this->score = $score;


    }

}