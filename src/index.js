import Vue from 'vue';
import MainCompontent from './components/Main.vue';
import Quasar from './quasar.common_full';
import Banner from './components/Banner.vue';

Vue.use(Quasar);

var app = new Vue({
    el: '#q-app',
    components: {
        'main-component': MainCompontent
    }
});
var banner = new Vue({
    el: '#q-banner',
    components: {
        'banner': Banner
    }
});