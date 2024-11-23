import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";
import React from "react";
export const Horizontoltext = () => {
    const marqueeVariant = {
        animate: {
            x: [-1035, 0],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                },
            },
        },
    };
    return (
        <section className="h-fit bg-background my-2 text-neutral-950" >
            <div className="sticky top-0  flex h-fit items-center overflow-hidden">
                <motion.p className="origin-bottom-left whitespace-nowrap text-xl font-black flex items-center uppercase leading-[0.85]  md:leading-[0.85]"
                    variants={marqueeVariant}
                    animate="animate"
                >
                    Drive Business Forward <span className="text-black mx-2 "><Sparkle className="" /></span>Transform Your Future<span className="text-black mx-2"><Sparkle /></span>Feel the Boomzo Boost<span className="text-black mx-2"><Sparkle /></span>
                    Drive Business Forward <span className="text-black mx-2"><Sparkle /></span>Transform Your Future<span className="text-black mx-2"><Sparkle /></span>Feel the Boomzo Boost<span className="text-black mx-2"><Sparkle /></span>
                    Drive Business Forward <span className="text-black mx-2"><Sparkle /></span>Transform Your Future<span className="text-black mx-2"><Sparkle /></span>Feel the Boomzo Boost<span className="text-black mx-2"><Sparkle /></span>
                </motion.p>
            </div>
        </section>
    );
};

export default Horizontoltext;