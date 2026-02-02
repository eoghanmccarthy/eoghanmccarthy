// Type declarations for Temporal API
declare const Temporal: any;

// Check if Temporal API is available
const hasTemporal = typeof Temporal !== "undefined";

/**
 * Format a UTC datetime string to local date and time
 * Example: "January 20, 2024, 4:00 AM EST"
 */
export function formatDateTime(utcString: string): string {
  if (hasTemporal) {
    const instant = Temporal.Instant.from(utcString);
    const zdt = instant.toZonedDateTimeISO(Temporal.Now.timeZoneId());
    return zdt.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    });
  }

  // Fallback to Date (current)
  const date = new Date(utcString);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });
}

/**
 * Format a UTC datetime string to local date only
 * Example: "Jan 20, 2024"
 */
export function formatDate(utcString: string): string {
  if (hasTemporal) {
    const instant = Temporal.Instant.from(utcString);
    const zdt = instant.toZonedDateTimeISO(Temporal.Now.timeZoneId());
    return zdt.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  // Fallback to Date (current)
  const date = new Date(utcString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Format a UTC datetime string to long date format
 * Example: "January 20, 2024"
 */
export function formatDateLong(utcString: string): string {
  if (hasTemporal) {
    const instant = Temporal.Instant.from(utcString);
    const zdt = instant.toZonedDateTimeISO(Temporal.Now.timeZoneId());
    return zdt.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  // Fallback to Date (current)
  const date = new Date(utcString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Format a UTC datetime string to relative time
 * Example: "2 days ago", "in 3 hours"
 */
export function formatRelative(utcString: string): string {
  if (hasTemporal) {
    const instant = Temporal.Instant.from(utcString);
    const now = Temporal.Now.instant();
    const duration = now.since(instant);

    const seconds = duration.total("seconds");
    const minutes = duration.total("minutes");
    const hours = duration.total("hours");
    const days = duration.total("days");

    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

    if (Math.abs(seconds) < 60) return rtf.format(-Math.round(seconds), "second");
    if (Math.abs(minutes) < 60) return rtf.format(-Math.round(minutes), "minute");
    if (Math.abs(hours) < 24) return rtf.format(-Math.round(hours), "hour");
    if (Math.abs(days) < 30) return rtf.format(-Math.round(days), "day");

    return formatDate(utcString);
  }

  // Fallback to Date (current)
  const date = new Date(utcString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  if (Math.abs(diffSeconds) < 60) return rtf.format(-diffSeconds, "second");
  if (Math.abs(diffMinutes) < 60) return rtf.format(-diffMinutes, "minute");
  if (Math.abs(diffHours) < 24) return rtf.format(-diffHours, "hour");
  if (Math.abs(diffDays) < 30) return rtf.format(-diffDays, "day");

  return formatDate(utcString);
}
