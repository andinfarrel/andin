import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

export const dynamo = new DynamoDBClient({ region: "eu-west-2" });
