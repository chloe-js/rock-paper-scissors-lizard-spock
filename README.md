

Scope Plane:
Whats on the table?
Most important features at this stage in no particular order are as follows:

Contact info,
About,
Location,
Schedule,
Pricing,
Opening hours,
FAQ,
Gallery,
Testimonials/Reviews.
Iframing an engaging video to homepage of site is deemed important however due to current knowledge may be difficult to pull off. We will see how we progress.

Want to offer a hover over feature on gallery images so that when a user puts cursor over image, the image will expand taking up full page. Not hugely important so will wait and see how we progress.

Streetview tour while it may look impressive is not something that is currently important or feasible however may be the next step in project evolution and user engagement.

In addition, gym has merchandise (shorts, gloves jerseys) that it wants to advertise and sell online. Again, not deemed important or feasible at present but may be an additional feature at a later dates

Key milestones:

Having Header Complete (for mobile and desktop)
Footer complete (mobile and desktop)
Why do muay thai section complete and optimized
Schedule Section complete and optimized
FAQ section complete and optimized
Testimonial section complete and optimized
Gallery page with implementation of hover feature complete and optimized
Contact Us and form complete and optimized (including message showing there submission has been accepted)
Test and Review
User story/s:

As a new member I want to know if joining a Muay Thai gym is for me.

As new member I want to make an informed decision if this gym is the right choice.

As a new user I want to know where the gym is.

As a new user I want to know what time the classes are on.

As a new user I want to know what is the pricing involved.

As a new user I want to know what the contact information is for any follow up questions.

Secondly (but just as important) the user wants to know if joining the gym is going to be worth doing, therefore the site needs to be engaging immediately highlighting the fun, toughness and dedication it takes to train muay thai. Also highlighting what Muay thai is.

As an existing member I want to know what the schedule times are.

As an existing member I want to know what the opening hours are.

As an existing member I want to know what the contact information is.

As an existing member I am on the go and have a million and one different commitments. Therefore when I come to site it will most likely be on mobile.

When I come to the site, all this information needs to be easily obtainable.


Structure Plane:
Information architecture:
Based off the info in Strategy and Scope, a tree structure list seems to be the most appropriate structure the model this project on.

Home > Gallery > Contact

Principles of Organization:

Currently stands that users to be engaged as soon as they come to site is main priority. Implementation of 5 second rule.
Also want to show entire site map as soon as user comes on through nav bar and anchor drop links on homepage.
Why do muay thai will serve as the about us and will show above the fold.
Schedule/Pricing is a commonly used segment so will be placed in middle of homepage.
FAQs will primarily be focused on new users.
Testimonials will show towards bottom of page. Even though important want to use as reinforcement of users decision to join.
Footer will contain map showing location, business contact info and social media links.
Gallery and Contact Us are easily accessible.

Skeleton Plane:
Desktop Wireframes: Desktop Wireframes
Tablet Wireframes: Tablet Wireframes
Mobile Wireframes: Mobile Wireframes

Surface plane:
Font: Will be a mix of “Lexend Mega” and “Nunito Sans”

Color: Primary color will be black and lighter shades of this. Secondary color will be Gold. Color scheme was decided using Canva Color Wheel

Images have all been selected from image sharing sites and have been appropriately linked in the media section in credits

Iframe video is video made from friend who’s page will be appropriately linked in the Media section in Credits.

Features:
12/02/2021
This project will be composed of three main pages. The Home/index.html, the gallery page and the contact page.

Each page will have the exact same header and footer to promote familiarity.

Header:

Will have logo/business name and a nav bar to navigate through the site.
By clicking logo, users will be brought back to homepage.
On Homepage an Anchor drop nav bar will be added to allow users quick and easy navigation through homepage.
Footer:

Will have business contact info, a map to the business location and social media links (facebook, Instagram, youtube)
Home Page:
Will be structured in the following manner:

Iframe video: highlighting the excitement of muay thai through video from youtube. When condensed to mobile, video will appear as a youtube link.
About us: Describing why someone should do muay thai. Offer collapsible “see more” arrows Schedule/pricing: show a 7-day schedule and offer pricing. This can be done through however may look for something on bootstrap to perform functionality
FAQ: offer most asked questions by beginners. Will share similar functionality to how the about us in terms of collapsible “see more” arrows/info
Testimonials: 4 reviews from current/past users to help highlight you new users should join.

Gallery Page:

