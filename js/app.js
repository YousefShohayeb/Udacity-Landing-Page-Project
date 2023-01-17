const getSec = document.getElementsByClassName('section');
const getDiv = document.getElementsByTagName('div');
const list = document.querySelector('ul');
const divsArray = Array.prototype.slice.call(getDiv);
const secArray = Array.prototype.slice.call(getSec)

//global constants above for global access as they are needed for several functions and loops

//the listBuilder function builds the navigation bar list. does not use document fragment as that broke the website multiple times
function listBuilder (){
    secArray.forEach(function(li){
        let item = document.createElement('li');
        let link = li.id; //gets id for link for use in innerHTML
        item.innerHTML = `<a href="#${li.id}" target="_self"> Section ${li.id}</a>`;
        list.appendChild(item);
    })
}
listBuilder();

//global variables needed only for anchArray.forEach loop
const anchors = document.getElementsByTagName('a')
const anchArray = Array.prototype.slice.call(anchors)

anchArray.forEach((anch,index)=>{
    //num selects the section to be scrolled to under the name 'num'
    let num = secArray[index]; 
    //the click event listener looks for a click in order to run the scrolle function. function must remain inside for num value to work
    anch.addEventListener('click',scroller);
    function scroller (clicky){
        clicky.preventDefault();
        num.scrollIntoView({behavior:'smooth'}) //scrolls the correct section into view
    }
});

//caller function for animating and selecting active sections of the page.
//active section gets weird when a section is collapsed
function caller () {
    let sectionArray = Array.prototype.slice.call(getSec);
    //the above is called during the function because it provides an updated positions for getBoundingClientRect()
    sectionArray.forEach(function (section, index){
        let top = section.getBoundingClientRect().top;
        let bottom = section.getBoundingClientRect().bottom;
        let height = section.getBoundingClientRect().height;
        //the above are selectors used for detecting the ratio of the box displayed in the if statement below
        if (top/height>-0.7265 && top/height<0.279 && height/bottom>-0.3 && height/bottom<4){
            divsArray[index].classList.add('animated'); //will animate loaded field once, notice how it's not toggled
            section.classList.add('active'); //toggle not used here either because it would toggle with every scroll detection of while on screen
            anchArray[index].classList.add('active') //same as above, only adds an active class to the navbar item tied to the correct section
        } else {
            section.classList.remove('active') //this and the one below it will remove active status when the section is off screen
            anchArray[index].classList.remove('active')
        }
    })
}
document.addEventListener('scroll',caller); //calls the caller function each time it's scrolled
caller(); //calls the script once when javascript is loaded, this loads the hidden page.

for (para of document.querySelectorAll('p')){
    para.classList.add('show')
} // the above code adds the 'show' tag to all p elements to allow easier access to toggle in the function below

for (div of getDiv){
    let header = div.querySelector('h2') //header and paras are selecting the h2 and p elements within the specific div element
    let paras = div.querySelectorAll('p')
    header.addEventListener('click',hider); //click on the header to hide/show the paragraphs
    function hider (){ //function is inline because it doesn't work otherwise
        paras.forEach(para=> {
            para.classList.toggle('hide')//hide will hide the p elements, show will reveal them once more
            para.classList.toggle('show')
        })
    }

}

const navBar = document.querySelector('nav'); //navigation bar global declaration used for multiple functions

function navBarHide (){
    navBar.classList.add('hider'); //adds class that hides nav bar
    anchArray.forEach(function (anchor){
        anchor.classList.add('hider'); //adds class that turns displays of anchors to 'none'
    });
}

const timer = setTimeout(navBarHide,5000); //times out after 5 seconds, hiding the navigation bar


document.addEventListener('scroll',navBarShow); //listens for scrolling, turning on the navbar

function navBarShow (){
    navBar.classList.remove('hider'); //shows the navbar by removing the hiding class
    anchArray.forEach(function (anchor){
        anchor.classList.remove('hider'); //shows the anchors of the navbar by removing hiding class
    });
    timer; //resets timer on scroll.
}