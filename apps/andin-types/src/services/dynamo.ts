import { DynamoDBClient, QueryCommand } from "@aws-sdk/client-dynamodb";
import { GetCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";

const dynamo = new DynamoDBClient({ region: "eu-west-2" });

export const blogParams = {
  TableName: "blog",
};

export const getItem = async () => {
  try {
    const data = await dynamo.send(new ScanCommand(blogParams));
    return data.Items;
  } catch (err) {}
};