Will host the photos of the gym of people working hard.
Want to try and implement a hover feature on each photo so that when a user hovers cursor over image it expands to take up full screen size. Have decided against this hover feature. Did not have desired effect.
Contact us:

Will offer a form requesting name, email, contact number and query area to allow for users to communicate easily with gym.
Will also have opening hours and welcome message.
When user selects Submit, I want to show that their application has been processed. Thank you for your message. A member of staff will be in contact shortly.

09/03/2021

Existing Features/Future features
Features Implemented:

Navigation to navigate through website. Each navigation element reacts when hovered on
Anchor drop navigation added to homepage
Video embedded to site.
Video changes to image when hits mobile
Schedule collapses when on mobile device
Faq have collapsible read more feature
Testimonials on carrousel
Google map of location added to footer on every page
Gallery consists of images sourced from unsplash.com
Contact page consists of contact info and contact form
When you click send on contact page you are brought through to seperate page informing you that message has been sent
Features Left to Implement
Links for email and tel to be clickable throughout site
Contact info added to contact form to be necessary before send button becomes available
Features Decided Against
Hover over feature on gallery images to allow to take full screen size. Did not add anything when implemented
Merch addition. Could always add gallery but would prefer to add ecom set up at later date perhaps
Technologies Used
12/02/2021
This project will primarily be made up of HTML and CSS with elements of Bootstrap thrown in.

HTML: Used to make framework and content of the site

CSS: Used to style this content and the webpage as a whole

Bootstrap: In initial stages will be used to create table in the Schedule/Pricing section. More to follow.
09/03/2021

HTML:

Used to create general framework of site.
Bootstrap:

Project uses Bootstrap to initially add grid structure.
Project uses bootstrap for header navigation
Project uses bootstrap to add hamburger toggler for mobile device.
Project uses bootstrap to add collapsible read more for faqs
Project uses bootstrap to add carousel for testimonials
Project uses bootstrap to add contact form for contact page.
CSS:

Used to style all HTML and Bootstrap elements in project.
Testing

12/02/2021
After each milestone has been complete, a series of tests will be run and results documented in this section. All HTML and CSS will go through relevant testing sites to ensure all has been T’s have been crossed and i’s have been dotted.
09/03/2021
After rigourous testing through use of friends and family members, the following issues have arose:

On footer page, address email and contact number are non reactive. This will be fixed before final submission
On contact page users were able to click send and be brought to Thank You message page without filling in any details
On contact page, box appearing too long due to padding added to space out on mobile.
Images on gallery page take too long to load on some tests however could be down to poor computer system currently in use.

10/03/2021
Work to fix outlined bugs/issues highlighted on 09/03/2021:

On footer page, address email and contact number are non reactive. This has now been fixed. Issue was down to social-media and contact-us widths colliding. Reduced width to 50% and issue has been fixed.
On contact page users were able to click send and be brought to Thank You message page without filling in any details. This has now been fixed. Added form parent element and required class to necessary fields. However when this was performed I noticed that users were not brought to thankyou.html. This has now been fixed by adding action="thankyou.html" to form.

12/03/2021

From testing and peer review with tutor Dick Vlaanderen, the following issues have now come to my attention.

Email text area on contact form accepts any text and not specifically email only... Has now been fixed.
Horizontal scroll bar appearing when reduce screen size. Will test on mobile and tablet devices to check... Has now been fixed.
Schedule & Pricing section looks cluttered, especially on smaller devices. Will attempt to add collapsible options similar to FAQ section where user clicks on day an schedule appears.

15/03/2021

Schedule & Pricing section has now been altered to add collapsible display options for each day of the week. Looks considerably better and helps create further engagement with project.


16/03/2021

Deployed site to mobile and tablet to test further. Mobile used was Google Pixel 4a and Iphone 6SE. Tablet used was Samsung Galaxy Tab A. The following issues arised with screenshots attached.

Main project heading was overflowing the edge on mobile device. Have now changed font size on screens of max-width 600px. 

Image that shows on mobile and tablet device rather than video did not appear. Have changed relative path from ../assets/images/jon-tomas-mt.jpg to assets/images/jon-tomas-mt.jpg to fix.
16/03/2021 (cont)
Redeployed project to mobile following all changes listed above and all appear to be functioning correctly.
Put HTML code through W3C Markup Validation Service which brought back errors to fix.
Put CSS code through W3C CSS Validation Service which brought back errors to fix.

