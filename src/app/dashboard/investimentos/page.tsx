"use client";

import PageLayout from "../PageLayout";
import AppProviders from "../AppProviders";
import Investments from "@/components/Investments";

const CardsLayout = () => (
    <AppProviders>
        <PageLayout mainContent={<Investments />} />
    </AppProviders>
);

export default CardsLayout;
