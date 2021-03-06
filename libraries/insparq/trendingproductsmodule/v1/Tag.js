//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("insparq.trendingproductsmodule.v1.Tag", {
	config: {
		/*DATA*/
		name: "Trending Products Module",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Module",
			description: "module",
			token: "module",
			uv: ""
		}, {
			name: "Client API Key",
			description: "Client API Key",
			token: "key",
			uv: ""
		}, {
			name: "jQuery",
			description: "e.g. jQuery , $ , myJquery etc..",
			token: "jQuery",
			uv: ""
		}, {
			name: "jQuery Element Selector",
			description: "e.g. insertBefore(....) , insertAfter(.....) , appendTo(.....) etc..",
			token: "selector",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		var _this = this;
		(function() {
			eval(
				_this.valueForToken("jQuery") + '(\'<div id="iecw"></div>\').' +
				_this.valueForToken("selector")
			);

			var e = document.createElement('script');
			e.type = 'text/javascript';
			e.async = true;
			e.src = '//pinboard.insparq.com/assets/endcaps/insparq_endcaps.js';
			e.module = '' + _this.valueForToken("module") + '';
			e.apikey = '' + _this.valueForToken("key") + '';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(e, s);
		})();
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});