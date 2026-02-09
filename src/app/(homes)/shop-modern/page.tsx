import ShopModernMain from '@/views/homes/shop-modern/ShopModernMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Shop Modern Light",
};

const page = () => {
    return (
        <ShopModernMain />
    );
};

export default page;