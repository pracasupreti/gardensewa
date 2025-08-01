import React from "react";

const page = () => {
  return (
    <div>
      <section className="contact bg-[#f7f7f7]">
        <h1 className="text-[45px] font-bold text-[#008000] text-center py-10">
          Contact
        </h1>
        <div className="container mx-auto max-w-[1200px]">
          <div className="text text-center px-4 lg:px-0 pb-5">
            <p className="lg:mx-20 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, beatae. Veniam est vitae laudantium. Modi, nostrum
              rem aspernatur magni eum esse neque sed quod libero?
            </p>
          </div>

          <div className="contact-details  grid sm:grid-cols-2 px-4 lg:px-0 gap-y-6 justify-center gap-12 py-10 items-center">
            <div className="google-map lg:w-[550px] w-full h-[450px] overflow-hidden">
              <iframe
                className="w-full h-[480px] rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2100.6240267300113!2d85.32876948534584!3d27.69212986357574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bc93869ba7%3A0x87784ab7b2bddb4f!2sBijulibazar!5e0!3m2!1sen!2snp!4v1750998522510!5m2!1sen!2snp"
                frameBorder="0"
              ></iframe>
            </div>
            <div className="text max-w-[550px]">
              <div className="address">
                <h5 className="text-[20px] font-semibold">Our Address</h5>
                <div className="text flex py-2 gap-2 items-center text-gray-600 text-[15px]">
                  <img
                    className="h-[20px]"
                    src="/image/icons/location.png"
                    alt=""
                  />
                  <p>Maitidevi, Kathmandu-29, Kathmandu</p>
                </div>
              </div>
              <hr />
              <div className="hours py-4 ">
                <h5 className="text-[20px] font-semibold">Hours</h5>
                <div className="text py-2 gap-2 items-center text-gray-600 text-[15px]">
                  <p>Sunday - Friday : 9:30AM - 6:00PM</p>
                  <p>Saturday: Close</p>
                </div>
              </div>
              <hr />
              <div className="address py-4">
                <h5 className="text-[20px] font-semibold pb-2">Contact</h5>
                <div className="text flex py-2 gap-2 items-center text-gray-600 text-[15px]">
                  <img
                    className="h-[20px]"
                    src="/image/icons/email.png"
                    alt=""
                  />
                  <p className="cursor-pointer hover:text-green-700">
                    info@gardensewa.com
                  </p>
                </div>
                <div className="text flex py-2 gap-2 items-center text-gray-600 text-[15px]">
                  <img
                    className="h-[20px]"
                    src="/image/icons/phone.png"
                    alt=""
                  />
                  <p>+977-9852025735</p>
                </div>
                <div className="text flex py-2 gap-2 items-center text-gray-600 text-[15px]">
                  <img
                    className="h-[20px]"
                    src="/image/icons/landline.png"
                    alt=""
                  />
                  <p>Landline: +977-21-465533</p>
                </div>
              </div>
            </div>
          </div>
          <div className="profile grid sm:grid-cols-2 md:grid-cols-3 px-4 lg:px-0 gap-y-6 justify-center gap-12 py-10 items-center max-w-[1200px] mx-auto">
            <div className="contact-profile text-center text-gray-600 w-full max-w-[220px] mx-auto">
              <img
                className="w-[220px] mx-auto"
                src="/image/navbar/contact/1.png"
                alt=""
              />
              <div className="info text-center">
                <h2 className="text-[18px] font-semibold py-2">Rajesh Mehta</h2>
                <h5 className="font-medium text-[15px]">CEO</h5>
                <div className="flex gap-1 py-2 justify-center items-center">
                  <img
                    className="w-[15px]"
                    src="/image/icons/phone.png"
                    alt=""
                  />
                  <p className="cursor-pointer hover:text-green-700">
                    +977 9746608593
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-profile text-center text-gray-600 w-full max-w-[220px] mx-auto">
              <img
                className="w-[220px] mx-auto"
                src="/image/navbar/contact/3.webp"
                alt=""
              />
              <div className="info text-center">
                <h2 className="text-[18px] font-semibold py-2">
                  Subham Bhandari
                </h2>
                <h5 className="font-medium text-[15px]">Sales</h5>
                <div className="flex gap-1 py-2 justify-center items-center">
                  <img
                    className="w-[15px]"
                    src="/image/icons/phone.png"
                    alt=""
                  />
                  <p className="cursor-pointer hover:text-green-700">
                    +977 9863547283
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-profile text-center text-gray-600 w-full max-w-[220px] mx-auto">
              <img
                className="w-[220px] mx-auto"
                src="/image/navbar/contact/2.png"
                alt=""
              />
              <div className="info text-center">
                <h2 className="text-[18px] font-semibold py-2">Babita Singh</h2>
                <h5 className="font-medium text-[15px]">Founder</h5>
                <div className="flex gap-1 py-2 justify-center items-center">
                  <img
                    className="w-[15px]"
                    src="/image/icons/phone.png"
                    alt=""
                  />
                  <p className="cursor-pointer hover:text-green-700">
                    +977 9819952725
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
