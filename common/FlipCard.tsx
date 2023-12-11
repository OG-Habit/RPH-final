"use client"

import { Card } from "@mui/material";
import { CSSProperties, useState } from "react";

export default function FlipCard({style, content, action} : {
    style: CSSProperties,
    content: JSX.Element,
    action: (e: React.MouseEvent<HTMLElement>) => void
}) {
    return (
        <Card onClick={action}
            style={{ 
                ...style,
                cursor: "pointer"
             }}>
            {content}
        </Card>
    )
}