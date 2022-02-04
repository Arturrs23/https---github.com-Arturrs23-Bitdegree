"use strict";



fetch(".test.json")

    .then(function (response) {

        return response.json();

    })

    .then(function (data) {

        console.log(data);

    });



const httpRequest = new XMLhttpRequest();

const url = "test.json";



let data;



httpRequest.onreadystatechange = function () {

    if (httpRequest.readyState === 4) {

        data = JSON.parse(httpRequest.response);

        console.log(data);

    }



};

