const Setup = ({ darkMode }) => {
  return (
    <>
      <div className="name_page">Setup</div>
      <div className="div_description">
        <div className="description">
          I am a geek after all, why not talk about my setup ?
        </div>
      </div>
      <div className="container_setup">
        {darkMode ? (
          <img
            src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673950271/my-content/iconsRF/v2_ia9imk.jpg"
            alt="setup_dark"
          />
        ) : (
          <img
            src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673950271/my-content/iconsRF/v3_k4ncrq.jpg"
            alt="setup"
          />
        )}
      </div>
      <div>
        <p className="detail_img">
          Photos from my personal setup (Light : Work / Dark : Geek)
        </p>
      </div>
      <div className="set_title">Desktop / Office</div>
      <div>
        <div className="listing_contact">
          <li className="list_set">MSI Trident X / i9 2080TI 32GB Ram</li>
          <li className="list_set">MSI WQHD OPTIX Screen 144hz 32'</li>
          <li className="list_set">Corsair K70</li>
          <li className="list_set">Cool Master CM310 RGB</li>
          <li className="list_set">SONY SRS-XB23 Sound</li>
          <li className="list_set">Microphone TONOR</li>
          <li className="list_set">Headphone HyperX Cloud II</li>
          <li className="list_set">Webcam IVSO 1080p</li>
          <li className="list_set">Seat Rekt Rgo MAX </li>
          <li className="list_set">Arozzi Arena Desk</li>
        </div>
      </div>
      <div className="set_title">Audio / Video</div>
      <div className="listing_contact">
        <li className="list_set">LG SUPER UHD 4K Nano Cell 48"</li>
        <li className="list_set">Harmann-Kardon NOVA</li>
      </div>
      <div className="set_title">Coding</div>
      <div>
        <div className="listing_contact">
          <li className="list_set">Apple Macbook M2 13.6' 2022 💻</li>
          <li className="list_set">ASUS G752 17' with Linux uBuntu 🐧</li>
        </div>
      </div>
      <div className="set_title">Others</div>
      <div>
        <div className="listing_contact">
          <li className="list_set">Internet fiber up to 500MB/s 🚀</li>
          <li className="list_set">SONY PlayStation 5</li>
          <li className="list_set">Headset Turtle Beach Stealth Gen 2</li>

          <li className="list_set">2 controllers PS5</li>
          <li className="list_set">3 controllers Xbox One</li>
          <li className="list_set">Apple iPhone 13 Pro 256GO 📱</li>
          <li className="list_set">Apple Airpods 2nd Generation</li>
          <li className="list_set">Electric Bicycle Eleglide T1 🚴🏼‍♂️💨</li>
        </div>
      </div>
    </>
  );
};

export default Setup;
