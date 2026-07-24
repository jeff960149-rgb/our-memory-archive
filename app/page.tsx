const memories = [
  {
    date: "2024.02.14",
    title: "第一次一起過情人節",
    note: "把平凡的一天，過成了我們最喜歡的樣子。",
    hash: "a14f2e",
    tone: "sunset",
    rotate: "-3deg",
  },
  {
    date: "2024.07.06",
    title: "說走就走的小旅行",
    note: "迷路也沒關係，因為身邊的人是你。",
    hash: "7c06ad",
    tone: "ocean",
    rotate: "2.5deg",
  },
  {
    date: "2025.01.01",
    title: "新年的第一張合照",
    note: "新的年份，繼續把喜歡寫進每一天。",
    hash: "0101be",
    tone: "night",
    rotate: "-1.5deg",
  },
];

const commits = [
  { date: "TODAY", title: "又多愛你一點", hash: "f0revr" },
  { date: "365 DAYS", title: "收藏一整年的小事", hash: "365luv" },
  { date: "FIRST COMMIT", title: "我們的故事開始了", hash: "1stday" },
];

export default function Home() {
  return (
    <main>
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <a className="repo" href="#top" aria-label="回到首頁">
          <span className="repo-heart">♥</span>
          <span>our-love / memories</span>
        </a>
        <nav aria-label="網站導覽">
          <a href="#memories">回憶</a>
          <a href="#timeline">時間軸</a>
          <span className="private-badge">● private</span>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">A LOVE STORY, VERSIONED FOREVER</p>
          <h1>
            我們的
            <br />
            <em>回憶庫</em>
          </h1>
          <p className="intro">
            有些瞬間太珍貴，不能只留在手機相簿裡。
            <br />
            所以我把每一次心動，都好好 commit 下來。
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#memories">
              打開回憶 <span>↘</span>
            </a>
            <span className="branch">⑂ main · 27 memories</span>
          </div>
        </div>

        <div className="hero-collage" aria-label="拍立得回憶牆">
          <span className="scribble heart-one">♡</span>
          <span className="scribble heart-two">♥</span>
          <div className="tape tape-one" />
          <article className="polaroid hero-photo photo-one">
            <div className="photo-fill warm">
              <span>OUR FAVORITE DAY</span>
            </div>
            <p>和你在一起的第 365 天 ♡</p>
          </article>
          <article className="polaroid hero-photo photo-two">
            <div className="photo-fill rose">
              <span>JUST US</span>
            </div>
            <p>你笑起來的樣子</p>
          </article>
          <div className="commit-note">
            <span className="status-dot" />
            <div>
              <strong>love updated</strong>
              <small>committed just now</small>
            </div>
          </div>
        </div>
      </section>

      <section className="memories-section" id="memories">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PINNED MEMORIES</p>
            <h2>最捨不得忘記的日子</h2>
          </div>
          <span className="counter">03 / FOREVER</span>
        </div>

        <div className="polaroid-grid">
          {memories.map((memory, index) => (
            <article
              className="memory-polaroid"
              key={memory.hash}
              style={{ "--tilt": memory.rotate } as React.CSSProperties}
            >
              <div className={`memory-image ${memory.tone}`}>
                <span className="memory-number">0{index + 1}</span>
                <span className="tiny-heart">♡</span>
              </div>
              <div className="memory-copy">
                <div className="memory-meta">
                  <time>{memory.date}</time>
                  <code>{memory.hash}</code>
                </div>
                <h3>{memory.title}</h3>
                <p>{memory.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="timeline-section" id="timeline">
        <div className="timeline-note">
          <span className="large-heart">♥</span>
          <p>README.md</p>
          <h2>謝謝你，成為我最喜歡的每一天。</h2>
          <p className="note-body">
            這個網站沒有完成的一天，因為我們還會一起創造很多很多回憶。
          </p>
          <span className="signature">— always yours</span>
        </div>
        <div className="commit-history">
          <p className="eyebrow">COMMIT HISTORY</p>
          {commits.map((commit) => (
            <article className="commit-row" key={commit.hash}>
              <span className="commit-node">♥</span>
              <div>
                <small>{commit.date}</small>
                <h3>{commit.title}</h3>
              </div>
              <code>{commit.hash}</code>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <span>our-love / memories</span>
        <p>Made with <b>♥</b> · last updated today</p>
      </footer>
    </main>
  );
}
