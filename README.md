# Work Day Scheduler
Weekly Challenge No.5
by Reed Meher
U of MN Coding Bootcamp, August 2022
deployed site: https://archonology.github.io/Work-Day-Scheduler/
Repo homepage: https://github.com/archonology/Work-Day-Scheduler.git

--------------------
## About the project

The challenge was to make a calendar application that saves events for the hour of each day. We were tasked with using moment.js to power the time in our webpage.

## Summary of the page functionality

- When the page opens, you will see the title of the page and today's date. 

- As you scroll down, you will see rows of "timeblocks", one for each standard business hour of the day (8am-5pm). Each block has a text fill area and a save button. As you hover on each element in the time block, you will see font's slightly grow in size and background colors slightly change to darker hues.  

- the timeblocks also are coded in color by whether the hour of today is past, present, or future.  Future hours are green, the present hour is blue, and the past hours are a light, camel brown.  This feature is updated dynamically through moment.js and my local script.  

- any text you enter into the fill areas will be saved and maintained after refresh IF you click the save button for the corresponding text area before refreshing the page. Saving it will push a record of the even to local storage, and it will be saved by the hour and the event entry.  If you do not save the text before refresh, the text will disappear upon refresh.  

-----------------------
### Image of the deployed site:
 <img src="./assests/Objects/Screen Shot 2022-08-06 at 11.44.00 AM.png" alt="Screenshot of deployed page">



 Reed Meher
 Archonology on Github, August 2022


