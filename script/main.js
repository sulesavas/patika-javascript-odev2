function newElement() {
  var input = document.getElementById("task").value;
  var list = document.getElementById("list");
  var li = document.createElement("li");

  var t = document.createTextNode(input);
  li.appendChild(t);

  var close = document.createElement("span");
  close.className = "close";
  close.onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
    alert("Başarıyla silindi.");
  };
  close.append(document.createTextNode("x"));

  li.appendChild(close);
  list.append(li);

  alert("Listeye eklendi.");

  document.getElementById("task").value = "";
}
