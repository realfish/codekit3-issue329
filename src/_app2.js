let foo = class {
	static bar(strings, ...values) {  
	}
};

(function() {
	let id = 'id1';
	foo.bar`
		<tag1 
			id="${id}"
		>
	`;
})();

(function() {
	let id = 'id2';
	foo.bar`
		<tag2 
			id="${id}"
		>
	`;
})();

