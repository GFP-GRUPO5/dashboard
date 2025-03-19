"use client";

import Cards from "@/components/Cards";
import PageLayout from "../PageLayout";
import AppProviders from "../AppProviders";

const CardsLayout = () => (
    <AppProviders>
        <PageLayout mainContent={<Cards />} />
    </AppProviders>
);

export default CardsLayout;
