import { SmallBody } from "../../Typography";

interface GitHubUser {
  avatarUrl: string;
  name: string;
  login: string;
  bio: string;
}

export const AutosuggestItem = ({
  avatarUrl,
  name,
  login,
  bio,
}: GitHubUser) => {
  return (
    <div className="flex w-16 p-3">
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
