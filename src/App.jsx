import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import {
  ArrowLeft,
  Award,
  BookOpen,
  Check,
  Languages,
  Landmark,
  Palette,
  Search,
  Shield,
  Sparkles,
  Swords,
} from "lucide-react";
import { SUBJECTS, WARNING_GUIDANCE, cards } from "./data";

const foundKey = "tapWayangReactFound";
const quizKey = "tapWayangReactQuiz";
const cardById = new Map(cards.map((card) => [card.id, card]));

const filters = [
  { id: "all", label: "Semua" },
  { id: "Tokoh Baik", label: "Tokoh Baik" },
  { id: "Tokoh Jahat", label: "Tokoh Jahat" },
  { id: "found", label: "Dibuka" },
];

const subjectIcons = {
  sejarah: Landmark,
  jawa: Languages,
  seni: Palette,
  ppc: Shield,
};

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function unique(list) {
  return [...new Set(list)];
}

function markFound(id) {
  const found = readJson(foundKey, []);
  if (!found.includes(id)) {
    localStorage.setItem(foundKey, JSON.stringify([...found, id]));
  }
}

function saveQuizScore(id, score) {
  const scores = readJson(quizKey, {});
  scores[id] = Math.max(scores[id] || 0, score);
  localStorage.setItem(quizKey, JSON.stringify(scores));
}

function cardImage(card, type = "cards") {
  return `/assets/${type}/${card.image}`;
}

function factionClass(card) {
  return card.faction === "Tokoh Baik"
    ? "border-teak/20 bg-teak text-white"
    : "border-brick/20 bg-brick text-white";
}

function subjectText(card, subjectId) {
  const copy = {
    sejarah: card.history,
    jawa: `Piwulang: "${card.javanese}" Pesan ini mengajak pembaca memahami nilai tokoh lewat ungkapan Jawa yang singkat dan mudah diingat.`,
    seni: card.art,
    ppc: card.ppc,
  };
  return copy[subjectId];
}

function warningSentence(card, warning) {
  const guide = WARNING_GUIDANCE[warning];
  if (guide) return guide(card.name);
  return `${card.name} mengingatkan pembaca untuk menjauhi ${warning.toLowerCase()} agar keputusan tetap adil, tenang, dan bertanggung jawab.`;
}

function stableShuffle(list, seedText) {
  const seed = [...seedText].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return [...list]
    .map((value, index) => ({
      value,
      rank: (seed * (index + 11) + value.length * 37) % 97,
    }))
    .sort((a, b) => a.rank - b.rank)
    .map((item) => item.value);
}

function quizFor(card) {
  const moralPool = [
    "keserakahan",
    "kepalsuan",
    "balas dendam",
    "tanggung jawab",
    "kejujuran",
    "kebijaksanaan",
    "berpikir kritis",
    "sportivitas",
  ];
  const valueAnswer = card.quizValue;
  const valueOptions = stableShuffle(
    unique([valueAnswer, ...moralPool.filter((item) => item !== valueAnswer)]).slice(0, 4),
    card.id
  );

  return [
    {
      question: `Nilai utama yang bisa dibaca dari ${card.name} adalah...`,
      answer: valueAnswer,
      options: valueOptions,
      feedback: `Benar. Nilai "${valueAnswer}" paling kuat muncul dari kisah ${card.name}.`,
    },
    {
      question: `${card.name} berada dalam kelompok kartu...`,
      answer: card.faction,
      options: stableShuffle(["Tokoh Baik", "Tokoh Jahat", "Punakawan", "Raksasa"], card.name),
      feedback: `${card.name} termasuk ${card.faction}.`,
    },
    {
      question: "Bagian yang paling dekat dengan aspek Seni Budaya / SBD adalah...",
      answer: "visual tokoh, warna, atribut, dan gaya kartu",
      options: stableShuffle(
        [
          "visual tokoh, warna, atribut, dan gaya kartu",
          "alamat website pada browser",
          "jumlah baterai HP",
          "nama folder penyimpanan file",
        ],
        `${card.id}-sbd`
      ),
      feedback: "Seni Budaya terlihat dari rupa, warna, simbol, atribut, dan karakter visual.",
    },
  ];
}

