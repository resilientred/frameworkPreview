//User service used for articles REST endpoint
window.app.factory("Users", function($resource){
	return $resource(window.restful.baseURL+'/users/:userID', {userID:'@_id'}, {
		login: {method: 'POST', params:{userID:'session'}}
	});
});