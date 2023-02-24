var dice_points = document.getElementsByClassName("dice-point")
var dice_rows = document.getElementsByClassName("dice-row")
var status = document.getElementById("status")

var dice1 =  {
    element: document.getElementById("dice1"),
    value: undefined
}

var dice2 = {
    element: document.getElementById("dice2"),
    value: undefined
}

//Dice styling
function hidePoints(point_indexes){
    for(var i=0 ; i<point_indexes.length ; ++i)
        dice_points[point_indexes[i]].style.visibility = "hidden"
}

function collapsePoints(point_indexes){
    for(var i=0 ; i<point_indexes.length ; ++i)
        dice_points[point_indexes[i]].style.display = "none"
}

function hideRows(row_indexes){
    for(var i=0 ; i<row_indexes.length ; ++i)
        dice_rows[row_indexes[i]].style.visibility = "hidden"
}

function collapseRows(row_indexes){
    for(var i=0 ; i<row_indexes.length ; ++i)
        dice_rows[row_indexes[i]].style.display = "none"
}

function styleDice(){
   hidePoints([0,5])
   collapsePoints([2])
}



//Game Functionality
function getDiceValue(){
    return Math.random() * 6 + 1;
}

dice1.value = getDiceValue()
dice2.value = getDiceValue()

styleDice()