@echo off

cd ./back-end
start npm install
start npm start

cd ./..

cd ./front-end
start npm install
start npm start