import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen tracking-wide bg-[#fdfbf7]" id="homeScreen">
      <Header />
      <div
        className="flex flex-col justify-center items-start w-[1440px] h-[537px] gap-2.5 px-[100px] py-20"
        style={{
          background: "linear-gradient(to right, rgba(0,35,77,0.63) 11.46%, rgba(0,35,77,0) 77.37%)",
        }}
      >
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
          <p className="flex-grow-0 flex-shrink-0 w-[440px] text-[45px] font-bold text-left text-white">
            Make your travel whishlist, we’ll do the rest
          </p>
          <p className="flex-grow-0 flex-shrink-0 w-[375px] text-xl font-medium text-left text-white">
            Special offers to suit your plan
          </p>
        </div>
      </div>;
      {/* Your content here */}
      {/* <div className="flex flex-col justify-between items-start w-[1240px] h-[440px]">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1240px] text-[25.375px] font-medium text-left text-[#191e3b]">
            Discover your new favourite stay
          </p>
        </div>
        <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[1261px]">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[1240px] gap-[15px]">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[1240px] relative overflow-hidden gap-10">
              <div className="flex-grow-0 flex-shrink-0 w-[232px] h-[345px] relative overflow-hidden rounded-xl">
                <div className="flex flex-col-reverse justify-start items-start w-[232px] h-[345px] absolute left-0 top-0 overflow-hidden space-y-[-10px] space-y-reverse rounded-[20px] bg-white">
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[4.989999771118164px] px-[21px] pt-[25px] pb-4 rounded-bl-[20px] rounded-br-[20px] border-t-0 border-r border-b border-l border-[#848794]">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[13.125px] text-left text-[#2c2c2c]">
                        <span className="flex-grow-0 flex-shrink-0 text-[13.125px] font-bold text-left text-[#2c2c2c]">
                          1527
                        </span>
                        <span className="flex-grow-0 flex-shrink-0 text-[13.125px] text-left text-[#2c2c2c]">
                          {" "}
                          Properties
                        </span>
                      </p>
                    </div>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                      preserveAspectRatio="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.762 12C18.762 12.0953 18.7432 12.1897 18.7067 12.2777C18.6702 12.3657 18.6167 12.4457 18.5493 12.5131L12.5012 18.5556C12.4342 18.6246 12.3541 18.6796 12.2656 18.7174C12.1772 18.7552 12.0821 18.775 11.9859 18.7757C11.8897 18.7764 11.7943 18.758 11.7053 18.7215C11.6163 18.6849 11.5355 18.6311 11.4675 18.563C11.3995 18.495 11.3457 18.4141 11.3093 18.3251C11.2729 18.236 11.2545 18.1407 11.2553 18.0445C11.2561 17.9483 11.276 17.8532 11.3138 17.7648C11.3517 17.6763 11.4068 17.5963 11.4759 17.5294L16.2844 12.7253H5.95357C5.76121 12.7253 5.57673 12.6489 5.44071 12.5128C5.30469 12.3768 5.22827 12.1923 5.22827 12C5.22827 11.8076 5.30469 11.6231 5.44071 11.4871C5.57673 11.3511 5.76121 11.2747 5.95357 11.2747H16.2844L11.4759 6.47068C11.3398 6.33471 11.2633 6.15026 11.2632 5.95788C11.2631 5.86263 11.2818 5.7683 11.3182 5.68028C11.3547 5.59225 11.408 5.51227 11.4754 5.44488C11.5427 5.37749 11.6226 5.32402 11.7106 5.28753C11.7986 5.25103 11.8929 5.23222 11.9882 5.23218C12.1805 5.23208 12.3651 5.30841 12.5012 5.44438L18.5493 11.4869C18.6167 11.5542 18.6702 11.6342 18.7067 11.7223C18.7432 11.8103 18.762 11.9047 18.762 12Z"
                        fill="#2C2C2C"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-[20px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 w-[232px] h-[290px] relative overflow-hidden rounded-[20px] bg-[url('hyderabad.png')]" />
                    <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 h-[290px] w-[232px] absolute left-0 top-0 px-5 pt-[230px] pb-[15px] rounded-[20px] bg-gradient-to-t from-black/40 to-black/0">
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[24.4921875px] text-center text-white">
                          Hyderabad
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[9.6875px] text-center uppercase text-white">
                          Telangana
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-[232px] h-[345px] relative overflow-hidden rounded-xl">
                <div className="flex flex-col-reverse justify-start items-start w-[232px] h-[345px] absolute left-0 top-0 overflow-hidden space-y-[-10px] space-y-reverse rounded-[20px] bg-white">
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[5px] px-[21px] pt-[25px] pb-4 rounded-bl-[20px] rounded-br-[20px] border-t-0 border-r border-b border-l border-[#848794]">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[12.90625px] text-left text-[#2c2c2c]">
                        <span className="flex-grow-0 flex-shrink-0 text-[12.90625px] font-bold text-left text-[#2c2c2c]">
                          4688
                        </span>
                        <span className="flex-grow-0 flex-shrink-0 text-[12.90625px] text-left text-[#2c2c2c]">
                          {" "}
                          Properties
                        </span>
                      </p>
                    </div>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                      preserveAspectRatio="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.7669 12C18.7669 12.0953 18.7481 12.1897 18.7116 12.2777C18.6751 12.3657 18.6216 12.4457 18.5542 12.5131L12.5061 18.5556C12.4391 18.6246 12.359 18.6796 12.2705 18.7174C12.1821 18.7552 12.087 18.775 11.9908 18.7757C11.8946 18.7764 11.7992 18.758 11.7102 18.7215C11.6212 18.6849 11.5404 18.6311 11.4724 18.563C11.4044 18.495 11.3506 18.4141 11.3142 18.3251C11.2777 18.236 11.2594 18.1407 11.2602 18.0445C11.2609 17.9483 11.2808 17.8532 11.3187 17.7648C11.3566 17.6763 11.4117 17.5963 11.4808 17.5294L16.2893 12.7253H5.95845C5.76609 12.7253 5.58161 12.6489 5.44559 12.5128C5.30957 12.3768 5.23315 12.1923 5.23315 12C5.23315 11.8076 5.30957 11.6231 5.44559 11.4871C5.58161 11.3511 5.76609 11.2747 5.95845 11.2747H16.2893L11.4808 6.47068C11.3447 6.33471 11.2681 6.15026 11.2681 5.95788C11.268 5.86263 11.2867 5.7683 11.3231 5.68028C11.3595 5.59225 11.4129 5.51227 11.4803 5.44488C11.5476 5.37749 11.6275 5.32402 11.7155 5.28753C11.8035 5.25103 11.8978 5.23222 11.9931 5.23218C12.1854 5.23208 12.37 5.30841 12.5061 5.44438L18.5542 11.4869C18.6216 11.5542 18.6751 11.6342 18.7116 11.7223C18.7481 11.8103 18.7669 11.9047 18.7669 12Z"
                        fill="#2C2C2C"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-[20px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 w-[232px] h-[290px] relative overflow-hidden rounded-[20px] bg-[url('new-delhi.png')]" />
                    <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 h-[290px] w-[232px] absolute left-0 top-0 px-5 pt-[230px] pb-[15px] rounded-[20px] bg-gradient-to-t from-black/40 to-black/0">
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[24.84375px] text-center text-white">
                          New Delhi
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[10px] text-center uppercase text-white">
                          Delhi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-[232px] h-[345px] relative overflow-hidden rounded-xl">
                <div className="flex flex-col-reverse justify-start items-start w-[232px] h-[345px] absolute left-0 top-0 overflow-hidden space-y-[-10px] space-y-reverse rounded-[20px] bg-white">
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[4.989999771118164px] px-[21px] pt-[25px] pb-4 rounded-bl-[20px] rounded-br-[20px] border-t-0 border-r border-b border-l border-[#848794]">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[13.015625px] text-left text-[#2c2c2c]">
                        <span className="flex-grow-0 flex-shrink-0 text-[13.015625px] font-bold text-left text-[#2c2c2c]">
                          1766
                        </span>
                        <span className="flex-grow-0 flex-shrink-0 text-[13.015625px] text-left text-[#2c2c2c]">
                          {" "}
                          Properties
                        </span>
                      </p>
                    </div>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                      preserveAspectRatio="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.762 12C18.762 12.0953 18.7432 12.1897 18.7067 12.2777C18.6702 12.3657 18.6167 12.4457 18.5493 12.5131L12.5012 18.5556C12.4342 18.6246 12.3541 18.6796 12.2656 18.7174C12.1772 18.7552 12.0821 18.775 11.9859 18.7757C11.8897 18.7764 11.7943 18.758 11.7053 18.7215C11.6163 18.6849 11.5355 18.6311 11.4675 18.563C11.3995 18.495 11.3457 18.4141 11.3093 18.3251C11.2729 18.236 11.2545 18.1407 11.2553 18.0445C11.2561 17.9483 11.276 17.8532 11.3138 17.7648C11.3517 17.6763 11.4068 17.5963 11.4759 17.5294L16.2844 12.7253H5.95357C5.76121 12.7253 5.57673 12.6489 5.44071 12.5128C5.30469 12.3768 5.22827 12.1923 5.22827 12C5.22827 11.8076 5.30469 11.6231 5.44071 11.4871C5.57673 11.3511 5.76121 11.2747 5.95357 11.2747H16.2844L11.4759 6.47068C11.3398 6.33471 11.2633 6.15026 11.2632 5.95788C11.2631 5.86263 11.2818 5.7683 11.3182 5.68028C11.3547 5.59225 11.408 5.51227 11.4754 5.44488C11.5427 5.37749 11.6226 5.32402 11.7106 5.28753C11.7986 5.25103 11.8929 5.23222 11.9882 5.23218C12.1805 5.23208 12.3651 5.30841 12.5012 5.44438L18.5493 11.4869C18.6167 11.5542 18.6702 11.6342 18.7067 11.7223C18.7432 11.8103 18.762 11.9047 18.762 12Z"
                        fill="#2C2C2C"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-[20px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 w-[232px] h-[290px] relative overflow-hidden rounded-[20px] bg-[url('mumbai.png')]" />
                    <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 h-[290px] w-[232px] absolute left-0 top-0 px-5 pt-[230px] pb-[15px] rounded-[20px] bg-gradient-to-t from-black/40 to-black/0">
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[23.3203125px] text-center text-white">
                          Mumbai
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[9.53125px] text-center uppercase text-white">
                          Maharashtra
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-[232px] h-[345px] relative overflow-hidden rounded-xl">
                <div className="flex flex-col-reverse justify-start items-start w-[232px] h-[345px] absolute left-0 top-0 overflow-hidden space-y-[-10px] space-y-reverse rounded-[20px] bg-white">
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[5px] px-[21px] pt-[25px] pb-4 rounded-bl-[20px] rounded-br-[20px] border-t-0 border-r border-b border-l border-[#848794]">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[12.90625px] text-left text-[#2c2c2c]">
                        <span className="flex-grow-0 flex-shrink-0 text-[12.90625px] font-bold text-left text-[#2c2c2c]">
                          4728
                        </span>
                        <span className="flex-grow-0 flex-shrink-0 text-[12.90625px] text-left text-[#2c2c2c]">
                          {" "}
                          Properties
                        </span>
                      </p>
                    </div>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                      preserveAspectRatio="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.7671 12C18.7671 12.0953 18.7483 12.1897 18.7118 12.2777C18.6753 12.3657 18.6218 12.4457 18.5544 12.5131L12.5063 18.5556C12.4393 18.6246 12.3592 18.6796 12.2708 18.7174C12.1823 18.7552 12.0872 18.775 11.991 18.7757C11.8948 18.7764 11.7995 18.758 11.7105 18.7215C11.6215 18.6849 11.5406 18.6311 11.4726 18.563C11.4046 18.495 11.3509 18.4141 11.3144 18.3251C11.278 18.236 11.2596 18.1407 11.2604 18.0445C11.2612 17.9483 11.2811 17.8532 11.319 17.7648C11.3568 17.6763 11.4119 17.5963 11.481 17.5294L16.2895 12.7253H5.9587C5.76634 12.7253 5.58185 12.6489 5.44583 12.5128C5.30981 12.3768 5.2334 12.1923 5.2334 12C5.2334 11.8076 5.30981 11.6231 5.44583 11.4871C5.58185 11.3511 5.76634 11.2747 5.9587 11.2747H16.2895L11.481 6.47068C11.3449 6.33471 11.2684 6.15026 11.2683 5.95788C11.2683 5.86263 11.287 5.7683 11.3234 5.68028C11.3598 5.59225 11.4132 5.51227 11.4805 5.44488C11.5478 5.37749 11.6278 5.32402 11.7157 5.28753C11.8037 5.25103 11.898 5.23222 11.9933 5.23218C12.1857 5.23208 12.3702 5.30841 12.5063 5.44438L18.5544 11.4869C18.6218 11.5542 18.6753 11.6342 18.7118 11.7223C18.7483 11.8103 18.7671 11.9047 18.7671 12Z"
                        fill="#2C2C2C"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-[20px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 w-[232px] h-[290px] relative overflow-hidden rounded-[20px] bg-[url('goa.png')]" />
                    <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 h-[290px] w-[232px] absolute left-0 top-0 px-5 pt-[230px] pb-[15px] rounded-[20px] bg-gradient-to-t from-black/40 to-black/0">
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[25.546875px] text-center text-white">
                          Goa
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[10px] text-center uppercase text-white">
                          Goa
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-[232px] h-[345px] relative overflow-hidden rounded-xl">
                <div className="flex flex-col-reverse justify-start items-start w-[232px] h-[345px] absolute left-0 top-0 overflow-hidden space-y-[-10px] space-y-reverse rounded-[20px] bg-white">
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[5px] px-[21px] pt-[25px] pb-4 rounded-bl-[20px] rounded-br-[20px] border-t-0 border-r border-b border-l border-[#848794]">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[13.125px] text-left text-[#2c2c2c]">
                        <span className="flex-grow-0 flex-shrink-0 text-[13.125px] font-bold text-left text-[#2c2c2c]">
                          1401
                        </span>
                        <span className="flex-grow-0 flex-shrink-0 text-[13.125px] text-left text-[#2c2c2c]">
                          {" "}
                          Properties
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" />
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-[20px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 w-[232px] h-[290px] relative overflow-hidden rounded-[20px] bg-[url('chennai.png')]" />
                    <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 h-[290px] w-[232px] absolute left-0 top-0 px-5 pt-[230px] pb-[15px] rounded-[20px] bg-gradient-to-t from-black/40 to-black/0">
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[23.7890625px] text-center text-white">
                          Chennai
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[9.53125px] text-center uppercase text-white">
                          Tamil Nadu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-[232px] h-[345px] relative overflow-hidden rounded-xl">
                <div className="flex flex-col-reverse justify-start items-start w-[232px] h-[345px] absolute left-0 top-0 overflow-hidden space-y-[-10px] space-y-reverse rounded-[20px] bg-white">
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[5px] px-[21px] pt-[25px] pb-4 rounded-bl-[20px] rounded-br-[20px] border-t-0 border-r border-b border-l border-[#848794]">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[12.90625px] text-left text-[#2c2c2c]">
                        <span className="flex-grow-0 flex-shrink-0 text-[12.90625px] font-bold text-left text-[#2c2c2c]">
                          968
                        </span>
                        <span className="flex-grow-0 flex-shrink-0 text-[12.90625px] text-left text-[#2c2c2c]">
                          {" "}
                          Properties
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" />
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-[20px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 w-[232px] h-[290px] relative overflow-hidden rounded-[20px] bg-[url('kolkata.png')]" />
                    <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 w-[232px] absolute left-0 top-0 px-5 pt-[230px] pb-[15px] rounded-[20px] bg-gradient-to-t from-black/40 to-black/0">
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[24.140625px] text-center text-white">
                          Kolkata
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[9.375px] text-center uppercase text-white">
                          West Bengal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-[232px] h-[345px] relative overflow-hidden rounded-xl">
                <div className="flex flex-col-reverse justify-start items-start w-[232px] h-[345px] absolute left-0 top-0 overflow-hidden space-y-[-10px] space-y-reverse rounded-[20px] bg-white">
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[5px] px-[21px] pt-[25px] pb-4 rounded-bl-[20px] rounded-br-[20px] border-t-0 border-r border-b border-l border-[#848794]">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[13.125px] text-left text-[#2c2c2c]">
                        <span className="flex-grow-0 flex-shrink-0 text-[13.125px] font-bold text-left text-[#2c2c2c]">
                          3106
                        </span>
                        <span className="flex-grow-0 flex-shrink-0 text-[13.125px] text-left text-[#2c2c2c]">
                          {" "}
                          Properties
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" />
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-[20px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 w-[232px] h-[290px] relative overflow-hidden rounded-[20px] bg-[url('bengaluru.png')]" />
                    <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 w-[232px] absolute left-0 top-0 px-5 pt-[230px] pb-[15px] rounded-[20px] bg-gradient-to-t from-black/40 to-black/0">
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[23.0859375px] text-center text-white">
                          Bengaluru
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[9.6875px] text-center uppercase text-white">
                          Karnataka
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-[232px] h-[345px] relative overflow-hidden rounded-xl">
                <div className="flex flex-col-reverse justify-start items-start w-[232px] h-[345px] absolute left-0 top-0 overflow-hidden space-y-[-10px] space-y-reverse rounded-[20px] bg-white">
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[5px] px-[21px] pt-[25px] pb-4 rounded-bl-[20px] rounded-br-[20px] border-t-0 border-r border-b border-l border-[#848794]">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[13.234375px] text-left text-[#2c2c2c]">
                        <span className="flex-grow-0 flex-shrink-0 text-[13.234375px] font-bold text-left text-[#2c2c2c]">
                          1190
                        </span>
                        <span className="flex-grow-0 flex-shrink-0 text-[13.234375px] text-left text-[#2c2c2c]">
                          {" "}
                          Properties
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" />
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-[20px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 w-[232px] h-[290px] relative overflow-hidden rounded-[20px] bg-[url('varanasi.png')]" />
                    <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 w-[232px] absolute left-0 top-0 px-5 pt-[230px] pb-[15px] rounded-[20px] bg-gradient-to-t from-black/40 to-black/0">
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[24.4921875px] text-center text-white">
                          Varanasi
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[9.0625px] text-center uppercase text-white">
                          Uttar Pradesh
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-[232px] h-[345px] relative overflow-hidden rounded-xl">
                <div className="flex flex-col-reverse justify-start items-start w-[232px] h-[345px] absolute left-0 top-0 overflow-hidden space-y-[-10px] space-y-reverse rounded-[20px] bg-white">
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[5px] px-[21px] pt-[25px] pb-4 rounded-bl-[20px] rounded-br-[20px] border-t-0 border-r border-b border-l border-[#848794]">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[13.234375px] text-left text-[#2c2c2c]">
                        <span className="flex-grow-0 flex-shrink-0 text-[13.234375px] font-bold text-left text-[#2c2c2c]">
                          1901
                        </span>
                        <span className="flex-grow-0 flex-shrink-0 text-[13.234375px] text-left text-[#2c2c2c]">
                          {" "}
                          Properties
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" />
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-[20px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 w-[232px] h-[290px] relative overflow-hidden rounded-[20px] bg-[url('jaipur.png')]" />
                    <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 w-[232px] absolute left-0 top-0 px-5 pt-[230px] pb-[15px] rounded-[20px] bg-gradient-to-t from-black/40 to-black/0">
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[23.7890625px] text-center text-white">
                          Jaipur
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[9.84375px] text-center uppercase text-white">
                          Rajasthan
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-[232px] h-[345px] relative overflow-hidden rounded-xl">
                <div className="flex flex-col-reverse justify-start items-start w-[232px] h-[345px] absolute left-0 top-0 overflow-hidden space-y-[-10px] space-y-reverse rounded-[20px] bg-white">
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[5px] px-[21px] pt-[25px] pb-4 rounded-bl-[20px] rounded-br-[20px] border-t-0 border-r border-b border-l border-[#848794]">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[13.234375px] text-left text-[#2c2c2c]">
                        <span className="flex-grow-0 flex-shrink-0 text-[13.234375px] font-bold text-left text-[#2c2c2c]">
                          1021
                        </span>
                        <span className="flex-grow-0 flex-shrink-0 text-[13.234375px] text-left text-[#2c2c2c]">
                          {" "}
                          Properties
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" />
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-[20px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 w-[232px] h-[290px] relative overflow-hidden rounded-[20px] bg-[url('pune.png')]" />
                    <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 w-[232px] absolute left-0 top-0 px-5 pt-[230px] pb-[15px] rounded-[20px] bg-gradient-to-t from-black/40 to-black/0">
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[23.203125px] text-center text-white">
                          Pune
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[9.53125px] text-center uppercase text-white">
                          Maharashtra
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-[232px] h-[345px] relative overflow-hidden rounded-xl">
                <div className="flex flex-col-reverse justify-start items-start w-[232px] h-[345px] absolute left-0 top-0 overflow-hidden space-y-[-10px] space-y-reverse rounded-[20px] bg-white">
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[5px] px-[21px] pt-[25px] pb-4 rounded-bl-[20px] rounded-br-[20px] border-t-0 border-r border-b border-l border-[#848794]">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[13.015625px] text-left text-[#2c2c2c]">
                        <span className="flex-grow-0 flex-shrink-0 text-[13.015625px] font-bold text-left text-[#2c2c2c]">
                          291
                        </span>
                        <span className="flex-grow-0 flex-shrink-0 text-[13.015625px] text-left text-[#2c2c2c]">
                          {" "}
                          Properties
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" />
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-[20px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 w-[232px] h-[290px] relative overflow-hidden rounded-[20px] bg-[url('ayodhya.png')]" />
                    <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 w-[232px] absolute left-0 top-0 px-5 pt-[230px] pb-[15px] rounded-[20px] bg-gradient-to-t from-black/40 to-black/0">
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[24.2578125px] text-center text-white">
                          Ayodhya
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[9.0625px] text-center uppercase text-white">
                          Uttar Pradesh
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-[232px] h-[345px] relative overflow-hidden rounded-xl">
                <div className="flex flex-col-reverse justify-start items-start w-[232px] h-[345px] absolute left-0 top-0 overflow-hidden space-y-[-10px] space-y-reverse rounded-[20px] bg-white">
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[5px] px-[21px] pt-[25px] pb-4 rounded-bl-[20px] rounded-br-[20px] border-t-0 border-r border-b border-l border-[#848794]">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[13.125px] text-left text-[#2c2c2c]">
                        <span className="flex-grow-0 flex-shrink-0 text-[13.125px] font-bold text-left text-[#2c2c2c]">
                          559
                        </span>
                        <span className="flex-grow-0 flex-shrink-0 text-[13.125px] text-left text-[#2c2c2c]">
                          {" "}
                          Properties
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" />
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-[20px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 w-[232px] h-[290px] relative overflow-hidden rounded-[20px] bg-[url('puri.png')]" />
                    <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 w-[232px] absolute left-0 top-0 px-5 pt-[230px] pb-[15px] rounded-[20px] bg-gradient-to-t from-black/40 to-black/0">
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[22.8515625px] text-center text-white">
                          Puri
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[10px] text-center uppercase text-white">
                          Odisha
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-[232px] h-[345px] relative overflow-hidden rounded-xl">
                <div className="flex flex-col-reverse justify-start items-start w-[232px] h-[345px] absolute left-0 top-0 overflow-hidden space-y-[-10px] space-y-reverse rounded-[20px] bg-white">
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[5px] px-[21px] pt-[25px] pb-4 rounded-bl-[20px] rounded-br-[20px] border-t-0 border-r border-b border-l border-[#848794]">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[13.125px] text-left text-[#2c2c2c]">
                        <span className="flex-grow-0 flex-shrink-0 text-[13.125px] font-bold text-left text-[#2c2c2c]">
                          1127
                        </span>
                        <span className="flex-grow-0 flex-shrink-0 text-[13.125px] text-left text-[#2c2c2c]">
                          {" "}
                          Properties
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" />
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-[20px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 w-[232px] h-[290px] relative overflow-hidden rounded-[20px] bg-[url('lucknow.png')]" />
                    <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 w-[232px] absolute left-0 top-0 px-5 pt-[230px] pb-[15px] rounded-[20px] bg-gradient-to-t from-black/40 to-black/0">
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[24.84375px] text-center text-white">
                          Lucknow
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[9.0625px] text-center uppercase text-white">
                          Uttar Pradesh
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-[232px] h-[345px] relative overflow-hidden rounded-xl">
                <div className="flex flex-col-reverse justify-start items-start w-[232px] h-[345px] absolute left-0 top-0 overflow-hidden space-y-[-10px] space-y-reverse rounded-[20px] bg-white">
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[4.989999771118164px] px-[21px] pt-[25px] pb-4 rounded-bl-[20px] rounded-br-[20px] border-t-0 border-r border-b border-l border-[#848794]">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[12.90625px] text-left text-[#2c2c2c]">
                        <span className="flex-grow-0 flex-shrink-0 text-[12.90625px] font-bold text-left text-[#2c2c2c]">
                          771
                        </span>
                        <span className="flex-grow-0 flex-shrink-0 text-[12.90625px] text-left text-[#2c2c2c]">
                          {" "}
                          Properties
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" />
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-[20px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 w-[232px] h-[290px] relative overflow-hidden rounded-[20px] bg-[url('amritsar.png')]" />
                    <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 w-[232px] absolute left-0 top-0 px-5 pt-[230px] pb-[15px] rounded-[20px] bg-gradient-to-t from-black/40 to-black/0">
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[23.671875px] text-center text-white">
                          Amritsar
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[10px] text-center uppercase text-white">
                          Punjab
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-[232px] h-[345px] relative overflow-hidden rounded-xl">
                <div className="flex flex-col-reverse justify-start items-start w-[232px] h-[345px] absolute left-0 top-0 overflow-hidden space-y-[-10px] space-y-reverse rounded-[20px] bg-white">
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[4.989999771118164px] px-[21px] pt-[25px] pb-4 rounded-bl-[20px] rounded-br-[20px] border-t-0 border-r border-b border-l border-[#848794]">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[12.90625px] text-left text-[#2c2c2c]">
                        <span className="flex-grow-0 flex-shrink-0 text-[12.90625px] font-bold text-left text-[#2c2c2c]">
                          761
                        </span>
                        <span className="flex-grow-0 flex-shrink-0 text-[12.90625px] text-left text-[#2c2c2c]">
                          {" "}
                          Properties
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" />
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-[20px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 w-[232px] h-[290px] relative overflow-hidden rounded-[20px]" />
                    <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 w-[232px] absolute left-0 top-0 px-5 pt-[230px] pb-[15px] rounded-[20px] bg-gradient-to-t from-black/40 to-black/0">
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[24.0234375px] text-center text-white">
                          Guwahati
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[10px] text-center uppercase text-white">
                          Assam
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-[232px] h-[345px] relative overflow-hidden rounded-xl">
                <div className="flex flex-col-reverse justify-start items-start w-[232px] h-[345px] absolute left-0 top-0 overflow-hidden space-y-[-10px] space-y-reverse rounded-[20px] bg-white">
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[5px] px-[21px] pt-[25px] pb-4 rounded-bl-[20px] rounded-br-[20px] border-t-0 border-r border-b border-l border-[#848794]">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[12.90625px] text-left text-[#2c2c2c]">
                        <span className="flex-grow-0 flex-shrink-0 text-[12.90625px] font-bold text-left text-[#2c2c2c]">
                          779
                        </span>
                        <span className="flex-grow-0 flex-shrink-0 text-[12.90625px] text-left text-[#2c2c2c]">
                          {" "}
                          Properties
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" />
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-[20px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 w-[232px] h-[290px] relative overflow-hidden rounded-[20px]" />
                    <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 w-[232px] absolute left-0 top-0 px-5 pt-[230px] pb-[15px] rounded-[20px] bg-gradient-to-t from-black/40 to-black/0">
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[24.375px] text-center text-white">
                          Agra
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[9.0625px] text-center uppercase text-white">
                          Uttar Pradesh
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-[232px] h-[345px] relative overflow-hidden rounded-xl">
                <div className="flex flex-col-reverse justify-start items-start w-[232px] h-[345px] absolute left-0 top-0 overflow-hidden space-y-[-10px] space-y-reverse rounded-[20px] bg-white">
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[5px] px-[21px] pt-[25px] pb-4 rounded-bl-[20px] rounded-br-[20px] border-t-0 border-r border-b border-l border-[#848794]">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[12.90625px] text-left text-[#2c2c2c]">
                        <span className="flex-grow-0 flex-shrink-0 text-[12.90625px] font-bold text-left text-[#2c2c2c]">
                          284
                        </span>
                        <span className="flex-grow-0 flex-shrink-0 text-[12.90625px] text-left text-[#2c2c2c]">
                          {" "}
                          Properties
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" />
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-[20px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 w-[232px] h-[290px] relative overflow-hidden rounded-[20px]" />
                    <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 w-[232px] absolute left-0 top-0 px-5 pt-[230px] pb-[15px] rounded-[20px] bg-gradient-to-t from-black/40 to-black/0">
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[23.3203125px] text-center text-white">
                          Shirdi
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[9.53125px] text-center uppercase text-white">
                          Maharashtra
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-[232px] h-[345px] relative overflow-hidden rounded-xl">
                <div className="flex flex-col-reverse justify-start items-start w-[232px] h-[345px] absolute left-0 top-0 overflow-hidden space-y-[-10px] space-y-reverse rounded-[20px] bg-white">
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[5px] px-[21px] pt-[25px] pb-4 rounded-bl-[20px] rounded-br-[20px] border-t-0 border-r border-b border-l border-[#848794]">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[12.796875px] text-left text-[#2c2c2c]">
                        <span className="flex-grow-0 flex-shrink-0 text-[12.796875px] font-bold text-left text-[#2c2c2c]">
                          897
                        </span>
                        <span className="flex-grow-0 flex-shrink-0 text-[12.796875px] text-left text-[#2c2c2c]">
                          {" "}
                          Properties
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" />
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-[20px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 w-[232px] h-[290px] relative overflow-hidden rounded-[20px] " />
                    <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 w-[232px] absolute left-0 top-0 px-5 pt-[230px] pb-[15px] rounded-[20px] bg-gradient-to-t from-black/40 to-black/0">
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[23.90625px] text-center text-white">
                          Ahmedabad
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[10px] text-center uppercase text-white">
                          Gujarat
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-[232px] h-[345px] relative overflow-hidden rounded-xl">
                <div className="flex flex-col-reverse justify-start items-start w-[232px] h-[345px] absolute left-0 top-0 overflow-hidden space-y-[-10px] space-y-reverse rounded-[20px] bg-white">
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[4.989999771118164px] px-[21px] pt-[25px] pb-4 rounded-bl-[20px] rounded-br-[20px] border-t-0 border-r border-b border-l border-[#848794]">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[13.234375px] text-left text-[#2c2c2c]">
                        <span className="flex-grow-0 flex-shrink-0 text-[13.234375px] font-bold text-left text-[#2c2c2c]">
                          300
                        </span>
                        <span className="flex-grow-0 flex-shrink-0 text-[13.234375px] text-left text-[#2c2c2c]">
                          {" "}
                          Properties
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" />
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-[20px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 w-[232px] h-[290px] relative overflow-hidden rounded-[20px] " />
                    <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 w-[232px] absolute left-0 top-0 px-5 pt-[230px] pb-[15px] rounded-[20px] bg-gradient-to-t from-black/40 to-black/0">
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[23.90625px] text-center text-white">
                          Tirupati
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[9.0625px] text-center uppercase text-white">
                          Andhra Pradesh
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-[232px] h-[345px] relative overflow-hidden rounded-xl">
                <div className="flex flex-col-reverse justify-start items-start w-[232px] h-[345px] absolute left-0 top-0 overflow-hidden space-y-[-10px] space-y-reverse rounded-[20px] bg-white">
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[4.989999771118164px] px-[21px] pt-[25px] pb-4 rounded-bl-[20px] rounded-br-[20px] border-t-0 border-r border-b border-l border-[#848794]">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[13.34375px] text-left text-[#2c2c2c]">
                        <span className="flex-grow-0 flex-shrink-0 text-[13.34375px] font-bold text-left text-[#2c2c2c]">
                          1015
                        </span>
                        <span className="flex-grow-0 flex-shrink-0 text-[13.34375px] text-left text-[#2c2c2c]">
                          {" "}
                          Properties
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" />
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-[20px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 w-[232px] h-[290px] relative overflow-hidden rounded-[20px]" />
                    <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 w-[232px] absolute left-0 top-0 px-5 pt-[230px] pb-[15px] rounded-[20px] bg-gradient-to-t from-black/40 to-black/0">
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[23.90625px] text-center text-white">
                          Manali
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[9.21875px] text-center uppercase text-white">
                          Himachal Pradesh
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-[232px] h-[345px] relative overflow-hidden rounded-xl">
                <div className="flex flex-col-reverse justify-start items-start w-[232px] h-[345px] absolute left-0 top-0 overflow-hidden space-y-[-10px] space-y-reverse rounded-[20px] bg-white">
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[5px] px-[21px] pt-[25px] pb-4 rounded-bl-[20px] rounded-br-[20px] border-t-0 border-r border-b border-l border-[#848794]">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[12.90625px] text-left text-[#2c2c2c]">
                        <span className="flex-grow-0 flex-shrink-0 text-[12.90625px] font-bold text-left text-[#2c2c2c]">
                          471
                        </span>
                        <span className="flex-grow-0 flex-shrink-0 text-[12.90625px] text-left text-[#2c2c2c]">
                          {" "}
                          Properties
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" />
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-[20px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 w-[232px] h-[290px] relative overflow-hidden rounded-[20px] " />
                    <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 w-[232px] absolute left-0 top-0 px-5 pt-[230px] pb-[15px] rounded-[20px] bg-gradient-to-t from-black/40 to-black/0">
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[23.3203125px] text-center text-white">
                          Shimla
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[9.21875px] text-center uppercase text-white">
                          Himachal Pradesh
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-[232px] h-[345px] relative overflow-hidden rounded-xl">
                <div className="flex flex-col-reverse justify-start items-start w-[232px] h-[345px] absolute left-0 top-0 overflow-hidden space-y-[-10px] space-y-reverse rounded-[20px] bg-white">
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[5px] px-[21px] pt-[25px] pb-4 rounded-bl-[20px] rounded-br-[20px] border-t-0 border-r border-b border-l border-[#848794]">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[12.90625px] text-left text-[#2c2c2c]">
                        <span className="flex-grow-0 flex-shrink-0 text-[12.90625px] font-bold text-left text-[#2c2c2c]">
                          379
                        </span>
                        <span className="flex-grow-0 flex-shrink-0 text-[12.90625px] text-left text-[#2c2c2c]">
                          {" "}
                          Properties
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" />
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-[20px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 w-[232px] h-[290px] relative overflow-hidden rounded-[20px]" />
                    <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 w-[232px] absolute left-0 top-0 px-5 pt-[230px] pb-[15px] rounded-[20px] bg-gradient-to-t from-black/40 to-black/0">
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden pr-[13.640000343322754px]">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[178.36px] text-[23.4375px] text-center text-white">
                          Visakhapatn…
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[9.0625px] text-center uppercase text-white">
                          Andhra Pradesh
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-[232px] h-[345px] relative overflow-hidden rounded-xl">
                <div className="flex flex-col-reverse justify-start items-start w-[232px] h-[345px] absolute left-0 top-0 overflow-hidden space-y-[-10px] space-y-reverse rounded-[20px] bg-white">
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[5px] px-[21px] pt-[25px] pb-4 rounded-bl-[20px] rounded-br-[20px] border-t-0 border-r border-b border-l border-[#848794]">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[13.125px] text-left text-[#2c2c2c]">
                        <span className="flex-grow-0 flex-shrink-0 text-[13.125px] font-bold text-left text-[#2c2c2c]">
                          211
                        </span>
                        <span className="flex-grow-0 flex-shrink-0 text-[13.125px] text-left text-[#2c2c2c]">
                          {" "}
                          Properties
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" />
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-[20px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 w-[232px] h-[290px] relative overflow-hidden rounded-[20px]" />
                    <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 w-[232px] absolute left-0 top-0 px-5 pt-[230px] pb-[15px] rounded-[20px] bg-gradient-to-t from-black/40 to-black/0">
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[24.7265625px] text-center text-white">
                          Katra
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden pr-[0.9200000166893005px]">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[191.08px] text-[8.90625px] text-center uppercase text-white">
                          Jammu and Kashm…
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-[232px] h-[345px] relative overflow-hidden rounded-xl">
                <div className="flex flex-col-reverse justify-start items-start w-[232px] h-[345px] absolute left-0 top-0 overflow-hidden space-y-[-10px] space-y-reverse rounded-[20px] bg-white">
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[5px] px-[21px] pt-[25px] pb-4 rounded-bl-[20px] rounded-br-[20px] border-t-0 border-r border-b border-l border-[#848794]">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[12.90625px] text-left text-[#2c2c2c]">
                        <span className="flex-grow-0 flex-shrink-0 text-[12.90625px] font-bold text-left text-[#2c2c2c]">
                          458
                        </span>
                        <span className="flex-grow-0 flex-shrink-0 text-[12.90625px] text-left text-[#2c2c2c]">
                          {" "}
                          Properties
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" />
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-[20px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 w-[232px] h-[290px] relative overflow-hidden rounded-[20px]" />
                    <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 w-[232px] absolute left-0 top-0 px-5 pt-[230px] pb-[15px] rounded-[20px] bg-gradient-to-t from-black/40 to-black/0">
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[23.203125px] text-center text-white">
                          Patna
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[10px] text-center uppercase text-white">
                          Bihar
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-[232px] h-[345px] relative overflow-hidden rounded-xl">
                <div className="flex flex-col-reverse justify-start items-start w-[232px] h-[345px] absolute left-0 top-0 overflow-hidden space-y-[-10px] space-y-reverse rounded-[20px] bg-white">
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[4.989999771118164px] px-[21px] pt-[25px] pb-4 rounded-bl-[20px] rounded-br-[20px] border-t-0 border-r border-b border-l border-[#848794]">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.5899999737739563px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[12.90625px] text-left text-[#2c2c2c]">
                        <span className="flex-grow-0 flex-shrink-0 text-[12.90625px] font-bold text-left text-[#2c2c2c]">
                          466
                        </span>
                        <span className="flex-grow-0 flex-shrink-0 text-[12.90625px] text-left text-[#2c2c2c]">
                          {" "}
                          Properties
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" />
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-[20px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 w-[232px] h-[290px] relative overflow-hidden rounded-[20px] " />
                    <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 w-[232px] absolute left-0 top-0 px-5 pt-[230px] pb-[15px] rounded-[20px] bg-gradient-to-t from-black/40 to-black/0">
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[25.4296875px] text-center text-white">
                          Ooty
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-48 text-[9.53125px] text-center uppercase text-white">
                          Tamil Nadu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-start self-stretch flex-grow-0 flex-shrink-0 pt-4">
              <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 w-10 h-[5px] relative rounded-xl bg-zinc-200">
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-2.5 rounded-full bg-[#0770e4]" />
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-[1.25px] rounded-full" />
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-[1.25px] rounded-full" />
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-[1.25px] rounded-full" />
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-[1.25px] rounded-full" />
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-[1.25px] rounded-full" />
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-[1.25px] rounded-full" />
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-[1.25px] rounded-full" />
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-[1.25px] rounded-full" />
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-[1.25px] rounded-full" />
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-[1.25px] rounded-full" />
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-[1.25px] rounded-full" />
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-[1.25px] rounded-full" />
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-[1.25px] rounded-full" />
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-[1.25px] rounded-full" />
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-[1.25px] rounded-full" />
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-[1.25px] rounded-full" />
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-[1.25px] rounded-full" />
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-[1.25px] rounded-full" />
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-[1.25px] rounded-full" />
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-[1.25px] rounded-full" />
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-[1.25px] rounded-full" />
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-[1.25px] rounded-full" />
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-[1.25px] rounded-full" />
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-[1.25px] rounded-full" />
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0">
            <div
              className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-10 h-10 relative overflow-hidden rounded-full bg-white"
              style={{ boxShadow: "0px 4px 30px -5px rgba(29,38,60,0.25)" }}
            >
              <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.71243 6.72929C9.00293 6.43099 9.48243 6.42269 9.78323 6.71059L15.2686 11.96C15.3417 12.0297 15.3998 12.1135 15.4396 12.2063C15.4793 12.2991 15.4999 12.399 15.4999 12.5C15.4999 12.601 15.4793 12.7009 15.4396 12.7937C15.3998 12.8865 15.3417 12.9703 15.2686 13.04L9.78323 18.2894C9.48233 18.5773 9.00293 18.569 8.71243 18.2707C8.64343 18.2001 8.58913 18.1165 8.55268 18.0247C8.51623 17.9329 8.49837 17.8348 8.50012 17.7361C8.50187 17.6374 8.52319 17.54 8.56287 17.4496C8.60254 17.3592 8.65977 17.2775 8.73123 17.2094L13.6523 12.5L8.73123 7.79059C8.65977 7.72246 8.60254 7.64082 8.56287 7.5504C8.52319 7.45998 8.50187 7.36259 8.50012 7.26387C8.49837 7.16515 8.51623 7.06706 8.55268 6.97529C8.58913 6.88353 8.64343 6.79991 8.71243 6.72929Z"
                  fill="#0770E4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}
