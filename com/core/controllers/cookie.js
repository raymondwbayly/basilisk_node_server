// This is the message controller
var path = require('path');
var fs = require('fs');
var lodash = require('lodash');



const checkCookie = (cookie) => {
    const appToken = cookies['app-token'];
    const userToken = cookies['user-token'];

    var retV = false;

   if(appToken && userToken){
       retV = true;
   } 
   return retV;
}







exports.checkCookie = checkCookie;