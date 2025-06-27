// components/ConfirmAndPay.jsx
'use client';

import Image from 'next/image';

export default function ConfirmAndPay() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start max-w-[1240px] mx-auto px-4 py-8 gap-8">
      {/* Left Panel */}
      <div className="w-full lg:w-[771px] flex flex-col gap-6 p-6 md:p-8 rounded-2xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#2c2c2c]">Confirm and payment</h1>
        <div className="h-px bg-gray-200 w-full" />

        {/* Your Trip */}
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-semibold text-[#2c2c2c]">Your trip</p>
          <div className="flex flex-col md:flex-row w-full rounded-3xl border border-gray-200 overflow-hidden">
            <div className="flex flex-1 items-center gap-3 p-5">
              <div className="flex flex-col gap-1">
                <p className="text-sm text-[#808080]">Date</p>
                <p className="text-lg font-semibold text-[#2c2c2c]">Jun 12 - 16, 2025</p>
              </div>
            </div>
            <div className="flex flex-1 items-center gap-3 p-5 border-t md:border-t-0 md:border-l border-gray-200">
              <div className="flex flex-col gap-1">
                <p className="text-sm text-[#808080]">Guests</p>
                <p className="text-lg font-semibold text-[#2c2c2c]">2 Guests</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="flex flex-col gap-6">
          <p className="text-2xl font-semibold text-[#2c2c2c]">Pay with</p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-full bg-[#2c2c2c] text-white font-medium">Debit card</button>
            <button className="text-[#808080] font-medium">UPI ID</button>
            <div className="flex items-center gap-2 px-4 py-2">
              <span className="text-[#808080] font-medium">Credit card</span>
              <Image src="/Frame-73.png" width={40} height={20} alt="Visa" />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-[#757272]">Card number</label>
              <input
                type="text"
                placeholder="111 112 222 999"
                className="w-full border border-[#757272] rounded-2xl px-4 py-2 text-[#757272]"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#757272]">Card holder</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-[#757272] rounded-2xl px-4 py-2 text-[#757272]"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="text-sm font-medium text-[#757272]">Expiration date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full border border-[#757272] rounded-2xl px-4 py-2 text-[#757272]"
                />
              </div>
              <div className="flex-1">
                <label className="text-sm font-medium text-[#757272]">CVC</label>
                <input
                  type="text"
                  className="w-full border border-[#757272] rounded-2xl px-4 py-2 text-[#757272]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Message Box */}
        <div className="w-full">
          <label className="text-sm font-medium text-[#757272]">Message for author</label>
          <textarea
            rows={4}
            placeholder="Write a few sentences about yourself."
            className="w-full border border-[#757272] rounded-2xl p-4 text-[#757272] mt-1"
          />
        </div>

        <button className="mt-4 bg-[#ff385c] text-white px-6 py-3 rounded-full font-medium w-fit">
          Confirm and pay
        </button>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-[429px] border border-gray-200 p-5 rounded-3xl flex flex-col gap-6">
        <div className="flex gap-4">
          <div className="w-[166px] h-[164px] relative">
            <Image
              src="/Reactange-38.png"
              alt="Hotel"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>
          <div className="flex flex-col justify-between gap-2">
            <p className="text-xs text-[#757272]">Hotel room in Hyderabad, Telangana</p>
            <p className="text-lg font-semibold text-[#2c2c2c]">Taj Krishna</p>
            <p className="text-xs text-[#757272]">1 bedroom · 1 bath</p>
            <div className="flex items-center gap-1">
              <span className="text-[#2c2c2c] text-sm">4.9</span>
              <span className="text-[#757272] text-sm">(122)</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-2xl font-semibold text-[#2c2c2c]">Price detail</p>
          <div className="flex justify-between text-base text-[#757272] font-medium">
            <span>₹10,000 x 1 night</span>
            <span>₹10,000</span>
          </div>
          <div className="flex justify-between text-base text-[#757272] font-medium">
            <span>Service charge</span>
            <span>₹0</span>
          </div>
          <div className="h-px bg-gray-200" />
          <div className="flex justify-between text-base font-semibold text-[#2c2c2c]">
            <span>Total</span>
            <span>₹10,000</span>
          </div>
        </div>
      </div>
    </div>
  );
}