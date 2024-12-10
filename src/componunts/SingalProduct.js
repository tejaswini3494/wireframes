

export default function SingleProduct() {


  return (
    <>
      <div className="flex pt-11 gap-4">
        {/* Left Side Product */}
        <div>
          <div className="flex">
            {/* Small Images of Product */}
            <div className="flex flex-col">
              <div className="bg-[#FFFFFF]">
                <img src="Table ronde 165cm Festi 2.svg" alt="Small product image 1" />
              </div>
              <div className="bg-[#FFFFFF]">
                <img src="Table ronde 165cm Festi 2.svg" alt="Small product image 2" />
              </div>
              <div className="bg-[#FFFFFF]">
                <img src="Table ronde 165cm Festi 2.svg" alt="Small product image 3" />
              </div>
              <div className="bg-[#FFFFFF]">
                <img src="Table ronde 165cm Festi 2.svg" alt="Small product image 4" />
              </div>
            </div>

            {/* Big Image of Product */}
            <div>
              <img src="Location Cheese big picture 1.svg" alt="Big product image" />
            </div>
          </div>

          {/* Description of Product */}
          <div className="flex flex-col gap-2">
            <h2 className="text-[14px] font-semibold">Description produit</h2>
            <p className="text-[12px] text-[#3B4347] font-light w-[600px] text-justify">
            Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".
            </p>
          </div>
        </div>

        {/* Right Side Product */}
        <div className="flex flex-col justify-between">
          {/* Top Section */}
          <div className="flex flex-col">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-[21px]">
                    Cheese – appareil à raclette 1/2 roue
                  </h3>
                  <h3 className="text-[21px]">
                    39,50€ <span className="text-[14px] text-[#6B7280]">/pièce</span>
                  </h3>
                </div>
                <img src="Icon (3).svg" alt="Icon" />
              </div>
              <hr />

              <div className="flex justify-between">
                <div className="flex gap-3">
                  <div className="flex gap-3">
                    <img src="Group (1).svg" alt="Icon 1" />
                    <p>20cm</p>
                  </div>
                  <div className="flex gap-3">
                    <img src="Frame.svg" alt="Icon 2" />
                    <p>50cm</p>
                  </div>
                </div>
                <p className="text-[14px] font-thin text-[#6B7280]">
                  RÉF : VABGN5
                </p>
              </div>
              <hr />

              <div>
                <p className="text-[12px] font-thin text-[#57595d]">
                  Location appareil à raclette - Raclette traditionnelle 1/2
                  roue Réglable en hauteur Appareil à raclette professionnel
                  Boîtier de chauffe horizontal réglable en hauteur
                  <br />
                  220V
                  <br />
                  900W
                </p>
              </div>
            </div>

            <div className="flex gap-1 pt-40">
              <div className="border-[1px] border-[#6B7280] flex gap-8 p-2 rounded">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <div className="flex-1 bg-[#5CD2DD] p-2 rounded">
                <span className="text-[#FFFFFF] flex items-center justify-center">
                  Ajouter au panier
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between bg-[#fbf9f8cc] p-4 rounded-xl">
              <p>Livraisons</p>
              <p>+</p>
            </div>
            <div className="flex justify-between bg-[#fbf9f8cc] p-4 rounded-xl">
              <p>Questions</p>
              <p>+</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
