import { CiSearch } from "react-icons/ci";

interface Props {
  className?: string;
}

const SearchIcon = ({ className }: Props) => {
  return <CiSearch className={className} />;
};

export default SearchIcon;
