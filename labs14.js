function Item(products) {
    var I_html = "";
    for (var i = 0; i < products.length; i++) {
        I_html += "<div class=\"col-md-4\">\n" +
            "                    <div class=\"section-1 text-center\">\n" +
            "                        <p class=\"name\"><b>" + products[i].name + "</b></p>\n" +
            "                        <img class=\"image\" src=\"" + products[i].image + "\"/>\n" +
            "                        <p class=\"price\"><b>$" + products[i].price + "</b></p>\n" +
            "                    </div>\n" +
            "                </div>";
    }
    return I_html;
}

function loadData(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200){
            var rs = this.responseText;
            rs = JSON.parse(rs);
            var products = rs.data.foods;
            var grid = document.getElementById("product");
            grid.innerHTML = Item(products);
        }
    }
    xhttp.open("GET", "https://foodgroup.herokuapp.com/api/category/3");
    xhttp.send();
}
loadData();