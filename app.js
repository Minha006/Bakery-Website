// =============Show Menu===========
const navMenu = document.getElementById('nav_menu'),
      navToggle = document.getElementById('nav_toggle'),
      navClose = document.getElementById('nav_close')

// show menu Function
    if(navToggle){
        navToggle.addEventListener('click', () =>{
             navMenu.classList.add("show-menu")
        })
    }  
//hide menu Function
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove("show-menu")
    })
}
// ===========Remove menu mobile===========
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () => {
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show-menu')
}
  navLink.forEach(n => n.addEventListener('click', linkAction))

//   =========Add Blur Background=================
const blurHeader = () => {
    const header = document.getElementById('header')
     window.scrollY >= 50 ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header');

    window.addEventListener('scroll', blurHeader);                    
}
// =====Show Scroll Up
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll' , scrollUp);

//=======Scroll Section Active Link
const sections = document.querySelectorAll('section[id')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const  sectionHeight = current.offsetHeight,
               sectionTop = current.offsetTop - 58,
               sectionId = current.getAttribute('id'),
               sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId  + ']');

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
    }else{
          sectionsClass.classList.remove('active-link')
    }        

})
}
window.addEventListener('scroll', scrollActive);

//  =====Scroll Reveal Animation======
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    opacity: 1,
    scale: 1.1,
    duration: 2500,
    delay: 300,
    //reset: true, //Animations repeat
})
sr.reveal(`.home_data, .about_img, .about_data, .visit_data`)

sr.reveal(`.home_image, .footer_img-1, .footer_img-2` , {rotate: {z: -15} })
sr.reveal(`.home_bread, .about_bread` , {rotate: {z: 15} })
sr.reveal(`.home_footer`, {scale: 1, origin: 'bottom' })

sr.reveal(`.new_card:nth-child(1) img ` , {rotate: {z: -30}, distance:0})
sr.reveal(`.new_card:nth-child(2) img ` , {rotate: {z: 15}, distance:0, delay: 600})
sr.reveal(`.new_card:nth-child(3) img ` , {rotate: {z: -30}, distance:0, delay: 900})

sr.reveal(`.favourite_card img`, {interval:100, rotate: {z: 15}, distance:0})

sr.reveal(`.footer_container` , {scale: 1})

