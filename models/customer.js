var orm = require('../config/orm');

var customer = {
    updateUser: function(cb){
        orm.updateUser("customers", OTHER VALUES function(res){
            cb(res);
        });
    }
};

module.exports = customer