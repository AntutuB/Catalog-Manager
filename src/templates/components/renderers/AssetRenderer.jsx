import React from "react";

import logoImage from "../../runtime/instagram-story/assets/logo.png";

function AssetRenderer({ element }) {

    const bounds = element.bounds;

    return (

        <img

            src={logoImage}

            alt={element.id}

            style={{

                position: "absolute",

                left: bounds.x,

                top: bounds.y,

                width: bounds.width,

                height: bounds.height,

                objectFit: "contain"

            }}

        />

    );

}

export default AssetRenderer;