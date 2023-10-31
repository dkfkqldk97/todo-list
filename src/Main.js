import React from "react";
import Navigation from "./Component/nav/Navigation";
import Section from "./Component/section/Section";

const  Main = () => {
    return (
        <div>
            {/* 네비게이션 바 */}
            <Navigation></Navigation>
            <Section></Section>
        </div>
    )
}

export default Main;