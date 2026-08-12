// Quiz rendering engine. Supports mcq, fill, match, short, source question types.

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function normalize(str) {
  return String(str).trim().toLowerCase().replace(/\s+/g, '');
}

function renderQuiz(container, topic, profileId, subjectKey, onFinish) {
  const questions = topic.questions || [];
  let idx = 0;
  let score = 0;
  const results = [];

  function renderQuestion() {
    const q = questions[idx];
    const wrap = document.createElement('div');
    wrap.className = 'quiz-card';

    const progressLabel = document.createElement('div');
    progressLabel.className = 'quiz-progress-label';
    progressLabel.textContent = `Question ${idx + 1} of ${questions.length}`;
    wrap.appendChild(progressLabel);

    const bar = document.createElement('div');
    bar.className = 'quiz-progress-bar';
    const barFill = document.createElement('div');
    barFill.className = 'quiz-progress-fill';
    barFill.style.width = `${(idx / questions.length) * 100}%`;
    bar.appendChild(barFill);
    wrap.appendChild(bar);

    if (q.type === 'source' && q.context) {
      const ctx = document.createElement('div');
      ctx.className = 'quiz-source-context';
      ctx.textContent = q.context;
      wrap.appendChild(ctx);
    }

    const qEl = document.createElement('div');
    qEl.className = 'quiz-question';
    qEl.textContent = q.q;
    wrap.appendChild(qEl);

    const answerArea = document.createElement('div');
    answerArea.className = 'quiz-answer-area';
    wrap.appendChild(answerArea);

    const feedback = document.createElement('div');
    feedback.className = 'quiz-feedback';
    wrap.appendChild(feedback);

    const nextBtn = document.createElement('button');
    nextBtn.className = 'btn btn-primary quiz-next-btn';
    nextBtn.textContent = idx === questions.length - 1 ? 'Finish' : 'Next question';
    nextBtn.style.display = 'none';

    let answered = false;

    function markAnswered(isCorrect, userAnswerDisplay) {
      if (answered) return;
      answered = true;
      if (isCorrect) score++;
      results.push({ q: q.q, correct: isCorrect, userAnswerDisplay, explanation: q.explanation });
      feedback.className = 'quiz-feedback ' + (isCorrect ? 'correct' : 'incorrect');
      feedback.innerHTML = (isCorrect ? '✅ Correct! ' : '❌ Not quite. ') +
        (q.explanation ? `<span class="quiz-explanation">${q.explanation}</span>` : '');
      Array.from(answerArea.querySelectorAll('button, input')).forEach(el => el.disabled = true);
      nextBtn.style.display = 'inline-block';
    }

    if (q.type === 'mcq') {
      const optionOrder = q.options.map((opt, i) => i);
      optionOrder.forEach((optIdx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = q.options[optIdx];
        btn.onclick = () => {
          if (answered) return;
          const isCorrect = optIdx === q.answer;
          btn.classList.add(isCorrect ? 'option-correct' : 'option-wrong');
          if (!isCorrect) {
            const correctBtn = answerArea.children[q.answer];
            if (correctBtn) correctBtn.classList.add('option-correct');
          }
          markAnswered(isCorrect, q.options[optIdx]);
        };
        answerArea.appendChild(btn);
      });
    } else if (q.type === 'fill') {
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'fill-input';
      input.placeholder = 'Type your answer';
      const submitBtn = document.createElement('button');
      submitBtn.className = 'btn btn-secondary';
      submitBtn.textContent = 'Check';
      submitBtn.onclick = () => {
        if (answered) return;
        const accepted = Array.isArray(q.answer) ? q.answer : [q.answer];
        const isCorrect = accepted.some(a => normalize(a) === normalize(input.value));
        if (!isCorrect) {
          const correctAns = document.createElement('div');
          correctAns.className = 'correct-answer-reveal';
          correctAns.textContent = `Correct answer: ${accepted[0]}`;
          answerArea.appendChild(correctAns);
        }
        markAnswered(isCorrect, input.value);
      };
      input.addEventListener('keydown', (e) => { if (e.key === 'Enter') submitBtn.click(); });
      answerArea.appendChild(input);
      answerArea.appendChild(submitBtn);
    } else if (q.type === 'match') {
      const instr = document.createElement('div');
      instr.className = 'match-instructions';
      instr.textContent = q.instructions || 'Match each item on the left with its pair on the right.';
      answerArea.appendChild(instr);

      const pairs = q.pairs;
      const rightShuffled = shuffle(pairs.map((p, i) => i));
      const selections = new Array(pairs.length).fill(null);
      let selectedLeft = null;

      const matchGrid = document.createElement('div');
      matchGrid.className = 'match-grid';

      const leftCol = document.createElement('div');
      leftCol.className = 'match-col';
      const rightCol = document.createElement('div');
      rightCol.className = 'match-col';

      const leftBtns = [];
      const rightBtns = [];

      pairs.forEach((pair, i) => {
        const btn = document.createElement('button');
        btn.className = 'match-item';
        btn.textContent = pair[0];
        btn.onclick = () => {
          if (answered || selections[i] !== null) return;
          leftBtns.forEach(b => b.classList.remove('match-selected'));
          selectedLeft = i;
          btn.classList.add('match-selected');
        };
        leftCol.appendChild(btn);
        leftBtns.push(btn);
      });

      rightShuffled.forEach((origIdx) => {
        const btn = document.createElement('button');
        btn.className = 'match-item';
        btn.textContent = pairs[origIdx][1];
        btn.onclick = () => {
          if (answered || selectedLeft === null) return;
          const isCorrect = origIdx === selectedLeft;
          leftBtns[selectedLeft].classList.add(isCorrect ? 'match-correct' : 'match-wrong');
          btn.classList.add(isCorrect ? 'match-correct' : 'match-wrong');
          btn.disabled = true;
          leftBtns[selectedLeft].disabled = true;
          selections[selectedLeft] = isCorrect;
          selectedLeft = null;
          if (selections.every(s => s !== null)) {
            const correctCount = selections.filter(Boolean).length;
            markAnswered(correctCount === pairs.length, `${correctCount}/${pairs.length} matched correctly`);
          }
        };
        rightCol.appendChild(btn);
        rightBtns.push(btn);
      });

      matchGrid.appendChild(leftCol);
      matchGrid.appendChild(rightCol);
      answerArea.appendChild(matchGrid);
    } else if (q.type === 'short' || q.type === 'source') {
      const textarea = document.createElement('textarea');
      textarea.className = 'short-input';
      textarea.rows = 3;
      textarea.placeholder = 'Write your answer, then reveal the model answer to self-check';
      const revealBtn = document.createElement('button');
      revealBtn.className = 'btn btn-secondary';
      revealBtn.textContent = 'Reveal model answer';
      revealBtn.onclick = () => {
        if (answered) return;
        const modelAns = document.createElement('div');
        modelAns.className = 'correct-answer-reveal';
        modelAns.textContent = `Model answer: ${q.answer}`;
        answerArea.appendChild(modelAns);

        const selfCheck = document.createElement('div');
        selfCheck.className = 'self-check-row';
        const gotIt = document.createElement('button');
        gotIt.className = 'btn btn-primary';
        gotIt.textContent = 'I got this right';
        gotIt.onclick = () => markAnswered(true, textarea.value);
        const missedIt = document.createElement('button');
        missedIt.className = 'btn btn-secondary';
        missedIt.textContent = 'I missed this';
        missedIt.onclick = () => markAnswered(false, textarea.value);
        selfCheck.appendChild(gotIt);
        selfCheck.appendChild(missedIt);
        answerArea.appendChild(selfCheck);
        revealBtn.disabled = true;
      };
      answerArea.appendChild(textarea);
      answerArea.appendChild(revealBtn);
    }

    wrap.appendChild(nextBtn);
    nextBtn.onclick = () => {
      idx++;
      container.innerHTML = '';
      if (idx < questions.length) {
        renderQuestion();
      } else {
        recordAttempt(profileId, subjectKey, topic.id, score, questions.length);
        renderSummary();
      }
    };

    container.innerHTML = '';
    container.appendChild(wrap);
  }

  function renderSummary() {
    const wrap = document.createElement('div');
    wrap.className = 'quiz-card quiz-summary';
    const pct = Math.round((score / questions.length) * 100);
    wrap.innerHTML = `
      <div class="summary-emoji">${pct >= 80 ? '🌟' : pct >= 50 ? '👍' : '💪'}</div>
      <h2>${score} / ${questions.length} correct</h2>
      <p class="summary-pct">${pct}%</p>
      <p class="summary-msg">${pct >= 80 ? 'Great job — this topic is looking solid!' : pct >= 50 ? 'Good effort — a bit more practice will help.' : 'Keep practising — review the explanations and try again.'}</p>
    `;
    const btnRow = document.createElement('div');
    btnRow.className = 'summary-btn-row';
    const retryBtn = document.createElement('button');
    retryBtn.className = 'btn btn-primary';
    retryBtn.textContent = 'Try again';
    retryBtn.onclick = () => renderQuiz(container, topic, profileId, subjectKey, onFinish);
    const doneBtn = document.createElement('button');
    doneBtn.className = 'btn btn-secondary';
    doneBtn.textContent = 'Back to topics';
    doneBtn.onclick = () => onFinish();
    btnRow.appendChild(retryBtn);
    btnRow.appendChild(doneBtn);
    wrap.appendChild(btnRow);
    container.innerHTML = '';
    container.appendChild(wrap);
  }

  if (!questions.length) {
    container.innerHTML = '<div class="quiz-card"><p>No questions available for this topic yet.</p></div>';
    return;
  }
  renderQuestion();
}
