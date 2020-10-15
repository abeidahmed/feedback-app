export const INITIAL_TITLE = "What's on your mind?";
export const ISSUE_TITLE = 'Report an issue';
export const IDEA_TITLE = 'Share an idea';
export const OTHER_TITLE = 'Tell us anything!';
export const PROJECT_ID =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? '0833b8d2-7ca0-46fd-a232-c524b118baa0'
    : '523a8d59-4440-488f-bef5-7618cd31a920';
export const DEFAULT_EMAIL = 'Guest Feedback';
