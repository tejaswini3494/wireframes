import Data from "@/utils/Data3";

export default function Subscription() {
  return (
    <>
      <div className="flex pt-11 gap-6 flex-col">
        <div className="flex items-center justify-center flex-col">
          <h3 className="text-[26px] font-medium ">
            On s’occupe de <span className="text-[#5CD2DD]"> tout</span>
          </h3>
          <p className="text-[12px] text-[#959494]">
            Office ipsum you must be muted. It meeting commitment busy pain.
          </p>
        </div>

        <div className="flex items-center  justify-center gap-4 ">
          {Data.map((item,i) => {
            return (
              <>
                <div className="flex flex-col gap-2" key={i}>
                  <div className="flex items-center gap-2">
                    <img src={item.icon} alt="" />
                    <p className="w-32 h-[1px] text-[#667482] bg-[#667482] "></p>
                  </div>
                  <h4 className="tetx-[18px]">{item.text1}</h4>
                  <p className="text-[12px] text-[#667482]">{item.text2}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
