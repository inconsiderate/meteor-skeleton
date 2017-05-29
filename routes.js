
Router.configure({
	loadingTemplate: 'loading',
	layoutTemplate: 'layout'
});

Router.route('/', {
    onAfterAction: function() {

    },
    waitOn: function () {
        return Meteor.subscribe('movies');
    },
    action: function() {
        this.render('header', {to: 'header'});
        this.render('footer', {to: 'footer'});
        this.render('landingPage', {to: 'content'});
    }
});

