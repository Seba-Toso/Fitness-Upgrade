'use strict'
require('colors')
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();
const {NODE_ENV} = process.env
console.log(`Envirorment set as: ${NODE_ENV}`.black.bgGreen)

const {

    PORT_TEST,
    HOST_TEST,
    HOST_URL_TEST,
    API_KEY_TEST,
    AUTH_DOMAIN_TEST,
    DATABASE_URL_TEST,
    PROJECT_ID_TEST,
    STORAGE_BUCKET_TEST,
    MESSAGING_SENDER_ID_TEST,
    APP_ID_TEST

} = process.env;

const {

    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID

} = process.env;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    firebaseConfig : {
        apiKey: NODE_ENV === 'test' ? API_KEY_TEST : API_KEY,
        authDomain: NODE_ENV === 'test' ? AUTH_DOMAIN_TEST : AUTH_DOMAIN,
        databaseURL: NODE_ENV === 'test' ? DATABASE_URL_TEST : DATABASE_URL,
        projectId: NODE_ENV === 'test' ? PROJECT_ID_TEST : PROJECT_ID,
        storageBucket: NODE_ENV === 'test' ? STORAGE_BUCKET_TEST : STORAGE_BUCKET,
        messagingSenderId: NODE_ENV === 'test' ? MESSAGING_SENDER_ID_TEST : MESSAGING_SENDER_ID,
        appId: NODE_ENV === 'test' ? APP_ID_TEST : APP_ID
    }
}