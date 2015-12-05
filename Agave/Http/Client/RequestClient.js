/**
 *
 *AgavePlatformScienceAPILib
 *
 *This file was automatically generated by APIMATIC BETA v2.0 on 10/07/2015
 */

'use strict';
angular.module('AgavePlatformScienceAPILib').factory('HttpClient', function ($q, $http, APIHelper, Configuration) {

    var convertHttpRequest = function (req) {
        //Convert to request's version of http request
        var options = {
            url: req.queryUrl,
            method: req.method,
            headers: req.headers,
            cache: req.cache,
        };
        if (req.username) {
            //Basic auth....
            options.headers = options.headers || {};
            options.headers["Authorization"] = "Basic " + APIHelper.base64Encode(req.username + ":" + req.password);
        }
        if (req.body) {
            options.data = req.body;
        }
        if (req.formData) {
            options.data = APIHelper.createFormData(req.formData);
            options.transformRequest = angular.identity;
            //need to reset content type header
            options.headers["content-type"] = undefined;
        }
        if (req.form) {
            options.data = req.form;
            options.transformRequest = function (obj) {
                var encoded = APIHelper.urlEncodeObject(obj);
                return encoded;
            };
            //Set the content type
            options.headers["content-type"] = 'application/x-www-form-urlencoded';

        }
        return options;
    };

    var convertHttpResponse = function (resp) {
        var response = new HttpResponse();
        if (resp) {
            response.body = resp.data;
            response.headers = resp.headers();
            response.statusCode = resp.status;
        }

        return response;
    };


    /**
     * Execute a given HttpRequest to get string response back
     * @param    {HttpRequest | HttpBodyRequest} request    The query string builder to replace the template parameters
     * @param    {Array} parameters    The parameters to replace in the queryBuilder
     */
    function executeRequest(req) {

        //Convert abstracted request to request's http request
        var convertedRequest = convertHttpRequest(req);

        //create a context to hold raw request and response
        var context = new HttpContext();
        context.request = req;

        //make the http call.
        var response = $http(convertedRequest);
        var deffered = $q.defer();

        response.then(function (resp) {

            var response = convertHttpResponse(resp);
            context.response = response;

            //Append the context to the body for easy access
            APIHelper.appendContext(response.body, context);
            deffered.resolve(response);

        }, function (resp) {
            var response = convertHttpResponse(resp);
            context.response = response;
            //Create error
            var error = {message: response.body, code: response.statusCode};

            //Append the context to the error object
            APIHelper.appendContext(error, context);
            deffered.reject(error);
        });

        return deffered.promise;
    }

    return executeRequest;
});