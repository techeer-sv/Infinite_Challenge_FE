import styled from "styled-components"

const SearchItemLayout = styled.div`
  width: 431px;
  height: 178px;
  padding: 20px;
  border: 1px solid #D7DCE0;
  border-radius: 10px;
`
const SearchItemTitleLayout = styled.div`
  width: 391px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const SearchItemWhere = styled.div`
  width: 391px;
  height: 18px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: end;
  font-size: 8px;
`
const SearchItemWhen = styled.div`
  width: 391px;
  height: 18px;
  display: flex;
  font-size: 8px;
  flex-direction: row;
  justify-content: start;
  align-items: end;
  font-size: 8px;
`

const SearchItemCompany = styled.div`
  width: 391px;
  height: 16px;
  font-size: 10px;
`
const SearchItemTitle = styled.div`
  width: 391px;
  height: 54px;
  font-size: 11.5px;
  font-weight: bold;
`


export const SearchItem = ({data}:any) =>{

  return(
    <SearchItemLayout>
      <SearchItemTitleLayout>
        <SearchItemCompany>{data.lead_sponsor_name}</SearchItemCompany>
        <SearchItemTitle>{data.title}</SearchItemTitle>
      </SearchItemTitleLayout>
      <SearchItemWhere>실시기관지역|</SearchItemWhere>
      <SearchItemWhen>모집마감|몇년 몇월 몇일 까지</SearchItemWhen>
      {/* TODO: 키워드 처럼 작업 */}
    </SearchItemLayout>
  )
}

