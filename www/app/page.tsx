import Image from "next/image";
import {cn} from "@/lib/utils";
import Header from '@/src/widgets/header';
export default function Home() {

    const left = () : React.ReactNode => {
        return (
            <div className={"w-1/3 h-full flex items-center justify-center"}>
                <Image src="/purple-heart.png" alt="Fanpit logo" width={25} height={25} />
                <p className={"text-lg"}>Spaces</p>
            </div>
        );
    };
  return (
      <div className={cn("w-full h-full")}>
        <Header left={left()} />
      </div>
  );
}
