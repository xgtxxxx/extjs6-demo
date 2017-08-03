/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Admin.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    routes : {
        'home' : 'initHome',
        'user' : 'initUser',
        'image' : 'initImage',
        'link' : 'initLink'
    },
    redirectToHome : function() {
        this.redirectTo('home', true);
    },
    redirectToUser : function() {
        this.redirectTo('user', true);
    },
    redirectToImage : function() {
        this.redirectTo('image', true);
    },
    redirectToLink : function() {
        this.redirectTo('link', true);
    },
    initHome: function(){
        this.initView('Admin.view.home.Home');
        this.getViewModel().set('active', 'Home');
    },
    initUser: function(){
        this.initView('Admin.view.user.UserView');
        this.getViewModel().set('active', 'User');
    },
    initImage: function(){
        this.initView('Admin.view.image.ImageView');
        this.getViewModel().set('active', 'Image');
    },
    initLink: function(){
        this.initView('Admin.view.link.LinkView');
        this.getViewModel().set('active', 'Link');
    },
    initView: function(clazz){
        var mainView = this.lookupReference("main-view");
        var cards = mainView.getRefItems();
        var index = -1;
        for(var i=0; i<cards.length; i++){
            if(cards[i].$className == clazz){
                index = i;
                break;
            }
        }
        if(index == -1) {
            var newCard = Ext.create(clazz);
            if(clazz == 'Admin.view.home.Home'){
                newCard.getViewModel().set('portalHeight', mainView.getHeight()/2 - 10);
            }
            mainView.add(newCard);
            mainView.setActiveItem(mainView.getRefItems().length-1);
        }else{
            mainView.setActiveItem(index);
        }
    }
});
