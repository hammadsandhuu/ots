import BlogGridMain from '@/views/blogs/blog-grid/BlogGridMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Blog Grid Light",
};

const page = () => {
    return (
        <BlogGridMain />
    );
};

export default page;