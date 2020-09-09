import {apiResponses as Responses} from "../common/API_Responses";
import {Dynamo} from "../common/Dynamo";
import {APIGatewayProxyHandler} from "aws-lambda";

// LOAD env variable from config file
const tableName = process.env.tableName;
// const tableName = 'WebsocketUsers';

export const handler: APIGatewayProxyHandler = async (event) => {
// exports.handler = async event => {
    console.log('event', event);
    console.log('table name: ', tableName)
    console.log('table name: ', tableName)
    console.log('table name: ', tableName)
    console.log('table name: ', tableName)

    const { connectionId: connectionID, domainName, stage } = event.requestContext;

    const data = {
        ID: connectionID,
        date: Date.now(),
        messages: [],
        domainName,
        stage,
    };

    await Dynamo.write(data, tableName)

    return Responses._200({message: 'connected'})
}