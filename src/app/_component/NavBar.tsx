import Image from "next/image";
import logo from "../../../public/logo.png";
export default function NavBar() {
  return (
    <div className="flex w-full h-[52px] items-center justify-center space-x-[30rem]">
      <div className="flex items-center justify-center text-eimsangColor text-xl font-bold">
        <Image src={logo} alt="logo" />
        한국임상정보
      </div>
      <div>즐겨찾기</div>
    </div>
  );
}
