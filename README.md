# Project: About Me Web App

Create a React project that provides information you for your future job search. This is a simple start to a business card or portfolio project or resume.

It looks like this when the app is launched. You do not have to use exactly the same text in the paragraph. You do need to have a goal, but it can be different, such as "software engineer" or "front-end developer" -- use your personal goal.

![P-AboutMe-1.png](https://github.com/bell-kevin/aboutMeWebApp/blob/main/readMeScreenShots/P-AboutMe-1.png)

After clicking on the button "See Skills", it changes to display an unordered list, with items from an array of skills (which do not have to match this image). Notice that the button now says "Hide Skills".

![P-AboutMe-2.png](https://github.com/bell-kevin/aboutMeWebApp/blob/main/readMeScreenShots/P-AboutMe-2.png)

A click of the button "See School" displays information about this school. Notice the button now says "Hide School". If you were looking at the previous image, you could click "Hide Skills" to make that section disappear, then "See School" to get the page below. Clicking a button when it says "Hide ..." removes that block from the page.

![P-AboutMe-3.png](https://github.com/bell-kevin/aboutMeWebApp/blob/main/readMeScreenShots/P-AboutMe-3.png)

If both buttons are clicked to show content, both the list of skills and the school data are displayed. When both are displayed, Skills always comes first. Both buttons now refer to hiding data.

![P-AboutMe-4.png](https://github.com/bell-kevin/aboutMeWebApp/blob/main/readMeScreenShots/P-AboutMe-4.png)

In the future, you may want to link to a mapping function for the school address, phone functions for calling the school's phone number, and link to your GitHub account to projects that display your proficiency in the various skills.

 

Think about the composition of the product. When all data is displayed, it has the heading (your name) and a simple paragraph (use your goal, doesn't have to be "full-stack developer" as shown above). Those always appear. There are 2 buttons, which also always appear, but the text on those buttons differs from "Show ..." to "Hide ..." depending on what the rest of the page displays. It says "Show ..." when that object is not displayed, and "Hide ..." when that object is displayed. -- these buttons are toggles. The Skills portion has a heading for "My Skills" and an unordered list of skills (use whatever items you want for this list). The School page shows a heading for "Davis Technical College", an image, and the address and phone number. The project layout is this:

![M1-layout.PNG](https://github.com/bell-kevin/aboutMeWebApp/blob/main/readMeScreenShots/M1-layout.PNG)

Each of the blocks is a separate piece of the project, which gives you a good start on determining what components you need.

Use an array for the list of skills. 

Use this image for the school Download this image for the school. You will need to store the image in your project, and import it into whichever component uses it.

Important note: remember that changing state does not occur immediately. If you change state and then test for the new value, you will most likely get the wrong result. You might want to consider changing state at the end of the block of code, and do any testing based on the current value, not that future value. For example, if a counter is incremented and you want to do something extra when the value is 4, you might write this:

    counter = setCounter(counter + 1);
    if (counter == 4) { ... do something }

But there is no guarantee that the counter was incremented by the time the test runs. Instead, you could write that block of code with the increment last, and write the test knowing that the state WILL change in this block of code.

    if (counter == 3) { ... do something based on counter becoming 4 in this block of code }
    counter = setCounter(counter + 1);

There are other ways around this scheduling of changes of state, but this simple one is sufficient here.

Make sure the title showing in the tab of the browser window is appropriate and pertinent to this project. It cannot be the default "React App".

There must be some style applied, such as background color and center alignment. The buttons must use border-radius to round the corners, and must have a different background color than the rest of the page. Use width of 50% with margin-right and margin-left set to auto to center the content on the web page.

Take 4 screenshots: (1) launch page, (2) when Skills section is displayed, (3) when Schools section is displayed, (4) when both sections are displayed.

 

Submission: Zip the 4 screenshots with the root folder of the project, and submit the single zipped folder.


== We're Using GitHub Under Protest ==

This project is currently hosted on GitHub.  This is not ideal; GitHub is a
proprietary, trade-secret system that is not Free and Open Souce Software
(FOSS).  We are deeply concerned about using a proprietary system like GitHub
to develop our FOSS project. I have a [website](https://bellKevin.me) where the
project contributors are actively discussing how we can move away from GitHub
in the long term.  We urge you to read about the [Give up GitHub](https://GiveUpGitHub.org) campaign 
from [the Software Freedom Conservancy](https://sfconservancy.org) to understand some of the reasons why GitHub is not 
a good place to host FOSS projects.

If you are a contributor who personally has already quit using GitHub, please
email me at **bellKevin@pm.me** for how to send us contributions without
using GitHub directly.

Any use of this project's code by GitHub Copilot, past or present, is done
without our permission.  We do not consent to GitHub's use of this project's
code in Copilot.

![Logo of the GiveUpGitHub campaign](https://sfconservancy.org/img/GiveUpGitHub.png)
