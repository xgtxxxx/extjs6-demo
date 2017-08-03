Ext.define('Admin.view.user.UserForm', {
    extend: 'Ext.panel.Panel',
    xtype: 'user-form',
    layout: 'form',
    defaultType: 'textfield',
    layout: {
        type: 'vbox',
        align: 'center'
    },
    tbar: {
        xtype: 'toolbar',
        style: 'background-color: #f2f2f2',
        items: [{
            xtype: 'button',
            iconCls: 'glyphicon glyphicon-arrow-left',
            text: 'Back',
            listeners: {
                click: 'backToUserList'
            }
        }, '-' , {
            xtype: 'label',
            bind: {
                text: '{formTitle}'
            }
        }, '->', {
            xtype: 'button',
            iconCls: 'glyphicon glyphicon-ok',
            text: 'Save',
            listeners: {
                click: 'saveUser'
            }
        }]
    },
    items: [{
        id: 'user-form-view',
        margin: '10',
        xtype: 'form',
        width : '50%',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%',
            labelAlign: 'right'
        },
        items: [{
            xtype: 'hidden',
            name: 'id'
        },{
            xtype: 'combo',
            store: ["DEV", "HR", "QA", "Other"],
            queryModel: 'local',
            fieldLabel: 'Department',
            name: 'department',
            allowBlank: false,
            validateOnChange: true
        },{
            fieldLabel: 'Name',
            name: 'name',
            allowBlank: false,
            validateOnChange: true
        },{
            xtype: 'radiogroup',
            fieldLabel: 'Gender',
            columns: 2,
            vertical: true,
            items: [
                { boxLabel: 'Man', name: 'gender', inputValue: '1', checked: true},
                { boxLabel: 'Female', name: 'gender', inputValue: '2'}
            ],
            allowBlank: false,
            validateOnChange: true
        },{
            fieldLabel: 'Email',
            vtype: 'email',
            required: true,
            allowBlank: false,
            name: 'email',
            validateOnChange: true
        },{
            fieldLabel: 'Phone',
            name: 'phone',
            allowBlank: false,
            validateOnChange: true
        }]
    }]
})