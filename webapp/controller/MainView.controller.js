sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("com.training.exer5mendoza.controller.MainView", {
        onInit() {
        },

        onAddItem: function (){ 
                this.fnDisplayMsg("Add button pressed"); 
            }, 

            fnDisplayMsg: function (sMsg){ 
            MessageToast.show(sMsg); 

        }, 

        onChangeMOP: function (oEvent) { 

                var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key"); 
                
                //get text of selected key
                var sSelectedKeyText = oEvent.getParameter("selectedItem").getText();

                var oMobileLabel = this.getView().byId("idLblPhone"); 
                var oMobileInput = this.getView().byId("idInputPhone"); 

                var oCCLabel = this.getView().byId("idLblCCDetails");
                var oCCInput = this.getView().byId("idInputCCDetails");

                //initialize elements before selection
                oMobileLabel.setVisible(false); 
                oMobileInput.setVisible(false); 
                    
                oCCLabel.setVisible(false); 
                oCCInput.setVisible(false); 

                if (sSelectedKey === "GCASH"){ 
                    // show the mobile field 
                    oMobileLabel.setVisible(true); 
                    oMobileInput.setVisible(true); 
                } 
                else if (sSelectedKey === "CC"){
                    //show credit card details field
                    oCCLabel.setVisible(true); 
                    oCCInput.setVisible(true); 
                } 

                //show MessageToast based on selection
                sap.m.MessageToast.show(sSelectedKeyText);

            },

        onPressCheckout: function (){ 

            var oInputFNameValue = this.getView().byId("idInptFName").getValue(); 
            var oInputLNameValue = this.getView().byId("idInptLName").getValue(); 

            // Check if first name is blank 
            /*if (oInputFNameValue === ""){ 
                sap.m.MessageToast.show("Required Field is blank");  
            }*/ 

            //Check if first and last names are blank
            if (oInputFNameValue === "" && oInputLNameValue === "" ){ 
                sap.m.MessageToast.show("First and Last Names are blank");  
            }

        },

        onAddItem: function (){ 
                var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle(); 
                var sMsg = oTextBundle.getText("addButtonMsg"); 
                this.fnDisplayMsg(sMsg); 
            } 

    });
});