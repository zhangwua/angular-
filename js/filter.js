;
(function() {
	var filters = angular.module("filters", [])
	filters.filter("html", ["$sce", function($sce) {
		return function(input) {
			return $sce.trustAsHtml(input);
		}
	}])
	
	filters.filter('timeDiff', function() {
    return function(input) {
        //JavaScript函数：
        var minute = 1000 * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var halfamonth = day * 15;
        var month = day * 30;
        var dateTimeStamp = new Date(input).getTime();
        var now = new Date().getTime();
        var diffValue = now - dateTimeStamp;
        if (diffValue < 0) {
            return input;
        }
        var monthC = diffValue / month;
        var weekC = diffValue / (7 * day);
        var dayC = diffValue / day;
        var hourC = diffValue / hour;
        var minC = diffValue / minute;
        if (monthC >= 1) {
            result = parseInt(monthC) + "个月前";
        } else if (weekC >= 1) {
            result = parseInt(weekC) + "周前";
        } else if (dayC >= 1) {
            result = parseInt(dayC) + "天前";
        } else if (hourC >= 1) {
            result = parseInt(hourC) + "个小时前";
        } else if (minC >= 1) {
            result = parseInt(minC) + "分钟前";
        } else {
            result = "刚刚发布";
        }
        return result;
    }
});
filters.filter('sceurl', ['$sce', function($sce) {
    return function(input) {
        return $sce.trustAsHtml(input);
    }
}]);
filters.filter('type', function() {
    return function(input) {
        var result = '';
        if (input == "share") {
            result = '分享';
        } else if (input == 'ask') {
            result = "问答";
        } else if (input == 'job') {
            result = '招聘';
        } else {
            result = '精华';
        }
        return result;
    }
});
filters.service('histoty', ['$window', function($window) {
    this.goback = function() {
        $window.history.back();
    }
}])
})();