import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

const products = [
  {
    id: 1,
    name: 'Свеча в гипсовом кашпо',
    price: 1200,
    category: 'Контейнерные',
    image: 'https://cdn.poehali.dev/projects/79cfff84-8f87-4037-b960-fe331ea84c90/files/5fe49322-fad2-4dfa-9882-a7e3839e2709.jpg',
    description: 'Ароматическая свеча из натурального соевого воска в элегантном гипсовом кашпо'
  },
  {
    id: 2,
    name: 'Формовая свеча',
    price: 900,
    category: 'Формовые',
    image: 'https://cdn.poehali.dev/projects/79cfff84-8f87-4037-b960-fe331ea84c90/files/f060e72b-89ae-41ca-965d-0cc0a7deca61.jpg',
    description: 'Декоративная свеча из пчелиного воска уникальной формы'
  },
  {
    id: 3,
    name: 'Свеча в бетонном кашпо',
    price: 1500,
    category: 'Контейнерные',
    image: 'https://cdn.poehali.dev/projects/79cfff84-8f87-4037-b960-fe331ea84c90/files/71987899-e0b0-4012-b3d5-728de718967d.jpg',
    description: 'Премиальная свеча в минималистичном бетонном кашпо'
  }
];

const reviews = [
  { id: 1, name: 'Анна', text: 'Потрясающе пахнет! Свеча горит долго и равномерно. Кашпо можно использовать как вазу потом.', rating: 5 },
  { id: 2, name: 'Дмитрий', text: 'Отличное качество, натуральный воск действительно горит чище обычных свечей.', rating: 5 },
  { id: 3, name: 'Мария', text: 'Заказывала в подарок — очень стильно упаковано, получательница в восторге!', rating: 5 }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">Naturа</h1>
            <div className="hidden md:flex gap-8">
              {['Главная', 'Каталог', 'О продукте', 'Доставка', 'Отзывы', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item === 'Главная' ? 'hero' : item.toLowerCase())}
                  className="text-sm text-foreground hover:text-accent transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button variant="outline" size="icon">
              <Icon name="ShoppingCart" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Ароматические свечи из натурального воска
            </h2>
            <p className="text-xl text-muted-foreground">
              Формовые и контейнерные свечи ручной работы в минималистичных гипсовых кашпо
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button onClick={() => scrollToSection('каталог')} size="lg" className="bg-primary hover:bg-primary/90">
                Смотреть каталог
              </Button>
              <Button onClick={() => scrollToSection('о продукте')} variant="outline" size="lg">
                Узнать больше
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { icon: 'Leaf', title: 'Натуральный воск', text: 'Только соевый и пчелиный воск без парафина' },
              { icon: 'Flame', title: 'Чистое горение', text: 'Не коптит и не выделяет вредных веществ' },
              { icon: 'Sparkles', title: 'Уникальный дизайн', text: 'Кашпо ручной работы из гипса и бетона' }
            ].map((feature, idx) => (
              <div key={idx} className="text-center space-y-3 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-2">
                  <Icon name={feature.icon as any} size={28} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      <section id="каталог" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Каталог свечей</h2>
            <p className="text-muted-foreground">Выберите свечу по вашему вкусу</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <Card key={product.id} className="overflow-hidden hover-scale" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-accent font-medium">{product.category}</span>
                    <span className="text-lg font-bold text-foreground">{product.price} ₽</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      <section id="о продукте" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-center">О наших свечах</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              Мы создаём ароматические свечи из натурального соевого и пчелиного воска. Каждая свеча — результат ручной работы и внимания к деталям.
            </p>
            <p>
              <strong className="text-foreground">Формовые свечи</strong> — это уникальные декоративные изделия, созданные в специальных формах. Они идеально подходят для интерьерного декора и создания атмосферы.
            </p>
            <p>
              <strong className="text-foreground">Контейнерные свечи</strong> — это свечи в гипсовых и бетонных кашпо ручной работы. После использования кашпо можно использовать как стильную вазу или подсвечник.
            </p>
            <div className="grid md:grid-cols-2 gap-6 pt-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-accent" />
                  Натуральные материалы
                </h4>
                <p className="text-sm pl-7">Только соевый и пчелиный воск без парафина</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-accent" />
                  Эко-упаковка
                </h4>
                <p className="text-sm pl-7">Используем переработанные материалы</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-accent" />
                  Долгое горение
                </h4>
                <p className="text-sm pl-7">До 40 часов чистого горения</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-accent" />
                  Ручная работа
                </h4>
                <p className="text-sm pl-7">Каждая свеча уникальна</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      <section id="доставка" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Доставка и оплата</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="Truck" size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Курьером</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Circle" size={6} className="fill-current" />
                    По Москве — 300 ₽
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Circle" size={6} className="fill-current" />
                    По МО — 500 ₽
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Circle" size={6} className="fill-current" />
                    Бесплатно при заказе от 3000 ₽
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="Package" size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">СДЭК</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Circle" size={6} className="fill-current" />
                    По России — от 350 ₽
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Circle" size={6} className="fill-current" />
                    Доставка 3-7 дней
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Circle" size={6} className="fill-current" />
                    Трек-номер для отслеживания
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Icon name="CreditCard" size={24} className="text-accent" />
                Способы оплаты
              </h3>
              <p className="text-muted-foreground">
                Принимаем оплату банковскими картами, через СБП, Apple Pay и Google Pay. Оплата безопасна и проходит через защищённое соединение.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      <section id="отзывы" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Отзывы покупателей</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="hover-scale">
                <CardContent className="p-6 space-y-3">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
                  <p className="text-sm font-semibold text-foreground">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      <section id="контакты" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">Контакты</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Mail" size={24} className="text-accent" />
                  <a href="mailto:info@natura-candles.ru" className="text-lg text-foreground hover:text-accent transition-colors">
                    info@natura-candles.ru
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Phone" size={24} className="text-accent" />
                  <a href="tel:+79999999999" className="text-lg text-foreground hover:text-accent transition-colors">
                    +7 (999) 999-99-99
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Icon name="MapPin" size={24} className="text-accent" />
                  <span className="text-lg text-muted-foreground">Москва, Россия</span>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4 justify-center pt-4">
              <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Natura. Ароматические свечи ручной работы</p>
        </div>
      </footer>
    </div>
  );
}
