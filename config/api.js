var config = require('./index');
var host = config.api.host;

var api = {
	login:host+'/user/login',
	database:host+'/user/getdatabase'
}

export default api