import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";

const About = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar />
      <div className="pt-5">
        <div className="textheading text-center pt-5">
          {t("about.content1")}
        </div>
      </div>
      <div className="ali text-center fs-5">{t("about.content2")}</div>
      <div className="greentext d-flex mt-4 flex-lg-row flex-column justify-content-evenly w-100 mt-3">
        <div className="onblur w-100 lg-w-25 text-center">
          <img
            src="https://solene.qodeinteractive.com/wp-content/uploads/2019/11/blog-post-img-2.1.jpg"
            alt=""
            className="blur "
            width={330}
          />
          <h6 className="on mt-3">{t("about.content3")}</h6>
          <h3>{t("about.content4")}</h3>

          <p className="ut w-75 ms-5">{t("about.content5")} </p>
        </div>
        <div className="onblur w-100 lg-w-25 text-center">
          <img
            src="https://solene.qodeinteractive.com/wp-content/uploads/2019/11/blog-post-img-3.1.jpg"
            alt=""
            className="blur"
            width={330}
          />
          <h6 className="on mt-3">{t("about.content3")}</h6>
          <h3>{t("about.content6")}</h3>
          <p className="ut w-75 ms-5">{t("about.content5")} </p>
        </div>
        <div className="onblur w-100 lg-w-25 text-center">
          <img
            src="https://solene.qodeinteractive.com/wp-content/uploads/2019/11/blog-post-img-4.1.jpg"
            alt=""
            className="blur"
            width={330}
          />
          <h6 className="on mt-3">{t("about.content3")}</h6>
          <h3 className="callup">{t("about.content7")}</h3>
          <p className="ut w-75 ms-5 ">{t("about.content5")} </p>
        </div>
      </div>
    </div>
  );
};

export default About;
