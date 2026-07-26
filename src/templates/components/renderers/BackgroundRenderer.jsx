import React from "react";

function BackgroundRenderer({ element }) {

    const bounds = element.bounds;

    return (

        <div

            style={{

                position: "absolute",

                left: bounds.x,

                top: bounds.y,

                width: bounds.width,

                height: bounds.height,

                backgroundColor: element.color

            }}

        />

    );

}

export default BackgroundRenderer;