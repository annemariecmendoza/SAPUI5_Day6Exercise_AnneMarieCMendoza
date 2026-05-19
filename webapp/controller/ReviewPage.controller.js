sap.ui.define([ 
    "sap/ui/core/mvc/Controller", 
    "sap/m/MessageToast",
    "sap/ui/core/routing/History",
    "sap/m/MessageBox"
],  

/** 
 * @param {typeof sap.ui.core.mvc.Controller} Controller 
 */ 

function (Controller, MessageToast, History, MessageBox) { 
"use strict"; 

    return Controller.extend("com.training.exer5mendoza.controller.ReviewPage", { 

        onInit: function () { 
            // Get the router object 
            var oRouter = this.getOwnerComponent().getRouter(); 

            oRouter.getRoute("RouteReviewPage").attachPatternMatched(this._onObjectMatched, this); 
        }, 

        _onObjectMatched: function (oEvent) { 
            // Get the passed value from arguments 
            var aArgs = oEvent.getParameter("arguments"); 

            // Display the first name value from previous page 
            MessageToast.show(aArgs.firstName); 
        },
        
        onPressBack: function () { 

                var oHistory = History.getInstance(); 
                var sPreviousHash = oHistory.getPreviousHash(); 
                var oRouter = this.getOwnerComponent().getRouter(); 

                MessageBox.alert("Back button pressed", { styleClass: "customMessageBox",
                    onClose: function () { 
                    if (sPreviousHash !== undefined) { 
                            window.history.go(-1); 
                        } else { 
                            oRouter.navTo("RouteMainView", {}, true); 
                        } 
                    
                    }
            });

        },

        onPressSave: function (){
            MessageBox.alert("Save button pressed", { styleClass: "customMessageBox" });
        }

    }); 

}); 