function Layout({ children }) {
  return (
    <div className="min-h-screen text-ink">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/95 text-paper backdrop-blur">
        <div className="mx-auto flex min-h-16 w-[min(1180px,calc(100%-24px))] items-center justify-between gap-4 py-3">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-gold font-black text-zinc-950 shadow-sm">
              TW
            </span>
            <span className="min-w-0">
              <span className="block text-base font-extrabold leading-tight">Tap Wayang</span>
              <span className="block truncate text-xs text-paper/65">Kartu budaya interaktif</span>
            </span>
          </Link>
          <nav className="flex items-center gap-2" aria-label="Navigasi utama">
            <NavLink
              to="/"
              className={({ isActive }) =>
                clsx(
                  "rounded-lg border px-4 py-2 text-sm font-bold transition",
                  isActive
                    ? "border-gold/40 bg-white text-zinc-950"
                    : "border-white/15 text-paper hover:bg-white/10"
                )
              }
            >
              Koleksi
            </NavLink>
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
}

function HomePage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const found = readJson(foundKey, []);
  const foundSet = new Set(found);
  const scores = readJson(quizKey, {});
  const progress = Math.round((found.length / cards.length) * 100);

  const filteredCards = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return cards.filter((card) => {
      const matchesFilter =
        filter === "all" ||
        card.faction === filter ||
        (filter === "found" && foundSet.has(card.id));
      const haystack = `${card.name} ${card.faction} ${card.role} ${card.origin}`.toLowerCase();
      return matchesFilter && haystack.includes(normalized);
    });
  }, [filter, foundSet, query]);

  return (
    <Layout>
      <main className="mx-auto w-[min(1180px,calc(100%-24px))] py-6 md:py-8">
        <section className="grid gap-4 rounded-lg border border-ink/10 bg-white/70 p-4 shadow-soft backdrop-blur md:grid-cols-[minmax(0,1fr)_auto] md:p-5">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-teak/20 bg-teak/10 px-3 py-1 text-xs font-extrabold text-teak">
              <Sparkles size={14} /> PSAS Budaya Digital
            </span>
            <div>
              <h1 className="max-w-3xl text-3xl font-black leading-tight md:text-4xl">
                Koleksi tokoh wayang yang bisa dibaca, ditap, dan dimainkan.
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted md:text-base">
                Setiap kartu membuka cerita tokoh, nilai yang dapat dipelajari, piwulang Jawa,
                hubungan 4 mapel utama, relasi tokoh, dan quiz singkat.
              </p>
            </div>
          </div>
          <ProgressCard progress={progress} found={found.length} total={cards.length} />
        </section>

        <section className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-4">
            <div className="grid gap-3 rounded-lg border border-ink/10 bg-white/55 p-3 shadow-sm md:grid-cols-[minmax(220px,1fr)_auto]">
              <label className="relative block">
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                  size={18}
                />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="h-12 w-full rounded-lg border border-ink/10 bg-white pl-10 pr-3 text-sm outline-none transition focus:border-teak focus:ring-4 focus:ring-teak/10"
                  placeholder="Cari tokoh, peran, atau kelompok"
                  type="search"
                />
              </label>
              <div className="flex flex-wrap gap-2">
                {filters.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setFilter(item.id)}
                    className={clsx(
                      "h-12 rounded-lg border px-3 text-sm font-extrabold transition hover:-translate-y-0.5",
                      filter === item.id
                        ? "border-zinc-950 bg-zinc-950 text-white"
                        : "border-ink/10 bg-white text-muted hover:border-teak/30 hover:text-ink"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <motion.div layout className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
              <AnimatePresence mode="popLayout">
                {filteredCards.map((card, index) => (
                  <CardTile
                    key={card.id}
                    card={card}
                    isFound={foundSet.has(card.id)}
                    priority={index < 8}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
            {!filteredCards.length && (
              <div className="rounded-lg border border-dashed border-ink/15 bg-white/60 p-6 text-muted">
                Tidak ada kartu yang cocok.
              </div>
            )}
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <InfoPanel
              title="Ringkasan"
              rows={[
                ["Tokoh Baik", cards.filter((card) => card.faction === "Tokoh Baik").length],
                ["Tokoh Jahat", cards.filter((card) => card.faction === "Tokoh Jahat").length],
                ["Quiz selesai", Object.keys(scores).length],
              ]}
            />
            <section className="rounded-lg border border-ink/10 bg-white/70 p-4 shadow-sm">
              <h2 className="font-black">4 Mapel Utama</h2>
              <p className="mt-1 text-sm leading-5 text-muted">Materi proyek tetap fokus ke PSAS.</p>
              <div className="mt-3 grid gap-2">
                {SUBJECTS.map((subject) => {
                  const Icon = subjectIcons[subject.id] || BookOpen;
                  return (
                    <div
                      key={subject.id}
                      className="flex items-center justify-between gap-3 rounded-lg border border-ink/10 bg-white px-3 py-3"
                    >
                      <span className="flex min-w-0 items-center gap-2 text-sm font-bold">
                        <Icon size={17} className="text-teak" />
                        {subject.title}
                      </span>
                      <span className="rounded-full bg-teak/10 px-2 py-1 text-[11px] font-extrabold text-teak">
                        utama
                      </span>
                    </div>
                  );
                })}
              </div>
            </section>
          </aside>
        </section>
      </main>
    </Layout>
  );
}

function ProgressCard({ progress, found, total }) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-ink/10 bg-white p-4">
      <div
        className="grid h-24 w-24 place-items-center rounded-full"
        style={{ background: `conic-gradient(#176b68 ${progress}%, rgba(33,29,25,.1) 0)` }}
      >
        <div className="grid h-20 w-20 place-items-center rounded-full bg-paper text-center">
          <strong className="text-xl font-black">{found}/{total}</strong>
          <span className="text-xs font-bold text-muted">dibuka</span>
        </div>
      </div>
      <div>
        <p className="text-sm font-extrabold text-ink">Progress koleksi</p>
        <p className="mt-1 max-w-44 text-sm leading-5 text-muted">
          Buka kartu dari hasil tap NFC atau dari galeri.
        </p>
      </div>
    </div>
  );
}

function CardTile({ card, isFound, priority = false }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.18 }}
    >
      <Link
        to={`/k/${card.id}`}
        className="group block overflow-hidden rounded-lg border border-ink/10 bg-white p-2 shadow-card transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-soft focus:outline-none focus:ring-4 focus:ring-teak/15"
      >
        <div className="mb-2 flex min-h-7 items-center justify-between gap-2">
          <span className={clsx("rounded-full border px-2 py-1 text-[11px] font-black", factionClass(card))}>
            {card.faction.replace("Tokoh ", "")}
          </span>
          <span className="rounded-full border border-gold/40 bg-gold/20 px-2 py-1 text-[11px] font-black text-ink">
            {card.rarity}
          </span>
        </div>
        <div className="relative aspect-[54/85] overflow-hidden rounded-md border border-ink/10 bg-paper">
          <img
            src={cardImage(card, "thumbs")}
            alt={`Kartu ${card.name}`}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.035]"
            decoding="async"
            loading={priority ? "eager" : "lazy"}
          />
          {isFound && (
            <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-leaf px-2 py-1 text-[11px] font-black text-white">
              <Check size={12} /> Dibuka
            </span>
          )}
        </div>
        <div className="space-y-2 pt-3">
          <div>
            <h2 className="truncate font-black">{card.name}</h2>
            <p className="truncate text-xs font-semibold text-muted">{card.role}</p>
          </div>
          <span className="inline-flex h-9 w-full items-center justify-center rounded-lg border border-teak/20 bg-teak/10 text-sm font-extrabold text-teak transition group-hover:bg-teak group-hover:text-white">
            Buka kartu
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

