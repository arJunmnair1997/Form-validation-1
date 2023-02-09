alert("Hello");
function valid() {
    let n = document.getElementById("name").value;
    let e = document.getElementById("email").value;
    let pack = document.getElementById("package").value;
    let d = document.getElementById("date").value;
    let no = document.getElementById("nop").value;
    let a1 = document.getElementById("avl-1").value;
    let a2 = document.getElementById("avl-2").value;
    let a3 = document.getElementById("avl-3").value;
    let ag = document.getElementById("agre").value;
    let dag = document.getElementById("dagre").value;

    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var checkedOne = false;

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkedOne = true;
            break;
        }
    }
    var radio = document.querySelectorAll('input[type="radio"]');
    var r1 = false;

    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            r1 = true;
            break;
        }
    }
    if (!r1) {
        alert("T and C.");
        return false;
    } else if (!checkedOne) {
        alert("Please select at least one checkbox.");
        return false;
    } else if (n == null || n == "") {
        document.getElementById("p-name").innerHTML = "Name is empty";
        return false;
    } else if (e == null || e == "") {
        document.getElementById("p-email").innerHTML = "Email is empty";
        return false;
    } else if (pack == null || pack == "") {
        alert("Package is empty");
        return false;
    } else if (d == null || d == "") {
        document.getElementById("p-date").innerHTML = "Select date";
        return false;
    } else if (no == null || no == "") {
        document.getElementById("p-nop").innerHTML =
            "Mention Number of persons";
        return false;
    } else if (!this.form.ch - box.checked) {
        alert("You must agree to the terms first.");
        return false;
    } else {
        return true;
    }
}
