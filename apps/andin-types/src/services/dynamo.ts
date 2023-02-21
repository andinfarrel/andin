import { DynamoDB } from "@aws-sdk/client-dynamodb";

export const dynamo = new DynamoDB({ region: "eu-west-2" });
