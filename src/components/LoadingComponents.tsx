"use client";

import { useEffect } from "react";
import { MultiStepLoader as Loader } from "../components/ui/multi-step-loader";

const LOADING_STEP_DURATION = 400; // ms per step
const EXTRA_DELAY = 400; // ms after last step

const loadingStates = [
    { text: "Booting up developer workspace..." },
    { text: "Cloning cutting-edge repositories" },
    { text: "Setting up Docker containers" },
    { text: "Connecting Frontend to Backend API" },
    { text: "Optimizing TypeScript types" },
    { text: "Implementing responsive UI" },
    { text: "Deploying to the cloud 🚀" },
    { text: "Polishing user experience ✨" },
];

export default function MultiStepLoaderDemo({
    onFinish,
}: {
    onFinish: () => void;
}) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, loadingStates.length * LOADING_STEP_DURATION + EXTRA_DELAY);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="w-full h-[60vh] flex items-center justify-center">
            <Loader
                loadingStates={loadingStates}
                loading={true}
                duration={LOADING_STEP_DURATION}
                loop={false}
            />
        </div>
    );
}
