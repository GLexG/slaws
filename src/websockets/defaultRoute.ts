import logger from "@nmg/osp-backend-utils/logger";
import {BusinessError} from "@nmg/osp-backend-utils/types";

export const defaultRoute = async (connectionId: string) => {
    if (!connectionId) {
        logger.error({ message: 'Invalid request.' });
        throw new BusinessError(500, 'Missing connectionId in default request');
    }
    logger.info("Default route for connection for connectionId: " + connectionId)
    return;
}