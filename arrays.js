// Initial storing of items in metadata

// var subjects = ["Choose Subject"];
// var weather = ["Conditions", "Sunny", "Snow", "Rain", "Thunderstorm", "Cloudy", "Fog"];
// var visibility = ["Visibility", "Day/Clear", "Day/Limited", "Night/Well-lit", "Night/Dark"];
// var actions = ["Surveillance","Social Media","Trash Pull","Undercover Operation","Pretext Contact"];
// var equipment = ["Handicam", "DSL camera", "Audio Recorder"];
// var investigator = ["J.N."];
// var locations = ["Choose Location"];

// recall menu items arrays when opening 
var subjects = JSON.parse(this.info.rememberedSubjects);
var actions = JSON.parse(this.info.rememberedActions);
var weather = JSON.parse(this.info.rememberedWeather);
var visibility = JSON.parse(this.info.rememberedVisibility);
var locations = JSON.parse(this.info.rememberedLocations);
var equipment = JSON.parse(this.info.rememberedEquipment);
var investigator = JSON.parse(this.info.rememberedInvestigators);

// recall menus arrays when opening 
var subjectMenus = JSON.parse(this.info.rememberedSubMenus);
var actionMenus = JSON.parse(this.info.rememberedActMenus);
var conditionMenus = JSON.parse(this.info.rememberedConMenus);
var visibilityMenus = JSON.parse(this.info.rememberedVisMenus);
var locationMenus = JSON.parse(this.info.rememberedLocMenus);
var equipmentMenus = JSON.parse(this.info.rememberedEquipment);
var investigatorMenus = JSON.parse(this.info.rememberedInvestigators);

// Initial storing of menus in metadata

// var locationMenus = ["chooseLocation"];
// var actionMenus = ["chooseAction"];
// var conditionMenus = ["chooseWeather"];
// var visibilityMenus = ["chooseVisibility"];
// var subjectMenus = ["chooseSubject"];
// var equipmentMenus = ["chooseEquipment"];
// var investigatorMenus = ["chooseInvestigator"];

var templatesToDestroy = ["actions","brandSM","case_background","certification","cover","gen_info","misc","redact","selfDestruct","signature","staticFooter","subject_background","summary","techniques"];