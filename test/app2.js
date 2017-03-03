var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\t\t<tag1 \n\t\t\tid="', '"\n\t\t>\n\t'], ['\n\t\t<tag1 \n\t\t\tid="', '"\n\t\t>\n\t']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t\t<tag2 \n\t\t\tid="', '"\n\t\t>\n\t'], ['\n\t\t<tag2 \n\t\t\tid="', '"\n\t\t>\n\t']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var foo = function () {
	function foo() {
		_classCallCheck(this, foo);
	}

	_createClass(foo, null, [{
		key: 'bar',
		value: function bar(strings) {}
	}]);

	return foo;
}();

(function () {
	var id = 'id1';
	foo.bar(_templateObject, id);
})();

(function () {
	var id = 'id2';
	foo.bar(_templateObject2, id);
})();
