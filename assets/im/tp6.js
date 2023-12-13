function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  return vars;
}

function getUrlParam(parameter, defaultvalue) {
  var urlparameter = defaultvalue;
  if(window.location.href.indexOf(parameter) > -1){
      urlparameter = getUrlVars()[parameter];
  }
  if (urlparameter !== undefined) {
    return urlparameter;
  } else {
    return defaultvalue;
  }
}

const etus = [
  "21802830", "22002800", "21922413", "21711253", "22311452", 
  "22307874", "22307847", "22309788", "22003906", "22003820", 
  "21911332", "22201925", "22311722", "22308279", "22000918", 
  "20407874", "22307861", "22307805", "22307809", "22001238", 
  "22004959", "22006324", "22111155", "22015636", "22311513", 
  "22314352", "22309784", "22307843", "21400382", "22308384", 
  "21906009", "22307831", "22006634", "22025076", "22111427", 
  "22027706", "21905268", "22312247", "22307871", "22307839", 
  "22307864", "21921478", "22307889", "22309791", "22211799", 
  "22300446", "22204537", "21802370", "22310659", "22008374", "mpelleau"
];

var num = getUrlParam('num','');
var path = "https://webusers.i3s.unice.fr/~mpelleau/ressources/tp6-2023/";
var filename = path + num + ".pdf";
// alert(num)
// alert(path)
// alert(filename)

if (num == "" || !etus.includes(num)) {
  document.getElementById("error").style.display = "initial"
} else {
  location.replace(filename)
}