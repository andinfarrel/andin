import {
  DynamoDBClient,
  GetItemCommand,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";

export const blogParams = {
  TableName: "blog",
};

export type BlogPost = {
  id: string;
  title: string;
  description: string;
  content: string;
};

export function dynamoClient() {
  return new DynamoDBClient({
    region: "eu-west-2",
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  });
}

export async function getPosts(
  dynamo: DynamoDBClient
): Promise<BlogPost[] | undefined> {
  const data = await dynamo.send(new ScanCommand(blogParams));
  return data.Items?.map((item) => {
    const blogPost: BlogPost = {
      id: item.id.S ?? "",
      content: item.content.S ?? "",
      title: item.title.S ?? "",
      description: item.description.S ?? "",
    };
    return blogPost;
  });
}

export async function getPost(
  dynamo: DynamoDBClient,
  id: string
): Promise<BlogPost | undefined> {
  const data = await dynamo.send(
    new GetItemCommand({
      TableName: blogParams.TableName,
      Key: {
        id: { S: id },
      },
    })
  );

  const item = data.Item ?? {};
  return {
    id: item.id.S ?? "",
    content: item.content.S ?? "",
    title: item.title.S ?? "",
    description: item.description.S ?? "",
  };
}
