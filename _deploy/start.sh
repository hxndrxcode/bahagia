#!/bin/sh

cd ..

echo "start site"
pm2 start server.js --name "bahagia"
