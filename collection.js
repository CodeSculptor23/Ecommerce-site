var productcontainer = document.getElementById("products");
var search = document.getElementById("search");
var productlist = productcontainer.querySelectorAll("div");

search.addEventListener("keyup", function(event) {
    var entervalue = event.target.value.toUpperCase();

    for (var i = 0; i < productlist.length; i += 1) {
        var productname = productlist[i].querySelector("p").textContent;

        if (productname.toUpperCase().indexOf(entervalue) < 0) {
            productlist[i].style.display = "none";
        } else {
            productlist[i].style.display = "block";
        }
    }
});
