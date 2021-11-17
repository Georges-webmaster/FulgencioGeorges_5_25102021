let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    displayProducts(JSON.parse(xmlhttp.responseText));
  }
};
xmlhttp.open("GET", "http://localhost:3000/api/products", true);
xmlhttp.send();

function displayProducts(data){
for(let i=0;i<data.length;i++){
  let items=document.getElementById("items");
  items.innerHTML+='<a href="./product.html?id=42">'+
  '<article>'+
  '<img src=".../product01.jpg"alt="Lorem ipsum dolor sit amet, Kanap name1"/>'+
  '<h3 class="productName">'+data[i].name+'</h3>'+
          '<p class="productDescription">'+
                'Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis'+
                'enim malesuada risus sapien gravida nulla nisl arcu.'+
              '</p>'+
            '</article>'+
          '</a>';
}
}
