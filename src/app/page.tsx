"use client";

import FormTransaction from "@/components/FormTransaction";
import AppProviders from "./dashboard/AppProviders";
import PageLayout from "./dashboard/PageLayout";

const CardsLayout = () => (
    <AppProviders>
        <PageLayout mainContent={<FormTransaction />} />
    </AppProviders>
);

export default CardsLayout;