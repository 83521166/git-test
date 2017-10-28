/**
 * PersonController
 *
 *
 * @description :: Server-side logic for managing People
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    //create function
    create: function(req, res) {

        if (req.method == "POST") {
            Person.create(req.body.Person).exec(function(err, model) {
                return res.send("Successfully Created!");
            });
        } else {
            return res.view('person/create');
        }
    },
    // json function
    json: function(req, res) {
        Person.find().exec(function(err, persons) {
            return res.json(persons);
        });
    },
    // index function
    index: function(req, res) {
        Person.find().paginate({
            page: req.query.page,
            limit: 6
        }).exec(function(err, persons) {
            Person.count().exec(function(err, value) {
                var pages = Math.ceil(value / 6);
                return res.view('person/index', {
                    'persons': persons,
                    'count': pages
                });
            });
        });
    },

    //admin function
    admin: function(req, res) {

        Person.find().paginate({
            page: req.query.page,
            limit: 5
        }).exec(function(err, persons) {
            Person.count().exec(function(err, value) {
                var pages = Math.ceil(value / 5);
                Person.find().exec(function(err, persons) {
                    return res.view('person/admin', {
                        'persons': persons,
                        'count': pages
                    });
                });
            });
        });
    },

    //view function
    view: function(req, res) {
        Person.findOne(req.params.id).exec(function(err, model) {
            if (model != null) {
                return res.view('person/view', {
                    'persons': model
                });

            } else {
                return res.send("Person not found");
            }
        });
    },

    //delete function
    delete: function(req, res) {
        Person.findOne(req.params.id).exec(function(err, model) {
            if (model != null) {
                model.destroy();
                return res.send("Person Deleted");
            } else {
                return res.send("Person not found");
            }
        });
    },

    // update function
    update: function(req, res) {
        if (req.method == "GET") {
            Person.findOne(req.params.id).exec(function(err, model) {
                if (model == null) return res.send("No such person!");
                else return res.view('person/update', {
                    'person': model
                });
            });
        } else {
            Person.findOne(req.params.id).exec(function(err, model) {
                model.Class = req.body.Person.Class;
                model.Region = req.body.Person.Region;
                model.Price = req.body.Person.Price;
                model.Deal = req.body.Person.Deal;
                model.Image = req.body.Person.Image;
                model.Quota = req.body.Person.Quota;
                model.Class = req.body.Person.Class;
                model.daterange = req.body.Person.daterange;
                model.save();
                return res.send("Record updated");
            });
        }
    },
    // search function
    search: function(req, res) {
        Person.find().where({
            Region: {
                contains: req.query.Region
            }
        }).where({
            Price: {
                contains: req.query.Price
            }
        }).where({
            Dates: {
                contains: req.query.daterange
            }
        }).sort('Region').exec(function(err, persons) {
            return res.view('person/search', {
                'persons': persons
            });
        })
    },
    // search function
    paginate: function(req, res) {
        Person.find().paginate({
            page: req.query.page,
            limit: 4
        }).exec(function(err, persons) {
            Person.count().exec(function(err, value) {
                var pages = Math.ceil(value / 2);
                return res.view('person/search', {
                    'persons': persons,
                    'count': pages
                });
            });
        });
    },
};