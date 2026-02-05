import BlogMasonryMain from '@/views/blogs/blog-masonry/BlogMasonryMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Agntix - Blog Masonry Light",
};

const page = () => {
    return (
        <BlogMasonryMain />
    );
};

export default page;