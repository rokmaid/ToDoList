"use strict";var __extends=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function __(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(__.prototype=o.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var RequestData_1=require("sabre-ngv-app/app/common/data/dto/request/RequestData"),ToDoMessage=function(e){function ToDoMessage(t,o){var s=e.call(this)||this;return s.msg=t,s.completed=o,s}return __extends(ToDoMessage,e),ToDoMessage.prototype.getRequestStructure=function(){return{"data.Message":[{"data.msg":this.msg,"data.completed":this.completed}]}},ToDoMessage}(RequestData_1.RequestData);exports.ToDoMessage=ToDoMessage;
