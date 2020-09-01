import {apiResponses as Responses} from "../common/API_Responses";
import {Dynamo} from "../common/Dynamo";
import {APIGatewayProxyHandler} from "aws-lambda";
import {send as WebsocketSend} from "../common/websocketMessage";
// const Websocket = require('./common/websocketMessage');
const tableName = process.env.tableName;

export const handler: APIGatewayProxyHandler = async (event) => {
    console.log('event', event);

    const {connectionId: connectionID} = event.requestContext;

    const body = JSON.parse(event.body);

    try {
        const record = await Dynamo.get(connectionID, tableName)
        const {messages, domainName, stage} = record;

        messages.push(body.message);

        const data = {
            ...record,
            messages
        };

        await Dynamo.write(data, tableName);

        //message is the first message
        await WebsocketSend({domainName, stage, connectionID, message: "This is a reply to your message"})

        return Responses._200({message: 'received a message'})

    } catch (error) {
        return Responses._400({message: 'message could not be received'})
    }

}