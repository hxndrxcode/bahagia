CREATE USER IF NOT EXISTS 'user_bahagia'@'%' IDENTIFIED WITH mysql_native_password BY 'h44py!';
GRANT ALL PRIVILEGES ON *.* TO 'user_bahagia'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

CREATE DATABASE IF NOT EXISTS `bahagia`;
