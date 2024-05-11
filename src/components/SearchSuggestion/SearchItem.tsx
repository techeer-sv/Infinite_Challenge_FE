import SearchIcon from "@/components/icons/SearchIcon";

interface ISearchItem {
  boldText?: string;
  regularText?: string;
  onClick: () => void;
}

const SearchItem = ({ boldText, regularText, onClick }: ISearchItem) => {
  return (
    <div
      className="w-full flex items-center justify-between py-3 p-2 bg-white hover:bg-lightGray cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        <SearchIcon size={16} color="silver" />
        <div className="ml-5">
          <span className="font-bold">{boldText}</span>
          <span>{regularText}</span>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
