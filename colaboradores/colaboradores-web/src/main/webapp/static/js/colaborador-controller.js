angular.module("appColaborador")

.controller("listaColaboradorController", function($scope,$http){

	$scope.colaboradores = [];
	$scope.colaborador = {};
	
	
	//Simple GET request example:
	$scope.carregarColaboradores = function(){
		$http({
		  method: 'GET',
		  url: '/colaboradores'
		}).then(function (response) {
			$scope.colaboradores = response.data;
			console.log(response.status);
		  }, function (response) {
			  console.log(response.data);
			  console.log(response.status); 
		  });
	};
	
	$scope.carregarColaboradores();
	
	
	//Simple POST request example:
	$scope.salvarColaboradores = function(){
		$http({
		  method: 'POST',
		  url: '/colaboradores',
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
		  url: '/colaboradores/'+colaborador.idColaborador
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
	
});