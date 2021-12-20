import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getCategoryList } from "../../store/shopping/shopping.selector";
import { getLiveStream } from "../../store/social/social.selector";
import meetingRoom from "../../assets/images/image 21 (Traced).svg";
import vipCircle from "../../assets/images/image 22.svg";
import Image25 from "../../assets/images/image 25 (Traced).svg";
import privateImage from "../../assets/images/private.svg";
import publicImage from "../../assets/images/public.svg";
import { clearShoppingRequest, getCategoryRequest } from "../../store/shopping/shopping.actions";
import Header from "../common/topbar";
import CreateVipCircle from "./create_vip_circle";
import SetupLive from "./setup_live";

export default function SetupMeeting() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState({});

  const { categories, liveStream } = useSelector((state) => {
    return {
      categories: getCategoryList(state),
      liveStream: getLiveStream(state)
    }
  });

  useEffect(() => {
    dispatch(clearShoppingRequest());
    dispatch(getCategoryRequest());
  }, []);

  if (step === 2) {
    if (selectedCategory.name !== "VIP Circle") {
      return <SetupLive category={selectedCategory} />
    }
    else {
      return <CreateVipCircle category={selectedCategory} />
    }
  }

  return (
    <div>
      <section className="container-fluid">
        {/* header Starts here */}
        <Header history={history} />

        <div className="row">
          {/* Mobile menu overlay Ends here */}
          {/* Left Wrap Ends here */}
          <div className="col-lg-8 col-md-8 col-12 mt-4 mb-4 main-section">
            <div className="snippet-block">
              <div className="col-12 col-lg-12 col-md-12 py-4">
                <div className="row">
                  <div className="col-12 col-lg-12 col-md-12">
                    <div className="text-center">
                      <h3 className="logo">Choose Space
                        <div className="hdr-right">
                          <img src={Image25} />
                        </div></h3>
                    </div>
                  </div>
                  <div className="col-2 col-lg-2 col-md-2">
                  </div>
                </div>
                <div className="row paymenttype">
                  {
                    categories.map((item) => {
                      return <div className="col-12 col-lg-6 col-md-6 mb-4">
                        <div className=" bg-grey text-center">
                          <button className="btn btnpadding snippet-block" onClick={() => setSelectedCategory(item)}>
                            <div className="col-12 col-lg-12 col-md-12 py-4">
                              <div className="snippet-cont bg-grey py-4 edititem ">
                                <div className="text-center">
                                  <img src={item.name === "Public Hall" ? publicImage :
                                    item.name === "Private Hall" ? privateImage :
                                      item.name === "Meeting Room" ? meetingRoom :
                                        vipCircle} />
                                  <h3 className="mt-4">{item.name}</h3>
                                  <p>{item.description}</p>
                                </div>
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    })
                  }
                </div>
              </div>
              <div className="text-center mb-4">
                <button className="btn btn-refer btnwidth" onClick={() => setStep(2)}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* MainSection Ends here */}
      </section>

    </div>
  );
}


