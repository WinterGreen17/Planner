//Initial setup 
var list = [];
var index = 0;

list[0]="Do AP Comp Sci Principles Assignment";
list[1]="Work on English essay";
list[2]="Practice flute";

//Starter events
setScreen("welcome");
onEvent("start", "click", function() {
  setScreen("instructions");
}); //jump to instructions screen
onEvent("ok", "click", function() {
  setScreen("main");
}); //go to app screen


/*Main screen operations & events*/

//Initial setup
setText("tracking", index + 1 + " of " + list.length);
setText("text", list[index]); 

onEvent("next","click", function()
  {
    index++;
    updateDisplay();
  }); //"next" button
  
onEvent("last","click", function()
  {
    index--;
    updateDisplay();
  });//"last" button
onEvent("add","click", function()
  {
    var thing = getText("text_input","");
    appendItem(list, thing);
    updateDisplay();
   }); //add things to list

onEvent("remove","click", function()
  {
    if(list.length > 1) {
      removeItem(list, index);
      updateDisplay();
    }
   }); //remove item: you can't remove everything.


//function for updating display:
function updateDisplay() { 
  setBoundaries();
  showFinish();

  //Set tracking display
  setText("tracking", index + 1 + "of" + list.length);
  setText("text", list[index]);


}

function setBoundaries() { 
  if(index >= list.length) {
    index = 0;
  } //Scroll to first page
  if(index < 0) {
    index = list.length-1;
  } //Scroll to last page
}
function showFinish() { //Reward "I'm finished" button display
  if(index === 0 && list.length == 1) {
      showElement("button1");
      } else {
      hideElement("button1");
      }
}

//Work check settings:
onEvent("dropdown1", "change", function() {
  var hours = getText("dropdown1");
  if (hours >= 4) {
    setText("comment", "Yay you did it! Time to remove it out~");
    setProperty("comment", "text-color", rgb(randomNumber(5,100),randomNumber(10,255),randomNumber(10,255)));
    } else if(hours >= 2 && hours < 4){
    setText("comment", "It seems to me that you're working it~");
    setProperty("comment", "text-color", rgb(randomNumber(200,250),randomNumber(200,255),randomNumber(0,100)));
    } else if(hours <= 2){
    setText("comment", "Keep working! You're not doing it enough!");
    setProperty("comment", "text-color", rgb(255,randomNumber(0,80),randomNumber(0,30)));
    }

});

  

//Screen switching:
onEvent("confused", "click", function() {
  setScreen("instructions");
});
onEvent("button1", "click", function() {
  setScreen("done");
  doMusic();
});
onEvent("back", "click", function() {
  setScreen("welcome");
  stopSound();
});

//function for music:
function doMusic() {
  var music = promptNum("GREAT JOB! You can relax now by listening to music!! Now feel free to pick one of the following you're interested in by inputing the corresponding number to take you to the mysterious music you're going to hear:   1: A dream to pursue!! 2: Something hawt 3: Winter is NOT Coming  Cancel=No music");
  if (music == 1) {
    playSound("assets/David Garrett - Explosive.mp3", true);
    setText ("play", "Now Playing: Explosive");
  }
  if (music == 2) {
    playSound("初音ミク (初音未来) - 千本桜 (千本樱).mp3", true);
    setText ("play", "Now Playing: Senbonzakura");
  }
  if (music == 3) {
    playSound("assets/Orpheus Chamber Orchestra - Summer, Vivaldi four seasons.mp3", true);
    setText ("play", "Now Playing: Vivaldi, Summer 3rd Movement");
  }
}


/*Sources:
  The images used in this app came from: 
  [1] checking list image - http://static.adweek.com/adweek.com-prod/wp-content/uploads/sites/2/2016/04/twitter-list.jpg
  [2] Lemongrab meme image - https://savebeyonce.files.wordpress.com/2016/06/lemongrab-unacceptable-1024x571.png?w=940
  [3] music notes image - https://image.freepik.com/free-vector/white-music-key_23-2147487283.jpg
  
  The music I used in this app are:
  [1] "Explosive" by David Garrett
  [2] "Senbonzakura" by Vocaloid
  [3] "'Summer' from The Four Seasons, 3rd Movement" by Vivaldi */
