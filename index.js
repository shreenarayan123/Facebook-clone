//side-bar

const sideItems = document.querySelectorAll('.side-items');
const message = document.querySelector('.message');
const messages = document.querySelector('.messages ');
//customization
const theme = document.querySelector('.theme');
const Customization = document.querySelector('.Custom');
const color = document.querySelector('.color');
//message search
const messageSearch = document.querySelector('#message-search');
//fontsize
const fontSize = document.querySelector(".sizing span ");
var root = document.querySelector(":root");
//const array=Array.from(fontSize);
//colorpallete
const colorPallete=document.querySelector('.colors');
const array2=Array.from(colorPallete);
//background
const bg1=document.querySelector(".bg-1");
const bg2=document.querySelector(".bg-2");
const bg3=document.querySelector(".bg-3");
//color
const yellow=document.querySelector(".YELLOW");
const purple=document.querySelector(".PURPLE");
const red=document.querySelector(".RED");
const green=document.querySelector(".GREEN");
const skyblue=document.querySelector(".SKY-BLUE");
//change font
const font1=document.querySelector(".fonts-1");
const font2=document.querySelector(".fonts-2");
const font3=document.querySelector(".fonts-3");
const font4=document.querySelector(".fonts-4");
const font5=document.querySelector(".fonts-5");

//remove active class from all side-items
const changeActiveItem = () => {
    sideItems.forEach(items => {
        items.classList.remove('active');
    })
}
//=====active class and notification popup====//
sideItems.forEach(items => {
    items.addEventListener('click', () => {
        changeActiveItem();
        items.classList.add('active');
        if (items.id != "notification") {
            document.querySelector('.notification-pop').style.display = 'none';
        }
        else {
            document.querySelector('.notification-pop').style.display = 'block';
            document.querySelector('#notification .notification-count').style.display = 'none';
        }


    })
}
)

//=====MESSAGE====//
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name=chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        } else{
            chat.style.display = 'none';
        }
    })
}




//===search msg===//
messageSearch.addEventListener('keyup', messageSearch);

//====message card highlight====//
message.addEventListener('click', () => {

    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
    document.querySelector('.message .notification-count').style.display = 'none';

});
//=== open theme cutomization===/
theme.addEventListener('click', () => {
    Customization.style.display = 'grid';
    
})


//closes theme
const closetheme = (e) => {
    if (e.target.classList.contains("Custom")) {
        Customization.style.display = "none";
    }
}


//close theme
Customization.addEventListener('click', closetheme);


//===theme customization color====//

//colorPallete.forEach(color => {
    //color.addEventListener('click', () => {
       //changecolor();
        
    //});


    //change every color using addeventlistener
    yellow.addEventListener('click',()=>{
        removeCactive();
        yellow.classList.toggle("active");

        let primaryHue;
                 
            primaryHue =61;
            root.style.setProperty('--primary-color-hue',primaryHue);
        
    })
    purple.addEventListener('click',()=>{
        removeCactive();
        purple.classList.toggle("active");
        let primaryHue;
        
            primaryHue =290;
            root.style.setProperty('--primary-color-hue',primaryHue);
    })
    red.addEventListener('click',()=>{
        removeCactive();
        red.classList.toggle("active");
        let primaryHue;
       
            primaryHue =358;
            root.style.setProperty('--primary-color-hue',primaryHue);
        
    })
    green.addEventListener('click',()=>{
        removeCactive();
        green.classList.toggle("active");
        let primaryHue;
       
            primaryHue =110;
            root.style.setProperty('--primary-color-hue',primaryHue);
    })
    skyblue.addEventListener('click',()=>{
        removeCactive();
        skyblue.classList.toggle("active");
        let primaryHue;
        
            primaryHue =183;
            root.style.setProperty('--primary-color-hue',primaryHue);
    })

//})
yellow.addEventListener('click', ()=>{
    let primaryHue;
        
    primaryHue=61;
    root.style.setProperty('--primary-color-hue',primaryHue); 
           
   
   
});

//change fonts using addeventlistner
font1.addEventListener('click',()=>{
    removeActiveClass();
    
font1.classList.toggle('active');
let fontsize;
fontsize = '10px';
root.style.setProperty('----sticky-top-left','5.4rem');
root.style.setProperty('----sticky-top-right','5.4rem');
document.querySelector('html').style.fontSize = fontsize;


} )
font2.addEventListener('click',()=>{
    removeActiveClass();
    let fontsize;
font2.classList.toggle('active');
fontsize = '13px';
    root.style.setProperty('----sticky-top-left','5.4rem');
    root.style.setProperty('----sticky-top-right','-7rem');
document.querySelector('html').style.fontSize= fontsize;

} )
font3.addEventListener('click',()=>{
    removeActiveClass();
    let fontsize;
font3.classList.toggle('active');
fontsize = '16px';
    root.style.setProperty('----sticky-top-left','-2rem');
    root.style.setProperty('----sticky-top-right','-17rem');
document.querySelector('html').style.fontSize = fontsize;
} )
font4.addEventListener('click',()=>{
   removeActiveClass();
    let fontsize;
font4.classList.toggle('active');
fontsize = '19px';
root.style.setProperty('----sticky-top-left','-5rem');
root.style.setProperty('----sticky-top-right','-25rem');
document.querySelector('html').style.fontSize = fontsize;
} )
font5.addEventListener('click',()=>{
    removeActiveClass();
    let fontsize;
font5.classList.toggle('active');
fontsize = '22px';
    root.style.setProperty('----sticky-top-left','-12rem');
    root.style.setProperty('----sticky-top-right','-35rem');
document.querySelector('html').style.fontSize = fontsize;
} )

//remove active class from color elements
const removeCactive=()=>{
    yellow.classList.remove("active");
    purple.classList.remove("active");
    red.classList.remove("active");
    green.classList.remove("active");
    skyblue.classList.remove("active");
}









    
    


//remove active class from size elements

const removeActiveClass =  () =>{
   
        font1.classList.remove('active');
        font2.classList.remove('active');
        font3.classList.remove('active');
        font4.classList.remove('active');
        font5.classList.remove('active');
    
}





//background theme 
let lightlightness;
let darklightness;
let whitelightness;


//change active of bg
const changeActivebg=()=>{
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    bg3.classList.remove('active');
}
//change background
const changeBg = ()=>{
    root.style.setProperty('--light-color-lightness', lightlightness);
    root.style.setProperty('--dark-color-lightness', darklightness);
    root.style.setProperty('--white-color-lightness', whitelightness);
}


bg2.addEventListener('click', ()=>{
    lightlightness='15%';
     darklightness='95%';
     whitelightness='20%';
    
     changeActivebg();
     //add active
     bg2.classList.toggle('active');
     //remove active
     
    changeBg();
});

bg1.addEventListener('click', ()=>{
   
    changeActivebg();
     //add active
     bg1.classList.toggle('active');
     //remove active
     
     //remove customized changes from local storage
     window.location.reload();
    changeBg();
});

bg3.addEventListener('click', ()=>{
    lightlightness='0%';
     darklightness='95%';
     whitelightness='10%';
    
     changeActivebg();
     //add active
     bg3.classList.toggle('active');
     //remove active
     
    changeBg();
});

