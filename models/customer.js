var orm = require('../config/orm');

var customer = {
    updateUser: function(cb){
        orm.updateUser("customers", function(res){
            cb(res);
        });
    }
};

module.exports = customer