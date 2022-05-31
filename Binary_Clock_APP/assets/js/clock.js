//Variables changes to note:
// #led-div -> #hours1, #hours2, #minutes1, #minutes2, #seconds1, #seconds2, #dayColumns


// DOM variable declarations

// For debugging the dynamic resize
let resizeMarker = document.getElementById('resizeMarker');
let debug = 0;
let resizeTracker = 0;

let hourMarker = document.getElementById('timeMarkers');
let binaryMarker = document.getElementById('binaryMarkers');
let timeMarker = document.getElementById('displayTime');

let toolTip = document.getElementById('toolTip');
let clockOnly = document.getElementById('clockOnly');
let clockOptions = document.getElementById('clockOptions');

let toolTipPanel = document.getElementById('toolTipPanel');
let optionsPanel = document.getElementById('optionsBar');

let binary8 = document.getElementById('numbers8');
let binary4 = document.getElementById('numbers4');
let binary2 = document.getElementById('numbers2');
let binary1 = document.getElementById('numbers1');
let binaryDay = document.getElementById('numbers0');

let hoursMath = document.getElementById('h3HoursMath');
let minutesMath = document.getElementById('h3MinutesMath');
let minutesDemo = document.getElementById('minutesDemo');
let secondsMath = document.getElementById('h3SecondsMath');

let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let nightDay = document.getElementById('nightDay');
let timeDisplay = document.getElementById('h1Time');

let hours14 = document.getElementById('hours14');
let hours12 = document.getElementById('hours12');
let hours11 = document.getElementById('hours11');
let hours28 = document.getElementById('hours28');
let hours24 = document.getElementById('hours24');
let hours22 = document.getElementById('hours22');
let hours21 = document.getElementById('hours21');

let minutes14 = document.getElementById('minutes14');
let minutes12 = document.getElementById('minutes12');
let minutes11 = document.getElementById('minutes11');
let minutes28 = document.getElementById('minutes28');
let minutes24 = document.getElementById('minutes24');
let minutes22 = document.getElementById('minutes22');
let minutes21 = document.getElementById('minutes21');

let minutes14d = document.getElementById('minutes14d');
let minutes12d = document.getElementById('minutes12d');
let minutes11d = document.getElementById('minutes11d');
let minutes28d = document.getElementById('minutes28d');
let minutes24d = document.getElementById('minutes24d');
let minutes22d = document.getElementById('minutes22d');
let minutes21d = document.getElementById('minutes21d');

let seconds14 = document.getElementById('seconds14');
let seconds12 = document.getElementById('seconds12');
let seconds11 = document.getElementById('seconds11');
let seconds28 = document.getElementById('seconds28');
let seconds24 = document.getElementById('seconds24');
let seconds22 = document.getElementById('seconds22');
let seconds21 = document.getElementById('seconds21');

let dayOfWeekSun = document.getElementById('dayOfWeek0');
let dayOfWeekMon = document.getElementById('dayOfWeek1');
let dayOfWeekTue = document.getElementById('dayOfWeek2');
let dayOfWeekWed = document.getElementById('dayOfWeek3');
let dayOfWeekThu = document.getElementById('dayOfWeek4');
let dayOfWeekFri = document.getElementById('dayOfWeek5');
let dayOfWeekSat = document.getElementById('dayOfWeek6');

let amPm = document.getElementById('amPmId');
let blankNightDay = document.getElementById('h3AmPm');
let colorSelect = document.getElementById('colorSelect');

let demoText1 = document.getElementById('demoText1');
let demoText2 = document.getElementById('demoText2');
let demoText3 = document.getElementById('demoText3');

let menuToggle = document.getElementById('menuToggle');
let binaryOnly = document.getElementById('binaryOnly');

// let checkList = document.getElementById('listMobile');
// checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
//   if (checkList.classList.contains('visible'))
//     checkList.classList.remove('visible');
//   else
//     checkList.classList.add('visible');
// }


let filter = document.getElementsByClassName('filter');
let filterOptions = filter[0];
let filterToolTip = filter[1];

// Variables to handle Days of Week
let dayOfWeekIndex = 0;
let clockStand = document.getElementById('h1Day');
const dayOfWeekArray = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", 
                        "THURSDAY", "FRIDAY", "SATURDAY"];
const dayOfWeekOnMultiColorIndexArray = ['led-blue-on', 'led-green-on', 'led-yellow-on',
                            'led-red-on', 'led-blue-on', 'led-green-on', 'led-yellow-on'];
const dayOfWeekOffMultiColorIndexArray = ['led-blue-off', 'led-green-off','led-yellow-off',
                        'led-red-off', 'led-blue-off', 'led-green-off', 'led-yellow-off'];

                    
// Array for dropdown menu
let dropdownData = [{"value": "clockGreen", "style": "background-color: #4BF153;", "name": "Clock Green"},
{"value": "multi", "style": "background-color: #e7e7e7;", "name": "Multicolor"},{"value": "blue", "style": "background-color:#24E0FF;", "name": "Blue"},
{"value": "green", "style": "background-color:#ABFF00;", "name": "Green"},
{"value": "yellow", "style": "background-color:#FF0;", "name": "Yellow"},
{"value": "red", "style": "background-color:#F00;", "name": "Red"},
{"value": "purple", "style": "background-color:#b700ff", "name": "Purple"},
{"value": "orange", "style": "background-color:#ffa600", "name": "Orange"},
{"value": "grey", "style": "background-color:#bbbbbb", "name": "Grey"}];


// NOT checked on start
clockOptions.checked = false;
toolTip.checked = false;
hourMarker.checked = false;
binaryMarker.checked = false;
timeMarker.checked = false;


// Trackers for checked/unchecked
let clockTracker = 1;
let optionsTracker = 0;
let toolTipTracker = 0;
let hourMarkerTracker = 0;
let binaryMarkerTracker = 0;
let timeMarkerTracker = 0;
let numberMarkerTracker = 0;

let clockTrackerSmall = 0;
let binaryOnlyTracker = 1;
let clockHelpTracker = 0;
let clockHelpMathTracker = 0;
let clockHelpBinaryTracker = 0;
let mobileColorwellTracker = "clockGreen";
let customColorTracker = 0;

let customColor1 = "#4BF153";
let customColor2 = "#323232";


// Start up checks
clockOnly.checked = true;


// Set up clock only, clock options and tooltip toggleswitches
function clockCheck() {

    if (clockOnly.checked === true && clockTracker === 0) {
        clockTracker = 1;
        clockOptions.checked = false;
        toolTip.checked = false;

        optionsPanel.style.opacity = 0;
        toolTipPanel.style.opacity = 0;

    }

    else if (clockOptions.checked === true && clockTracker === 1) {
        clockTracker = 0;
        clockOnly.checked = false;
        clockOptions.checked === true;

        optionsPanel.style.opacity = 1;

    }

    else if (toolTip.checked === true && clockTracker === 1) {
        clockTracker = 0;
        clockOnly.checked = false;
        toolTip.checked === true;

        toolTipPanel.style.opacity = 1;

    };

};

// Force all panels to properly reset when clockOnly is toggled  --> Have just LEDs on.
function clockReset(){

    clockOnly.checked = true;
    clockOptions.checked = false;
    toolTip.checked = false;

    clockTracker = 1;
    optionsTracker = 0;
    toolTipTracker = 0;

    optionsPanel.style.opacity = 0;
    toolTipPanel.style.opacity = 0;

    binaryMarker.checked = false;
    binaryMarkerTracker = 0;
    
    binary8.style.opacity = 0;
    binary4.style.opacity = 0;
    binary2.style.opacity = 0;
    binary1.style.opacity = 0;
    binaryDay.style.opacity = 0;

    hourMarker.checked = false;
    hourMarkerTracker = 0;
            
    hours.style.opacity = 0;
    minutes.style.opacity = 0;
    seconds.style.opacity = 0;
    nightDay.style.opacity = 0;

    hoursMath.style.opacity = 0;
    minutesMath.style.opacity = 0;
    document.getElementById('h3SecondsMath').style.opacity = 0;
    blankNightDay.style.opacity = 0;
};

// Have clock only toggled on if only leds on are
function clockOnlyOnToggle() {
  
  if (clockTracker === 0 && optionsTracker === 0 && toolTipTracker === 0 && binaryMarkerTracker === 0 && hourMarkerTracker === 0) {
    clockOnly.checked = true;

    clockOptions.checked = false;
    toolTipTracker.checked = false;
    binaryMarker.checked = false;
    hourMarker.checked = false;
    timeMarker.checked = false;

    clockTracker = 1;
    toolTipTracker = 0;
    optionsTracker = 0;
    binaryMarkerTracker = 0;
    hourMarkerTracker = 0;
    timeMarkerTracker = 0;
  };

};

// Initialize Color Wheel Option -> Set custom css on page load
$(document).ready(function() {

    $('#demo').hide();
    var f = $.farbtastic('#picker');
    var p = $('#picker').css('opacity', 0.25);
    var selected;
    $('.colorwell')
      .each(function () { f.linkTo(this); $(this).css('opacity', 0.75); })
      .focus(function() {
        if (selected) {
          $(selected).css('opacity', 0.75).removeClass('colorwell-selected');
        }
        f.linkTo(this);
        p.css('opacity', 1);
        $(selected = this).css('opacity', 1).addClass('colorwell-selected');
    });
    
    // Force css to change
    $(`<style type='text/css'> .led-custom-on {
      margin: 0 auto;
      margin-top: 50px;
      width: 50px;
      height: 50px;
      opacity: 1;
      background-color: ${customColor1};
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset ${tinycolor(customColor1).darken(30).toString()} 0 -1px 9px, ${tinycolor(customColor1).darken(15).toString()} 0 2px 25px;
    }
    
    .led-custom-off {
      margin: 0 auto;
      margin-top: 50px;
      width: 50px;
      height: 50px;
      opacity: 1;
      background-color: ${customColor2};
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset ${tinycolor(customColor2).darken(30).toString()} 0 -1px 9px, ${tinycolor(customColor2).darken(15).toString()} 0 2px 14px;
    }

    #h1Day {
      right: 0px;
      text-align: center;
      opacity: 0;
      
      font-family: clockFont;
      color: ${customColor2};
      font-size: 100px;
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #000000, 0 0 20px #000000, 0 0 25px #000000, 0 0 30px #000000, 0 0 35px #000000;
    }
    
    @keyframes animateColors {
    } </style>`).appendTo("head");

    multiColorFix(color1Hex, color2Hex, color1Hex, color2Hex, color1Hex, color2Hex, color1Hex, color2Hex);

  });

// Fix color wheel alignment
document.getElementById("color1").style.width = 100;
document.getElementById("color2").style.width = 100;

// Functions to return rgb to HEX if needed
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
};

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

// Sets default lighting -> Clock Green
colorSelect.style.background = "#4BF153";
// colorSelect2.style.background = "#4BF153";
filterOptions.style.border = '1px solid #4BF153';
filterToolTip.style.border = '1px solid #4BF153';
let hourOnLED = 'led-clockGreen-on';
let hourOffLED = 'led-clockGreen-off';
let minutesOnLED = 'led-clockGreen-on';
let minutesOffLED = 'led-clockGreen-off';
let secondsOnLED = 'led-clockGreen-on';
let secondsOffLED = 'led-clockGreen-off';
let dayOnLED = 'led-clockGreen-on';
let dayOffLED = 'led-clockGreen-off';
let dayOfWeekOnLED = 'led-clockGreen-on';
let dayOfWeekOffLED = 'led-clockGreen-off';
let demoOnLED = 'led-clockGreen-on';
let demoOffLED = 'led-clockGreen-off'
hoursMath.style.color = "#4BF153";
minutesMath.style.color = "#4BF153";
minutesDemo.style.color = "#4BF153";
secondsMath.style.color = "#4BF153";
blankNightDay.style.color = "#4BF153";
hours.style.color = "#4BF153";
minutes.style.color = "#4BF153";
seconds.style.color = "#4BF153";
nightDay.style.color = "#4BF153";
binary8.style.color = "#4BF153";
binary4.style.color = "#4BF153";
binary2.style.color = "#4BF153";
binary1.style.color = "#4BF153";
binaryDay.style.color = "4BF153";


