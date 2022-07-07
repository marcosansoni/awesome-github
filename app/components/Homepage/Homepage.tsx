import { Body, Heading1, Heading2 } from "../Typography";
import { PrimaryButton } from "../Button";
import { Header } from "../Header";
import { SearchIcon } from "../SvgIcon";
import { ConnectedSearch } from "../Search";

export const Homepage = () => {
  return (
    <div className="flex h-screen w-full flex-col justify-end lg:flex-row">
      <div className="flex h-full w-full justify-end">
        <div className="m-6 flex w-full flex-col lg:max-w-3xl">
          <Header />
          <div className="flex h-full flex-col justify-center sm:items-center lg:items-start">
            <div className="flex flex-col">
              <Heading1>Explore GitHub.</Heading1>
              <Heading2 classNames="text-green-100 underline mt-4 mb-8 max-w-lg">
                Browse all over the repositories, with stats.
              </Heading2>
              <div>
                <PrimaryButton onClick={() => console.log("click")}>
                  <div className="flex">
                    <SearchIcon />
                    <Body classNames="ml-3">Discover</Body>
                  </div>
                </PrimaryButton>
              </div>
            </div>
          </div>
          <div className="hidden w-full sm:block">
            <div className="-mt-12 h-24 w-0.5 bg-gray-120" />
            <div className="h-0.5 w-24 bg-gray-120" />
          </div>
        </div>
      </div>
      <div className="flex h-1/4 w-full sm:h-2/5 lg:h-full lg:max-w-4xl">
        <div className="flex h-full w-full bg-blue-100" />
        <div className="flex h-full w-full bg-blue-80" />
        <div className="flex h-full w-full bg-blue-60" />
        <div className="flex h-full w-full bg-blue-40" />
      </div>
      <ConnectedSearch />
    </div>
  );
};
