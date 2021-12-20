import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBookMarkRequest, fetchBookMarkRequest } from "../../store/social/social.actions";
import { getBookMarks } from "../../store/social/social.selector";
import LiveStreamCard from "../common/liveStreamCard";
import Sidebar from "../common/sidebar";
import Header from "../common/topbar";
import noImage from "../../assets/images/no-image.png";

export default function Bookmark() {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState([]);
  const { bookmarks } = useSelector((state) => {
    return {
      bookmarks: getBookMarks(state)
    }
  });

  useEffect(() => {
    dispatch(fetchBookMarkRequest())
  }, []);

  const handleDelete = () => {
    dispatch(deleteBookMarkRequest({
      listBookmarkId: selected
    }))
  }

  const handleSelect = (id) => {
    if (selected.indexOf(id) > -1) {
      setSelected(selected.filter((x) => x !== id));
    }
    else {
      setSelected([...selected, id]);
    }
  }

  return (
    <div>
      <section className="container-fluid">
        <Header />
        <div className="row">
          <Sidebar />
          <div className="col-lg-9 col-md-9 col-12 heigthfixing">
            <div className="row mt-4">
              <div className="col-lg-6 col-md-6 col-6">
                <Link to="/favorties" className="nav-link mainNavItemChild ">Following</Link>
              </div>
              <div className="col-lg-6 col-md-6 col-6">
                <Link to="/bookmark" className="nav-link mainNavItemChild active">Bookmark</Link>
              </div>
              <span className="lineseperater" />
            </div>
            <div className="col-12 col-lg-12 col-md-12">
              <div className="row">
                <div className="col-6 col-lg-6 col-md-6">
                  <div className="form-group position-relative center">
                    <input type="text" className="form-control search-input" name placeholder="Search..." />
                    <a href="javascript:;" className="search">
                      <img src="../images/search-icon.svg" alt="icon" />
                    </a>
                  </div>
                </div>
                <div className="col-6 col-lg-6 col-md-6 mt-2">
                  <div className="hdr-right">
                    <button disabled={selected.length === 0}
                      onClick={() => handleDelete()}
                      className="btn btn-yellow btnpadding ">Delete</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-12 col-md-12">
              <div className="row">
                {
                  bookmarks && bookmarks.length > 0 ? bookmarks.map((item) => {
                    return <font style={{ opacity: selected.indexOf(item._id) > -1 ? 0.5 : 1 }} onClick={() => handleSelect(item._id)}>
                      <LiveStreamCard selectable={true} livestream={item.livestream} /></font>
                  }) : <div className="col-12 " className="align-center">
                    <img src={noImage} />
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


