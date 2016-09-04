function myFunction(li){
    var con= "";
    var inputs = document.querySelectorAll("input[type=text]");
    for (var i = 0; i < inputs.length; i++) {
        con += inputs[i].value;
    }
    var list = document.createElement("li");
    var node = document.createTextNode(con);
    list.appendChild(node);
    document.getElementById("li").appendChild(list);
    document.getElementById('form').reset();
}
/**
 * Created by adila on 04-09-2016.
 */
