// Progress tracking in localStorage. Keyed by profileId -> subjectKey -> topicId -> attempts[]
const STORAGE_KEY = 'moe-revision-progress-v1';

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function recordAttempt(profileId, subjectKey, topicId, score, total) {
  const data = loadProgress();
  data[profileId] = data[profileId] || {};
  data[profileId][subjectKey] = data[profileId][subjectKey] || {};
  data[profileId][subjectKey][topicId] = data[profileId][subjectKey][topicId] || [];
  data[profileId][subjectKey][topicId].push({
    score, total, date: new Date().toISOString()
  });
  saveProgress(data);
}

function getTopicAttempts(profileId, subjectKey, topicId) {
  const data = loadProgress();
  return (data[profileId] && data[profileId][subjectKey] && data[profileId][subjectKey][topicId]) || [];
}

function getBestScore(profileId, subjectKey, topicId) {
  const attempts = getTopicAttempts(profileId, subjectKey, topicId);
  if (!attempts.length) return null;
  return attempts.reduce((best, a) => (a.score / a.total > best.score / best.total ? a : best));
}

function getSubjectSummary(profileId, subjectKey, topics) {
  let attempted = 0;
  let mastered = 0; // best score >= 80%
  topics.forEach(t => {
    const best = getBestScore(profileId, subjectKey, t.id);
    if (best) {
      attempted++;
      if (best.score / best.total >= 0.8) mastered++;
    }
  });
  return { attempted, mastered, total: topics.length };
}

// ISO-ish week number, used to rotate "this week's focus topic" deterministically.
function getWeekNumber(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

function pickWeeklyTopic(topics, seedOffset) {
  if (!topics.length) return null;
  const week = getWeekNumber(new Date()) + (seedOffset || 0);
  return topics[week % topics.length];
}
