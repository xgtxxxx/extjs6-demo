Ext.define('Admin.store.Users', {
    extend: 'Ext.data.JsonStore',
    alias: 'store.users',
    fields: [
        'id', 'department', 'name', 'gender', 'email', 'phone'
    ],
    proxy: {
        type: 'ajax',
        url: 'app/data/users.json',
        reader: {
            type: 'json',
            rootProperty: 'users'
        }
    },
    autoLoad: true
});
