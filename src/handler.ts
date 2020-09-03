import 'source-map-support/register';

import {APIGatewayProxyEvent, APIGatewayProxyResult} from 'aws-lambda';
import response from '@nmg/osp-backend-utils/http/response';
import {applyCommonHandlers, CommonHandler} from "@nmg/osp-backend-utils/handlers";
import {getUserCreditCardInfo} from "./services/getCreditCardInfo";
import {getCapitalOneOauthToken} from "./services/getCapitalOneOauthToken";
import {connect as connectWs} from "./websockets/connect";
import {disconnect as disconnectWs} from "./websockets/disconnect";
import {defaultRoute as defaultWs} from "./websockets/defaultRoute";
import {message as messageWs} from "./websockets/message";

export const getCreditCardInfo = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> =>
    applyCommonHandlers([CommonHandler.Error], event, async () => {
        const card = event.pathParameters?.card;

        return response.ok(await getUserCreditCardInfo(card));
    });

export const getOauthToken = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> =>
    applyCommonHandlers([CommonHandler.Error], event, async () => {

        return response.ok(await getCapitalOneOauthToken());
    });

export const connect = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> =>
    applyCommonHandlers([CommonHandler.Error], event, async () => {

        const {connectionId: connectionID, domainName, stage} = event.requestContext;
        const nmId = event.queryStringParameters?.nmId;

        return response.ok(await connectWs(nmId, connectionID, domainName, stage));
    });

export const disconnect = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> =>
    applyCommonHandlers([CommonHandler.Error], event, async () => {
        const {connectionId: connectionID} = event.requestContext;

        return response.ok(await disconnectWs(connectionID));

    });

export const defaultRoute = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> =>
    applyCommonHandlers([CommonHandler.Error], event, async () => {
        const {connectionId: connectionID} = event.requestContext;

        return response.ok(await defaultWs(connectionID));

    });


export const message = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> =>
    applyCommonHandlers([CommonHandler.Error], event, async () => {
        const {connectionId: connectionID} = event.requestContext;
        const body = JSON.parse(event.body);

        return response.ok(await messageWs(connectionID, body));

    });
