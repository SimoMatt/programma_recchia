// **************************** EXAM DATE TODAY PRECOMPILATION ****************************

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;
$("#exam-date").attr("value", today);





// **************************** AGE PRECOMPILATION ****************************

$("#birth-date").on('keyup change', function () {
    var birthDate = $("#birth-date").val();
    birthDate = birthDate.replace('-', '').replace('-', '');
    var ye = Number(birthDate.substr(0, 4));
    var mon = Number(birthDate.substr(4, 2)) - 1;
    var dy = Number(birthDate.substr(6, 2));
    var tod = new Date();
    var age = tod.getFullYear() - ye;
    if (tod.getMonth() < mon || (tod.getMonth() == mon && tod.getDate() < dy)) {
        age--;
    };

    $("#age").attr("value", age);

});





// **************************** PAGE BUTTONS FUNCTIONALITY ****************************

// ****************** hover style ******************
$("#page1-nxt-btn").hover(function () {
    $("#page1-nxt-btn img").addClass("icon-hover");
}, function () {
    $("#page1-nxt-btn img").removeClass("icon-hover");
});

$("#page2-nxt-btn").hover(function () {
    $("#page2-nxt-btn img").addClass("icon-hover");
}, function () {
    $("#page2-nxt-btn img").removeClass("icon-hover");
});

$("#page2-prv-btn").hover(function () {
    $("#page2-prv-btn img").addClass("icon-hover");
}, function () {
    $("#page2-prv-btn img").removeClass("icon-hover");
});


// ****************** functionality ******************
$("#page1").show();
$("#page2").hide();

$("#page1-nxt-btn").click(function () {
    $("#page1").hide();
    $("#page2").show();
});

$("#page2-prv-btn").click(function () {
    $("#page2").hide();
    $("#page1").show();
});






// **************************** PAGE 2 INPUTS CONTROL ****************************

$(".teeth-inputs").on('change keyup', function () {
    if ($(this).val() > 4) {
        $(this).val('4*');
    }
    if ($(this).val() < 0) {
        $(this).val('0');
    }
});






// **************************** TEETH GROUPS COLORATION ****************************

$("#input-one").on('keyup change', function () {
    if ($(this).val() == "4*") {
        input1 = "5";
    } else {
        input1 = $(this).val();
    };
    teethColoration($(this).val(), 1);
});

$("#input-two").on('keyup change', function () {
    if ($(this).val() == "4*") {
        input2 = "5";
    } else {
        input2 = $(this).val();
    };
    teethColoration($(this).val(), 2);
});

$("#input-three").on('keyup change', function () {
    if ($(this).val() == "4*") {
        input3 = "5";
    } else {
        input3 = $(this).val();
    };
    teethColoration($(this).val(), 3);
});

$("#input-four").on('keyup change', function () {
    if ($(this).val() == "4*") {
        input4 = "5";
    } else {
        input4 = $(this).val();
    };
    teethColoration($(this).val(), 4);
});

$("#input-five").on('keyup change', function () {
    if ($(this).val() == "4*") {
        input5 = "5";
    } else {
        input5 = $(this).val();
    };
    teethColoration($(this).val(), 5);
});

$("#input-six").on('keyup change', function () {
    if ($(this).val() == "4*") {
        input6 = "5";
    } else {
        input6 = $(this).val();
    };
    teethColoration($(this).val(), 6);
});


function teethColoration(inputValue, groupNumber) {

    var selection = ".group" + groupNumber + " #target";

    if (inputValue == "0") {
        $(selection).removeClass().addClass("teeth-ext");
    }
    if (inputValue == "1") {
        $(selection).removeClass().addClass("state-one");
    }
    if (inputValue == "2") {
        $(selection).removeClass().addClass("state-two");
    }
    if (inputValue == "3") {
        $(selection).removeClass().addClass("state-three");
    }
    if (inputValue == "4") {
        $(selection).removeClass().addClass("state-four");
    }
    if (inputValue == "4*") {
        $(selection).removeClass().addClass("state-four");
    }
};




// **************************** DATA TRANSMISSION TO PAGE 3 ****************************

var oname = "Nome Cognome";
var pname = "Nome Cognome";
var input1 = "0";
var input2 = "0";
var input3 = "0";
var input4 = "0";
var input5 = "0";
var input6 = "0";


$("#page2-nxt-btn").click(function () {

    oname = $("#oname-orig").val();

    pname = $("#pname-orig").val();

    var exdate = $("#exam-date").val();
    var day = exdate.slice(8, 10);
    var month = exdate.slice(5, 7);
    var year = exdate.slice(0, 4);
    exdate = day + " / " + month + " / " + year;

    if ($('input:radio[id=smoke-yes-input]:checked').val() == "") {
        var smoke = "yes";
    };

    if ($('input:radio[id=smoke-no-input]:checked').val() == "") {
        var smoke = "no";
    };

    var highest = Math.max(input1, input2, input3, input4, input5, input6);

    var path = "result" + highest + ".html" + "?" + "oname=" + oname + "&pname=" + pname + "&exdate=" + exdate + "&smoke=" + smoke + "&input1=" + input1 + "&input2=" + input2 + "&input3=" + input3 + "&input4=" + input4 + "&input5=" + input5 + "&input6=" + input6;

    $("#dataPath").attr("href", path);
});