sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], (Controller, MessageToast, MessageBox) => {
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
        
        },*/

        onPressCheckout: function (){ 

            var oInputFName = this.getView().byId("idInptFName"); 
            var oInputLName = this.getView().byId("idInptLName"); 

            var oInputFNameValue = oInputFName.getValue(); 
            var oInputLNameValue = oInputLName.getValue(); 

            var oRouter = this.getOwnerComponent().getRouter(); 

            MessageBox.alert("Checkout button pressed", { styleClass: "customMessageBox",
                onClose: function() {
                    // Check if first name and last name is blank 
                    if (oInputFNameValue === "" || oInputLNameValue === ""){ 
                        // set value state to Error 
                        oInputFName.setValueState("Error"); 
                        oInputLName.setValueState("Error"); 
                    } else { 
                        oInputFName.setValueState("None"); 
                        oInputLName.setValueState("None"); 

                        //Navigate to review page passing first 
                        oRouter.navTo("RouteReviewPage", { firstName: oInputFNameValue }); 
                    } 
                }
            });
            
        }, 

        onAddItem: function (){ 
                // Comment this code for now 
                // var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle(); 
                // var sMsg = oTextBundle.getText("addButtonMsg"); 
                // this.fnDisplayMsg(sMsg);     

                /*---------------------------Fragments and Routers part--------------------------*/   
                // Instantiate the fragment
                // create dialog lazily 

                if (!this.oDialog) { 

                    // By using loadFragment, we are adding the fragment as a dependent to the View 
                    // By doing so, we can use the functions inside the view's controller 
                    this.oDialog = this.loadFragment({ 
                        name: "com.training.exer5mendoza.fragment.ProductDialog" 
                    }); 
                }  
                    this.oDialog.then(function(oDialog) { 
                    oDialog.open(); 
                }); 

        },
        
        onCloseDialog: function (){ 
            this.getView().byId("idProductDialog").close(); 
        }, 

        onPressSave: function (){
            MessageBox.alert("Save button pressed", { styleClass: "customMessageBox" });
        }

    });
});