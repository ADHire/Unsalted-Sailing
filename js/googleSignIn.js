function logout() {
    gapi.auth.signOut();
    location.reload();
}

function login() {
    var myParams = {
        'clientid' : '207327943083-9jqvp8b23d4jdubb6nd8gisrona3fenu.apps.googleusercontent.com',
        'cookiepolicy' : 'single_host_origin',
        'callback' : 'loginCallback',
        'approvalprompt':'force',
        'scope' : 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
    };
    gapi.auth.signIn(myParams);
}

function loginCallback(result) {
    if(result['status']['signed_in']) {
        var request = gapi.client.plus.people.get({
            'userId': 'me'
        });
        request.execute(function (resp) {
            var email = '';
            if(resp['emails']) {
                for(i = 0; i < resp['emails'].length; i++) {
                    if(resp['emails'][i]['type'] == 'account') {
                        email = resp['emails'][i]['value'];
                    }
                }
            }

            var googleFirstName = resp['name']['familyName'];
            var googleLastName = resp['name']['givenName'];
            var googleImg = resp['image']['url'];
            var googleImgSrc = "<img src='" + resp['image']['url'] + "' />";
            var googleURL = "URL:" + resp['url'];
            var googleEmail = email;
            var googleEducation = resp['organizations'][0]['name'];
            document.getElementById("googleFirstName").innerHTML = googleFirstName;
            document.getElementById("googleLastName").innerHTML = googleLastName;
            document.getElementById("googleEducation").innerHTML = googleEducation;
            document.getElementById("googleEmail").innerHTML = googleEmail;
            document.getElementById("googleImg").src = googleImg;
            console.log("profile");
        });

    }

}

function onLoadCallback() {
    gapi.client.setApiKey('AIzaSyC7_W2SU2HwfVoEZbfVqgChNYKtoYZX6Ic');
    gapi.client.load('plus', 'v1',function(){});
}

(function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/client.js?onload=onLoadCallback';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();