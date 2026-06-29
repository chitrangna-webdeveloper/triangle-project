let angle1 = document.getElementById("angle1");
let angle2 = document.getElementById("angle2");
let angle3 = document.getElementById("angle3");

let checkBtn = document.getElementById("checkBtn");
let resetBtn = document.getElementById("resetBtn");
let result = document.getElementById("result");

checkBtn.addEventListener("click", function () {

    if (angle1.value == "" || angle2.value == "" || angle3.value == "") {
        alert("Please fill all input fields!");
        return;
    }

    let a = Number(angle1.value);
    let b = Number(angle2.value);
    let c = Number(angle3.value);

    if (a <= 0 || b <= 0 || c <= 0 || a + b + c != 180) {

        alert("Not a Valid Triangle!");

        result.innerText = "❌ Not a Valid Triangle";

    }

    else if (a == 60 && b == 60 && c == 60) {

        result.innerText = "✅ Equilateral Triangle";

    }

    else if (a == 90 || b == 90 || c == 90) {

        result.innerText = "✅ Right Triangle";

    }

    else if (a > 90 || b > 90 || c > 90) {

        result.innerText = "✅ Obtuse Triangle";

    }

    else if (a == b || b == c || a == c) {

        result.innerText = "✅ Isosceles Triangle";

    }

    else {

        result.innerText = "✅ Scalene Triangle";

    }

});

resetBtn.addEventListener("click", function () {

    angle1.value = "";
    angle2.value = "";
    angle3.value = "";

    result.innerText = "Result";

});