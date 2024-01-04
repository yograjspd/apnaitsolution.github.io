
// function numCounter(tagId,maxCount,speed){
//     var initialNumber = 0;
//     function counter(){
//         document.getElementById(tagId).innerHTML = initialNumber;
//         ++initialNumber;
//     }
//     var counterDelay = setInterval(counter,speed);
//     function totalTime(){
//         clearInterval(counterDelay);
//     }
//     var totalPeriod = speed * (maxCount);  
//     setTimeout(totalTime, totalPeriod);
// }

//numCounter("Partners",1000000,1);
//numCounter("Projects",1000000,1);



const coun = document.querySelectorAll('.value');
const speed = 1500;

coun.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText.replace('+','').replace(',','');
    let speedN=(counter.getAttribute('akhi')/1000);
      const time = value / speedN;
     if(data < value) {
          counter.innerText = (Math.ceil(data + time)).toLocaleString('us-US') +'+';
          setTimeout(animate, 1);
        }else{
          counter.innerText = value.toLocaleString('us-US') +'+';
        }
     
   }
   
   animate();
});








$('.slick-sliderSS').slick({
  	centerMode: true,
  	margin: 0,
  	centerPadding: '220px',
  	slidesToShow: 3,
  	infinite: true,
  	arrows: false,
  	autoplay: true,
    focusOnSelect: true,
  	autoplaySpeed: 2000,
   	responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 1
      }
    }
  ]
});


//slider for tanent setion
$('#tanent_slider_main').slick({
  autoplay: true,
  vertical: true,
  infinite: true,
  verticalSwiping: true,
  slidesPerRow: 1,
  slidesToShow: 1,
  sNavFor: '#tanent_slider_nav',
  focusOnSelect: true
  
});

$('#tanent_slider_nav').slick({
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  slidesPerRow: 1,
  asNavFor: '#tanent_slider_main',
  vertical: true,
  focusOnSelect: true,
  infinite: true,
  centerMode: true,
  verticalSwiping: true,
  focusOnSelect: true
});

$('#tanent_slider_nav .slick-slide').eq(0).addClass('slick-current');
$('#tanent_slider_main').on('afterChange', function(event, slick, currentSlide){
         //remove all active class
         $('#tanent_slider_nav .slick-slide').removeClass('slick-current');
         //set active class for current slide
         $('#tanent_slider_nav .slick-slide').eq(currentSlide).addClass('slick-current');         

});


//slider for Host section

$('#host_slider_main').slick({
  autoplay: true,
  vertical: true,
  infinite: true,
  verticalSwiping: true,
  slidesPerRow: 1,
  slidesToShow: 1,
  sNavFor: '#host_slider_nav',
  focusOnSelect: true
  
});

$('#host_slider_nav').slick({
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  slidesPerRow: 1,
  asNavFor: '#host_slider_main',
  vertical: true,
  focusOnSelect: true,
  infinite: true,
  centerMode: true,
  verticalSwiping: true,
  focusOnSelect: true
});

$('#host_slider_nav .slick-slide').eq(0).addClass('slick-current');
$('#host_slider_main').on('afterChange', function(event, slick, currentSlide){
         //remove all active class
         $('#host_slider_nav .slick-slide').removeClass('slick-current');
         //set active class for current slide
         $('#host_slider_nav .slick-slide').eq(currentSlide).addClass('slick-current');         

});

$('#tabTenants').on('shown.bs.tab', function (e) {
    $("#tanent_slider_nav").slick("refresh");
    $("#tanent_slider_main").slick("refresh");
});

$('#tabHosts').on('shown.bs.tab', function (e) {
     $("#host_slider_nav").slick("refresh");
    $("#host_slider_main").slick("refresh");
});









var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});
















(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 6.7;

  // Improved date format
  const dayMonth = "02/02/";
  
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }

  const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {
          const now = new Date().getTime(),
                distance = countDown - now;

          document.getElementById("days").innerText = Math.floor(distance / day),
          document.getElementById("hours").innerText = Math.floor((distance % day) / hour),
          document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute),
          document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

          // Do something later when the date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
        }, 1000); // Updated interval to 1 second
})();





