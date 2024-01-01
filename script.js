

// global vars
var menuOpen = false;
var clippyAnimationCounter = 0;
var playClippy = true;

// get all the elements
var timeBox = document.querySelector('.timebox');
var menuBox = document.querySelector('.menubox');
// var menuClickOverlay = document.querySelector('.menuclickoverlay');
var startButton = document.querySelector('.startbutton');
var body = document.querySelector('.body');
var desktop = document.querySelector('.desktop');
var menubox = document.querySelector('.menubox');
var menuitemff = document.getElementById('menuitemff');
var menuitemchrome = document.getElementById('menuitemchrome');
var menuitemedge = document.getElementById('menuitemedge');
var shortcutff = document.getElementById('shortcutff');
var shortcutchrome = document.getElementById('shortcutchrome');
var shortcutedge = document.getElementById('shortcutedge');
var toolbarff = document.getElementById('toolbarff');
var toolbarchrome = document.getElementById('toolbarchrome');
var toolbaredge = document.getElementById('toolbaredge');
var clippyImg = document.querySelector('.clippyimg');
var clippybubbleholder = document.querySelector('.clippybubbleholder');
var clippybubblebutton = document.querySelector('.clippybubblebutton');
var windowbutton = document.querySelector('.windowbutton');
var windowPopup = document.querySelector('.window');

// add all the event listeners
desktop.addEventListener('click', function(event){
    removeShortcutBorder();
    closeMenu();
});

startButton.addEventListener('mousedown', function(event){
    event.stopPropagation();
    toggleMenu();
});

startButton.addEventListener('click', function(event){
    event.stopPropagation();
});

menubox.addEventListener('click', function(event){
    event.stopPropagation();
});

menuitemff.addEventListener('click', function(event){
    openLink('ff');
});

menuitemchrome.addEventListener('click', function(event){
    openLink('chrome');
});

menuitemedge.addEventListener('click', function(event){
    openLink('edge');
});

shortcutff.addEventListener('click', function(event){

    event.stopPropagation();
    closeMenu();


    // remove the borders of the other shortcuts
    removeShortcutBorder();

    // add own border
    activateShortcutBorder(shortcutff);

});

shortcutff.addEventListener('dblclick', function(even){
    
    event.stopPropagation();

    openLink('ff');
});

shortcutchrome.addEventListener('click', function(event){
    
    event.stopPropagation();
    closeMenu();


    // remove the borders of the other shortcuts
    removeShortcutBorder();

    // add own border
    activateShortcutBorder(shortcutchrome);
});

shortcutchrome.addEventListener('dblclick', function(even){
    
    event.stopPropagation();

    openLink('chrome');
});


shortcutedge.addEventListener('click', function(event){
    
    event.stopPropagation();
    closeMenu();


    // remove the borders of the other shortcuts
    removeShortcutBorder();

    // add own border
    activateShortcutBorder(shortcutedge);
});

shortcutedge.addEventListener('dblclick', function(even){
    
    event.stopPropagation();

    openLink('edge');
});

toolbarff.addEventListener('click', function(event){
    openLink('ff');
});

toolbarchrome.addEventListener('click',function(event){
    openLink('chrome');
});

toolbaredge.addEventListener('click',function(event){
    openLink('edge');
});

clippybubblebutton.addEventListener('click',function(event){
    windowPopup.style.visibility = 'visible';
    clippybubbleholder.style.opacity = 0;
    playClippy = false;
});

windowbutton.addEventListener('mousedown',function(event){
    windowbutton.classList.add('windowbuttonActive');
});

windowbutton.addEventListener('click',function(event){
    windowbutton.classList.remove('windowbuttonActive');
    windowPopup.style.visibility = 'hidden';
});


// init all
initAll();


// function to init all
function initAll(){
    
    timeBox.innerHTML = getTime();

    // set the interval to get the time
    var timeGetter = setInterval(function(){
        timeBox.innerHTML = getTime();
    }, 5000)

    // add the cursors
    normalCursor();

    setTimeout(function(){
        clippybubbleholder.classList.add('opacitytransition');
    },1000);

    // start the clippy animations
    setTimeout(function(){
        clippybubbleholder.classList.add('opacitytransition');
        changeClippy();
    },2000);
}



// function to get the current time
function getTime(){
    var date = new Date();

    var hours = date.getHours();
    var minutes = date.getMinutes();

    // if(hours < 10){
    //     hours = `0${hours}`;
    // }

    if(minutes < 10){
        minutes = '0' + minutes;
    }

    return hours + ':' + minutes;
}

// function to open the menu
function toggleMenu(){

    if(!menuOpen){
        openMenu();

    }
    else{
       closeMenu();
    }
}

// open the menu
function openMenu(){

    startButton.classList.add('startbuttonActive')
    menuBox.style.opacity = 1;
    menuBox.style.maxHeight = '510px';
    // menuClickOverlay.style.visibility = 'visible';

    menuOpen = true;

}

