"use client";

import {useEffect, useState} from "react";

const formatCountdown = (remainingMs: number) => {
  const totalSeconds = Math.max(0, Math.ceil(remainingMs / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

/**
 * Countdown client-only până la `expiresAt` (ISO).
 * Evită mismatch de hidratare — nu formatează dată pe server.
 */
export const useTokenCountdown = (expiresAt: string | null) => {
  const [remainingMs, setRemainingMs] = useState<number | null>(null);

  useEffect(() => {
    if (!expiresAt) {
      setRemainingMs(null);
      return;
    }

    const target = new Date(expiresAt).getTime();

    if (Number.isNaN(target)) {
      setRemainingMs(null);
      return;
    }

    const tick = () => {
      setRemainingMs(Math.max(0, target - Date.now()));
    };

    tick();
    const id = window.setInterval(tick, 1000);

    return () => window.clearInterval(id);
  }, [expiresAt]);

  return {
    remainingMs,
    isExpired: remainingMs === 0,
    formatted: remainingMs != null ? formatCountdown(remainingMs) : null,
  };
};
