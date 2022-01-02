const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const all = document.getElementById('all');
const cakes = document.getElementById('cakes');
const cookes = document.getElementById('cookies');
const breads = document.getElementById('breads');
const pies = document.getElementById('pies');
const btn = document.getElementsByClassName('btn1');


toggleButton.addEventListener('click', function (){
    navbarLinks.classList.toggle('active');
})

all.addEventListener('click', function(){
  $('.active').removeClass('active');
    btn[0].classList.toggle('active');
})

cakes.addEventListener('click', function(){
    $('.active').removeClass('active');
    btn[1].classList.toggle('active');
    
})

cookies.addEventListener('click', function(){
  $('.active').removeClass('active');
  btn[2].classList.toggle('active');
  
})

pies.addEventListener('click', function(){
  $('.active').removeClass('active');
  btn[3].classList.toggle('active');
  
})

breads.addEventListener('click', function(){
  $('.active').removeClass('active');
  btn[4].classList.toggle('active');
  
})


$(document).ready(function(){

    btn[0].classList.toggle('active');
    $('.category .button-container .btn1').click(function(){

        let filter = $(this).attr('data-filter');
    
        if(filter == 'all'){
          $('.category .image-container .box').show('400')
        }else{
          $('.category .image-container .box').not('.'+filter).hide('200');
          $('.category .image-container .box').filter('.'+filter).show('400');
        }
       
      });

    



      
});