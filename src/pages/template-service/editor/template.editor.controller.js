'use strict';

var TemplateEditorController = function ( $state, $scope, TemplateServices, $stateParams, $sce ) {
	var vm = this;

	vm.mode = $stateParams.mode || 'edit';

	console.log( vm.mode );
	vm.templateDetails = {
			name : '',
			description : '',
			content : ''
		};

	vm.createNewTemplate = function () {
		TemplateServices.createTemplate( vm.templateDetails ).then( function () {
			$state.go( 'template' );
		} );
	};

	vm.updateTemplate = function ( id ) {
		delete vm.templateDetails.id;
		TemplateServices.updateTemplate( id, vm.templateDetails ).then( function () {
			$state.go( 'template' );
		} );
	};

	if( vm.mode === 'create' ) {
		vm.greeting = 'Manage templates.';

		vm.editorMode = 'Create New template';

	} else if ( vm.mode === 'edit' ) {
		vm.editorMode = 'Edit template';
		TemplateServices.getTemplateById( $stateParams.id ).then( function ( response ) {
			vm.templateDetails = response.data;
		} );

	} else if ( vm.mode === 'view' ) {
		vm.editorMode = 'View template';
		TemplateServices.getTemplateById( $stateParams.id ).then( function ( response ) {
			vm.templateDetails = response.data;

			var compiled = hogan.compile( vm.templateDetails.content );

			$scope.$watchCollection( '[ name, description, content ]', function () {
				vm.templateDetails = $sce.trustAsHtml( compiled.render( $scope ) );
			} );
		});
	}

};

module.exports = TemplateEditorController;
