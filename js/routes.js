;
(function() {
	var routes = angular.module("routes", []);
	routes.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
		$stateProvider.state("index", {
			url: "/index",
			templateUrl: "template/index.html",
		}).state("index.home", {
			url: "/home",
			templateUrl: "template/home.html",
		}).state("index.contacts", {
			url: "/contacts",
			templateUrl: "template/contacts.html"
		}).state("index.good", {
			url: "/good",
			templateUrl: "template/good.html"
		}).state("index.job", {
			url: "/job",
			templateUrl: "template/job.html"
		}).state("index.ask", {
			url: "/ask",
			templateUrl: "template/ask.html"
		}).state("new", {
			url: "/new",
			templateUrl: "template/new.html",
		}).state("api", {
			url: "/api",
			templateUrl: "template/xapi.html",
		}).state("detail", {
			url: "/detail/:id",
			templateUrl: "template/detail.html"
		})
		$urlRouterProvider.when("", "/index/home")
	}])
})();