/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 */
Ext.define('Admin.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    requires: [
        'Ext.plugin.Viewport',
        'Admin.view.main.Header',
        'Admin.view.main.MainController',
        'Admin.view.main.MainModel'
    ],
    controller: 'main',
    viewModel: 'main',
    layout: 'border',
    items: [{
        xtype: 'admin-header'
    }, {
        xtype: 'panel',
        layout: 'card',
        reference: 'main-view',
        region: 'center',
        style: 'background-color: #fff',
        items: []
    }]
});
