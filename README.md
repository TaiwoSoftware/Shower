# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Clone repo into htdocs folder in xampp.

Install composer.

Run composer install.

npm install.

copy .env.example to a new .env file.

adjust the app url to the url needed for xampp.

npm run dev.

once you are able to see the laravel debug screen click on the generate app key.

you can click admin on the mysql section of xampp, this will take you to phpmyadmin.

create a new database.

in your .env change db name to the name of the db you just made.

change username to root, make the password blank.

run php artisan migrate in the command line. This will create your tables automatically to store data.

you can now go to /login and /register and the data will save to your db, adjust your frontend however you like.

all of your js files are in resources/js and your css is in resources/css.
