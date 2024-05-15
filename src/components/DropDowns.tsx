import {  useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: ${props => props.isFocus ? '' : '0px'};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 42px;
  margin-top: 80px;
  position: absolute;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
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

export const DropDowns = ({isFocus, datas,handleSearch}:{isFocus:boolean, datas: any[],handleSearch: (name:string)=>void}) =>{
  const [ focusIndex, setFocusIndex ] = useState<number>(0)


  const handleKeyPress = (event) =>{
    event.preventDefault()
    if(event.key === "ArrowDown" || event.key ==="Tab"){
      setFocusIndex(focusIndex+1)
    }else if(event.key === "ArrowUp"){
      setFocusIndex(focusIndex-1)
    } else if (event.key === "Enter") {
      handleSearch(datas[focusIndex].name);
    }
  }

  return(
    <Container isFocus={isFocus} >
      {/* //TODO: 검색어 없음 구현하기 */}
      <div>최근 검색어</div>
      <div>최근 검색어가 없습니다</div>

      {datas.map((data,index)=>(
        <DropDownItem tabIndex={0} focused={index===focusIndex} onClick={()=>handleSearch(data.name)} onKeyDown={handleKeyPress} onFocus={()=>setFocusIndex(index)}  key={index}>{data.name}</DropDownItem>
      ))}
      {/* //TODO: 컴포넌트 만들어서 뺴기 */}
      {/* //TODO: 최근 검색어 구현하기 */}
    </Container>
  )
}