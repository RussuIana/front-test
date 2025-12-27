import LinearProgress from "@mui/material/LinearProgress";
import styles from "./GlobalLoader.module.css";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store.ts";
import { useEffect, useState } from "react";

export const GlobalLoader = () => {
    const isFetchingGlobal = useSelector((state: RootState) =>
        Object.values(state.api.queries).some((query) => query?.status === 'pending') ||
        Object.values(state.api.mutations).some((mutation) => mutation?.status === 'pending')
    );

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let timeout: number;

        if (isFetchingGlobal) {
            timeout = window.setTimeout(() => setVisible(true), 100);
        } else {
            timeout = window.setTimeout(() => setVisible(false), 300);
        }

        return () => window.clearTimeout(timeout);
    }, [isFetchingGlobal]);

    if (!visible) return null;

    return <LinearProgress className={styles.loader} />;
};
