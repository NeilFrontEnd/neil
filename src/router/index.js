import Vue from 'vue'
import Router from 'vue-router'
import full from '@/container/full'
import hello from '@/components/Hello'
import general from '@/components/general'
import wedget from '@/components/wedget'
import table from '@/components/data'
import test from '@/components/test'
import test1 from '@/components/testpage/test1'
import test2 from '@/components/testpage/test2'

//database
import database from '@/components/database/index'
import databasedetail from '@/components/database/detail'
import login from '@/pages/singlepage/login'

Vue.use(Router)

const router =  new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: '',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/hello',
      name: 'Home',
      component:full,
      children: [
        {
          path: '/hello',
          name: 'hello',
          component: hello
        },
        {
          path: '/general',
          name :'general',
          component: general
        },
        {
          path: '/wedget',
          name: 'wedget',
          component: wedget

        },
        {
          path: '/table',
          name: 'table',
          component: table

        },
        {
          path: '/test',
          name: 'test',
          redirect: '/test/test1',
          component: test,
          children:[
            {
              path: 'test1',
              name: 'test1',
              component: test1
            },
            {
              path: 'test2',
              name: 'test2',
              component: test2
            }
          ]
        },
        {
          path: '/database',
          name: 'database',
          // redirect: '/database/detail',
          component: database,
          children:[
            {
              path: 'detail',
              name: 'detail',
              component: databasedetail
            }
          ]
        }
      ]
    },
    {
      path: '/page',
      redirect: '/page/login',
      name: 'Pages',
      component: {
          render (c) { return c('router-view') }
      },
      children:[
        {
          path: 'login',
          name: 'pagelogin',
          component: login
        }
      ]
    }
  ]
})


export default router