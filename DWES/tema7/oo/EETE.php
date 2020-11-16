<?php

class A {
    public static function who() {
        echo __CLASS__;
    }
    public static function test() {
        self::who();
    }
}

class B extends A {
    public static function who() {
        echo __CLASS__;
    }
}

B::test(); // Devuelve A


class ActiveRecord 
{
    public static function tableName()
    {
        return '';
    }
    
    public static function accederTabla()
    {
        $nombre = static::tableName();
    }
    
}

class Empleados extends ActiveRecord
{
    public static function tableName()
    {
        return 'empleados';
    }
}