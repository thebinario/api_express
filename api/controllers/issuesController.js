// const pool = require('../infra/connection');
const Pool = require("pg").Pool;
const config = require("config");

module.exports = app => {
    const pool = new Pool({
        user: config.get('database.user'),
        host: config.get('database.host'),
        database: config.get('database.database'),
        password: config.get('database.password'),
        port: config.get('database.port')
    });

    controller = {};

    controller.getIssues = (req, res) => {
        pool.query(
            "SELECT id, label, status, priority FROM issues",
            [],
            (error, results) => {
                if (error) {
                    throw error;
                }

                res.status(200).json(results.rows);
            });

    };

    controller.postIssues = (req, res) => {
        const { id, label, status, priority } = req.body;

        pool.query(
            "INSERT INTO issues (id, label, status, priority) VALUES ($1, $2, $3, $4)",
            [id, label, status, priority],
            (error, results) => {
                if (error) {
                    throw error;
                }

                res.sendStatus(201);
            }
        );
    }

    controller.getById = (req, res) => {
        const { id } = req.params;

        pool.query(
            "SELECT id, label, status, priority FROM issues WHERE id = $1",
            [id],
            (error, results) => {
                if (error) {
                    res.status(404).json(`error`);
                }

                res.status(200).json(results.rows);
            }
        );
    }

    controller.putIssues = (req, res) => {
        const { id } = req.params;
        const { label, status, priority } = req.body;

        pool.query(
            "UPDATE issues SET label = $1, status = $2, priority = $3 WHERE id = $4",
            [label, status, priority, id],
            (error, results) => {
                if (error) {
                    throw error;
                }

                res.sendStatus(200);
            }
        );
    }

    controller.deleteIssues = (req, res) => {
        const { id } = req.params;

        pool.query("DELETE FROM issues WHERE id = $1", [id], (error, results) => {
            if (error) {
                throw error;
            }

            res.sendStatus(200);
        });
    }

    return controller
}