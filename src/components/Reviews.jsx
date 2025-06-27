'use client';
// Uncomment below line if you want to use optimized image from Next.js
// import Image from 'next/image';

const reviews = [
  {
    img: '/Avatar1.png',
    rating: '5.0 Amazing',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    img: '/Avatar2.png',
    rating: '5.0 Amazing',
    comment:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    img: '/Avatar3.png',
    rating: '5.0 Amazing',
    comment:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    img: '/Avatar4.png',
    rating: '5.0 Amazing',
    comment:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    img: '/Avatar5.png',
    rating: '5.0 Amazing',
    comment:
      'Nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis.',
  },
];

export default function Reviews() {
  return (
    <div className="w-full px-4 py-10 flex flex-col items-start gap-8 max-w-screen-xl mx-auto">
      {/* Header */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-3xl font-semibold text-[#2c2c2c]">Reviews</h2>
        <button className="bg-[#ff385c] text-white font-semibold text-sm px-4 py-2 rounded hover:bg-[#e0324e] transition">
          Give your review
        </button>
      </div>

      {/* Overall Rating */}
      <div className="flex items-center gap-4">
        <p className="text-[40px] sm:text-[50px] font-bold text-[#2c2c2c]">4.2</p>
        <div>
          <p className="text-xl font-semibold text-[#2c2c2c]">Very good</p>
          <p className="text-sm text-[#757272]">371 verified reviews</p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#2c2c2c] opacity-25" />

      {/* Reviews List */}
      <div className="flex flex-col gap-6 w-full">
        {reviews.map((review, index) => (
          <div key={index}>
            <div className="flex items-start gap-4">
              {/* Use Next.js Image for optimization */}
              {/* <Image src={review.img} alt={`Reviewer ${index + 1}`} width={50} height={50} className="rounded-full" /> */}
              <img src={review.img} alt={`Reviewer ${index + 1}`} className="w-12 h-12 rounded-full" />

              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <p className="text-sm font-semibold text-[#2c2c2c]">{review.rating}</p>
                  <span className="text-sm text-[#2c2c2c]">|</span>
                </div>
                <p className="text-sm text-[#757272]">{review.comment}</p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#2c2c2c] opacity-25 mt-4" />
          </div>
        ))}
      </div>
    </div>
  );
}
