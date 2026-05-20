const retreatInfo = {
  hotelName: "中研院南院學人會館",
  hotelAddress: "台南市歸仁區歸仁十三路一段100號，中研院南部院區學人會館",
  meetingName: "研究大樓 1F 110 會議室",
  meetingAddress: "台南市歸仁區歸仁十三路一段100號，中研院南部院區研究大樓",
  organizerNote: "請大家出發前確認高鐵車票、住宿房型、報告檔案與個人物品。"
};

const tripDays = [
  {
    weekday: "MON",
    date: "08",
    month: "06月",
    title: "抵達與第一天會議",
    area: "台北 to Tainan · 研究大樓 110",
    city: "中研院南院",
    mapQuery: "中研院南部院區 研究大樓 110",
    noteKey: "tainan-retreat-note-d1",
    items: [
      { time: "08:30-10:00", title: "Taipei to Tainan", place: "建議搭乘上午高鐵抵達台南", tags: ["交通"] },
      { time: "10:00-12:30", title: "Eunice", place: retreatInfo.meetingName, tags: ["會議"] },
      { time: "12:30-13:00", title: "Lunch", place: "午餐", tags: ["午餐"] },
      { time: "13:00-15:30", title: "YuFu", place: retreatInfo.meetingName, tags: ["會議"] },
      { time: "15:30-15:40", title: "10min Break", place: "短暫休息", tags: ["休息"] },
      { time: "15:40-17:00", title: "JD", place: retreatInfo.meetingName, tags: ["會議"] },
      { time: "17:00-18:00", title: "Free time", place: "自由時間", tags: ["自由"] },
      { time: "18:00-21:00", title: "Dinner and discussion/leisure", place: "晚餐與討論 / leisure", tags: ["晚餐", "交流"] }
    ]
  },
  {
    weekday: "TUE",
    date: "09",
    month: "06月",
    title: "第二天會議與活動",
    area: "YaPing · Lung · MengTing · Lab Activity",
    city: "研究大樓 110",
    mapQuery: "中研院南部院區 研究大樓 110",
    noteKey: "tainan-retreat-note-d2",
    items: [
      { time: "08:30-10:00", title: "YaPing", place: retreatInfo.meetingName, tags: ["會議"] },
      { time: "10:00-11:00", title: "Lung", place: retreatInfo.meetingName, tags: ["會議"] },
      { time: "11:00-12:00", title: "MengTing", place: retreatInfo.meetingName, tags: ["會議"] },
      { time: "12:00-13:00", title: "Lunch：捷食藝", place: "午餐", tags: ["午餐"] },
      { time: "13:00-18:00", title: "Lab Activity", place: "實驗室活動", tags: ["活動"] },
      { time: "18:00-21:00", title: "Dinner：澄三酒食", place: "晚餐", tags: ["晚餐"] },
      { time: "21:00-", title: "Free time", place: "自由時間", tags: ["自由"] }
    ]
  },
  {
    weekday: "WED",
    date: "10",
    month: "06月",
    title: "第三天會議與返程",
    area: "YuYing · Charleen · Meg3 · JAC · Go Home",
    city: "研究大樓 110",
    mapQuery: "中研院南部院區 研究大樓 110",
    noteKey: "tainan-retreat-note-d3",
    items: [
      { time: "08:30-10:00", title: "YuYing", place: retreatInfo.meetingName, tags: ["會議"] },
      { time: "10:00-11:00", title: "Charleen", place: retreatInfo.meetingName, tags: ["會議"] },
      { time: "11:00-12:00", title: "Meg3", place: retreatInfo.meetingName, tags: ["會議"] },
      { time: "12:00-13:00", title: "Lunch", place: "午餐", tags: ["午餐"] },
      { time: "13:00-15:30", title: "JAC", place: retreatInfo.meetingName, tags: ["會議"] },
      { time: "15:30-", title: "Go Home", place: "返程", tags: ["交通"] }
    ]
  }
];

const scheduleRows = [
  "08:30-09:00",
  "09:00-10:00",
  "10:00-11:00",
  "11:00-12:00",
  "12:00-12:30",
  "12:30-13:00",
  "13:00-14:00",
  "14:00-15:00",
  "15:00-15:30",
  "15:30-16:00",
  "16:00-17:00",
  "17:00-18:00",
  "18:00-21:00",
  "21:00-"
];

const scheduleColumns = [
  { date: "6/8 Mon.", key: "d1" },
  { date: "6/9 Tue.", key: "d2" },
  { date: "6/10 Wed.", key: "d3" }
];

