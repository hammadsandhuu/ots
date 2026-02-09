import thumb1 from "../../../public/assets/img/home-03/contact/Riyadh.png";
import thumb2 from "../../../public/assets/img/home-03/contact/Jeddah.png";
import thumb3 from "../../../public/assets/img/home-03/contact/KSA.png";
import Image from "next/image";
import Link from "next/link";

const ContactUsArea = () => {
  const contactData = [
    {
      title: "Riyadh Office",
      company: "Ocean Trading Services",
      address: "102, First floor Dabbab St. Near Al Awwal Bank, PO. Box–50659, Riyadh–11533, Saudi Arabia",
      img: thumb1,
      email: "Shahr.azim@otsksa.com",
      phone: "+966 (20) 7700 1007",
      mapLink: "https://www.google.com/maps/search/102+First+floor+Dabbab+St+Near+Al+Awwal+Bank+PO+Box+50659+Riyadh+11533+Saudi+Arabia",
      btnClass: "tp-btn-yellow-green w-100",
      speed: "1.2",
    },
    {
      title: "KSA",
      company: "Ocean Trading Services",
      address: "Main Office - Saudi Arabia",
      img: thumb3,
      email: "Shahr.azim@otsksa.com",
      phone: "+966 (20) 7700 1007",
      mapLink: "https://www.google.com/maps/search/Ocean+Trading+Services+Saudi+Arabia",
      btnClass: "tp-btn-yellow-green active w-100",
      speed: ".9",
    },
    {
      title: "Jeddah Office",
      company: "Ocean Trading Services",
      address: "Surooh Business Center, 3rd Floor, Office no. 9, Hail Street, Jeddah, Saudi Arabia",
      img: thumb2,
      email: "Shahr.azim@otsksa.com",
      phone: "+966 (20) 7700 1007",
      mapLink: "https://www.google.com/maps/search/Surooh+Business+Center+3rd+Floor+Office+no+9+Hail+Street+Jeddah+Saudi+Arabia",
      btnClass: "tp-btn-yellow-green w-100",
      speed: "1.2",
    },
  ];

  return (
    <div className="tp-contact-us-info-area pb-120">
      <div className="container container-1230">
        <div className="row">
          {contactData.map((item, index) => (
            <div key={index} className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div
                className="tp-contact-us-content text-center"
                data-speed={item.speed}
              >
                <div className="tp-contact-us-thumb d-flex justify-content-center">
                  <Image style={{ width: "100%", height: "auto" }} src={item.img} alt={item.title} />
                </div>
                <div className="tp-contact-us-bottom">
                  <div className="tp-contact-us-info-details">
                    <h4 className="tp-contact-us-info-title">{item.title}</h4>
                    {item.company && (
                      <p className="tp-contact-us-company mb-2">{item.company}</p>
                    )}
                    {item.address && (
                      <p className="tp-contact-us-address mb-3 text-muted small">
                        {item.address}
                      </p>
                    )}
                    <Link href={`mailto:${item.email}`}>{item.email}</Link>
                    <Link href={`tel:${item.phone}`}>{item.phone}</Link>
                  </div>
                  <div className="tp-contact-us-btn">
                    <Link
                      className={item.btnClass}
                      target="_blank"
                      href={item.mapLink}
                    >
                      <span>
                        <span className="text-1">View Location</span>
                        <span className="text-2">View Location</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUsArea;
