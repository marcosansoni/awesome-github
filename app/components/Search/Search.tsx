import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { Modal } from "../Modal";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  EnterKeyIcon,
  SearchIcon,
} from "../SvgIcon";
import { SmallBody } from "../Typography";
import { KeyCap } from "../KeyCap";
import { AutosuggestItem } from "../Autosuggest/AutosuggestItem/AutosuggestItem";

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
            avatarUrl(size: 64)
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
  const [open, setOpen] = useState(true);
  const [input, setInput] = useState("");

  const placeholderState = input.length === 0;

  const { data, loading } = useQuery(REPOSITORIES_USERS, {
    variables: {
      query: input,
    },
    ssr: false,
    skip: placeholderState,
  });

  console.log("data", data);

  return (
    open && (
      <Modal
        onClose={() => setOpen(false)}
        title={
          <div className="flex items-center">
            <SearchIcon size={24} />
            <input
              placeholder={"Start typing"}
              className="ml-1 w-full p-1 outline-0"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        }
      >
        {placeholderState && (
          <SmallBody classNames="w-full p-3 text-center">
            You can search for both users and repositories.
            <br />
            <br />
            <div className="flex items-center justify-center">
              Results will be showed here, and you can use
              <KeyCap classNames="ml-1 mr-1">
                <ArrowUpIcon size={16} />
              </KeyCap>
              and
              <KeyCap classNames="ml-1 mr-1">
                <ArrowDownIcon size={16} />
              </KeyCap>
              to move
            </div>
            <br />
            <div className="flex items-center justify-center">
              Select with
              <KeyCap classNames="ml-1 mr-1 min-w-[26px] min-h-[26px]">
                <EnterKeyIcon size={16} />
              </KeyCap>
            </div>
          </SmallBody>
        )}
        {loading && !placeholderState && <div>Loading</div>}
        {/*{!!data && <div>{JSON.stringify(data)}</div>}*/}
        {!!data && (
          <>
            {data?.search?.edges?.map((searchResult) => {
              const user = searchResult?.node;
              const { avatarUrl, name, login, bio } = user ?? {};
              return (
                <AutosuggestItem
                  avatarUrl={avatarUrl}
                  name={name}
                  login={login}
                  bio={bio}
                />
              );
            })}
            <div>And {data?.search?.userCount - 10} more results</div>
          </>
        )}
      </Modal>
    )
  );
};
