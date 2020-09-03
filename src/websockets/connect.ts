import {dynamo} from "../getCapitalOneOauthToken/dynamo";
import {v4 as uuidv4} from 'uuid';
import {BusinessError} from "@nmg/osp-backend-utils/types";
import logger from "@nmg/osp-backend-utils/logger";

const tableName = process.env.tableName;

export const connect = async (nmId: string, connectionId: string, domainName: string, stage: string) => {

    // const { connectionId: connectionID, domainName, stage } = event.requestContext;

    // const nmId = event.queryStringParameters?.nmId;
    // if (!nmId) return apiResponses._400({message: 'Missing nm_id in connect request'});
    if (!nmId) {
        logger.error({ message: 'Invalid request payload.' });
        throw new BusinessError(400, 'Missing nm_id in connect request');
    }

    // TODO: add interface
    const data = {
        ID: connectionId,
        nm_id: nmId,
        correlation_id: uuidv4(),
        date: Date.now(),
        messages: [],
        domainName,
        stage,
    };

    await dynamo.write(data, tableName)
    return;
}