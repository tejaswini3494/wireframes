export default function HeaderTop() {
  return (
    <>
      <div className="flex justify-between items-center pt-7 flex-wrap">
        <div className="flex  gap-2">
          <img src="Group.svg" alt="" />

          <div className="flex  lg:w-[500px] h-[50px]  justify-between items-center bg-[#F9FAFB] px-4 pt-2 pb-2 rounded-[10px]">
            <h1 className="text-[14px] text-[#667482] font-normal">
              Rechercher un produit
            </h1>
            <img src="search-lg.svg" alt="" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-5">
          <div className="flex gap-2 items-center">
            <img src="Icon (2).svg" alt="" />
            <a href="" className="text-[#3B4347] text-[14px] font-semibold">
              Inspirations
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <img src="Icon (3).svg" alt="" />
            <a href="" className="text-[#3B4347] text-[14px] font-semibold">
              Mes favoris
            </a>
            <div className="bg-[#CAD2D566] rounded-3xl w-[50px] h-[30px] flex items-center justify-center">
              <p className="text-[#242D30] text-[14px] font-semibold  ">24</p>
            </div>
          </div>

          <div className="flex gap-2 items-center bg-[#0093D0] border-[2px] border-[#007AAD] py-3 px-4 rounded-lg">
            <img src="shopping-cart-01.svg" alt="" />
            <a href="" className="text-[#FFFFFF] text-[14px] font-semibold">
              Panier
            </a>
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-[#EAEDEE] h-[44px] w-[44px] rounded-full"></div>
          </div>

          <div className="flex gap-2 items-center">
            <a href="" className="text-[#3B4347] text-[14px] font-semibold">
              FR
            </a>
            <img src="chevron-down.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
