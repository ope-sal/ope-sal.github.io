(function (){
    var previousScroll = 0;
    var navClasses = document.getElementById("navbar").classList;

    window.addEventListener('scroll', function(e){
       var currentScroll = window.scrollY;
       var isDown = currentScroll > previousScroll;

       if ( isDown && !navClasses.contains('navbar-up') ){
          // scrolling down, didn't add class yet
          navClasses.add('navbar-up'); // we hide the navbar
       } else if ( !isDown ){
          // scrolling up
          navClasses.remove('navbar-up'); // won't error if no class found
       }

       // always update position
       previousScroll = currentScroll;
    });
}()); //run this anonymous function immediately
