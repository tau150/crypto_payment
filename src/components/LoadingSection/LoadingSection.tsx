import { ImSpinner8 } from "react-icons/im";

const LoadingSection = () => {
  return (
    <div className="flex flex-col text-blue-800 items-center">
      <ImSpinner8 className="size-20 text-blue-800 animate-spin" />
      <p className="mt-4 font-semibold text-lg">Cargando...</p>
    </div>
  );
};

export default LoadingSection;
