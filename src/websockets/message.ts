import {dynamo} from "../getCapitalOneOauthToken/dynamo";
import {send as WebsocketSend} from "../getCapitalOneOauthToken/websocketMessage";
import {BusinessError} from "@nmg/osp-backend-utils/types";
const tableName = process.env.tableName;

export const message = async (connectionId: string, body: any) => {

    try {
        const record = await dynamo.get(connectionId, tableName)
        const {messages, domainName, stage} = record;

        messages.push(body.message);

        const data = {
            ...record,
            messages
        };

        await dynamo.write(data, tableName);

        //Send response to message
        await WebsocketSend({domainName, stage, connectionId, message: "This is a reply to message"})

        return;

    } catch (error) {
        throw new BusinessError(500, 'message could not be received');
    }

}