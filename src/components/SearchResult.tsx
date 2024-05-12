export const SearchResult = ({datas}:{datas: any[]}) =>{
  return(
    <div>
      {datas.map((data,index)=>(
        <div key={index}>{data.id}</div>
      ))}
      {/* //TODO: 컴포넌트 만들어서 뺴기 */}
    </div>
  )
}