interface IChip {
  label: string;
}
// TODO : 스타일 요소를 어디까지 props로 전달 가능하게 해야할까?
const Chip = ({ label }: IChip) => {
  const fontSize = "text-sm";
  const width = "w-14";
  const height = "h-6";
  const chipClass = `flex items-center bg-lightGray justify-center text-black rounded-full ${fontSize} ${width} ${height}`;

  return <div className={chipClass}>{label}</div>;
};

export default Chip;
