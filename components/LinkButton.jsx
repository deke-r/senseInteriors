import React from "react";
import Link from "next/link";
import "../styles/LinkButton.css";

const LinkButton = ({title,href}) => {


  return (
    <Link href={href} className="link-btn-info btn text-light f_14 fw-semibold">
        {title}
    </Link>
  );
};

export default LinkButton;
