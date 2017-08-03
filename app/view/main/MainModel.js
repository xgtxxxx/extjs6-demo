/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Admin.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    data: {
        user: {
            name : 'Gavin'
        },
        active: ''
    }
});
