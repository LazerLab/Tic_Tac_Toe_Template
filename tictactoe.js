function initialize() {
  $('.square').click(function() {
     if ($(this).html() == '') { // prevent overwriting
      if (myid == 1) { // which player am I?
        if (moves[1] > moves[2]) return; // abort if I'm Player 1 have made more moves
      } else {
        if (moves[1] <= moves[2]) return; // abort if I'm Player 2 and have the same number of moves 
      }
      submit($(this).attr('id')); // submit my move
    }
  });
  updateUI();
}
function newMove(participant, index) {
  fetchMove(participant, currentRound, index, function(val) {
    var mark = 'X';
    if (participant == 2) mark = 'O';
    $('#'+val).html(mark);
    updateUI();
  });
}

function updateUI() {
  if (moves[1] + moves[2] == 9) { // move 0 for each
    $('#instruction').html('Game Over <a href="'+WAITING_ROOM_URL+'">Return to waiting room</a>');
    experimentComplete();
    return;  
  }
  if (myid == 1) {
    if (moves[1] == moves[2]) {
      $('#instruction').html('Your move.');
    } else {
      $('#instruction').html('Please wait for the other player.');
    }
  } else {
    if (moves[1] == moves[2]+1) {
      $('#instruction').html('Your move.');
    } else {
      $('#instruction').html('Please wait for the other player.');
    }
  }
}