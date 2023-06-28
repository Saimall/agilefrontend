import React from 'react'

const Card = () => {
  return (
    <div>
       <div className="relative  ml-11 h-[370px]">
            <img
              className="absoute top-0 left-0"
              src={sliderBluevector}
              alt=""
            />
            {/* upper img and text div */}
            <div className="career-outter-card-eff absolute z-10 top-0 left-3">
              <img
                className="career-inner-card-img"
                src={sliderTopImg}
                alt=""
              />
              {/* text div */}
              <div className="ml-2 z-20 flex flex-col items-start justify-center gap-2 p-3 bg-[#98989849]  ">
                <p className=" text-[18px] font-bold">
                  Architectural technologist
                </p>
                <p className="text-[14px] text-start leading-[14px] w-[260px] mb-3">
                  Bring your talents to the forefront of business and technology
                  and go as far as your ambition takes you.
                </p>

                <p className="flex items-center justify-center text-[#17519B] text-[16px] font-semibold gap-2">
                  LEARN MORE <HiArrowRight></HiArrowRight>
                </p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Card
