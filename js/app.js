(function($, owner) {

	owner.createState = function(info, callback) {
		var state = owner.getState();
		state.name = info.name;
		state.dept = info.dept;
		state.token = "token123456789";
		owner.setState(state);
		return callback();
	};


	/**
	 * 获取当前状态
	 **/
	owner.getState = function() {
		var stateText = localStorage.getItem('$state') || "{}";
		return JSON.parse(stateText);
	};

	/**
	 * 设置当前状态
	 **/
	owner.setState = function(state) {
		state = state || {};
		localStorage.setItem('$state', JSON.stringify(state));
	};


	/**
	 * 获取应用本地配置
	 **/
	owner.setSettings = function(settings) {
		settings = settings || {};
		localStorage.setItem('$settings', JSON.stringify(settings));
	}

	/**
	 * 设置应用本地配置
	 **/
	owner.getSettings = function() {
		var settingsText = localStorage.getItem('$settings') || "{}";
		return JSON.parse(settingsText);
	}
	/**
	 * 设置应用本地配置
	 **/
	owner.has_login = function() {
		var state=owner.getState();
		if(state.token){
			return true;
		}else{
			return false;
		}
	}
}(mui, window.app = {}));