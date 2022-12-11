import Head from "next/head"
import { FC } from "react";

const TitleHead: FC<{
  title: string;
  iconText?: string;
}> = ({ iconText, title }) => {
  return (
    <Head>
      <link
        rel="icon"
        href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${iconText ?? "👾"}</text></svg>`}
      />
      <title>{title}</title>
    </Head>
  )
};

export default TitleHead;