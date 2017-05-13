
#### Version 0.1 (2017)

An awesome web application to see Live earthquakes occurrences in last 24 hours.


![Alt text](/earthquakes.png?raw=true "Earthquakes")

TODO

* Move login to read geojsonp file and rendering google map from index.html to component for better control over data
* Mobile responsive
* When user click on any actionble item, display a toast message to show the map got changed
* Unit Testing
* Code coverage
* Can remove bootstrap dependency in order to load initial page faster


### Modules available

* NodeJS (Express) server
* ReactJS (UI rendering)
* Redux (For future use)
* bootstrap
* Babel (ES6 to ES5 transpilar)
* eslint (write code right)
* ~~SASS~~
* CSS Module
* Webpack
* CUI (common UI components)
* ~~Unit Testing~~
* ~~Code Coverage~~
* ~~Mobile responsive~~

### Development tips

Please place re-usable components in uic folder


### Running application locally

* npm install
* npm start

### Production deployment
For generating build
* npm run build

Running on production
* NODE_ENV=production PORT=8080 npm start
