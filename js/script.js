var accordianContainer = document.querySelector('#accordianSection');
var monsoonalMultiplicitiesTitle = document.querySelector('#multipleMonsoons');
var backGroundvideo = document.querySelector('#backgroundVideo');
var leftHandSideMM = false;

var aboutNav = document.querySelector('#aboutPanelNav');
var eventsNav = document.querySelector('#EventsPanelNav');
var residencyNav = document.querySelector('#ResidencyPanelNav');
var landingPageRightContainer = document.querySelector('#RightTextContainer');
var MonsoonalPanelNav = document.querySelector('#GlossaryNav');
var CollabPanelNav = document.querySelector('#CollabPanelNav');
var acknowledgementsNav = document.querySelector('#AcknowledgementPanelNav');
var MonsoonPanelNav = document.querySelector('#MonsoonPanelNav');

var contentSection = document.getElementById('primaryPanel');
var contentSectionTitle = document.getElementById('cityHeadings');
var primaryPanelContainer = document.querySelector('.Layout__wrapper-container');
var primaryTitle = document.querySelector('.cityName');
var contentText = document.querySelector('.contentText');
var cityTitle = document.querySelector('.cityTitle');
var leftHandHeadings = document.querySelector('.headings');

var imageInCorner = document.querySelector('#imageInCorner');
var airSubchapter = document.querySelector('#airFocus');
var atmosphereSubchapter = document.querySelector('#atmosphereFocus');
var groundwaterSubchapter = document.querySelector('#groundwaterFocus');
var oceanSubchapter = document.querySelector('#oceanFocus');
var saltSubchapter = document.querySelector('#saltFocus');
var sedimentSubchapter = document.querySelector('#sedimentFocus');
var dragonSubchapter = document.querySelector('#dragonFliesFocus');
var hilsaSubchapter = document.querySelector('#HilsaFishairFocus');
var snakesSubchapter = document.querySelector('#SnakesFocus');
var weedsSubchapter = document.querySelector('#WeedsFocus');
var khalsSubchapter = document.querySelector('#khalsFocus');
var tankSubchapter = document.querySelector('#tanksFocus');
var pipesPotsSubchapter = document.querySelector('#pipesPotsFocus');
var timeSubchapter = document.querySelector('#timeFocused');
var pedagogySubchapter = document.querySelector('#pedagogyFocused');
var spaceSubchapter = document.querySelector('#spaceFocused');
var drawingSubchapter = document.querySelector('#drawingFocused');
var ethnographySubchapter = document.querySelector('#ethnographyFocused');
var londonSubchapter = document.querySelector('#londonFocus');
var yangonSubchapter = document.querySelector('#yangonFocus');
var dhakaSubchapter = document.querySelector('#dhakaFocus');
var chennaiSubchapter = document.querySelector('#chennaiFocus');

var hilsaSmallTabHeading = document.querySelector('#HilsaFish');
var snakesSmallTabHeading = document.querySelector('#Snakes');
var saltSmallTabHeading = document.querySelector('#Salt');
var dhakaSmallTabHeading = document.querySelector('#DhakaNav');
var khalsSmallTabHeading = document.querySelector('#Khals');
var timeSmallTabHeading = document.querySelector('#Time');
var sedimentSmallTabHeading = document.querySelector('#Sediment');
var airSmallTabHeading = document.querySelector('#Air');
var potsSmallTabHeading = document.querySelector('#PipesAndPots');
var weedsSmallTabHeading = document.querySelector('#Weeds');
var londonSmallTabHeading = document.querySelector('#LondonNav');
var tanksSmallTabHeading = document.querySelector('#Tanks');
var groundwaterSmallTabHeading = document.querySelector('#groundwaterFocus');
var ethnographySmallTabHeading = document.querySelector('#Ethnography');
var atmosphereSmallTabHeading = document.querySelector('#Atmosphere');
var spaceSmallTabHeading = document.querySelector('#Space');
var chennaiSmallTabHeading = document.querySelector('#ChennaiNav');
var drawingSmallTabHeading = document.querySelector('#Drawing');
var yangonSmallTabHeading = document.querySelector('#YangonNav');

