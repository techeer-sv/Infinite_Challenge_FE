import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  // 쿼리 파라마티에서 데이터 가져오기
  const searchParams = new URL(request.url).searchParams;
  const searchTerm = searchParams.get("searchTerm") || ""; // searchTerm 추출

  try {
    const response = await axios.get(
      `https://api.clinicaltrialskorea.com/api/v1/search-conditions/?name=${searchTerm}`
    );
    return new NextResponse(JSON.stringify(response.data), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("server error", {
      status: 500,
    });
  }
};
