# facprecolorpicker - Founders & Coders Pre-Course Colour Palette Project
###### For one of my Pre-Course requirements, I built a simple colour palette project, in which the user can change the colour of an element - either a vertical or horizontal panel with one colour. This was based on a template provided of the website [Coolors](https://coolors.co/daffed-9bf3f0-473198-4a0d67-adfc92), though other sites such as [Authentic](https://colours.neilorangepeel.com/) could equally apply. 
## Background context of colours
###### When constructing the JavaScript, I had to research briefly the complex reality behind colours, in particular the RGB colour model, in which the red, green, and blue primary colours of light are added together in various ways to reproduce a broad array of colours. Under the RGB model, a total of 255 different colours are available. Understanding the RGB model was important, as it is the RGB model that is used for the sensing, representation, and display of images in electronic systems, such as televisions and computers. I have also encountered issues with the RGB model when working on Photoshop. However, I have also used the Hexadecimal numbering system too as a backup, with base 16. In the hexadecimal system, there are 16 symbols or possible digit values from 0 to 9, followed by six alphabetic characters -- A, B, C, D, E and F. These characters are used to represent decimal values from 10 to 15 in single bits.

![960px-RGB_color_solid_cube](https://user-images.githubusercontent.com/52511353/190637543-b5b10039-d8ec-4979-95c8-081034d3e474.png)

###### Colours can be represented in formats like RGB, Hexadecimal, or Hsl notation (the latter of which I haven't used). In order to generate a random colour, I used the Math.random() function, which generated a random number - numbers being essentially how colours are represented on a screen. Of course, Math.random() will produce random floating-point non-integer numbers, so in order to round down to a whole number and get rid of the decimal, Math.floor() was also used - otherwise, the colours would not be able to be generated. This random number was specified in the JavaScript as being 0 and 255 for RGB. Meanwhile, for generating a hex colour value, I specified as part of the numbering system the base 16, as well as using padStart, which ensured that the random number generated will be represented by multiple digits rather than a single digit when converted to hexadecimal notation, so that it's a valid colour, which has to have 3 to 6 characters.

###### I created 8 vertical colour palette columns (though they could have just as been horizontal), with each colour palette column displaying the RGB colour code for each random colour generated, along with text at the top instructing the user to click on each colour palette column.
###### In terms of issues that I have come up against, I have found that a white space is automatically inserted on the right of the columns as soon as the user minimises the browser and the columns stack. This is compared with the Coolors website, where the colours always extend to the edge of the screen:

![dsfacprecoursecolourpickerscreenshot](https://user-images.githubusercontent.com/52511353/190643989-301c0617-d2e3-4cc5-a0d1-2c6ae30566d0.jpg)

![coolorswebsitescreenshot](https://user-images.githubusercontent.com/52511353/190643445-263acae4-195c-4a44-93b8-cbd637f9d6d1.jpg)




