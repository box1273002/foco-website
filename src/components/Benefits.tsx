"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Container } from "@/components/Container";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface BenefitsProps {
    imgPos?: "left" | "right";
    data: {
        imgPos?: "left" | "right";
        title: string;
        desc: string;
        image: any;
        bullets: {
            title: string;
            desc: string;
            icon: React.ReactNode;
        }[];
    };
}

export const Benefits = (props: Readonly<BenefitsProps>) => {
    const { data } = props;

    // Animation controls
    const imgControls = useAnimation();
    const contentControls = useAnimation();

    // Detect when elements are in view - removed triggerOnce to allow exit animations
    const [imgRef, imgInView] = useInView({
        threshold: 0.3,
    });

    const [contentRef, contentInView] = useInView({
        threshold: 0.3,
    });

    // Trigger animations when in view or out of view
    useEffect(() => {
        if (imgInView) {
            imgControls.start("visible");
        } else {
            imgControls.start("hidden");
        }
    }, [imgControls, imgInView]);

    useEffect(() => {
        if (contentInView) {
            contentControls.start("visible");
        } else {
            contentControls.start("hidden");
        }
    }, [contentControls, contentInView]);

    // Animation variants
    const imgVariants = {
        hidden: {
            opacity: 0,
            x: props.imgPos === "right" ? 100 : -100,
            transition: {
                duration: 0.8,
                ease: "easeIn"
            }
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const contentVariants = {
        hidden: {
            opacity: 0,
            x: props.imgPos === "right" ? -100 : 100,
            transition: {
                duration: 0.8,
                ease: "easeIn"
            }
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2
            }
        }
    };

    const bulletVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                duration: 0.3
            }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
            <motion.div
                ref={imgRef}
                animate={imgControls}
                variants={imgVariants}
                className={`flex items-center justify-center w-full lg:w-1/2 ${props.imgPos === "right" ? "lg:order-1" : ""
                    }`}
            >
                <div>
                    <Image
                        src={data.image}
                        width={521}
                        height={521}
                        alt="Benefits"
                        className={"object-cover"}
                        placeholder="blur"
                        blurDataURL={data.image.src}
                    />
                </div>
            </motion.div>

            <motion.div
                ref={contentRef}
                animate={contentControls}
                variants={contentVariants}
                className={`flex flex-wrap items-center w-full lg:w-1/2 ${data.imgPos === "right" ? "lg:justify-end" : ""
                    }`}
            >
                <div>
                    <motion.div
                        variants={bulletVariants}
                        className="flex flex-col w-full mt-4"
                    >
                        <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                            {data.title}
                        </h3>

                        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                            {data.desc}
                        </p>
                    </motion.div>

                    <div className="w-full mt-5">
                        {data.bullets.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={bulletVariants}
                            >
                                <Benefit
                                    title={item.title}
                                    icon={item.icon}
                                >
                                    {item.desc}
                                </Benefit>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </Container>
    );
};

function Benefit(props: any) {
    return (
        <div className="flex items-start mt-8 space-x-3">
            <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
                {React.cloneElement(props.icon, {
                    className: "w-7 h-7 text-indigo-50",
                })}
            </div>
            <div>
                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    {props.title}
                </h4>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                    {props.children}
                </p>
            </div>
        </div>
    );
}
