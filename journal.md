I already started journalling when building this project for pixl, so I figured I'd bring this here to justify my hours anyways. 


# 12 September 2026
_Starts ancient Kung-Fu Panda music_

With a new day, comes a new quest--AND TODAY WE'RE BUILDING THEEEEEEE
PIXL BUILDER PAGE

Did y'all miss me (I say to a literally non-existent audience while the reviewer looks like ts
https://cdn.hackclub.com/01a096d3-102b-7840-a555-0ccfd54fe699/journal-1789236809140.png

Anyhow, today is Pixl Trial Day! Here's what I got done during the first 2.6 hours of this project:

## The toggle System
My website compromises of 2 states: Regular and Pixl. When the toggle is off, it shows my normal portfolio--contrarily, when on it shows a Pixl version, aka the main builder page. I'll admit, Im spending ~1 hour on the toggle, because it's taking a few iterations for my inexpertise touch to work :3d-sad-emoji:
https://cdn.hackclub.com/01a096d7-5381-7079-b2b6-89de7536f58f/journal-1789237088561.png
https://cdn.hackclub.com/01a096d7-13c5-77b1-9fbd-7e86f5ec8b8e/journal-1789237072330.png



I initially used the .active toggle for the class in order to change the state of the toggle, but in the end, I migrated it all to a new stylesheet that is toggled on and off in the Event Listener for the toggle in JS.

I also created the main window logic using a boolean system. Toggle on, windows change, toggle off window back. That took like ~10 minutes to implement.

Marquee Text
This was as new as the toggle-but not as fun imo lol. It's just css, main outer wrapper, inner and 2 duplicate texts being translated for a smooth animation.

The main culprit taking so much time was the responsive design: the img in the toggle for the Pixl Logo took me SO LONG to adjust in ratio according to the width/size of toggle border but I got it in the end. Crazy work.

It sounds little when I say it like this, but the number of iterations I needed to do in order to get to this stage was crazy, especially with the toggle logic: and II haven't figured out its animation yet.

See you in the next one;

Love,
Meeran



# 13 September 2026
*AHHHHHH I DID ITTTTTT*
*I SAVED THE WORLD FROM GLOBAL WARMING--I MEAN, I FINALLY GOT THE TOGGLE ANIMATION WORKINGGGGGGGGG*

_Ahem, with a new day, comes a new quest_---I'm getting tired of this shi

## Updates:
I ended up using two states, toggle-button.on, .toggle-button.off, which are in different stylesheets. When the toggle is pressed the two stylesheets alternate, and a new class is added to the element through JS. I had to give up on @keyframes, because I can't get it to work like the marquee. Cries in dumb.
I then positioned the toggle relative to the screen and adjusted it size.
Imported Pixl Cursors and added them to existing hovers. I had to edit their size to 32 from 52 since it wouldn't work
These were the main things I needed to set up for both of the sites.

Now I intend to make the first version: my normal portfolio first fully, then work on the Pixl one.


https://cdn.hackclub.com/01a09969-4599-7457-82bb-c0e606883b2e/journal-1789280207885.png
https://cdn.hackclub.com/01a09967-d34e-7b4f-9d1e-ab298aa60bc1/journal-1789280113119.png


Updates soon.

Love,
Meeran


# 13 September 2026
_Sighs in tired_
I don't know why it's taking this long to finish such little snippets of code. Everytime I try and add something, another malfunctions. It's taking frever to get the layout and spacing right.

*BUT MAMA AIN'T RAISE NO QUITTER*
A huge fight compromising of 50+ insertions and iterations later, profile container and maquee adjustment is done!
I was specifically fighting for my life because of the marquee not lining up relative to the profile pic size, but I got it sooner or later. I had to remake the HTML structure and go from there; it was fun at the end ig.

https://cdn.hackclub.com/01a09ad9-7f08-75a2-bc7d-769a1fbbc17b/journal-1789304339960.png

Update soon.

Love,
Meeran



# 20 November 2026 
As the saying goes, the people feel an urge to complete some projects just as the program's deadline becomes 13 hours.
So, I'm gonna have to start over, since I have no idea what shi I wrote before. It's completely messy and imo kinda unfixable rn, so I'm gonna speedrun this before Pixl comes to an end. Ready, set, go :yay:
_Btw, this is when Pixl was closing; I had a sudden urge to finish it on time, which I obv didn't_

