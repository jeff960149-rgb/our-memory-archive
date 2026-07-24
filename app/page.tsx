const records = [
  {
    no: "001",
    date: "2024.02.14",
    place: "A place I still remember clearly",
    title: "The day we laughed for hours",
    note: "A photograph holds the light—and sometimes the things we did not know how to say.",
    tone: "warm",
    hash: "a14f2e",
    image: "/memories/memory-01.png",
    alt: "A close selfie of us together in the park",
  },
  {
    no: "002",
    date: "2024.07.06",
    place: "Somewhere along the way",
    title: "A road we never planned",
    note: "Some moments were happy for no special reason. We simply happened to be there together.",
    tone: "blue",
    hash: "7c06ad",
    image: "/memories/memory-02.png",
    alt: "A sunny day in the park with a bouquet of flowers",
  },
  {
    no: "003",
    date: "2025.01.01",
    place: "The first morning of the year",
    title: "A morning we welcomed together",
    note: "Not a promise about the future. Just the truth that, in that moment, we stood side by side.",
    tone: "gray",
    hash: "0101be",
    image: "/memories/memory-03.png",
    alt: "Standing in the sunshine with flowers",
  },
];

const log = [
  { date: "2025.01.01", title: "Saved the first photograph of the year", hash: "0101be" },
  { date: "2024.07.06", title: "Recorded the small things along the way", hash: "7c06ad" },
  { date: "2024.02.14", title: "Placed this day in the archive", hash: "a14f2e" },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-index">
          <span>COLLECTION / 01</span>
          <span>STATUS / PRESERVED</span>
        </div>
        <div className="hero-copy">
          <p className="kicker">What I want you to know</p>
          <h1>I love you</h1>
          <p className="lead">
            I believe you will succeed—
            <br />
            in your career, your friendships, and in love.
          </p>
        </div>
        <img
          className="lyric-image-card"
          src="/iris-lyrics.png"
          alt="Iris by The Goo Goo Dolls lyric card"
        />
      </section>

      <section className="records" id="records">
        <div className="section-title">
          <div>
            <h2>Memories</h2>
          </div>
        </div>

        <div className="record-grid">
          {records.map((record) => (
            <article className="record-card" key={record.hash}>
              <div className={`record-image ${record.tone}`}>
                <img src={record.image} alt={record.alt} />
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

        {[2, 3, 4].map((page) => (
          <div className="memory-page" key={page}>
            <p className="memory-page-label">MEMORY PAGE {String(page).padStart(2, "0")}</p>
            <div className="memory-page-grid">
              {Array.from({ length: 3 }, (_, index) => {
                const photoNumber = (page - 1) * 3 + index + 1;
                return (
                  <div className="empty-memory" key={photoNumber}>
                    <span>PHOTO / {String(photoNumber).padStart(3, "0")}</span>
                    <strong>Add a memory</strong>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      <section className="statement">
        <p className="statement-label">ARCHIVE NOTE</p>
        <blockquote>
          “Some relationships change. Some people move toward different places.
          <br />
          But the time we treated each other with care does not need to be erased.”
        </blockquote>
        <p className="statement-body">
          Preserving a memory does not mean asking a relationship to remain unchanged forever.
          <br />
          It only means admitting that these days happened—and that they mattered to me.
        </p>
      </section>

      <section className="history" id="log">
        <div className="history-heading">
          <div>
            <p>VERSION HISTORY</p>
            <h2>What time left behind</h2>
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
        <span>OUR MEMORIES / PRIVATE ARCHIVE</span>
        <p>Preserving what happened, without defining what has not.</p>
      </footer>
    </main>
  );
}
