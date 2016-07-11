(function (globals) {
    "use strict";

    Bridge.define('VideodrommWebControl.App', {
        statics: {
            KEY: "PORT",
            config: {
                init: function () {
                    Bridge.ready(this.main);
                }
            },
            main: function () {
                var div = Bridge.merge(document.createElement('div'), {
                    className: "form-inline"
                } );
    
                var input = Bridge.merge(document.createElement('input'), {
                    id: "number",
                    className: "form-control",
                    type: "text",
                    placeholder: "Enter the port to connect to",
                    style: {
                        margin: "5px"
                    }
                } );
    
                input.addEventListener("keypress", VideodrommWebControl.App.inputKeyPress);
    
                var buttonSave = Bridge.merge(document.createElement('button'), {
                    id: "b",
                    className: "btn btn-success",
                    innerHTML: "Connect"
                } );
    
                buttonSave.addEventListener("click", VideodrommWebControl.App.save);
    
                var buttonRestore = Bridge.merge(document.createElement('button'), {
                    id: "r",
                    className: "btn btn-danger",
                    innerHTML: "Restore saved port",
                    style: {
                        margin: "5px"
                    }
                } );
    
    
                div.appendChild(input);
                div.appendChild(buttonSave);
    
    
                document.body.appendChild(div);
    
                var o = window.localStorage[VideodrommWebControl.App.KEY];
    
                if (o != null) {
                    input.value = o.toString();
                }
                else  {
                    input.value = "";
                }
                input.focus();
            },
            inputKeyPress: function (e) {
                // We added the listener to EventType.KeyPress so it should be a KeyboardEvent
                if (Bridge.is(e, KeyboardEvent) && e.keyCode === 13) {
                    VideodrommWebControl.App.save();
                }
            },
            save: function () {
                var input = document.getElementById("number");
                var i = parseInt(input.value);
    
                if (!isNaN(i)) {
                    window.localStorage.setItem(VideodrommWebControl.App.KEY, i);
                    window.alert(System.String.format("Stored {0}", i));
                    input.value = "";
                }
                else  {
                    window.alert("Incorrect value. Please enter a number.");
                }
            }
        },
        $entryPoint: true
    });
    
    Bridge.init();
})(this);