const scheduleBlocks = [
  { day: 0, start: 1, end: 3, title: "Taipei to Tainan", detail: "北部出發，前往台南", tone: "traffic" },
  { day: 0, start: 3, end: 6, title: "Eunice", detail: "研究大樓 1F 110 會議室", tone: "work" },
  { day: 0, start: 6, end: 7, title: "Lunch", detail: "午餐", tone: "food" },
  { day: 0, start: 7, end: 10, title: "YuFu", detail: "研究大樓 1F 110 會議室", tone: "work" },
  { day: 0, start: 10, end: 11, title: "10min Break", detail: "15:30-15:40", tone: "rest" },
  { day: 0, start: 11, end: 12, title: "JD", detail: "15:40-17:00 · 研究大樓 110", tone: "work" },
  { day: 0, start: 12, end: 13, title: "Free time", detail: "自由時間", tone: "rest" },
  { day: 0, start: 13, end: 15, title: "Dinner and discussion/leisure", detail: "晚餐、討論與休閒", tone: "food" },
  { day: 1, start: 1, end: 3, title: "YaPing", detail: "研究大樓 1F 110 會議室", tone: "work" },
  { day: 1, start: 3, end: 4, title: "Lung", detail: "研究大樓 1F 110 會議室", tone: "work" },
  { day: 1, start: 4, end: 5, title: "MengTing", detail: "研究大樓 1F 110 會議室", tone: "work" },
  { day: 1, start: 5, end: 7, title: "Lunch：捷食藝", detail: "午餐", tone: "food" },
  { day: 1, start: 7, end: 13, title: "Lab Activity", detail: "實驗室活動", tone: "activity" },
  { day: 1, start: 13, end: 14, title: "Dinner：澄三酒食", detail: "晚餐", tone: "food" },
  { day: 1, start: 14, end: 15, title: "Free time", detail: "自由時間", tone: "rest" },
  { day: 2, start: 1, end: 3, title: "YuYing", detail: "研究大樓 1F 110 會議室", tone: "work" },
  { day: 2, start: 3, end: 4, title: "Charleen", detail: "研究大樓 1F 110 會議室", tone: "work" },
  { day: 2, start: 4, end: 5, title: "Meg3", detail: "研究大樓 1F 110 會議室", tone: "work" },
  { day: 2, start: 5, end: 7, title: "Lunch", detail: "午餐", tone: "food" },
  { day: 2, start: 7, end: 10, title: "JAC", detail: "研究大樓 1F 110 會議室", tone: "work" },
  { day: 2, start: 10, end: 15, title: "Go Home", detail: "返程", tone: "traffic" }
];

const mapPlaces = [
  {
    type: "學人會館",
    name: retreatInfo.hotelName,
    address: retreatInfo.hotelAddress,
    query: `${retreatInfo.hotelAddress} ${retreatInfo.hotelName}`,
    note: "住宿地點在園區圖上方，標示為學人會館 Scholars Residence。"
  },
  {
    type: "會議室",
    name: retreatInfo.meetingName,
    address: retreatInfo.meetingAddress,
    query: `${retreatInfo.meetingAddress} ${retreatInfo.meetingName}`,
    note: "主要會議地點在研究大樓 1F，園區圖下方標示 110 會議室。"
  }
];

const campusSpots = [
  { code: "7", title: "研究大樓 1F 110 會議室", text: "JAC retreat 主要會議地點。抵達南院後依園區指標前往研究大樓即可。", tags: ["會議"] },
  { code: "16", title: "學人會館 1F", text: "住宿地點在園區圖上方，標示為 Scholars Residence。", tags: ["住宿"] }
];

