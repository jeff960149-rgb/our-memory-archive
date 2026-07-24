const records = [
  {
    no: "001",
    date: "2024.02.14",
    place: "一個記得很清楚的地方",
    title: "那天，我們一起笑了很久",
    note: "照片會記住光線，也會記住當時沒有說出口的話。",
    tone: "warm",
    hash: "a14f2e",
  },
  {
    no: "002",
    date: "2024.07.06",
    place: "途中",
    title: "一段沒有計畫的路",
    note: "有些快樂沒有特別的原因，只是剛好身邊是彼此。",
    tone: "blue",
    hash: "7c06ad",
  },
  {
    no: "003",
    date: "2025.01.01",
    place: "新年的第一天",
    title: "一起迎接過的清晨",
    note: "不是對未來的保證，只是那一刻，我們確實站在一起。",
    tone: "gray",
    hash: "0101be",
  },
];

const log = [
  { date: "2025.01.01", title: "留下新年的第一張照片", hash: "0101be" },
  { date: "2024.07.06", title: "記錄途中發生的小事", hash: "7c06ad" },
  { date: "2024.02.14", title: "把這一天放進檔案", hash: "a14f2e" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="archive-mark" href="#top">
          <span>ARCHIVE</span>
          <strong>我們的回憶</strong>
        </a>
        <nav aria-label="網站導覽">
          <a href="#records">影像紀錄</a>
          <a href="#log">時間紀錄</a>
          <span className="privacy">PRIVATE COLLECTION</span>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-index">
          <span>COLLECTION / 01</span>
          <span>STATUS / PRESERVED</span>
        </div>
        <div className="hero-copy">
          <p className="kicker">關於我們曾經共享的時間</p>
          <h1>
            我們確實
            <br />
            一起走過
          </h1>
          <p className="lead">
            不替未來命名，
            <br />
            只把已經發生的好好保存。
          </p>
        </div>
        <div className="contact-sheet" aria-label="回憶照片預留位置">
          {Array.from({ length: 12 }, (_, index) => (
            <div className={`frame frame-${(index % 4) + 1}`} key={index}>
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
          ))}
          <div className="sheet-label">
            <span>ROLL 01</span>
            <span>SHARED DAYS</span>
          </div>
        </div>
        <p className="hero-caption">
          這裡不是一封要求答案的情書。它只是一個地方，讓那些真實存在過的日子，不因距離或時間而消失。
        </p>
      </section>

      <section className="records" id="records">
        <div className="section-title">
          <span>01</span>
          <div>
            <p>SELECTED RECORDS</p>
            <h2>被留下來的片段</h2>
          </div>
          <p className="section-note">照片之後可以換成你們真正的影像</p>
        </div>

        <div className="record-grid">
          {records.map((record) => (
            <article className="record-card" key={record.hash}>
              <div className={`record-image ${record.tone}`}>
                <span className="record-number">{record.no}</span>
                <span className="image-placeholder">PHOTO / {record.no}</span>
              </div>
              <div className="record-meta">
                <time>{record.date}</time>
                <span>{record.place}</span>
                <code>{record.hash}</code>
              </div>
              <h3>{record.title}</h3>
              <p>{record.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="statement">
        <p className="statement-label">ARCHIVE NOTE</p>
        <blockquote>
          「有些關係會改變，有些人會走向不同的地方。
          <br />
          但曾經真心對待彼此的時間，不需要被否定。」
        </blockquote>
        <p className="statement-body">
          回憶永存，不代表要求一段關係永遠不變。
          <br />
          它只是承認：這些日子曾經發生，而且對我很重要。
        </p>
      </section>

      <section className="history" id="log">
        <div className="history-heading">
          <div>
            <p>VERSION HISTORY</p>
            <h2>時間留下的紀錄</h2>
          </div>
          <span>archive/main</span>
        </div>
        <div className="log-list">
          {log.map((item, index) => (
            <article className="log-row" key={item.hash}>
              <span className="log-index">{String(index + 1).padStart(2, "0")}</span>
              <time>{item.date}</time>
              <h3>{item.title}</h3>
              <code>{item.hash}</code>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <span>我們的回憶 / PRIVATE ARCHIVE</span>
        <p>保存已經發生的，不預設尚未到來的。</p>
      </footer>
    </main>
  );
}
