if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to metronic.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

  Meteor.startup(function(){
  // test ie
  $('body').addClass('page-header-fixed');
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

