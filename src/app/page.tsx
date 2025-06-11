import Image from "next/image";
import Toon from "@/shared/bg_toon.png";
import { SpeechBubble } from "@/shared/ui/SpeechBubble";
import { Saju } from "@/views/ui/Saju";
import { dummyUser } from "@/features/model/dummyUser";

export default function Home() {
  /** 기존 과정에서 저장된 User data 호출부 */
  const UserData = dummyUser;

  const name = UserData.name;

  return (
    <div className="relative">
      <Image src={Toon} alt="toon" />
      <SpeechBubble className="top-[32%] left-[15%] w-[40%]">
        <p>이제 본격적으로</p>
        <p>{name}님의 사주팔자를</p>
        <p>분석해볼 차례네요.</p>
      </SpeechBubble>
      <SpeechBubble className="top-[49%] left-[16%] w-[45%] py-3">
        <p>제가 {name}님의 사주를</p>
        <p>보기 쉽게 표로 정리했어요.</p>
      </SpeechBubble>
      <div className=" absolute left-0 top-[66%] w-full">
        <Saju UserData={UserData} />
      </div>
    </div>
  );
}
