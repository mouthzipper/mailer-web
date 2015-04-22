'use strict';

var TemplateController = function ( $state, $scope, TemplateServices ) {
	var vm = this;
	vm.templates = [];

	var templateList = TemplateServices.getTemplateList();
	templateList.then( function ( response ) {
		vm.templates = response.data;
	} );

	vm.deleteTemplate = function ( id ) {
		var deleteTemplate = TemplateServices.deleteTemplateById( id );
		deleteTemplate.then( function ( response ) {
			vm.templates.splice( vm.templates.indexOf( id ), 1 );
		} );
	}
}

module.exports = TemplateController;