const trains = [
  { direction: "南港 → 台南", no: "0803", from: "南港 06:15", to: "台南 08:26", note: "行車 2:11，自由座 9-12。" },
  { direction: "南港 → 台南", no: "0603", from: "南港 06:40", to: "台南 08:37", note: "行車 1:57，自由座 9-12。" },
  { direction: "南港 → 台南", no: "0805", from: "南港 07:00", to: "台南 09:11", note: "行車 2:11，自由座 9-12。" },
  { direction: "南港 → 台南", no: "0609", from: "南港 07:35", to: "台南 09:32", note: "行車 1:57，自由座 9-12。" },
  { direction: "南港 → 台南", no: "0205", from: "南港 07:40", to: "台南 09:17", note: "行車 1:37，自由座 10-12。" },
  { direction: "南港 → 台南", no: "1305", from: "南港 07:50", to: "台南 09:45", note: "行車 1:55，自由座 10-12。" },
  { direction: "台北 → 左營", no: "0803", from: "台北 06:26", to: "左營 08:40", note: "行車 2:14，自由座 9-12。" },
  { direction: "台北 → 左營", no: "0203", from: "台北 06:30", to: "左營 08:15", note: "行車 1:45，自由座 10-12。" },
  { direction: "台北 → 左營", no: "1103", from: "台北 06:46", to: "左營 08:20", note: "行車 1:34，自由座 10-12。" },
  { direction: "台北 → 左營", no: "0603", from: "台北 06:51", to: "左營 08:50", note: "行車 1:59，自由座 9-12。" },
  { direction: "台北 → 左營", no: "0805", from: "台北 07:11", to: "左營 09:25", note: "行車 2:14，自由座 9-12。" },
  { direction: "台北 → 左營", no: "0109", from: "台北 07:31", to: "左營 09:05", note: "行車 1:34，自由座 10-12。" },
  { direction: "台北 → 左營", no: "0609", from: "台北 07:46", to: "左營 09:45", note: "行車 1:59，自由座 9-12。" },
  { direction: "台北 → 左營", no: "0205", from: "台北 07:51", to: "左營 09:30", note: "行車 1:39，自由座 10-12。" }
];

const rooms = [
  { type: "單床房", size: "7.26 坪", price: "1,300 元", note: "房型介紹圖中標示為單床房。" },
  { type: "雙床房", size: "9.32 坪", price: "1,600 元", note: "房型介紹圖中標示為雙床房。" },
  { type: "無障礙房", size: "雙床房", price: "1,600 元", note: "收費標準列於學人會館資訊。" }
];

const mealForms = [
  {
    day: "6/8 Mon.",
    title: "Day 1 訂餐表單",
    meal: "Lunch / Dinner",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSem88mHbhIEAgjsYBTInL3zDEKk5Shd6_Io-tAf2cQbydEbrQ/viewform?usp=header"
  },
  {
    day: "6/9 Tue.",
    title: "Day 2 訂餐表單",
    meal: "Lunch：捷食藝 · Dinner：澄三酒食",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfL8t5Y9Dw69sY_5Jc0UnBmcNlfgQz4bg4QfzEMOO5t6MxCIg/viewform?usp=header"
  },
  {
    day: "6/10 Wed.",
    title: "Day 3 訂餐表單",
    meal: "Lunch",
    url: "https://docs.google.com/forms/d/e/1FAIpQLScQ5zP0Usi_0-twoXHMNwoFlHXsWr9wegC8NcQNvb1xbIq2wQ/viewform?usp=header"
  }
];

const lodgingInfo = [
  { label: "入住", value: "每日住宿時間為下午 3:00 以後" },
  { label: "退房", value: "上午 11:00 以前；逾時退房每小時加收費用，下午 5:00 後收一日房費" },
  { label: "早餐", value: "本會館住宿不含早餐" },
  { label: "單床房", value: "7.26 坪，1,300 元" },
  { label: "雙床房", value: "9.32 坪，1,600 元" },
  { label: "無障礙房", value: "雙床，1,600 元" }
];

const facilities = [
  { title: "免費寬頻上網", text: "客房提供免費寬頻上網，建議需要報告者仍準備個人熱點備用。", tags: ["網路"] },
  { title: "客房設備", text: "備有小冰箱與 50 吋大電視。", tags: ["住宿"] },
  { title: "環保備品", text: "未提供一次性備品，請住宿人自行攜帶牙刷、梳子、刮鬍刀、浴帽及紙拖鞋。", tags: ["住宿"] },
  { title: "會議地點", text: "會議集中在研究大樓 1F 110 會議室，請依園區圖從研究大樓入口前往。", tags: ["會議"] }
];

const state = {
  activeDay: 0,
  activeTab: "plans",
  activeMap: 0
};

const dateCards = document.querySelector("#dateCards");
const progressFill = document.querySelector("#progressFill");
const progressDot = document.querySelector("#progressDot");
const dayCount = document.querySelector("#dayCount");
const todayPreview = document.querySelector("#todayPreview");
const selectedDayTitle = document.querySelector("#selectedDayTitle");
const timeline = document.querySelector("#timeline");
const planLocation = document.querySelector("#planLocation");
const dayNote = document.querySelector("#dayNote");
const googleMap = document.querySelector("#googleMap");
const mapSwitch = document.querySelector("#mapSwitch");
const mapMeta = document.querySelector("#mapMeta");
const googleMapLink = document.querySelector("#googleMapLink");
const trainList = document.querySelector("#trainList");
const lodgingName = document.querySelector("#lodgingName");
const lodgingInfoEl = document.querySelector("#lodgingInfo");
const facilityList = document.querySelector("#facilityList");
const scheduleBoard = document.querySelector("#scheduleBoard");
const campusGrid = document.querySelector("#campusGrid");
const roomList = document.querySelector("#roomList");
const mealList = document.querySelector("#mealList");
const mealPreview = document.querySelector("#mealPreview");

