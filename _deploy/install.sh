#!/bin/sh

cd ..
apt update

if which node > /dev/null
then
    echo "node is installed, skipping..."
else
    curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
    sudo apt install -y nodejs
fi

echo "npm install"
npm install
cp .env.example .env

if which pm2 > /dev/null
then
    echo "pm2 is installed, skipping..."
else
    echo "npm i --location=global pm2"
    npm i --location=global pm2
fi

if which nginx > /dev/null
then
    echo "nginx is installed, skipping..."
else
    apt install -y nginx
fi

FILE=/etc/nginx/sites-enabled/bahagia
if [ -f "$FILE" ]; then
    echo "$FILE exists."
else
    echo "copy nginx conf"
    cp _deploy/nginx_site "$FILE"
    service nginx restart
fi

echo "TODO:"
echo "1. Exec mysql-install.sh (if you want)"
echo "3. Edit .env"
echo "4. Exec start.sh"
