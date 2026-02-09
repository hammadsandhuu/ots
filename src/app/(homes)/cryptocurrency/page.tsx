import CryptoCurrencyMain from '@/views/homes/cryptocurrency/CryptoCurrencyMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Cryptocurrency Light",
};


const page = () => {
    return (
        <CryptoCurrencyMain />
    );
};

export default page;