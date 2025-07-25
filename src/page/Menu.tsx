import { useState, useEffect } from 'react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { MapPin, Phone, Clock, Waves, Fish, Utensils, Anchor, Shell, Pizza, ChefHat, Sun, Soup, Salad, Flame, Sandwich, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import CategoryCard from '@/components/componentsPlus/CategoryCard';
import ItemCard from '@/components/componentsPlus/ItemCard';
import type { IAllergens } from '@/components/componentsPlus/Allergen';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  available: boolean;
  allergens?: string[];
  specialPreparation?: boolean;
}

const menuData: MenuItem[] = [
  // ANTIPASTI E STUZZICHERIA - CARNE
  {
    id: '1',
    name: 'Prosciutto Crudo',
    description: 'Prosciutto crudo stagionato servito con pane tostato',
    price: 8.00,
    category: 'antipasti-carne',
    available: true
  },
  {
    id: '2',
    name: 'Prosciutto Crudo e Melone',
    description: 'Prosciutto crudo con melone fresco di stagione',
    price: 10.00,
    category: 'antipasti-carne',
    available: true
  },
  {
    id: '3',
    name: 'Caprese',
    description: 'Mozzarella di bufala, pomodoro fresco e basilico',
    price: 8.00,
    category: 'antipasti-carne',
    available: true,
    allergens: ['latte']
  },
  {
    id: '4',
    name: 'Caprese e Crudo',
    description: 'Caprese con aggiunta di prosciutto crudo',
    price: 10.00,
    category: 'antipasti-carne',
    available: true,
    allergens: ['latte']
  },
  {
    id: '5',
    name: 'Bruschetta al Pomodoro',
    description: 'Bruschetta con pomodoro fresco, aglio e basilico',
    price: 4.00,
    category: 'antipasti-carne',
    available: true,
    allergens: ['glutine']
  },
  {
    id: '6',
    name: 'Olive all\'Ascolana',
    description: 'Olive ripiene di carne e fritte secondo tradizione marchigiana',
    price: 6.00,
    category: 'antipasti-carne',
    available: true,
    allergens: ['glutine', 'uova', 'latte']
  },
  {
    id: '7',
    name: 'Patatine Fritte',
    description: 'Patatine fritte croccanti servite calde',
    price: 4.00,
    category: 'antipasti-carne',
    available: true
  },

  // PRIMI - CARNE
  {
    id: '8',
    name: 'Tortellini al Pomodoro',
    description: 'Tortellini freschi fatti in casa con sugo di pomodoro basilico',
    price: 10.00,
    category: 'primi-carne',
    available: true,
    allergens: ['glutine', 'uova', 'latte'],
    specialPreparation: true
  },
  {
    id: '9',
    name: 'Tortellini al Ragù',
    description: 'Tortellini freschi con ragù di carne tradizionale emiliano',
    price: 13.00,
    category: 'primi-carne',
    available: true,
    allergens: ['glutine', 'uova', 'latte'],
    specialPreparation: true
  },
  {
    id: '10',
    name: 'Gnocchi al Pomodoro',
    description: 'Gnocchi di patate freschi con sugo di pomodoro e basilico',
    price: 10.00,
    category: 'primi-carne',
    available: true,
    allergens: ['glutine', 'uova', 'latte'],
    specialPreparation: true
  },
  {
    id: '11',
    name: 'Chitarrina al Ragù',
    description: 'Pasta fresca abruzzese con ragù di carne della casa',
    price: 12.00,
    category: 'primi-carne',
    available: true,
    allergens: ['glutine', 'uova', 'latte'],
    specialPreparation: true
  },
  {
    id: '12',
    name: 'Lasagna della Casa',
    description: 'Lasagna tradizionale con ragù, besciamella e parmigiano',
    price: 13.00,
    category: 'primi-carne',
    available: true,
    allergens: ['glutine', 'uova', 'latte'],
    specialPreparation: true
  },
  {
    id: '13',
    name: 'Spaghetti al Pomodoro',
    description: 'Spaghetti con sugo di pomodoro fresco e basilico',
    price: 8.00,
    category: 'primi-carne',
    available: true,
    allergens: ['glutine']
  },

  // SECONDI - CARNE
  {
    id: '14',
    name: 'Entrecote di Angus Argentino',
    description: 'Entrecote di manzo alla griglia con rucola e scaglie di parmigiano',
    price: 22.00,
    category: 'secondi-carne',
    available: true,
    allergens: ['latte']
  },
  {
    id: '15',
    name: 'Cotoletta alla Milanese',
    description: 'Cotoletta di vitello impanata e fritta con patatine',
    price: 10.00,
    category: 'secondi-carne',
    available: true,
    allergens: ['glutine', 'uova', 'latte']
  },

  // CONTORNI
  {
    id: '16',
    name: 'Insalata Verde Mista',
    description: 'Insalata di stagione con lattuga, rucola e pomodorini',
    price: 4.00,
    category: 'contorni',
    available: true
  },
  {
    id: '17',
    name: 'Pomodoro a Fette',
    description: 'Pomodoro fresco a fette con origano e olio extravergine',
    price: 3.50,
    category: 'contorni',
    available: true
  },
  {
    id: '18',
    name: 'Verdure Grigliate',
    description: 'Melanzane, zucchine e peperoni grigliati con erbe aromatiche',
    price: 6.00,
    category: 'contorni',
    available: true
  },

  // ANTIPASTI FREDDI - PESCE
  {
    id: '19',
    name: 'Insalata di Mare',
    description: 'Insalata mista con polpo, gamberi, calamari e sedano',
    price: 12.00,
    category: 'antipasti-pesce-freddi',
    available: true,
    allergens: ['pesce', 'crostacei', 'molluschi']
  },
  {
    id: '20',
    name: 'Alici Marinate',
    description: 'Alici fresche dell\'Adriatico marinate con cipolla rossa e olio piccante',
    price: 10.00,
    category: 'antipasti-pesce-freddi',
    available: true,
    allergens: ['pesce']
  },
  {
    id: '21',
    name: 'Sgombro Marinato',
    description: 'Sgombro marinato servito con rucola e aceto balsamico',
    price: 10.00,
    category: 'antipasti-pesce-freddi',
    available: true,
    allergens: ['pesce']
  },
  {
    id: '22',
    name: 'Alici Salate e Burrata',
    description: 'Alici salate di Cetara con burrata pugliese fresca',
    price: 10.00,
    category: 'antipasti-pesce-freddi',
    available: true,
    allergens: ['pesce', 'latte']
  },
  {
    id: '23',
    name: 'Salmone Affumicato',
    description: 'Salmone affumicato norvegese con capperi e limone',
    price: 13.00,
    category: 'antipasti-pesce-freddi',
    available: true,
    allergens: ['pesce']
  },
  {
    id: '24',
    name: 'Scampi alla Catalana',
    description: 'Scampi freschi dell\'Adriatico con verdure alla catalana',
    price: 16.00,
    category: 'antipasti-pesce-freddi',
    available: true,
    allergens: ['crostacei']
  },

  // ANTIPASTI CALDI - PESCE
  {
    id: '25',
    name: 'Pepata di Cozze',
    description: 'Cozze fresche saltate con aglio, prezzemolo e pepe nero',
    price: 11.00,
    category: 'antipasti-pesce-caldi',
    available: true,
    allergens: ['molluschi']
  },
  {
    id: '26',
    name: 'Soutè di Vongole',
    description: 'Vongole veraci saltate con aglio, olio e prezzemolo',
    price: 13.00,
    category: 'antipasti-pesce-caldi',
    available: true,
    allergens: ['molluschi']
  },
  {
    id: '27',
    name: 'Rospetto con Pomodorini',
    description: 'Rospetto fresco con pomodorini ciliegino e olive taggiasche',
    price: 16.00,
    category: 'antipasti-pesce-caldi',
    available: true,
    allergens: ['pesce']
  },
  {
    id: '28',
    name: 'Scampi al Vino Bianco',
    description: 'Scampi freschi saltati al vino bianco con rosmarino',
    price: 18.00,
    category: 'antipasti-pesce-caldi',
    available: true,
    allergens: ['crostacei']
  },

  // PRIMI - PESCE
  {
    id: '29',
    name: 'Chitarrina allo Scoglio',
    description: 'Pasta fresca abruzzese con frutti di mare misti e pomodorini',
    price: 14.00,
    category: 'primi-pesce',
    available: true,
    allergens: ['glutine', 'pesce', 'crostacei', 'molluschi'],
    specialPreparation: true
  },
  {
    id: '30',
    name: 'Gnocchi al Pesto di Alici',
    description: 'Gnocchi freschi con pesto di alici e pinoli',
    price: 13.00,
    category: 'primi-pesce',
    available: true,
    allergens: ['glutine', 'pesce'],
    specialPreparation: true
  },
  {
    id: '31',
    name: 'Chitarrina alle Vongole',
    description: 'Pasta fresca con vongole veraci, aglio e prezzemolo',
    price: 13.00,
    category: 'primi-pesce',
    available: true,
    allergens: ['glutine', 'molluschi'],
    specialPreparation: true
  },
  {
    id: '32',
    name: 'Spaghetti alle Vongole',
    description: 'Spaghetti tradizionali con vongole veraci e vino bianco',
    price: 12.00,
    category: 'primi-pesce',
    available: true,
    allergens: ['glutine', 'molluschi']
  },

  // SECONDI - PESCE
  {
    id: '33',
    name: 'Frittura di Calamari',
    description: 'Calamari freschi infarinati e fritti, serviti croccanti',
    price: 14.00,
    category: 'secondi-pesce',
    available: true,
    allergens: ['glutine', 'molluschi']
  },
  {
    id: '34',
    name: 'Frittura di Alici Panate',
    description: 'Alici fresche panate e fritte secondo tradizione adriatica',
    price: 14.00,
    category: 'secondi-pesce',
    available: true,
    allergens: ['glutine', 'pesce']
  },
  {
    id: '35',
    name: 'Guazzetto di Pesce',
    description: 'Zuppa di pesce misto dell\'Adriatico (su prenotazione)',
    price: 28.00,
    category: 'secondi-pesce',
    available: true,
    allergens: ['pesce', 'crostacei', 'molluschi']
  },

  // PIZZERIA
  {
    id: '36',
    name: 'Focaccia Semplice',
    description: 'Focaccia alta cotta nel forno a legna con rosmarino',
    price: 4.50,
    category: 'pizzeria',
    available: true,
    allergens: ['glutine']
  },
  {
    id: '37',
    name: 'Pizza Margherita',
    description: 'Pomodoro San Marzano, mozzarella fior di latte e basilico fresco',
    price: 6.50,
    category: 'pizzeria',
    available: true,
    allergens: ['glutine', 'latte']
  },
  {
    id: '38',
    name: 'Pizza Prosciutto Cotto',
    description: 'Pomodoro, mozzarella e prosciutto cotto di alta qualità',
    price: 7.50,
    category: 'pizzeria',
    available: true,
    allergens: ['glutine', 'latte']
  },
  {
    id: '39',
    name: 'Pizza 4 Stagioni',
    description: 'Pomodoro, mozzarella, prosciutto, funghi, carciofi e olive',
    price: 8.50,
    category: 'pizzeria',
    available: true,
    allergens: ['glutine', 'latte']
  },
  {
    id: '40',
    name: 'Pizza Prosciutto Crudo',
    description: 'Pomodoro, mozzarella e prosciutto crudo di Parma',
    price: 9.50,
    category: 'pizzeria',
    available: true,
    allergens: ['glutine', 'latte']
  },
  {
    id: '41',
    name: 'Pizza Burrata e Alici',
    description: 'Pomodoro, burrata pugliese e alici del Mar Cantabrico',
    price: 10.00,
    category: 'pizzeria',
    available: true,
    allergens: ['glutine', 'latte', 'pesce']
  }
];

