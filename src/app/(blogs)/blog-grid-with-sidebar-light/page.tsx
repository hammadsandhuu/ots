import BlogGridWithSidebar from '@/views/blogs/blog-grid-with-sidebar/BlogGridWithSidebar';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Agntix - Blog Grid With Sidebar Light",
};

const page = () => {
    return (
        <BlogGridWithSidebar />
    );
};

export default page;