// Custom Colorwheel Color setup on click
$('#color1, #color2, #picker').on('click', function() {

  multiTracker = 0;
  customColorTracker = 1;

  let color1 = $('#color1').css('background-color');
  color1 = color1.slice(0,-1);
  color1 = color1.slice(4);
  color1 = color1.split(" ").join("");

  let color2 = $('#color2').css('background-color');
  color2 = color2.slice(0,-1);
  color2 = color2.slice(4);
  color2 = color2.split(" ").join("");

  let color1R = parseFloat(color1.substring(0, color1.search(',')));
  let color1G = parseFloat(color1.substring(color1.search(',') + 1, color1.lastIndexOf(",")));
  let color1B = parseFloat(color1.substring(color1.lastIndexOf(",") + 1, color1.length));
  let color1Hex = rgbToHex(color1R, color1G, color1B);

  let color2R = parseFloat(color2.substring(0, color2.search(',')));
  let color2G = parseFloat(color2.substring(color2.search(',') + 1, color2.lastIndexOf(",")));
  let color2B = parseFloat(color2.substring(color2.lastIndexOf(",") + 1, color2.length));
  let color2Hex = rgbToHex(color2R, color2G, color2B);

  customColor1 = color1Hex;
  customColor2 = color2Hex;

  timeDisplay.style.color = color1Hex;
  clockStand.style.color = color2Hex;

  mobileColorwellTracker = "custom";

  colorSelect.value = "custom";
  colorSelect.style.background = `linear-gradient(to right, ${customColor1} ,${customColor2})`;

  let color1HexShadow = tinycolor(color1Hex).darken(15).toString();
  let color1HexInset = tinycolor(color1Hex).darken(30).toString();
  let color2HexShadow = tinycolor(color2Hex).darken(15).toString();
  let color2HexInset = tinycolor(color2Hex).darken(30).toString();
 

      // Force css to change
      $(`<style type='text/css'> .led-custom-on {
        margin: 0 auto;
        margin-top: 50px;
        width: 50px;
        height: 50px;
        opacity: 1;
        background-color: ${color1Hex};
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset ${color1HexInset} 0 -1px 9px, ${color1HexShadow} 0 2px 25px;
      }
      
      .led-custom-off {
        margin: 0 auto;
        margin-top: 50px;
        width: 50px;
        height: 50px;
        opacity: 1;
        background-color: ${color2Hex};
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset ${color2HexInset} 0 -1px 9px, ${color2HexShadow} 0 2px 14px;
      }

      #h1Day {
        right: 0px;
        text-align: center;
        opacity: 0;
        
        font-family: clockFont;
        color: ${color2Hex};
        font-size: 100px;
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #000000, 0 0 20px #000000, 0 0 25px #000000, 0 0 30px #000000, 0 0 35px #000000;
      }
      
      @keyframes animateColors {
      } </style>`).appendTo("head");

      multiColorFix(color1Hex, color2Hex, color1Hex, color2Hex, color1Hex, color2Hex, color1Hex, color2Hex);


  hourOnLED = 'led-custom-on';
  minutesOnLED = 'led-custom-on';
  secondsOnLED = 'led-custom-on';
  dayOnLED = 'led-custom-on';
  demoOnLED = 'led-custom-on';
  dayOfWeekOnLED = 'led-custom-on';

  hourOffLED = 'led-custom-off';
  minutesOffLED = 'led-custom-off';
  secondsOffLED = 'led-custom-off';
  dayOffLED = 'led-custom-off';
  demoOffLED = 'led-custom-off';
  dayOfWeekOffLED = 'led-custom-off';

  hoursMath.style.color = color1Hex;
  minutesMath.style.color = color1Hex;
  minutesDemo.style.color = color1Hex;
  secondsMath.style.color = color1Hex;
  blankNightDay.style.color = color1Hex;
  hours.style.color = color1Hex;
  minutes.style.color = color1Hex;
  seconds.style.color = color1Hex;
  nightDay.style.color = color1Hex;
  binary8.style.color = color1Hex;
  binary4.style.color = color1Hex;
  binary2.style.color = color1Hex;
  binary1.style.color = color1Hex;
  binaryDay.style.color = color1Hex;

  filterOptions.style.border = `1px solid ${color1Hex}`;
  filterToolTip.style.border = `1px solid ${color2Hex}`;
 
});

// Custom color if hex code is entered
$('#color1, #color2').keydown(function(event){ 
  let keyCode = (event.keyCode ? event.keyCode : event.which);   
  if (keyCode == 13) {

      multiTracker = 0;
      customColorTracker = 1;

      let color1 = $('#color1').css('background-color');
      color1 = color1.slice(0,-1);
      color1 = color1.slice(4);
      color1 = color1.split(" ").join("");
  
      let color2 = $('#color2').css('background-color');
      color2 = color2.slice(0,-1);
      color2 = color2.slice(4);
      color2 = color2.split(" ").join("");
  
      let color1R = parseFloat(color1.substring(0, color1.search(',')));
      let color1G = parseFloat(color1.substring(color1.search(',') + 1, color1.lastIndexOf(",")));
      let color1B = parseFloat(color1.substring(color1.lastIndexOf(",") + 1, color1.length));
      let color1Hex = rgbToHex(color1R, color1G, color1B);
  
      let color2R = parseFloat(color2.substring(0, color2.search(',')));
      let color2G = parseFloat(color2.substring(color2.search(',') + 1, color2.lastIndexOf(",")));
      let color2B = parseFloat(color2.substring(color2.lastIndexOf(",") + 1, color2.length));
      let color2Hex = rgbToHex(color2R, color2G, color2B);

      customColor1 = color1Hex;
      customColor2 = color2Hex;    
  
      timeDisplay.style.color = color1Hex;
      clockStand.style.color = color2Hex;

      mobileColorwellTracker = "custom";

      colorSelect.value = "custom";
      colorSelect.style.background = `linear-gradient(to right, ${customColor1} ,${customColor2})`;
  
      let color1HexShadow = tinycolor(color1Hex).darken(15).toString();
      let color1HexInset = tinycolor(color1Hex).darken(30).toString();
      let color2HexShadow = tinycolor(color2Hex).darken(15).toString();
      let color2HexInset = tinycolor(color2Hex).darken(30).toString();
     
  
      // Force css to change
      $(`<style type='text/css'> .led-custom-on {
        margin: 0 auto;
        margin-top: 50px;
        width: 50px;
        height: 50px;
        opacity: 1;
        background-color: ${color1Hex};
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset ${color1HexInset} 0 -1px 9px, ${color1HexShadow} 0 2px 25px;
      }
      
      .led-custom-off {
        margin: 0 auto;
        margin-top: 50px;
        width: 50px;
        height: 50px;
        opacity: 1;
        background-color: ${color2Hex};
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset ${color2HexInset} 0 -1px 9px, ${color2HexShadow} 0 2px 14px;
      }
      
      #h1Day {
        right: 0px;
        text-align: center;
        opacity: 0;
        
        font-family: clockFont;
        color: ${color2Hex};
        font-size: 100px;
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #000000, 0 0 20px #000000, 0 0 25px #000000, 0 0 30px #000000, 0 0 35px #000000;
      }
      
      @keyframes animateColors {
      }</style>`).appendTo("head");

      multiColorFix(color1Hex, color2Hex, color1Hex, color2Hex, color1Hex, color2Hex, color1Hex, color2Hex);
  
      hourOnLED = 'led-custom-on';
      minutesOnLED = 'led-custom-on';
      secondsOnLED = 'led-custom-on';
      dayOnLED = 'led-custom-on';
      demoOnLED = 'led-custom-on';
      dayOfWeekOnLED = 'led-custom-on';
  
      hourOffLED = 'led-custom-off';
      minutesOffLED = 'led-custom-off';
      secondsOffLED = 'led-custom-off';
      dayOffLED = 'led-custom-off';
      demoOnLED = 'led-custom-off';
      dayOfWeekOffLED = 'led-custom-off';

      hoursMath.style.color = color1Hex;
      minutesMath.style.color = color1Hex;
      minutesDemo.style.color = color1Hex;
      secondsMath.style.color = color1Hex;
      blankNightDay.style.color = color1Hex;
      hours.style.color = color1Hex;
      minutes.style.color = color1Hex;
      seconds.style.color = color1Hex;
      nightDay.style.color = color1Hex;
      binary8.style.color = color1Hex;
      binary4.style.color = color1Hex;
      binary2.style.color = color1Hex;
      binary1.style.color = color1Hex;
      binaryDay.style.color = color1Hex;

      filterOptions.style.border = `1px solid ${color1Hex}`;
      filterToolTip.style.border = `1px solid ${color2Hex}`;
  };
});

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

// Track for clock only on/off toggleswitch
clockOnly.addEventListener('click', clockReset);
clockOptions.addEventListener('click', clockCheck);
toolTip.addEventListener('click', clockCheck);

// binaryOnly.addEventListener('click', binaryReset);
// clockHelp.addEventListener('click', clockHelpCheck);
// clockOnlySmall.addEventListener('click', clockOnlySmallCheck);


// Force both dropdowns to have same display value on change.
$(function () {
  var $set = $('#colorSelect, #colorSelect2');
  $set.change(function () {
    $set.not(this).val(this.value);
  });
});

// let colorTracker = "";
let colorTracker = "#4BF153";
let colorTracker2 = "";
let colorTracker3 = "";
let colorTracker4 = "";
let colorTracker5 = "";
let colorTracker6 = "";
let colorTracker7 = "";
let colorTracker8 = "";
let color1Hex = "";
let color2Hex = "";
let multiTracker = 0;


// This fixes toggle colors not changing after multicolor is selected.
function multiColorFix(c1, c2, c3, c4, c5, c6, c7, c8) {

$(`<style type='text/css'> 
        .clockOnlyColor .custom-control-input:focus~.custom-control-label::before {
          border-color: ${c1} !important;
        }
            
        .clockOnlyColor .custom-control-input:checked~.custom-control-label::before {
          border-color: ${c1} !important;
          background-color: ${c2} !important;
        }
            
        .clockOnlyColor .custom-control-input:active~.custom-control-label::before {
          background-color: ${c1} !important;
          border-color: ${colorTracker2} !important;
        }
            
        .clockOnlyColor .custom-control-input:focus:not(:checked)~.custom-control-label::before {
          border-color: ${1} !important;
        }
            
        .clockOnlyColor .custom-control-input:not(:disabled):active~.custom-control-label::before {
          background-color: ${c1} !important;
          border-color: ${colorTracker2} !important;
        } 


        .binaryMarkersColor .custom-control-input:focus~.custom-control-label::before {
          border-color: ${c1} !important;
        }
            
        .binaryMarkersColor .custom-control-input:checked~.custom-control-label::before {
          border-color: ${c1} !important;
          background-color: ${c2} !important;
        }
            
        .binaryMarkersColor .custom-control-input:active~.custom-control-label::before {
          background-color: ${c1} !important;
          border-color: ${c2} !important;
        }
            
        .binaryMarkersColor .custom-control-input:focus:not(:checked)~.custom-control-label::before {
          border-color: ${c1} !important;
        }
            
        .binaryMarkersColor .custom-control-input:not(:disabled):active~.custom-control-label::before {
          background-color: ${c1} !important;
          border-color: ${c2} !important;
        } 


        .clockOptionsColor .custom-control-input:focus~.custom-control-label::before {
          border-color: ${c3} !important;
        }
            
        .clockOptionsColor .custom-control-input:checked~.custom-control-label::before {
          border-color: ${c3} !important;
          background-color: ${c4} !important;
        }
            
        .clockOptionsColor .custom-control-input:active~.custom-control-label::before {
          background-color: ${c3} !important;
          border-color: ${c4} !important;
        }
            
        .clockOptionsColor .custom-control-input:focus:not(:checked)~.custom-control-label::before {
          border-color: ${c3} !important;
        }
            
        .clockOptionsColor .custom-control-input:not(:disabled):active~.custom-control-label::before {
          background-color: ${c3} !important;
          border-color: ${c4} !important;
        } 


        .timeMarkersColor .custom-control-input:focus~.custom-control-label::before {
          border-color: ${c3} !important;
        }
            
        .timeMarkersColor .custom-control-input:checked~.custom-control-label::before {
          border-color: ${c3} !important;
          background-color: ${c4} !important;
        }
            
        .timeMarkersColor .custom-control-input:active~.custom-control-label::before {
          background-color: ${c3} !important;
          border-color: ${c4} !important;
        }
            
        .timeMarkersColor .custom-control-input:focus:not(:checked)~.custom-control-label::before {
          border-color: ${c3} !important;
        }
            
        .timeMarkersColor .custom-control-input:not(:disabled):active~.custom-control-label::before {
          background-color: ${c3} !important;
          border-color: ${c4} !important;
        } 


        .toolTipColor .custom-control-input:focus~.custom-control-label::before {
          border-color: ${c5} !important;
        }
            
        .toolTipColor .custom-control-input:checked~.custom-control-label::before {
          border-color: ${c5} !important;
          background-color: ${c6} !important;
        }
            
        .toolTipColor .custom-control-input:active~.custom-control-label::before {
          background-color: ${c5} !important;
          border-color: ${c6} !important;
        }
            
        .toolTipColor .custom-control-input:focus:not(:checked)~.custom-control-label::before {
          border-color: ${c5} !important;
        }
            
        .toolTipColor .custom-control-input:not(:disabled):active~.custom-control-label::before {
          background-color: ${c5} !important;
          border-color: ${c6} !important;
        } 


        .displayTimeColor .custom-control-input:focus~.custom-control-label::before {
          border-color: ${c5} !important;
        }
            
        .displayTimeColor .custom-control-input:checked~.custom-control-label::before {
          border-color: ${c5} !important;
          background-color: ${c6} !important;
        }
            
        .displayTimeColor .custom-control-input:active~.custom-control-label::before {
          background-color: ${c5} !important;
          border-color: ${c6} !important;
        }
            
        .displayTimeColor .custom-control-input:focus:not(:checked)~.custom-control-label::before {
          border-color: ${c5} !important;
        }
            
        .displayTimeColor .custom-control-input:not(:disabled):active~.custom-control-label::before {
          background-color: ${c5} !important;
          border-color: ${c6} !important;
        } 


        .militaryColor .custom-control-input:focus~.custom-control-label::before {
          border-color: ${c7} !important;
        }
            
        .militaryColor .custom-control-input:checked~.custom-control-label::before {
          border-color: ${c7} !important;
          background-color: ${c8} !important;
        }
            
        .militaryColor .custom-control-input:active~.custom-control-label::before {
          background-color: ${c7} !important;
          border-color: ${c8} !important;
        }
            
        .militaryColor .custom-control-input:focus:not(:checked)~.custom-control-label::before {
          border-color: ${c7} !important;
        }
            
        .militaryColor .custom-control-input:not(:disabled):active~.custom-control-label::before {
          background-color: ${c7} !important;
          border-color: ${c8} !important;
        } 


        .binaryOnlyColor .custom-control-input:focus~.custom-control-label::before {
          border-color: ${c1} !important;
        }
            
        .binaryOnlyColor .custom-control-input:checked~.custom-control-label::before {
          border-color: ${c1} !important;
          background-color: ${c2} !important;
        }
            
        .binaryOnlyColor .custom-control-input:active~.custom-control-label::before {
          background-color: ${c1} !important;
          border-color: ${c2} !important;
        }
            
        .binaryOnlyColor .custom-control-input:focus:not(:checked)~.custom-control-label::before {
          border-color: ${c1} !important;
        }
            
        .binaryOnlyColor .custom-control-input:not(:disabled):active~.custom-control-label::before {
          background-color: ${c1} !important;
          border-color: ${c2} !important;
        }


        .clockOnlyMobileColor .custom-control-input:focus~.custom-control-label::before {
          border-color: ${c3} !important;
        }
            
        .clockOnlyMobileColor .custom-control-input:checked~.custom-control-label::before {
          border-color: ${c3} !important;
          background-color: ${c4} !important;
        }
            
        .clockOnlyMobileColor .custom-control-input:active~.custom-control-label::before {
          background-color: ${c3} !important;
          border-color: ${c4} !important;
        }
            
        .clockOnlyMobileColor .custom-control-input:focus:not(:checked)~.custom-control-label::before {
          border-color: ${c3} !important;
        }
            
        .clockOnlyMobileColor .custom-control-input:not(:disabled):active~.custom-control-label::before {
          background-color: ${c3} !important;
          border-color: ${c4} !important;
        } 


        .clockHelpColor .custom-control-input:focus~.custom-control-label::before {
          border-color: ${c5} !important;
        }
            
        .clockHelpColor .custom-control-input:checked~.custom-control-label::before {
          border-color: ${c5} !important;
          background-color: ${c6} !important;
        }
            
        .clockHelpColor .custom-control-input:active~.custom-control-label::before {
          background-color: ${c5} !important;
          border-color: ${c6} !important;
        }
            
        .clockHelpColor .custom-control-input:focus:not(:checked)~.custom-control-label::before {
          border-color: ${c5} !important;
        }
            
        .clockHelpColor .custom-control-input:not(:disabled):active~.custom-control-label::before {
          background-color: ${c5} !important;
          border-color: ${c6} !important;
        } </style>`).appendTo("head");
};

