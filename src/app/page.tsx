import Image from "next/image";
import Toon from "@/shared/bg_toon.png";
import { SpeechBubble } from "@/shared/ui/SpeechBubble";
import { Saju } from "@/views/ui/Saju";
import Toon1 from "@/shared/Toon1.png";
import Toon2 from "@/shared/Toon2.png";
import Toon3 from "@/shared/Toon3.png";

export default function Home() {
  return (
    <div className="relative">
      <Image src={Toon} alt="toon" />
      {/* <Image src={Toon1} alt="toon1" />
      <Image src={Toon2} alt="toon2" className=" pr-6" />
      <Image src={Toon3} alt="toon1" /> */}
      <SpeechBubble className="top-[32%] left-[15%] w-[40%]">
        <p>이제 본격적으로</p>
        <p>{}님의 사주팔자를</p>
        <p>분석해볼 차례네요.</p>
      </SpeechBubble>
      <SpeechBubble className="top-[49%] left-[16%] w-[45%] py-3">
        <p>제가 {}님의 사주를</p>
        <p>보기 쉽게 표로 정리했어요.</p>
      </SpeechBubble>
      <div className=" absolute left-0 bottom-0 w-full">
        <Saju />
      </div>
    </div>
  );
}