17/03/2021
Put HTML code through W3C Markup Validation Service which now is presenting no issues after fixing.
Put CSS code through W3C CSS Validation Service which now is presenting no issues after fixing.

19/03/2021
Final testing takes place before submission through both local and remote deployment on desktop, mobile and tablet. No noticeable bugs appearing as far as I am aware. Overall, happy with how things turned out.

Deployment
Development Life Cycle
The progress and process of this project took many different shapes and sizes throughout, originally taking life as a completely seperate repo named MS1 Tarbh Dubh Muay Thai. However early on, due to lessons learned and general frustrations, I felt it would be better to start anew on a different repo.

This section is to document and show the development process of this project, adhering to the user goals/stories and wireframes established earlier in this README doc.

Header & Footer Draft 1
Header & Footer Draft 1 The first sections I decided to work on were the header & footer. Originally taking life in the seperate aforementioned repo, we can see the overall nav elements, Google map iframe, contact info and social media links taking shape early.

Header Draft 1.5
Header Draft 1.5 Moving on to the next stage, the anchor nav and vid feature were added. The purpose of the anchor nav was to help guide users across a heavily content populated homepage. The vid was introduced to help create more user engagement and attempting to adhere to 5 Sec Test

The about us adopted the use of Bootstraps grid system to allow for responsive design across different platforms. Content borrowed from Fight City Gym and referenced in Credits section under Content.

Schedule and Pricing Draft 1.5
Schedule and Pricing Draft 1.5 The schedule and pricing section took the most time and change throughout development cycle. From the get go I wanted the schedule to be easy to read and find to allow users quick access to class times. Initially the table feature from bootstrap was used but as can be seen by above screenshot this did not look well.

FAQ, Testimonials and Footer Draft 1.5
FAQ & Testimonials Draft 1.5 FAQ and testimonial sections did not begin to take shape until Draft 2. Footer section remained pretty much the same from Draft 1 apart from some tidying up of content.

Header & About Us Draft 2.0
Header Draft 2.0 Header Mob Draft 2.0 The Draft 2 of this project is where things began to take shape. Colour and further bespoke styling was used. The colour scheme of black and gold was adopted due to this colour scheme being synonymous with champion status in combat sports. For the header, gold text shadow was applied to the lettering to give the elements more character. In addition a hamburger toggler icon was added for mobile as well as a hero image that appears instead of the autoplay vid on desktop. The about us, a new background color and font color was applied.

Schedule and Pricing Draft 2.0
Schedule and Pricing Draft 2.0 In order to fix the schedule layout, I decided to move away from the table format and apply a grid format instead. Not only did this allow easy access to the class times, it also worked well on mobile and tablet. However, after much thought I felt that it appeared too cluttered. Therefore, this was to take one more change. The background styling of gold opacity applied to background image of gym was to try create more of a sense of immesion on the site. Had initial difficulties trying to make the h4 heading uneffected by opacity. Solution to this was discovered through youtuber Coder Coder. Referenced in Credits under content.

FAQ Draft 2.0
FAQ Draft 2.0 Content for FAQ section was taken from site Thai Works Gym, which has been referenced in Contents in Credit section. Through initial application I found that the content here too was cluttered and difficult to find your issue as a user. To get around this, collapsible button feature from Bootstrap was introduced. This not only cleaned up this section but also created user more engagement.

Testimonials Draft 2.0
Testimonials Draft 2.0 For this section, a carrousel feature was adopted from Bootstrap to allow for a steady flow of reviews from users to come through. I wanted only the reviews to appear they were moving so to do this I applied the same image behind each review. This allowed for the illusion that the testimonial cards were moving rather than the whole thing.

Footer Draft 2.0
Footer Draft 2.0 Similar to the header, the footer adopted gold text shadowing to create more visual emphasis. I wanted this gold to be bearly noticable so that it would catch the eye but the user would not immediately identify why that was.


Project Final Deploy and User Story Adherence
Header Final Deploy (Desktop & Mobile)
Header Final Deploy

Header Mob Final Deploy Not deviating too much from Draft 2, the final deployment of the project included a better mobile visual as the Branding heading was overflowing as highlighted in testing. Final header allowed easy user navigation and access to important information from the beginning. Video in header gave new users a glimpse as to what Muay Thai is like.

About Us Final Deploy (Desktop & Mobile)
About Us Final Deploy The about us section saw little to no change from Draft 2 to Final Deploy. Final about us allowed user to know if joining Muay Thai gym is for them.