// Changes LED lighting on change from dropdown menu
function optionColorSelect(differentSelection) {
  
  if (differentSelection === "multi") {

      colorTracker = '#24E0FF';
      colorTracker2 = "#016e81";
      colorTracker3 = "#ABFF00";
      colorTracker4 = "#578103";
      colorTracker5 = "#FF0";
      colorTracker6 = "rgb(139, 139, 1)";
      colorTracker7 = "#F00";
      colorTracker8 = "rgb(131, 2, 2)";
      multiTracker = 1;
      mobileColorwellTracker = differentSelection;

      multiColorFix(colorTracker, colorTracker2, colorTracker3, colorTracker4, colorTracker5, colorTracker6, colorTracker7, colorTracker8);

      colorSelect.style.background = "linear-gradient(to right, #24E0FF , #ABFF00, #FF0, #F00)";
      // colorSelect2.style.background = "linear-gradient(to right, #24E0FF , #ABFF00, #FF0, #F00)";
      filterOptions.style.border = '1px solid #4BF153';
      filterToolTip.style.border = '1px solid #4BF153';
      hourOnLED = 'led-blue-on';
      hourOffLED = 'led-blue-off';
      minutesOnLED = 'led-green-on';
      minutesOffLED = 'led-green-off';
      demoOnLED = 'led-green-on';
      demoOffLED = 'led-green-off';
      secondsOnLED = 'led-yellow-on';
      secondsOffLED = 'led-yellow-off';
      dayOnLED = 'led-red-on';
      dayOffLED = 'led-red-off';
      // timeDisplay.style.color = "#F00";
      hoursMath.style.color = '#24E0FF';
      minutesMath.style.color = "#ABFF00";
      minutesDemo.style.color = "#ABFF00";
      secondsMath.style.color = '#FF0';
      blankNightDay.style.color = '#F00';
      hours.style.color = '#24E0FF';
      minutes.style.color = "#ABFF00";
      seconds.style.color = '#FF0';
      nightDay.style.color = '#F00';
      binary8.style.color = '#F00';
      binary4.style.color = '#FF0';
      binary2.style.color = "#ABFF00";
      binary1.style.color = '#24E0FF';
      binaryDay.style.color = "#24E0FF";

      // Allow Day of Week To Display MulitColor Text
      $(`<style type='text/css'> #h1Day {
        right: 0px;
        text-align: center;
        opacity: 0;
        
        font-family: clockFont;
        /* color: #00FE7A; */
        animation: animateColors 5s infinite;
        font-size: 100px;
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #000000, 0 0 20px #000000, 0 0 25px #000000, 0 0 30px #000000, 0 0 35px #000000;
      } 
      
      @keyframes animateColors {
        0% { color: #24E0FF; }
        33% { color: #ABFF00; }
        67% { color: #FF0; }
        100% { color: #F00; }
      }</style>`).appendTo("head");


  }
  
  else if (differentSelection === "blue") {

      colorTracker = "#24E0FF"
      colorTracker2 = "#016e81";
      multiTracker = 0;
      mobileColorwellTracker = differentSelection;

      multiColorFix(colorTracker, colorTracker2, colorTracker, colorTracker2, colorTracker, colorTracker2, colorTracker, colorTracker2);

      colorSelect.style.background = colorTracker;
      // colorSelect2.style.background = colorTracker;
      filterOptions.style.border = '1px solid #24E0FF';
      filterToolTip.style.border = '1px solid #199CB2';
      hourOnLED = 'led-blue-on';
      hourOffLED = 'led-blue-off';
      minutesOnLED = 'led-blue-on';
      minutesOffLED = 'led-blue-off';
      secondsOnLED = 'led-blue-on';
      secondsOffLED = 'led-blue-off';
      dayOnLED = 'led-blue-on';
      dayOffLED = 'led-blue-off';
      dayOfWeekOnLED = 'led-blue-on';
      dayOfWeekOffLED = 'led-blue-off';
      timeDisplay.style.color = colorTracker;
      clockStand.style.color = colorTracker;
      hoursMath.style.color = colorTracker;
      minutesMath.style.color = colorTracker;
      minutesDemo.style.color = colorTracker;
      secondsMath.style.color = colorTracker;
      blankNightDay.style.color = colorTracker;
      hours.style.color = colorTracker;
      minutes.style.color = colorTracker;
      seconds.style.color = colorTracker;
      nightDay.style.color = colorTracker;
      binary8.style.color = colorTracker;
      binary4.style.color = colorTracker;
      binary2.style.color = colorTracker;
      binary1.style.color = colorTracker;
      binaryDay.style.color = colorTracker;

      // Properly Changes Day of Week Back to One Color
      $(`<style type='text/css'> #h1Day {
        right: 0px;
        text-align: center;
        opacity: 0;
        
        font-family: clockFont;
        color: ${colorTracker2};
        font-size: 100px;
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #000000, 0 0 20px #000000, 0 0 25px #000000, 0 0 30px #000000, 0 0 35px #000000;
      }
      
      @keyframes animateColors {
      }</style>`).appendTo("head"); 

  }

  else if (differentSelection === "green") {

      colorTracker = "#ABFF00";
      colorTracker2 = "#578103";
      multiTracker = 0;
      mobileColorwellTracker = differentSelection;

      multiColorFix(colorTracker, colorTracker2, colorTracker, colorTracker2, colorTracker, colorTracker2, colorTracker, colorTracker2);


      colorSelect.style.background = "#ABFF00";
      // colorSelect2.style.background = "#ABFF00";
      filterOptions.style.border = '1px solid #ABFF00';
      filterToolTip.style.border = '1px solid #669900';
      hourOnLED = 'led-green-on';
      hourOffLED = 'led-green-off';
      minutesOnLED = 'led-green-on';
      minutesOffLED = 'led-green-off';
      secondsOnLED = 'led-green-on';
      secondsOffLED = 'led-green-off';
      dayOnLED = 'led-green-on';
      dayOffLED = 'led-green-off';
      dayOfWeekOnLED = 'led-green-on';
      dayOfWeekOffLED = 'led-green-off';
      timeDisplay.style.color = colorTracker;
      clockStand.style.color = colorTracker;
      hoursMath.style.color = colorTracker;
      minutesMath.style.color = colorTracker;
      minutesDemo.style.color = colorTracker;
      secondsMath.style.color = colorTracker;
      blankNightDay.style.color = colorTracker;
      hours.style.color = colorTracker;
      minutes.style.color = colorTracker;
      seconds.style.color = colorTracker;
      nightDay.style.color = colorTracker;
      binary8.style.color = colorTracker;
      binary4.style.color = colorTracker;
      binary2.style.color = colorTracker;
      binary1.style.color = colorTracker;
      binaryDay.style.color = colorTracker;

      // Properly Changes Day of Week Back to One Color
      $(`<style type='text/css'> #h1Day {
        right: 0px;
        text-align: center;
        opacity: 0;
        
        font-family: clockFont;
        color: ${colorTracker2};
        font-size: 100px;
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #000000, 0 0 20px #000000, 0 0 25px #000000, 0 0 30px #000000, 0 0 35px #000000;
      }
      
      @keyframes animateColors {
      }</style>`).appendTo("head"); 

  }

  else if (differentSelection === "yellow") {

      colorTracker = "#FF0";
      colorTracker2 = "rgb(139, 139, 1)";
      multiTracker = 0;
      mobileColorwellTracker = differentSelection;

      multiColorFix(colorTracker, colorTracker2, colorTracker, colorTracker2, colorTracker, colorTracker2, colorTracker, colorTracker2);

      colorSelect.style.background = "#FF0";
      // colorSelect2.style.background = "#FF0";
      filterOptions.style.border = '1px solid #FF0';
      filterToolTip.style.border = '1px solid #AA0';
      hourOnLED = 'led-yellow-on';
      hourOffLED = 'led-yellow-off';
      minutesOnLED = 'led-yellow-on';
      minutesOffLED = 'led-yellow-off';
      secondsOnLED = 'led-yellow-on';
      secondsOffLED = 'led-yellow-off';
      dayOnLED = 'led-yellow-on';
      dayOffLED = 'led-yellow-off';
      dayOfWeekOnLED = 'led-yellow-on';
      dayOfWeekOffLED = 'led-yellow-off';
      timeDisplay.style.color = "#FF0";
      timeDisplay.style.color = colorTracker;
      clockStand.style.color = colorTracker;
      hoursMath.style.color = colorTracker;
      minutesMath.style.color = colorTracker;
      minutesDemo.style.color = colorTracker;
      secondsMath.style.color = colorTracker;
      blankNightDay.style.color = colorTracker;
      hours.style.color = colorTracker;
      minutes.style.color = colorTracker;
      seconds.style.color = colorTracker;
      nightDay.style.color = colorTracker;
      binary8.style.color = colorTracker;
      binary4.style.color = colorTracker;
      binary2.style.color = colorTracker;
      binary1.style.color = colorTracker;
      binaryDay.style.color = colorTracker;

      // Properly Changes Day of Week Back to One Color
      $(`<style type='text/css'> #h1Day {
        right: 0px;
        text-align: center;
        opacity: 0;
        
        font-family: clockFont;
        color: ${colorTracker2};
        font-size: 100px;
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #000000, 0 0 20px #000000, 0 0 25px #000000, 0 0 30px #000000, 0 0 35px #000000;
      }
      
      @keyframes animateColors {
      }</style>`).appendTo("head"); 

  }

  else if (differentSelection === "red") {

      colorTracker = "#F00";
      colorTracker2 = "rgb(131, 2, 2)";
      multiTracker = 0;
      mobileColorwellTracker = differentSelection;

      multiColorFix(colorTracker, colorTracker2, colorTracker, colorTracker2, colorTracker, colorTracker2, colorTracker, colorTracker2);

      colorSelect.style.background = "#F00";
      // colorSelect2.style.background = "#F00";
      filterOptions.style.border = '1px solid #F00';
      filterToolTip.style.border = '1px solid rgb(131, 2, 2)';
      hourOnLED = 'led-red-on';
      hourOffLED = 'led-red-off';
      minutesOnLED = 'led-red-on';
      minutesOffLED = 'led-red-off';
      secondsOnLED = 'led-red-on';
      secondsOffLED = 'led-red-off';
      dayOnLED = 'led-red-on';
      dayOffLED = 'led-red-off';
      dayOfWeekOnLED = 'led-red-on';
      dayOfWeekOffLED = 'led-red-off';
      timeDisplay.style.color = colorTracker;
      clockStand.style.color = colorTracker;
      hoursMath.style.color = colorTracker;
      minutesMath.style.color = colorTracker;
      minutesDemo.style.color = colorTracker;
      secondsMath.style.color = colorTracker;
      blankNightDay.style.color = colorTracker;
      hours.style.color = colorTracker;
      minutes.style.color = colorTracker;
      seconds.style.color = colorTracker;
      nightDay.style.color = colorTracker;
      binary8.style.color = colorTracker;
      binary4.style.color = colorTracker;
      binary2.style.color = colorTracker;
      binary1.style.color = colorTracker;
      binaryDay.style.color = colorTracker;

      // Properly Changes Day of Week Back to One Color
      $(`<style type='text/css'> #h1Day {
        right: 0px;
        text-align: center;
        opacity: 0;
        
        font-family: clockFont;
        color: ${colorTracker2};
        font-size: 100px;
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #000000, 0 0 20px #000000, 0 0 25px #000000, 0 0 30px #000000, 0 0 35px #000000;
      }
      
      @keyframes animateColors {
      }</style>`).appendTo("head"); 

  }

  else if (differentSelection === "purple") {

      colorTracker = "rgb(183, 0, 255)";
      colorTracker2 = "rgb(108, 0, 170)";
      multiTracker = 0;
      mobileColorwellTracker = differentSelection;

      multiColorFix(colorTracker, colorTracker2, colorTracker, colorTracker2, colorTracker, colorTracker2, colorTracker, colorTracker2);

      colorSelect.style.background = "rgb(183, 0, 255)";
      // colorSelect2.style.background = "rgb(183, 0, 255)";
      filterOptions.style.border = '1px solid rgb(183, 0, 255)';
      filterToolTip.style.border = '1px solid rgb(108, 0, 170)';
      hourOnLED = 'led-purple-on';
      hourOffLED = 'led-purple-off';
      minutesOnLED = 'led-purple-on';
      minutesOffLED = 'led-purple-off';
      secondsOnLED = 'led-purple-on';
      secondsOffLED = 'led-purple-off';
      dayOnLED = 'led-purple-on';
      dayOffLED = 'led-purple-off';
      dayOfWeekOnLED = 'led-purple-on';
      dayOfWeekOffLED = 'led-purple-off';
      timeDisplay.style.color = colorTracker;
      clockStand.style.color = colorTracker;
      hoursMath.style.color = colorTracker;
      minutesMath.style.color = colorTracker;
      minutesDemo.style.color = colorTracker;
      secondsMath.style.color = colorTracker;
      blankNightDay.style.color = colorTracker;
      hours.style.color = colorTracker;
      minutes.style.color = colorTracker;
      seconds.style.color = colorTracker;
      nightDay.style.color = colorTracker;
      binary8.style.color = colorTracker;
      binary4.style.color = colorTracker;
      binary2.style.color = colorTracker;
      binary1.style.color = colorTracker;
      binaryDay.style.color = colorTracker;

      // Properly Changes Day of Week Back to One Color
      $(`<style type='text/css'> #h1Day {
        right: 0px;
        text-align: center;
        opacity: 0;
        
        font-family: clockFont;
        color: ${colorTracker2};
        font-size: 100px;
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #000000, 0 0 20px #000000, 0 0 25px #000000, 0 0 30px #000000, 0 0 35px #000000;
      }
      
      @keyframes animateColors {
      }</style>`).appendTo("head"); 

  }

  else if (differentSelection === "orange") {

      colorTracker = "rgb(255, 166, 0)";
      colorTracker2 = "rgb(170, 91, 0)";
      multiTracker = 0;
      mobileColorwellTracker = differentSelection;

      multiColorFix(colorTracker, colorTracker2, colorTracker, colorTracker2, colorTracker, colorTracker2, colorTracker, colorTracker2);

      colorSelect.style.background = "rgb(255, 166, 0)";
      // colorSelect2.style.background = "rgb(255, 166, 0)";
      filterOptions.style.border = '1px solid rgb(255, 166, 0)';
      filterToolTip.style.border = '1px solid rgb(170, 91, 0)';
      hourOnLED = 'led-orange-on';
      hourOffLED = 'led-orange-off';
      minutesOnLED = 'led-orange-on';
      minutesOffLED = 'led-orange-off';
      secondsOnLED = 'led-orange-on';
      secondsOffLED = 'led-orange-off';
      dayOnLED = 'led-orange-on';
      dayOffLED = 'led-orange-off';
      dayOfWeekOnLED = 'led-orange-on';
      dayOfWeekOffLED = 'led-orange-off';
      timeDisplay.style.color = colorTracker;
      clockStand.style.color = colorTracker;
      hoursMath.style.color = colorTracker;
      minutesMath.style.color = colorTracker;
      minutesDemo.style.color = colorTracker;
      secondsMath.style.color = colorTracker;
      blankNightDay.style.color = colorTracker;
      hours.style.color = colorTracker;
      minutes.style.color = colorTracker;
      seconds.style.color = colorTracker;
      nightDay.style.color = colorTracker;
      binary8.style.color = colorTracker;
      binary4.style.color = colorTracker;
      binary2.style.color = colorTracker;
      binary1.style.color = colorTracker;
      binaryDay.style.color = colorTracker;

      // Properly Changes Day of Week Back to One Color
      $(`<style type='text/css'> #h1Day {
        right: 0px;
        text-align: center;
        opacity: 0;
        
        font-family: clockFont;
        color: ${colorTracker2};
        font-size: 100px;
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #000000, 0 0 20px #000000, 0 0 25px #000000, 0 0 30px #000000, 0 0 35px #000000;
      }
      
      @keyframes animateColors {
      }</style>`).appendTo("head"); 

  }

  else if (differentSelection === "grey") {

      colorTracker = "rgb(187, 187, 187)";
      colorTracker2 = "rgb(87, 87, 87)";
      multiTracker = 0;
      mobileColorwellTracker = differentSelection;

      multiColorFix(colorTracker, colorTracker2, colorTracker, colorTracker2, colorTracker, colorTracker2, colorTracker, colorTracker2);

      colorSelect.style.background = "rgb(187, 187, 187)";
      // colorSelect2.style.background = "rgb(187, 187, 187)";
      filterOptions.style.border = '1px solid rgb(187, 187, 187)';
      filterToolTip.style.border = '1px solid rgb(87, 87, 87)';
      hourOnLED = 'led-grey-on';
      hourOffLED = 'led-grey-off';
      minutesOnLED = 'led-grey-on';
      minutesOffLED = 'led-grey-off';
      secondsOnLED = 'led-grey-on';
      secondsOffLED = 'led-grey-off';
      dayOnLED = 'led-grey-on';
      dayOffLED = 'led-grey-off';
      dayOfWeekOnLED = 'led-grey-on';
      dayOfWeekOffLED = 'led-grey-off';
      timeDisplay.style.color = colorTracker;
      clockStand.style.color = colorTracker;
      hoursMath.style.color = colorTracker;
      minutesMath.style.color = colorTracker;
      minutesDemo.style.color = colorTracker;
      secondsMath.style.color = colorTracker;
      blankNightDay.style.color = colorTracker;
      hours.style.color = colorTracker;
      minutes.style.color = colorTracker;
      seconds.style.color = colorTracker;
      nightDay.style.color = colorTracker;
      binary8.style.color = colorTracker;
      binary4.style.color = colorTracker;
      binary2.style.color = colorTracker;
      binary1.style.color = colorTracker;
      binaryDay.style.color = colorTracker;

      // Properly Changes Day of Week Back to One Color
      $(`<style type='text/css'> #h1Day {
        right: 0px;
        text-align: center;
        opacity: 0;
        
        font-family: clockFont;
        color: ${colorTracker2};
        font-size: 100px;
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #000000, 0 0 20px #000000, 0 0 25px #000000, 0 0 30px #000000, 0 0 35px #000000;
      }
      
      @keyframes animateColors {
      }</style>`).appendTo("head"); 

  }

  else if (differentSelection === "custom") {

    colorTracker = customColor1;
    colorTracker2 = customColor2;
    multiTracker = 0;
    mobileColorwellTracker = differentSelection;


    multiColorFix(colorTracker, colorTracker2, colorTracker, colorTracker2, colorTracker, colorTracker2, colorTracker, colorTracker2);

    colorSelect.style.background = `linear-gradient(to right, ${customColor1} ,${customColor2})`;
    filterOptions.style.border = `1px solid ${customColor1}`;
    filterToolTip.style.border = `1px solid ${customColor2}`;
    hourOnLED = 'led-custom-on';
    hourOffLED = 'led-custom-off';
    minutesOnLED = 'led-custom-on';
    minutesOffLED = 'led-custom-off';
    secondsOnLED = 'led-custom-on';
    secondsOffLED = 'led-custom-off';
    dayOnLED = 'led-custom-on';
    dayOffLED = 'led-custom-off';
    dayOfWeekOnLED = 'led-custom-on';
    dayOfWeekOffLED = 'led-custom-off';
    timeDisplay.style.color = colorTracker;
    clockStand.style.color = colorTracker2;
    hoursMath.style.color = colorTracker;
    minutesMath.style.color = colorTracker;
    minutesDemo.style.color = colorTracker;
    secondsMath.style.color = colorTracker;
    blankNightDay.style.color = colorTracker;
    hours.style.color = colorTracker;
    minutes.style.color = colorTracker;
    seconds.style.color = colorTracker;
    nightDay.style.color = colorTracker;
    binary8.style.color = colorTracker;
    binary4.style.color = colorTracker;
    binary2.style.color = colorTracker;
    binary1.style.color = colorTracker;
    binaryDay.style.color = colorTracker;

    // Properly Changes Day of Week Back to One Color
    $(`<style type='text/css'> #h1Day {
      right: 0px;
      text-align: center;
      opacity: 0;
      
      font-family: clockFont;
      color: #323232;
      font-size: 100px;
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #000000, 0 0 20px #000000, 0 0 25px #000000, 0 0 30px #000000, 0 0 35px #000000;
    }
    
    @keyframes animateColors {
    }</style>`).appendTo("head"); 

  }

  else if (differentSelection === "clockGreen") {

      colorTracker = "#4BF153";
      colorTracker2 = "#4BF153";
      multiTracker = 0;
      mobileColorwellTracker = differentSelection;


      multiColorFix(colorTracker, colorTracker2, colorTracker, colorTracker2, colorTracker, colorTracker2, colorTracker, colorTracker2);

      colorSelect.style.background = "#4BF153";
      // colorSelect2.style.background = "#4BF153";
      filterOptions.style.border = '1px solid #4BF153';
      filterToolTip.style.border = '1px solid #4BF153';
      hourOnLED = 'led-clockGreen-on';
      hourOffLED = 'led-clockGreen-off';
      minutesOnLED = 'led-clockGreen-on';
      minutesOffLED = 'led-clockGreen-off';
      secondsOnLED = 'led-clockGreen-on';
      secondsOffLED = 'led-clockGreen-off';
      dayOnLED = 'led-clockGreen-on';
      dayOffLED = 'led-clockGreen-off';
      dayOfWeekOnLED = 'led-clockGreen-on';
      dayOfWeekOffLED = 'led-clockGreen-off';
      timeDisplay.style.color = colorTracker;
      clockStand.style.color = "#323232";
      hoursMath.style.color = colorTracker;
      minutesMath.style.color = colorTracker;
      minutesDemo.style.color = colorTracker;
      secondsMath.style.color = colorTracker;
      blankNightDay.style.color = colorTracker;
      hours.style.color = colorTracker;
      minutes.style.color = colorTracker;
      seconds.style.color = colorTracker;
      nightDay.style.color = colorTracker;
      binary8.style.color = colorTracker;
      binary4.style.color = colorTracker;
      binary2.style.color = colorTracker;
      binary1.style.color = colorTracker;
      binaryDay.style.color = colorTracker;

      // Properly Changes Day of Week Back to One Color
      $(`<style type='text/css'> #h1Day {
        right: 0px;
        text-align: center;
        opacity: 0;
        
        font-family: clockFont;
        color: #323232;
        font-size: 100px;
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #000000, 0 0 20px #000000, 0 0 25px #000000, 0 0 30px #000000, 0 0 35px #000000;
      }
      
      @keyframes animateColors {
      }</style>`).appendTo("head"); 

  };
};

