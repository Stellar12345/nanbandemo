const $ = window.$;

window.addEventListener('DOMContentLoaded', event => {



    const sidebarWrapper = document.getElementById('navbarResponsive');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.navbar-toggler');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#navbarResponsiver .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.navbar-toggler > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.navbar-toggler > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }


    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
     
    };
    
    // Shrink the navbar 
    navbarShrink();
    
    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);
    
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })

    });


      $(document).ready(function() {

        $.fn.carousel.Constructor.prototype.cycle = function (event)
        {
            if (!event)
                this._isPaused = false;
    
            if (this._interval)
            {
                clearInterval(this._interval);
                this._interval = null;
            }
    
            if (this._config.interval && !this._isPaused)
            {
                var item = $('.carousel-item-next');
                var newInterval = item.data('interval') || this._config.interval;
    
                this._interval = setInterval(
                    (document.visibilityState ? this.nextWhenVisible : this.next).bind(this),
                    newInterval
                );
            }
            //console.log(newInterval);
        };
     
    }); 
    
    function fadeOut(el) {
        el.style.opacity = 1;
        (function fade() {
            if ((el.style.opacity -= .1) < 0) {
                el.style.display = "none";
            } else {
                requestAnimationFrame(fade);
            }
        })();
    };
    function fadeIn(el, display) {
        el.style.opacity = 0;
        el.style.display = display || "block";
        (function fade() {
            var val = parseFloat(el.style.opacity);
            if (!((val += .1) > 1)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    };


    $('.customCarousel').carousel({
        interval: 4000, AutoPlay:false
      });


     

   
//     window.addEventListener('DOMContentLoaded', event => {
//     const DownloadImage = document.body.querySelector('.download-img');
//     DownloadImage.addEventListener('click', event => {
//         var arr = $('.ads_Checkbox:checked').map(function(img){  
//            return this.value;
//         }).get();      
         
//         for(i=0;i<arr.length;i++) {
//            url =  $('#gallery_'+arr[i]).attr('src');
//            downloadImage(url)
//         console.log(i);
//      }

//             });
           

// });
// window.addEventListener('DOMContentLoaded', event => {
//     const DownloadImage = document.body.querySelector('.download-img');
//     DownloadImage.addEventListener('click', event => {
//         var arr = $('.ads_Checkbox:checked').map(function(img){  
//            return this.value;
//         }).get();      
         
//         for(i=0;i<arr.length;i++) {
//            url =  $('#gallery_'+arr[i]).attr('src');
//            downloadImage(url)
//         console.log(i);
//      }

//             });         
// });

// $(window).on('load', function() {
//     $('#modal-popup').modal('show');
    
// });


// function downloadImage(url) {
//   fetch(url, {
//     mode : 'no-cors',
//   })
//     .then(response => response.blob())
//     .then(blob => {
//     let blobUrl = window.URL.createObjectURL(blob);
//     let a = document.createElement('a');
//     a.download = url.replace(/^.*[\\\/]/, '');
//     a.href = blobUrl;
//     document.body.appendChild(a);
//     a.click();
//     a.remove();
//   })
// }

 window.addEventListener('DOMContentLoaded', event => {
    const Myclass = document.body.querySelector('.media-outlet');
    const MyDeadline = document.body.querySelector('.deadline-class');
    
    $(".inquiry_topic").on("change",function(){
        var id = $(this).val();
        if(id==1) {
            Myclass.classList.add('media-outlet-active');
            MyDeadline.classList.add('deadline-class-active');
        } else {
            Myclass.classList.remove('media-outlet-active');
            MyDeadline.classList.remove('deadline-class-active');
        }
        
     }); 
});


window.addEventListener('DOMContentLoaded', event => {
    
    const DownloadImage = document.body.querySelector('.download-img');
    DownloadImage.addEventListener('click', event => {
        var arr = $('.ads_Checkbox:checked').map(function(img){  
           return this.value;
        }).get();      
        for(var i=0;i<arr.length;i++) {
            var url =  $('#'+arr[i]).attr('src');
           downloadImage(url)
        }
    });
    });


    async function downloadImage(url) {
        const image = await fetch(url)
        const imageBlog = await image.blob()
        const imageURL = URL.createObjectURL(imageBlog)
    
        const link = document.createElement('a')
        link.href = imageURL
        link.download = 'nanban-media'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }