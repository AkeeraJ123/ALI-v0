'use strict';

// ============================================================
// CONSTANTS
// ============================================================

const EXERCISES = [
  { id: 'bench-press',      name: 'Bench Press',               category: 'Chest',     muscles: ['Pectorals', 'Triceps', 'Front Delts'] },
  { id: 'incline-bench',    name: 'Incline Bench Press',        category: 'Chest',     muscles: ['Upper Pectorals', 'Triceps'] },
  { id: 'decline-bench',    name: 'Decline Bench Press',        category: 'Chest',     muscles: ['Lower Pectorals', 'Triceps'] },
  { id: 'chest-fly',        name: 'Chest Fly',                  category: 'Chest',     muscles: ['Pectorals'] },
  { id: 'pushup',           name: 'Push-Ups',                   category: 'Chest',     muscles: ['Pectorals', 'Triceps', 'Front Delts'] },
  { id: 'chest-dips',       name: 'Chest Dips',                 category: 'Chest',     muscles: ['Lower Pectorals', 'Triceps'] },
  { id: 'deadlift',         name: 'Deadlift',                   category: 'Back',      muscles: ['Lower Back', 'Hamstrings', 'Glutes', 'Traps'] },
  { id: 'pullup',           name: 'Pull-Up',                    category: 'Back',      muscles: ['Lats', 'Biceps', 'Rear Delts'] },
  { id: 'chinup',           name: 'Chin-Up',                    category: 'Back',      muscles: ['Lats', 'Biceps'] },
  { id: 'barbell-row',      name: 'Barbell Row',                category: 'Back',      muscles: ['Lats', 'Rhomboids', 'Biceps'] },
  { id: 'lat-pulldown',     name: 'Lat Pulldown',               category: 'Back',      muscles: ['Lats', 'Biceps'] },
  { id: 'seated-row',       name: 'Seated Cable Row',           category: 'Back',      muscles: ['Rhomboids', 'Lats', 'Biceps'] },
  { id: 'rdl',              name: 'Romanian Deadlift',          category: 'Back',      muscles: ['Lower Back', 'Hamstrings', 'Glutes'] },
  { id: 'squat',            name: 'Back Squat',                 category: 'Legs',      muscles: ['Quads', 'Glutes', 'Hamstrings'] },
  { id: 'front-squat',      name: 'Front Squat',                category: 'Legs',      muscles: ['Quads', 'Core'] },
  { id: 'leg-press',        name: 'Leg Press',                  category: 'Legs',      muscles: ['Quads', 'Glutes', 'Hamstrings'] },
  { id: 'lunges',           name: 'Lunges',                     category: 'Legs',      muscles: ['Quads', 'Glutes', 'Hamstrings'] },
  { id: 'leg-curl',         name: 'Leg Curl',                   category: 'Legs',      muscles: ['Hamstrings'] },
  { id: 'leg-extension',    name: 'Leg Extension',              category: 'Legs',      muscles: ['Quads'] },
  { id: 'calf-raise',       name: 'Calf Raise',                 category: 'Legs',      muscles: ['Calves'] },
  { id: 'hip-thrust',       name: 'Hip Thrust',                 category: 'Legs',      muscles: ['Glutes', 'Hamstrings'] },
  { id: 'ohp',              name: 'Overhead Press',             category: 'Shoulders', muscles: ['Front Delts', 'Triceps', 'Traps'] },
  { id: 'db-shoulder',      name: 'Dumbbell Shoulder Press',    category: 'Shoulders', muscles: ['Front Delts', 'Side Delts'] },
  { id: 'lateral-raise',    name: 'Lateral Raise',              category: 'Shoulders', muscles: ['Side Delts'] },
  { id: 'front-raise',      name: 'Front Raise',                category: 'Shoulders', muscles: ['Front Delts'] },
  { id: 'face-pull',        name: 'Face Pull',                  category: 'Shoulders', muscles: ['Rear Delts', 'Rotator Cuff'] },
  { id: 'shrugs',           name: 'Shrugs',                     category: 'Shoulders', muscles: ['Traps'] },
  { id: 'bicep-curl',       name: 'Bicep Curl',                 category: 'Arms',      muscles: ['Biceps'] },
  { id: 'hammer-curl',      name: 'Hammer Curl',                category: 'Arms',      muscles: ['Biceps', 'Brachialis'] },
  { id: 'preacher-curl',    name: 'Preacher Curl',              category: 'Arms',      muscles: ['Biceps'] },
  { id: 'tricep-pushdown',  name: 'Tricep Pushdown',            category: 'Arms',      muscles: ['Triceps'] },
  { id: 'skull-crushers',   name: 'Skull Crushers',             category: 'Arms',      muscles: ['Triceps'] },
  { id: 'overhead-tricep',  name: 'Overhead Tricep Extension',  category: 'Arms',      muscles: ['Triceps'] },
  { id: 'plank',            name: 'Plank',                      category: 'Core',      muscles: ['Abs', 'Obliques', 'Lower Back'] },
  { id: 'crunches',         name: 'Crunches',                   category: 'Core',      muscles: ['Abs'] },
  { id: 'russian-twist',    name: 'Russian Twist',              category: 'Core',      muscles: ['Obliques', 'Abs'] },
  { id: 'leg-raise',        name: 'Leg Raise',                  category: 'Core',      muscles: ['Lower Abs', 'Hip Flexors'] },
  { id: 'ab-wheel',         name: 'Ab Wheel Rollout',           category: 'Core',      muscles: ['Abs', 'Core'] },
  { id: 'cable-crunch',     name: 'Cable Crunch',               category: 'Core',      muscles: ['Abs'] },
  { id: 'running',          name: 'Running',                    category: 'Cardio',    muscles: ['Full Body'] },
  { id: 'cycling',          name: 'Cycling',                    category: 'Cardio',    muscles: ['Legs', 'Cardio'] },
  { id: 'jump-rope',        name: 'Jump Rope',                  category: 'Cardio',    muscles: ['Full Body'] },
  { id: 'rowing-machine',   name: 'Rowing Machine',             category: 'Cardio',    muscles: ['Back', 'Arms', 'Legs'] },
  { id: 'elliptical',       name: 'Elliptical',                 category: 'Cardio',    muscles: ['Full Body'] },
  { id: 'stair-climber',    name: 'Stair Climber',              category: 'Cardio',    muscles: ['Legs', 'Glutes'] },
];

const CATEGORIES = ['All', 'Chest', 'Back', 'Legs', 'Shoulders', 'Arms', 'Core', 'Cardio'];

const GOALS = ['Build Muscle', 'Lose Weight', 'Improve Endurance', 'Stay Active'];

const QUICK_TEMPLATES = [
  { name: 'Push Day',     exercises: ['Bench Press', 'Incline Bench Press', 'Overhead Press', 'Lateral Raise', 'Tricep Pushdown'] },
  { name: 'Pull Day',     exercises: ['Deadlift', 'Pull-Up', 'Barbell Row', 'Lat Pulldown', 'Bicep Curl'] },
  { name: 'Leg Day',      exercises: ['Back Squat', 'Leg Press', 'Romanian Deadlift', 'Leg Curl', 'Calf Raise'] },
  { name: 'Upper Body',   exercises: ['Bench Press', 'Barbell Row', 'Overhead Press', 'Bicep Curl', 'Tricep Pushdown'] },
  { name: 'Full Body',    exercises: ['Back Squat', 'Bench Press', 'Barbell Row', 'Overhead Press', 'Romanian Deadlift'] },
  { name: 'Core & Cardio',exercises: ['Plank', 'Crunches', 'Russian Twist', 'Leg Raise', 'Running'] },
];

const CAT_COLORS = {
  Chest: '#F87171', Back: '#34D399', Legs: '#60A5FA',
  Shoulders: '#FBBF24', Arms: '#A78BFA', Core: '#F472B6', Cardio: '#FB923C',
};

// ============================================================
// STATE
// ============================================================

const state = {
  tab: 'dashboard',
  activeWorkout: null,
  workouts: [],
  profile: { name: '', weight: '', height: '', goal: 'Build Muscle', weeklyGoal: 4 },
  exerciseFilter: 'All',
  exerciseSearch: '',
  expandedWorkout: null,
  timerRef: null,
};

// ============================================================
// STORAGE
// ============================================================

function loadFromStorage() {
  try {
    const p = localStorage.getItem('ft_profile');
    if (p) state.profile = { ...state.profile, ...JSON.parse(p) };
    const w = localStorage.getItem('ft_workouts');
    if (w) state.workouts = JSON.parse(w);
    const a = localStorage.getItem('ft_active');
    if (a) state.activeWorkout = JSON.parse(a);
  } catch (e) {
    console.warn('Storage error:', e);
  }
}

function saveWorkouts() { localStorage.setItem('ft_workouts', JSON.stringify(state.workouts)); }
function saveProfile()  { localStorage.setItem('ft_profile',  JSON.stringify(state.profile));  }
function saveActive()   {
  if (state.activeWorkout) {
    localStorage.setItem('ft_active', JSON.stringify(state.activeWorkout));
  } else {
    localStorage.removeItem('ft_active');
  }
}

// ============================================================
// NAVIGATION
// ============================================================

function navigate(tab) {
  state.tab = tab;
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  if (tab !== 'workout') stopTimer();
  render();
}

