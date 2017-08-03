Ext.define('Admin.view.user.UserList', {
    extend: 'Ext.panel.Panel',
    xtype: 'user-list',
    layout: 'border',
    items: [{
        region: 'west',
        width: 200,
        xtype: 'treepanel',
        border: true,
        title: 'Departments',
        store: {
            xtype: 'treestore',
            root: {
                expanded: true,
                children: [
                    { text: 'All', leaf: true},
                    { text: 'HR', leaf: true},
                    { text: 'Develop', expanded: true, children: [
                        { text: 'DEV', leaf: true },
                        { text: 'QA', leaf: true}
                    ] },
                    { text: 'Other', leaf: true }
                ]
            }
        },
        rootVisible: false,
        listeners: {
            itemclick: 'selectByDepartment'
        }
    },{
        id: 'user-list-view',
        region: 'center',
        border: true,
        xtype: 'gridpanel',
        padding: '0 0 0 5',
        style: 'background-color: #fff',
        store: {
            type: 'users'
        },
        columns: [
            { text: 'ID',  dataIndex: 'id' },
            { text: 'Department', dataIndex: 'department'},
            { text: 'Name',  dataIndex: 'name' },
            { text: 'Gender',  dataIndex: 'gender', renderer: function(val){return val==1 ? 'Man' : 'Female';} },
            { text: 'Email', dataIndex: 'email', flex: 1 },
            { text: 'Phone', dataIndex: 'phone', flex: 1 },
            {
                header : 'Edit',
                width : 80,
                xtype:'actioncolumn',
                items: [{
                    iconCls: 'glyphicon glyphicon-edit',
                    tooltip: 'Show Detail',
                    handler: 'editUser'
                }]
            }
        ],
        listeners: {
            rowdblclick : 'removeRow'
        },
        tbar: [
            {
                xtype: 'label',
                text: 'User List'
            },
            {
                xtype: 'label',
                bind: {
                    text: ' {department}'
                }
            },
            '->',
            {xtype: 'textfield'},
            {xtype:'button', iconCls: 'glyphicon glyphicon-search', listeners: {click: 'doSearch'}},
            '-',
            {xtype: 'button', iconCls: 'glyphicon glyphicon-plus-sign', listeners: {click: 'newUser'}}
        ],
        bbar: {
            xtype: 'pagingtoolbar',
            displayInfo: true
        }
    }]
})