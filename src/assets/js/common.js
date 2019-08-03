require('assets/css/common.css');
require('assets/js/flexible.debug.js');

import Vue from 'vue'
//解决click点击300毫秒延时问题
/*import FastClick from 'fastclick';
FastClick.attach(document.body);*/

import  { ToastPlugin ,ConfirmPlugin} from 'vux'
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)

