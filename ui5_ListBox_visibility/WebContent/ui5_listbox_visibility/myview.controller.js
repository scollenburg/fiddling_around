sap.ui.controller("ui5_listbox_visibility.myview", {

	mdata : {
		uistate : { showshapes : true, showcolors : true },
		viewdata : {
			formname : "Visibility testbed",
			shape_list : [
					{ id : "0", text : "Circle" },
					{ id : "1", text : "Point" },
					{ id : "2", text : "Line" },
					{ id : "3", text : "Triange" },
					{ id : "4", text : "Square" } ],
			color_list : [
					{ id : "650", text : "Red" },
					{ id : "590", text : "Orange" },
					{ id : "589", text : "Yellow" },
					{ id : "510", text : "Green" },
					{ id : "475", text : "Blue" },
					{ id : "445", text : "Indigo" },
					{ id : "400", text : "Violet" } ]

		} },

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf ui5_listbox_visibility.myview
	 */
	onInit : function() {

		var view = this.getView();

		this.oModel = new sap.ui.model.json.JSONModel(this.mdata);
		view.setModel(this.oModel);

	},
	/**
	 * Similar to onAfterRendering, but this hook is invoked before the
	 * controller's View is re-rendered (NOT before the first rendering!
	 * onInit() is used for that one!).
	 * 
	 * @memberOf ui5_listbox_visibility.myview
	 */
	// onBeforeRendering: function() {
	//
	// },
	/**
	 * Called when the View has been rendered (so its HTML is part of the
	 * document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * 
	 * @memberOf ui5_listbox_visibility.myview
	 */
	// onAfterRendering: function() {
	//
	// },
	/**
	 * Called when the Controller is destroyed. Use this one to free resources
	 * and finalize activities.
	 * 
	 * @memberOf ui5_listbox_visibility.myview
	 */
	// onExit: function() {
	//
	// }
	toggleUIState : function(uiState) {

		var f = this.oModel.getProperty("/uistate/" + uiState);
		if (f) {
			f = false;
		} else {
			f = true;
		}
		this.oModel.setProperty("/uistate/" + uiState, f);
		this.oModel.refresh();

	},

});