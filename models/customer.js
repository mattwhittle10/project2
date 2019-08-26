var orm = require('../config/orm');

var customer = {
    updateUser: function(cb){
        orm.updateUser('customers', 'first_name', val1, 'last_name', val2, 'username', val3, 'email_address', val4, 'phone_number', val5, 'thumbnail', val6, userId, cb, function(res){
            cb(res);
        });
    }
};

module.exports = customer;