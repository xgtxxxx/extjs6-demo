Ext.define('Admin.view.home.Home', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Admin.view.home.HomeModel',
        'Admin.view.home.HomeController',
        'Admin.view.home.GridPart'
    ],
    reference: 'dashboard',
    viewModel: 'home',
    controller: 'home',
    layout:'column',
    items: [{
        columnWidth: 0.5,
        padding : '5',
        items: [{
            xtype: 'panel',
            title: 'First',
            border: 1,
            bind: {
                height: '{portalHeight}',
            },
            loader: {
                url: 'app/data/portal1.json',
                autoLoad: true
            }
        }, {
            xtype: 'panel',
            title: 'Second',
            border: 1,
            bind: {
                height: '{portalHeight}',
            },
            margin: '5 0 0 0',
            loader: {
                url: 'app/data/portal2.json',
                autoLoad: true
            }
        }]
    },{
        columnWidth: 0.5,
        padding : '5',
        items: [{
            xtype: 'panel',
            title: 'Third',
            border: 1,
            bind: {
                height: '{portalHeight}',
            },
            loader: {
                url: 'app/data/portal3.json',
                autoLoad: true
            }
        }, {
            xtype: 'grid-part',
            title: 'Fourth',
            margin: '5 0 0 0',
            bind: {
                height: '{portalHeight}',
            }
        }]
    }]
})