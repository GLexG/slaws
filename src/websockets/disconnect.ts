import {apiResponses as Responses} from "../common/API_Responses";
import {Dynamo} from "../common/Dynamo";
import {APIGatewayProxyHandler} from "aws-lambda";

const tableName = process.env.tableName;

export const handler: APIGatewayProxyHandler = async (event) => {
    console.log('event', event);

    const { connectionId: connectionID} = event.requestContext;

    await Dynamo.delete(connectionID, tableName);

    return Responses._200({message: 'disconnected'})
}