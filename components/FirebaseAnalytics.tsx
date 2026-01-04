"use client";
import { useEffect } from "react";
// We import the analytics object to ensure the initialization code in lib/firebase runs
import { analytics } from "@/lib/firebase";

export default function FirebaseAnalytics() {
    useEffect(() => {
        // Analytics is initialized in lib/firebase.ts
        // We can log or do additional setup here if needed
    }, []);

    return null;
}
