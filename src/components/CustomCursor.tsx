"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const CustomCursor = () => {
    const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
    const cursorY = useSpring(0, { stiffness: 500, damping: 28 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            // Center the cursor (w-4 h-4 = 16px, so offset by 8px)
            cursorX.set(e.clientX - 8);
            cursorY.set(e.clientY - 8);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check for interactive elements: links, buttons, or images
            const isInteractive =
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.closest("a") ||
                target.closest("button") ||
                target.tagName.toLowerCase() === "img";

            setIsHovered(!!isInteractive);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    // Hide default cursor
    useEffect(() => {
        document.body.style.cursor = "none";
        return () => {
            document.body.style.cursor = "auto";
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-4 h-4 border border-foreground rounded-full pointer-events-none z-50 mix-blend-difference"
            style={{
                x: cursorX,
                y: cursorY,
                scale: isHovered ? 2.5 : 1,
                backgroundColor: isHovered ? "var(--foreground)" : "transparent",
            }}
        />
    );
};