function render() {
  const main = document.getElementById('main-content');
  const actions = document.getElementById('header-actions');
  const title = document.getElementById('header-title');

  // Save scroll position and restore after render
  const scrollTop = main.scrollTop;

  switch (state.tab) {
    case 'dashboard':
      title.textContent = 'FitTrack';
      actions.innerHTML = '';
      main.innerHTML = buildDashboard();
      break;
    case 'workout':
      title.textContent = state.activeWorkout ? 'Active Workout' : 'Start Workout';
      actions.innerHTML = state.activeWorkout
        ? `<button class="btn-ghost btn-sm" onclick="cancelWorkout()">Cancel</button>`
        : '';
      main.innerHTML = state.activeWorkout ? buildActiveWorkout() : buildWorkoutStart();
      if (state.activeWorkout) startTimer();
      break;
    case 'history':
      title.textContent = 'History';
      actions.innerHTML = '';
      main.innerHTML = buildHistory();
      break;
    case 'exercises':
      title.textContent = 'Exercises';
      actions.innerHTML = '';
      main.innerHTML = buildExercises();
      break;
    case 'profile':
      title.textContent = 'Profile';
      actions.innerHTML = '';
      main.innerHTML = buildProfile();
      break;
  }

  main.scrollTop = scrollTop;
}

// ============================================================
// DASHBOARD
// ============================================================

function buildDashboard() {
  const { name, weeklyGoal = 4 } = state.profile;
  const streak = calcStreak();
  const weekCount = calcWeeklyCount();
  const weekPct = Math.min(100, Math.round((weekCount / weeklyGoal) * 100));
  const totalVol = state.workouts.reduce((s, w) => s + workoutVolume(w), 0);
  const last = state.workouts.length ? state.workouts[state.workouts.length - 1] : null;
  const aw = state.activeWorkout;

  return `
<div class="page">
  <div class="greeting">
    <div>
      <div class="greeting-sub">Good ${timeOfDay()},</div>
      <div class="greeting-name">${esc(name || 'Athlete')}</div>
    </div>
    ${aw ? `<div class="active-badge pulse">● Active</div>` : ''}
  </div>

  ${aw ? `
  <div class="card active-workout-card" onclick="navigate('workout')" style="cursor:pointer">
    <div class="active-workout-info">
      <div class="active-workout-label">Active Workout</div>
      <div class="active-workout-name">${esc(aw.name)}</div>
      <div class="active-workout-stats">${aw.exercises.length} exercise${aw.exercises.length !== 1 ? 's' : ''} &middot; ${fmtDuration(elapsed())} elapsed</div>
    </div>
    <div class="active-workout-arrow">&#8594;</div>
  </div>` : ''}

  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-icon">🔥</div>
      <div class="stat-value">${streak}</div>
      <div class="stat-label">Day Streak</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">📅</div>
      <div class="stat-value">${weekCount}<span style="font-size:14px;color:var(--text-muted)">/${weeklyGoal}</span></div>
      <div class="stat-label">This Week</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">💪</div>
      <div class="stat-value">${state.workouts.length}</div>
      <div class="stat-label">Total Workouts</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">⚡</div>
      <div class="stat-value">${fmtVol(totalVol)}<span style="font-size:14px;color:var(--text-muted)">kg</span></div>
      <div class="stat-label">Total Volume</div>
    </div>
  </div>

  <div class="section">
    <div class="section-header">
      <span class="section-title">Weekly Goal</span>
      <span class="section-sub">${weekCount} of ${weeklyGoal} workouts</span>
    </div>
    <div class="progress-bar"><div class="progress-fill" style="width:${weekPct}%"></div></div>
    <div class="week-days">
      ${buildWeekDays()}
    </div>
  </div>

  ${last ? `
  <div class="section">
    <div class="section-header">
      <span class="section-title">Last Workout</span>
      <span class="section-sub">${fmtDate(last.date)}</span>
    </div>
    <div class="card workout-summary-card">
      <div class="workout-summary-name">${esc(last.name)}</div>
      <div class="workout-summary-meta">
        <span>⏱ ${fmtDuration(last.duration)}</span>
        <span>📋 ${last.exercises.length} exercises</span>
        <span>⚡ ${fmtVol(workoutVolume(last))} kg</span>
      </div>
      <div class="workout-summary-exercises">
        ${last.exercises.slice(0, 4).map(e => `<span class="exercise-chip">${esc(e.name)}</span>`).join('')}
        ${last.exercises.length > 4 ? `<span class="exercise-chip muted">+${last.exercises.length - 4} more</span>` : ''}
      </div>
    </div>
  </div>` : `
  <div class="empty-state">
    <div class="empty-icon">🏋️</div>
    <div class="empty-title">No workouts yet</div>
    <div class="empty-desc">Log your first workout to start tracking progress!</div>
    <button class="btn-primary" onclick="navigate('workout')">Start Workout</button>
  </div>`}
</div>`;
}

function buildWeekDays() {
  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());
  const workoutDates = new Set(state.workouts.map(w => w.date));
  const labels = ['S','M','T','W','T','F','S'];
  return labels.map((lbl, i) => {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    const ds = d.toISOString().split('T')[0];
    const done = workoutDates.has(ds);
    const isToday = ds === todayStr();
    return `<div class="week-day${done ? ' done' : ''}${isToday ? ' today' : ''}">
      <div class="week-day-label">${lbl}</div>
      <div class="week-day-dot"></div>
    </div>`;
  }).join('');
}

function calcStreak() {
  if (!state.workouts.length) return 0;
  const dates = [...new Set(state.workouts.map(w => w.date))].sort().reverse();
  let streak = 0;
  let cursor = new Date(); cursor.setHours(0,0,0,0);
  for (const d of dates) {
    const wd = new Date(d + 'T00:00:00');
    const diff = Math.round((cursor - wd) / 86400000);
    if (diff === 0 || diff === 1) { streak++; cursor = wd; }
    else break;
  }
  return streak;
}

function calcWeeklyCount() {
  const now = new Date();
  const sow = new Date(now); sow.setDate(now.getDate() - now.getDay()); sow.setHours(0,0,0,0);
  return state.workouts.filter(w => new Date(w.date + 'T00:00:00') >= sow).length;
}

// ============================================================
// WORKOUT — START SCREEN
// ============================================================

function buildWorkoutStart() {
  return `
<div class="page workout-start">
  <div class="section">
    <button class="btn-primary btn-large btn-block" onclick="startEmptyWorkout()">
      <span class="btn-icon">+</span> Start Empty Workout
    </button>
  </div>
  <div class="section">
    <div class="section-title" style="margin-bottom:12px">Quick Start Templates</div>
    <div class="template-list">
      ${QUICK_TEMPLATES.map((t, i) => `
        <div class="card template-card" onclick="startFromTemplate(${i})">
          <div class="template-name">${esc(t.name)}</div>
          <div class="template-exercises">${t.exercises.slice(0, 3).join(', ')}${t.exercises.length > 3 ? '&hellip;' : ''}</div>
        </div>`).join('')}
    </div>
  </div>
</div>`;
}

// ============================================================
// WORKOUT — ACTIVE WORKOUT
// ============================================================

function buildActiveWorkout() {
  const w = state.activeWorkout;
  const completedSets = w.exercises.reduce((n, ex) => n + ex.sets.filter(s => s.completed).length, 0);
  const totalSets = w.exercises.reduce((n, ex) => n + ex.sets.length, 0);
  const pct = totalSets ? Math.round((completedSets / totalSets) * 100) : 0;

  return `
<div class="active-workout">
  <div class="workout-header-bar">
    <input class="workout-name-input" type="text" value="${esc(w.name)}"
      placeholder="Workout Name"
      onchange="updateWorkoutName(this.value)" />
    <div class="workout-timer" id="workout-timer">${fmtDuration(elapsed())}</div>
  </div>

  <div class="workout-progress-bar">
    <div class="workout-progress-fill" id="wp-fill" style="width:${pct}%"></div>
  </div>
  <div class="workout-progress-text" id="wp-text">${completedSets}/${totalSets} sets completed</div>

  <div class="exercises-list">
    ${w.exercises.map((ex, ei) => buildExerciseCard(ex, ei)).join('')}
  </div>

  <div class="workout-actions">
    <button class="btn-secondary btn-block" onclick="showExercisePicker()">+ Add Exercise</button>
    <button class="btn-primary btn-block" onclick="finishWorkout()">Finish Workout</button>
  </div>
</div>`;
}

function buildExerciseCard(ex, ei) {
  return `
<div class="card exercise-card">
  <div class="exercise-card-header">
    <div>
      <div class="exercise-card-name">${esc(ex.name)}</div>
      <div class="exercise-card-cat">${esc(ex.category)}</div>
    </div>
    <button class="btn-icon-sm btn-danger" onclick="removeExercise(${ei})" title="Remove exercise">&#10005;</button>
  </div>
  <div class="sets-header">
    <span class="set-col-num">#</span>
    <span class="set-col-prev">Previous</span>
    <span style="text-align:center;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--text-dim)">kg</span>
    <span style="text-align:center;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--text-dim)">Reps</span>
    <span style="text-align:center;font-size:10px;color:var(--text-dim)">&#10003;</span>
  </div>
  ${ex.sets.map((set, si) => buildSetRow(ex, ei, set, si)).join('')}
  <div class="set-actions">
    <button class="btn-ghost btn-sm" onclick="addSet(${ei})">+ Add Set</button>
    ${ex.sets.length > 1 ? `<button class="btn-danger-ghost btn-sm" onclick="removeLastSet(${ei})">&minus; Remove Set</button>` : ''}
  </div>
</div>`;
}

function buildSetRow(ex, ei, set, si) {
  const prev = prevSetInfo(ex.id, si);
  return `
<div class="set-row${set.completed ? ' set-completed' : ''}" data-ei="${ei}" data-si="${si}">
  <span class="set-col-num">${si + 1}</span>
  <span class="set-col-prev">${prev}</span>
  <input class="set-input" type="number" min="0" step="0.5"
    value="${set.weight != null ? set.weight : ''}" placeholder="0"
    oninput="setField(${ei},${si},'weight',this.value)" />
  <input class="set-input" type="number" min="0" step="1"
    value="${set.reps != null ? set.reps : ''}" placeholder="0"
    oninput="setField(${ei},${si},'reps',this.value)" />
  <button class="set-check${set.completed ? ' set-check-done' : ''}"
    onclick="toggleSet(${ei},${si})">&#10003;</button>
</div>`;
}

// ============================================================
// WORKOUT — ACTIONS
// ============================================================

function startEmptyWorkout() {
  state.activeWorkout = { id: Date.now().toString(), name: 'My Workout', startTime: Date.now(), exercises: [] };
  saveActive();
  navigate('workout');
}

function startFromTemplate(idx) {
  const tpl = QUICK_TEMPLATES[idx];
  const exList = tpl.exercises
    .map(name => EXERCISES.find(e => e.name === name))
    .filter(Boolean)
    .map(ex => ({ id: ex.id, name: ex.name, category: ex.category, sets: [{ reps: null, weight: null, completed: false }] }));
  state.activeWorkout = { id: Date.now().toString(), name: tpl.name, startTime: Date.now(), exercises: exList };
  saveActive();
  navigate('workout');
}

function addExerciseToWorkout(exId) {
  if (!state.activeWorkout) return;
  const ex = EXERCISES.find(e => e.id === exId);
  if (!ex) return;
  state.activeWorkout.exercises.push({ id: ex.id, name: ex.name, category: ex.category, sets: [{ reps: null, weight: null, completed: false }] });
  saveActive();
  closeModal();
  render();
}

function removeExercise(ei) {
  if (!confirm(`Remove ${state.activeWorkout.exercises[ei].name}?`)) return;
  state.activeWorkout.exercises.splice(ei, 1);
  saveActive();
  render();
}

function addSet(ei) {
  const ex = state.activeWorkout.exercises[ei];
  const last = ex.sets[ex.sets.length - 1];
  ex.sets.push({ reps: last ? last.reps : null, weight: last ? last.weight : null, completed: false });
  saveActive();
  render();
}

function removeLastSet(ei) {
  const ex = state.activeWorkout.exercises[ei];
  if (ex.sets.length <= 1) return;
  ex.sets.pop();
  saveActive();
  render();
}

function setField(ei, si, field, val) {
  state.activeWorkout.exercises[ei].sets[si][field] = val !== '' ? parseFloat(val) : null;
  saveActive();
}

function toggleSet(ei, si) {
  const set = state.activeWorkout.exercises[ei].sets[si];
  set.completed = !set.completed;
  saveActive();
  // Targeted DOM update to avoid losing input focus
  const row = document.querySelector(`.set-row[data-ei="${ei}"][data-si="${si}"]`);
  if (row) row.classList.toggle('set-completed', set.completed);
  const btn = row && row.querySelector('.set-check');
  if (btn) btn.classList.toggle('set-check-done', set.completed);
  updateProgressBar();
}

function updateProgressBar() {
  const w = state.activeWorkout;
  if (!w) return;
  const done = w.exercises.reduce((n, ex) => n + ex.sets.filter(s => s.completed).length, 0);
  const total = w.exercises.reduce((n, ex) => n + ex.sets.length, 0);
  const pct = total ? Math.round((done / total) * 100) : 0;
  const fill = document.getElementById('wp-fill');
  const text = document.getElementById('wp-text');
  if (fill) fill.style.width = pct + '%';
  if (text) text.textContent = `${done}/${total} sets completed`;
}

function updateWorkoutName(name) {
  if (state.activeWorkout) { state.activeWorkout.name = name; saveActive(); }
}

function finishWorkout() {
  const w = state.activeWorkout;
  if (!w) return;
  if (w.exercises.length === 0 && !confirm('No exercises logged. Finish anyway?')) return;
  const finished = { ...w, date: todayStr(), endTime: Date.now(), duration: Math.round((Date.now() - w.startTime) / 1000) };
  state.workouts.push(finished);
  state.workouts.sort((a, b) => a.date.localeCompare(b.date));
  state.activeWorkout = null;
  saveWorkouts(); saveActive(); stopTimer();
  showCompleteModal(finished);
}

function cancelWorkout() {
  if (!confirm('Cancel workout? All progress will be lost.')) return;
  state.activeWorkout = null;
  saveActive(); stopTimer();
  navigate('workout');
}

function prevSetInfo(exId, si) {
  for (let i = state.workouts.length - 1; i >= 0; i--) {
    const ex = state.workouts[i].exercises.find(e => e.id === exId);
    if (ex && ex.sets[si]) {
      const s = ex.sets[si];
      if (s.weight != null && s.reps != null) return `${s.weight}kg &times; ${s.reps}`;
    }
  }
  return '&ndash;';
}

// ============================================================
// TIMER
// ============================================================

function startTimer() {
  stopTimer();
  state.timerRef = setInterval(() => {
    const el = document.getElementById('workout-timer');
    if (el) el.textContent = fmtDuration(elapsed());
  }, 1000);
}

function stopTimer() {
  if (state.timerRef) { clearInterval(state.timerRef); state.timerRef = null; }
}

function elapsed() {
  return state.activeWorkout ? Math.round((Date.now() - state.activeWorkout.startTime) / 1000) : 0;
}

// ============================================================
// WORKOUT COMPLETE MODAL
// ============================================================

function showCompleteModal(w) {
  const sets = w.exercises.reduce((n, ex) => n + ex.sets.length, 0);
  const vol  = workoutVolume(w);
  document.getElementById('modal-title').textContent = 'Workout Complete! 🎉';
  document.getElementById('modal-body').innerHTML = `
<div class="workout-complete">
  <div class="complete-stats">
    <div class="complete-stat">
      <div class="complete-stat-value">${fmtDuration(w.duration)}</div>
      <div class="complete-stat-label">Duration</div>
    </div>
    <div class="complete-stat">
      <div class="complete-stat-value">${w.exercises.length}</div>
      <div class="complete-stat-label">Exercises</div>
    </div>
    <div class="complete-stat">
      <div class="complete-stat-value">${sets}</div>
      <div class="complete-stat-label">Sets</div>
    </div>
    <div class="complete-stat">
      <div class="complete-stat-value">${fmtVol(vol)}<span style="font-size:14px">kg</span></div>
      <div class="complete-stat-label">Volume</div>
    </div>
  </div>
  <button class="btn-primary btn-block" onclick="closeModal(); navigate('dashboard')">Done</button>
</div>`;
  document.getElementById('modal-overlay').classList.remove('hidden');
}

// ============================================================
// HISTORY
// ============================================================

