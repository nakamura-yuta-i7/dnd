app = {
	namespace: function(str) {
		var level, levels, obj, _i, _len;
		obj = this;
		levels = str.split('.');
		for (_i = 0, _len = levels.length; _i < _len; _i++) {
			level = levels[_i];
			if (typeof obj[level] === 'undefined') {
				obj[level] = {};
			}
			obj = obj[level];
		}
		return obj;
	}
};

(function() {
	var item = app.namespace("dnd.item");
	item.setEvent = function() {
		
	}
})();
