const CONTENT_BANKS = {
  chinese: CONTENT_CHINESE,
  science: CONTENT_SCIENCE,
  history: CONTENT_HISTORY,
  geography: CONTENT_GEOGRAPHY
};

function getProfile(id) {
  return PROFILES.find(p => p.id === id);
}

function getTopics(profileId, subjectKey) {
  const bank = CONTENT_BANKS[subjectKey];
  return (bank && bank[profileId]) || [];
}

function subjectOffset(subjectKey) {
  let sum = 0;
  for (let i = 0; i < subjectKey.length; i++) sum += subjectKey.charCodeAt(i);
  return sum;
}

const view = document.getElementById('view');
const weekPill = document.getElementById('weekPill');

function setWeekPill() {
  const now = new Date();
  weekPill.textContent = `Week ${getWeekNumber(now)} · ${now.toLocaleDateString('en-SG', { day: 'numeric', month: 'short', year: 'numeric' })}`;
}

function navigate(hash) {
  window.location.hash = hash;
}

function router() {
  const hash = window.location.hash.slice(1) || '/';
  const parts = hash.split('/').filter(Boolean);

  if (parts.length === 0) {
    renderHome();
  } else if (parts[0] === 'profile' && parts[1]) {
    renderProfile(parts[1]);
  } else if (parts[0] === 'subject' && parts[1] && parts[2]) {
    renderSubject(parts[1], parts[2]);
  } else if (parts[0] === 'quiz' && parts[1] && parts[2] && parts[3]) {
    renderQuizView(parts[1], parts[2], parts[3]);
  } else {
    renderHome();
  }
  window.scrollTo(0, 0);
}

function renderHome() {
  view.innerHTML = '';
  const heading = document.createElement('div');
  heading.className = 'page-heading';
  heading.innerHTML = `<h1>Who's revising today?</h1><p>Pick a profile to see this week's focus topics.</p>`;
  view.appendChild(heading);

  const grid = document.createElement('div');
  grid.className = 'profile-grid';
  PROFILES.forEach(p => {
    const card = document.createElement('div');
    card.className = 'profile-card';
    card.style.setProperty('--accent', p.color);
    card.innerHTML = `
      <div class="profile-card-label">${p.label}</div>
      <div class="profile-card-tagline">${p.tagline}</div>
      <div class="profile-card-cta">Start revising →</div>
    `;
    card.onclick = () => navigate(`/profile/${p.id}`);
    grid.appendChild(card);
  });
  view.appendChild(grid);
}

function renderProfile(profileId) {
  const profile = getProfile(profileId);
  if (!profile) return renderHome();
  view.innerHTML = '';

  const back = document.createElement('a');
  back.href = '#/';
  back.className = 'back-link';
  back.textContent = '← All profiles';
  view.appendChild(back);

  const heading = document.createElement('div');
  heading.className = 'page-heading';
  heading.innerHTML = `<h1 style="color:${profile.color}">${profile.label}</h1><p>${profile.tagline}</p>`;
  view.appendChild(heading);

  const grid = document.createElement('div');
  grid.className = 'subject-grid';
  profile.subjects.forEach(subjectKey => {
    const meta = SUBJECT_META[subjectKey];
    const topics = getTopics(profileId, subjectKey);
    const summary = getSubjectSummary(profileId, subjectKey, topics);
    const weeklyTopic = pickWeeklyTopic(topics, subjectOffset(subjectKey));

    const card = document.createElement('div');
    card.className = 'subject-card';
    card.style.setProperty('--accent', profile.color);
    card.innerHTML = `
      <div class="subject-card-icon">${meta.icon}</div>
      <div class="subject-card-label">${meta.label}</div>
      <div class="subject-card-week">${weeklyTopic ? `This week: ${weeklyTopic.title}` : 'No topics yet'}</div>
      <div class="subject-card-progress">${summary.mastered}/${summary.total} topics mastered</div>
    `;
    card.onclick = () => navigate(`/subject/${profileId}/${subjectKey}`);
    grid.appendChild(card);
  });
  view.appendChild(grid);
}

