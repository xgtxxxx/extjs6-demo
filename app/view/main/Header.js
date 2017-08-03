Ext.define('Admin.view.main.Header', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.admin-header',
    cls: 'admin-nav',
    region: 'north',
    height: 100,
    items:[
        {
            xtype:'label',
            cls: 'glyphicon glyphicon-fire admin-logo',
            text:'AdminOS',
            listeners : {
                render : function() {
                    Ext.fly(this.el).on('click', 'redirectToHome');
                }
            }
        }, {
            xtype: 'label',
            cls: 'nav-item',
            bind:{
                class: '{active=="User" ? "nav-active" : ""}'
            },
            text: 'User',
            listeners : {
                render : function() {
                    Ext.fly(this.el).on('click', 'redirectToUser');
                }
            },
            setClass: function(cls){
                this.removeCls('nav-active');
                this.addCls(cls);
            }
        }, {
            xtype: 'label',
            cls: 'nav-item',
            bind:{
                class: 'nav-item {active=="Image" ? "nav-active" : ""}'
            },
            text: 'Image',
            listeners : {
                render : function() {
                    Ext.fly(this.el).on('click', 'redirectToImage');
                }
            },
            setClass: function(cls){
                this.removeCls('nav-active');
                this.addCls(cls);
            }
        }, {
            xtype: 'label',
            cls: 'nav-item',
            bind:{
                class: '{active=="Link" ? "nav-active" : ""}'
            },
            text: 'Link',
            listeners : {
                render : function() {
                    Ext.fly(this.el).on('click', 'redirectToLink');
                }
            },
            setClass: function(cls){
                this.removeCls('nav-active');
                this.addCls(cls);
            }
        }
        ,'->',
        {
            xtype:'label',
            cls: 'admin-welcome',
            bind:{
                text:'welcome：{user.name}',
            }
        },
    ]
})