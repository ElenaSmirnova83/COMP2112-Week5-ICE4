"use strict";
//IIFE -- Immediately Invoked Function Expression
// AKA - Self Executing Function 
(function()
{
    /**
     * This function loads data Asynchronously from a URL.
     * It calls the callback function when the data loading is complete
     *
     * @param {string} method
     * @param {string} url
     * @param {function} callback
     */
    function LoadData(method: string, url: string, callback:Function):void
    {
        // Step 1 - Create an empty XHR object
        let XHR = new XMLHttpRequest();

        // Step 2 - Compose the Request
        XHR.open(method, url);

        // Step 3 - Send the Request to the server
        XHR.send();

        // Step 4 - Setup an event listener
        XHR.addEventListener("readystatechange", function(){

            if((XHR.status == 200) && (XHR.readyState == 4))
            {
                callback(XHR.responseText);
            }

        });
    }

    // First method of using functions
    function Start()
    {
        console.log("App Started!");

        // LoadData("GET", "./Data/contacts.json", function(XHR){
        //     console.log(XHR);
        // });

        $.getJSON("./Data/contacts.json", function(DataSource){
            console.log(DataSource.ContactList[0]);
        });
    }


    window.addEventListener("load", Start);

})();






