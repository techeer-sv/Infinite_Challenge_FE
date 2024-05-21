import styled from "styled-components"

const Layout = styled.div`
  width: 460px;
  height: 518px;
  padding: 20px 60px;
`



export const NoItemPage = () =>{
  return(
    <Layout>
      현재 모집중인 임상 시험이 없습니다
    </Layout>
  )
}