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
  height: 36px;
  font-size: 13px;
  color: #6A737B;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
`
const AlertText = styled.div`
  width: 100%;
  height: 32px;
  font-size: 16px;
  padding: 8px 0px;
  color: #A7AFB7;
`

export const HistoryDropDown = ({isFocus, datas,handleSearch}:{isFocus:boolean, datas: any[],handleSearch: (name:string)=>void}) =>{
  return(
    <Container isFocus={isFocus} >
      <StyledText>최근 검색어</StyledText>
      {
        datas.length === 0 
        ?
        <AlertText>최근 검색어가 없습니다</AlertText>
        :
        datas.map((data,index)=>(
          <DropDownItem  onClick={()=>handleSearch(data)} key={index}>{data}</DropDownItem>
        ))
      }      
    </Container>
  )
}