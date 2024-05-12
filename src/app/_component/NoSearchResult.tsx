import Image from "next/image";
import QM from "../../../public/questionMark.png";

export default function NoSearchResult() {
  return (
    <div className="flex flex-col justify-center items-center p-8">
      <Image src={QM} alt="question mark" />
      <div className="m-6 font-semibold">
        현재 모집 중인 임상시험이 없습니다.
      </div>
      <div className="text-gray-400">원하시는 결과가 없나요? </div>
      <div className="text-gray-400">
        아래 ‘임상시험 소식받기’를 통해 간단한 정보만 입력해주시면 해당 조건에
        맞는
      </div>
      <div className="text-gray-400">
        새로운 임상시험이 등록 되었을 때 빠르게 알려드리겠습니다.
      </div>
    </div>
  );
}
