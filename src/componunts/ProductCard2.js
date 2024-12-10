import Data from "@/utils/Data2";
export default function ProductCard2() {
  return (
    <>
      <div className="flex flex-col gap-4 pt-14">
        <div className="flex justify-between">
          <h2 className="text-[21px] font-semibold">
            Ces produits pourraient vous intéresser
          </h2>
          <p className="text-[18px] font-light underline underline-offset-2">
            Voir toute la collection
          </p>
        </div>

        <div className="flex justify-between">
          {Data.map((item) => {
            return (
              <>
                <div className="flex flex-col gap-2 ">
                  <div className="flex ">
                    <div className="border-[1px] border-[#4a37379d] p-2">
                      <div className="flex justify-between">
                        <img src={item.icon} alt="" />
                        <p className="py-1 px-2 text-[10px] bg-[#e9e4e4] ">
                          {item.text1}
                        </p>
                      </div>

                      <img src={item.img} alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="flex justify-between">
                      <p>{item.text2}</p>
                      <p>{item.text3}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-[10px] text-[#667482]">{item.text4}</p>
                      <p className="text-[10px] text-[#667482] bg-[#F1F4F6] py-1 px-2">
                        {item.text5}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
