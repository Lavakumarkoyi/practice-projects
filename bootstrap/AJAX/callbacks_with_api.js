function easyHttp() {
  this.http = new XMLHttpRequest();
}

var HttpObj = new easyHttp();

easyHttp.prototype.get = function(url) {
  HttpObj.http.open("GET", url, true);

  HttpObj.http.onload = function() {
    var a = JSON.parse(HttpObj.http.responseText);
    console.log(a, "Lavakumar");
  };
};

HttpObj.get("https://jsonplaceholder.typicode.com/posts");

HttpObj.http.send();
