try {
    window.$ = window.jQuery = require('jquery');
    require('bootstrap');
    
    //require('more-packages-installed-with-npm-install');

} catch (e) {}

require('./main');
