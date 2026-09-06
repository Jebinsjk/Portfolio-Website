import { useEffect, useState } from 'react';

/** Current epoch milliseconds, refreshed on an interval (default 30s). */
export const useNow = (intervalMs = 30_000) => {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return now;
};

/** HH:MM in the viewer's local time. */
export const clockHM = (now: number) => {
  const d = new Date(now);
  const p = (n: number) => String(n).padStart(2, '0');
  return `${p(d.getHours())}:${p(d.getMinutes())}`;
};
