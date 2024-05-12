import Chip from "@/components/Chip";
import ToggleButton from "@/components/ToggleButton";
interface ISearchCard {
  title: string;
  description: string;
  region: string;
  period: string;
  tagList: string[];
  toggleChecked?: boolean;
  width?: string;
  onToggleClick?: () => void;
}

const SearchCard = ({
  title,
  description,
  region,
  period,
  tagList,
  toggleChecked = false,
  onToggleClick,
  width = "431px",
}: ISearchCard) => {
  return (
    <div
      className="bg-white border border-lightGray rounded-lg p-5 space-y-4"
      style={{ width: width }}
    >
      {/* 카드 상단 */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-blueGray">{title}</p>
        <ToggleButton checked={toggleChecked} onClick={onToggleClick} />
      </div>
      {/* 설명 */}
      <p
        className="font-bold"
        style={{ fontSize: "11.5px", minHeight: "60px" }}
      >
        {description}
      </p>

      <div className="space-y-2">
        <p className="pt-2 text-sm text-gray-500">{`실시기관지역 | ${region}`}</p>
        <p className="pt-2 text-sm text-gray-500">{`모집 마감일 | ${period} 까지`}</p>
      </div>
      {/* 태그 목록 */}
      <div className="flex gap-2 flex-wrap">
        {tagList.map((tag, index) => (
          <Chip key={index} label={tag} />
        ))}
      </div>
    </div>
  );
};

export default SearchCard;
