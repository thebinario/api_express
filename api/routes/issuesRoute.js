module.exports = app => {
    // const controller = require('../controllers/issuesController');
    const controller = app.controllers.issuesController;

    app.route('/api/v1/issues')
        .get(controller.getIssues)
        .post(controller.postIssues);

    app.route('/api/v1/issues/:id')
        .get(controller.getById)
        .put(controller.putIssues)
        .delete(controller.deleteIssues);

}