function InfoPanel({ title, rows }) {
  return (
    <section className="rounded-lg border border-ink/10 bg-white/70 p-4 shadow-sm">
      <h2 className="font-black">{title}</h2>
      <div className="mt-2 divide-y divide-ink/10">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between gap-4 py-3 text-sm">
            <span className="text-muted">{label}</span>
            <strong className="font-black">{value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const card = cardById.get(id);
  const [tab, setTab] = useState("cerita");

  useEffect(() => {
    if (card) markFound(card.id);
  }, [card]);

  if (!card) return <NotFound id={id} />;

  const tabs = [
    ["cerita", "Cerita"],
    ["teladan", card.faction === "Tokoh Baik" ? "Teladan" : "Peringatan"],
    ["mapel", "4 Mapel"],
    ["quiz", "Quiz"],
  ];

  return (
    <Layout>
      <main className="mx-auto w-[min(1180px,calc(100%-24px))] py-6 md:py-8">
        <section className="grid gap-5 rounded-lg border border-ink/10 bg-white/70 p-4 shadow-soft md:grid-cols-[minmax(250px,390px)_minmax(0,1fr)] md:p-5">
          <aside className="md:sticky md:top-24 md:self-start">
            <motion.div
              initial={{ opacity: 0, y: 18, rotateX: 6 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.35 }}
              className="mx-auto aspect-[54/85] w-[min(330px,100%)] overflow-hidden rounded-lg border border-ink/10 bg-paper shadow-card"
            >
              <img src={cardImage(card)} alt={`Kartu ${card.name}`} className="h-full w-full object-cover" />
            </motion.div>
            <div className="mx-auto mt-4 grid w-[min(330px,100%)] gap-3 rounded-lg border border-ink/10 bg-white p-4 shadow-sm">
              <TraitMeter label="Budi" value={card.stats.budi} />
              <TraitMeter label="Wani" value={card.stats.wani} />
              <TraitMeter label="Kendali" value={card.stats.kendali} />
            </div>
          </aside>

          <article className="min-w-0">
            <button
              onClick={() => navigate("/")}
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-ink/10 bg-white px-3 text-sm font-bold text-muted transition hover:border-teak/30 hover:text-ink"
            >
              <ArrowLeft size={17} /> Kembali
            </button>

            <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h1 className="text-3xl font-black leading-tight md:text-4xl">{card.name}</h1>
                <p className="mt-2 max-w-2xl leading-7 text-muted">{card.tagline}</p>
              </div>
              <div className="flex flex-wrap gap-2 md:justify-end">
                <span className={clsx("rounded-full border px-3 py-2 text-xs font-black", factionClass(card))}>
                  {card.faction}
                </span>
                <span className="rounded-full border border-gold/40 bg-gold/20 px-3 py-2 text-xs font-black">
                  {card.rarity}
                </span>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {tabs.map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className={clsx(
                    "h-11 rounded-lg border px-4 text-sm font-extrabold transition hover:-translate-y-0.5",
                    tab === key
                      ? "border-zinc-950 bg-zinc-950 text-white"
                      : "border-ink/10 bg-white text-muted hover:border-teak/30 hover:text-ink"
                  )}
                >
                  {label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="mt-5"
              >
                {tab === "cerita" && <StoryPanel card={card} />}
                {tab === "teladan" && <ValuePanel card={card} />}
                {tab === "mapel" && <SubjectPanel card={card} />}
                {tab === "quiz" && <QuizPanel card={card} />}
              </motion.div>
            </AnimatePresence>
          </article>
        </section>
      </main>
    </Layout>
  );
}

function TraitMeter({ label, value }) {
  return (
    <div className="grid grid-cols-[68px_38px_minmax(0,1fr)] items-center gap-3">
      <span className="text-sm font-bold text-muted">{label}</span>
      <strong className="text-right text-sm font-black">{value}</strong>
      <span className="h-2 overflow-hidden rounded-full bg-ink/10">
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.45 }}
          className="block h-full rounded-full bg-gradient-to-r from-teak to-gold"
        />
      </span>
    </div>
  );
}

function StoryPanel({ card }) {
  const relations = card.relations.map((id) => cardById.get(id)).filter(Boolean);
  return (
    <div className="grid gap-4">
      <ContentBlock icon={BookOpen} title="Cerita Tokoh">
        {card.story}
      </ContentBlock>
      <ContentBlock icon={Languages} title="Piwulang Jawa">
        {card.javanese}
      </ContentBlock>
      <ContentBlock icon={Award} title="Data Kartu">
        {card.origin} | {card.role} | {card.faction}
      </ContentBlock>
      <section className="rounded-lg border border-ink/10 bg-white p-4">
        <h2 className="flex items-center gap-2 font-black">
          <Swords size={18} className="text-teak" /> Relasi Tokoh
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {relations.map((relation) => (
            <Link
              key={relation.id}
              to={`/k/${relation.id}`}
              className="rounded-lg border border-ink/10 bg-paper px-3 py-2 text-sm font-bold transition hover:border-teak/30 hover:bg-teak hover:text-white"
            >
              {relation.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function ContentBlock({ icon: Icon, title, children }) {
  return (
    <section className="rounded-lg border border-ink/10 bg-white p-4 transition hover:border-gold/50">
      <h2 className="flex items-center gap-2 font-black">
        <Icon size={18} className="text-teak" /> {title}
      </h2>
      <p className="mt-2 leading-7 text-muted">{children}</p>
    </section>
  );
}

function ValuePanel({ card }) {
  return (
    <div className="grid gap-4">
      <ContentBlock icon={Sparkles} title={card.faction === "Tokoh Baik" ? "Nilai yang Bisa Diteladani" : "Nilai yang Bisa Dipelajari"}>
        {card.lesson}
      </ContentBlock>
      <div className="grid gap-3 md:grid-cols-2">
        {card.values.map((value) => (
          <ValueCard key={value} title={value} tone="good">
            {card.faction === "Tokoh Baik"
              ? `${card.name} menunjukkan ${value.toLowerCase()} sebagai bagian dari karakter yang bisa diteladani.`
              : `${card.name} membantu pembaca memahami pentingnya ${value.toLowerCase()} agar tidak jatuh pada sikap buruk.`}
          </ValueCard>
        ))}
        {card.warning.map((warning) => (
          <ValueCard key={warning} title={`Hindari: ${warning}`} tone="caution">
            {warningSentence(card, warning)}
          </ValueCard>
        ))}
      </div>
    </div>
  );
}

function ValueCard({ title, children, tone }) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-lg border bg-white p-4",
        tone === "good" ? "border-teak/20" : "border-brick/20"
      )}
    >
      <span
        className={clsx(
          "absolute inset-y-0 left-0 w-1",
          tone === "good" ? "bg-teak" : "bg-brick"
        )}
      />
      <h3 className="font-black">{title}</h3>
      <p className="mt-2 leading-6 text-muted">{children}</p>
    </div>
  );
}

function SubjectPanel({ card }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {SUBJECTS.map((subject) => {
        const Icon = subjectIcons[subject.id] || BookOpen;
        return (
          <section
            key={subject.id}
            className="rounded-lg border border-ink/10 bg-white p-4 transition hover:-translate-y-1 hover:border-teak/30 hover:shadow-card"
          >
            <h2 className="flex items-center gap-2 font-black">
              <Icon size={18} className="text-teak" /> {subject.title}
            </h2>
            <p className="mt-2 leading-6 text-muted">{subjectText(card, subject.id)}</p>
          </section>
        );
      })}
    </div>
  );
}

function QuizPanel({ card }) {
  const questions = useMemo(() => quizFor(card), [card]);
  const [answers, setAnswers] = useState({});
  const correct = Object.values(answers).filter(Boolean).length;

  useEffect(() => {
    saveQuizScore(card.id, correct);
  }, [card.id, correct]);

  return (
    <div className="grid gap-4">
      <div className="rounded-lg border border-ink/10 bg-white p-4">
        <h2 className="font-black">Quiz {card.name}</h2>
        <p className="mt-1 text-sm text-muted">Skor saat ini: {correct}/{questions.length}</p>
      </div>
      {questions.map((item, questionIndex) => (
        <section key={item.question} className="rounded-lg border border-ink/10 bg-white p-4">
          <h3 className="font-black">Pertanyaan {questionIndex + 1}</h3>
          <p className="mt-2 leading-6 text-muted">{item.question}</p>
          <div className="mt-3 grid gap-2">
            {item.options.map((option) => {
              const selected = answers[questionIndex]?.choice === option;
              const answered = Boolean(answers[questionIndex]);
              const isCorrect = option === item.answer;
              return (
                <button
                  key={option}
                  disabled={answered}
                  onClick={() =>
                    setAnswers((current) => ({
                      ...current,
                      [questionIndex]: { choice: option, correct: isCorrect },
                    }))
                  }
                  className={clsx(
                    "rounded-lg border px-3 py-3 text-left text-sm font-bold transition",
                    !answered && "border-ink/10 bg-paper hover:border-teak/30 hover:bg-teak/10",
                    answered && isCorrect && "border-leaf bg-leaf text-white",
                    answered && selected && !isCorrect && "border-brick bg-brick text-white",
                    answered && !selected && !isCorrect && "border-ink/10 bg-zinc-100 text-muted"
                  )}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {answers[questionIndex] && (
            <p className="mt-3 text-sm font-bold text-muted">
              {answers[questionIndex].correct ? item.feedback : `Belum tepat. ${item.feedback}`}
            </p>
          )}
        </section>
      ))}
    </div>
  );
}

function NotFound({ id }) {
  return (
    <Layout>
      <main className="mx-auto w-[min(1180px,calc(100%-24px))] py-8">
        <div className="rounded-lg border border-dashed border-ink/15 bg-white/70 p-6">
          <h1 className="text-xl font-black">Kartu tidak ditemukan</h1>
          <p className="mt-2 text-muted">Slug "{id}" belum ada di data kartu.</p>
          <Link
            to="/"
            className="mt-4 inline-flex h-10 items-center rounded-lg bg-zinc-950 px-4 text-sm font-bold text-white"
          >
            Kembali ke koleksi
          </Link>
        </div>
      </main>
    </Layout>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/k/:id" element={<DetailPage />} />
      <Route path="*" element={<NotFound id="unknown" />} />
    </Routes>
  );
}
