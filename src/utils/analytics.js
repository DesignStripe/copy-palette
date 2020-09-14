import Analytics from "analytics";
import googleAnalyticsPlugin from "@analytics/google-analytics";
import { history } from "./history";

// Initialize analytics and plugins
// Documentation: https://getanalytics.io
const analytics = Analytics({
  debug: process.env.NODE_ENV !== "production",
  plugins: [
    googleAnalyticsPlugin({
      trackingId: "UA-171487599-4",
    }),
  ],
});

// Track initial pageview
if (typeof window !== "undefined") {
  analytics.page();
}

// Track pageview on route change
history.listen(() => {
  console.log('tracking')
  analytics.page();
});

export default analytics;
