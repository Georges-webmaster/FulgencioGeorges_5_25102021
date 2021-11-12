let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    console.log(xmlhttp.responseText);
  }
};
xmlhttp.open("GET", "http://localhost:3000/api/products", true);
xmlhttp.send();
