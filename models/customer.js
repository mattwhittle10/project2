var orm = require('../config/orm');

var customer = {
    updateUser: function(object, condition, cb){
        orm.updateUser('customers', object, condition, cb);
    }
};

module.exports = customer;