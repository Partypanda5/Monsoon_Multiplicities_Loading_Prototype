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

//var imageInCorner = document.querySelector('#imageInCorner');
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
var brickSubchapter = document.querySelector('#bricksFocus');
var plasticSubchapter = document.querySelector('#plasticFocus');

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
var pedagogySmallTabHeading = document.querySelector('#Pedagogy');
var dragonflySmallTabHeading = document.querySelector('#DragonFlies');
var oceanSmallTabHeading = document.querySelector('#Ocean');
var brickSmallTabHeading = document.querySelector('#Bricks');
var plasticSmallTabHeading = document.querySelector("#Plastic");

let smallTabHeadingArray =  
[
  hilsaSmallTabHeading, snakesSmallTabHeading, saltSmallTabHeading, dhakaSmallTabHeading, khalsSmallTabHeading, timeSmallTabHeading, sedimentSmallTabHeading, airSmallTabHeading, potsSmallTabHeading, weedsSmallTabHeading, londonSmallTabHeading, tanksSmallTabHeading, tanksSmallTabHeading, groundwaterSmallTabHeading, ethnographySmallTabHeading, atmosphereSmallTabHeading, spaceSmallTabHeading, chennaiSmallTabHeading, yangonSmallTabHeading, pedagogySmallTabHeading, dragonflySmallTabHeading, oceanSmallTabHeading, brickSmallTabHeading, plasticSmallTabHeading
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
      chennaiSubchapter,
      brickSubchapter,
      plasticSubchapter
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
       // arrayName[i].style.textDecoration = "underline";

        arrayName[i].style.fontWeight = "900";
      }
      else if (arrayName[i] != undefined)
      {
        //arrayName[i].style.textDecoration = "none";
        arrayName[i].style.fontWeight = "400";
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

function FadeInOut (windowName,loadFunc)
{
  $('.Layout__wrapper-container').fadeOut(700);
  setTimeout(function()
  {
    loadFunc();
    // $(windowName).ready( function() {
    //   $('.Layout__wrapper-container').fadeIn(1000);
    // });
    $(windowName.document).ready(function() {
            $('.Layout__wrapper-container').fadeIn(1000);
    });
  },700);
}

var section = $('li');

function toggleAccordion() 
{
  section.removeClass('active');
  $(this).addClass('active');
}


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
  location.reload();

});

brickSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(brickSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(brickSubchapter, bigHeadingArray);

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut("bricks.html",() => 
  {
    $(".Layout__wrapper-container").load("bricks.html"); 
  });

});

plasticSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(plasticSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(plasticSubchapter, bigHeadingArray);

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut("plastic.html",() => 
  {
    $(".Layout__wrapper-container").load("plastic.html"); 
  });

});



dragonSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(dragonflySmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(dragonSubchapter, bigHeadingArray);

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut("dragonfly.html",() => 
  {
    $(".Layout__wrapper-container").load("dragonfly.html"); 
  });

});


pedagogySubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(pedagogySmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(pedagogySubchapter, bigHeadingArray);

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut("pedagogy.html",() => 
  {
    $(".Layout__wrapper-container").load("pedagogy.html"); 
  });

});

yangonSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(yangonSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(yangonSubchapter, bigHeadingArray);

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut("yangon.html",() => 
  {
    $(".Layout__wrapper-container").load("yangon.html"); 
  });

});


hilsaSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(hilsaSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(hilsaSubchapter, bigHeadingArray);

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut("hilsa.html",() => 
  {
    $(".Layout__wrapper-container").load("hilsa.html"); 
  });

});

snakesSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(snakesSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(snakesSubchapter, bigHeadingArray);

  $('#backgroundVideo').fadeOut(2000);
  
  FadeInOut("snakes.html",() => 
  {
    $(".Layout__wrapper-container").load("snakes.html"); 
  });

});

saltSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(saltSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(saltSubchapter, bigHeadingArray);

  $('#backgroundVideo').fadeOut(2000);
  
  FadeInOut("salt.html",() => 
  {
    $(".Layout__wrapper-container").load("salt.html"); 
  });

});

dhakaSubchapter.addEventListener('click', function() 
{

  setTabHeadingStyling(dhakaSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(dhakaSubchapter, bigHeadingArray);

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut("dhaka.html",() => 
  {
     $(".Layout__wrapper-container").load("dhaka.html"); 
  });

});

khalsSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(khalsSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(khalsSubchapter, bigHeadingArray);

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut("khals.html",() => 
  {
    $(".Layout__wrapper-container").load("khals.html"); 
  });

});

timeSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(timeSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(timeSubchapter, bigHeadingArray);

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut("time.html",() => 
  {
    $(".Layout__wrapper-container").load("time.html"); 
  });

});

sedimentSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(sedimentSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(sedimentSubchapter, bigHeadingArray);

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut("sediment.html",() => 
  {
    $(".Layout__wrapper-container").load("sediment.html"); 
  });

});


airSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(airSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(airSubchapter, bigHeadingArray);

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut("air.html",() => 
  {
    $(".Layout__wrapper-container").load("air.html"); 
  });

});

pipesPotsSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(potsSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(pipesPotsSubchapter, bigHeadingArray);

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut("pots.html",() => 
  {
    $(".Layout__wrapper-container").load("pots.html"); 
  });
});


weedsSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(weedsSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(weedsSubchapter, bigHeadingArray);

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut("weeds.html",() => 
  {
    $(".Layout__wrapper-container").load("weeds.html"); 
  });

});

londonSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(londonSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(londonSubchapter, bigHeadingArray);

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut("london.html",() => 
  {
    $(".Layout__wrapper-container").load("london.html"); 
  });

});


tankSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(tanksSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(tankSubchapter, bigHeadingArray);

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut("tanks.html",() => 
  {
    $(".Layout__wrapper-container").load("tanks.html"); 
  });
});

groundwaterSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(groundwaterSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(groundwaterSubchapter, bigHeadingArray);

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut("groundwater.html",() => 
  {
    $(".Layout__wrapper-container").load("groundwater.html"); 
  });
});

ethnographySubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(ethnographySmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(ethnographySubchapter, bigHeadingArray);

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut("enthography.html",() => 
  {
    $(".Layout__wrapper-container").load("enthography.html"); 
  });

});

atmosphereSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(atmosphereSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(atmosphereSubchapter, bigHeadingArray);

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut("atmosphere.html",() => 
  {
    $(".Layout__wrapper-container").load("atmosphere.html"); 
  });

});


spaceSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(spaceSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(spaceSubchapter, bigHeadingArray);

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut("space.html",() => 
  {
    $(".Layout__wrapper-container").load("space.html"); 
  });

});


chennaiSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(chennaiSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(chennaiSubchapter, bigHeadingArray);

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut("chennai.html",() => 
  {
    $(".Layout__wrapper-container").load("chennai.html"); 
  });

});


drawingSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(drawingSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(drawingSubchapter, bigHeadingArray);

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut("drawing.html",() => 
  {
    $(".Layout__wrapper-container").load("drawing.html"); 
  });

});

oceanSubchapter.addEventListener('click', function() 
{
  setTabHeadingStyling(oceanSmallTabHeading, smallTabHeadingArray);
  setTabHeadingStyling(oceanSubchapter, bigHeadingArray);

  $('#backgroundVideo').fadeOut(2000);

  FadeInOut("ocean.html",() => 
  {
    $(".Layout__wrapper-container").load("ocean.html"); 
  });
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

