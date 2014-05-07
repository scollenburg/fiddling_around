sap.ui.jsview("ui5_listbox_visibility.myview", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf ui5_listbox_visibility.myview
	 */
	getControllerName : function() {
		return "ui5_listbox_visibility.myview";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf ui5_listbox_visibility.myview
	 */
	createContent : function(oController) {

		this.oC = oController;
		this.thisView = this;
		var _self = this;

		// Simple vertical Layout
		var oVerticalLayout = new sap.ui.layout.VerticalLayout(oController
				.createId("layoutRoot"));

		// Buttons for toggling visibility
		var oButton = new sap.ui.commons.Button(oController
				.createId("bshowshapes"), {
			text : "Toggle /uistate/showColors",
			press : function() {
				oController.toggleUIState("showshapes");
			}
		});
		oVerticalLayout.addContent(oButton);

		var oButton = new sap.ui.commons.Button(oController
				.createId("bshowcolors"), {
			text : "Toggle /uistate/showcolors",
			press : function() {
				oController.toggleUIState("showcolors");
			}
		});
		oVerticalLayout.addContent(oButton);

		// Give us a header
		oVerticalLayout.addContent(new sap.ui.commons.TextView({
			text : "{/viewdata/formname}",
			design : sap.ui.commons.TextViewDesign.H3
		}));
		oVerticalLayout.addContent(new sap.ui.commons.HorizontalDivider());

		// A matrix view for nice vertical column layout
		var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			columns : 2,
			layoutFixed : false
		});
		oVerticalLayout.addContent(oMatrix);

		/*
		 * Shapes row
		 */
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			hAlign : "End",
			separation : "None"
		});
		oCell.addContent(new sap.ui.commons.Label({
			text : "Shapes:",
			visible : "{/uistate/showshapes}"
		}));
		oRow.addCell(oCell);

		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		var olbShapes = new sap.ui.commons.ListBox(oController
				.createId("lbshapes"));

		olbShapes.bindAggregation("items", "/viewdata/shape_list",
				new sap.ui.core.ListItem({
					key : "{id}",
					text : "{text}"
				}));

		var oddShapes = new sap.ui.commons.DropdownBox(oController
				.createId("ddshapes"), {
			"association:listBox" : olbShapes,
			visible : "{/uistate/showshapes}"
		});

		/*
		 * If you comment out the next line, the drop-down will get no values.
		 */
		oCell.addContent(olbShapes);
		
		oCell.addContent(oddShapes);
		oRow.addCell(oCell);
		oMatrix.addRow(oRow); // Shapes

		/*
		 * Colors row
		 */
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			hAlign : "End",
			separation : "None"
		});
		oCell.addContent(new sap.ui.commons.Label({
			text : "Colors:",
			visible : "{/uistate/showcolors}"
		}));
		oRow.addCell(oCell);

		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		var olbColors = new sap.ui.commons.ListBox(oController
				.createId("lbcolors"));

		olbColors.bindAggregation("items", "/viewdata/color_list",
				new sap.ui.core.ListItem({
					key : "{id}",
					text : "{text}"
				}));

		var oddColors = new sap.ui.commons.DropdownBox(oController
				.createId("ddcolors"), {
			"association:listBox" : olbColors,
			visible : "{/uistate/showcolors}"
		});

		oCell.addContent(olbColors);
		oCell.addContent(oddColors);
		oRow.addCell(oCell);
		oMatrix.addRow(oRow); // Colors

		// * All done here *
		return oVerticalLayout;

	}

});
