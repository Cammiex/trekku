function OpenTripHeroSection() {
  const bgImage = 'images/OpenTripPage/opentrip-hero.jpg';

  return (
    <div
      className="w-full h-[660px] flex items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <h1 className="text-[80px] font-extrabold z-10">Open Trip</h1>
      <div
        id="search-form"
        className="absolute z-10 flex justify-center px-20 py-10 text-black -translate-x-1/2 bg-white shadow-2xl min-h-40 w-fit rounded-2xl left-1/2 -bottom-20"
      >
        <form action="#" className="flex flex-wrap gap-6">
          <div id="search-item" className="flex flex-col">
            <div id="icon" className="flex items-center gap-2 mb-3">
              <img src="images/OpenTripPage/Loc.svg" alt="" />
              <label>Destination</label>
            </div>

            <select name="" id="" className="rounded-lg min-w-[214px]">
              <option value="" disabled selected hidden>
                Any Destination
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div id="search-item" className="flex flex-col">
            <div id="icon" className="flex items-center gap-2 mb-3">
              <img src="images/OpenTripPage/Clock.svg" alt="" />
              <label>Duration</label>
            </div>

            <select name="" id="" className="rounded-lg min-w-[154px]">
              <option value="" disabled selected hidden>
                Any Day
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <button className="flex h-[54px] justify-center items-center bg-primary-60 rounded-xl gap-[10px] px-5 self-end">
            <img src="images/OpenTripPage/search.png" alt="" />
            <h1 className="text-white">Search</h1>
          </button>
        </form>
      </div>
    </div>
  );
}

export default OpenTripHeroSection;
