const records = [
  {
    no: "001",
    date: "2024.02.14",
    place: "A place I still remember clearly",
    title: "seee ! we're cuddling on the grass",
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
    title: "wow , who bought you flowers?",
    note: "Some moments were happy for no special reason. We simply happened to be there together.",
    tone: "blue",
    hash: "7c06ad",
    image: "/memories/memory-02-cropped.png",
    alt: "A sunny day in the park with a bouquet of flowers",
  },
  {
    no: "003",
    date: "2025.01.01",
    place: "The first morning of the year",
    title: "you look pretty with the flowers <3",
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
        <div className="hero-copy">
          <p className="kicker">What I want you to know</p>
          <h1>I love you</h1>
          <p className="lead">
            I believe you will succeed—
            <br />
            in your career, your friendships, and in love.
          </p>
        </div>
        <div className="lyric-image-frame">
          <img
            className="lyric-image-card"
            src="/iris-lyrics-red.png"
            alt="Iris by The Goo Goo Dolls lyric card"
          />
        </div>
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

      </section>

      <section className="statement">
        <div className="dark-polaroid-grid">
          <figure className="dark-polaroid">
            <div className="dark-polaroid-image">
              <img src="/memories/memory-04.jpg" alt="Us taking a mirror selfie together" />
            </div>
            <figcaption>Our first photo!!</figcaption>
            <span aria-hidden="true">★</span>
          </figure>
          <figure className="dark-polaroid">
            <div className="dark-polaroid-image">
              <img src="/memories/memory-05.jpg" alt="Us sitting together at the cinema" />
            </div>
            <figcaption>Movieeeee</figcaption>
            <span aria-hidden="true">★</span>
          </figure>
          <figure className="dark-polaroid">
            <div className="dark-polaroid-image">
              <img src="/memories/memory-06.jpg" alt="A sunny moment on the bus" />
            </div>
            <figcaption>My fav pic of you</figcaption>
            <span aria-hidden="true">★</span>
          </figure>
        </div>
      </section>

      <section className="history" id="log">
        <article className="letter-page">
          <p className="letter-copy">
            <span className="drop-cap">H</span>eyyy, if you miss me, you can call me whenever you
            want! If you feel stuck in life, remember that I’m the one who always believes in you.
            Don’t doubt yourself because of one tiny mistake or some shitty people. No matter what,
            I’ll always support you!!
          </p>
        </article>
      </section>

      <footer>
        <span>OUR MEMORIES / PRIVATE ARCHIVE</span>
        <p>Preserving what happened, without defining what has not.</p>
      </footer>
    </main>
  );
}
