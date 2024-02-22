
//Task 2

var res = prompt("Please provide the button name for task 2:");

var s_submit = document.createElement("button");
s_submit.setAttribute("type", "button");
s_submit.setAttribute("id", "color");
s_submit.innerHTML = res;
s_submit.addEventListener("mouseover", function () {
    s_submit.style.color = "blue";
});
s_submit.addEventListener("mouseout", function () {
    s_submit.style.color = "black";
});
document.body.append(s_submit);