// Correct for Military Time
let militaryTime = 0;
function clickCheckTime(eventListener) {
    eventListener.addEventListener('click', function() {
        if (document.getElementById('customRadio1').checked === true) {
            militaryTime = 0;
        }
    
        else if (document.getElementById('customRadio2').checked === true) {
            militaryTime = 1;
        };
        
    });
};
clickCheckTime(document.getElementById('customRadio1'));
clickCheckTime(document.getElementById('customRadio2'));


// Handles the first binary light (3 LEDS -> 0, 2, 4)
function ledFirst(v11, v12, v14, onVar, offVar, intString) {

  if (intString === 0) {
      v11.className = "";
      v11.classList.add(offVar);
      v12.className = "";
      v12.classList.add(offVar); 
      v14.className = "";
      v14.classList.add(offVar); 
      
  }

  else if (intString === 1) {
      v11.className = "";
      v11.classList.add(onVar); 
      v12.className = "";
      v12.classList.add(offVar); 
      v14.className = "";
      v14.classList.add(offVar);
  }

  else if (intString === 2) {
      v11.className = "";
      v11.classList.add(offVar); 
      v12.className = "";
      v12.classList.add(onVar); 
      v14.className = "";
      v14.classList.add(offVar);
  }

  else if (intString === 3) {
      v11.className = "";
      v11.classList.add(onVar); 
      v12.className = "";
      v12.classList.add(onVar); 
      v14.className = "";
      v14.classList.add(offVar);
  }

  else if (intString === 4) {
      v11.className = "";
      v11.classList.add(offVar); 
      v12.className = "";
      v12.classList.add(offVar); 
      v14.className = "";
      v14.classList.add(onVar);
  }

  else if (intString === 5) {
      v11.className = "";
      v11.classList.add(onVar); 
      v12.className = "";
      v12.classList.add(offVar); 
      v14.className = "";
      v14.classList.add(onVar);
  }

};

