import styled from "styled-components"
import { SearchBar} from "../components/SearchBar"
import { useState } from "react"
import axios from "axios"
import { SearchResult } from "../components/SearchResult"

const Container = styled.div`
  width: 100vw;
`

const SearchContainer = styled.div`
  width: 100%;
  height: 462px;
  background-color: #CAE9FF;
  padding: 58px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const TextWrapper = styled.div`
  font-size: 34px;
  font-weight: bold;
  text-align: center;
  white-space: pre-wrap;
  line-height: 52px;
  letter-spacing: -0.4px;
`

const ResultContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

// const SearchBar = styled.div`
//   width: 486px;
//   height: 69.7px;
//   background-color: #ffffff;
//   border-radius: 42px;
//   margin-top: 40px;
// `


export const MainPage = () =>{
  const [ searchData, setSearchData ] = useState<any[]>([])

  const handleSearchButton = (input:string) => {//검색에 대한 결과
    const encodedInput = encodeURIComponent(input);
    const fetchDatas =async () => {
      try {
        console.info("calling api")
        const response = await axios.get(`/api/v1/studies/?offset=0&limit=10&conditions=${encodedInput}`);
        setSearchData(response.data.results)
      } catch (error) {
        console.log(error)
      }
    }
    fetchDatas();
  }

  //필요한 APICALL

  return(
    <Container>
      <SearchContainer>
        <TextWrapper>
          국내 모든 임상시험 검색하고<br/>
          온라인으로 참여하기
        </TextWrapper>
        <SearchBar handleSearch={handleSearchButton}/>
      </SearchContainer>
      <ResultContainer>
        {/* //내려보내줘야하는 정보 -> 검색 결과 */}
        {searchData.length === 0 ? "검색 결과 없음" : <SearchResult datas={searchData} /> }
      </ResultContainer>
    </Container>
  )
}