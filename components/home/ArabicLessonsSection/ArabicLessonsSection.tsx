"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type WheelEvent as ReactWheelEvent } from "react";
import { Container } from "@/components/ui/Container";
import { SectionPageLink } from "@/components/ui/SectionPageLink/SectionPageLink";
import styles from "./ArabicLessonsSection.module.css";

const lessons = [
  { title: "التحية والتعارف", phrase: "مرحبًا، اسمي أحمد، سعيد بلقائك", duration: "03:12", level: "مبتدئ" },
  { title: "في الجامعة", phrase: "أين تقع قاعة المحاضرات من فضلك؟", duration: "04:05", level: "مبتدئ" },
  { title: "السؤال عن الاتجاهات", phrase: "كيف أذهب إلى محطة الحافلات؟", duration: "03:48", level: "مبتدئ" },
  { title: "في المكتبة", phrase: "أريد استعارة هذا الكتاب لمدة أسبوع", duration: "05:20", level: "متوسط" },
  { title: "حوار في المطعم", phrase: "أريد قائمة الطعام من فضلك", duration: "04:33", level: "متوسط" },
];

export function ArabicLessonsSection() {
  const [playing, setPlaying] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Animation | null>(null);
  const reducedMotionRef = useRef(false);
  const dragRef = useRef({ active: false, startY: 0, startTime: 0, pointerId: 0 });

  useEffect(() => {
    if (!trackRef.current) return;
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const animation = trackRef.current.animate(
      [{ transform: "translateY(0)" }, { transform: "translateY(-50%)" }],
      { duration: 28000, iterations: Infinity, easing: "linear" },
    );
    if (reducedMotionRef.current) animation.pause();
    animationRef.current = animation;
    return () => animation.cancel();
  }, []);

  const moveAnimation = (pixelDistance: number) => {
    const animation = animationRef.current;
    const track = trackRef.current;
    if (!animation || !track) return;
    const loopDistance = track.scrollHeight / 2;
    if (!loopDistance) return;
    const millisecondsPerPixel = 28000 / loopDistance;
    const nextTime = Number(animation.currentTime ?? 0) + pixelDistance * millisecondsPerPixel;
    animation.currentTime = ((nextTime % 28000) + 28000) % 28000;
  };

  const startDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("button")) return;
    const animation = animationRef.current;
    if (!animation) return;
    animation.pause();
    dragRef.current = {
      active: true,
      startY: event.clientY,
      startTime: Number(animation.currentTime ?? 0),
      pointerId: event.pointerId,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
  };

  const dragLessons = (event: ReactPointerEvent<HTMLDivElement>) => {
    const animation = animationRef.current;
    const track = trackRef.current;
    if (!dragRef.current.active || !animation || !track) return;
    const loopDistance = track.scrollHeight / 2;
    if (!loopDistance) return;
    const dragPixels = dragRef.current.startY - event.clientY;
    const nextTime = dragRef.current.startTime + dragPixels * (28000 / loopDistance);
    animation.currentTime = ((nextTime % 28000) + 28000) % 28000;
  };

  const finishDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;
    dragRef.current.active = false;
    if (event.currentTarget.hasPointerCapture(dragRef.current.pointerId)) {
      event.currentTarget.releasePointerCapture(dragRef.current.pointerId);
    }
    setDragging(false);
    if (!reducedMotionRef.current) animationRef.current?.play();
  };

  const scrollLessons = (event: ReactWheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    moveAnimation(event.deltaY);
  };

  const pauseOnHover = () => animationRef.current?.pause();
  const resumeAfterHover = () => {
    if (!dragRef.current.active && !reducedMotionRef.current) animationRef.current?.play();
  };

  const playLesson = (title: string, phrase: string) => {
    window.speechSynthesis.cancel();
    if (playing === title) { setPlaying(null); return; }
    const speech = new SpeechSynthesisUtterance(phrase);
    speech.lang = "ar-EG";
    speech.rate = .82;
    speech.onend = () => setPlaying(null);
    setPlaying(title);
    window.speechSynthesis.speak(speech);
  };

  return (
    <section className={styles.section} aria-labelledby="lessons-title">
      <Container className={styles.layout}>
        <div className={styles.intro}><span>استمع وتعلّم</span><h2 id="lessons-title">دروس في اللغة العربية</h2><p>قائمة صوتية متحركة لعبارات عملية تحتاجها في الدراسة والحياة اليومية.</p><SectionPageLink href="/audio-lessons" label="كل الدروس الصوتية" /><div className={styles.soundWave} aria-hidden="true">{Array.from({ length: 18 }, (_, index) => <i key={index} />)}</div></div>
        <div className={`${styles.viewport} ${dragging ? styles.dragging : ""}`} onPointerDown={startDrag} onPointerMove={dragLessons} onPointerUp={finishDrag} onPointerCancel={finishDrag} onWheel={scrollLessons} onMouseEnter={pauseOnHover} onMouseLeave={resumeAfterHover}><div ref={trackRef} className={styles.track}>{[...lessons, ...lessons].map((lesson, index) => <article className={styles.lesson} key={`${lesson.title}-${index}`} aria-hidden={index >= lessons.length || undefined}><button type="button" tabIndex={index >= lessons.length ? -1 : undefined} onClick={() => playLesson(lesson.title, lesson.phrase)} aria-label={`${playing === lesson.title ? "إيقاف" : "تشغيل"} درس ${lesson.title}`}><span>{playing === lesson.title ? "Ⅱ" : "▶"}</span></button><div><small>{lesson.level}</small><h3>{lesson.title}</h3><p>{lesson.phrase}</p></div><time>{lesson.duration}</time></article>)}</div></div>
      </Container>
    </section>
  );
}
