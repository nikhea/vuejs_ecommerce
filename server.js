// server.js
const express = require('express');
// var path = require('path');
const serveStatic = require('serve-static');
const app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log('vue serve started')
});


// import Vue from 'vue'
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'

// Vue.use(Vuetify)

// const opts = {}

// export default new Vuetify(opts)
// If using vuetify-loader use the content below:

// // src/plugins/vuetify.js

// import Vue from 'vue'
// import Vuetify from 'vuetify/lib'

// Vue.use(Vuetify)

// const opts = {}

// export default new Vuetify(opts)
// Navigate to your main entry point where you instantiate your Vue instance and pass the Vuetify object in as an option.

// // src/main.js

// import Vue from 'vue'
// import vuetify from '@/plugins/vuetify' // path to vuetify export

// new Vue({
//   vuetify,
// }).$mount('#app')


















// import Vue from 'vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// // Install BootstrapVue
// Vue.use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)
// And import Bootstrap and BootstrapVue css files:

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// Alternatively you can import Bootstrap and BootstrapVue scss files in a custom SCSS file:

// @import 'node_modules/bootstrap/scss/bootstrap';
// @import 'node_modules/bootstrap-vue/src/index.scss';
// Make sure to import the custom.scss file in your app entry point:

// import './custom.scss'