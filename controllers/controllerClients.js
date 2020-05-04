const Client = require('../models/client')

exports.findAll = (req, res) => {
    Client.getAll((err, data) => {
        if (err)
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving clients."
            });
        else res.status(200).send(data);
    });        
}

exports.register = (req, res) => {
    const client = req.body;

    Client.insert(client, (err, data) => {
        if (err)
            res.status(500).send({
            message:
                err.message || "Some error occurred while register client."
            });
        else res.status(200).send(data);
    });        
}

exports.update = (req, res) => {
    const client = req.body;

    Client.update(client, (err, data) => {
        if (err)
            res.status(500).send({
            message:
                err.message || "Some error occurred while register client."
            });
        else res.status(200).send(data);
    });        
}

exports.delete = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const client = req.body;

    Client.delete(client, (err, data) => {
        if (err)
            res.status(500).send({
            message:
                err.message || "Some error occurred while register client."
            });
        else res.status(200).send(data);
    });        
}