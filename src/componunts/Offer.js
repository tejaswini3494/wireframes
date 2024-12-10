

export default function Offer() {
  return (
    <>
      <div className="flex gap-4 pt-16 justify-between flex-col sm:flex-row">
        <img src="BUFFET_037 1.svg" alt="" className="rounded-2xl w-[600px]" />

        <div className="rounded-2xl bg-zinc-200 p-4 flex flex-col justify-between ">
          <div className="flex   flex-col  gap-5">
            <h3 className="text-[26px] font-medium ">
              S’inscrire & économiser{" "}
              <span className="text-[#5CD2DD]"> 10%</span>
            </h3>
            <p className="text-[12px] text-[#959494]">
              Office ipsum you must be muted. Synergize helicopter prioritize
              anyway job due harvest most opportunity didn't. Yet busy any
              meeting shark light marginalised 4-blocker message. Productize
              corporate nail caught synergy highlights lunch. Company another
              pushback items dear or any.
            </p>
          </div>

          <div className="flex gap-2 pt-4 ">
            <input
              type="text"
              placeholder="john@doe.com"
              className=" border-[1px] border-[#959494] py-4 px-6 flex-1 rounded-lg"
            />
            <button className="text-[#ffffff] bg-[#5CD2DD] py-4 px-6 flex-2 rounded-lg">
              S’inscrire
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
