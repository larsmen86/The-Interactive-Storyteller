"use client";

import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export const HorizontalScroll = ({ children }: { children: React.ReactNode }) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {children}
                </motion.div>
            </div>
        </section>
    );
};