// Handles the second binary light (4 LEDS -> 0, 2, 4, 8)
function ledSecond(v11, v12, v14, v18, onVar, offVar, intString) {

  if (intString === 0) {
      v11.className = "";
      v11.classList.add(offVar);
      v12.className = "";
      v12.classList.add(offVar); 
      v14.className = "";
      v14.classList.add(offVar);
      v18.className = "";
      v18.classList.add(offVar);
      
  }

  else if (intString === 1) {
      v11.className = "";
      v11.classList.add(onVar); 
      v12.className = "";
      v12.classList.add(offVar); 
      v14.className = "";
      v14.classList.add(offVar);
      v18.className = "";
      v18.classList.add(offVar);
  }

  else if (intString === 2) {
      v11.className = "";
      v11.classList.add(offVar); 
      v12.className = "";
      v12.classList.add(onVar); 
      v14.className = "";
      v14.classList.add(offVar);
      v18.className = "";
      v18.classList.add(offVar);
  }

  else if (intString === 3) {
      v11.className = "";
      v11.classList.add(onVar); 
      v12.className = "";
      v12.classList.add(onVar); 
      v14.className = "";
      v14.classList.add(offVar);
      v18.className = "";
      v18.classList.add(offVar);
  }

  else if (intString === 4) {
      v11.className = "";
      v11.classList.add(offVar); 
      v12.className = "";
      v12.classList.add(offVar); 
      v14.className = "";
      v14.classList.add(onVar);
      v18.className = "";
      v18.classList.add(offVar);
  }

  else if (intString === 5) {
      v11.className = "";
      v11.classList.add(onVar); 
      v12.className = "";
      v12.classList.add(offVar); 
      v14.className = "";
      v14.classList.add(onVar);
      v18.className = "";
      v18.classList.add(offVar);
  }

  else if (intString === 6) {
      v11.className = "";
      v11.classList.add(offVar); 
      v12.className = "";
      v12.classList.add(onVar); 
      v14.className = "";
      v14.classList.add(onVar);
      v18.className = "";
      v18.classList.add(offVar);
  }

  else if (intString === 7) {
      v11.className = "";
      v11.classList.add(onVar); 
      v12.className = "";
      v12.classList.add(onVar); 
      v14.className = "";
      v14.classList.add(onVar);
      v18.className = "";
      v18.classList.add(offVar);
  }

  else if (intString === 8) {
      v11.className = "";
      v11.classList.add(offVar); 
      v12.className = "";
      v12.classList.add(offVar); 
      v14.className = "";
      v14.classList.add(offVar);
      v18.className = "";
      v18.classList.add(onVar);
  }

  else if (intString === 9) {
      v11.className = "";
      v11.classList.add(onVar); 
      v12.className = "";
      v12.classList.add(offVar); 
      v14.className = "";
      v14.classList.add(offVar);
      v18.className = "";
      v18.classList.add(onVar);
  }

};


// Handles the day of week leds (0 -> sunday to 6 -> saturday)
function ledDayOfWeek(d0, d1, d2, d3, d4, d5, d6, onVar, offVar, intString) {

if (intString === 0) {
  d0.className = "";
  d0.classList.add(onVar);
  d1.className = "";
  d1.classList.add(offVar); 
  d2.className = "";
  d2.classList.add(offVar);
  d3.className = "";
  d3.classList.add(offVar);
  d4.className = "";
  d4.classList.add(offVar); 
  d5.className = "";
  d5.classList.add(offVar);
  d6.className = "";
  d6.classList.add(offVar);
    
}

else if (intString === 1) {
  d0.className = "";
  d0.classList.add(offVar);
  d1.className = "";
  d1.classList.add(onVar); 
  d2.className = "";
  d2.classList.add(offVar);
  d3.className = "";
  d3.classList.add(offVar);
  d4.className = "";
  d4.classList.add(offVar); 
  d5.className = "";
  d5.classList.add(offVar);
  d6.className = "";
  d6.classList.add(offVar);
}

else if (intString === 2) {
  d0.className = "";
  d0.classList.add(offVar);
  d1.className = "";
  d1.classList.add(offVar); 
  d2.className = "";
  d2.classList.add(onVar);
  d3.className = "";
  d3.classList.add(offVar);
  d4.className = "";
  d4.classList.add(offVar); 
  d5.className = "";
  d5.classList.add(offVar);
  d6.className = "";
  d6.classList.add(offVar);
}

else if (intString === 3) {
  d0.className = "";
  d0.classList.add(offVar);
  d1.className = "";
  d1.classList.add(offVar); 
  d2.className = "";
  d2.classList.add(offVar);
  d3.className = "";
  d3.classList.add(onVar);
  d4.className = "";
  d4.classList.add(offVar); 
  d5.className = "";
  d5.classList.add(offVar);
  d6.className = "";
  d6.classList.add(offVar);
}

else if (intString === 4) {
  d0.className = "";
  d0.classList.add(offVar);
  d1.className = "";
  d1.classList.add(offVar); 
  d2.className = "";
  d2.classList.add(offVar);
  d3.className = "";
  d3.classList.add(offVar);
  d4.className = "";
  d4.classList.add(onVar); 
  d5.className = "";
  d5.classList.add(offVar);
  d6.className = "";
  d6.classList.add(offVar);
}

else if (intString === 5) {
  d0.className = "";
  d0.classList.add(offVar);
  d1.className = "";
  d1.classList.add(offVar); 
  d2.className = "";
  d2.classList.add(offVar);
  d3.className = "";
  d3.classList.add(offVar);
  d4.className = "";
  d4.classList.add(offVar); 
  d5.className = "";
  d5.classList.add(onVar);
  d6.className = "";
  d6.classList.add(offVar);
}

else if (intString === 6) {
  d0.className = "";
  d0.classList.add(offVar);
  d1.className = "";
  d1.classList.add(offVar); 
  d2.className = "";
  d2.classList.add(offVar);
  d3.className = "";
  d3.classList.add(offVar);
  d4.className = "";
  d4.classList.add(offVar); 
  d5.className = "";
  d5.classList.add(offVar);
  d6.className = "";
  d6.classList.add(onVar);
}

};

// Handles the day of week multicolor leds (0 -> sunday to 6 -> saturday)
function ledDayOfWeekMulti(d0, d1, d2, d3, d4, d5, d6, onBlue, offBlue, onGreen, offGreen, onYellow, offYellow, onRed, offRed, intString) {

if (intString === 0) {
  d0.className = "";
  d0.classList.add(onBlue);
  d1.className = "";
  d1.classList.add(offGreen); 
  d2.className = "";
  d2.classList.add(offYellow);
  d3.className = "";
  d3.classList.add(offRed);
  d4.className = "";
  d4.classList.add(offBlue); 
  d5.className = "";
  d5.classList.add(offGreen);
  d6.className = "";
  d6.classList.add(offYellow);  
}

else if (intString === 1) {
  d0.className = "";
  d0.classList.add(offBlue);
  d1.className = "";
  d1.classList.add(onGreen); 
  d2.className = "";
  d2.classList.add(offYellow);
  d3.className = "";
  d3.classList.add(offRed);
  d4.className = "";
  d4.classList.add(offBlue); 
  d5.className = "";
  d5.classList.add(offGreen);
  d6.className = "";
  d6.classList.add(offYellow);  
}

else if (intString === 2) {
  d0.className = "";
  d0.classList.add(offBlue);
  d1.className = "";
  d1.classList.add(offGreen); 
  d2.className = "";
  d2.classList.add(onYellow);
  d3.className = "";
  d3.classList.add(offRed);
  d4.className = "";
  d4.classList.add(offBlue); 
  d5.className = "";
  d5.classList.add(offGreen);
  d6.className = "";
  d6.classList.add(offYellow);  
}

else if (intString === 3) {
  d0.className = "";
  d0.classList.add(offBlue);
  d1.className = "";
  d1.classList.add(offGreen); 
  d2.className = "";
  d2.classList.add(offYellow);
  d3.className = "";
  d3.classList.add(onRed);
  d4.className = "";
  d4.classList.add(offBlue); 
  d5.className = "";
  d5.classList.add(offGreen);
  d6.className = "";
  d6.classList.add(offYellow);  
}

else if (intString === 4) {
  d0.className = "";
  d0.classList.add(offBlue);
  d1.className = "";
  d1.classList.add(offGreen); 
  d2.className = "";
  d2.classList.add(offYellow);
  d3.className = "";
  d3.classList.add(offRed);
  d4.className = "";
  d4.classList.add(onBlue); 
  d5.className = "";
  d5.classList.add(offGreen);
  d6.className = "";
  d6.classList.add(offYellow);  
}

else if (intString === 5) {
  d0.className = "";
  d0.classList.add(offBlue);
  d1.className = "";
  d1.classList.add(offGreen); 
  d2.className = "";
  d2.classList.add(offYellow);
  d3.className = "";
  d3.classList.add(offRed);
  d4.className = "";
  d4.classList.add(offBlue); 
  d5.className = "";
  d5.classList.add(onGreen);
  d6.className = "";
  d6.classList.add(offYellow);  
}

else if (intString === 6) {
  d0.className = "";
  d0.classList.add(offBlue);
  d1.className = "";
  d1.classList.add(offGreen); 
  d2.className = "";
  d2.classList.add(offYellow);
  d3.className = "";
  d3.classList.add(offRed);
  d4.className = "";
  d4.classList.add(offBlue); 
  d5.className = "";
  d5.classList.add(offGreen);
  d6.className = "";
  d6.classList.add(onYellow);  
}

};

// Time Display 
function updateTime()
{
    let timeStr = "";
    let now = new Date();
    let hourTracker = 0;
    let dayOfWeekIndex = now.getDay();

    let zeroMinute = ((":0").toString()).fontcolor("#ABFF00");
    let zeroSecond = ((":0").toString()).fontcolor("#FFFF32");
    let colonMinute = ((":").toString()).fontcolor("#ABFF00");
    let colonSecond = ((":").toString()).fontcolor("#FFFF32");

    if (militaryTime === 0 && now.getHours() === 11) {
      hourTracker = 11;
    }

    else if (militaryTime === 1 && now.getHours() === 0) {
      hourTracker = 12;
    }

    else if (militaryTime === 0 && now.getHours() > 12) {
        hourTracker = now.getHours() - 12;
    }

    else {
      hourTracker = now.getHours();
    };

    
    
    if (now.getMinutes() < 10 && now.getSeconds() >= 10 && multiTracker === 0) {
        timeStr = hourTracker +":0" + now.getMinutes() + ":" + now.getSeconds();
    }

    else if (now.getMinutes() < 10 && now.getSeconds() >= 10 && multiTracker === 1) {
      hourTracker = (hourTracker.toString()).fontcolor("#24E0FF");
      getMinutes = ((now.getMinutes()).toString()).fontcolor("#ABFF00");
      getSeconds = ((now.getSeconds()).toString()).fontcolor("#FFFF32");
      timeStr = hourTracker + `${zeroMinute}` + getMinutes + `${colonSecond}` + getSeconds;
    }

    else if (now.getMinutes() < 10 && now.getSeconds() < 10 && multiTracker === 0) {
        timeStr = hourTracker + ":0" + now.getMinutes() + ":0" + now.getSeconds();
    }

    else if (now.getMinutes() < 10 && now.getSeconds() < 10 && multiTracker === 1) {
        hourTracker = (hourTracker.toString()).fontcolor("#24E0FF");
        getMinutes = ((now.getMinutes()).toString()).fontcolor("#ABFF00");
        getSeconds = ((now.getSeconds()).toString()).fontcolor("#FFFF32");
        timeStr = hourTracker +`${zeroMinute}` + getMinutes + `${zeroSecond}` + getSeconds;
    }

    else if (now.getSeconds() < 10 && multiTracker === 0) {
        timeStr = hourTracker + ":" + now.getMinutes() + ":0" + now.getSeconds();
    }

    else if (now.getSeconds() < 10 && multiTracker === 1) {
        hourTracker = (hourTracker.toString()).fontcolor("#24E0FF");
        getMinutes = ((now.getMinutes()).toString()).fontcolor("#ABFF00");
        getSeconds = ((now.getSeconds()).toString()).fontcolor("#FFFF32");
        timeStr = hourTracker + `${colonMinute}` + getMinutes + `${zeroSecond}` + getSeconds;
    }

    else if (multiTracker === 1) {
        hourTracker = (hourTracker.toString()).fontcolor("#24E0FF");
        getMinutes = ((now.getMinutes()).toString()).fontcolor("#ABFF00");
        getSeconds = ((now.getSeconds()).toString()).fontcolor("#FFFF32");
        timeStr = hourTracker + `${colonMinute}` + getMinutes + `${colonSecond}` + getSeconds;
    }

    else {
        timeStr = hourTracker +":" + now.getMinutes() + ":" + now.getSeconds();
    };
    
    timeDisplay.innerHTML = timeStr;
    clockStand.innerHTML = dayOfWeekArray[dayOfWeekIndex];

    if (multiTracker === 1) {
      ledDayOfWeekMulti(dayOfWeekSun, dayOfWeekMon, dayOfWeekTue, dayOfWeekWed, dayOfWeekThu, dayOfWeekFri, dayOfWeekSat, 'led-blue-on', 'led-blue-off', 'led-green-on', 'led-green-off', 'led-yellow-on', 'led-yellow-off', 'led-red-on', 'led-red-off', dayOfWeekIndex);
    }
    else {
      ledDayOfWeek(dayOfWeekSun, dayOfWeekMon, dayOfWeekTue, dayOfWeekWed, dayOfWeekThu, dayOfWeekFri, dayOfWeekSat, dayOfWeekOnLED, dayOfWeekOffLED, dayOfWeekIndex);
    }
};
setInterval(updateTime, 1000);


