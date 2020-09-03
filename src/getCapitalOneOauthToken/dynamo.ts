import * as AWS from 'aws-sdk';

const documentClient = new AWS.DynamoDB.DocumentClient();

export const dynamo = {

    async get(ID: string, TableName: string) {
        const params = {
            TableName,
            Key: {
                ID,
            },
        };

        const data = await documentClient.get(params).promise();

        if (!data || !data.Item) {
            throw Error(`There was an error fetching the data for ID of ${ID} from ${TableName}`);
        }
        console.log(data);

        return data.Item;
    },

    async write(data: any, TableName: string) {
        if (!data.ID) {
            throw Error('no ID on the data');
        }

        const params = {
            TableName,
            Item: data,
        };

        const res = await documentClient.put(params).promise();

        if (!res) {
            throw Error(`There was an error inserting ID of ${data.ID} in table ${TableName}`);
        }

        return data;
    },

    async delete(ID: string, TableName: string) {
        const params = {
            TableName,
            Key: {
                ID
            }
        };

        return documentClient.delete(params).promise();

    },
};