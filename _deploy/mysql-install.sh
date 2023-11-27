#!/bin/sh

if which mysql > /dev/null
then
    echo "mysql is installed, skipping..."
else
    apt update
    apt install -y mysql-server
    nano /etc/mysql/mysql.conf.d/mysqld.cnf
fi

mysql < mysql-init.sql


# service mysql restart