// Seconds LED Display
function updateSeconds()
{
    let nowSeconds = new Date();
    let nowSecondsString = "";

    if (nowSeconds.getSeconds() === 1) {
        secondsMath.innerHTML = `0 + ${nowSeconds.getSeconds()} = ${nowSeconds.getSeconds()}`;
        seconds.innerHTML = "Second";
        ledFirst(seconds11, seconds12, seconds14, secondsOnLED, secondsOffLED, 0);
        ledSecond(seconds21, seconds22, seconds24, seconds28, secondsOnLED, secondsOffLED, nowSeconds.getSeconds()*1);
    }

    else if (nowSeconds.getSeconds() < 10 && nowSeconds.getSeconds() != 1) {
        secondsMath.innerHTML = `0 + ${nowSeconds.getSeconds()} = ${nowSeconds.getSeconds()}`;
        seconds.innerHTML = "Seconds";
        ledFirst(seconds11, seconds12, seconds14, secondsOnLED, secondsOffLED, 0);
        ledSecond(seconds21, seconds22, seconds24, seconds28, secondsOnLED, secondsOffLED, nowSeconds.getSeconds()*1);
    }
    
    else {
        nowSecondsString = nowSeconds.getSeconds().toString();
        secondsMath.innerHTML = `${nowSecondsString[0]} + ${nowSecondsString[1]} = ${nowSecondsString}`;
        seconds.innerHTML = "Seconds";
        ledFirst(seconds11, seconds12, seconds14, secondsOnLED, secondsOffLED, nowSecondsString[0]*1);
        ledSecond(seconds21, seconds22, seconds24, seconds28, secondsOnLED, secondsOffLED, nowSecondsString[1]*1);
    }
    

};
setInterval(updateSeconds, 1000);


// Minutes LED Display
function updateMinutes()
{
    let nowMinutes = new Date();
    let nowMinutesString = "";

    if (nowMinutes.getMinutes() === 1) {
        minutesMath.innerHTML = `0 + ${nowMinutes.getMinutes()} = ${nowMinutes.getMinutes()}`;
        minutes.innerHTML = "Minute";
        minutesDemo.innerHTML = `0 + ${nowMinutes.getMinutes()} = ${nowMinutes.getMinutes()}<br>Minute`;
        ledFirst(minutes11, minutes12, minutes14, minutesOnLED, minutesOffLED, 0);
        ledSecond(minutes21, minutes22, minutes24, minutes28, minutesOnLED, minutesOffLED, nowMinutes.getMinutes()*1);
        ledFirst(minutes11d, minutes12d, minutes14d, minutesOnLED, minutesOffLED, 0);
        ledSecond(minutes21d, minutes22d, minutes24d, minutes28d, minutesOnLED, minutesOffLED, nowMinutes.getMinutes()*1);
        demoText1LED();
        demoText2LED();
        demoText3.innerHTML = `Combining these two together will yield 0 + 1 = 1 minute.`;
    }

    else if (nowMinutes.getMinutes() < 10 && nowMinutes.getMinutes() != 1) {
        minutesMath.innerHTML = `0 + ${nowMinutes.getMinutes()} = ${nowMinutes.getMinutes()}`;
        minutes.innerHTML = "Minutes";
        minutesDemo.innerHTML = `0 + ${nowMinutes.getMinutes()} = ${nowMinutes.getMinutes()}<br>Minutes`;
        ledFirst(minutes11, minutes12, minutes14, minutesOnLED, minutesOffLED, 0);
        ledSecond(minutes21, minutes22, minutes24, minutes28, minutesOnLED, minutesOffLED, nowMinutes.getMinutes()*1);
        ledFirst(minutes11d, minutes12d, minutes14d, minutesOnLED, minutesOffLED, 0);
        ledSecond(minutes21d, minutes22d, minutes24d, minutes28d, minutesOnLED, minutesOffLED, nowMinutes.getMinutes()*1);
        demoText1LED();
        demoText2LED();
        demoText3.innerHTML = `Combining these two together will yield 0 + ${nowMinutes.getMinutes()} = ${nowMinutes.getMinutes()} minutes.`;
    }
    
    else {
        nowMinutesString = nowMinutes.getMinutes().toString();
        minutesMath.innerHTML = `${nowMinutesString[0]} + ${nowMinutesString[1]} = ${nowMinutesString}`;
        minutes.innerHTML = "Minutes";
        minutesDemo.innerHTML = `${nowMinutesString[0]} + ${nowMinutesString[1]} = ${nowMinutesString}<br>Minutes`;
        ledFirst(minutes11, minutes12, minutes14, minutesOnLED, minutesOffLED, nowMinutesString[0]*1);
        ledSecond(minutes21, minutes22, minutes24, minutes28, minutesOnLED, minutesOffLED, nowMinutesString[1]*1);
        ledFirst(minutes11d, minutes12d, minutes14d, minutesOnLED, minutesOffLED, nowMinutesString[0]*1);
        ledSecond(minutes21d, minutes22d, minutes24d, minutes28d, minutesOnLED, minutesOffLED, nowMinutesString[1]*1);
        demoText1LED();
        demoText2LED();
        demoText3.innerHTML = `Combining these two together will yield ${nowMinutesString[0]} + ${nowMinutesString[1]} = ${nowMinutesString} minutes.`;
    }

};
setInterval(updateMinutes, 1000);


// Demo text to explain current minutes
function demoText1LED()
{
    if ((minutes11d.className).includes("on") === true && (minutes14d.className).includes("on") === true) {
        demoText1.innerHTML = `For minutes, the first row has the first (2<sup>0</sup>) and third LED (2<sup>2</sup>) on which is 1 + 4 = 5.`;
    }

    else if ((minutes14d.className).includes("on") === true) {
        demoText1.innerHTML = `For minutes, the first row has only the third LED (2<sup>2</sup>) on which is 4.`;
    }

    else if ((minutes11d.className).includes("on") === true && (minutes12d.className).includes("on") === true) {
        demoText1.innerHTML = `For minutes, the first row has the first (2<sup>0</sup>) and second LED (2<sup>1</sup>) on which is 1 + 2 = 3.`;
    }

    else if ((minutes12d.className).includes("on") === true) {
        demoText1.innerHTML = `For minutes, the first row has only the second LED (2<sup>1</sup>) on which is 2.`;
    }

    else if ((minutes11d.className).includes("on") === true) {
        demoText1.innerHTML = `For minutes, the first row has only the first LED on (2<sup>0</sup>) which is 1.`;
    }

    else {
        demoText1.innerHTML = `For minutes, the first row has no LEDs on which is 0.`;
    };
};

function demoText2LED()
{
    if ((minutes21d.className).includes("on") === true && (minutes28d.className).includes("on") === true) {
        demoText2.innerHTML = `The second row has the first (2<sup>0</sup>) and fourth LED (2<sup>3</sup>) on which is 1 + 8 = 9.`;
    }
    
    else if ((minutes28d.className).includes("on") === true) {
        demoText2.innerHTML = `The second row has only the fourth LED (2<sup>3</sup>) on which is 8.`;
    }

    else if ((minutes21d.className).includes("on") === true && (minutes22d.className).includes("on") === true && (minutes24d.className).includes("on") === true) {
        demoText2.innerHTML = `The second row has the first (2<sup>0</sup>), second (2<sup>1</sup>), and third LED (2<sup>2</sup>) on which is 1 + 2 + 4 = 7.`;
    }

    else if ((minutes22d.className).includes("on") === true && (minutes24d.className).includes("on") === true) {
        demoText2.innerHTML = `The second row has the second (2<sup>0</sup>) and third LED (2<sup>2</sup>) on which is 2 + 4 = 6.`;
    }

    else if ((minutes21d.className).includes("on") === true && (minutes24d.className).includes("on") === true) {
        demoText2.innerHTML = `The second row has the first (2<sup>0</sup>) and third LED (2<sup>2</sup>) on which is 1 + 4 = 5.`;
    }

    else if ((minutes24d.className).includes("on") === true) {
        demoText2.innerHTML = `The second row has only the third LED (2<sup>2</sup>) on which is 4.`;
    }

    else if ((minutes21d.className).includes("on") === true && (minutes22d.className).includes("on") === true) {
        demoText2.innerHTML = `The second row has the first (2<sup>0</sup>) and second LED (2<sup>1</sup>) on which is 1 + 2 = 3.`;
    }

    else if ((minutes22d.className).includes("on") === true) {
        demoText2.innerHTML = `The second row has only the second LED (2<sup>1</sup>) on which is 2.`;
    }

    else if ((minutes21d.className).includes("on") === true) {
        demoText2.innerHTML = `The second row has only the first LED on (2<sup>0</sup>) which is 1.`;
    }

    else {
        demoText2.innerHTML = `The second row has no LEDs on which is 0.`;
    };
};

// Hours LED Display -- Double check
function updateHours()
{
    let nowHours = new Date();
    let nowHoursString = "";

    if (nowHours.getHours() === 0 && militaryTime === 0) {
        hoursMath.innerHTML = `1 + 2 = 12`;
        hours.innerHTML = "Hours";
        ledFirst(hours11, hours12, hours14, hourOnLED, hourOffLED, 1);
        ledSecond(hours21, hours22, hours24, hours28, hourOnLED, hourOffLED, 2);
    }

    else if (nowHours.getHours() === 1) {
        hoursMath.innerHTML = `0 + ${nowHours.getHours()} = ${nowHours.getHours()}`;
        hours.innerHTML = "Hour";
        ledFirst(hours11, hours12, hours14, hourOnLED, hourOffLED, 0);
        ledSecond(hours21, hours22, hours24, hours28, hourOnLED, hourOffLED, nowHours.getHours()*1);
    }


    else if (nowHours.getHours() < 10 && nowHours.getHours() != 0 && nowHours.getHours() != 1) {
        hoursMath.innerHTML = `0 + ${nowHours.getHours()} = ${nowHours.getHours()}`;
        hours.innerHTML = "Hours";
        ledFirst(hours11, hours12, hours14, hourOnLED, hourOffLED, 0);
        ledSecond(hours21, hours22, hours24, hours28, hourOnLED, hourOffLED, nowHours.getHours()*1);
    }

    else if (nowHours.getHours() === 12) {
        hoursMath.innerHTML = `1 + 2 = 12`;
        hours.innerHTML = "Hours";
        ledFirst(hours11, hours12, hours14, hourOnLED, hourOffLED, 1);
        ledSecond(hours21, hours22, hours24, hours28, hourOnLED, hourOffLED, 2);
    }

    else if (nowHours.getHours() === 13 && militaryTime === 0) {
        hoursMath.innerHTML = `0 + 1 = 1`;
        hours.innerHTML = "Hour";
        ledFirst(hours11, hours12, hours14, hourOnLED, hourOffLED, 0);
        ledSecond(hours21, hours22, hours24, hours28, hourOnLED, hourOffLED, 1);
    }

    else if (nowHours.getHours() > 11 && nowHours.getHours() < 22 && militaryTime === 0) {
        nowHoursString = (nowHours.getHours()-12).toString();
        hoursMath.innerHTML = `0 + ${nowHoursString[0]} = ${nowHoursString[0]}`;
        hours.innerHTML = "Hours";
        ledFirst(hours11, hours12, hours14, hourOnLED, hourOffLED, 0);
        ledSecond(hours21, hours22, hours24, hours28, hourOnLED, hourOffLED, nowHoursString[0]*1);
    }

    else if (nowHours.getHours() <= 23 && nowHours.getHours() >= 22 && militaryTime === 0) {
        nowHoursString = (nowHours.getHours()-12).toString();
        hoursMath.innerHTML = `${nowHoursString[0]} + ${nowHoursString[1]} = ${nowHoursString}`;
        hours.innerHTML = "Hours";
        ledFirst(hours11, hours12, hours14, hourOnLED, hourOffLED, nowHoursString[0]*1);
        ledSecond(hours21, hours22, hours24, hours28, hourOnLED, hourOffLED, nowHoursString[1]*1);
    }
    
    else {
        nowHoursString = nowHours.getHours().toString();
        hoursMath.innerHTML = `${nowHoursString[0]} + ${nowHoursString[1]} = ${nowHoursString}`;
        hours.innerHTML = "Hours";
        ledFirst(hours11, hours12, hours14, hourOnLED, hourOffLED, nowHoursString[0]*1);
        ledSecond(hours21, hours22, hours24, hours28, hourOnLED, hourOffLED, nowHoursString[1]*1);
    }

};
setInterval(updateHours, 1000);


// AM/PM LED Display
function updateDay()
{
    let nowDay = new Date();

    if (nowDay.getHours() < 12) {
        blankNightDay.innerHTML = 'AM';
        amPm.classList = "";
        amPm.classList.add(dayOffLED);
    }

    else {
        blankNightDay.innerHTML = 'PM';
        amPm.classList = "";
        amPm.classList.add(dayOnLED);  
    };
    

};
setInterval(updateDay, 1000);

// Toggle time math, Hour, minutes, seconds and AM/PM markers
hourMarker.addEventListener('click', function() {

  if (hourMarker.checked=true && hourMarkerTracker === 0) {
      hourMarkerTracker = 1;
      
      hours.style.opacity = 1;
      minutes.style.opacity = 1;
      seconds.style.opacity = 1;
      nightDay.style.opacity = 1;

      hoursMath.style.opacity = 1;
      minutesMath.style.opacity = 1;
      document.getElementById('h3SecondsMath').style.opacity = 1;
      blankNightDay.style.opacity = 1;
  }  
  
  else if (hourMarkerTracker === 1) {

      hourMarker.checked = false;
      hourMarkerTracker = 0;
              
      hours.style.opacity = 0;
      minutes.style.opacity = 0;
      seconds.style.opacity = 0;
      nightDay.style.opacity = 0;

      hoursMath.style.opacity = 0;
      minutesMath.style.opacity = 0;
      document.getElementById('h3SecondsMath').style.opacity = 0;
      blankNightDay.style.opacity = 0;

      clockOnlyOnToggle();

  }

});

// Toggle Binary Markers
binaryMarker.addEventListener('click', function() {

  if (binaryMarker.checked=true && binaryMarkerTracker === 0) {
      binaryMarkerTracker = 1;
      clockHelpBinaryTracker = 1;

      binary8.style.opacity = 1;
      binary4.style.opacity = 1;
      binary2.style.opacity = 1;
      binary1.style.opacity = 1;
      binaryDay.style.opacity = 1;


  }  
  
  else if (binaryMarkerTracker === 1) {


      clockHelpTracker = 0;
      binaryMarkerTracker = 0;
      clockHelpBinaryTracker = 0;
      
      binary8.style.opacity = 0;
      binary4.style.opacity = 0;
      binary2.style.opacity = 0;
      binary1.style.opacity = 0;
      binaryDay.style.opacity = 0;

      clockOnlyOnToggle();

  };

});