// close the menu
function closeMenu(){

    menuBox.style.maxHeight = '0px';
    startButton.classList.remove('startbuttonActive')
    // menuClickOverlay.style.visibility = 'hidden';
    // wait for slide down transition
    setTimeout(function(){
        menuBox.style.opacity = 0;
    }, 100);

    menuOpen = false;
}

// open the link for the buttons
function openLink(link){

    // close the menu if it is open
    closeMenu();

    // console.log(link);

    var url = '';

    switch(link.toUpperCase()){
        case 'FF':
            url = 'https://www.mozilla.org/en-US/firefox/new/';
            break;
        case 'CHROME':
            url = 'https://www.google.com/chrome/';
            break;
        case 'EDGE':
            url = 'https://www.microsoft.com/en-us/edge';
            break;
        default:
    }

    if(url != ''){
        // change the cursor to the hourglass
        hourglassCursor();
        

        //add a timeout to simulate something loading
        setTimeout(function(){
            // remove hourglass
            normalCursor();
        
            removeShortcutBorder();
            // document.querySelector('.body').classList.add('normalcursor');
        // open link
           window.open(url,'_blank');
        }, 1000);
    }
}

// function to add all the nessesary cursors
function normalCursor(){
    body.classList.remove('hourglasscursor');
    startButton.classList.remove('hourglasscursor');
    shortcutff.classList.remove('hourglasscursor');
    menuitemff.classList.remove('hourglasscursor');
    menuitemchrome.classList.remove('hourglasscursor');
    shortcutchrome.classList.remove('hourglasscursor');
    toolbarff.classList.remove('hourglasscursor');
    toolbarchrome.classList.remove('hourglasscursor');
    clippybubblebutton.classList.remove('hourglasscursor');
    shortcutedge.classList.remove('hourglasscursor');
    toolbaredge.classList.remove('hourglasscursor');
    menuitemedge.classList.remove('hourglasscursor');

    body.classList.add('normalcursor');
    startButton.classList.add('pointercursor');
    shortcutff.classList.add('pointercursor');
    menuitemff.classList.add('pointercursor');
    menuitemchrome.classList.add('pointercursor');
    shortcutchrome.classList.add('pointercursor');
    toolbarff.classList.add('pointercursor');
    toolbarchrome.classList.add('pointercursor');
    clippybubblebutton.classList.add('pointercursor');
    shortcutedge.classList.add('pointercursor');
    toolbaredge.classList.add('pointercursor');
    menuitemedge.classList.add('pointercursor');

}

// function 
function hourglassCursor(){
   
    body.classList.remove('normalcursor');
    startButton.classList.remove('pointercursor');
    shortcutff.classList.remove('pointercursor');
    menuitemff.classList.remove('pointercursor');
    menuitemchrome.classList.remove('pointercursor');
    shortcutchrome.classList.remove('pointercursor');
    toolbarff.classList.remove('pointercursor');
    toolbarchrome.classList.remove('pointercursor');
    clippybubblebutton.classList.remove('pointercursor');
    shortcutedge.classList.remove('pointercursor');
    toolbaredge.classList.remove('pointercursor');
    menuitemedge.classList.remove('pointercursor');

    body.classList.add('hourglasscursor');
    startButton.classList.add('hourglasscursor');
    shortcutff.classList.add('hourglasscursor');
    menuitemff.classList.add('hourglasscursor');
    menuitemchrome.classList.add('hourglasscursor');
    shortcutchrome.classList.add('hourglasscursor');
    toolbarff.classList.add('hourglasscursor');
    clippybubblebutton.classList.add('hourglasscursor');
    toolbarchrome.classList.add('hourglasscursor');
    shortcutedge.classList.add('hourglasscursor');
    toolbaredge.classList.add('hourglasscursor');
    menuitemedge.classList.add('hourglasscursor');

}

// activate the shortcut border
function activateShortcutBorder(element){

    // add the class to it
    element.classList.add('desktopshortcutholderactive');

}

// remove all the shortcutborders
function removeShortcutBorder(){

    var shortcutList = document.querySelectorAll('[id^=shortcut]');

    // console.log(shortcutList);

    for(var i = 0; i<shortcutList.length; i++){
        shortcutList[i].classList.remove('desktopshortcutholderactive');
    }

}

// handel the clippy changes
function changeClippy(){

    var clippyArray = [
        ['clippy_squint.gif', 8000],
        ['clippy_blink.gif',3000],
        ['clippy_mobile.gif',9000],
        ['clippy_headphones.gif',10000],
        ['clippy_knock.gif',9000],
        ['clippy_box.gif',10000]
    ]

    if(playClippy){

        clippyImg.src = 'img/clippy/' + clippyArray[clippyAnimationCounter][0];

        setTimeout(function(){
            changeClippy();
        }, clippyArray[clippyAnimationCounter][1]);

        clippyAnimationCounter ++;

        if(clippyAnimationCounter >= clippyArray.length){
            clippyAnimationCounter = 0;
        }
    }
    else{
        clippyImg.src = 'img/clippy/clippy_end.gif';
    }

}