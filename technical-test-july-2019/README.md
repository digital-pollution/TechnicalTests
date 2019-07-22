# Technical test - july 2019
## Daniel Tait

### Usage Instructions

* find the compiled version that will run from file protocol in the build folder

* execute 'npm install && npm start' in a cmd or bash terminal from the project
root folder to run the dev server (nodejs and npm is required)

### Considerations

* The data must be retrieved without the use a of XHR as per the instructions.
I chose to do the test with ES6 compiled with webpack so for this exercise the
data variable in data.js was modified to use the 'export' function in order to
avoid dumping data into the DOM

* The data contains new lines so the css property and value
'white-space: pre-wrap;' needs to be used in order to render the line breaks
correctly

* The data contains a sneaky piece of javascript. I made the assumption that
this could be a simulation of a XSS attack / malicious script and removed any
script tags when parsing the data.

* It should work in most modern browsers. This solution was tested in the latest
versions of chrome, firefox and internet explorer edge. Mobile devices and
safari were not tested.  

* While the application is small I should probably demonstrate considerations 
for variable scope, in this case I've chosen a simple singleton pattern
because it feels familiar to the design patterns of modern javascript frameworks
that may be used in a real commercial project.  

### Caveats

* Didn't really make much use of scss other than the nesting feature, I could
have used more scss features and the code could be optimzed better.

* Could have built an accordion transition but didn't want to get other
plugins involved. I did implement a scaleY css only solution but wasn't happy
with it, that solution has been left commented out in the index.scss file

* I used https://github.com/wbkd/webpack-starter as a quickstart for the project
but as I'm running a windows machine it was necessary to kill off the NODE_ENV
features.
