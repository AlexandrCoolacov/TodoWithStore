import VueRouter from 'vue-router'
import ActiveList from './components/pages/ActiveList'
import CompletedList from './components/pages/CompletedList'
import FullList from './components/pages/FullList'

export default new VueRouter({
    routes: [
        {
            path: '',
            component: FullList
        },
        {
            path: '/active',
            component: ActiveList
        },
        {
            path: '/completed',
            component: CompletedList
        },

    ],
    mode: 'history'
})