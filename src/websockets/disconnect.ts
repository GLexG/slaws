import {dynamo} from "../getCapitalOneOauthToken/dynamo";
import logger from "@nmg/osp-backend-utils/logger";

const tableName = process.env.tableName;

export const disconnect = async (connectionId: string) => {
    // console.log('event', event);
    logger.info("Deleting connection for connectionId: ")
    // const { connectionId: connectionID} = event.requestContext;

    await dynamo.delete(connectionId, tableName);

    return;
}