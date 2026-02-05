"use client";

import { useState } from "react";
import LoaderOverlay from "./LoadingComponents";


export default function StartupGate({
    children,
}: {
    children: React.ReactNode;
}) {
    const [ready, setReady] = useState(false);

    if (!ready) {
        return <LoaderOverlay onFinish={() => setReady(true)} />;
    }

    return <>{children}</>;
}
