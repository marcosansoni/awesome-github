import { gql, useQuery } from "@apollo/client";

const REPOSITORIES_USERS = gql`
  query MyQuery($query: String!) {
    search(query: $query, type: USER, first: 10) {
      userCount
      edges {
        cursor
        node {
          ... on User {
            id
            email
            avatarUrl(size: 10)
            bio
            bioHTML
            isEmployee
            isHireable
            login
            name
          }
        }
      }
      discussionCount
      codeCount
    }
  }
`;

export const Search = () => {
  const { data } = useQuery(REPOSITORIES_USERS, {
    variables: {
      query: "Marco",
    },
    ssr: false,
  });

  console.log("data", data);

  return <div>Ciao</div>;
};
