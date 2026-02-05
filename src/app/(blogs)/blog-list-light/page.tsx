import BlogListMain from '@/views/blogs/blog-list/BlogListMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Agntix - Blog List Light",
};

const page = () => {
    return (
        <BlogListMain />
    );
};

export default page;