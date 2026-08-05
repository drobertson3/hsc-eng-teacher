// ====================================================================
// Teacher Dashboard — Configuration
// This folder is deployed SEPARATELY from the student game, so students
// never see this file or the password in it.
// ====================================================================

// 1. DASHBOARD PASSWORD — change this!
const TEACHER_PASSWORD = "2015";

// 2. Link to the student game (shown as a button in the dashboard).
//    Leave "" to hide the button.
const STUDENT_SITE_URL = "";

// 2b. CLASS NAME — single-class build (no class battle). Must match the
//     student game's config.js.
const CLASSES = ["Engineering"];

// 2c. AI MARKING ASSISTANT — paste your Anthropic API key to have the AI suggest
//     a mark and feedback for each submitted answer. You approve or override every
//     mark before students see it. Leave "" to mark entirely by hand (or use the
//     free "📋 Copy for marking" button with Cowork).
const AI_CONFIG = {
  apiKey: "",                              // paste your key here — starts with sk-ant-
  model: "claude-haiku-4-5-20251001",      // cheapest, plenty good for marking
  // model: "claude-sonnet-5",             // ~2x the cost, a bit more precise on 5-6 mark answers
};

// 3. FIREBASE — must be the SAME project as the student game's config.js.
const firebaseConfig = {
  apiKey: "AIzaSyDYlH4zDFSquNeA6Sx570l1znP3_yH5mTI",
  authDomain: "hsc-eng-quiz.firebaseapp.com",
  projectId: "hsc-eng-quiz",
  storageBucket: "hsc-eng-quiz.firebasestorage.app",
  messagingSenderId: "409441801799",
  appId: "1:409441801799:web:31b2c1dabd0477f5480362"
};
