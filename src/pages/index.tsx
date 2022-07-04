import {
  ApolloClient,
  NormalizedCacheObject,
  OperationVariables,
  QueryOptions,
} from "@apollo/client";
// import ComScript from "@components/Script";
import { initializeApollo, ResolverContext } from "@libs/apollo/apolloClient";
import type {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  NextPage,
} from "next";
import dynamic from "next/dynamic";
import { ParsedUrlQuery } from "querystring";
import { useEffect } from "react";

const ComScript = dynamic(() => import("../components/Script"), {
  ssr: false,
});

const Home: NextPage = () => {
  useEffect(() => {}, []);
  return (
    <>
      <div className="bg-green-500">
        <h1 className="text-red-600">{process.env.LC_PROJECT_NAME}</h1>
        <button className="btn btn-primary">안녕</button>
      </div>
      <ComScript />
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   return {
//     props: {},
//   };
// };

// This function gets called at build time
// export const getStaticPaths = async () => {
//   const paths = [
//     { params: { type: "a", idx: 1 } },
//     { params: { type: "a", idx: 1 } },
//   ];
//   return { paths, fallback: false };
// };

// export const getStaticProps: GetStaticProps = async (ctx) => {
//   const apolloClient = initializeApollo(null, null, "");
// let tablist: getTabListQuery_getTabList_list[] = [];
// try {
//   const result = await apolloClient.query<getTabListQuery>({
//     query: GETTABLIST_QUERY,
//     variables: {
//       where: {
//         at_tab_page: "experience",
//       },
//     },
//   });
//   tablist = result.data.getTabList.list;
// } catch (err: any) {
//   console.log("get faild Query");
// }
//   return {
//     props: {},
//   };
// };

export default Home;
