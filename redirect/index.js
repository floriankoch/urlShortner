//ToDo Error Handling
module.exports = async function (context,res) {
    context.log('JavaScript HTTP trigger function processed a request.');
    redirectUrl = context.bindings.tableBinding[0].Url
    context.log('URL ' + redirectUrl)
    context.res = {
        status: 302,
        body: `Please follow <a href=${redirectUrl}>this link</a>.`,
        headers: {
            'Location': redirectUrl
        }

    };
    context.done()
}