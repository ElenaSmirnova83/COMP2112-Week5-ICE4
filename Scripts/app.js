"use strict";
//IIFE - Immediately Invoked Function Expression
//AKA -Self Executing Function
(function()
{
    /**
     * This function loads data Asynchronously from a URL.
     * It calls thecallback function when the data loading is complete
     * @param {string} method 
     * @param {*} url 
     */
    function XHRRequest(method, url)
    {
        //step 1-Create an empty XHR object
        let XHR = new XMLHttpRequest();
        //step 2 Compose the Request
        XHR.open(method, url);
        //step3 send request to the server
        XHR.send();
        //step4 Setup an event listener
        XHR.addEventListener("readystatechange", function()
        {
                if ((XHR.status == 200) && (XHR.readyState == 4))
                {
                    let contactDataSource = JSON.parse(XHR.responseText);
                    console.log(contactDataSource.ContactList[0]);
                }
        });
    }
    //First method of using functions.
    function Start()
    {
        console.log("App Started!");

        XHRRequest("GET", "./Data/contacts.json");
    }
    window.addEventListener("load", Start);


})();







