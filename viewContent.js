exports.getWebviewContent = () => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>API Client</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.39.2/codemirror.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.39.2/codemirror.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.39.2/mode/javascript/javascript.js"></script>
    
    </head>
    <body>
        <div>
            <form>
                <div>
                    <label style='font-size: 20px;'>URL Endpoint: </label>
                    <input type='text' id="endpointUrl" style='width: 100%; height: 25px; padding: 10px; margin: 10px;' placeholder='http://localhost:3000/api/kibodash' />
                </div>
    
                <div>
                    <label style='font-size: 20px;'>Method: </label>
                    <select id='selectMethod' style='width: 100%; height: 35px; padding: 10px; margin: 10px;'>
                        <option value='GET'> GET </option>
                        <option value='POST'> POST </option>
                        <option value='PUT'> PUT </option>
                        <option value='DELETE'> DELETE </option>
                    </select>
                </div>
    
                <div id="payload">
                    <label style='font-size: 20px;'>Payload: </label>
                </div>
                
                <div>
                    <button type="button" id="callApi"> SUBMIT </button>
                </div>
            </form>
        </div>
        <div>
            Response From the API Call:
            <pre id="response">
                {
                    Test: 'not loaded'
                }
            </pre>
        </div>
    <script>
        $(document).ready(function() {
            var myCodeMirror = CodeMirror(function(elt) {
                var area = $('#payload').append(elt)
                
              }, {
                value: "",
                mode:  {name: "javascript", json: true},
                lineNumbers: true,
                smartIndent: true
              });
            var that = this
            $('#callApi').click(function() {
                var method = $( '#selectMethod' ).val();
                var url = $('#endpointUrl').val()
                var doc = myCodeMirror.getValue()
                if(method == 'GET') {
                    $.ajax({
                        method: 'GET',
                        url: url,
                    })
                    .done(function( msg ) {
                        alert( " Got a response " );
                        $('#response').text(JSON.stringify(msg, null, "  "))
                    });
                }
                if(method == 'POST') {
                    $.ajax({
                        method: 'POST',
                        url: url,
                        data: doc
                    })
                    .done(function( msg ) {
                        alert( " Got a response " );
                        $('#response').text(JSON.stringify(msg, null, "  "))
                    });
                }
    
                
                
                
            })
            
        })
    </script>
    </body>
    </html>`;
}