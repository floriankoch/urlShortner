//ToDo Error Handling
const normalizeUrl = require('normalize-url');


module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    
    originalUrl = req.query.url;
    normalizedUrl = "";
    status = 200;
    existingUrl = context.bindings.tableBinding1[0].RowKey
    context.log(existingUrl)

    if (originalUrl) {
    normalizedUrl =   normalizeUrl(originalUrl, {forceHttps: true});

    } else {

         status = 500
         
         
    }
    function getrandom(){
        var random_string = Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 5);
        return random_string
    }

    shortID = getrandom()

    context.res = {
        status: status,
        body: "Your shortn ID is " + shortID + normalizedUrl + "x" + existingUrl
    };

    context.bindings.tableBinding = [];

    context.bindings.tableBinding.push({
            PartitionKey: 'link',
            RowKey: shortID,
            Url: normalizedUrl,
            originalUrl: originalUrl,

        });
   

}