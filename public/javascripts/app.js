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
	var DnDItem = app.namespace("dnd.item");
	var item = $(".item");
	DnDItem.setEvent = function() {
		$(document).on("dragstart drag drop dragend", ".item", function(e) {
			console.log( e.type );
		});
	}
})();

app.dnd.item.setEvent();
