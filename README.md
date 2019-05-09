# @legendaryrob/countrify

[![npm (scoped)](https://img.shields.io/npm/v/@legendaryrob/countrify.svg)](https://github.com/Ruberto/countrify) [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@legendaryrob/countrify.svg)](https://github.com/Ruberto/countrify)

## Install
`$ npm install @legendaryrob/countrify`

## Usage
```javascript
const countrify = require("@legendaryrob/countrify")

// Finding names

countrify.getName("USD");
//=> "United States of America"

countrify.getName("US");
//=> "United States of America"


// Getting Alpha3 codes

countrify.getAlpha3("South Africa");
//=> "SAF"

countrify.getAlpha3("SA");
//=> "SAF"

// Getting Alpha2 codes

countrify.getAlpha3("South Africa");
//=> "SA"

countrify.getAlpha3("SAF");
//=> "SA"

// Getting a list of all the countries

countrify.allCountriesList();
//=> ['Andorra', 'United Arab Emirates', 'Afghanistan'...]

// Getting a list of all the subdivisions for country

countrify.getSubdivisionsList('South Africa', 'en');
//=> ['Eastern Cape', 'Free State', 'Gauteng'...]

// are able to swap out the country name with alpha2/alpha3
countrify.getSubdivisionsList('SAF', 'en');
//=> ['Eastern Cape', 'Free State', 'Gauteng'...]

// are able to swap out the country name with alpha2/alpha3
countrify.getSubdivisionsList('SAF', 'fr');
//=> ['Cap oriental', 'État-Libre', 'Gauteng'...]

```