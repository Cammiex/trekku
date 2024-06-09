function ContactSection() {
  return (
    <section
      id="contact-us"
      className="flex flex-col items-center mt-[100px] gap-10 sm:hidden"
    >
      <h1 className="text-[32px] font-bold">Hubungi kami</h1>
      <div
        id="contact-wrapper"
        className="text-blackui flex gap-[60px] sm:flex-col"
      >
        <div id="contact-information" className="w-[532px] flex flex-col gap-8">
          <div>
            <h1 className="text-2xl font-bold">Informasi kontak</h1>
            <h2 className="text-base font-medium">
              Hubungi kami untuk informasi lebih lanjut:
            </h2>
          </div>
          <div id="contact-list" className="flex flex-col gap-6">
            <div id="contact-item" className="flex items-center gap-5">
              <img
                src="images/AboutPage/about-contact1.png"
                alt=""
                className="w-9 h-9"
              />
              <div>
                <h1 className="text-base font-medium">Telepon</h1>
                <h1 className="text-base font-semibold">+62 813-2190-3281</h1>
              </div>
            </div>
            <div id="contact-item" className="flex items-center gap-5">
              <img
                src="images/AboutPage/about-contact2.png"
                alt=""
                className="w-9 h-9"
              />
              <div>
                <h1 className="text-base font-medium">E-mail</h1>
                <h1 className="text-base font-semibold">trekku@gmail.com</h1>
              </div>
            </div>
            <div id="contact-item" className="flex items-center gap-5">
              <img
                src="images/AboutPage/about-contact3.png"
                alt=""
                className="w-9 h-9"
              />
              <div>
                <h1 className="text-base font-medium">Lokasi</h1>
                <h1 className="text-base font-semibold">
                  Dolan Street. The Ngasal Avenue. Jakarta, Indonesia
                </h1>
              </div>
            </div>
          </div>
          <div id="about-socmed" className="flex flex-col gap-3">
            <h1 className="text-base font-medium">Ikuti kami:</h1>
            <div id="socmed-list" className="flex items-center gap-5">
              <div
                id="socmed-item"
                className="w-[52px] h-[52px] rounded-full shadow-cardShadow flex justify-center items-center"
              >
                <img src="images/AboutPage/fb.png" alt="" className="w-7 h-7" />
              </div>
              <div
                id="socmed-item"
                className="w-[52px] h-[52px] rounded-full shadow-cardShadow flex justify-center items-center"
              >
                <img src="images/AboutPage/ig.png" alt="" className="w-7 h-7" />
              </div>
              <div
                id="socmed-item"
                className="w-[52px] h-[52px] rounded-full shadow-cardShadow flex justify-center items-center"
              >
                <img
                  src="images/AboutPage/about-twitter.png"
                  alt=""
                  className="w-7 h-7"
                />
              </div>
              <div
                id="socmed-item"
                className="w-[52px] h-[52px] rounded-full shadow-cardShadow flex justify-center items-center"
              >
                <img src="images/AboutPage/yt.png" alt="" className="w-7 h-7" />
              </div>
              <div
                id="socmed-item"
                className="w-[52px] h-[52px] rounded-full shadow-cardShadow flex justify-center items-center"
              >
                <img
                  src="images/AboutPage/about-wa.png"
                  alt=""
                  className="w-7 h-7"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="message-us" className="w-[532px] flex flex-col">
          <div id="message-title" className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Kirim pesan</h1>
            <p className="text-base font-medium">
              Kami senang mendengar dari Anda! Silakan isi formulir di bawah ini
              untuk mengirimkan pesan atau pertanyaan kepada kami.
            </p>
          </div>
          <form action="" className="grid grid-cols-2 gap-3 mt-4">
            <input
              type="text"
              name=""
              id=""
              placeholder="Your Name"
              className="h-12 rounded-xl"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Your Email"
              className="h-12 rounded-xl"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Subject"
              className="h-12 col-span-2 rounded-xl"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              className="col-span-2 rounded-xl"
              placeholder="Your Message"
            ></textarea>
            <button
              type="submit"
              className="w-fit flex justify-center items-center py-3 px-[46px] bg-primary-60 rounded-xl text-white text-xl font-medium"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
