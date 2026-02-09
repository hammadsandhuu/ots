
import BlogDeailsMain from "@/views/blogs/blog-details/BlogDeailsMain";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "OTS - Blog Details",
};

const page = () => {
    return (
        <BlogDeailsMain />
    );
};

export default page;