function buildHistory() {
  if (!state.workouts.length) return `
<div class="page">
  <div class="empty-state">
    <div class="empty-icon">📋</div>
    <div class="empty-title">No history yet</div>
    <div class="empty-desc">Completed workouts will appear here.</div>
    <button class="btn-primary" onclick="navigate('workout')">Start Workout</button>
  </div>
</div>`;

  const grouped = {};
  [...state.workouts].reverse().forEach(w => {
    const key = new Date(w.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(w);
  });

  return `
<div class="page history">
  <div class="history-summary">
    <span><strong>${state.workouts.length}</strong> total workouts</span>
    <span><strong>${calcWeeklyCount()}</strong> this week</span>
  </div>
  ${Object.entries(grouped).map(([month, list]) => `
  <div class="section">
    <div class="section-title history-month">${month}</div>
    ${list.map(w => buildHistoryCard(w)).join('')}
  </div>`).join('')}
</div>`;
}

function buildHistoryCard(w) {
  const expanded = state.expandedWorkout === w.id;
  return `
<div class="card history-card${expanded ? ' expanded' : ''}" onclick="toggleExpand('${w.id}')">
  <div class="history-card-header">
    <div>
      <div class="history-card-name">${esc(w.name)}</div>
      <div class="history-card-date">${fmtDateLong(w.date)}</div>
    </div>
    <div class="history-card-right">
      <div class="history-card-duration">${fmtDuration(w.duration)}</div>
      <span class="expand-icon">${expanded ? '▲' : '▼'}</span>
    </div>
  </div>
  ${expanded ? `
  <div class="history-card-detail">
    <div class="history-card-stats">
      <span>💪 ${w.exercises.length} exercises</span>
      <span>📊 ${w.exercises.reduce((n,e)=>n+e.sets.length,0)} sets</span>
      <span>⚡ ${fmtVol(workoutVolume(w))} kg</span>
    </div>
    ${w.exercises.map(ex => `
    <div class="history-exercise">
      <div class="history-exercise-name">${esc(ex.name)}</div>
      <div class="history-sets">
        ${ex.sets.map(s => `<span class="history-set-chip">${s.weight ?? 0}kg &times; ${s.reps ?? 0}</span>`).join('')}
      </div>
    </div>`).join('')}
    <button class="btn-danger-ghost btn-sm" style="margin-top:8px" onclick="deleteWorkout('${w.id}', event)">Delete Workout</button>
  </div>` : ''}
</div>`;
}

function toggleExpand(id) {
  state.expandedWorkout = state.expandedWorkout === id ? null : id;
  render();
}

function deleteWorkout(id, event) {
  event.stopPropagation();
  if (!confirm('Delete this workout?')) return;
  state.workouts = state.workouts.filter(w => w.id !== id);
  if (state.expandedWorkout === id) state.expandedWorkout = null;
  saveWorkouts(); render();
}

// ============================================================
// EXERCISES
// ============================================================

function buildExercises() {
  const list = EXERCISES.filter(ex => {
    const catOk = state.exerciseFilter === 'All' || ex.category === state.exerciseFilter;
    const q = state.exerciseSearch.toLowerCase();
    const searchOk = !q || ex.name.toLowerCase().includes(q) || ex.muscles.some(m => m.toLowerCase().includes(q));
    return catOk && searchOk;
  });

  return `
<div class="page exercises">
  <div class="search-bar">
    <input class="search-input" type="text" placeholder="Search exercises or muscles&hellip;"
      value="${esc(state.exerciseSearch)}"
      oninput="updateExSearch(this.value)" />
  </div>
  <div class="category-tabs">
    ${CATEGORIES.map(c => `<button class="cat-tab${state.exerciseFilter===c?' active':''}" onclick="setExFilter('${c}')">${c}</button>`).join('')}
  </div>
  <div class="exercises-grid">
    ${list.length === 0 ? '<div class="empty-state-sm">No exercises found</div>' : ''}
    ${list.map(ex => `
    <div class="card exercise-lib-card">
      <div class="exercise-lib-cat-dot" style="background:${CAT_COLORS[ex.category]||'#888'}"></div>
      <div class="exercise-lib-content">
        <div class="exercise-lib-name">${esc(ex.name)}</div>
        <div class="exercise-lib-cat">${ex.category}</div>
        <div class="exercise-lib-muscles">${ex.muscles.join(', ')}</div>
      </div>
    </div>`).join('')}
  </div>
</div>`;
}

function setExFilter(cat)      { state.exerciseFilter = cat;  render(); }
function updateExSearch(val)   { state.exerciseSearch = val;  render(); }

// ============================================================
// PROFILE
// ============================================================

function buildProfile() {
  const p = state.profile;
  return `
<div class="page profile">
  <div class="profile-avatar">
    <div class="avatar-circle">${p.name ? esc(p.name[0].toUpperCase()) : '?'}</div>
  </div>
  <div class="profile-stats">
    <div class="pstat"><div class="pstat-val">${state.workouts.length}</div><div class="pstat-lbl">Workouts</div></div>
    <div class="pstat"><div class="pstat-val">${calcStreak()}</div><div class="pstat-lbl">Streak</div></div>
    <div class="pstat"><div class="pstat-val">${calcWeeklyCount()}</div><div class="pstat-lbl">This Week</div></div>
  </div>

  <div class="section">
    <div class="section-title" style="margin-bottom:10px">Personal Info</div>
    <div class="card form-card">
      <div class="form-group">
        <label class="form-label">Name</label>
        <input class="form-input" type="text" id="p-name" value="${esc(p.name||'')}" placeholder="Your name" />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Weight (kg)</label>
          <input class="form-input" type="number" id="p-weight" value="${p.weight||''}" placeholder="70" />
        </div>
        <div class="form-group">
          <label class="form-label">Height (cm)</label>
          <input class="form-input" type="number" id="p-height" value="${p.height||''}" placeholder="175" />
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-title" style="margin-bottom:10px">Goals</div>
    <div class="card form-card">
      <div class="form-group">
        <label class="form-label">Primary Goal</label>
        <select class="form-input" id="p-goal">
          ${GOALS.map(g => `<option${p.goal===g?' selected':''}>${esc(g)}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Workouts Per Week</label>
        <div class="weekly-goal-picker">
          ${[2,3,4,5,6,7].map(n => `<button class="goal-btn${p.weeklyGoal===n?' active':''}" onclick="setWeeklyGoal(${n})">${n}</button>`).join('')}
        </div>
      </div>
    </div>
  </div>

  <button class="btn-primary btn-block" onclick="saveProfileData()">Save Profile</button>

  ${state.workouts.length ? `
  <div class="danger-zone">
    <button class="btn-danger btn-sm" onclick="clearData()">Reset All Data</button>
  </div>` : ''}
</div>`;
}

function saveProfileData() {
  state.profile = {
    name:       document.getElementById('p-name').value.trim(),
    weight:     document.getElementById('p-weight').value,
    height:     document.getElementById('p-height').value,
    goal:       document.getElementById('p-goal').value,
    weeklyGoal: state.profile.weeklyGoal || 4,
  };
  saveProfile();
  showToast('Profile saved!');
  render();
}

function setWeeklyGoal(n) {
  state.profile.weeklyGoal = n;
  saveProfile();
  render();
}

function clearData() {
  if (!confirm('Delete ALL workout data? This cannot be undone.')) return;
  state.workouts = []; state.activeWorkout = null;
  saveWorkouts(); saveActive(); stopTimer();
  render(); showToast('Data cleared');
}

// ============================================================
// EXERCISE PICKER MODAL
// ============================================================

function showExercisePicker() {
  const filter = { cat: 'All', search: '' };

  function renderPicker() {
    const list = EXERCISES.filter(ex => {
      const catOk = filter.cat === 'All' || ex.category === filter.cat;
      const q = filter.search.toLowerCase();
      return catOk && (!q || ex.name.toLowerCase().includes(q));
    });
    document.getElementById('modal-body').innerHTML = `
<div class="modal-search">
  <input class="search-input" type="text" id="picker-q" placeholder="Search exercises&hellip;"
    value="${esc(filter.search)}" oninput="__pickerSearch(this.value)" autofocus />
</div>
<div class="category-tabs modal-cats">
  ${CATEGORIES.map(c => `<button class="cat-tab${filter.cat===c?' active':''}" onclick="__pickerCat('${c}')">${c}</button>`).join('')}
</div>
<div class="picker-list">
  ${list.length === 0 ? '<div style="padding:20px;text-align:center;color:var(--text-dim)">No exercises found</div>' : ''}
  ${list.map(ex => `
  <div class="picker-item" onclick="addExerciseToWorkout('${ex.id}')">
    <div class="picker-item-dot" style="background:${CAT_COLORS[ex.category]||'#888'}"></div>
    <div>
      <div class="picker-item-name">${esc(ex.name)}</div>
      <div class="picker-item-cat">${ex.category} &middot; ${ex.muscles.join(', ')}</div>
    </div>
  </div>`).join('')}
</div>`;
    setTimeout(() => document.getElementById('picker-q')?.focus(), 50);
  }

  window.__pickerSearch = val => { filter.search = val; renderPicker(); };
  window.__pickerCat   = cat => { filter.cat   = cat;  renderPicker(); };

  document.getElementById('modal-title').textContent = 'Add Exercise';
  renderPicker();
  document.getElementById('modal-overlay').classList.remove('hidden');
}

// ============================================================
// MODAL UTILS
// ============================================================

function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
  document.getElementById('modal-body').innerHTML = '';
  document.getElementById('modal-title').textContent = '';
}

document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
});

// ============================================================
// TOAST
// ============================================================

function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(() => { requestAnimationFrame(() => t.classList.add('toast-show')); });
  setTimeout(() => { t.classList.remove('toast-show'); setTimeout(() => t.remove(), 300); }, 2200);
}

// ============================================================
// UTILITIES
// ============================================================

function fmtDuration(s) {
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
  return h > 0 ? `${h}:${pad(m)}:${pad(sec)}` : `${m}:${pad(sec)}`;
}
function pad(n) { return String(n).padStart(2, '0'); }

function todayStr() { return new Date().toISOString().split('T')[0]; }

function fmtDate(ds) {
  const today = todayStr();
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
  const ys = yesterday.toISOString().split('T')[0];
  if (ds === today) return 'Today';
  if (ds === ys)    return 'Yesterday';
  return new Date(ds + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function fmtDateLong(ds) {
  return new Date(ds + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric' });
}

function fmtVol(v) {
  if (v >= 1000) return (v / 1000).toFixed(1) + 'k';
  return String(Math.round(v));
}

function workoutVolume(w) {
  return w.exercises.reduce((t, ex) => t + ex.sets.reduce((s, set) => s + (set.reps || 0) * (set.weight || 0), 0), 0);
}

function timeOfDay() {
  const h = new Date().getHours();
  return h < 12 ? 'morning' : h < 17 ? 'afternoon' : 'evening';
}

function esc(s) {
  return String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

// ============================================================
// INIT
// ============================================================

loadFromStorage();

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => navigate(btn.dataset.tab));
});

navigate('dashboard');
