## OS.css

**OS.css - Windows 95 and XP styled CSS**

<img alt="a screenshot of a window with the title 'My First Program' and two buttons OK and Cancel, styled like a Windows XP dialog" src="https://github.com/botoxparty/XP.css/blob/main/docs/window.png?raw=true" height="133">

<img alt="a screenshot of a window with the title 'My First Program' and two buttons OK and Cancel, styled like a Windows 98 dialog" src="https://github.com/jdan/98.css/blob/main/docs/window.png?raw=true" height="133">

OS.css is a fork of XP.css and 98.css. It includes additional widgets, adds the ability to make windows draggable, and includes a scoped version of the library so that the default styles of your HTML elements don't get overriden (the scoped versions require an attribute before they apply any styles). Many thanks to [Adam Hammad](https://github.com/botoxparty) and [Jordan Scales](https://github.com/jdan) for making XP.css and 98.css respectivly, you guys rock!


### Guide

You can find the usage guides for OS.css here:

* [Unscoped version of the guide]()
* [Scoped version of the guide]()


### Installation

To install, simpy download a copy of the CSS files and link them like you would any typical stylesheet. You can also optionally add in the JavaScript file (which will make windows draggable and tabs switchable) and the font files (to add a retro styles font to your widgets):

* XP.css download
* 98.css download
* XP.css (scoped) download
* 98.css (scoped) download

```html
<head>
  <!-- XP.css -->
    <!-- Essential files -->
    <link rel="stylesheet" href="XP.css">


  <!-- 98.css -->
    <!-- Essential files -->
    <link rel="stylesheet" href="98.css">
</head>

<body>
  <!-- 
    Place your other HTML elements before these script tags. They need to be
    at the end of the body tag to apply.
  -->

  <!-- XP.css -->
    <!-- Optional files -->
    <script src="XP.js"></script>

  <!-- 98.css -->
    <!-- Optional files -->
    <script src="98.js"></script>
</body>
```

### Building

To build from source:

```
git clone 
cd os.css
node build.js
cd scoped
node build.js
```

Running these commands will create all the files and the docs within the dist folders.


### License

Copyright 2020 Chowder Man, Adam Hammad, Jordan Scales

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

