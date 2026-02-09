import BlogDetailsWithoutSidebar from '@/views/blogs/blog-details-without-sidebar/BlogDetailsWithoutSidebar';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Blog Details Without Sidebar Light",
};

const page = () => {
    return (
        <BlogDetailsWithoutSidebar />
    );
};

export default page;