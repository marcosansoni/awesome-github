import type { Maybe } from "@graphql-tools/utils";
import { SmallBody } from "../../Typography";
import { withCustomClassNames } from "../../../../utils/style";

interface GitHubUser {
  avatarUrl: string;
  name?: Maybe<string>;
  login: string;
  bio?: Maybe<string>;
  classNames: string;
}

export const AutosuggestItem = ({
  avatarUrl,
  name,
  login,
  bio,
  classNames,
}: GitHubUser) => {
  return (
    <div className={withCustomClassNames("flex pt-2 pb-2", classNames)}>
      <img
        src={avatarUrl}
        alt="avatar"
        width={48}
        height={48}
        className="max-h-[48px] min-w-[48px] rounded-full"
      />
      <div className="ml-3 flex-col">
        <h1>
          <span className="font-serif font-bold sm:text-lg">{name}</span>
          <span className="text-sm">{` - ${login}`}</span>
        </h1>
        <SmallBody classNames="truncate max-h-[24px] w-full">{bio}</SmallBody>
      </div>
    </div>
  );
};
