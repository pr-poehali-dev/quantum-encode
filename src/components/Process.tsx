import { useEffect, useRef, useState } from "react"

const steps = [
  {
    number: "01",
    title: "Принятие себя",
    description:
      "Вы примете себя и начнёте получать любовь и заботу просто за то, что вы есть. Через внутреннее тепло почувствуете безопасность и опору.",
  },
  {
    number: "02",
    title: "Глубокий контакт",
    description:
      "Проживёте бурю эмоций в глубоком контакте с собой — точно так, как ребёнок ощущает заботу матери. Это поможет стать ближе к своим внутренним ресурсам.",
  },
  {
    number: "03",
    title: "Сила и уверенность",
    description:
      "Напитаетесь любовью, принятием и материнским теплом. Эти ощущения станут основой уверенности, поддерживающей вас каждый день.",
  },
  {
    number: "04",
    title: "Новая жизнь",
    description:
      "Встроите в тело и сознание доверие к себе и миру. Почувствуете ребёнка в себе — радостного, любопытного, довольного жизнью.",
  },
]

export function Process() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="process" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column - Sticky Header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p
                className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Результаты
              </p>
              <h2
                className={`font-serif text-4xl md:text-5xl font-light text-foreground mb-6 text-balance transition-all duration-1000 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Что вы
                <span className="italic"> получите</span>
              </h2>
              <p
                className={`text-muted-foreground leading-relaxed transition-all duration-1000 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Ретрит — это не отдых, это трансформация. За 5 дней вы пройдёте путь от старых блоков к свободе, от тревоги к уверенности, от пустоты к наполненности.
              </p>
            </div>
          </div>

          {/* Right Column - Steps */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`group py-10 lg:py-14 border-t border-border last:border-b transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <div className="flex gap-8 lg:gap-12">
                    <span className="font-serif text-4xl lg:text-5xl text-stone/50 group-hover:text-sage transition-colors duration-500">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed max-w-xl">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}