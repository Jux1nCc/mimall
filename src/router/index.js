import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Index from '../views/index.vue'
import Product from '../views/product.vue'
import Detail from '../views/detail.vue'
import Cart from '../views/cart/index.vue'
import Order from '../views/order/index.vue'
import OrderList from '../views/order/orderList.vue'
import OrderPay from '../views/order/orderPay.vue'
import OrderConfirm from '../views/order/orderConfirm.vue'
import AliPay from '../views/order/alipay.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index
      },
      {
        path: '/product/:id',
        name: 'product',
        component: Product
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    children: [
      {
        path: 'list',
        name: 'order-list',
        component: OrderList
      },
      {
        path: 'confirm',
        name: 'order-confirm',
        component: OrderConfirm
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: OrderPay
      },
      {
        path: 'alipay',
        name: 'ali-pay',
        component: AliPay
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
