@echo off
set OLD=%CD%
cd C:\Users\troussetj\Documents\git\Solarized_Dynamo_Administration
call lessc --verbose sda.less sda.css
copy /Y sda.* C:\Users\troussetj\AppData\Roaming\Mozilla\Firefox\Profiles\ko84uqx2.default\gm_scripts\Solarized_Dynamo_Administration
cd %OLD%