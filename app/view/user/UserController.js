Ext.define('Admin.view.user.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user',
    selectByDepartment: function(tree, record, item, index){
        if(record.isLeaf()) {
            var department = record.get('text');
            this.getViewModel().set('department', '['+department+']');
            var userStore = this.getView().queryById('user-list-view').getStore();
            userStore.reload({
                params: {
                    department: department
                },
                callback: function(records, operation, success) {
                    var rs = records;
                    if(department != 'All'){
                        rs = [];
                        for(var i= 0, l = records.length; i<l; i++){
                            if(records[i].get('department') == department){
                                rs.push(records[i]);
                            }
                        }
                    }

                    userStore.setRecords(rs);
                },
                scope: this
            });
        }
    },
    doSearch: function(btn){
        var queryField = btn.previousNode('textfield');
        var filterString = queryField.getRawValue();
        var store = this.getView().queryById('user-list-view').getStore();
        store.reload({
            callback: function(records){
                if(filterString) {
                    var fields = store.getAt(0).getFields();
                    for(var i=0; i<store.getCount(); i++){
                        var record = store.getAt(i);
                        for(var j=0;j<fields.length;j++){
                            var field = fields[j];
                            var strValue = record.get(field.name).toString();
                            if(strValue.indexOf(filterString) != -1){
                                record.set(field.name, "<font color='red'>"+strValue+"</font>")
                            }
                        }
                    }
                }
            }
        });
    },
    newUser: function(){
        var form = this.getView().queryById('user-form');
        form.down('form').reset();
        this.getViewModel().set('formTitle', 'Add a new User');
        this.getView().getLayout().setActiveItem(form);
        form.el.slideIn('r', {
            easing : 'easeOut',
            duration : 500
        });
    },
    backToUserList: function(){
        var item = this.getView().down('user-list');
        this.getView().getLayout().setActiveItem(item);
        item.el.slideIn('l', {
            easing : 'easeOut',
            duration : 500
        });
    },
    editUser: function(grid, rowIndex, colIndex){
        var me = this.getView();
        var record = grid.getStore().getAt(rowIndex);
        var form = this.getView().queryById('user-form');
        form.down('form').loadRecord(record);
        this.getViewModel().set('formTitle', 'Edit User');
        this.getView().getLayout().setActiveItem(form);
        form.el.slideIn('r', {
            easing : 'easeOut',
            duration : 500
        });
    },
    saveUser: function(){
        var me = this;
        var view = this.getView();
        var form = view.queryById('user-form').down('form');
        if(form.isValid()){
            Ext.Msg.confirm('Confirm', 'Do you want to save?', function(btn){
                if (btn == 'yes'){
                    var data = form.getValues();
                    Ext.Ajax.request({
                        url: 'admin/user',
                        method: 'POST',
                        waitTitle: 'Connecting',
                        waitMsg: 'Please waiting ... ...',
                        jsonData: data,
                        success: function(){
                            me.backToUserList();
                        },
                        failure: function(){
                            Ext.Msg.alert("Error", "Failed to save user!");
                        }
                    });
                }
            });
        }
    }
})