import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
import Dashboard from '../pages/Dashboard'
// const Dashboard = lazy(() => import('../pages/Dashboard'))
// const Forms = lazy(() => import('../pages/Forms'))
// const Cards = lazy(() => import('../pages/Cards'))
// const Charts = lazy(() => import('../pages/Charts'))
// const Buttons = lazy(() => import('../pages/Buttons'))
// const Modals = lazy(() => import('../pages/Modals'))
// const Tables = lazy(() => import('../pages/Tables'))
const NotFound = lazy(() => import('../pages/NotFound'))
const CreateService = lazy(() => import('../pages/Service/CreateService'));
const Services = lazy(() => import('../pages/Service/Services'));
const Departments = lazy(() => import('../pages/Department/Departments'));
const CreateDepartment = lazy(() => import('../pages/Department/CreateDepartment'));
const Member = lazy(() => import('../pages/Member/Members'));
const CreateMember = lazy(() => import('../pages/Member/CreateMember'));

// const Blank = lazy(() => import('../pages/Blank')) 
/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  { 
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/services',
    component: Services
  },
  {
    path: '/create/service',
    component: CreateService
  },
  {
    path: '/departments',
    component: Departments
  },
  {
    path: '/create/department',
    component: CreateDepartment
  },
  {
    path: '/medical-staff',
    component: Member
  },
  {
    path: '/create/medical-staff',
    component: CreateMember
  },
//   {
//     path: '/forms',
//     component: Forms,
//   },
//   {
//     path: '/cards',
//     component: Cards,
//   },
//   {
//     path: '/charts',
//     component: Charts,
//   },
//   {
//     path: '/buttons',
//     component: Buttons,
//   },
//   {
//     path: '/modals',
//     component: Modals,
//   },
//   {
//     path: '/tables',
//     component: Tables,
//   },
  {
    path: '/404',
    component: NotFound,
  },
//   {
//     path: '/blank',
//     component: Blank,
//   },
]

export default routes
