import { useState } from "react";
import { UsersSearchQuery } from "generated/github";
import { Modal } from "../Modal";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  EnterKeyIcon,
  SearchIcon,
} from "../SvgIcon";
import { SmallBody } from "../Typography";
import { KeyCap } from "../KeyCap";
import { AutosuggestItem } from "../Autosuggest/AutosuggestItem";

interface SearchProps {
  search?: UsersSearchQuery["search"];
  loading?: boolean;
  isPlaceholder?: boolean;
  onInputChange: (input: string) => void;
  inputValue: string;
}

export const Search = ({
  search,
  loading,
  isPlaceholder,
  onInputChange,
  inputValue,
}: SearchProps) => {
  const [open, setOpen] = useState(true);
  // const [input, setInput] = useState("");
  //
  // const placeholderState = input.length === 0;
  //
  // const { data, loading } = useQuery(REPOSITORIES_USERS, {
  //   variables: {
  //     query: input,
  //   },
  //   ssr: false,
  //   skip: placeholderState,
  // });

  // const {
  //   isOpen,
  //   selectedItem,
  //   getToggleButtonProps,
  //   getLabelProps,
  //   getMenuProps,
  //   getInputProps,
  //   getComboboxProps,
  //   highlightedIndex,
  //   getItemProps,
  // } = useCombobox({
  //   items:
  // });

  if (!open) {
    return null;
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      title={
        <div className="flex items-center">
          <SearchIcon size={24} />
          <input
            placeholder={"Start typing"}
            className="ml-1 w-full p-1 outline-0"
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
          />
        </div>
      }
    >
      {isPlaceholder && (
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
      {loading && !isPlaceholder && <div>Loading</div>}
      <>
        {(search?.edges ?? []).map((searchResult) => {
          const user = searchResult?.node;
          if (user?.__typename === "User") {
            // avatarUrl is defined as any into github docs
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const { avatarUrl, name, login, bio } = user;
            return (
              <AutosuggestItem
                classNames={"bg-grey-60"}
                avatarUrl={avatarUrl as string}
                name={name}
                login={login}
                bio={bio}
              />
            );
          }
          return null;
        })}
        {search?.userCount && (
          <div>And {search.userCount - 10} more results</div>
        )}
      </>
    </Modal>
  );
};
