'use strict';

var EmailTemplateServices = function ( $http ) {

	return {
		getTemplateList : function () {
			return $http( {
						method  : 'GET',
						url     : 'http://192.168.1.5:8005/templates'
					} )
					.then( function ( res ) {
						return res;
					} )
					.catch( function ( err ) {
						return err;
					} );
		},
		getTemplateById : function ( id ) {
			return $http( {
						method  : 'GET',
						url     : 'http://192.168.1.5:8005/templates/' + id
					} )
					.then( function ( res ) {
						return res;
					} )
					.catch( function ( err ) {
						return err;
					} );
		},
		createTemplate : function ( templateData ) {
			return $http( {
						method : 'POST',
						url    : 'http://192.168.1.5:8005/templates',
						data   : templateData
					} ).
					then( function ( res ) {
						return res;
					} )
					.catch( function ( err ) {
						return err;
					} );
		},
		updateTemplate : function ( id, templateData ) {
			return $http( {
						method : 'PUT',
						url    : 'http://192.168.1.5:8005/templates/' + id,
						data   : templateData
					} ).
					then( function ( res ) {
						console.log( res );
						return res;
					} )
					.catch( function ( err ) {
						return err;
					} );
		},
		deleteTemplateById : function ( id ) {
			return $http( {
						method : 'DELETE',
						url    : 'http://192.168.1.5:8005/templates/' + id
					} ).
					then( function ( res ) {
						return res;
					} )
					.catch( function ( err ) {
						return err;
					} );
		}
	};

};

EmailTemplateServices.$inject = [ '$http' ];

module.exports = EmailTemplateServices;
