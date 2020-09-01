const AWS = require('aws-sdk');

const create = (domainName, stage) => {
    const endpoint = `${domainName}/${stage}`;

    //setting up aws api gateway so we can send messages through websocket
    return new AWS.ApiGatewayManagementApi({
        apiVersion: '2018-11-29',
        endpoint,
    });
};

export const send = ({domainName, stage, connectionID, message}) => {
    const ws = create(domainName, stage);

    const postParams = {
        Data: message,
        ConnectionId: connectionID
    };

    return ws.postToConnection(postParams).promise();
}