import Vue from 'vue'
import App from './App.vue'
import CKEditor from 'ckeditor4-vue';

Vue.use( CKEditor );
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
