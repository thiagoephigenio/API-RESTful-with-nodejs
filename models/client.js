const db = require('./db');

const Client = function (client){
    this.id = client.id;
    this.name = client.name;
    this.email = client.email;
}

Client.getAll = result => {     
    db.then(connection => {
      connection.query({sql:"SELECT * FROM Clientes"})
        .then(rows => result(null, rows))
          .catch(err => result(null, err)); 
        connection.destroy;
    }).catch(err => result(null, "Not connected due to error:" + err));      
}

Client.insert = (client, result) => {     
  db.then(connection => {
    connection.query({sql:"INSERT INTO Clientes (name,email) VALUE (?,?)"},[client.name,client.email])
      .then(rows => result(null, rows))
        .catch(err => result(null, err)); 
        connection.destroy;
  }).catch(err => result(null, "Not connected due to error:" + err));      
}

Client.update = (client, result) => {     
  db.then(connection => {
    connection.query({sql:"UPDATE Clientes SET name = ?, email = ? WHERE id = ?"},
    [client.name, client.email, client.id])
      .then(rows => result(null, rows))
        .catch(err => result(null, err)); 
        connection.destroy;
  }).catch(err => result(null, "Not connected due to error:" + err));      
}


Client.delete = (client, result) => {     
  db.then(connection => {
    connection.query({sql:"DELETE FROM Clientes WHERE id = ?"},[client.id])
      .then(rows => result(null, rows))
        .catch(err => result(null, err)); 
        connection.destroy;
  }).catch(err => result(null, "Not connected due to error:" + err));      
}

module.exports = Client;