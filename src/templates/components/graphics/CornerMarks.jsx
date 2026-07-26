import React from "react";

const SIZE = 18;
const OFFSET = 38;
const STROKE = "#161512";
const OPACITY = 0.55;

function Mark({ top, left, right, bottom, rotate = 0 }) {

    return (

        <svg

            width={SIZE}
            height={SIZE}

            style={{

                position: "absolute",

                top,

                left,

                right,

                bottom,

                transform: `rotate(${rotate}deg)`,

                overflow: "visible",

                pointerEvents: "none"

            }}

        >

            <line

                x1="0"
                y1="0"
                x2="18"
                y2="0"

                stroke={STROKE}
                strokeWidth="1"

                opacity={OPACITY}

            />

            <line

                x1="0"
                y1="0"
                x2="0"
                y2="18"

                stroke={STROKE}
                strokeWidth="1"

                opacity={OPACITY}

            />

        </svg>

    );

}

export default function CornerMarks() {

    return (

        <>

            <Mark

                top={OFFSET}

                left={OFFSET}

                rotate={0}

            />

            <Mark

                top={OFFSET}

                right={OFFSET}

                rotate={90}

            />

            <Mark

                bottom={OFFSET}

                left={OFFSET}

                rotate={270}

            />

            <Mark

                bottom={OFFSET}

                right={OFFSET}

                rotate={180}

            />

        </>

    );

}