function tagClass(tag) {
  if (["早餐", "午餐", "晚餐", "餐飲"].includes(tag)) return "food";
  if (["交通", "集合"].includes(tag)) return "traffic";
  if (["會議", "討論", "工作坊"].includes(tag)) return "work";
  return "";
}

function renderDates() {
  dateCards.innerHTML = tripDays
    .map((day, index) => {
      const active = index === state.activeDay ? " active" : "";
      return `
        <button class="date-card${active}" type="button" data-day="${index}">
          <small>${day.weekday} <sup>D${index + 1}</sup></small>
          <strong>${day.date}</strong>
          <span>${day.month}</span>
        </button>
      `;
    })
    .join("");
}

function renderDay() {
  const day = tripDays[state.activeDay];
  const percent = (state.activeDay / (tripDays.length - 1)) * 100;
  progressFill.style.width = `${percent}%`;
  progressDot.style.left = `${percent}%`;
  dayCount.textContent = `Day ${state.activeDay + 1} / ${tripDays.length}`;
  planLocation.textContent = day.title;
  selectedDayTitle.textContent = `Day ${state.activeDay + 1}`;
  todayPreview.innerHTML = day.items
    .map(item => renderCompactItem(item))
    .join("");
  timeline.innerHTML = day.items.map(item => renderTimelineItem(item)).join("");
  dayNote.value = localStorage.getItem(day.noteKey) || "";
  renderDates();
}

function renderCompactItem(item) {
  return `
    <article class="mini-item">
      <span class="time">${item.time}</span>
      <div class="item-main">
        <strong>${item.title}</strong>
        <p>${item.place}</p>
      </div>
    </article>
  `;
}

function renderTimelineItem(item) {
  const tags = item.tags
    .map(tag => `<span class="tag ${tagClass(tag)}">${tag}</span>`)
    .join("");
  return `
    <article class="timeline-item">
      <span class="time">${item.time}</span>
      <div class="item-main">
        <strong>${item.title}</strong>
        <p>${item.place}</p>
        <div class="tags">${tags}</div>
      </div>
    </article>
  `;
}

