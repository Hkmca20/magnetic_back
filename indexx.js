function getAccessToken() {
    return new Promise(function (resolve, reject) {
        const key = require('./magnetic-5071b-firebase-adminsdk-8bei8-cc2089eda4.json');
        const jwtClient = new google.auth.JWT(
            key.client_email,
            null,
            key.private_key,
            SCOPES,
            null
        );
        //   headers: {
        //     'Authorization': 'Bearer ' + accessToken
        //   }
        //     Content-Type:application/json
        // Authorization:key=AIzaSyZ-1u...0GBYzPu7Udno5aA

        // {
        //   "to" : "bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1...",
        //   "data" : {
        //     ...
        //   },
        // }

        //         api_key=YOUR_SERVER_KEY

        //      curl --header "Authorization: key=$api_key" \
        //      --header Content-Type:"application/json" \
        //      https://fcm.googleapis.com/fcm/send \
        //      -d "{\"registration_ids\":[\"ABC\"]}"

        jwtClient.authorize(function (err, tokens) {
            if (err) {
                reject(err);
                return;
            }
            resolve(tokens.access_token);
        });
    });
}