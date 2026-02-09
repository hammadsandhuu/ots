import DigitalMarketingMain from "@/views/homes/digital-marketing/DigitalMarketingMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OTS - Ocean Trading Services",
};

export default function Home() {
  return (
    <DigitalMarketingMain />
  );
}
