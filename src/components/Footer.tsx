export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-4">
            <p className="font-serif text-2xl tracking-wide text-foreground mb-4">Родиться заново</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Трансформационный ретрит на море. Перезагрузка силы, уверенности и любви к жизни.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 md:col-start-7">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Навигация</p>
            <nav className="flex flex-col gap-3">
              <a href="#philosophy" className="text-sm text-foreground hover:text-sage transition-colors">
                О ретрите
              </a>
              <a href="#services" className="text-sm text-foreground hover:text-sage transition-colors">
                Программа
              </a>
              <a href="#process" className="text-sm text-foreground hover:text-sage transition-colors">
                Результаты
              </a>
              <a href="#contact" className="text-sm text-foreground hover:text-sage transition-colors">
                Контакты
              </a>
            </nav>
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Родиться заново. Все права защищены.
          </p>
          <p className="text-xs text-muted-foreground">Организатор: Марина · +7 917 353-94-87</p>
        </div>
      </div>
    </footer>
  )
}