import Data from "@/utils/Data4";

export default function Footer() {
  return (
    <>
      <div className="flex py-16 gap-6   justify-between">
        
<div className="flex gap-5">

    <img src="Group.svg" alt="" />


<div className="flex gap-8 ">
{
    Data.map((item)=>{
        return (
            <>
             <div className="flex flex-col">
        <h4 className="text-[18px] font-medium">{item.heading}</h4>
        <p className="text-[14px]">{item.text1}</p>
        <p className="text-[14px]">{item.text2}</p>
        <p className="text-[14px]">{item.text3}</p>
        <p className="text-[14px]">{item.text4}</p>
        
    </div>
            </>
        )
    })
}
   
</div>

</div>




<div>

    <h1 className="text-[18px] font-semibold">NOUS SUIVRE</h1>

<div className="flex gap-2">
    <div className="border-[1px] border-gray-500 w-[40px] h-[40px] flex items-center justify-center rounded-md">
<img src="twitter.svg" alt="" className="p-1"/>
    </div>
    <div className="border-[1px] border-gray-500 w-[40px] h-[40px] flex items-center justify-center rounded-md">
<img src="instagram.svg" alt="" className="p-1"/>
    </div>
    <div className="border-[1px] border-gray-500 w-[40px] h-[40px] flex items-center justify-center rounded-md">
<img src="Vector (8).svg" alt="" className="p-1"/>
    </div>
    </div>
</div>

   
   </div>
    </>
  );
}
