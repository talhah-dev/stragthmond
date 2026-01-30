import HomeCommunities from '@/components/Home/HomeCommunities'
import HomeFeaturedProperties from '@/components/Home/HomeFeaturedProperties'
import HomeHero from '@/components/Home/HomeHero'
import HomeNewsInsights from '@/components/Home/HomeNewsInsights'
import HomeServices from '@/components/Home/HomeServices'
import HomeWhyStrathmond from '@/components/Home/HomeWhyStrathmond'
import React from 'react'

export default function HomePg() {
    return (
        <div>
            <HomeHero />
            <HomeServices />
            <HomeFeaturedProperties />
            <HomeCommunities />
            <HomeWhyStrathmond />
            <HomeNewsInsights />
        </div>
    )
}
