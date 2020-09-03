import axios from 'axios';
import qs from 'qs';

export const getCapitalOneOauthToken = async () => {

    const url = "https://api-sandbox.capitalone.com/oauth2/token";
    const data = {
        client_id: "c40c41f30363483ebeb2cc0dd54d88de",
        client_secret: "3623feb452641fe7441b809ce5090e2f",
        grant_type: "client_credentials"

    };
    const options = {
        method: "post",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        data: qs.stringify(data),
        url,
    };

    return await axios(options)
        .then((response) => {
            console.log(response.data.access_token);
            console.log("Ended axios request");
            return {
                statusCode: 200,
                body: JSON.stringify(response.data.access_token, null, 2),
            };
        })
        .catch((err) => {
            console.log(err);
        });



}