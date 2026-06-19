import { useState } from 'react'
import photo from '../image.png'

const invitationLines = [
  "You've been craving street food lately,",
  "so I'd love to take you to Totobits",
  'and treat you to the snacks you have been missing.',
  'Let me turn that craving into a sweet little date with me.',
]

export default function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#f7efe4] text-[#34231d]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.84),_rgba(247,239,228,0.96))]" />
      <div className="photo-grid absolute inset-0 opacity-40" />
      <div className="absolute left-1/2 top-[-10rem] h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[#f7c790]/26 blur-3xl" />
      <div className="absolute left-[8%] top-[60%] h-[14rem] w-[14rem] rounded-full bg-white/50 blur-3xl" />
      <div className="absolute right-[-3rem] top-[20%] h-[16rem] w-[16rem] rounded-full bg-[#dfa86a]/14 blur-3xl" />

      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 py-10 sm:px-6 sm:py-12">
        <div className="mb-6 max-w-2xl text-center sm:mb-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.42em] text-[#9f6334]">
            made with love
          </p>
          <h1 className="font-display text-[clamp(2.4rem,8vw,5rem)] leading-[0.92] text-[#5f3923]">
            A little something sweet for you
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#6f5140] sm:text-base sm:leading-7">
            I kept one of my favorite photos of us on the front, and a tiny
            Totobits date invitation waiting for you on the back.
          </p>
        </div>

        <div className="relative flex flex-col items-center text-center">
          <div className={`flip-card-shell ${isOpen ? 'is-flipped' : ''}`}>
            <div className="flip-card-shadow" />

            <div className="flip-card-inner">
              <article className="flip-face photo-face">
                <img
                  src={photo}
                  alt="A photo of us together at a restaurant"
                  className="photo-image"
                />
                <div className="photo-overlay">
                  <p className="photo-kicker">our little memory</p>
                  <h2 className="photo-title">Flip Me Over</h2>
                  <p className="photo-caption">
                    I turned this photo into something sweeter.
                  </p>
                </div>
                <span className="photo-chip">tap to flip</span>
                <button
                  type="button"
                  aria-label="Flip the photo card to the back"
                  onClick={() => setIsOpen(true)}
                  className="face-toggle"
                />
              </article>

              <article className="flip-face note-face">
                <div className="note-header">
                  <p className="note-kicker">Totobits date</p>
                  <h2 className="note-title">For You</h2>
                </div>

                <div className="note-body">
                  <p className="note-copy">Hi love,</p>
                  {invitationLines.map((line) => (
                    <p key={line} className="note-copy">
                      {line}
                    </p>
                  ))}
                  <p className="note-copy">
                    Say yes, and I&apos;ll happily be your favorite company while
                    we eat, laugh, and wander around together.
                  </p>
                </div>

                <div className="note-footer">
                  <div className="note-tags">
                    <span>street food</span>
                    <span>you + me</span>
                    <span>Totobits</span>
                  </div>
                  <p className="note-signoff">Amiel</p>
                </div>
              </article>
            </div>
          </div>

          <button
            type="button"
            aria-pressed={isOpen}
            aria-label={isOpen ? 'Flip the photo card to the front' : 'Flip the photo card to the back'}
            onClick={() => setIsOpen((current) => !current)}
            className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#8b5a36] transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#d58f55]/40 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7efe4] sm:text-sm"
          >
            {isOpen ? 'Tap to see the photo' : 'Tap to read the note'}
          </button>
        </div>
      </section>
    </main>
  )
}
