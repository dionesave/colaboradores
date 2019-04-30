angular.module("appColaborador")

.controller("criarColaboradorController", function($scope,$http){

	$scope.colaboradores = [];
	$scope.colaborador = {};


	$scope.cargos = [];
	$scope.cargo = {};

	var init = function() {
		$scope.carregarCargos();
	};
	
	//Carregamento cargo
	$scope.carregarCargos = function(){
		$http({
		  method: 'GET',
		  url: 'cargo'
		}).then(function (response) {
			$scope.cargos = response.data;
			console.log(response.status);
			console.log($scope.cargos);
		  }, function (response) {
			  console.log(response.data);
			  console.log(response.status); 
		  });
	};

	//Simple POST request example:
	$scope.salvarColaboradores = function(){
		$http({
		  method: 'POST',
		  url: 'colaborador/colaboradores',
		  data: $scope.colaborador
		}).then(function (response) {
			$scope.colaboradores.push(response.data);
		  }, function (response) {
			  console.log(response.data);
			  console.log(response.status); 
		  });
	};
	
	
	$scope.alterarColaborador = function(col){
		$scope.colaborador = angular.copy(col);
	};
	
	

	$scope.cancelarAlterarColaborador = function(){
		$scope.colaborador = {};
	};

	
	init();
	
});