import React, { useEffect, useState } from "react";
import './FrontPage.css';
// @ts-ignore
import FrontPageTextAnimation from "./FrontPageTextAnimation.tsx";

function FrontPage() {
    return (
        <div>
            <FrontPageTextAnimation></FrontPageTextAnimation>
        </div>
    )
}
export default FrontPage;