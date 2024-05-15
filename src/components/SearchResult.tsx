import styled from "styled-components"

const Container = styled.div`
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`

export const SearchResult = ({datas}:{datas: any[]}) =>{
  return(
    <Container>
      {datas.map((data,index)=>(
        <div key={index}>{data.title}</div>
      ))}
      {/* //TODO: 컴포넌트 만들어서 뺴기 */}
    </Container>

    //TODO: 무한 스크롤 작성하기
  )
}