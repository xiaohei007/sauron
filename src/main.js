// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import store from './store/index'
import 'url-search-params-polyfill' //兼容formData数据格式转化
import ElementUI  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Toast from './common/Toast'


import axios from 'axios'
Vue.config.productionTip = false

// Vue.use(ElementUI);
Vue.component('formToast',Toast)
new Vue({
  el: '#app',
  // router,
  store,
  components: {
    App
  }
})
// 拖动指令
Vue.directive('drag', {
  // 当绑定的元素插入到 DOM 时调用此函数……
  bind: function (el) {
    el.style.position = 'absolute'
    el.style.cursor = 'pointer'
    el.style['z-index'] = '10'
    var currX = 0;
    var currY = 0;
     el.addEventListener('mousedown',function(e){
        currX =   e.clientX - el.offsetLeft;
        currY =   e.clientY - el.offsetTop;
       document.addEventListener('mousemove',move)
     })
    el.addEventListener('mouseup',function(e){
      document.removeEventListener('mousemove',move)
    })
    function move(e){
      e.preventDefault()
      el.style.left = e.clientX - currX + 'px';
      el.style.top = e.clientY - currY + 'px';
     }
  }
})
// // http请求拦截器
// axios.interceptors.request.use(config => {
//   //开始请求(拦截开始)
//   app.store.commit('setLoading',true);
//   return config
// }, error => {
//   //加载超时
//   app.store.commit('setLoading',false);
//   return Promise.reject(error)
// })
// // http响应拦截器
// axios.interceptors.response.use(data => { // 响应成功关闭loading
//   //响应拦截
//   app.store.commit('setLoading',false);
//   return data
// }, error => {
//   app.store.commit('setLoading',false);
//   return Promise.reject(error)
// })

