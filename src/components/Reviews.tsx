import { useEffect, useRef, useState } from "react"

const reviews = [
  {
    name: "Анна Мустафина",
    text: "Ретрит, организованный Натальей и Анной действительно подарил мне новую жизнь. С первого знакомства с Натальей я ощутила, как меня наполняет положительная энергия. Девочки, вы создали удивительное пространство, где каждая из нас могла быть собой и по-настоящему открыться.\n\nВнутри меня появилась огромная любовь, сила и уверенность в себе, о которых я долго мечтала. Благодаря этому ретриту, я научилась не обижаться на людей вокруг. Вместо негативных эмоций во мне стало больше любви и заботы о себе в первую очередь.\n\nЭта внутренняя трансформация дала мне ощущение опоры внутри себя и я стала чувствовать себя более гармоничной и счастливой. Я безумно рада знакомству и общению с вдохновляющими женщинами. Каждая участница внесла свою искорку в эту общую атмосферу.\n\nОгромное спасибо 🙏",
    image: "https://cdn.poehali.dev/projects/20898a25-bccd-46cc-8908-9dd3a278e425/bucket/fa0a6656-d2e5-4b1c-8809-c0072a4606a8.jpg",
  },
  {
    name: "Ирина Сырцова",
    text: "Давно слышала про практику «Второго рождения» и очень хотела пройти её. Ведь то, как мы появляемся на свет, запечатлевается в нашей психике на бессознательном уровне. «Неестественные» роды могут являться причиной ранней психологической травмы и повлиять на всю дальнейшую жизнь.\n\nЯ давно знакома с Анной и знаю её как очень чуткого, внимательного и неравнодушного гениколога и акушерку. Поэтому, узнав, что Анна будет проводить практику «Второго рождения», не задумываясь пошла к ней на ретрит.\n\nПосле подготовительной части ретрита была сама практика рождения. Это был незабываемый опыт! Невозможно передать словами те тёплые чувства и эмоциональные переживания, которые я испытала в процессе прохождения второго рождения!\n\nС момента прохождения этой практики прошёл год и я заметила, стала более спокойной, уверенной, уравновешенной. От всего сердца рекомендую всем пройти этот ретрит и прожить ценный опыт второго рождения!",
    image: "https://cdn.poehali.dev/projects/20898a25-bccd-46cc-8908-9dd3a278e425/bucket/d816056d-defa-4911-b5ee-9205081b202a.jpg",
  },
]

function ReviewCard({ review, delay, isVisible }: { review: typeof reviews[0]; delay: number; isVisible: boolean }) {
  const [expanded, setExpanded] = useState(false)
  const lines = review.text.split("\n\n")
  const preview = lines[0]
  const hasMore = lines.length > 1

  return (
    <div
      className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-secondary/40 rounded-none border border-border/50 p-8 lg:p-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={review.image}
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover flex-shrink-0 grayscale"
          />
          <div>
            <p className="font-medium text-foreground">{review.name}</p>
            <p className="text-xs text-muted-foreground tracking-widest uppercase mt-0.5">Участница ретрита</p>
          </div>
        </div>

        {/* Quote mark */}
        <svg className="w-8 h-8 text-sage/40 mb-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>

        {/* Text */}
        <div className="flex-1">
          {expanded ? (
            <div className="space-y-4">
              {lines.map((line, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  {line}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">{preview}</p>
          )}
        </div>

        {hasMore && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 text-xs tracking-widest uppercase text-sage hover:text-foreground transition-colors self-start"
          >
            {expanded ? "Свернуть" : "Читать полностью →"}
          </button>
        )}
      </div>
    </div>
  )
}

export function Reviews() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <p
          className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Отзывы
        </p>
        <h2
          className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-16 text-balance transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Истории участниц
        </h2>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {reviews.map((review, i) => (
            <ReviewCard key={review.name} review={review} delay={300 + i * 150} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
