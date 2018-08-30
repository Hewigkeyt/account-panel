# account-panel
Front end assignment for a technical test

## Overview
This mini web-app is a user control panel with editable name, email and password. It features default user information (no communication with external server nor effective update of the above-mentioned editable fields).

It was build with vue.js/nuxt.

## Requirements
* @fortawesome/fontawesome-svg-core ^1.2.2
* @fortawesome/free-solid-svg-icons ^5.2.0
* @fortawesome/vue-fontawesome ^0.1.1
* js-md5 ^0.7.3
* nuxt ^1.4.2
* nuxt-fontawesome ^0.3.0
* zxcvbn ^4.4.2

### dev
* eslint ^5.4.0
* eslint-plugin-vue ^5.0.0-beta.3

## Install
Clone the repository and run

    npm install


## Usage
###Start dev environment
run

    npm run dev

### Build
run

    npm run build
then

    npm run start

### Generate static files
run

    npm run generate

### Use Eslint
run

    npm run lint

## Detailed description
All components are using Font-Awesome for the icons.

### components/AccountPanel.vue
Main contents of the app.

Grabs the profile picture from Gravatar with a hash of the email address (always grabs default picture).

Tests the password strength with the plugin `zxcvbn`.

Uses validation for all fields.

See the comments inside the file for details about the methods etc.

### components/Title.vue

Title bar. Can be given an icon and a title.

### nuxt.config.js
Nuxt config file. You can change common plugins or files (e.g. main.css) among others.

### .eslintrc.js
Config file for eslint. Edit if you want new rules.