const categoryInfo = {
  'antipasti-carne': {
    name: 'Antipasti Terra',
    icon: ChefHat,
    gradient: 'from-sand-400 to-sand-600',
    color: 'text-sand-700',
    hoverGradient: 'from-sand-500 to-sand-700'
  },
  'primi-carne': {
    name: 'Primi Terra',
    icon: Soup,
    gradient: 'from-coral-400 to-coral-600',
    color: 'text-coral-700',
    hoverGradient: 'from-coral-500 to-coral-700'
  },
  'secondi-carne': {
    name: 'Secondi Terra',
    icon: Sandwich,
    gradient: 'from-coral-500 to-coral-700',
    color: 'text-coral-800',
    hoverGradient: 'from-coral-600 to-coral-800'
  },
  'contorni': {
    name: 'Contorni',
    icon: Salad,
    gradient: 'from-emerald-400 to-emerald-600',
    color: 'text-emerald-700',
    hoverGradient: 'from-emerald-500 to-emerald-700'
  },
  'antipasti-pesce-freddi': {
    name: 'Crudi Mare',
    icon: Fish,
    gradient: 'from-ocean-400 to-ocean-600',
    color: 'text-ocean-700',
    hoverGradient: 'from-ocean-500 to-ocean-700'
  },
  'antipasti-pesce-caldi': {
    name: 'Antipasti Mare',
    icon: Flame,
    gradient: 'from-ocean-500 to-ocean-700',
    color: 'text-ocean-800',
    hoverGradient: 'from-ocean-600 to-ocean-800'
  },
  'primi-pesce': {
    name: 'Primi Mare',
    icon: Waves,
    gradient: 'from-ocean-600 to-teal-600',
    color: 'text-ocean-800',
    hoverGradient: 'from-ocean-700 to-teal-700'
  },
  'secondi-pesce': {
    name: 'Secondi Mare',
    icon: Anchor,
    gradient: 'from-teal-500 to-teal-700',
    color: 'text-teal-800',
    hoverGradient: 'from-teal-600 to-teal-800'
  },
  'pizzeria': {
    name: 'Pizzeria',
    icon: Pizza,
    gradient: 'from-sand-500 to-coral-500',
    color: 'text-sand-800',
    hoverGradient: 'from-sand-600 to-coral-600'
  }
};

