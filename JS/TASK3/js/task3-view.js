
var impress = JSON.parse(localStorage.getItem("arr"));
console.log(impress);

$(document).ready(function () {
    for(var i = 0; i < impress.length; i++){
            var $degree = $("<div>").addClass("degree");
            var $name = $("<div>").addClass("name");
            var $degreename = $("<span>").addClass("degree-name");
            var $number = $("<div>").addClass("number");
            var $degreenumber = $("<span>").addClass("degree-number");
            $(".main").append(
                $degree.append(
                    $name.append(
                        $degreename
                    )
                ).append(
                    $number.append(
                        $degreenumber
                    )
                ));
            $degreename.text(impress[i])
            $degreenumber.text((i + 1) + "号")
        };
});

$(document).ready(function () {
    $(".start").click(function () {
        window.location.href = "../task4/task4-process.html"
    })
})



