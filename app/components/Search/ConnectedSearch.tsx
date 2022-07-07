import { useState } from "react";
import { useQuery } from "@apollo/client";
import { UsersSearchDocument } from "generated/github";
import { Search } from "./Search";

export const NUMBER_RESULTS = 5;

export const ConnectedSearch = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const isPlaceholderState = inputValue.length === 0;

  const { data, loading } = useQuery(UsersSearchDocument, {
    variables: {
      query: inputValue,
      first: NUMBER_RESULTS,
    },
    ssr: false,
    skip: isPlaceholderState,
  });

  return (
    <Search
      search={data?.search}
      loading={loading}
      inputValue={inputValue}
      isPlaceholder={isPlaceholderState}
      onInputChange={setInputValue}
    />
  );
};
