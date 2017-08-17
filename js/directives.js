;
(function() {
	var directives = angular.module("directives", []);
	directives.directive("xheader", [function() {
		return {
			templateUrl: "directive/xheader.html",
			link: function(scope, ele, attr) {
				scope.direction = "left"
			}
		}
	}])
	directives.directive("xsearch", [function() {
		return {
			templateUrl: "directive/xsearch.html",
			link: function(scope, ele, attr) {
				scope.searchTitle = "";
				scope.isShowSearchBar = false;
				scope.changeSearchBar = function() {
					scope.isShowSearchBar = true;
				}
				scope.clearSearchTitle = function() {
					scope.searchTitle = "";
				}
			}
		}
	}])
	directives.directive("xswiper", ["$http", "$timeout", function($http, $timeout) {
		return {
			templateUrl: "directive/xswiper.html",
			link: function(scope, ele, attr) {
				scope.isLoadMore = 0
					//scope.imgs = ["images/1.jpg"];
				var swiper = new Swiper('.swiper-container', {
					pagination: '.swiper-pagination',
					paginationClickable: true
				});
				scope.isLoadMore++;
				$timeout(function() {
					$http({
						method: "GET",
						url: "swiperData.json",
					}).then(function(data) {
						console.log(data)
						scope.imgs = data.data.imgs
						scope.isLoadMore--;
					})
				}, 1000)
			}
		}
	}])
	directives.directive("xlist", ["$http", "$window", function($http, $window) {
		return {
			templateUrl: "directive/xlist.html",
			link: function(scope, ele, attr) {
				console.log(attr)
				scope.page = 1;
				scope.news = [];
				scope.loadMore = function() {
					scope.isLoadMore++;
					$http({
						method: "GET",
						url: "https://cnodejs.org/api/v1//topics",
						params: {
							page: scope.page++,
							tab: attr.channel,
							limit: 10
						}
					}).then(function(data) {
						scope.news = scope.news.concat(data.data.data)
						console.log(data)
						scope.isLoadMore--
					})
				}
				scope.loadMore();
				scope.goToDetail = function(id) {
					$window.location.href = "#!/detail/" + id
				}
				scope.goTop=function(){
					var timer = setInterval(function() {
							document.body.scrollTop = document.body.scrollTop - 50;
							if(document.body.scrollTop == 0) {
								clearInterval(timer)
							}
						}, 1)
				}
			}
		}
	}])
	directives.directive("xfooter", [function() {
		return {
			templateUrl: "directive/xfooter.html",
			link: function(scope, ele, attr) {
				scope.tab = 0;
				scope.changeTab = function(tab) {
					scope.tab = tab
				}
			}
		}
	}])
	directives.directive("xloading", [function() {
		return {
			templateUrl: "directive/xloading.html",
			link: function(scope, ele, attr) {}
		}
	}])
	directives.directive("xactionsheet", [function() {
		return {
			templateUrl: "directive/xactionsheet.html",
			link: function(scope, ele, attr) {
				scope.isShowActionSheet = false
				scope.changeActionSheet = function() {
					console.log("111")
					scope.isShowActionSheet = true
				}
			}
		}
	}])
	directives.directive("xgallery", [function() {
		return {
			templateUrl: "directive/xgallery.html",
			link: function(scope, ele, attr) {
				scope.isShowGallery = false;
				scope.changeGallery = function(galleryImg) {
					scope.galleryImg = galleryImg
					scope.isShowGallery = true;
				}
			}
		}
	}])
	directives.directive("xarticle", ["$state","$http",function($state,$http) {
		return {
			templateUrl: "directive/xarticle.html",
			link: function(scope, ele, attr) {
				console.log($state.params)
				$http({
					methods:"GET",
					url:"https://cnodejs.org/api/v1/topic/"+$state.params.id
				}).then(function(data){
					console.log(data)
					scope.data = data.data.data;
					scope.replies = scope.data.replies;
					 scope.content = scope.data.content;
				})
			}
		}
	}])
	directives.directive("new", ["$state","$http",function($state,$http) {
		return {
			templateUrl: "directive/new.html",
			link: function(scope, ele, attr) {
				console.log($state.params)
				$http({
					methods:"GET",
					url:"https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312"
				}).then(function(data){
					console.log(data)
					scope.data = data.data.data;
					scope.replies = scope.data.replies;
					 scope.content = scope.data.content;
				})
			}
		}
	}])
	directives.directive("xapi", ["$state","$http",function($state,$http) {
		return {
			templateUrl: "directive/xapi.html",
			link: function(scope, ele, attr) {
				console.log($state.params)
				$http({
					methods:"GET",
					url:"https://cnodejs.org/api/v1/topic_collect/alsotang"
				}).then(function(data){
					console.log(data)
					scope.news = data.data.data;
					scope.replies = scope.news.replies;
					 scope.content = scope.news.content;
				})
			}
		}
	}])
})();