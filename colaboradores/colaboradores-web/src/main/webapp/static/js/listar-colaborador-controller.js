angular.module("appColaborador")

.controller("listaColaboradorController", function($scope,$http){

	$scope.colaboradores = [];
	$scope.colaborador = {};


	$scope.cargos = [];
	//$scope.cargo = {};

	var init = function() {
		$scope.carregarColaboradores();
		};
	
	
	//Simple GET request example:
	$scope.carregarColaboradores = function(){
		$http({
		  method: 'GET',
		  url: 'colaborador'
		}).then(function (response) {
			$scope.colaboradores = response.data;
			console.log(response.status);
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
	
	//Simple POST request example:
	$scope.excluirColaborador = function(colaborador){
		$http({
		  method: 'DELETE',
		  url: 'colaborador/colaboradores/'+colaborador.idColaborador
		}).then(function (response) {
			pos = $scope.colaboradores.indexOf(colaborador);
			$scope.colaboradores.splice(pos, 1);
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

	init();
	
});