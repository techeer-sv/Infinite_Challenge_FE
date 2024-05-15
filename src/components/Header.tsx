import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 56px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const HeaderMainBox = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Header = () =>{
  return(
    <Container>
      <HeaderMainBox>
        <div>한국임상정보</div>
        <div>즐겨찾기</div>
      </HeaderMainBox>
    </Container>
  )
}