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

    });
});