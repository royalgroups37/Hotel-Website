'use client';

import { useState } from 'react';
import { Heart, SlidersHorizontal } from 'lucide-react';
import { Search } from 'lucide-react';

const sampleStays = [{
    name: 'Stay',
    price: '$300',
    image: '/image4.png',
}, {
    name: 'Stay',
    price: '$300',
    image: '/image5.png',
},
{
    name: 'Stay',
    price: '$300',
    image: '/image6.png',
},
{
    name: 'Stay',
    price: '$300',
    image: '/image7.png',
},
{
    name: 'Stay',
    price: '$300',
    image: '/image8.png',
},
{
    name: 'Stay',
    price: '$300',
    image: '/image9.png',
},
{
    name: 'Stay',
    price: '$300',
    image: '/image10.png',
},
{
    name: 'Stay',
    price: '$300',
    image: '/image11.png',
},
{
    name: 'Stay',
    price: '$300',
    image: '/image12.png',
},
{
    name: 'Stay',
    price: '$300',
    image: '/image4.png',
},
{
    name: 'Stay',
    price: '$300',
    image: '/image5.png',
},
{
    name: 'Stay',
    price: '$300',
    image: '/image6.png',
},
];

export default function StayListings() {
    const [filtersOpen, setFiltersOpen] = useState(true);

    return (
        <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-10 py-6 flex flex-col lg:flex-row gap-6">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-[280px] flex-shrink-0">
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[295px] gap-[30px] pb-5 rounded-[10px] bg-white">
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 px-5 pt-5 rounded-[10px]">
                        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0">
                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                <p className="flex-grow-0 flex-shrink-0 text-[15px] font-bold text-left text-[#2c2c2c]">
                                    Filters
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 px-5">
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[255px] text-[16.3125px] font-medium text-left text-[#2c2c2c]">
                                    Search within Hyderabad
                                </p>
                            </div>
                            <div className="relative w-full max-w-md">
                                <div className="flex items-center w-full border border-gray-400 rounded-full px-4 py-3">
                                    <input
                                        type="text"
                                        placeholder="Enter area, locality or hotel"
                                        className="w-full bg-transparent text-sm text-gray-500 placeholder-gray-400 focus:outline-none"
                                    />
                                    <Search className="text-gray-700 w-5 h-5 ml-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 pb-[5px]">
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative px-5 pb-[5px]">
                                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[255px] text-[16.59375px] font-medium text-left text-[#2c2c2c]">
                                    Most Popular
                                </p>
                            </div>
                            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 px-5 py-2.5">
                                <div className="flex flex-col justify-start items-start flex-grow pt-[0.5px] pb-[0.8899999856948853px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[0.004399999976158142px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[14.625px] text-left text-[#2c2c2c]">
                                            Free Cancellation
                                        </p>
                                        <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 pl-[83.7656021118164px]">
                                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.800000011920929px]">
                                                <p className="self-stretch flex-grow-0 flex-shrink-0 w-3.5 text-[11.8125px] text-left text-[#5e616e]">
                                                    25
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                    <div className="flex-grow-0 flex-shrink-0 w-5 h-5 rounded border border-[#848794]" />
                                </div>
                            </div>
                            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 px-5 py-2.5">
                                <div className="flex flex-col justify-start items-start flex-grow pt-[0.5px] pb-[0.8899999856948853px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[0.0012000000569969416px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[14.75px] text-left text-[#2c2c2c]">
                                            Free Breakfast
                                        </p>
                                        <div className="flex flex-col justify-start items-end flex-grow pl-[98.21880340576172px]">
                                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.800000011920929px]">
                                                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[21px] text-[11.0625px] text-left text-[#5e616e]">
                                                    429
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                    <div className="flex-grow-0 flex-shrink-0 w-5 h-5 rounded border border-[#848794]" />
                                </div>
                            </div>
                            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 px-5 py-2.5">
                                <div className="flex flex-col justify-start items-start flex-grow pt-[0.5px] pb-[0.8899999856948853px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[0.003100000089034438px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[14.625px] text-left text-[#2c2c2c]">
                                            Rated Exceptional(9+)
                                        </p>
                                        <div className="flex flex-col justify-start items-end flex-grow pl-[51.54690170288086px]">
                                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.800000011920929px]">
                                                <p className="flex-grow-0 flex-shrink-0 text-[11.8125px] text-left text-[#5e616e]">
                                                    25
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                    <div className="flex-grow-0 flex-shrink-0 w-5 h-5 rounded border border-[#848794]" />
                                </div>
                            </div>
                            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 px-5 py-2.5">
                                <div className="flex flex-col justify-start items-start flex-grow pt-[0.5px] pb-[0.8899999856948853px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[2.842170943040401e-14px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[14.25px] text-left text-[#2c2c2c]">
                                            Parking Available
                                        </p>
                                        <div className="flex flex-col justify-start items-end flex-grow pl-[80.5px]">
                                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.800000011920929px]">
                                                <p className="flex-grow-0 flex-shrink-0 text-[11.0625px] text-left text-[#5e616e]">
                                                    646
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                    <div className="flex-grow-0 flex-shrink-0 w-5 h-5 rounded border border-[#848794]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative pb-[30px]">
                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[120.19px] relative">
                            <div className="flex flex-col justify-start items-start w-[255px] absolute left-5 top-0">
                                <p className="flex-grow-0 flex-shrink-0 text-[16.734375px] font-medium text-left text-[#2c2c2c]">
                                    Price
                                </p>
                            </div>
                            <div className="w-[255px] h-[70px] absolute left-5 top-[35.18px]">
                                <div className="w-[255px] h-[70px] absolute left-0 top-0">
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[0.39px] absolute left-0 top-[69.61px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[0.39px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[0.39px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[1.61px] absolute left-[6.7px] top-[68.39px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[1.61px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[1.61px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[0.39px] absolute left-[13.41px] top-[69.61px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[0.39px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[0.39px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[2.81px] absolute left-[20.11px] top-[67.19px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[2.81px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[2.81px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[15.28px] absolute left-[26.81px] top-[54.72px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[15.28px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[15.28px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[24.13px] absolute left-[33.52px] top-[45.88px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[24.13px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[24.13px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[31.77px] absolute left-[40.22px] top-[38.24px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[31.77px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[31.77px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[32.98px] absolute left-[46.92px] top-[37.02px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[32.98px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[32.98px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[35.39px] absolute left-[53.63px] top-[34.61px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[35.39px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[35.39px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[70px] absolute left-[60.33px] top-0 pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[70px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[70px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[33.78px] absolute left-[67.03px] top-[36.22px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[33.78px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[33.78px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[33.38px] absolute left-[73.73px] top-[36.63px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[33.38px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[33.38px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[21.31px] absolute left-[80.44px] top-[48.69px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[21.31px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[21.31px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[14.88px] absolute left-[87.14px] top-[55.13px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[14.88px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[14.88px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[12.86px] absolute left-[93.84px] top-[57.14px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[12.86px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[12.86px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[13.27px] absolute left-[100.55px] top-[56.74px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[13.27px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[13.27px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[16.08px] absolute left-[107.25px] top-[53.93px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[16.08px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[16.08px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[4.42px] absolute left-[113.95px] top-[65.58px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[4.42px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[4.42px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[3.61px] absolute left-[120.66px] top-[66.39px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[3.61px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[3.61px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[2.41px] absolute left-[127.36px] top-[67.6px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[2.41px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[2.41px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[0.39px] absolute left-[134.06px] top-[69.61px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[0.39px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[0.39px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-0.5 absolute left-[140.77px] top-[68px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-0.5 relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-0.5 absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[1.61px] absolute left-[154.17px] top-[68.39px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[1.61px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[1.61px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[1.2px] absolute left-[160.88px] top-[68.8px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[1.2px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[1.2px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[0.39px] absolute left-[167.58px] top-[69.61px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[0.39px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[0.39px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[0.8px] absolute left-[187.69px] top-[69.21px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[0.8px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[0.8px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[0.8px] absolute left-[201.09px] top-[69.21px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[0.8px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[0.8px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[0.39px] absolute left-[207.8px] top-[69.61px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[0.39px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[0.39px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[0.39px] absolute left-[227.91px] top-[69.61px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[0.39px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[0.39px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-start w-[6.7px] h-[0.39px] absolute left-[248.02px] top-[69.61px] pr-px">
                                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[0.39px] relative bg-[#ff385c]">
                                            <div className="w-[5.7px] h-[0.39px] absolute left-[-1px] top-[-1px] bg-[#ff385c]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[255px] h-[0.01px] absolute left-5 top-[105.18px]">
                                <div className="w-[255px] h-0.5 absolute left-[-1px] top-[-1px] rounded-[1.05px] bg-[#848794]" />
                                <div className="w-[255px] h-0.5 absolute left-[-1px] top-[-1px] rounded-[1px] bg-[#ff385c]" />
                                <p className="w-[30.39px] h-[16.8px] absolute left-0 top-5 text-[11.625px] text-left text-[#2c2c2c]">
                                    ₹200
                                </p>
                                <div className="flex flex-col justify-start items-start w-[48.42px] absolute left-[206.58px] top-[19px] pb-[0.800000011920929px]">
                                    <p className="flex-grow-0 flex-shrink-0 text-[11.8125px] text-left text-[#2c2c2c]">
                                        ₹36,000
                                    </p>
                                </div>
                                <div className="flex flex-col justify-start items-center w-[255px] h-7 absolute left-0 top-[-14px]">
                                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative pt-1">
                                        <div
                                            className="flex-grow-0 flex-shrink-0 w-6 h-6 relative overflow-hidden rounded-xl bg-white"
                                            style={{ boxShadow: "0px 0px 1px 2px #ff385c" }}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-start items-center w-[255px] h-7 absolute left-0 top-[-14px]">
                                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative pl-[231px] pt-1">
                                        <div
                                            className="flex-grow-0 flex-shrink-0 w-6 h-6 relative overflow-hidden rounded-xl bg-white"
                                            style={{ boxShadow: "0px 0px 1px 2px #ff385c" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 pt-5">
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative px-5 pb-[5px]">
                            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[255px] text-[16.453125px] font-medium text-left text-[#2c2c2c]">
                                User Rating
                            </p>
                        </div>
                        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 px-5 py-2.5">
                            <div className="flex flex-col justify-start items-start flex-grow pt-[0.5px] pb-[0.8899999856948853px]">
                                <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[1.4210854715202004e-14px]">
                                    <p className="flex-grow-0 flex-shrink-0 text-[14.625px] text-left text-[#2c2c2c]">
                                        Exceptional: 9+
                                    </p>
                                    <div className="flex flex-col justify-start items-end flex-grow pl-[101.5px]">
                                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.800000011920929px]">
                                            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[13.5px] text-[11.8125px] text-left text-[#5e616e]">
                                                25
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                <div className="flex-grow-0 flex-shrink-0 w-5 h-5 rounded-full border border-[#848794]" />
                            </div>
                        </div>
                        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 px-5 py-2.5">
                            <div className="flex flex-col justify-start items-start flex-grow pt-[0.5px] pb-[0.8899999856948853px]">
                                <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative space-x-[-0.00800000037997961px]">
                                    <p className="flex-grow-0 flex-shrink-0 text-[14.625px] text-left text-[#2c2c2c]">
                                        Excellent: 8+
                                    </p>
                                    <div className="flex flex-col justify-start items-end flex-grow pl-[115.5780029296875px]">
                                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.800000011920929px]">
                                            <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#5e616e]">152</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                <div className="flex-grow-0 flex-shrink-0 w-5 h-5 rounded-full border border-[#848794]" />
                            </div>
                        </div>
                        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 px-5 py-2.5">
                            <div className="flex flex-col justify-start items-start flex-grow pt-[0.5px] pb-[0.8899999856948853px]">
                                <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative space-x-[-0.003800000064074993px]">
                                    <p className="flex-grow-0 flex-shrink-0 text-[15.375px] text-left text-[#2c2c2c]">
                                        Very Good: 7+
                                    </p>
                                    <div className="flex flex-col justify-start items-end flex-grow pl-[99.59380340576172px]">
                                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.800000011920929px]">
                                            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[22px] text-[11.4375px] text-left text-[#5e616e]">
                                                340
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                <div className="flex-grow-0 flex-shrink-0 w-5 h-5 rounded-full border border-[#848794]" />
                            </div>
                        </div>
                        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 px-5 py-2.5">
                            <div className="flex flex-col justify-start items-start flex-grow pt-[0.5px] pb-[0.8899999856948853px]">
                                <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative space-x-[-0.004000000189989805px]">
                                    <p className="flex-grow-0 flex-shrink-0 text-[15.5px] text-left text-[#2c2c2c]">
                                        Good: 6+
                                    </p>
                                    <div className="flex flex-col justify-start items-end flex-grow pl-[137.23399353027344px]">
                                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.800000011920929px]">
                                            <p className="flex-grow-0 flex-shrink-0 text-[11.625px] text-left text-[#5e616e]">
                                                529
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                <div className="flex-grow-0 flex-shrink-0 w-5 h-5 rounded-full border border-[#848794]" />
                            </div>
                        </div>
                        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 px-5 py-2.5">
                            <div className="flex flex-col justify-start items-start flex-grow pt-[0.5px] pb-[0.8899999856948853px]">
                                <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[0.0020000000949949026px]">
                                    <p className="flex-grow-0 flex-shrink-0 text-[14.75px] text-left text-[#2c2c2c]">
                                        Pleasant: 5+
                                    </p>
                                    <div className="flex flex-col justify-start items-end flex-grow pl-[115.68800354003906px]">
                                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.800000011920929px]">
                                            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[21.31px] text-[11.625px] text-left text-[#5e616e]">
                                                666
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                <div className="flex-grow-0 flex-shrink-0 w-5 h-5 rounded-full border border-[#848794]" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative pb-[5px]">
                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[250.14px] relative">
                            <div className="flex flex-col justify-start items-start w-[295px] absolute left-0 top-0 px-5 pb-[5px]">
                                <p className="flex-grow-0 flex-shrink-0 text-[16.734375px] font-medium text-left text-[#2c2c2c]">
                                    Facilities
                                </p>
                            </div>
                            <div className="flex justify-center items-center absolute left-5 top-[217.25px]">
                                <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-center text-[#ff385c]">
                                    View More
                                </p>
                            </div>
                            <div className="flex justify-start items-center w-[295px] absolute left-0 top-[30.19px] gap-2.5 px-5 py-2.5">
                                <div className="flex flex-col justify-start items-start flex-grow pt-[0.5px] pb-[0.8899999856948853px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[0.006200000178068876px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[14.875px] text-left text-[#2c2c2c]">
                                            Internet access
                                        </p>
                                        <div className="flex flex-col justify-start items-end flex-grow pl-[91.59380340576172px]">
                                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.800000011920929px]">
                                                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[20.4px] text-[11.25px] text-left text-[#757272]">
                                                    857
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                    <div className="flex-grow-0 flex-shrink-0 w-5 h-5 rounded border border-[#808080]" />
                                </div>
                            </div>
                            <div className="flex justify-start items-center w-[295px] absolute left-0 top-[74.58px] gap-2.5 px-5 py-2.5">
                                <div className="flex flex-col justify-start items-start flex-grow pt-[0.5px] pb-[0.8899999856948853px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[0.006000000052154064px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[14.625px] text-left text-[#2c2c2c]">
                                            Room Service
                                        </p>
                                        <div className="flex flex-col justify-start items-end flex-grow pl-[104.09400177001953px]">
                                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.800000011920929px]">
                                                <p className="flex-grow-0 flex-shrink-0 text-[10.875px] text-left text-[#757272]">
                                                    768
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                    <div className="flex-grow-0 flex-shrink-0 w-5 h-5 rounded border border-[#808080]" />
                                </div>
                            </div>
                            <div className="flex justify-start items-center w-[295px] absolute left-0 top-[118.97px] gap-2.5 px-5 py-2.5">
                                <div className="flex flex-col justify-start items-start flex-grow pt-[0.5px] pb-[0.8899999856948853px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative space-x-[-0.0019000000320374966px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[15.25px] text-left text-[#2c2c2c]">
                                            CCTV/Security
                                        </p>
                                        <div className="flex flex-col justify-start items-end flex-grow pl-[97.9218978881836px]">
                                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.800000011920929px]">
                                                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[20.08px] text-[11.625px] text-left text-[#757272]">
                                                    735
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                    <div className="flex-grow-0 flex-shrink-0 w-5 h-5 rounded border border-[#808080]" />
                                </div>
                            </div>
                            <div className="flex justify-start items-center w-[295px] absolute left-0 top-[163.36px] gap-2.5 px-5 py-2.5">
                                <div className="flex flex-col justify-start items-start flex-grow pt-[0.5px] pb-[0.8899999856948853px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative space-x-[-0.0012000000569969416px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[14.375px] text-left text-[#2c2c2c]">
                                            Non-smoking rooms
                                        </p>
                                        <div className="flex flex-col justify-start items-end flex-grow pl-[56.78120040893555px]">
                                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.800000011920929px]">
                                                <p className="flex-grow-0 flex-shrink-0 text-[11.0625px] text-left text-[#757272]">
                                                    729
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                    <div className="flex-grow-0 flex-shrink-0 w-5 h-5 rounded border border-[#808080]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[5.6843418860808015e-14px]">
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative px-5 pb-[15px]">
                            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[255px] text-[16.3125px] font-medium text-left text-[#2c2c2c]">
                                Star Rating
                            </p>
                        </div>
                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[135px] relative">
                            <div className="flex justify-start items-center h-[30px] absolute left-5 top-0 px-[5px] pt-[4.210000038146973px] pb-[5.199999809265137px] rounded-full bg-neutral-50 border border-[#d6d7db]">
                                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 px-[5px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[13.453125px] text-left text-[#2c2c2c]">
                                            5 Star (39)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start items-center h-[30px] absolute left-[116.19px] top-0 px-[5px] pt-[4.210000038146973px] pb-[5.199999809265137px] rounded-full bg-neutral-50 border border-[#d6d7db]">
                                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 px-[5px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[13.125px] text-left text-[#2c2c2c]">
                                            4 Star (69)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start items-center h-[30px] absolute left-5 top-[45px] px-[5px] pt-[4.210000038146973px] pb-[5.199999809265137px] rounded-full bg-neutral-50 border border-[#d6d7db]">
                                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 px-[5px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[13.5625px] text-left text-[#2c2c2c]">
                                            3 Star (557)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start items-center h-[30px] absolute left-[123.89px] top-[45px] px-[5px] pt-[4.210000038146973px] pb-[5.199999809265137px] rounded-full bg-neutral-50 border border-[#d6d7db]">
                                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 px-[5px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[13.34375px] text-left text-[#2c2c2c]">
                                            2 Star (193)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start items-center h-[30px] absolute left-5 top-[90px] px-[5px] pt-[4.210000038146973px] pb-[5.199999809265137px] rounded-full bg-neutral-50 border border-[#d6d7db]">
                                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 px-[5px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[13.34375px] text-left text-[#2c2c2c]">
                                            1 Star (43)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative space-y-[-1.7053025658242404e-13px]">
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative px-5 pb-[15px]">
                            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[255px] text-[16.59375px] font-medium text-left text-[#2c2c2c]">
                                Accommodation Type
                            </p>
                        </div>
                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[360px] relative">
                            <div className="flex justify-start items-center h-[30px] absolute left-5 top-0 px-[5px] pt-[4.199999809265137px] pb-[5.210000038146973px] rounded-full bg-neutral-50 border border-[#d6d7db]">
                                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 px-[5px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[12.90625px] text-left text-[#2c2c2c]">
                                            Bed and Breakfast (41)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start items-center h-[30px] absolute left-5 top-[45px] px-[5px] pt-[4.199999809265137px] pb-[5.210000038146973px] rounded-full bg-neutral-50 border border-[#d6d7db]">
                                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 px-[5px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[13.234375px] text-left text-[#2c2c2c]">
                                            Hotel (800)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start items-center h-[30px] absolute left-5 top-[90px] px-[5px] pt-[4.199999809265137px] pb-[5.210000038146973px] rounded-full bg-neutral-50 border border-[#d6d7db]">
                                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 px-[5px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[13.015625px] text-left text-[#2c2c2c]">
                                            Serviced apartment (10)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start items-center h-[30px] absolute left-5 top-[135px] px-[5px] pt-[4.199999809265137px] pb-[5.210000038146973px] rounded-full bg-neutral-50 border border-[#d6d7db]">
                                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 px-[5px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[13.234375px] text-left text-[#2c2c2c]">
                                            Motel (1)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start items-center h-[30px] absolute left-[104.75px] top-[135px] px-[5px] pt-[4.199999809265137px] pb-[5.210000038146973px] rounded-full bg-neutral-50 border border-[#d6d7db]">
                                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 px-[5px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[13.125px] text-left text-[#2c2c2c]">
                                            Capsule hotel (2)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start items-center h-[30px] absolute left-5 top-[180px] px-[5px] pt-[4.199999809265137px] pb-[5.210000038146973px] rounded-full bg-neutral-50 border border-[#d6d7db]">
                                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 px-[5px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[13.015625px] text-left text-[#2c2c2c]">
                                            Homestay (7)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start items-center h-[30px] absolute left-5 top-[225px] px-[5px] pt-[4.199999809265137px] pb-[5.210000038146973px] rounded-full bg-neutral-50 border border-[#d6d7db]">
                                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 px-[5px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[12.578125px] text-left text-[#2c2c2c]">
                                            Entire Apartment (1)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start items-center h-[30px] absolute left-[177.67px] top-[225px] px-[5px] pt-[4.199999809265137px] pb-[5.210000038146973px] rounded-full bg-neutral-50 border border-[#d6d7db]">
                                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 px-[5px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[13.125px] text-left text-[#2c2c2c]">
                                            Lodge (14)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start items-center h-[30px] absolute left-5 top-[270px] px-[5px] pt-[4.199999809265137px] pb-[5.210000038146973px] rounded-full bg-neutral-50 border border-[#d6d7db]">
                                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 px-[5px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[13.125px] text-left text-[#2c2c2c]">
                                            Hostel (28)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start items-center h-[30px] absolute left-[119.89px] top-[270px] px-[5px] pt-[4.199999809265137px] pb-[5.210000038146973px] rounded-full bg-neutral-50 border border-[#d6d7db]">
                                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 px-[5px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[13.125px] text-left text-[#2c2c2c]">
                                            Love hotel (1)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start items-center h-[30px] absolute left-5 top-[315px] px-[5px] pt-[4.199999809265137px] pb-[5.210000038146973px] rounded-full bg-neutral-50 border border-[#d6d7db]">
                                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 px-[5px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[13.015625px] text-left text-[#2c2c2c]">
                                            Ryokan (1)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start items-center h-[30px] absolute left-[115.41px] top-[315px] px-[5px] pt-[4.199999809265137px] pb-[5.210000038146973px] rounded-full bg-neutral-50 border border-[#d6d7db]">
                                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 px-[5px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[13.125px] text-left text-[#2c2c2c]">
                                            Resort (4)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative pb-[5px]">
                        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[250.14px] relative">
                            <div className="flex flex-col justify-start items-start w-[295px] absolute left-0 top-0 px-5 pb-[5px]">
                                <p className="flex-grow-0 flex-shrink-0 text-[16.734375px] font-medium text-left text-[#2c2c2c]">
                                    Popular Areas
                                </p>
                            </div>
                            <div className="flex justify-center items-center absolute left-5 top-[217.25px]">
                                <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-center text-[#ff385c]">
                                    View More
                                </p>
                            </div>
                            <div className="flex justify-start items-center w-[295px] absolute left-0 top-[30.19px] gap-2.5 px-5 py-2.5">
                                <div className="flex flex-col justify-start items-start flex-grow pt-[0.5px] pb-[0.8899999856948853px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative space-x-[-0.0010000000474974513px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[14.375px] text-left text-[#2c2c2c]">
                                            Gachibowli
                                        </p>
                                        <div className="flex flex-col justify-start items-end flex-grow pl-[112.39099884033203px]">
                                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.800000011920929px]">
                                                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[21px] text-[11.4375px] text-left text-[#757272]">
                                                    266
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                    <div className="flex-grow-0 flex-shrink-0 w-5 h-5 rounded border border-[#808080]" />
                                </div>
                            </div>
                            <div className="flex justify-start items-center w-[295px] absolute left-0 top-[74.58px] gap-2.5 px-5 py-2.5">
                                <div className="flex flex-col justify-start items-start flex-grow pt-[0.5px] pb-[0.8899999856948853px]">
                                    <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                                        <p className="flex-grow-0 flex-shrink-0 text-[14.375px] text-left text-[#2c2c2c]">
                                            Madhapur
                                        </p>
                                        <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0">
                                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.800000011920929px]">
                                                <p className="flex-grow-0 flex-shrink-0 text-[11.25px] text-left text-[#757272]">
                                                    92
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                    <div className="flex-grow-0 flex-shrink-0 w-5 h-5 rounded border border-[#808080]" />
                                </div>
                            </div>
                            <div className="flex justify-start items-center w-[295px] absolute left-0 top-[118.97px] gap-2.5 px-5 py-2.5">
                                <div className="flex flex-col justify-start items-start flex-grow pt-[0.5px] pb-[0.8899999856948853px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative space-x-[-1.4210854715202004e-14px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[14.375px] text-left text-[#2c2c2c]">
                                            Banjara Hills
                                        </p>
                                        <div className="flex flex-col justify-start items-end flex-grow pl-[132.5px]">
                                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.800000011920929px]">
                                                <p className="flex-grow-0 flex-shrink-0 text-[11.25px] text-left text-[#757272]">
                                                    64
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                    <div className="flex-grow-0 flex-shrink-0 w-5 h-5 rounded border border-[#808080]" />
                                </div>
                            </div>
                            <div className="flex justify-start items-center w-[295px] absolute left-0 top-[163.36px] gap-2.5 px-5 py-2.5">
                                <div className="flex flex-col justify-start items-start flex-grow pt-[0.5px] pb-[0.8899999856948853px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[0.006000000052154064px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[14.375px] text-left text-[#2c2c2c]">
                                            Jubilee Hills
                                        </p>
                                        <div className="flex flex-col justify-start items-end flex-grow pl-[109.84400177001953px]">
                                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.800000011920929px]">
                                                <p className="flex-grow-0 flex-shrink-0 text-[11.8125px] text-left text-[#757272]">
                                                    22
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                    <div className="flex-grow-0 flex-shrink-0 w-5 h-5 rounded border border-[#808080]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 pb-[5px]">
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative px-5 pb-[5px]">
                                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[255px] text-[16.453125px] font-medium text-left text-[#2c2c2c]">
                                    Payment Mode
                                </p>
                            </div>
                            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 px-5 py-2.5">
                                <div className="flex flex-col justify-start items-start flex-grow pt-[0.5px] pb-[0.8899999856948853px]">
                                    <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                                        <p className="flex-grow-0 flex-shrink-0 text-[14.375px] text-left text-[#2c2c2c]">
                                            Prepaid
                                        </p>
                                        <div className="flex flex-col justify-start items-end flex-grow pl-[149.5px]">
                                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.800000011920929px]">
                                                <p className="flex-grow-0 flex-shrink-0 text-[10.875px] text-left text-[#5e616e]">
                                                    724
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                    <div className="flex-grow-0 flex-shrink-0 w-5 h-5 rounded border border-[#848794]" />
                                </div>
                            </div>
                            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 px-5 py-2.5">
                                <div className="flex flex-col justify-start items-start flex-grow pt-[0.5px] pb-[0.8899999856948853px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[0.0006000000284984708px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[14.375px] text-left text-[#adafb8]">
                                            Book with ₹0 payment
                                        </p>
                                        <div className="flex flex-col justify-start items-end flex-grow pl-[50.60940170288086px]">
                                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.800000011920929px]">
                                                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[8.39px] text-xs text-left text-[#5e616e]">
                                                    0
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                    <div className="flex-grow-0 flex-shrink-0 w-5 h-5 rounded border border-[#d6d7db]" />
                                </div>
                            </div>
                            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 px-5 py-2.5">
                                <div className="flex flex-col justify-start items-start flex-grow pt-[0.5px] pb-[0.8899999856948853px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative space-x-[-0.00800000037997961px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[14.25px] text-left text-[#2c2c2c]">
                                            Pay At Hotel
                                        </p>
                                        <div className="flex flex-col justify-start items-end flex-grow pl-[118.5780029296875px]">
                                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.800000011920929px]">
                                                <p className="flex-grow-0 flex-shrink-0 text-[11.4375px] text-left text-[#5e616e]">
                                                    451
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                    <div className="flex-grow-0 flex-shrink-0 w-5 h-5 rounded border border-[#848794]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 pb-[5px]">
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative px-5 pb-[5px]">
                                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[255px] text-[17.015625px] font-medium text-left text-[#2c2c2c]">
                                    Meals
                                </p>
                            </div>
                            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 px-5 py-2.5">
                                <div className="flex flex-col justify-start items-start flex-grow pt-[0.5px] pb-[0.8899999856948853px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[0.0006000000284984708px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[14.125px] text-left text-[#2c2c2c]">
                                            Dinner Included
                                        </p>
                                        <div className="flex flex-col justify-start items-end flex-grow pl-[94.8593978881836px]">
                                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.800000011920929px]">
                                                <p className="flex-grow-0 flex-shrink-0 text-[11.25px] text-left text-[#5e616e]">
                                                    44
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                    <div className="flex-grow-0 flex-shrink-0 w-5 h-5 rounded border border-[#848794]" />
                                </div>
                            </div>
                            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 px-5 py-2.5">
                                <div className="flex flex-col justify-start items-start flex-grow pt-[0.5px] pb-[0.8899999856948853px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative space-x-[-0.0006000000284984708px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[14.5px] text-left text-[#2c2c2c]">
                                            Breakfast Included
                                        </p>
                                        <div className="flex flex-col justify-start items-end flex-grow pl-[67.3906021118164px]">
                                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.800000011920929px]">
                                                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[20.61px] text-[11.0625px] text-left text-[#5e616e]">
                                                    429
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                    <div className="flex-grow-0 flex-shrink-0 w-5 h-5 rounded border border-[#848794]" />
                                </div>
                            </div>
                            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 px-5 py-2.5">
                                <div className="flex flex-col justify-start items-start flex-grow pt-[0.5px] pb-[0.8899999856948853px]">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative space-x-[-0.0020000000949949026px]">
                                        <p className="flex-grow-0 flex-shrink-0 text-[14.125px] text-left text-[#2c2c2c]">
                                            Lunch Included
                                        </p>
                                        <div className="flex flex-col justify-start items-end flex-grow pl-[100.56199645996094px]">
                                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.800000011920929px]">
                                                <p className="flex-grow-0 flex-shrink-0 text-[11.4375px] text-left text-[#5e616e]">
                                                    26
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                    <div className="flex-grow-0 flex-shrink-0 w-5 h-5 rounded border border-[#848794]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Listings */}
            <main className="flex-1">
              
                <div className="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 gap-12">
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2">
                        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 p-2 rounded-lg bg-[#ff385c]">
                            <svg
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M13.3332 4L5.99984 11.3333L2.6665 8"
                                    stroke="#F5F5F5"
                                    stroke-width="1.6"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <p className="flex-grow-0 flex-shrink-0 text-base text-left text-neutral-100">New</p>
                        </div>
                        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 p-2 rounded-lg">
                            <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#757575]">Low to High</p>
                        </div>
                        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 p-2 rounded-lg">
                            <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#757575]">High to Low</p>
                        </div>
                        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 p-2 rounded-lg">
                            <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#757575]">Rating</p>
                        </div>
                    </div>
                </div>;
                <div className="grid grid-cols-3 gap-6">
                    {sampleStays.map((stay, index) => (
                        <div key={index} className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                            <img
                                src={stay.image}
                                alt={stay.name} className="w-full h-[300px] object-cover"
                            />
                            <div className="p-4">
                                <p className="text-base text-gray-900">{stay.name}</p>
                                <p className="text-base font-semibold text-gray-900">{stay.price}</p>
                                <p className="text-sm text-gray-500">Body text.</p>
                            </div>
                        </div>

                    ))}



                </div>

            </main>
        </div>
    );
}
