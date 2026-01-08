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
            timeout = window.setTimeout(() => setVisible(true), 200);
        } else {
            timeout = window.setTimeout(() => setVisible(false), 300);
        }

        return () => window.clearTimeout(timeout);
    }, [isFetchingGlobal]);

    if (!visible) return null;

    return <LinearProgress role="progressbar"
                           aria-busy="true" className={styles.loader}
                           sx={{
                               position: 'fixed',
                               top: 0,
                               left: 0,
                               width: '100%',
                               zIndex: 9999,
                               height: 4,
                               backgroundColor: theme => theme.palette.mode === 'dark'
                                   ? 'rgba(255,255,255,0.1)'
                                   : 'rgba(0,0,0,0.1)',
                               '& .MuiLinearProgress-bar': {
                                   backgroundColor: theme => theme.palette.info.main
                               }
                           }} />;
};
