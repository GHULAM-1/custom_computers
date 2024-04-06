import { PopularBuildsCard } from "./popular-builds-card";
import { LampContainer } from "./ui/lamp";
import SpecRange from "./spec-range";
import { Database } from "lucide-react";
import { Cpu } from "lucide-react";
import { Aperture } from "lucide-react";
import { MemoryStick } from "lucide-react";
export default function HomeSectionOne() {
  return (
    <>
      <div className=" flex flex-col  py-24 w-full  justify-center items-center bg-slate-950 ">
        <div className="text-6xl mb-16 font-semibold ">Popular Builds</div>
        <div className="flex flex-col gap-28 w-full justify-center items-center">
          <PopularBuildsCard
            buildLink="/"
            description="evel up your gaming experience without breaking the bank!"
            imageLink="https://res.cloudinary.com/gamma1199/image/upload/v1712392689/good-build_vejzff.webp"
            name="RTX 4060"
            price={1280}
            status="GOOD"
          >
            <SpecRange color="bg-red-500" range={70} title="Processor">
              <Cpu className="stroke-black"></Cpu>
            </SpecRange>
            <SpecRange color="bg-purple-500" range={30} title="Graphics">
              <Aperture className="stroke-black"></Aperture>
            </SpecRange>
            <SpecRange color="bg-orange-500" range={80} title="Memory">
              <MemoryStick className="stroke-black" />
            </SpecRange>
            <SpecRange color="bg-yellow-500" range={40} title="Storage">
              <Database className="stroke-black"></Database>
            </SpecRange>
          </PopularBuildsCard>

          <PopularBuildsCard
            buildLink="/"
            description="evel up your gaming experience without breaking the bank!"
            imageLink="https://res.cloudinary.com/gamma1199/image/upload/v1712392705/better-build_ju98fg.webp"
            name="RTX 4070 SUPER

"
            price={1799}
            status="BETTER"
          >
            <SpecRange color="bg-red-500" range={90} title="Processor">
              <Cpu className="stroke-black"></Cpu>
            </SpecRange>
            <SpecRange color="bg-purple-500" range={40} title="Graphics">
              <Aperture className="stroke-black"></Aperture>
            </SpecRange>
            <SpecRange color="bg-orange-500" range={50} title="Memory">
              <MemoryStick className="stroke-black" />
            </SpecRange>
            <SpecRange color="bg-yellow-500" range={70} title="Storage">
              <Database className="stroke-black"></Database>
            </SpecRange>
          </PopularBuildsCard>

          <PopularBuildsCard
            buildLink="/"
            description="evel up your gaming experience without breaking the bank!"
            imageLink="https://res.cloudinary.com/gamma1199/image/upload/v1712392599/ultimate-build_szqkqd.webp"
            name="RTX 4080 SUPER"
            price={2399}
            status="ULTIMATE"
          >
            <SpecRange color="bg-red-500" range={80} title="Processor">
              <Cpu className="stroke-black"></Cpu>
            </SpecRange>
            <SpecRange color="bg-purple-500" range={70} title="Graphics">
              <Aperture className="stroke-black"></Aperture>
            </SpecRange>
            <SpecRange color="bg-orange-500" range={90} title="Memory">
              <MemoryStick className="stroke-black" />
            </SpecRange>
            <SpecRange color="bg-yellow-500" range={95} title="Storage">
              <Database className="stroke-black"></Database>
            </SpecRange>
          </PopularBuildsCard>
        </div>
      </div>
    </>
  );
}
