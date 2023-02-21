import { dynamo } from "./dynamo";

export const blogParams = {
  TableName: "blog",
};

export type BlogPost = {
  id: string;
  title: string;
  description: string;
  content: string;
};

export async function getPosts(): Promise<BlogPost[] | undefined> {
  const data = await dynamo.scan(blogParams);
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

export async function getPost(id: string): Promise<BlogPost | undefined> {
  const data = await dynamo.getItem({
    TableName: blogParams.TableName,
    Key: {
      id: { S: id },
    },
  });

  const item = data.Item ?? {};
  console.log(item);
  return {
    id: item.id.S ?? "",
    content: item.content.S ?? "",
    title: item.title.S ?? "",
    description: item.description.S ?? "",
  };
}
