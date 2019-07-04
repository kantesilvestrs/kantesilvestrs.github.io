/// <reference path="../lib/require.js" />

define("config", ['jquery'], function ($) {

	var cityModules = [
		"smartonclimate_module",
        "ourstory_module",
		"credits_module",
		"facesofclimate_module"
	];

	var siteModules = [
		"zoom_module",
		"resource_loader",
		"video_loader_module"
	];

	var merge_options = function(obj1,obj2){
		var obj3 = {};
		for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
		for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
		return obj3;
	}

	return {
	    cityModules: cityModules,
	    merge_options: merge_options,
	    siteModules: siteModules,
		merge_options: merge_options
	}
});