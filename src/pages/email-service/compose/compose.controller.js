'use strict';

var ComposeController = function ( $http, $state ) {
	var vm        = this;
	vm.title      = 'Compose';
	vm.mail       = {};
	vm.submitForm = submitForm;

	function submitForm () {
		var data = { from : vm.mail.from, to : vm.mail.to, subject : vm.mail.subject, text : vm.mail.text };
		var req = {
			method  : 'POST',
			url     : 'http://192.168.1.5:8005/emails/send',// replace with docker ip
			data    : data,
			headers : { 'Content-Type': 'application/json' }
		};
		$http( req )
			.success( function( response ){
				$state.go( 'email.inbox' );
			} )
			.error( function ( error ) {
				console.log( error );
			} );
	}
};
ComposeController.$inject = [ '$http', '$state' ];

module.exports = ComposeController;
