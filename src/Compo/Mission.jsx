import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import bgImage from "../assets/2.png";
import { motion } from "framer-motion";

export default function Mission() {
    const [visibleLines, setVisibleLines] = useState(0);
    const paragraphRef = useRef(null);
    const lastScrollY = useRef(0);
    const [scrollDirection, setScrollDirection] = useState("down");

    useEffect(() => {
        const handleScroll = () => {
            if (!paragraphRef.current) return;

            const rect = paragraphRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const currentScrollY = window.scrollY;

            // Detect scroll direction
            if (currentScrollY > lastScrollY.current) {
                setScrollDirection("down");
            } else {
                setScrollDirection("up");
            }
            lastScrollY.current = currentScrollY;

            // Calculate visible percentage
            const visiblePercentage = Math.min(
                100,
                Math.max(0, ((viewportHeight - rect.top) / rect.height) * 100)
            );

            const totalLines = paragraphRef.current.children.length || 1;
            const linesToReveal = Math.floor(visiblePercentage / 10); // Reveal 1 line per 10% scroll

            setVisibleLines(linesToReveal);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const text =
        "To nurture young minds by providing a transformative learning experience that balances academic excellence, creativity, and character development. We strive to instill a love for learning, critical thinking, and leadership skills, preparing students to thrive in an ever-evolving world.";

    const words = text.split(" ");
    const lines = [];
    for (let i = 0; i < words.length; i += 6) {
        lines.push(words.slice(i, i + 6).join(" "));
    }

    return (
        <div
            className="relative flex flex-col items-center text-3xl justify-center min-h-screen bg-black text-white px-6 md:px-20"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            <motion.div
                className="relative flex flex-col items-center justify-center z-10 bg-black/50 p-10 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <img
                    src={logo}
                    alt="Logo"
                    className="w-24 mb-6 opacity-90"
                />

                <motion.h2
                    className="text-6xl font-bold mb-6 tracking-wide text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    Our Mission
                </motion.h2>

                <motion.div
                    ref={paragraphRef}
                    className="text-2xl max-w-3xl text-center leading-relaxed space-y-4 font-playfair"
                >
                    {lines.map((line, index) => {
                        let isVisible;
                        let delay;

                        if (scrollDirection === "down") {
                            isVisible = index < visibleLines; // Reveal from top to bottom
                            delay = index * 0.2; // Apply increasing delay for smooth transition
                        } else {
                            isVisible = lines.length - index - 1 < visibleLines; // Reveal from bottom to top
                            delay = (lines.length - index - 1) * 0.2; // Apply reverse delay for bottom-to-top animation
                        }

                        return (
                            <motion.p
                                key={index}
                                className="transition-colors duration-500"
                                animate={
                                    isVisible
                                        ? { opacity: 1, color: "#ffffff" } // White when visible
                                        : { opacity: 0.2, color: "#6b7280" } // Gray when hidden
                                }
                                initial={{ opacity: 0.2, color: "#6b7280" }}
                                transition={{
                                    duration: 0.8,
                                    delay: delay, // Ensures correct one-by-one animation
                                }}
                            >
                                {line}
                            </motion.p>
                        );
                    })}
                </motion.div>

            </motion.div>
        </div>
    );
}
