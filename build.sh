#!/bin/bash
cd $SDA
lessc sda.less sda.css
cp sda.* $SDA_GM/
cd -