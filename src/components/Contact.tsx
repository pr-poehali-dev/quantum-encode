import type React from "react"
import { useEffect, useRef, useState } from "react"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("https://functions.poehali.dev/7cf26f19-b444-43e6-acb3-42e586a8462c", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })
      if (res.ok) {
        setStatus("success")
        setFormState({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section ref={sectionRef} id="contact" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div>
            <p
              className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Контакты
            </p>
            <h2
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 text-balance transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Забронировать место
            </h2>
            <p
              className={`text-muted-foreground leading-relaxed mb-12 max-w-md transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Ретрит проходит в малой группе. Места ограничены. Оставьте заявку и организаторы свяжутся с Вами, ответив на все интересующие Вас вопросы.
            </p>

            {/* Contact Info */}
            <div
              className={`space-y-6 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Организаторы</p>
                <div className="flex flex-col gap-3 mt-1">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://cdn.poehali.dev/projects/20898a25-bccd-46cc-8908-9dd3a278e425/bucket/894e0e4b-b7a7-489e-a221-bbe939d68287.jpg"
                      alt="Марина"
                      className="w-14 h-14 rounded-full object-cover object-[center_15%] flex-shrink-0"
                    />
                    <a href="tel:+79173539487" className="text-foreground hover:text-sage transition-colors">
                      Марина · +7 917 353-94-87
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src="https://cdn.poehali.dev/projects/20898a25-bccd-46cc-8908-9dd3a278e425/bucket/d278be0f-1db2-44d6-8a98-44ef23aa87b2.jpg"
                      alt="Вероника"
                      className="w-12 h-12 rounded-full object-cover object-center flex-shrink-0"
                    />
                    <a href="tel:+79162764771" className="text-foreground hover:text-sage transition-colors">
                      Вероника · +7 916 276-47-71
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Даты</p>
                <p className="text-foreground">20 сентября — 24 сентября</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Стоимость</p>
                <p className="text-foreground">53 200 ₽ <span className="text-muted-foreground line-through text-sm ml-2">96 700 ₽</span></p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Включено в стоимость</p>
                <ul className="space-y-1.5">
                  {[
                    "Программа в сопровождении 2х тренеров и организаторов",
                    "Питание (завтрак, обед, ужин)",
                    "Трансфер от/до аэропорта",
                    "Путешествие в место силы",
                    "Баня",
                    "Поддержка по завершению программы",
                    "Проживание",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="text-sage mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Не включено</p>
                <ul className="space-y-1.5">
                  {[
                    "Авиа, ж/д билеты",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-0.5 flex-shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-sage focus:outline-none transition-colors"
                  placeholder="Ваше имя"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  Почта
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-sage focus:outline-none transition-colors"
                  placeholder="ваш@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-sage focus:outline-none transition-colors resize-none"
                  placeholder="Расскажите о себе и своём запросе..."
                  required
                />
              </div>
              {status === "success" && (
                <p className="text-sage text-sm">Заявка отправлена! Мы свяжемся с вами в ближайшее время.</p>
              )}
              {status === "error" && (
                <p className="text-terracotta text-sm">Ошибка отправки. Напишите нам напрямую.</p>
              )}
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-all duration-500 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Отправляем..." : "Оставить заявку"}
                <svg
                  className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}