let smallTabHeadingArray =  
[
  hilsaSmallTabHeading, snakesSmallTabHeading, saltSmallTabHeading, dhakaSmallTabHeading, khalsSmallTabHeading, timeSmallTabHeading, sedimentSmallTabHeading, airSmallTabHeading, potsSmallTabHeading, weedsSmallTabHeading, londonSmallTabHeading, tanksSmallTabHeading, tanksSmallTabHeading, groundwaterSmallTabHeading, ethnographySmallTabHeading, atmosphereSmallTabHeading, spaceSmallTabHeading, chennaiSmallTabHeading, yangonSmallTabHeading
];

let bigHeadingArray = 
[
      airSubchapter,
      atmosphereSubchapter,
      groundwaterSubchapter,
      oceanSubchapter,
      saltSubchapter,
      sedimentSubchapter,
      dragonSubchapter,
      hilsaSubchapter,
      snakesSubchapter,
      weedsSubchapter,
      khalsSubchapter, 
      tankSubchapter, 
      pipesPotsSubchapter,
      timeSubchapter,
      pedagogySubchapter,
      spaceSubchapter,
      drawingSubchapter,
      ethnographySubchapter,
      londonSubchapter,
      yangonSubchapter,
      dhakaSubchapter, 
      chennaiSubchapter
]

var AccordianOne = document.getElementById('sectionOne');
var AccordianTwo = document.getElementById('sectionTwo');
var AccordianThree = document.getElementById('sectionThree');
var AccordianFour = document.getElementById('sectionFour');
var AccordianFive = document.getElementById('sectionFive');

var subtitleContainerOne = document.getElementById('subtitleContainerOne');
var focusedSubtitlesOne = document.getElementById('focusedSubtitlesOne');
var subtitleContainerTwo = document.getElementById('subtitleContainerTwo');
var focusedSubtitlesTwo = document.getElementById('focusedSubtitlesTwo');
var subtitleContainerThree = document.getElementById('subtitleContainerThree');
var focusedSubtitlesThree = document.getElementById('focusedSubtitlesThree');
var subtitleContainerFour = document.getElementById('subtitleContainerFour');
var subtitleContainerFive = document.getElementById('subtitleContainerFive');
var focusedSubtitlesFour = document.getElementById('focusedSubtitlesFour');
var focusedSubtitlesFive = document.getElementById('focusedSubtitlesFive');
var groupedFocusedSubtitles = document.querySelectorAll('.focusedSingleSubtitle');

var videoContent = document.getElementById('videoContent');

var residencySection = document.querySelector('#residency');
var eventsSection = document.querySelector('#events');
var aboutSection = document.querySelector('#about');
var glossarySection = document.querySelector('#glossarySection');
var collaboratorsSection = document.querySelector('#collaboratorsSection');
var acknowledgementSection = document.querySelector('#acknowledgementSection');
var assemblagesSection = document.querySelector('#assemblagesSection');

$( document ).ready(function() 
{
  $('.Layout__wrapper-container').fadeOut(0);
    $(".Layout__wrapper-container").load("landing.html"); 
    $('.Layout__wrapper-container').fadeIn(800);
});

function setTabHeadingStyling (tabName, arrayName) 
{
    for (let i = 0; i < arrayName.length; i++)
    {

      if (arrayName[i] == tabName)
      {
        arrayName[i].style.textDecoration = "underline";
      }
      else if (arrayName[i] != undefined)
      {
        arrayName[i].style.textDecoration = "none";
      }
    }
}


