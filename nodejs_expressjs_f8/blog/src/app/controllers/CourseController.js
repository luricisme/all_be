const Course = require('../models/Course');
const {mongooseToObject} = require('../../util/mongoose');

class CourseController{
    // [GET] /courses/:slug
    show(req, res, next){
        Course.findOne({ slug: req.params.slug})
            .then((course) => {
                res.render('courses/show', {course: mongooseToObject(course)});
            })
            .catch(next);
        // res.send('COURSE DETAIL - ' + req.params.slug);
    }

    // [GET] /courses/create
    create(req, res, next){
        res.render('courses/create');
    }

    // [POST] /courses/store
    store(req, res, next){
        // res.json(req.body);
        const course = new Course(req.body);
        course.save()
            .then(() => {
                res.redirect('/');
            })
            .catch(err => {

            })
    }
}

module.exports = new CourseController;

