angular.module("appColaborador", ['ngRoute'])

.config(function($routeProvider){
	$routeProvider
	
	.when("/home",{
		templateUrl: "templates/listaColaboradores.html",
		controller: "listaColaboradorController"
	})
	
	//.when("/criarColaborador",{
	//	templateUrl: "templates/criarColaborador.html",
	//	controller: "criarColaboradorController"
	//})

	$routeProvider.otherwise({redirectTo:"/home"});
})
