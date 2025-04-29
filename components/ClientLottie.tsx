"use client";

import React from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type Props = {
  animationData: object;
  className?: string;
};

const ClientLottie = ({ animationData, className }: Props) => {
  return <Lottie animationData={animationData} loop className={className} />;
};

export default ClientLottie;
