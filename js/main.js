$(document).ready(function() {
    //Menu
    // CHANGED //
    //$("#menu").mmenu({
      //  classes: "mm-light"
     //});
     var $lateral_menu_trigger = $('#cd-menu-trigger'),
    $content_wrapper = $('.cd-main-content'),
    $navigation = $('header');

  //open-close lateral menu clicking on the menu icon
  $lateral_menu_trigger.on('click', function(event){
    event.preventDefault();
    
    $lateral_menu_trigger.toggleClass('is-clicked');
    $navigation.toggleClass('lateral-menu-is-open');
    $content_wrapper.toggleClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
      // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
      $('body').toggleClass('overflow-hidden');
    });
    $('#cd-lateral-nav').toggleClass('lateral-menu-is-open');
    
    //check if transitions are not supported - i.e. in IE9
    if($('html').hasClass('no-csstransitions')) {
      $('body').toggleClass('overflow-hidden');
    }
  });

  //close lateral menu clicking outside the menu itself
  $content_wrapper.on('click', function(event){
    if( !$(event.target).is('#cd-menu-trigger, #cd-menu-trigger span') ) {
      $lateral_menu_trigger.removeClass('is-clicked');
      $navigation.removeClass('lateral-menu-is-open');
      $content_wrapper.removeClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
        $('body').removeClass('overflow-hidden');
      });
      $('#cd-lateral-nav').removeClass('lateral-menu-is-open');
      //check if transitions are not supported
      if($('html').hasClass('no-csstransitions')) {
        $('body').removeClass('overflow-hidden');
      }

    }
  });

  //open (or close) submenu items in the lateral menu. Close all the other open submenu items.
  $('.item-has-children').children('a').on('click', function(event){
    event.preventDefault();
    $(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.item-has-children').siblings('.item-has-children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(200);
  });


     
     
     // Detect if scrolled to footer
     var inview = new Waypoint.Inview({
        element: $('.site-footer')[0],
        enter: function() {
          $( "body" ).addClass( "footer-in-view" );
        },
        exited: function() {
          $( "body" ).removeClass( "footer-in-view" );
        },
      })
      
    // external links in new window
    var extAnchors = $('a[rel~=external]');
    $.each(
        extAnchors,
        function (index, item) {
            $(item).attr('target', '_blank');
        }
    );
    
    //home
    /*if ($(window).width() > 640) {
      $('.home > .wrapper').equalize({children: 'div'});
    }*/
    
    
    //dropdown
    $(".dropdown-button").click(function() {
      $(".dropdown-menu").toggleClass("show-menu");
      $(".dropdown-menu > li").click(function(){
        $(".dropdown-menu").removeClass("show-menu");
      });
      
    });
    
    
    //filters
    $("#menu .filter > a").click(function() { 
      $(this).parent('.filter').toggleClass("active");
    });    
    
 });


// TWITTER FETCHER //
var configProfile = {
  "profile": {"screenName": 'ecoledesdonnees'},
  "domId": 'EDD-tweet',
  "maxTweets": 1,
  "enableLinks": true, 
  "showUser": true,
  "showTime": true,
  "showImages": false,
  "lang": 'fr'
};
twitterFetcher.fetch(configProfile);




/*function populateTpl(tweets){
  var element = document.getElementById('EDD-tweet');
  var html = '<ul>';
  for (var i = 0, lgth = tweets.length; i < lgth ; i++) {
    var tweetObject = tweets[i];
    html += '<li>'
      + (tweetObject.image ? '<div class="tweet-img"><img src="'+tweetObject.image+'" /></div>' : '')
      + '<p class="tweet-content">' + tweetObject.tweet + '</p>'
      + '<p class="tweet-infos">Posted on the ' + tweetObject.time + ', by ' + tweetObject.author + '</p>'
      + '<p class="tweet-link"><a href="' + tweetObject.permalinkURL + '">Link</a></p>'
    + '</li>';
  }
  html += '</ul>';
  element.innerHTML = html;
}*/
