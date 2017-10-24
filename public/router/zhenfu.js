/**
 * Created by cendawei on 2017/10/13.
 */
module.exports = [
    {
        path: '/',
        redirect: '/zhenfu/p1'
    },
    {
        path: '/zhenfu/p1',
        name: 'zhenfu-p1',
        component: resolve => require(['@/components/zhenfu/p1'], resolve)
    },
    {
        path: '/zhenfu/p2',
        name: 'zhenfu-p2',
        component: resolve => require(['@/components/zhenfu/p2'], resolve)
    },
    {
        path: '/zhenfu/p3',
        name: 'zhenfu-p3',
        component: resolve => require(['@/components/zhenfu/p3'], resolve)
    },
    {
        path: '/zhenfu/p4',
        name: 'zhenfu-p4',
        component: resolve => require(['@/components/zhenfu/p4'], resolve)
    },
    {
        path: '/zhenfu/p5',
        name: 'zhenfu-p5',
        component: resolve => require(['@/components/zhenfu/p5'], resolve)
    },
    {
        path: '/zhenfu/p6',
        name: 'zhenfu-p6',
        component: resolve => require(['@/components/zhenfu/p6'], resolve)
    },
    {
        path: '/zhenfu/p7',
        name: 'zhenfu-p7',
        component: resolve => require(['@/components/zhenfu/p7'], resolve)
    },
    {
        path: '/zhenfu/admin',
        name: 'zhenfu-admin',
        component: resolve => require(['@/components/zhenfu/admin'], resolve)
    }
]