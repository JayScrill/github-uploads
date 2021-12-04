
//Hide Boxes Buttons 1 to 3

function myFunction() {
    var x = document.getElementById('box1');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction2() {
    var x = document.getElementById('box2');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction3() {
    var x = document.getElementById('box3');
    if (x.style.display === "none") {
        x.style.display = "block";
    }

    else {
        x.style.display = "none";
    }
}

//Button to change color for Box 1

function myFunc() {
    if (document.getElementById('box1').style.backgroundColor == "purple") {
        document.getElementById('box1').style.backgroundColor = "white";
    } else {
        document.getElementById('box1').style.backgroundColor = "purple";
    }

}

//Button to change color for Box 2

function myFunc2() {
    if (document.getElementById('box2').style.backgroundColor == "pink") {
        document.getElementById('box2').style.backgroundColor = "gray";
    } else {
        document.getElementById('box2').style.backgroundColor = "pink";
    }
}

//This Is A Test

/*function myFunc3() {
    if (document.getElementById('box3').style.backgroundColor == "orange") {
        document.getElementById('box3').style.backgroundColor = "blue";
    }

    else {
        document.getElementById('box3').style.backgroundColor = "orange";
    }
}*/

// Box 3 Change Using Random Colors

$(document).ready(function() {
    $('#color_3').click(function() {
    var color = '#'+Math.floor(Math.random()*16777215).toString(16);
        $('#box3').css('background-color', color);
    });
});


/* Buttons That Effect All Boxes*/

//Hide All Boxes

$(document).ready(function() {
    $('#hide').on('click', function() {
    $('#box1 , #box2 , #box3').hide();
});

});

//To Show All Boxes

$(document).ready(function() {
    $('#show_All').on('click', function() {
    $('#box1 , #box2 , #box3').show(2000);
});

});

// This code is a test code 

/*$(document).ready(function() {
    $('#change').on('click', function() {
    $('#box1 , #box2 , #box3').css('background-color', '#3d7388');
});

});*/

//To Give Random Colors To All Boxes

$( document ).ready(function() {
    $('#change').click(function() {
        var color = '#'+Math.floor(Math.random()*16777215).toString(16);
        $('#box1, #box2, #box3').css('background-color', color );
    });
});     