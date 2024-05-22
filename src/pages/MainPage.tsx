import styled from "styled-components"
import { SearchBar} from "../components/SearchBar"
import { useEffect, useState } from "react"
import axios from "axios"
import { SearchResult } from "../components/SearchResult"
import { NoItemPage } from "../components/NoItemPage"

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

export const MainPage = () =>{
  const [ searchData, setSearchData ] = useState<any[]>([])
  const handleSearchButton = (input:string) => {
    if(input !== ''){
      const encodedInput = encodeURIComponent(input);
      const fetchDatas =async () => {
        try {
          console.info("calling api")
          const response = await axios.get(`/api/v1/studies/?offset=0&limit=10&conditions=${encodedInput}`);
          console.log(response.data.results)
          setSearchData(response.data.results)
          setNewSearchHistory(input)
        } catch (error) {
          console.log(error)
        }
      }
      fetchDatas();
    }
  }

  const setNewSearchHistory = (input: string) => {
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    const filteredHistory = searchHistory.filter((item)=> item !==input);
    const newSearchHistory = [input, ...filteredHistory]; 
    localStorage.setItem('searchHistory', JSON.stringify(newSearchHistory));
  }
  
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
        {searchData.length === 0 ? <NoItemPage/> : <SearchResult datas={searchData} /> }
      </ResultContainer>
    </Container>
  )
}