/** @format */

import React, { Component, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Slug(props) {
  const location = useLocation();
  const [pageSlug, setPageSlug] = useState("");
  useEffect(() => {
    const slug = location.pathname.split(`/`)[2];
    setPageSlug(slug);
  }, []);
  let navigate = useNavigate();
  return (
    <div>
      <h2>slug:: {pageSlug && pageSlug}</h2>

      <button
        onClick={() => {
          navigate(`/articles`);
        }}
      >
        {" "}
        Go to Back
      </button>
    </div>
  );
}

export default Slug;
