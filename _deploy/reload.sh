#!/bin/sh

cd ..

echo "start site"
npm install
pm2 reload bahagia
