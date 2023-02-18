import { DynamoDBClient, QueryCommand } from "@aws-sdk/client-dynamodb";
import { GetCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";

const dynamo = new DynamoDBClient({ region: "eu-west-2" });

export const blogParams = {
  TableName: "blog",
};


export interface BlogItems {
  items: Record<string, any>[];
}

export const getItems = async () => {
  const data = await dynamo.send(new ScanCommand(blogParams));
  return data.Items;
};
