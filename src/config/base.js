'use strict';

// Settings configured here will be merged into the final config object.
export default {
    tableConfig: [
        {
            name: 'cost',
            title: '总花费',
            colSpan: 2
        },
        {
            name: 'pay',
            title: '成交额',
            colSpan: 2
        },
        {
            name: 'impressions',
            title: '展现量'
        },
        {
            name: 'click',
            title: '点击量'
        },
        {
            name: 'fav_count',
            title: '收藏数'
        },
        {
            name: 'pay_count',
            title: '成交数'
        },
        {
            name: 'ctr',
            title: '点击率'
        },
        {
            name: 'cpc',
            title: '平均花费'
        },
        {
            name: 'cvr',
            title: '转化率'
        },
        {
            name: 'roi',
            title: 'ROI'
        }
    ],
    footerLink: [
        {
            'address': '/',
            'title': '首页',
            'icon': 'index'
        },
        {
            'address': '/manage',
            'title': '管理',
            'icon': 'test2'
        },
        {
            'address': '/manage_important_adgroups',
            'title': '重点宝贝',
            'icon': 'test3'
        },
        {
            'address': '/manage_important_keywords',
            'title': '标星词',
            'icon': 'test4'
        },
        {
            'address': '/more',
            'title': '更多',
            'icon': 'test5'
        }
    ]
}
