import { useEffect, useRef, useState } from "react"

const facilitators = [
  {
    name: "Наталья Куликова",
    role: "Телесный терапевт",
    description:
      "Специалист по работе с телесными травмами и родовым опытом. Проводит трансформационные практики и ритуалы освобождения уже более 10 лет.",
    image: "https://cdn.poehali.dev/projects/20898a25-bccd-46cc-8908-9dd3a278e425/bucket/5f4b5d65-72e6-402c-97e1-ab1307ad46a6.jpg",
    imagePosition: "left",
  },
  {
    name: "Анна Мустафина",
    role: "Фасилитатор спонтанного танца",
    description:
      "Ведущая женских кругов и практик спонтанного движения. Помогает раскрыть внутреннюю силу через тело, танец и глубинный контакт с собой.",
    image: "https://cdn.poehali.dev/projects/20898a25-bccd-46cc-8908-9dd3a278e425/bucket/5f4b5d65-72e6-402c-97e1-ab1307ad46a6.jpg",
    imagePosition: "right",
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
      <div className="max-w-7xl mx-auto">
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

        {/* Общее фото */}
        <div
          className={`relative max-w-2xl mx-auto mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/20898a25-bccd-46cc-8908-9dd3a278e425/bucket/5f4b5d65-72e6-402c-97e1-ab1307ad46a6.jpg"
              alt="Наталья Куликова и Анна Мустафина"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-terracotta/80" />
          <div className="absolute top-0 right-0 w-16 h-16 bg-sage/40" />
        </div>

        {/* Карточки */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {facilitators.map((f, i) => (
            <div
              key={f.name}
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${400 + i * 200}ms` }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-3">{f.role}</p>
              <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-4">{f.name}</h3>
              <div className="w-8 h-px bg-sage mb-6" />
              <p className="text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
