import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

export const blogParams = {
  TableName: "blog",
};

export type BlogPost = {
  id: string;
  title: string;
  description: string;
  content: string;
};

export function getDynamoClient() {
  return new DynamoDBClient({
    region: "eu-west-2",
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  });
}
