import { styled } from "styled-components";

interface SearchContentProps {
  item: { name: string; id: number };
  value?: string;
}
const SearchContent = ({ item, value = "" }: SearchContentProps) => {
  // const [matchLength, setMatchLength] = useState<number>(0);

  // useEffect(() => {
  //   const unDuplicateLength = item.name.replace(value, "").length;
  //   setMatchLength(item.name.length - unDuplicateLength);
  // }, [item.name, value]);

  return (
    <Wrapper>
      <SearchHighlightDiv>
        {item.name.slice(0, value.length)}
      </SearchHighlightDiv>
      {item.name.slice(value.length)}
    </Wrapper>
  );
};

export default SearchContent;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 14.4px;
  margin-top: 4px;
  text-align: center;
`;

const SearchHighlightDiv = styled.div`
  font-weight: bold;
  color: #007be9;
`;