Schedule & Pricing Final Deploy (Desktop & Mobile)
Schedule & Pricing Final Deploy Schedule & Pricing Mob Final Deploy

Schedule & Pricing Open Final Deploy Schedule & Pricing Mob Open Final Deploy

Finally. After much trial and error, the Schedule and Pricing section was finally complete. After seeing how effective collapsible buttons were for the FAQ section I decided to implement something similar to this section. Not only did it clean up the clutter, it allowed for more user engagement and a more streamlined user experience.

Final Schedule & Pricing let users know what time the classes were on and the prices involved. This info is easily obtainable.

FAQs Final Deploy (Desktop & Mobile)
FAQs Final Deploy FAQs Mob Final Deploy

FAQs Open Final Deploy FAQs Mob Open Final Deploy

Very little change happened from Draft 2 to final deployment for this section.

Final FAQ allowed user to make informed decision if Muay thai is for them.

Testimonials Final Deploy (Desktop & Mobile)
Testimonials Final Deploy Testimonials Mob Final Deploy

The cards were made more rounded for final deployment. Majority of changes to this section occured on mobile and desktop to reduce clutter appearance when screen size was reduced (see Testing)

Final testimonial allowed user to see other users impression of service to see if this would be a good choice for them.

Gallery Page Final Deploy (Desktop & Mobile)
Gallery Page Final Deploy Gallery Page Mob Final Deploy

Gallery Page implements Bootstrap Grid system appearing as 4 column on large screens, 3/2 columns on tablet and single image on mobile device.

Final Gallery Page allowed new users to see the fun and work existing users are having in the gym.

Contact Page Final Deploy (Desktop & Mobile)
Contact Page Final Deploy Contact Page Mob Final Deploy

Contact page uses Bootstrap form features as well as some minor grid usage. For the form, user must fill out all details on form before being able to Send. Email must include @ email structure to allow for send. Tried to do same for cont number but unfortunately no success.

Thank You Page Final Deploy In addition to this, when user fills out form and clicks send, user is brought to a hidden page named thankyou.html which thanks user for their message and informs them that someone will be in contact shortly. This can be seen above.

Final Contact Page allowed users a way of easily contacting the gym for any follow up questions.

Footer Final Deploy (Desktop & Mobile)
Footer Final Deploy Footer Mob Final Deploy

The final deploy of the footer remained very close to Draft 2 with the main changes happening on mobile to allow for social media links to appear directly under the contact us information.

Final Footer allowed for user to see exact location of the gym and contact info of gym and every page of website experience. Also allowed user to get through to gym social media accounts.

Edit was to change repo name from Cathals Playground to MS1-TDMT-Gym and to fix grammatical errors in this README file.

Edit was made to video html code to add controls to video in accordance with assignment marking guide.

How to Deploy?
Go to (https://github.com/ShiftyKitty/MS1-TDMT-Gym)
On this page click into Settings.
On the settings page, scroll down to Github Pages section
Under Source select master branch and press Save.
Published link will then be present.
Published link to access and view live site: (https://shiftykitty.github.io/MS1-TDMT-Gym/)

Credits
Content
The text for Why do Muay Thai section was copied from the website Fight City Gym

The text for FAQ section was copied from Thai Works Gym FAQ page

The opacity css styling used in Schedule and Contact page sections was taken from Coder Coder

Google Map iframe was taken from embedgooglemap.net

General queries were answered by using various help docs in StackOverflow

Media
The photos used in this site were obtained from Unsplash.

Photos were taken by Jon Tomas
Photos were taken by Logan Weaver
Photos were taken by Attentie Attentie
Photos were taken by Lorenzo Fattò Offidani
Photos were taken by Alex Harmuth
Photos were taken by Daniil Zanevskiy
Photos were taken by Nick Wang
The video used in this project was obtained from Jeff Sainlar-Art of Muay Thai

Acknowledgements
I received inspiration for this project from many sources however mainly from my own interest in Muay Thai and lofty dreams to open my own gym some day.

The name Tarbh Dubh is an irish name which translates as Black Bull. The inspiration behind this name is derived from the following:

This year marks the chinese new year of the ox/Bull
The name Black Bulls is a fictional team name of group in anime/manga series Black Clover.
My family home is in place called Templenaboe which translates as Temple of the Cow.
The color scheme of black and gold is synonymous with champion status in Muay thai and combat sports so wanted to preserve this with the project.