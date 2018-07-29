import AboutPage from './pages/about.vue';
import MembersPage from './pages/members.vue';
import NotificationsPage from './pages/notifications.vue';
import HomePage from './pages/home.vue';

export default [
  {
    path: '/',
    component: HomePage,
    tabs: [
      {
        path: '/',
        id: 'tab-1',
        component: MembersPage
      },
      {
        path: '/tab-notifications/',
        id: 'tab-2',
        component: NotificationsPage
      },
      {
        path: '/tab-about/',
        id: 'tab-3',
        component: AboutPage
      }
    ]
  }
]