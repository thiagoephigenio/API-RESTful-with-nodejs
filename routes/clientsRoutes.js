module.exports = app => {
    const controller = require('../controllers/controllerClients');

    app.get('/clients', controller.findAll);

    app.post('/client/register', controller.register);
        
    app.put('/client/update', controller.update);
    
    app.delete('/client/delete', controller.delete);
 }