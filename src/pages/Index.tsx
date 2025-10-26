import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', address: '' });
  };

  const tariffs = [
    {
      name: "Базовый",
      speed: "100 Мбит/с",
      price: 490,
      features: ["Безлимитный интернет", "Wi-Fi роутер в подарок", "Круглосуточная поддержка", "Без скрытых платежей"],
      popular: false
    },
    {
      name: "Оптимальный",
      speed: "300 Мбит/с",
      price: 690,
      features: ["Безлимитный интернет", "Wi-Fi роутер в подарок", "150+ ТВ каналов", "Онлайн-кинотеатр", "Круглосуточная поддержка"],
      popular: true
    },
    {
      name: "Максимальный",
      speed: "500 Мбит/с",
      price: 990,
      features: ["Безлимитный интернет", "Премиум Wi-Fi роутер", "200+ ТВ каналов HD", "3 онлайн-кинотеатра", "Приоритетная поддержка", "Статический IP"],
      popular: false
    }
  ];

  const advantages = [
    { icon: "Zap", title: "Высокая скорость", text: "До 500 Мбит/с для комфортного использования" },
    { icon: "Shield", title: "Надежность", text: "99.9% uptime и стабильное соединение" },
    { icon: "Clock", title: "Быстрое подключение", text: "Установка за 24 часа после заявки" },
    { icon: "HeadphonesIcon", title: "Поддержка 24/7", text: "Всегда на связи для решения вопросов" }
  ];

  const faqs = [
    {
      question: "Как быстро произойдет подключение?",
      answer: "После оформления заявки наш специалист свяжется с вами в течение 2 часов для согласования времени установки. Подключение осуществляется в течение 24 часов."
    },
    {
      question: "Какое оборудование потребуется?",
      answer: "Все необходимое оборудование предоставляется бесплатно: роутер Wi-Fi, кабели для подключения и приставка для ТВ (при выборе тарифа с телевидением)."
    },
    {
      question: "Можно ли сменить тариф?",
      answer: "Да, вы можете в любой момент изменить тариф через личный кабинет или обратившись в службу поддержки. Изменения вступают в силу с начала следующего расчетного периода."
    },
    {
      question: "Есть ли скрытые платежи?",
      answer: "Нет, все условия прозрачны. Указанная стоимость - это полная ежемесячная плата без дополнительных сборов. Подключение и оборудование предоставляются бесплатно."
    },
    {
      question: "Работает ли интернет без ограничений?",
      answer: "Да, все наши тарифы предоставляют безлимитный трафик без ограничений по времени суток или объему данных."
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Wifi" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-primary">МегаФон</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#tariffs" className="text-foreground/70 hover:text-primary transition-colors">Тарифы</a>
            <a href="#advantages" className="text-foreground/70 hover:text-primary transition-colors">Преимущества</a>
            <a href="#faq" className="text-foreground/70 hover:text-primary transition-colors">FAQ</a>
            <a href="#contacts" className="text-foreground/70 hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            8 800 550-05-00
          </Button>
        </div>
      </header>

      <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-secondary text-secondary-foreground">Специальное предложение</Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Домашний интернет и ТВ от <span className="text-primary">МегаФон</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Высокоскоростной интернет до 500 Мбит/с и 200+ ТВ каналов. Подключение за 24 часа.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  Оставить заявку
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => document.getElementById('tariffs')?.scrollIntoView({ behavior: 'smooth' })}>
                  Выбрать тариф
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/7cb88053-7189-4118-96c9-1345b29dbaeb/files/f77a47c6-7211-4941-b925-863e5743455e.jpg"
                alt="Высокоскоростной интернет МегаФон"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Выберите свой тариф</h2>
            <p className="text-xl text-muted-foreground">Прозрачные условия без скрытых платежей</p>
          </div>
          <Tabs defaultValue="internet" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="internet">Только интернет</TabsTrigger>
              <TabsTrigger value="combo">Интернет + ТВ</TabsTrigger>
            </TabsList>
            <TabsContent value="internet" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {tariffs.map((tariff, index) => (
                  <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${tariff.popular ? 'border-primary border-2 scale-105' : ''}`}>
                    {tariff.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge className="bg-secondary text-secondary-foreground text-sm px-4 py-1">Популярный</Badge>
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">{tariff.name}</CardTitle>
                      <CardDescription className="text-3xl font-bold text-primary mt-2">{tariff.speed}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center py-4">
                        <div className="text-4xl font-bold">{tariff.price} ₽</div>
                        <div className="text-muted-foreground">в месяц</div>
                      </div>
                      <ul className="space-y-3">
                        {tariff.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" variant={tariff.popular ? "default" : "outline"}>
                        Подключить
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="combo" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {tariffs.filter(t => t.features.some(f => f.includes('ТВ'))).map((tariff, index) => (
                  <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${tariff.popular ? 'border-primary border-2 scale-105' : ''}`}>
                    {tariff.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge className="bg-secondary text-secondary-foreground text-sm px-4 py-1">Хит продаж</Badge>
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">{tariff.name}</CardTitle>
                      <CardDescription className="text-3xl font-bold text-primary mt-2">{tariff.speed}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center py-4">
                        <div className="text-4xl font-bold">{tariff.price} ₽</div>
                        <div className="text-muted-foreground">в месяц</div>
                      </div>
                      <ul className="space-y-3">
                        {tariff.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" variant={tariff.popular ? "default" : "outline"}>
                        Подключить
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="order-form" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Оставьте заявку</CardTitle>
                <CardDescription className="text-lg">Мы свяжемся с вами в течение 2 часов</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input 
                      id="name" 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Адрес подключения</Label>
                    <Input 
                      id="address" 
                      placeholder="Москва, ул. Примерная, д. 1, кв. 10"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Частые вопросы</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <footer id="contacts" className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Wifi" size={24} className="text-white" />
                </div>
                <span className="text-2xl font-bold">МегаФон</span>
              </div>
              <p className="text-background/70">
                Надежный провайдер домашнего интернета и телевидения
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-background/70">
                <li><a href="#tariffs" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Интернет</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Телевидение</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Комбо-пакеты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-background/70">
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Личный кабинет</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Офисы и карта</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-3 text-background/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={18} className="text-primary" />
                  <a href="tel:88005500500" className="hover:text-primary transition-colors">8 800 550-05-00</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={18} className="text-primary" />
                  <a href="mailto:info@megafon.ru" className="hover:text-primary transition-colors">info@megafon.ru</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Clock" size={18} className="text-primary" />
                  <span>Поддержка 24/7</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
            <p>© 2024 МегаФон. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}