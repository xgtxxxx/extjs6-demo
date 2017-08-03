Ext.define('Admin.view.user.UserView', {
    extend: 'Ext.panel.Panel',
    requires:[
        'Admin.view.user.UserList',
        'Admin.store.Users',
        'Admin.view.user.UserController',
        'Admin.view.user.UserForm'
    ],
    controller: 'user',
    margin: '5',
    layout: 'card',
    items: [{
        xtype: 'user-list'
    }, {
        xtype: 'user-form',
        id: 'user-form'
    }]
})