export type TrackingParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (command: "event", eventName: string, params?: TrackingParams) => void;
  }
}

export function trackEvent(eventName: string, params: TrackingParams = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const payload = {
    event: eventName,
    ...params,
    timestamp: Date.now(),
  };

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}
