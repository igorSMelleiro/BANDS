function abrir() {
    var main = document.getElementById("central");
    var iten = main.getElementsByTagName("input");
    if (iten) {
        for (var i=0;i<iten.length;i++) {
            iten[i].onclick = function() {
                var el = document.getElementById(this.id.substr(7,7));
                if (el.style.display == "block")
                    el.style.display = "none";
                else
                    el.style.display = "block";
            }
        }
    }
}
window.onload=abrir;