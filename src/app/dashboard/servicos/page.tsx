"use client";

import PageLayout from "../PageLayout";
import AppProviders from "../AppProviders";
import Services from "@/components/Services";

const CardsLayout = () => (
    <AppProviders>
        <PageLayout mainContent={<Services />} />
    </AppProviders>
);

export default CardsLayout;
