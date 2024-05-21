import styled from "styled-components"
import { SearchItem } from "./SearchItem"

const Container = styled.div`
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  padding: 20px 10px;
`

export const SearchResult = ({datas}:{datas: any[]}) =>{
  return(
    <Container>
      {datas.map((data,index)=>(
        <SearchItem key={index} data={data}></SearchItem>
      ))}
    </Container>
    //TODO: 무한 스크롤 작성하기
  )
}