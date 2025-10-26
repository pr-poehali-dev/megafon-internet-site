import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Tariff {
  name: string;
  speed: string;
  price: number;
  features: string[];
  popular: boolean;
}

interface TariffCalculatorProps {
  tariffs: Tariff[];
}

export default function TariffCalculator({ tariffs }: TariffCalculatorProps) {
  const [devices, setDevices] = useState([3]);
  const [tvChannels, setTvChannels] = useState([0]);

  const getRecommendedSpeed = () => {
    const deviceCount = devices[0];
    if (deviceCount <= 2) return 100;
    if (deviceCount <= 5) return 300;
    return 500;
  };

  const needsTV = tvChannels[0] > 0;

  const getRecommendedTariff = () => {
    const speed = getRecommendedSpeed();
    const filtered = tariffs.filter(t => {
      const tariffSpeed = parseInt(t.speed);
      const hasTV = t.features.some(f => f.includes('ТВ'));
      return tariffSpeed >= speed && (needsTV ? hasTV : true);
    });
    
    return filtered.length > 0 ? filtered[0] : tariffs[0];
  };

  const recommended = getRecommendedTariff();

  return (
    <div className="max-w-5xl mx-auto">
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl">Настройте параметры</CardTitle>
          <CardDescription>Укажите количество устройств и интересующие услуги</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-base">Количество устройств</Label>
              <Badge variant="secondary" className="text-lg px-4 py-1">
                {devices[0]} {devices[0] === 1 ? 'устройство' : devices[0] < 5 ? 'устройства' : 'устройств'}
              </Badge>
            </div>
            <Slider
              value={devices}
              onValueChange={setDevices}
              min={1}
              max={10}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>1</span>
              <span>5</span>
              <span>10+</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-base">Телевидение</Label>
              <Badge variant="secondary" className="text-lg px-4 py-1">
                {tvChannels[0] === 0 ? 'Не нужно' : `${tvChannels[0] === 1 ? '150' : '200'}+ каналов`}
              </Badge>
            </div>
            <Slider
              value={tvChannels}
              onValueChange={setTvChannels}
              min={0}
              max={2}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Без ТВ</span>
              <span>Базовое</span>
              <span>Расширенное</span>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-6 space-y-4">
            <div className="flex items-start gap-3">
              <Icon name="Lightbulb" size={24} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-lg mb-2">Рекомендация</p>
                <p className="text-muted-foreground">
                  Для {devices[0]} {devices[0] === 1 ? 'устройства' : devices[0] < 5 ? 'устройств' : 'устройств'} 
                  {needsTV ? ' и просмотра ТВ' : ''} мы рекомендуем скорость <span className="font-semibold text-primary">{getRecommendedSpeed()} Мбит/с</span>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8">
        <h3 className="text-2xl font-bold text-center mb-6">Рекомендуемый тариф</h3>
        <Card className="border-primary border-2 shadow-2xl max-w-md mx-auto">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <Badge className="bg-primary text-primary-foreground text-sm px-6 py-2">
              <Icon name="Star" size={16} className="mr-1" />
              Лучший выбор
            </Badge>
          </div>
          <CardHeader className="text-center pt-8">
            <CardTitle className="text-3xl">{recommended.name}</CardTitle>
            <CardDescription className="text-4xl font-bold text-primary mt-3">
              {recommended.speed}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center py-6 bg-muted/30 rounded-lg">
              <div className="text-5xl font-bold text-primary">{recommended.price} ₽</div>
              <div className="text-lg text-muted-foreground mt-2">в месяц</div>
            </div>
            <ul className="space-y-3">
              {recommended.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={22} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex-col gap-3">
            <Button size="lg" className="w-full text-lg" onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="Rocket" size={20} className="mr-2" />
              Подключить тариф
            </Button>
            <Button size="lg" variant="outline" className="w-full" onClick={() => document.getElementById('tariffs')?.scrollIntoView({ behavior: 'smooth' })}>
              Посмотреть все тарифы
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
