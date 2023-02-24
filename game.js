var dice_points = document.getElementsByClassName("dice-point")
var dice_rows = document.getElementsByClassName("dice-row")
var status = document.getElementById("status")
var dice = document.getElementsByClassName("dice")
var score1 , score2

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

function styleDice(player_no , dice_value){

   var point_offset = (player_no == 0)?0:6 
   var row_offset = (player_no == 0)?0:3

   switch(dice_value){
        case 1:
            collapsePoints([point_offset+2])
            hideRows([row_offset+0 , row_offset+2])
            break;
        case 2:
            hidePoints([point_offset+0 , point_offset+5])
            hideRows([row_offset+1])
            break;
        case 3:
            hidePoints([point_offset+0 , point_offset+5])
            collapsePoints([point_offset + 2])
            break;
        case 4:
            hideRows([row_offset + 1])
            break;
        case 5:
            collapsePoints([point_offset + 2])        
   }
}



//Game Functionality
function getDiceValue(){
    return Math.floor(Math.random() * 6 + 1)
}

score1 = getDiceValue()
score2 = getDiceValue()

console.log(score1+" "+score2)

styleDice(0,score1)
styleDice(1,score2)