const allergenSymbols = {
  'glutine': '🌾',
  'crostacei': '🦐',
  'uova': '🥚',
  'pesce': '🐟',
  'latte': '🥛',
  'molluschi': '🐚'
};

function Test() {

  const exampleAllergens : IAllergens = {
    name: 'Glutine',
    icon: '🐚'
  }

  const [selectedCategory, setSelectedCategory] = useState('primi-carne');
  const [isLoaded, setIsLoaded] = useState(false);

  const categories = [
    'antipasti-carne',
    'primi-carne',
    'secondi-carne',
    'contorni',
    'antipasti-pesce-freddi',
    'antipasti-pesce-caldi',
    'primi-pesce',
    'secondi-pesce',
    'pizzeria'
  ];

  const getMenuByCategory = (category: string) => {
    return menuData.filter(item => item.category === category && item.available);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen modern-ocean-bg relative overflow-hidden layout-stable">

      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 ocean-accent-pattern">
        <div className="absolute top-20 right-10 opacity-[0.04]">
          <div className="w-80 h-80 rounded-full bg-gradient-to-br from-ocean-400 to-teal-400 blur-3xl animate-gradient-shift"></div>
        </div>
        <div className="absolute bottom-20 left-10 opacity-[0.04]">
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-emerald-400 to-ocean-400 blur-3xl animate-gradient-shift"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
          <div className="w-96 h-96 rounded-full bg-gradient-to-br from-teal-400 to-coral-400 blur-3xl"></div>
        </div>
      </div>

      {/* Beach Header with Palm Trees Background */}
      <header className="beach-header-bg glass-nav sticky top-0 z-50 relative overflow-hidden">
        <div
          className="absolute bottom-0 left-0 w-full h-full z-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, #fff4a8cc 0%, white 100%)',
          }}
        />
        <img
          src="/palma-sinistra.png"
          alt="Palmetta sinistra"
          className="absolute bottom-0 left-0 h-24 md:h-32 lg:h-40 object-contain z-0 pointer-events-none blur-none"
        />

        {/* Palmetta destra */}
        <img
          src="/palma-destra.png"
          alt="Palmetta destra"
          className="absolute bottom-0 right-0 h-24 md:h-32 lg:h-40 object-contain z-0 pointer-events-none blur-none"
        />
        <div className="content-container py-6 lg:py-8 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4">

            {/* Central Logo - The Main Title */}
            <div className="relative group">
              <div className="logo-hero-container w-32 h-32 lg:w-40 lg:h-40 rounded-4xl p-2 transition-deliveroo-slow">
                <img
                  src="/logo.png"
                  alt="Bagno Marino Logo"
                  className="w-full h-full object-contain relative z-10"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-ocean-500/20 via-teal-500/15 to-ocean-500/20 rounded-5xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            </div>

            {/* Subtitle Information */}
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-3" style={{ color: '#164e63' /* ocean-700 */ }}>
                <Anchor className="w-5 h-5" style={{ stroke: '#424242ff' }} />
                <span className="text-base lg:text-lg font-medium">Chalet • Martinsicuro</span>
                <Shell className="w-5 h-5" style={{ stroke: '#75d7faff' }} />
              </div>
              <div className="flex items-center justify-center gap-3">
                <Fish className="w-5 h-5" style={{ stroke: '#2002ffff' /* ocean-600 */ }} />
                <span className="text-sm lg:text-base font-medium" style={{ color: '#256d6d' }}>Pesce fresco dell'Adriatico</span>
                <Pizza className="w-5 h-5" style={{ stroke: '#f97316' /* coral-600 */ }} />
              </div>
            </div>

            {/* Decorative Icons Row */}
            <div className="flex items-center justify-center gap-8 opacity-60 pt-2">
              <div className="animate-float-ocean">
                <Waves className="w-6 h-6" style={{ stroke: '#38bdf8' /* ocean-500 (azzurro) */ }} />
              </div>
              <div className="animate-float-ocean" style={{ animationDelay: '1.5s' }}>
                <Sun className="w-5 h-5" style={{ stroke: '#facc15' /* sand-500 (giallo sabbia) */ }} />
              </div>
              <div className="animate-float-ocean" style={{ animationDelay: '3s' }}>
                <Shell className="w-5 h-5" style={{ stroke: '#fb923c' /* coral-500 */ }} />
              </div>
            </div>
          </div>
        </div>

      </header>

      {/* Reduced Hero Section */}
      <section className="relative py-12 lg:py-14 overflow-hidden">
        <div className="wave-decoration absolute bottom-0 left-0 w-full h-20"></div>
        <div className="content-container">
          <div className="text-center space-y-4 lg:space-y-5">
            <div className="flex items-center justify-center gap-5 lg:gap-6 mb-6">
              <div className="animate-float-ocean">
                <Fish
                  className="w-7 h-7 lg:w-8 lg:h-8"
                  style={{ stroke: '#0011ffff' }}
                />
              </div>
              <div className="animate-float-ocean" style={{ animationDelay: '1s' }}>
                <Sparkles
                  className="w-8 h-8 lg:w-9 lg:h-9"
                  style={{ stroke: '#0d9488' }}
                />
              </div>
              <div className="animate-float-ocean" style={{ animationDelay: '2s' }}>
                <Pizza
                  className="w-7 h-7 lg:w-8 lg:h-8"
                  style={{ stroke: '#f97316' }}
                />
              </div>
            </div>

            <h2 className="text-3xl lg:text-5xl xl:text-6xl text-ocean-gradient mb-4 lg:mb-5 font-bold tracking-tight leading-tight">
              Mare & Tradizione
            </h2>

            <p className="text-base lg:text-lg text-ocean-700 max-w-xl mx-auto leading-relaxed font-medium">
              Pesce fresco, menu di carne e pizze
            </p>

            <div className="flex items-center justify-center gap-6 lg:gap-8 pt-3 lg:pt-4 flex-wrap">
              <div className="flex items-center gap-2 text-ocean-600">
                <Shell
                  className="w-4 h-4"
                  style={{ stroke: '#5ce76aff' }}
                />
                <span className="font-medium text-sm">Mare</span>
              </div>
              <div className="w-1 h-1 bg-ocean-300 rounded-full"></div>
              <div className="flex items-center gap-2 text-ocean-600">
                <ChefHat
                  className="w-4 h-4"
                  style={{ stroke: '#814a2bff' }}
                />
                <span className="font-medium text-sm">Terra</span>
              </div>
              <div className="w-1 h-1 bg-ocean-300 rounded-full"></div>
              <div className="flex items-center gap-2 text-ocean-600">
                <Pizza
                  className="w-4 h-4"
                  style={{ stroke: '#ef4444' }}
                />
                <span className="font-medium text-sm">Forno</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section with Beach Background */}
      <main className="beach-menu-bg pb-20 lg:pb-24 relative">
        <div className="content-container">

          {/* Menu Header - Better Spacing */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-4 lg:gap-5 glass-card rounded-2xl lg:rounded-3xl px-8 lg:px-10 py-5 lg:py-6 shadow-deliveroo">
              <Utensils
                className="w-6 h-6 lg:w-7 lg:h-7"
                style={{ stroke: '#405fc2ff' }}
              />
              <h2 className="text-3xl lg:text-4xl text-ocean-gradient">Menu</h2>
              <Fish
                className="w-6 h-6 lg:w-7 lg:h-7"
                style={{ stroke: '#405fc2ff' }}
              />
            </div>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">

            {/* Enhanced Category Navigation - Properly Spaced */}

            <CategoryCard title={'Test'} icon={"Apple"} numberPlate={4}></CategoryCard>
            <div className="mb-16 lg:mb-20">
              <div className="mx-4 lg:mx-8 px-4 lg:px-6 py-10 lg:py-12">
                <div className="overflow-x-auto pb-4 lg:pb-6 no-scrollbar">
                  <div className="flex gap-4 lg:gap-5 min-w-max px-6 lg:px-12">
                    {categories.map((category, index) => {
                      const categoryData = categoryInfo[category as keyof typeof categoryInfo];
                      const Icon = categoryData.icon;
                      const isActive = selectedCategory === category;
                      const itemCount = getMenuByCategory(category).length;

                      return (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className="group relative flex flex-col items-center gap-3 lg:gap-4 px-8 lg:px-10 py-6 lg:py-7 min-w-[160px] lg:min-w-[180px] rounded-2xl lg:rounded-3xl flex-shrink-0 shadow-md border"
                          style={{
                            animationDelay: isLoaded ? `${index * 80}ms` : '0ms',
                            backgroundColor: '#ffffffff',
                            borderColor: isActive ? '#CBD5E1' : '#CBD5E1',
                            color: isActive ? '#fff4a8cc' : '#00d5ffff'
                          }}
                        >
                          <Icon
                            className="w-7 h-7 lg:w-8 lg:h-8 transition-deliveroo"
                            style={{ color: isActive ? '#ff8250ff' : '#405fc2ff' }}
                          />

                          <span
                            className="text-sm lg:text-base font-semibold text-center leading-tight transition-deliveroo"
                            style={{ color: isActive ? '#ff8250ff' : '#405fc2ff' }}
                          >
                            {categoryData.name}
                          </span>

                          <div
                            className="absolute top-1 right-1 w-6 h-6 lg:w-7 lg:h-7 rounded-full text-white text-[11px] font-bold flex items-center justify-center shadow-md"
                            style={{ backgroundColor: isActive ? '#ff8250ff' : '#405fc2ff' }}
                          >
                            {itemCount}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <ItemCard title={'Pasta al ragù'} description={'Buonissima pasta al ragù'} price={10.00} allergens={[exampleAllergens]}></ItemCard>

            {/* Menu Content - Improved Spacing */}
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="focus:outline-none">
                {(() => {
                  const categoryData = categoryInfo[category as keyof typeof categoryInfo];
                  const Icon = categoryData.icon;
                  const items = getMenuByCategory(category);

                  return (
                    <div className="space-y-8 lg:space-y-10">

                      {/* Smaller Category Header */}
                      <div className="flex justify-center">
                        <div
                          className="inline-flex items-center gap-3 lg:gap-4 rounded-xl lg:rounded-2xl px-6 lg:px-8 py-4 lg:py-5 shadow-deliveroo mx-auto"
                          style={{
                            backgroundColor: '#fef6e4', // sfondo card
                            border: '1px solid #f2e8cf', // bordo 
                          }}
                        >
                          {/* Icona */}
                          <div
                            className="p-2 lg:p-3 rounded-lg lg:rounded-xl shadow-lg"
                            style={{
                              background: 'linear-gradient(135deg, #f4a261, #e76f51)', // sfondo icona
                            }}
                          >
                            <Icon className="w-6 h-6 lg:w-7 lg:h-7" style={{ color: '#ffffff' }} />
                          </div>

                          {/* Nome categoria */}
                          <h3
                            className="text-xl lg:text-2xl font-semibold"
                            style={{
                              color: '#264653', // colore testo
                            }}
                          >
                            {categoryData.name}
                          </h3>

                          {/* Badge con numero piatti */}
                          <Badge
                            className="border-0 px-3 lg:px-4 py-1 lg:py-2 rounded-lg text-sm font-semibold"
                            style={{
                              background: 'linear-gradient(to right, #2a9d8f, #219ebc)',
                              color: '#ffffff',
                            }}
                          >
                            {items.length} piatti
                          </Badge>
                        </div>
                      </div>
                      {/* Menu Items Grid - Consistent Spacing */}
                      <div className="grid gap-4 lg:gap-5">
                        {items.map((item, index) => (
                          <div
                            key={item.id}
                            className="menu-card group rounded-2xl lg:rounded-3xl p-6 lg:p-8 transition-deliveroo-slow"
                            style={{
                              animationDelay: `${index * 80}ms`,
                              animationFillMode: 'both',
                            }}
                          >
                            <div className="flex items-start justify-between gap-6 lg:gap-8">

                              {/* Content Section */}
                              <div className="flex-1 space-y-3 lg:space-y-4 min-w-0">
                                {/* Title and Badge Row */}
                                <div className="flex items-start gap-3 lg:gap-4 flex-wrap">
                                  <h4 className="text-lg lg:text-2xl text-ocean-800 group-hover:text-ocean-gradient transition-deliveroo font-semibold leading-tight">
                                    {item.name}
                                  </h4>

                                </div>

                                {/* Description */}
                                <p className="text-ocean-700 leading-relaxed group-hover:text-ocean-800 transition-deliveroo text-sm lg:text-base">
                                  {item.description}
                                </p>

                                {/* Allergens - Enhanced Readability */}
                                {item.allergens && item.allergens.length > 0 && (
                                  <div className="flex flex-wrap items-center gap-2 lg:gap-3 pt-1 lg:pt-2">
                                    <span className="text-xs lg:text-sm text-ocean-600 font-semibold flex-shrink-0">Allergeni:</span>
                                    <div className="flex flex-wrap gap-2">
                                      {item.allergens.map((allergen) => (
                                        <Badge
                                          key={allergen}
                                          className="badge-allergen transition-deliveroo hover:scale-105 text-xs lg:text-sm"
                                        >
                                          <span className="mr-1">{allergenSymbols[allergen as keyof typeof allergenSymbols]}</span>
                                          {allergen}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>

                              {/* Price Section - Properly Aligned */}
                              <div className="text-right flex-shrink-0">
                                <div className="price-highlight text-2xl lg:text-3xl font-bold transition-deliveroo">
                                  {item.price.toFixed(2).replace('.', ',')}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Empty State - Centered and Spaced */}
                      {items.length === 0 && (
                        <div className="text-center py-16 lg:py-20">
                          <div className="glass-card rounded-3xl lg:rounded-4xl p-12 lg:p-16 max-w-md mx-auto">
                            <div className={`inline-flex p-4 lg:p-6 bg-gradient-to-br ${categoryData.gradient} rounded-2xl lg:rounded-3xl mb-6 lg:mb-8`}>
                              <Icon className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
                            </div>
                            <h4 className="text-xl lg:text-2xl text-ocean-800 mb-3 lg:mb-4 font-semibold">Categoria vuota</h4>
                            <p className="text-ocean-600 text-base lg:text-lg">Nessun piatto disponibile al momento.</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>

      {/* Footer with Larger Logo */}
      <footer className="bg-slate-900/95 backdrop-blur-sm text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/30 to-teal-900/30"></div>
        <div className="relative z-10 content-container py-16 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Enlarged Logo Section */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6 lg:mb-8">
                <div className="relative group">
                  <div className="logo-hero-container w-32 h-32 lg:w-40 lg:h-40 rounded-4xl p-2 transition-deliveroo-slow">
                    <img
                      src="/logo.png"
                      alt="Bagno Marino Logo"
                      className="w-full h-full object-contain relative z-10"
                    />
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-ocean-500/20 via-teal-500/15 to-ocean-500/20 rounded-5xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed text-base lg:text-lg">
                Tradizione culinaria che da sempre unisce qualità e passione.
              </p>
            </div>

            {/* Contact Section */}
            <div className="text-center lg:text-left">
              <h4 className="text-xl lg:text-2xl text-white mb-6 lg:mb-8 flex items-center justify-center lg:justify-start gap-3 lg:gap-4">
                <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-ocean-400" />
                Contatti
              </h4>
              <div className="space-y-4 lg:space-y-6 text-slate-300">
                <div className="flex items-center justify-center lg:justify-start gap-3 lg:gap-4">
                  <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-ocean-400 flex-shrink-0" />
                  <span className="text-sm lg:text-base">Via del Mare, 1 - Martinsicuro (TE)</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3 lg:gap-4">
                  <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-ocean-400 flex-shrink-0" />
                  <span className="text-sm lg:text-base">+39 0861 123456</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3 lg:gap-4">
                  <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-ocean-400 flex-shrink-0" />
                  <span className="text-sm lg:text-base">12:00-15:00 • 19:00-24:00</span>
                </div>
              </div>
            </div>


          </div>

          {/* Footer Bottom */}
          <div className="border-t border-slate-700 mt-12 lg:mt-16 pt-8 lg:pt-10 text-center">
            <div className="flex items-center justify-center gap-6 lg:gap-8 text-slate-400">
              <div className="animate-float-ocean">
                <Waves className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <span className="text-base lg:text-lg">© 2025 Bagno Marino - Martinsicuro</span>
              <div className="animate-float-ocean" style={{ animationDelay: '2s' }}>
                <Anchor className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Test;