function renderMap() {
  mapSwitch.innerHTML = mapPlaces
    .map((place, index) => `
      <button class="${index === state.activeMap ? "active" : ""}" type="button" data-map="${index}">
        ${place.type}
      </button>
    `)
    .join("");

  const place = mapPlaces[state.activeMap];
  googleMap.src = `https://www.google.com/maps?q=${encodeURIComponent(place.query)}&output=embed`;
  googleMapLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.query)}`;
  mapMeta.innerHTML = `
    <div>
      <span>地點</span>
      <strong>${place.name}</strong>
    </div>
    <div>
      <span>地址</span>
      <strong>${place.address}</strong>
    </div>
    <div>
      <span>提醒</span>
      <strong>${place.note}</strong>
    </div>
  `;
}

function renderScheduleBoard() {
  const headers = scheduleColumns
    .map((day, index) => `<div class="schedule-head" style="grid-column:${index + 2}">${day.date}</div>`)
    .join("");

  const rowLabels = scheduleRows
    .map((time, index) => `<div class="schedule-time" style="grid-row:${index + 2}">${time}</div>`)
    .join("");

  const rowGuides = scheduleRows
    .map((_, index) => `<div class="schedule-guide" style="grid-row:${index + 2}; grid-column:2 / 5"></div>`)
    .join("");

  const blocks = scheduleBlocks
    .map(block => `
      <section
        class="schedule-block ${block.tone}"
        style="grid-column:${block.day + 2}; grid-row:${block.start + 1} / ${block.end + 1}"
      >
        <strong>${block.title}</strong>
        <span>${block.detail}</span>
      </section>
    `)
    .join("");

  scheduleBoard.innerHTML = `
    <div class="schedule-corner">Time</div>
    ${headers}
    ${rowGuides}
    ${rowLabels}
    ${blocks}
  `;
}

function renderCampus() {
  campusGrid.innerHTML = campusSpots
    .map(spot => {
      const tags = spot.tags.map(tag => `<span class="tag ${tagClass(tag)}">${tag}</span>`).join("");
      return `
        <article class="campus-card">
          <span class="spot-code">${spot.code}</span>
          <div>
            <h3>${spot.title}</h3>
            <p>${spot.text}</p>
            <div class="tags">${tags}</div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderTrains() {
  const groups = [
    { title: "南港出發", hint: "南港 → 台南", keyword: "南港" },
    { title: "台北出發", hint: "台北 → 左營", keyword: "台北" }
  ];

  trainList.innerHTML = groups
    .map(group => {
      const groupTrains = trains.filter(train => train.direction.startsWith(group.keyword));
      return `
        <section class="train-section">
          <div class="train-section-title">
            <h3>${group.title}</h3>
            <span>${group.hint}</span>
          </div>
          <div class="transport-grid">
            ${groupTrains.map(train => `
              <article class="train-card">
                <div>
                  <span>${train.direction}</span>
                  <strong>${train.no}</strong>
                </div>
                <p>${train.from} → ${train.to}</p>
                <small>${train.note}</small>
              </article>
            `).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function renderMealForms() {
  const cards = mealForms
    .map(form => {
      const hasUrl = Boolean(form.url);
      const action = hasUrl
        ? `<a class="meal-action" href="${form.url}" target="_blank" rel="noreferrer">填寫表單</a>`
        : `<span class="meal-action disabled">連結待補</span>`;

      return `
        <article class="meal-card">
          <span>${form.day}</span>
          <strong>${form.title}</strong>
          <p>${form.meal}</p>
          ${action}
        </article>
      `;
    })
    .join("");

  mealList.innerHTML = cards;
  mealPreview.innerHTML = cards;
}

function renderLodging() {
  lodgingName.textContent = retreatInfo.hotelName;
  roomList.innerHTML = rooms
    .map(room => `
      <article class="room-card">
        <span>${room.type}</span>
        <strong>${room.price}</strong>
        <p>${room.size}</p>
        <small>${room.note}</small>
      </article>
    `)
    .join("");

  lodgingInfoEl.innerHTML = lodgingInfo
    .map(item => `
      <article class="info-item">
        <span>${item.label}</span>
        <strong>${item.value}</strong>
      </article>
    `)
    .join("");

  facilityList.innerHTML = facilities
    .map(item => {
      const tags = item.tags.map(tag => `<span class="tag ${tagClass(tag)}">${tag}</span>`).join("");
      return `
        <article class="facility-card">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
          <div class="tags">${tags}</div>
        </article>
      `;
    })
    .join("");
}

function setTab(tab) {
  state.activeTab = tab;
  document.querySelectorAll(".panel").forEach(panel => panel.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("active"));

  if (tab === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.querySelector('[data-tab="plans"]').classList.add("active");
    return;
  }

  const targetPanel = document.querySelector(`#${tab}Panel`);
  targetPanel.classList.add("active");
  document.querySelector(`[data-tab="${tab}"]`)?.classList.add("active");
  requestAnimationFrame(() => {
    const top = targetPanel.getBoundingClientRect().top + window.scrollY - 18;
    window.scrollTo({ top, behavior: "smooth" });
  });
}

function closeMobileMenu() {
  document.querySelector(".mobile-menu")?.removeAttribute("open");
}

document.addEventListener("click", event => {
  const dayButton = event.target.closest("[data-day]");
  if (dayButton) {
    state.activeDay = Number(dayButton.dataset.day);
    renderDay();
  }

  const tabButton = event.target.closest("[data-tab]");
  if (tabButton) {
    setTab(tabButton.dataset.tab);
    closeMobileMenu();
  }

  const jumpButton = event.target.closest("[data-tab-jump]");
  if (jumpButton) {
    setTab(jumpButton.dataset.tabJump);
    closeMobileMenu();
  }

  const mapButton = event.target.closest("[data-map]");
  if (mapButton) {
    state.activeMap = Number(mapButton.dataset.map);
    renderMap();
  }
});

document.querySelector("#prevDay").addEventListener("click", () => {
  state.activeDay = Math.max(0, state.activeDay - 1);
  renderDay();
});

document.querySelector("#nextDay").addEventListener("click", () => {
  state.activeDay = Math.min(tripDays.length - 1, state.activeDay + 1);
  renderDay();
});

dayNote.addEventListener("input", () => {
  localStorage.setItem(tripDays[state.activeDay].noteKey, dayNote.value);
});

renderDay();
renderScheduleBoard();
renderMap();
renderCampus();
renderTrains();
renderMealForms();
renderLodging();
