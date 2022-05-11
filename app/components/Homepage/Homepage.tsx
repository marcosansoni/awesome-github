import { Heading1, Heading2 } from "../Typography";
import { PrimaryButton } from "../Button";

export const Homepage = () => {
  return (
    <div className="flex h-screen w-full justify-end">
      <div className="flex w-full justify-end">
        <div className="m-6 flex w-full max-w-3xl flex-col">
          <header className="">Ciao</header>
          <div className="flex h-full flex-col justify-center">
            <Heading1>Explore GitHub.</Heading1>
            <Heading2 classNames="text-green-100 underline mt-4 mb-4 max-w-lg">
              Browse all over the repositories, with stats.
            </Heading2>
            <div>
              <PrimaryButton onClick={() => console.log("click")}>
                Discover
              </PrimaryButton>
            </div>
          </div>
          <div className="w-full">Ciao</div>
        </div>
      </div>
      <div className="flex h-full w-full max-w-4xl">
        <div className="flex h-full w-full bg-blue-100" />
        <div className="flex h-full w-full bg-blue-80" />
        <div className="flex h-full w-full bg-blue-60" />
        <div className="flex h-full w-full bg-blue-40" />
      </div>
    </div>
  );
};
