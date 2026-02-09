import BlogStandardMain from '@/views/blogs/blog-standard/BlogStandardMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Blog Standard Light",
};

const page = () => {
    return (
        <BlogStandardMain />
    );
};

export default page;