function renderSubject(profileId, subjectKey) {
  const profile = getProfile(profileId);
  if (!profile || !profile.subjects.includes(subjectKey)) return renderHome();
  const meta = SUBJECT_META[subjectKey];
  const topics = getTopics(profileId, subjectKey);
  const weeklyTopic = pickWeeklyTopic(topics, subjectOffset(subjectKey));

  view.innerHTML = '';
  const back = document.createElement('a');
  back.href = `#/profile/${profileId}`;
  back.className = 'back-link';
  back.textContent = `← ${profile.label}`;
  view.appendChild(back);

  const heading = document.createElement('div');
  heading.className = 'page-heading';
  heading.innerHTML = `<h1 style="color:${profile.color}">${meta.icon} ${meta.label}</h1><p>${profile.label} · ${topics.length} topics available</p>`;
  view.appendChild(heading);

  if (!topics.length) {
    const empty = document.createElement('p');
    empty.className = 'empty-state';
    empty.textContent = 'Content coming soon for this subject.';
    view.appendChild(empty);
    return;
  }

  const list = document.createElement('div');
  list.className = 'topic-list';
  topics.forEach(topic => {
    const best = getBestScore(profileId, subjectKey, topic.id);
    const isWeekly = weeklyTopic && topic.id === weeklyTopic.id;
    const row = document.createElement('div');
    row.className = 'topic-row' + (isWeekly ? ' topic-row-featured' : '');
    row.style.setProperty('--accent', profile.color);
    row.innerHTML = `
      <div class="topic-row-main">
        ${isWeekly ? '<span class="weekly-badge">This week’s focus</span>' : ''}
        <div class="topic-row-title">${topic.title}${topic.titleEn ? ` <span class="topic-title-en">(${topic.titleEn})</span>` : ''}</div>
        <div class="topic-row-summary">${topic.summary || ''}</div>
      </div>
      <div class="topic-row-side">
        ${best ? `<div class="topic-best-score">Best: ${best.score}/${best.total}</div>` : '<div class="topic-best-score topic-not-attempted">Not attempted</div>'}
        <button class="btn btn-primary">Practice</button>
      </div>
    `;
    row.querySelector('button').onclick = () => navigate(`/quiz/${profileId}/${subjectKey}/${topic.id}`);
    list.appendChild(row);
  });
  view.appendChild(list);
}

function renderQuizView(profileId, subjectKey, topicId) {
  const profile = getProfile(profileId);
  const topics = getTopics(profileId, subjectKey);
  const topic = topics.find(t => t.id === topicId);
  if (!profile || !topic) return renderHome();

  view.innerHTML = '';
  const back = document.createElement('a');
  back.href = `#/subject/${profileId}/${subjectKey}`;
  back.className = 'back-link';
  back.textContent = `← ${SUBJECT_META[subjectKey].label} topics`;
  view.appendChild(back);

  const heading = document.createElement('div');
  heading.className = 'page-heading';
  heading.innerHTML = `<h1 style="color:${profile.color}">${topic.title}</h1>${topic.summary ? `<p>${topic.summary}</p>` : ''}`;
  view.appendChild(heading);

  if (topic.vocab && topic.vocab.length) {
    const vocabBox = document.createElement('details');
    vocabBox.className = 'vocab-box';
    vocabBox.innerHTML = `<summary>Key vocabulary (${topic.vocab.length})</summary>`;
    const table = document.createElement('div');
    table.className = 'vocab-table';
    topic.vocab.forEach(v => {
      const row = document.createElement('div');
      row.className = 'vocab-row';
      row.innerHTML = `<span class="vocab-term">${v.term}</span>${v.pinyin ? `<span class="vocab-pinyin">${v.pinyin}</span>` : ''}<span class="vocab-meaning">${v.meaning}</span>`;
      table.appendChild(row);
    });
    vocabBox.appendChild(table);
    view.appendChild(vocabBox);
  }

  const quizContainer = document.createElement('div');
  view.appendChild(quizContainer);

  renderQuiz(quizContainer, topic, profileId, subjectKey, () => navigate(`/subject/${profileId}/${subjectKey}`));
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', () => {
  setWeekPill();
  router();
});
