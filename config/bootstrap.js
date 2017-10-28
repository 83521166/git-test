/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  var person = {"City": "Hawaii", "Price":"$4000", "Class":"Economy","Deal":"10/29/2017","Quota":"100","daterange":"10/01/2017-10/31/2017","Image":"http://www.cheapflightslab.com/wp-content/uploads/2017/03/paradise-beach-sunset-at-big-island-hawaii-usa.jpg"};

    Person.create(person).exec( function(err, model) {});

 person = {"City": "Walnut Creek", "Price":"$5000", "Class":"Business","Deal":"10/29/2017","Quota":"200","daterange":"10/01/2017-10/31/2017","Image":"https://media.fclmedia.com/global-images/fc/holidays/sliders/hawaii/fc-web-beach_breaks-hero-banner_hawaii-02_960x296.jpg"};

    Person.create(person).exec( function(err, model) {});

    person = {"City": "Rocky Mountain", "Price":"$6000", "Class":"Business","Deal":"10/29/2017","Quota":"300","daterange":"10/01/2017-10/31/2017","Image":"http://www.marriotthawaii.com/media/1501/hawaii-home-hero-small.jpg"};

  Person.create(person).exec( function(err, model) {});

  person = {"City": "peru", "Price":"$7000", "Class":"Economy","Deal":"10/29/2017","Quota":"400","daterange":"10/01/2017-10/31/2017","Image":"https://1xbuf0262g0e3eimqo2anvwk-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/hiking_in_hawaii.jpg"};

  Person.create(person).exec( function(err, model) {});

  cb();
};
