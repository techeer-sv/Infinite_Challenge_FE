import { useEffect } from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 486px;
  max-height: 401px;
  display: ${props => props.isFocus ? 'flex' : 'none'};
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 16px;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 20px;
  margin-top: 80px;
  position: absolute;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
  overflow-x: hidden;
`

const DropDownItem = styled.div`
  width: 438px;
  height: 40px;
  padding: 12px 0px;
  font-size: 14px;
  border-radius: 5px;
  color: black;
  background-color: ${props => props.focused ?'#EFEFEF' : 'transparent'};
  border: none;
  &:hover{
    background-color: #EFEFEF;
  }
  &:focus{
    border: none;
    outline: none;
  }
`

const StyledText = styled.div`
  width: 100%;
  height: 37px;
  padding: 13px 0px;
  font-size: 13px;
  color: #6A737B;
`

export const NewDropDown = ({input ,isFocus, focusIndex, datas,handleSearch}:{input:string,isFocus:boolean,focusIndex:number, datas: any[],handleSearch: (name:string)=>void}) =>{
  useEffect(()=>{
    console.log(input)
  },[input])
  return(
    <Container isFocus={isFocus} >
      <DropDownItem>{input}</DropDownItem>
      <StyledText>추천 검색어</StyledText>
      {datas.map((data,index)=>(
        <DropDownItem  focused={focusIndex === index} onClick={()=>handleSearch(data.name)} key={index}>{data.name}</DropDownItem>
      ))}
    </Container>
  )
}