(function () {
  function logElementEvent(eventName, element) {
    console.log(Date.now(), eventName, element.getAttribute("data-src"));
  }

  var callback_enter = function (element) {
    logElementEvent("🔑 ENTERED", element);
  };
  var callback_exit = function (element) {
    logElementEvent("🚪 EXITED", element);
  };
  var callback_loading = function (element) {
    logElementEvent("⌚ LOADING", element);
  };
  var callback_loaded = function (element) {
    logElementEvent("👍 LOADED", element);
  };
  var callback_error = function (element) {
    logElementEvent("💀 ERROR", element);
    element.src =
      "https://via.placeholder.com/440x560/?text=Error+Placeholder";
  };
  var callback_finish = function () {
    logElementEvent("✔️ FINISHED", document.documentElement);
  };
  var callback_cancel = function (element) {
    logElementEvent("🔥 CANCEL", element);
  };

  var myLazyLoad = new LazyLoad({
    container: document.querySelector(".Layout__wrapper-container"),
    threshold: 300,
    callback_enter: callback_enter,
    callback_exit: callback_exit,
    callback_cancel: callback_cancel,
    callback_loading: callback_loading,
    callback_loaded: callback_loaded,
    callback_error: callback_error,
    callback_finish: callback_finish
  });
})();

function FadeInOut (loadFunc)
{
  $('.Layout__wrapper-container').fadeOut(700);

  setTimeout(function()
  { 
    loadFunc();
    $('.Layout__wrapper-container').fadeIn(1000);
  }, 700);
  
}

var section = $('li');

function toggleAccordion() 
{
  section.removeClass('active');
  $(this).addClass('active');
}

dragonSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/Dragonfly.jpg';
});

hilsaSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/Hilsa-fish2.jpg';
});

snakesSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/snakes.gif';
});

weedsSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/weed.jpg';
});

airSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/air.gif';
});

atmosphereSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/atmosphere3.gif';
});

groundwaterSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/Groundwater.jpg';
});

oceanSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/OCEAN.jpg';
});

saltSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/salt.jpg';
});

sedimentSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/sediment2.gif';
});

khalsSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/Khals.jpg';
});

tankSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/Tanks2.jpg';
});

pipesPotsSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/PipesPots.jpg';
});

timeSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/time.gif';
});

pedagogySubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/pedagogy2.gif';
});

spaceSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/space.gif';
});

drawingSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/Drawing.jpg';
});

ethnographySubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/ethnography.gif';
});

chennaiSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/chennai.gif';
});

dhakaSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/dhaka.gif';
});

londonSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/London.jpg';
});

yangonSubchapter.addEventListener('mouseover', function() 
{
  imageInCorner.src = 'assets/images/bottomRightImages/Yangon.gif';
});

Array.from(groupedFocusedSubtitles).forEach(subtitle => {
  subtitle.addEventListener('click', function(event) 
  {
    leftHandSideMM = true;
    checkLeftHandSideMM();  
  });
});

monsoonalMultiplicitiesTitle.addEventListener('click', function() 
{
  leftHandSideMM = false;
  checkLeftHandSideMM(); 

  FadeInOut(() => 
  {
    $(".Layout__wrapper-container").load("landing.html"); 
  });

  hilsaSmallTabHeading.style.textDecoration = "none";
  snakesSmallTabHeading.style.textDecoration = "none";
  khalsSmallTabHeading.style.textDecoration = "none";
  saltSmallTabHeading.style.textDecoration = "none";
  tankSubchapter.style.textDecoration = 'none';
  londonSubchapter.style.textDecoration = 'none';
  weedsSubchapter.style.textDecoration = 'none';
  dhakaSmallTabHeading.style.textDecoration = "none";
  timeSubchapter.style.textDecoration = "none";
  sedimentSmallTabHeading.style.textDecoration = "none";
  airSmallTabHeading.style.textDecoration = "none";
  potsSmallTabHeading.style.textDecoration = 'none';
  groundwaterSubchapter.style.textDecoration = 'none';
  atmosphereSubchapter.style.textDecoration = 'none';
  ethnographySubchapter.style.textDecoration = 'none';
  spaceSubchapter.style.textDecoration = 'none';
  chennaiSubchapter.style.textDecoration = 'none';

  hilsaSubchapter.style.textDecoration = "none";
  weedsSmallTabHeading.style.textDecoration = 'none';
  groundwaterSmallTabHeading.style.textDecoration = 'none';
  snakesSubchapter.style.textDecoration = "none";
  saltSubchapter.style.textDecoration = "none";
  tanksSmallTabHeading.style.textDecoration = 'none';
  dhakaSubchapter.style.textDecoration = "none";
  khalsSubchapter.style.textDecoration = "none";
  timeSmallTabHeading.style.textDecoration = "none";
  londonSmallTabHeading.style.textDecoration = 'none';
  sedimentSubchapter.style.textDecoration = "none";
  airSubchapter.style.textDecoration = "none";
  pipesPotsSubchapter.style.textDecoration = 'none';
  ethnographySmallTabHeading.style.textDecoration = 'none';
  spaceSmallTabHeading.style.textDecoration = 'none';
  atmosphereSmallTabHeading.style.textDecoration = 'none';
  chennaiSmallTabHeading.style.textDecoration = 'none';

  $('#backgroundVideo').fadeIn(3000);
});

yangonSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(yangonSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(yangonSubchapter, bigHeadingArray);

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut(() => 
  {
    $(".Layout__wrapper-container").load("yangon.html"); 
  });

  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});


hilsaSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(hilsaSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(hilsaSubchapter, bigHeadingArray);

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut(() => 
  {
    $(".Layout__wrapper-container").load("hilsa.html"); 
  });

  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});

snakesSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(snakesSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(snakesSubchapter, bigHeadingArray);

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  $('#backgroundVideo').fadeOut(2000);
  
  FadeInOut(() => 
  {
    $(".Layout__wrapper-container").load("snakes.html"); 
  });

  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});

saltSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(saltSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(saltSubchapter, bigHeadingArray);

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  $('#backgroundVideo').fadeOut(2000);
  
  FadeInOut(() => 
  {
    $(".Layout__wrapper-container").load("salt.html"); 
  });


  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});

dhakaSubchapter.addEventListener('click', function() 
{

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  setTabHeadingStyling(dhakaSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(dhakaSubchapter, bigHeadingArray);

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut(() => 
  {
    $(".Layout__wrapper-container").load("dhaka.html"); 
  });


  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});

khalsSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(khalsSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(khalsSubchapter, bigHeadingArray);

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut(() => 
  {
    $(".Layout__wrapper-container").load("khals.html"); 
  });

  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});

timeSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(timeSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(timeSubchapter, bigHeadingArray);

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut(() => 
  {
    $(".Layout__wrapper-container").load("time.html"); 
  });


  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});

sedimentSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(sedimentSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(sedimentSubchapter, bigHeadingArray);

  imageInCorner.style.display = "none";
  imageInCorner.src = '';


  $('#backgroundVideo').fadeOut(2000);

  FadeInOut(() => 
  {
    $(".Layout__wrapper-container").load("sediment.html"); 
  });

  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});


airSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(airSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(airSubchapter, bigHeadingArray);

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut(() => 
  {
    $(".Layout__wrapper-container").load("air.html"); 
  });


  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});

pipesPotsSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(potsSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(pipesPotsSubchapter, bigHeadingArray);

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut(() => 
  {
    $(".Layout__wrapper-container").load("pots.html"); 
  });

  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});


weedsSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(weedsSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(weedsSubchapter, bigHeadingArray);
  
  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut(() => 
  {
    $(".Layout__wrapper-container").load("weeds.html"); 
  });


  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});

londonSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(londonSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(londonSubchapter, bigHeadingArray);

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut(() => 
  {
    $(".Layout__wrapper-container").load("london.html"); 
  });

  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});


tankSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(tanksSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(tankSubchapter, bigHeadingArray);
  
  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut(() => 
  {
    $(".Layout__wrapper-container").load("tanks.html"); 
  });


  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});

groundwaterSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(groundwaterSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(groundwaterSubchapter, bigHeadingArray);

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut(() => 
  {
    $(".Layout__wrapper-container").load("groundwater.html"); 
  });


  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});

ethnographySubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(ethnographySmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(ethnographySubchapter, bigHeadingArray);

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut(() => 
  {
    $(".Layout__wrapper-container").load("enthography.html"); 
  });

  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});

atmosphereSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(atmosphereSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(atmosphereSubchapter, bigHeadingArray);

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut(() => 
  {
    $(".Layout__wrapper-container").load("atmosphere.html"); 
  });

  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});


spaceSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(spaceSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(spaceSubchapter, bigHeadingArray);

  imageInCorner.style.display = "none";
  imageInCorner.src = '';


  $('#backgroundVideo').fadeOut(2000);

  FadeInOut(() => 
  {
    $(".Layout__wrapper-container").load("space.html"); 
  });


  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});


chennaiSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(chennaiSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(chennaiSubchapter, bigHeadingArray);
  
  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut(() => 
  {
    $(".Layout__wrapper-container").load("chennai.html"); 
  });

  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});


drawingSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(drawingSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(drawingSubchapter, bigHeadingArray);

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut(() => 
  {
    $(".Layout__wrapper-container").load("drawing.html"); 
  });

  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});

oceanSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(drawingSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(drawingSubchapter, bigHeadingArray);

  imageInCorner.style.display = "none";
  imageInCorner.src = '';

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut(() => 
  {
    $(".Layout__wrapper-container").load("ocean.html"); 
  });

  setTimeout(function()
  { 
    imageInCorner.style.display = "block";
  }, 5000);
});


 function checkActiveAccordian()
{
    if (AccordianOne.classList.contains('active'))
    {
      subtitleContainerOne.style.display = 'none';
      focusedSubtitlesOne.style.display = 'block';

    }
    else if (AccordianTwo.classList.contains('active'))
    {
      subtitleContainerTwo.style.display = 'none';
      focusedSubtitlesTwo.style.display = 'block';
    }
    else if (AccordianThree.classList.contains('active'))
    {
      subtitleContainerThree.style.display = 'none';
      focusedSubtitlesThree.style.display = 'block';
    }
    else if (AccordianFour.classList.contains('active'))
    {
      subtitleContainerFour.style.display = 'none';
      focusedSubtitlesFour.style.display = 'block';
    }
    else if (AccordianFive.classList.contains('active'))
    {
      subtitleContainerFive.style.display = 'none';
      focusedSubtitlesFive.style.display = 'block';
    }
}

function checkInactiveAccordian()
{
  if(!$(sectionOne).hasClass("active"))
  {
    subtitleContainerOne.style.display = 'inline';
    focusedSubtitlesOne.style.display = 'none';

  }
  if (!$(sectionTwo).hasClass("active"))
  { 
    subtitleContainerTwo.style.display = 'inline';
    focusedSubtitlesTwo.style.display = 'none';

  }
  if (!$(sectionThree).hasClass("active"))
  {
    subtitleContainerThree.style.display = 'inline';
    focusedSubtitlesThree.style.display = 'none';

  }
  if (!$(sectionFour).hasClass("active"))
  {
    subtitleContainerFour.style.display = 'inline';
    focusedSubtitlesFour.style.display = 'none';

  }
  if (!$(sectionFive).hasClass("active"))
  {
    subtitleContainerFive.style.display = 'inline';
    focusedSubtitlesFive.style.display = 'none';
  }
}

function checkLeftHandSideMM () 
{
  if (leftHandSideMM === true)
  {
    $(".headingTitle").animate({opacity: 1}, 2500);
    $(".headingItem").animate({opacity: 1}, 2500);

    $('.MMContainer').fadeOut(2000);
  }

  else if (leftHandSideMM === false)
  {
    $(".headingTitle").animate({opacity: 0}, 1000);
    $(".headingItem").animate({opacity: 0}, 1000);
  }
}

section.on('click', toggleAccordion);
section.on('click', checkActiveAccordian);
section.on('click', checkInactiveAccordian);

checkActiveAccordian();
checkInactiveAccordian();