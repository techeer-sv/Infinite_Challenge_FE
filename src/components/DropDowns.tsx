import { useEffect } from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 486px;
  height: 400px;
  background-color: #ffffff;
  border-radius: 42px;
  margin-top: 10px;
  position: absolute;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`

export const DropDowns = ({datas}:{datas: any[]}) =>{
  useEffect(()=>{
    console.log(datas)
  },[datas])
  return(
    <Container>
      {datas.map((data,index)=>(
        <div key={index}>{data.name}</div>
      ))}
      {/* //TODO: 컴포넌트 만들어서 뺴기 */}
    </Container>
  )
}