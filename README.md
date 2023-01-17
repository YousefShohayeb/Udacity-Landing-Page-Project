
# This is the readme for Yousef's Landing Page. Hello!

This is a project for the ITIDA/Egypt FWD initiative/ITIDA scholarship program.

## Description

This project is a basic landing page made with HTML, CSS and Javascript. The navigation bar has anchors that will scroll to the different sections of the webpage. Scrolling to the sections in the webpage will show which section is active in the navigation bar. On load, the sections will appear empty and then will slide in from the right using CSS animations. Clicking on the headers titled 'Section (number)' will hide the text of the section. Clicking the header again will show the text once more. The navigation bar should disappear after 5 seconds of not scrolling but this feature is currently bugged.

## Installation

To view the webpage, please right click the index.html file and open with an appropriate browser, Firefox or Google Chrome are recommended.

Alternatively, drag and drop the file into a new tab or current tab to view the project on a browser.

## Notes

Lorem Ipsum was used due to ease of use and length, from loremipsum.io  

The MDN website was heavily used for research involving the different methods, functions, elements and rereviewing code from the course.  

I ran the javascript code through an eslinter (URL: https://eslint.org/play/), this is the one recommended by udacity.  

## Current Bugs

The active section feature only works on iPad Air when the text is long enough, which is why three paragraphs of Lorem Ipsum were used.  
The active section gets buggy when a section is collapsed or is too short on the screen (such as with iPad Air for shorter lengths of sections).  
Height and max-height aren't able to be animated while auto or percentages are used apparently.  
Setting the clearTimeout and then declaring the timeout function has the weird effect of preventing the second timer.  
Assuming it is a hoisting issue that I can't resolve.  