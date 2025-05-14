function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value;
  });
  return vars;
}

function getUrlParam(parameter, defaultvalue) {
  var urlparameter = defaultvalue;
  if (window.location.href.indexOf(parameter) > -1) {
    urlparameter = getUrlVars()[parameter];
  }
  if (urlparameter !== undefined) {
    return urlparameter;
  } else {
    return defaultvalue;
  }
}

const etus = [
  "21907444", "22106663", "22402297", "22103694", "22103239",
  "22010591", "22011542", "22115319", "21902693", "22107067",
  "22003618", "22100269", "22023506", "22100794", "21304717",
  "22313455", "22000507", "22400523", "22403787", "mpelleau"
];

var num = getUrlParam('num', '');
var path = "https://webusers.i3s.unice.fr/~mpelleau/ressources/tp6-2025/";
var filename = path + num + ".pdf";
// alert(num)
// alert(path)
// alert(filename)

if (num == "" || !etus.includes(num)) {
  document.getElementById("error").style.display = "initial"
} else {
  location.replace(filename)
}