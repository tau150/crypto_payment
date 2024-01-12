import { MdError } from "react-icons/md";

import Card from "@/components/UI/Card/Card";

const ErrorSection = () => {
  return (
    <Card className="h-60 w-full">
      <h1 className="flex mb-10 justify-center">
        <MdError className="text-red-500 text-2xl mr-3" />
        Ooops!
      </h1>
      <h1>Something went wrong, please try again later.</h1>
    </Card>
  );
};

export default ErrorSection;
