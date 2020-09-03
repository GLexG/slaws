import {WsMessageRequest} from "../models/wsMessageRequest";
import {PostToConnectionRequest} from "aws-sdk/clients/apigatewaymanagementapi";

const AWS = require('aws-sdk');

const create = (domainName: string, stage: string) => {
    const endpoint = `${domainName}/${stage}`;

    //setting up aws api gateway so we can send messages through websocket
    return new AWS.ApiGatewayManagementApi({
        apiVersion: '2018-11-29',
        endpoint,
    });
};

export const send = (params: WsMessageRequest) => {
    const ws = create(params.domainName, params.stage);

    const postParams: PostToConnectionRequest = {
        Data: params.message,
        ConnectionId: params.connectionId
    };

    return ws.postToConnection(postParams).promise();
}