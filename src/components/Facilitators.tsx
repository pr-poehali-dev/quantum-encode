import { useEffect, useRef, useState } from "react"

const facilitators = [
  {
    name: "Наталья Куликова",
    role: "Телесный терапевт",
    description:
      "Специалист по работе с телесными травмами и родовым опытом. Проводит трансформационные практики и ритуалы освобождения уже более 10 лет.",
    image: "https://cdn.poehali.dev/projects/20898a25-bccd-46cc-8908-9dd3a278e425/bucket/b83cddf1-e4ad-4a5b-8117-7bb2e72a17c1.jpg",
  },
  {
    name: "Анна Мустафина",
    role: "Врач акушер-гинеколог",
    description:
      "Ведущая женских кругов и практик спонтанного движения. Помогает раскрыть внутреннюю силу через тело, танец и глубинный контакт с собой.",
    image: "https://cdn.poehali.dev/projects/20898a25-bccd-46cc-8908-9dd3a278e425/bucket/ac3a7778-04f5-4209-9a76-7d6e62ac0189.png",
  },
]

export function Facilitators() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="facilitators" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/30">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-6">Ведущие</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Те, кто проведут вас
            <span className="italic"> через трансформацию</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {facilitators.map((f, i) => (
            <div
              key={f.name}
              className={`flex flex-col transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 200}ms` }}
            >
              {/* Фото */}
              <div className="relative mb-8 overflow-hidden">
                {f.image ? (
                  <div className="aspect-[3/4] overflow-hidden bg-stone-100">
                    <img
                      src={f.image}
                      alt={f.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="aspect-[3/4] bg-stone-100 flex items-end p-6">
                    <p className="text-muted-foreground text-sm italic">Фото скоро появится</p>
                  </div>
                )}
                {/* Декоративный акцент */}
                <div
                  className={`absolute bottom-0 ${i === 0 ? "right-0" : "left-0"} w-12 h-12 bg-terracotta/70`}
                />
              </div>

              {/* Текст */}
              <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-3">{f.role}</p>
              <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-4">{f.name}</h3>
              <div className="w-8 h-px bg-sage mb-5" />
              <p className="text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}