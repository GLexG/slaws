import {apiResponses as Responses} from "../common/API_Responses";
import {APIGatewayProxyHandler} from "aws-lambda";

export const handler: APIGatewayProxyHandler = async (event) => {
    console.log('event', event);

    return Responses._200({message: 'default'})
}