"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

import { trackEvent, type TrackingParams } from "@/lib/analytics";

type TrackedExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventParams?: TrackingParams;
};

export function TrackedExternalLink({
  eventName,
  eventParams,
  onClick,
  ...props
}: TrackedExternalLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    trackEvent(eventName, eventParams);
    onClick?.(event);
  };

  return <a {...props} onClick={handleClick} />;
}