https://cdn.hackclub.com/01a1f869-5fef-71bf-973a-d126f2f5116a/journal-1795169017261.png



# 20 November 2026
Page 1: Original Mode
Profile Div
-Profile Picture
-Profile text
-Made widths relative to parent, latter given 22% width of the screen.

Profile Description
-Title
-Blinking cursor
-UL list
-Customized the bullet point/marker
-Used spans where needed

ScrollBar
-Added a scrollbar design
-Has a hover style

With that, I finished the homepage!

https://cdn.hackclub.com/01a1f92c-fb69-7962-890d-35df29b1f07f/journal-1795181836426.png
https://cdn.hackclub.com/01a1f92d-2537-7eea-b53c-54f3816d1070/journal-1795181847228.png

Next up, the project section.
Love, Meeran


# 21 November 2026

## Project Section
HTML:
-Project Section Divs
-Project containers for individual entry
-Project section title
-Project subtitle for individual entry
-Project image
-Project Repo (Button)
-Project Demo (Button)
-Project Description
-Hours and languages used for the project
<hr> as a line breaker

CSS:
-Buttons: Hover, active and normal mode for the github and demo buttons
-Styled them containers to make them (sorta) responsive
-Styled the description and hours
-Styled the hr line break

Duplicated it twice, real nice, it was because I'm displaying two projects, don't send me to Fraud Squad ♫

Aaaaaaand, that's it for the project section! Next up, the YSWS section

https://cdn.hackclub.com/01a1f95d-19fb-7336-8195-80687d9c88eb/journal-1795184989895.png
https://cdn.hackclub.com/01a1f95d-32c0-74e0-ab74-d29d9f226590/journal-1795184996391.png

Love, 
Meeran



# *Till here, hackatime tracked 7.9 hours btw!*



## YSWS Section (Page 3)

-Changed the hr length under the last project to a wider one
-Added divs for page 3
-Page 3 title 
-YSWS containers, I swear this was so fun
-YSWS dates, what I bought, and hours logged
-Buttons for the YSWS websites
# 22 November 2026
-It was really easy to get the containers altered for each YSWS, since they followed the same pattern hehe
-hr tag at the end 
![image](https://cdn.hackclub.com/01a207b9-8a20-7625-9c46-3c6a33178b12/paste-1795425927274.png)

_*Hackatime so far: 8.9 hours*_

Next up...Page 4: Upcoming projects! Hell yeah

Love, 
Meeran


# 23 November 2026
## Upcoming Projects Section (Page 4)

This will be fun, I said. It's easy, I said. We'll just reuse the styling and HTML structure from the project divs, I said.
DAMMIT
I thought, changing the profile divs to be after the project description would switch the profile box to the right, and problem wouldv'e been solved. Unfortunately for me, this was in fact, not the case. I had to tweak the already existing code for the project section, so it worked both for the current projects and previous project sections. Why didn't I make the design responsive from the start: A question I ask myself every single time. Anyways, here's the summary.
-Re-using the divs and HTML from the Past project section (Page 2) for the current projects one (Page 4), iterating the required parts
-Added styling using the style tag on Current Project Elements only
-Re-iterated existing Previous Project Styling so it can be used for both sections. The previous version used unconstrained flex items with no set widths, making the profile div change widths based on the width of the text description. So I added a locked profile div width, and made the text area flexible in width instead; the latter therefore filling up whatever space left over. Hell yeah.
-Locked the buttons and changed the cursor to not-allowed for the first 2 projects since they haven't been started yet.
-Left Meeran's YSWS github open and changed its links since I'm currently working on it, the website's still disabled though, I haven't hosted it yet.
-Added some hr tags under each project container and at the end

![image](https://cdn.hackclub.com/01a207ce-e0b3-70c1-b71d-b982900dbdb4/paste-1795427325592.png)
![image](https://cdn.hackclub.com/01a207cf-172a-7772-9f58-8a9468e6ff25/paste-1795427341520.png)

That's it! Current Project section's done! Just one more left for the normal mode, then I can get started on the pixl version, hehehehe

Love,
Meeran