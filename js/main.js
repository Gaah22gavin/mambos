// hurmbarger
  $(document).ready(function(){

    $('.menubar').on("click",function(){
      $(this).toggleClass('barOpen');
      $('header').toggleClass('open');
      console.log("heoll");
    });

  });
  
  $('.read').on('click', function(){
    $('.list').toggleClass('net');
      var element = document.getElementsByClassName(".read");
      element.innerHTML = "close"; 
  })

// end here

// =============slick===============
$(document).on('ready', function(){

  $(".center_two").slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 1000,
    speed:2000,
    nextArrow:"#nxt-arrow",
    prevArrow:"#prv-arrow",
    fade: true,
  });

  // $(".special-slick").slick({
  //   dots: false,
  //   infinite: true,
  //   // initialSlide: 3,
  //   // slidesToShow: 3,
  //   slidesToScroll: 2,
  //   // autoplay:true,
  //   nextArrow:".right",
  //   prevArrow:".left",
  //   cssEase: 'linear',
  //   // autoplaySpeed: 0,
  //   // speed:2000,
  //   // initialSlide: 3,

  //   centerMode: true,
  //   // centerPadding: '60px',
  //   slidesToShow: 3,
  //   centerMode: true,
  //   // focusOnSelect: true,

  //   responsive:[        
  //     {
  //       breakpoint:480,
  //       settings:{
  //         slidesToShow:1,
  //         slidesToScroll:1,
  //         nextArrow:false,
  //         prevArrow:false,
  //       }        
  //     },

  //     {
  //       breakpoint:1024,
  //       settings:{
  //         slidesToShow:2,
  //         slidesToScroll:2,
  //       }
  //     }
  // ]

  // });


  $(".special-slick").slick({
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay:true,
    nextArrow:".right",
    prevArrow:".left",
    

    responsive:[        
      {
        breakpoint:480,
        settings:{
          slidesToShow:1,
          slidesToScroll:1,
          nextArrow:false,
          prevArrow:false,
          autoplaySpeed: 1000,
          speed:2000,
        }        
      },

      {
        breakpoint:1024,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
          dots: true,
        }
      }
  ]
  });

  $(".customer-slick").slick({
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay:true,
    arrow:false,

    responsive:[        
      {
        breakpoint:480,
        settings:{
          slidesToShow:3,
          slidesToScroll:2,
        }        
      },

      {
        breakpoint:1024,
        settings:{
          slidesToShow:3,
          slidesToScroll:2,
        }
      }
  ]
  });  

  $(".Acoustic-slick").slick({
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 1000,
    speed:2000,
    nextArrow:"#right-two",
    prevArrow:"#left-two",
    

    responsive:[        
      {
        breakpoint:480,
        settings:{
          slidesToShow:1,
          slidesToScroll:1,
          nextArrow:false,
          prevArrow:false,
        }        
      },

      {
        breakpoint:1024,
        settings:{
          slidesToShow:1,
          slidesToScroll:1,
          nextArrow:false,
          prevArrow:false,
        }
      }
  ]
  });
  
  $(".our-menu-slick").slick({
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:false,
    arrow:false,

    responsive:[        
      {
        breakpoint:480,
        settings:{
          slidesToShow:3,
          slidesToScroll:2,
        }        
      },

      {
        breakpoint:1024,
        settings:{
          slidesToShow:4,
          slidesToScroll:2,
        }
      }
  ]
  });

});
// end here

// tabs
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
// end here



// =======================================


function customer(evtt, names) {
  var i, tabbs, links;
  tabbs = document.getElementsByClassName("tabbs");
  for (i = 0; i < tabbs.length; i++) {
    tabbs[i].style.display = "none";
  }
  links = document.getElementsByClassName("links");
  for (i = 0; i < links.length; i++) {
    links[i].className = links[i].className.replace("active", "");
  }
  document.getElementById(names).style.display = "block";
  evtt.currentTarget.className += "active";
}
document.getElementById("defaultOOpen").click();
// end here


// ==========================================




var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);



var menuToggle = document.querySelector("#menu-toggle");
var activeElements = document.querySelectorAll(".active-element");
var toggledMenu = menuToggle.addEventListener("click", function(){
  for(var activated = 0; activated < activeElements.length; activated++){
      activeElements[activated].classList.toggle("active");
  }
})


const slider= document.querySelector(".indicator img");
const menu_btns = document.querySelectorAll(".menu-btn")



for (let i = 0; i < menu_btns.length; i++) {
    menu_btns[i].addEventListener('click',e=>{
      let bd = document.querySelector("body")
      let xPos = 0
      if (bd.offsetWidth >768) {
        xPos = menu_btns[i].offsetLeft + (menu_btns[i].offsetWidth/2)
      } else{
        xPos = e.x 
      }
      slider.style.left = xPos + "px"
    });
  }