// Toggle Time Display for PC
timeMarker.addEventListener('click', function() {

  if (timeMarker.checked=true && timeMarkerTracker === 0) {
      timeMarkerTracker = 1;
      timeDisplay.style.opacity = 1;
      clockStand.style.opacity = 1;
  }  

  else if (timeMarkerTracker === 1) {

      timeMarker.checked = false;
      timeMarkerTracker = 0;
      timeDisplay.style.opacity = 0;
      clockStand.style.opacity = 0;
  }

});

// Toggle Options ToolTip panel
clockOptions.addEventListener('click', function() {

  clockCheck();

  if (clockOptions.checked = true && optionsTracker === 0) {
      clockOnly.checked = false;

      clockTracker = 0;
      optionsTracker = 1;

      optionsPanel.style.opacity = 1;

  }

  else if (optionsTracker === 1) {

      clockOptions.checked = false;
      optionsTracker = 0;

      optionsPanel.style.opacity = 0;

      clockOnlyOnToggle();

  };

});


// Toggle ToolTip panel
toolTip.addEventListener('click', function() {

  clockCheck();

  if (toolTip.checked = true && toolTipTracker === 0) {
      clockOnly.checked = false;

      clockTracker = 0;
      toolTipTracker = 1;

      toolTipPanel.style.opacity = 1;

  }

  else if (toolTipTracker === 1) {

      toolTip.checked = false;
      toolTipTracker = 0;

      toolTipPanel.style.opacity = 0;

      clockOnlyOnToggle();

  };

});


let bodyRect = "";
var scrollBarWidth = 6;
let w = 0;
let h = 0;
// let changeTest = document.getElementById('changeTest');
let debugTracker = 0;
let panelPx = 992;

// Resize display for debugging
function windowShape() {


    bodyRect = resizeMarker.getBoundingClientRect()
    w = window.innerWidth - 2*bodyRect.left - scrollBarWidth;
    h = window.innerHeight - 2*bodyRect.top - scrollBarWidth;
    
    resizeMarker.style.width = w.toString() + 'px';
    resizeMarker.style.height = h.toString() + 'px';

    if (debug === 1 && debugTracker === 0){
      debugTracker = 1;
      $("#navUl").append(`<li class="nav-item"><a class="nav-link" id="changeTest"></a>Screen: ${w} x ${h}</li>`);
      // changeTest.innerHTML = `Width: ${w}, Height: ${h}`;
    }
    
    else {
      // changeTest.style.opacity = 0;
    };
};
window.addEventListener('resize', windowShape);
windowShape();


// Mobile Navbar
function mobileHTML() {
  $('#navUl').empty();
    $('#navUl').append(`<li class="nav-item" style="margin-top: 3px;"><label for="binaryOnlyCheckbox">Binary Only </label><span ><input type="checkbox" id="binaryOnlyCheckbox" value=0 /></span></li>`);
    $('#navUl').append(`<li class="nav-item" style="margin-top: -3px;"><label for="binaryMarkerCheckbox">Binary Markers </label><span><input type="checkbox" id="binaryMarkerCheckbox" value=1 /></span></li>`);
    $('#navUl').append(`<li class="nav-item" style="margin-top: -3px;"><label for="timeMarkerCheckbox">Time Markers </label><span><input type="checkbox" id="timeMarkerCheckbox" value=2 /></span></li>`);
    $('#navUl').append(`<li class="nav-item" style="margin-top: -3px;"><label for="timeDayCheckbox">Time & Day </label><span><input type="checkbox" id="timeDayCheckbox" value=3 /></span></li>`);
    $('#navUl').append(`<li class="nav-item" style="margin-top: -3px;"><label for="timeMilitaryCheckbox">Military Time </label><span><input type="checkbox" id="timeMilitaryCheckbox" value=4 /></span></li>`);
    $('#navUl').append(`<li class="nav-item" style="margin-top: 0px;"><h6 style="color: white; font-size: 14px;">Preset Colors:</h6></li>`); 
    $('#navUl').append(`<li class="nav-items" style="margin-top: -5px;">
    <div class="well" id="smallColorWell">
      <select id="colorSelect2" onchange="optionColorSelect(this.value)">
      <option value="clockGreen" style="background-color: #4BF153;" selected>Clock Green</option>
      <option value="multi" style="background-color: #e7e7e7;">Multicolor</option>
      <option value="blue" style="background-color:#24E0FF;">Blue</option>
      <option value="green" style="background-color:#ABFF00;">Green</option>
      <option value="yellow" style="background-color:#FF0;">Yellow</option>
      <option value="red" style="background-color:#F00;">Red</option>
      <option value="purple" style="background-color: rgb(183, 0, 255);">Purple</option>
      <option value="orange" style="background-color: rgb(255, 166, 0);">Orange</option>
      <option value="grey" style="background-color: rgb(187, 187, 187);">Grey</option>
      <option value="custom" style="background-color: linear-gradient(to right, #4BF153, #323232);">Custom</option>
      </select>
    </div>
    </li>`);
};

// Desktop Navbar
function desktopHTML() {
  $('#navUl').empty();
  $('#navUl').append(`<li class="nav-item">
  <div class="custom-control custom-switch clockOnlyColor nav-link">
    <input type="checkbox" class="custom-control-input" id="clockOnly">
    <label class="custom-control-label font-weight-normal" for="clockOnly" id="clockOnly">Clock Only</label>
  </div>
  </li>`);
  $('#navUl').append(`<li class="nav-item">
  <div class="custom-control custom-switch clockOptionsColor nav-link">
    <input type="checkbox" class="custom-control-input" id="clockOptions">
    <label class="custom-control-label font-weight-normal" for="clockOptions" id="clockOptions">Options</label>
  </div>
  </li>`);
  $('#navUl').append(`<li class="nav-item">
  <div class="custom-control custom-switch toolTipColor nav-link">
    <input type="checkbox" class="custom-control-input" id="toolTip">
    <label class="custom-control-label font-weight-normal" for="toolTip" id="toolTip">Tooltip</label>
  </div>
  </li>`);
};

function toggleVisibility(id) {
  let e = document.getElementById(id);
  e.style.display = ((e.style.display!='none') ? 'none' : 'block');
}


// Change checkbox color on mobile
function mobileCheckboxColor (sel, dm, id, int) {

  if (document.getElementById('colorSelect').value === 'custom') {
    document.getElementById('colorSelect2').value = 'custom';
  };

  // Int variable handles when going from pc to mobile and vice versa
  if (int === 1 && document.getElementById('colorSelect2').value === 'custom') {
    document.getElementById('colorSelect2').value = mobileColorwellTracker;
    document.getElementById(id).style.accentColor = customColor1;
    document.getElementById('binaryMarkerCheckbox').style.accentColor = customColor2;
    document.getElementById('timeMarkerCheckbox').style.accentColor = customColor1;
    document.getElementById('timeDayCheckbox').style.accentColor = customColor2;
    document.getElementById('timeMilitaryCheckbox').style.accentColor = customColor1;
    document.getElementById('colorSelect2').style.background = `linear-gradient(to right, ${customColor1}, ${customColor2})`;
    // document.getElementById('colorSelect2').style.background = `${customColor1}`;

  }

  else if (int === 1 && multiTracker === 1) {
    document.getElementById(id).style.accentColor = 'rgb(36, 224, 255)';
    document.getElementById('binaryMarkerCheckbox').style.accentColor = 'rgb(171, 255, 0)';
    document.getElementById('timeMarkerCheckbox').style.accentColor = 'rgb(255, 255, 0)';
    document.getElementById('timeDayCheckbox').style.accentColor = 'rgb(255, 0, 0)';
    document.getElementById('timeMilitaryCheckbox').style.accentColor = 'rgb(36, 224, 255)';
    document.getElementById('colorSelect2').style.background = 'linear-gradient(to right, rgb(36, 224, 255), rgb(171, 255, 0), rgb(255, 255, 0), rgb(255, 0, 0))';
  }

  else if (int === 1 && multiTracker === 0) {
    document.getElementById(id).style.accentColor = colorTracker;
    document.getElementById('binaryMarkerCheckbox').style.accentColor = colorTracker;
    document.getElementById('timeMarkerCheckbox').style.accentColor = colorTracker;
    document.getElementById('timeDayCheckbox').style.accentColor = colorTracker;
    document.getElementById('timeMilitaryCheckbox').style.accentColor = colorTracker;
    document.getElementById('colorSelect2').style.background = colorTracker;
  }

  // -> ADD PC INSTRUCTIONS
  // -> FURTHER DEBUG CUSTOM COLOR DROPDOWN COLORS -> 90% THERE
  else if (int === 0) {
    document.getElementById(sel).addEventListener(dm, function() {
      
      if (multiTracker === 1) {
        document.getElementById(id).style.accentColor = 'rgb(36, 224, 255)';
        document.getElementById('binaryMarkerCheckbox').style.accentColor = 'rgb(171, 255, 0)';
        document.getElementById('timeMarkerCheckbox').style.accentColor = 'rgb(255, 255, 0)';
        document.getElementById('timeDayCheckbox').style.accentColor = 'rgb(255, 0, 0)';
        document.getElementById('timeMilitaryCheckbox').style.accentColor = 'rgb(36, 224, 255)';
        document.getElementById('colorSelect2').style.background = 'linear-gradient(to right, rgb(36, 224, 255), rgb(171, 255, 0), rgb(255, 255, 0), rgb(255, 0, 0))';

      }
      else if (document.getElementById('colorSelect2').value === 'custom') {
        document.getElementById('colorSelect2').value = mobileColorwellTracker;
        document.getElementById(id).style.accentColor = customColor1;
        document.getElementById('binaryMarkerCheckbox').style.accentColor = customColor2;
        document.getElementById('timeMarkerCheckbox').style.accentColor = customColor1;
        document.getElementById('timeDayCheckbox').style.accentColor = customColor2;
        document.getElementById('timeMilitaryCheckbox').style.accentColor = customColor1;
        document.getElementById('colorSelect2').style.background = `linear-gradient(to right, ${customColor1}, ${customColor2})`;
    
      }
      else if (document.getElementById('colorSelect2').value != 'custom') {
      document.getElementById(id).style.accentColor = colorTracker;
      document.getElementById('colorSelect2').style.background = colorTracker;
      };
    });
  };
};


// Handles checkboxes
function mobileCheckboxTracker(tracker, mainMarker, mobileMarker, platform) {

  if (platform === 'main') {
    if (tracker === 1) {
      mainMarker.checked = true;
    }
    else if (tracker === 0) {
      mainMarker.checked = false;
    };
  }
  else if (platform === 'mobile') {
    if (tracker === 1) {
      document.getElementById(mobileMarker).checked = true;
    }
    else if (tracker === 0) {
      document.getElementById(mobileMarker).checked = false;
    };
  };
};

// Handles Military Time
function militaryTimeMatch(platform) {
  
  if (platform === "main") {
    if (militaryTime === 0) {
      document.getElementById('customRadio1').checked = true;
    }
    else if (militaryTime === 1) {
      document.getElementById('customRadio2').checked = true;
    };
  }
  else if (platform === "mobile") {
    if (militaryTime === 0) {
      document.getElementById('timeMilitaryCheckbox').checked = false;
    }
    else if (militaryTime === 1) {
      document.getElementById('timeMilitaryCheckbox').checked = true;
    };
  };

};

// Handles binary Only switch
function mobileBinaryOnlyCheckbox() {
  if (binaryMarkerTracker === 0 && hourMarkerTracker === 0 && timeMarkerTracker === 0) {
    document.getElementById('binaryOnlyCheckbox').checked = true;
    document.getElementById('binaryMarkerCheckbox').checked = false;
    document.getElementById('timeMarkerCheckbox').checked = false;
    document.getElementById('timeDayCheckbox').checked = false;
  }
  else if (binaryMarkerTracker === 1 || hourMarkerTracker === 1 || timeMarkerTracker === 1) {
    document.getElementById('binaryOnlyCheckbox').checked = false;
  };
};

// Reestablishes event listener for clockOptions going from mobile to PC
function mobileToPCNavHandler() {

  if (document.getElementById('clockOnly').checked === true) {
    document.getElementById('clockOnly').checked = true;
    document.getElementById('toolTip').checked = false;
    document.getElementById('clockOnly').checked = false;
    optionsPanel.style.opacity = 0;
    toolTipPanel.style.opacity = 0;
    optionsTracker = 0;
    toolTipTracker = 0;
    clockTracker = 1;
  }
  else if (document.getElementById('clockOptions').checked === true) {
    document.getElementById('clockOnly').checked = false;
    document.getElementById('clockOptions').checked = true;
    optionsPanel.style.opacity = 1;
    optionsTracker = 1;
    clockTracker = 0;
  }
  else if (document.getElementById('toolTip').checked === true) {
    document.getElementById('clockOnly').checked = false;
    document.getElementById('toolTip').checked = true;
    toolTipPanel.style.opacity = 1;
    toolTipTracker = 1;
    clockTracker = 0;
  }
  else if (document.getElementById('clockOptions').checked === false && document.getElementById('toolTip').checked === false) {
    optionsPanel.style.opacity = 0;
    toolTipPanel.style.opacity = 0;

    optionsTracker = 0;
    toolTipTracker = 0;
    clockTracker = 1;

    document.getElementById('clockOnly').checked = true;
    document.getElementById('clockOptions').checked = false;
    document.getElementById('toolTip').checked = false;
  }
  else if (document.getElementById('clockOptions').checked === false) {
    optionsPanel.style.opacity = 0;
    optionsTracker = 0;

    document.getElementById('clockOptions').checked = false;
  }
  else if (document.getElementById('toolTip').checked === false) {
    toolTipPanel.style.opacity = 0;
    toolTipTracker = 0;

    document.getElementById('toolTip').checked = false;
  };
};

function mobileToPCClockOptions() {
  if (document.getElementById('clockOptions').checked === true) {
    document.getElementById('clockOnly').checked = false;
    document.getElementById('clockOptions').checked = true;
    optionsPanel.style.opacity = 1;
    optionsTracker = 1;
    clockTracker = 0;
  }
  else if (document.getElementById('clockOptions').checked === false && document.getElementById('toolTip').checked === false) {
    optionsPanel.style.opacity = 0;
    toolTipPanel.style.opacity = 0;

    optionsTracker = 0;
    toolTipTracker = 0;
    clockTracker = 1;

    document.getElementById('clockOnly').checked = true;
    document.getElementById('clockOptions').checked = false;
    document.getElementById('toolTip').checked = false;
  }
  else if (document.getElementById('clockOptions').checked === false) {
    optionsPanel.style.opacity = 0;
    optionsTracker = 0;

    document.getElementById('clockOptions').checked = false;
  };
};

function mobileToPCToolTip() {
  if (document.getElementById('toolTip').checked === true) {
    document.getElementById('clockOnly').checked = false;
    document.getElementById('toolTip').checked = true;
    toolTipPanel.style.opacity = 1;
    toolTipTracker = 1;
    clockTracker = 0;
  }
  else if (document.getElementById('clockOptions').checked === false && document.getElementById('toolTip').checked === false) {
    optionsPanel.style.opacity = 0;
    toolTipPanel.style.opacity = 0;

    optionsTracker = 0;
    toolTipTracker = 0;
    clockTracker = 1;

    document.getElementById('clockOnly').checked = true;
    document.getElementById('clockOptions').checked = false;
    document.getElementById('toolTip').checked = false;
  }
  else if (document.getElementById('toolTip').checked === false) {
    toolTipPanel.style.opacity = 0;
    toolTipTracker = 0;

    document.getElementById('toolTip').checked = false;
  };
};

function mobileToPCClockOnly() {
  if (document.getElementById('clockOnly').checked === true) {
    document.getElementById('clockOnly').checked = true;
    document.getElementById('toolTip').checked = false;
    document.getElementById('clockOptions').checked = false;
    optionsPanel.style.opacity = 0;
    toolTipPanel.style.opacity = 0;
    optionsTracker = 0;
    toolTipTracker = 0;
    clockTracker = 1;
  }
  else if (document.getElementById('clockOnly').checked === true) {
  };
};

// Turn off panels when screen is < panelPx and change navbar options/document trackers
function panelOpacity() {

  if (w < panelPx && resizeTracker === 0) {
    resizeTracker = 1;
    optionsPanel.style.opacity = 0;
    toolTipPanel.style.opacity = 0;

    mobileHTML();

    // Fix so both colorwells are the same
    $(function () {
      var $set = $('#colorSelect, #colorSelect2');
      $set.change(function () {
        $set.not(this).val(this.value);
      });
    });

    // Handles color on screen size transition
    mobileCheckboxColor('colorSelect2', "change", 'binaryOnlyCheckbox', 1);
    mobileCheckboxColor('colorSelect2', "change", 'binaryOnlyCheckbox', 1);
    document.getElementById('colorSelect2').value = mobileColorwellTracker;


    // Handles checkboxes on screen size transition
    mobileCheckboxTracker(binaryMarkerTracker, binaryMarker, 'binaryMarkerCheckbox', 'mobile');
    mobileCheckboxTracker(hourMarkerTracker, hourMarker, 'timeMarkerCheckbox', 'mobile');
    mobileCheckboxTracker(timeMarkerTracker, timeMarker, 'timeDayCheckbox', 'mobile');
    militaryTimeMatch('mobile');
    mobileBinaryOnlyCheckbox();


    // Handles color changes
    mobileCheckboxColor('colorSelect2', "change", 'binaryMarkerCheckbox', 0);
    mobileCheckboxColor('colorSelect2', "change", 'timeMarkerCheckbox', 0);
    mobileCheckboxColor('colorSelect2', "change", 'timeDayCheckbox', 0);
    mobileCheckboxColor('colorSelect2', "change", 'timeMilitaryCheckbox', 0);
    mobileCheckboxColor('colorSelect2', "change", 'binaryOnlyCheckbox', 0);

    
  // Mobile Binary Markers
    document.getElementById('binaryMarkerCheckbox').addEventListener('click', function() {

      if (document.getElementById('binaryMarkerCheckbox').checked===true && binaryMarkerTracker === 0) {
          binaryMarkerTracker = 1;
          clockHelpBinaryTracker = 1;

          binary8.style.opacity = 1;
          binary4.style.opacity = 1;
          binary2.style.opacity = 1;
          binary1.style.opacity = 1;
          binaryDay.style.opacity = 1;

          document.getElementById('binaryOnlyCheckbox').checked = false;
      }    
      else if (binaryMarkerTracker === 1) {
          clockHelpTracker = 0;
          binaryMarkerTracker = 0;
          clockHelpBinaryTracker = 0;
          
          binary8.style.opacity = 0;
          binary4.style.opacity = 0;
          binary2.style.opacity = 0;
          binary1.style.opacity = 0;
          binaryDay.style.opacity = 0;
      };
      mobileBinaryOnlyCheckbox();

    });

    // Mobile Time Markers
    document.getElementById('timeMarkerCheckbox').addEventListener('click', function() {

      if (document.getElementById('timeMarkerCheckbox').checked===true && hourMarkerTracker === 0) {
          hourMarkerTracker = 1;
          
          hours.style.opacity = 1;
          minutes.style.opacity = 1;
          seconds.style.opacity = 1;
          nightDay.style.opacity = 1;
    
          hoursMath.style.opacity = 1;
          minutesMath.style.opacity = 1;
          document.getElementById('h3SecondsMath').style.opacity = 1;
          blankNightDay.style.opacity = 1;

          document.getElementById('binaryOnlyCheckbox').checked = false;
      }  
      
      else if (hourMarkerTracker === 1) {
    
          hourMarkerTracker = 0;
                  
          hours.style.opacity = 0;
          minutes.style.opacity = 0;
          seconds.style.opacity = 0;
          nightDay.style.opacity = 0;
    
          hoursMath.style.opacity = 0;
          minutesMath.style.opacity = 0;
          document.getElementById('h3SecondsMath').style.opacity = 0;
          blankNightDay.style.opacity = 0;
    
      };
      mobileBinaryOnlyCheckbox();
    
    });

    document.getElementById('timeDayCheckbox').addEventListener('click', function() {

      if (document.getElementById('timeDayCheckbox').checked===true && timeMarkerTracker === 0) {
          timeMarkerTracker = 1;
          timeDisplay.style.opacity = 1;
          clockStand.style.opacity = 1;

          document.getElementById('binaryOnlyCheckbox').checked = false;
      }  
    
      else if (timeMarkerTracker === 1) {
    
          timeMarker.checked = false;
          timeMarkerTracker = 0;
          timeDisplay.style.opacity = 0;
          clockStand.style.opacity = 0;
      };
      mobileBinaryOnlyCheckbox();
    
    });

    document.getElementById('timeMilitaryCheckbox').addEventListener('click', function() {

      if (document.getElementById('timeMilitaryCheckbox').checked === true) {
        militaryTime = 1;
      }

      else {
        militaryTime = 0;
      }

      });

    // Turn off everything on mobile
    document.getElementById('binaryOnlyCheckbox').addEventListener('click', function() {

      if (document.getElementById('binaryOnlyCheckbox').checked === true) {

        // Binary Markers
        clockHelpTracker = 0;
        binaryMarkerTracker = 0;
        clockHelpBinaryTracker = 0;
        binary8.style.opacity = 0;
        binary4.style.opacity = 0;
        binary2.style.opacity = 0;
        binary1.style.opacity = 0;
        binaryDay.style.opacity = 0;

        // Hours
        hourMarkerTracker = 0;
        hours.style.opacity = 0;
        minutes.style.opacity = 0;
        seconds.style.opacity = 0;
        nightDay.style.opacity = 0;
        hoursMath.style.opacity = 0;
        minutesMath.style.opacity = 0;
        document.getElementById('h3SecondsMath').style.opacity = 0;
        blankNightDay.style.opacity = 0;

        // Time Display
        timeMarker.checked = false;
        timeMarkerTracker = 0;
        timeDisplay.style.opacity = 0;
        clockStand.style.opacity = 0;

        // All three unchecked
        document.getElementById('binaryMarkerCheckbox').checked = false;
        document.getElementById('timeMarkerCheckbox').checked = false;
        document.getElementById('timeDayCheckbox').checked = false;

      }

      else {
      
      };

    });

    }

  // //////////////////////////////////////////////////////////////
  // Mobile to PC with both panels active prior to transistion
  else if (w >= panelPx && optionsTracker === 1 && toolTipTracker === 1 && resizeTracker === 1) {
    resizeTracker = 0;

    desktopHTML();
    
    optionsPanel.style.opacity = 1;
    toolTipPanel.style.opacity = 1;
    document.getElementById('clockOptions').checked = true;
    document.getElementById('toolTip').checked = true;
    document.getElementById('clockOnly').checked = false;


    // Handles navbar eventlisteners
    document.getElementById('clockOptions').addEventListener('click', function() {
      mobileToPCClockOptions();
    });
    document.getElementById('toolTip').addEventListener('click', function() {
      mobileToPCToolTip();
    });
    document.getElementById('clockOnly').addEventListener('click', function() {
      mobileToPCClockOnly();
    });

    // Handles checkboxes on screen size transition
    mobileCheckboxTracker(binaryMarkerTracker, binaryMarker, 'binaryMarkerCheckbox', 'main');
    mobileCheckboxTracker(hourMarkerTracker, hourMarker, 'timeMarkerCheckbox', 'main');
    mobileCheckboxTracker(timeMarkerTracker, timeMarker, 'timeDayCheckbox', 'main');
    militaryTimeMatch('main');
  }

  // //////////////////////////////////////////////////////////////
  // Mobile to PC with only options panel active prior to transistion
  else if (w >= panelPx && optionsTracker === 1 && resizeTracker === 1) {
    resizeTracker = 0;
    desktopHTML();

    optionsPanel.style.opacity = 1;
    document.getElementById('clockOptions').checked = true;
    document.getElementById('clockOnly').checked = false;

    // Handles navbar eventlisteners
    document.getElementById('clockOptions').addEventListener('click', function() {
      mobileToPCClockOptions();
    });
    document.getElementById('toolTip').addEventListener('click', function() {
      mobileToPCToolTip();
    });
    document.getElementById('clockOnly').addEventListener('click', function() {
      mobileToPCClockOnly();
    });

    
    // Handles checkboxes on screen size transition
    mobileCheckboxTracker(binaryMarkerTracker, binaryMarker, 'binaryMarkerCheckbox', 'main');
    mobileCheckboxTracker(hourMarkerTracker, hourMarker, 'timeMarkerCheckbox', 'main');
    mobileCheckboxTracker(timeMarkerTracker, timeMarker, 'timeDayCheckbox', 'main');
    militaryTimeMatch('main');
  }

  // //////////////////////////////////////////////////////////////
  // Mobile to PC with only tooltip panel active prior to transistion
  else if (w >= panelPx && toolTipTracker === 1 && resizeTracker === 1) {
    resizeTracker = 0;

    desktopHTML();

    toolTipPanel.style.opacity = 1;
    document.getElementById('toolTip').checked = true;
    document.getElementById('clockOnly').checked = false;

    // Handles navbar eventlisteners
    document.getElementById('clockOptions').addEventListener('click', function() {
      mobileToPCClockOptions();
    });
    document.getElementById('toolTip').addEventListener('click', function() {
      mobileToPCToolTip();
    });
    document.getElementById('clockOnly').addEventListener('click', function() {
      mobileToPCClockOnly();
    });

    // Handles checkboxes on screen size transition
    mobileCheckboxTracker(binaryMarkerTracker, binaryMarker, 'binaryMarkerCheckbox', 'main');
    mobileCheckboxTracker(hourMarkerTracker, hourMarker, 'timeMarkerCheckbox', 'main');
    mobileCheckboxTracker(timeMarkerTracker, timeMarker, 'timeDayCheckbox', 'main');
    militaryTimeMatch('main');
  }

  // //////////////////////////////////////////////////////////////
  // Mobile to PC with neither panel active prior to transistion
  else if (w >= panelPx && resizeTracker === 1) {
    resizeTracker = 0;
    desktopHTML();

    document.getElementById('clockOptions').checked = false;
    document.getElementById('toolTip').checked = false;
    document.getElementById('clockOnly').checked = true;

    // Handles navbar eventlisteners
    document.getElementById('clockOptions').addEventListener('click', function() {
      mobileToPCClockOptions();
    });
    document.getElementById('toolTip').addEventListener('click', function() {
      mobileToPCToolTip();
    });
    document.getElementById('clockOnly').addEventListener('click', function() {
      mobileToPCClockOnly();
    });

    // Handles checkboxes on screen size transition
    mobileCheckboxTracker(binaryMarkerTracker, binaryMarker, 'binaryMarkerCheckbox', 'main');
    mobileCheckboxTracker(hourMarkerTracker, hourMarker, 'timeMarkerCheckbox', 'main');
    mobileCheckboxTracker(timeMarkerTracker, timeMarker, 'timeDayCheckbox', 'main');
    militaryTimeMatch('main');
  }


};
window.addEventListener('resize', panelOpacity);
panelOpacity();
