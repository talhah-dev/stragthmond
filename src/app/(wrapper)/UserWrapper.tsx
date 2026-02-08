import AOSProvider from '@/components/AOSProvider';
import SiteFooterLight from '@/components/Footer';
import SiteNavbar from '@/components/Navbar';
import SiteLoader from '@/components/SiteLoader';
import React from 'react'

interface UserProps {
    children: React.ReactNode;
}

export default function UserWrapper({ children }: UserProps) {
    return (
        <div className='bg-[#F8F8FF] pt-3'>
            <SiteLoader />
            <SiteNavbar />
            <AOSProvider />
            {children}
            <SiteFooterLight />
        </div>
    )
}
