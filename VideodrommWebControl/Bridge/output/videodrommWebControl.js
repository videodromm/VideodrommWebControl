(function (globals) {
    "use strict";

    Bridge.define('VideodrommWebControl.App', {
        statics: {
            config: {
                init: function () {
                    Bridge.ready(this.main);
                }
            },
            main: function () {
                // Create a new Button
                var button = Bridge.merge(document.createElement('button'), {
                    innerHTML: "Submit",
                    onclick: $_.VideodrommWebControl.App.f1
                } );
    
                // Add the Button to the page
                document.body.appendChild(button);
    
                // To confirm Bridge.NET is working: 
                // 1. Build this project (Ctrl + Shift + B)
                // 2. Browse to file /Bridge/www/demo.html
                // 3. Right-click on file and select "View in Browser" (Ctrl + Shift + W)
                // 4. File should open in a browser, click the "Submit" button
                // 5. Success!
            }
        },
        $entryPoint: true
    });
    
    var $_ = {};
    
    Bridge.ns("VideodrommWebControl.App", $_);
    
    Bridge.apply($_.VideodrommWebControl.App, {
        f1: function (ev) {
            // When Button is clicked, popup a message
            Bridge.global.alert("Success!");
        }
    });
    
    Bridge.init();
})(this);
