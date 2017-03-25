// Action for resetLocMenus button

// reset subjects array
locations = ["Choose Location"];

// clear locations in form (this should also clear dependent fields)
this.resetForm(["loc_01", "loc_02", "loc_03", "loc_04", "loc_05", "loc_06"]);

for (var i in locationMenus) {

// get name of location menu
var thisLocationMenu = this.getField(locationMenus[i]);

// put locations array into location menu (resets every menu)
thisLocationMenu.setItems(locations); 

}