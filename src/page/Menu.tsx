import { useState, useEffect } from 'react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { MapPin, Phone, Clock, Waves, Fish, Utensils, Shrimp, Anchor, Shell, Pizza, ChefHat, Sun, Coffee, Salad, Sandwich, Sparkles, Beer , Wine, Soup, BottleWine, Cake, Martini} from 'lucide-react';
import { Badge } from '@/components/ui/badge';


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
  // BEVANDE
  {
    id: '1',
    name: 'Acqua 0,5L',
    description: 'dssds',
    price: 1.10,
    category: 'Bevande',
    available: true
  },
  {
    id: '2',
    name: 'Acqua 1L',
    description: '',
    price: 2.20,
    category: 'Bevande',
    available: true
  },
  {
    id: '3',
    name: 'Coca Cola 0,33L',
    description: '',
    price: 2.50,
    category: 'Bevande',
    available: true
  },
  {
    id: '4',
    name: 'Coca Cola 1L',
    description: '',
    price: 6.00,
    category: 'Bevande',
    available: true
  },
  {
    id: '5',
    name: 'Fanta 0,33L',
    description: '',
    price: 2.50,
    category: 'Bevande',
    available: true
  },
  {
    id: '6',
    name: 'Sprite 0,33L',
    description: '',
    price: 2.50,
    category: 'Bevande',
    available: true
  },
  {
    id: '7',
    name: 'Birra bot. Corona 0,33L',
    description: '',
    price: 4.00,
    category: 'Birre',
    available: true
  },
  {
    id: '8',
    name: 'Birra bot. Beck\'s 0,33L',
    description: '',
    price: 4.00,
    category: 'Birre',
    available: true
  },
  {
    id: '9',
    name: 'Birra bot. Tennet\'s 0,33L',
    description: '',
    price: 4.00,
    category: 'Birre',
    available: true
  },
  {
    id: '10',
    name: 'Birra bot. Ceres 0,33L',
    description: '',
    price: 4.00,
    category: 'Birre',
    available: true
  },
  {
    id: '11',
    name: 'Birra spina 0,3L',
    description: '',
    price: 3.50,
    category: 'Birre',
    available: true
  },
  {
    id: '12',
    name: 'Birra spina 0,5L',
    description: '',
    price: 5.50,
    category: 'Birre',
    available: true
  },
  {
    id: '13',
    name: 'Birra spina 1L',
    description: '',
    price: 11.00,
    category: 'Birre',
    available: true
  },
  {
    id: '14',
    name: 'Thè 0,5L',
    description: '',
    price: 2.50,
    category: 'Bevande',
    available: true
  },
  {
    id: '15',
    name: 'Lemon Soda 0,33L',
    description: '',
    price: 2.50,
    category: 'Bevande',
    available: true
  },
  {
    id: '16',
    name: 'Acqua Tonica',
    description: '',
    price: 3.00,
    category: 'Bevande',
    available: true
  },
  {
    id: '17',
    name: 'Schweppes Lemon',
    description: '',
    price: 3.00,
    category: 'Bevande',
    available: true
  },

  // CARTA DEI VINI - SPUMANTI E CHAMPAGNE
  {
    id: '18',
    name: 'Champagne Joseph Perrier Cuvèe Royale Brut Rosè',
    description: '',
    price: 100.00,
    category: 'Spumanti e Champagne',
    available: true
  },
  {
    id: '19',
    name: 'Champagne Joseph Perrier Cuvèe Royale Brut',
    description: '',
    price: 80.00,
    category: 'Spumanti e Champagne',
    available: true
  },
  {
    id: '20',
    name: 'Cuvèe Prestige Franciacorta docg Cà del Bosco',
    description: '',
    price: 50.00,
    category: 'Spumanti e Champagne',
    available: true
  },
  {
    id: '21',
    name: 'Cuvèe Prestige Rosè Franciacortadocg Cà del bosco',
    description: '',
    price: 60.00,
    category: 'Spumanti e Champagne',
    available: true
  },
  {
    id: '22',
    name: 'Uberti Franciacorta docg rosè Francesco I',
    description: '',
    price: 45.00,
    category: 'Spumanti e Champagne',
    available: true
  },
  {
    id: '23',
    name: 'Passerina spumante brut Frontenac',
    description: '',
    price: 18.00,
    category: 'Spumanti e Champagne',
    available: true
  },
  {
    id: '24',
    name: 'Prosecco doc Sant\'Orsola',
    description: '',
    price: 20.00,
    category: 'Spumanti e Champagne',
    available: true
  },

  // CARTA DEI VINI - VINI BIANCHI
  {
    id: '25',
    name: 'La Pettegola Vermentino igt Cantina Banfi',
    description: '',
    price: 23.00,
    category: 'Vini Bianchi',
    available: true
  },
  {
    id: '26',
    name: 'Fontanelle Chardonnay Cantina Banfi',
    description: '',
    price: 28.00,
    category: 'Vini Bianchi',
    available: true
  },
  {
    id: '27',
    name: 'Cortalto pecorino Colli Aprutini igt tenuta Cerulli Spinozzi',
    description: '',
    price: 18.00,
    category: 'Vini Bianchi',
    available: true
  },
  {
    id: '28',
    name: 'Nik passerina Colli Aprutini igt Frontenac',
    description: '',
    price: 14.00,
    category: 'Vini Bianchi',
    available: true
  },

  // CARTA DEI VINI - VINI ROSATI
  {
    id: '29',
    name: 'Gruè Cerasuolo d\'Abruzzo doc tenuta Cerulli Spinozzi',
    description: '',
    price: 14.00,
    category: 'Vini Rosati',
    available: true
  },
  {
    id: '30',
    name: 'Nik Cerasuolo d\'Abruzzo doc Cantina Frontenac',
    description: '',
    price: 14.00,
    category: 'Vini Rosati',
    available: true
  },
  {
    id: '31',
    name: 'Torre dei beati Cerasuolo d\'Abruzzo doc',
    description: '',
    price: 25.00,
    category: 'Vini Rosati',
    available: true
  },

  // CARTA DEI VINI - VINI ROSSI
  {
    id: '32',
    name: 'Gruè colline teramane docg tenuta Cerulli Spinozzi',
    description: '',
    price: 18.00,
    category: 'Vini Rossi',
    available: true
  },

  // CARTA DEI VINI - CALICI
  {
    id: '33',
    name: 'Gruè Cerasuolo d\'Abruzzo doc tenuta Cerulli Spinozzi (Calice)',
    description: '',
    price: 5.00,
    category: 'Calici',
    available: true
  },
  {
    id: '34',
    name: 'Nik Cerasuolo d\'Abruzzo doc Cantina Frontenac (Calice)',
    description: '',
    price: 5.00,
    category: 'Calici',
    available: true
  },
  {
    id: '35',
    name: 'Torre dei beati Cerasuolo d\'Abruzzo doc (Calice)',
    description: '',
    price: 8.00,
    category: 'Calici',
    available: true
  },
  {
    id: '36',
    name: 'Passerina spumante brut Frontenac (Calice)',
    description: '',
    price: 5.00,
    category: 'Calici',
    available: true
  },
  {
    id: '37',
    name: 'Prosecco doc Sant\'Orsola (Calice)',
    description: '',
    price: 5.00,
    category: 'Calici',
    available: true
  },
  {
    id: '38',
    name: 'La Pettegola Vermentino igt Cantina Banfi (Calice)',
    description: '',
    price: 7.00,
    category: 'Calici',
    available: true
  },
  {
    id: '39',
    name: 'Fontanelle Chardonnay Cantina Banfi (Calice)',
    description: '',
    price: 9.00,
    category: 'Calici',
    available: true
  },
  {
    id: '40',
    name: 'Cortalto pecorino Colli Aprutini igt tenuta Cerulli Spinozzi (Calice)',
    description: '',
    price: 6.00,
    category: 'Calici',
    available: true
  },
  {
    id: '41',
    name: 'Nik passerina Colli Aprutini igt Frontenac (Calice)',
    description: '',
    price: 5.00,
    category: 'Calici',
    available: true
  },
  {
    id: '42',
    name: 'Gruè colline teramane docg tenuta Cerulli Spinozzi (Calice)',
    description: '',
    price: 6.00,
    category: 'Calici',
    available: true
  },


  // LISTINO CAFFETTERIA
  {
    id: '43',
    name: 'Caffè',
    description: '',
    price: 1.30,
    category: 'Caffetteria',
    available: true
  },
  {
    id: '44',
    name: 'Caffè deca',
    description: '',
    price: 1.40,
    category: 'Caffetteria',
    available: true
  },
  {
    id: '45',
    name: 'Caffè macchiato',
    description: '',
    price: 1.40,
    category: 'Caffetteria',
    available: true
  },
  {
    id: '46',
    name: 'Caffè americano',
    description: '',
    price: 1.50,
    category: 'Caffetteria',
    available: true
  },
  {
    id: '47',
    name: 'Caffè corretto',
    description: '',
    price: 1.60,
    category: 'Caffetteria',
    available: true
  },
  {
    id: '48',
    name: 'Caffè moretto',
    description: '',
    price: 1.60,
    category: 'Caffetteria',
    available: true
  },
  {
    id: '49',
    name: 'Cappuccino',
    description: '',
    price: 1.70,
    category: 'Caffetteria',
    available: true
  },
  {
    id: '50',
    name: 'Latte macchiato',
    description: '',
    price: 2.00,
    category: 'Caffetteria',
    available: true
  },
  {
    id: '51',
    name: 'Latte bianco',
    description: '',
    price: 1.70,
    category: 'Caffetteria',
    available: true
  },
  {
    id: '52',
    name: 'Orzo',
    description: '',
    price: 1.70,
    category: 'Caffetteria',
    available: true
  },
  {
    id: '53',
    name: 'Ginseng',
    description: '',
    price: 1.80,
    category: 'Caffetteria',
    available: true
  },
  {
    id: '54',
    name: 'Cioccolata',
    description: '',
    price: 3.00,
    category: 'Caffetteria',
    available: true
  },
  {
    id: '55',
    name: 'Caffè shakerato',
    description: '',
    price: 3.50,
    category: 'Caffetteria',
    available: true
  },
  {
    id: '56',
    name: 'Caffè con ghiaccio',
    description: '',
    price: 1.50,
    category: 'Caffetteria',
    available: true
  },
  {
    id: '57',
    name: 'Caffè leccese',
    description: '',
    price: 2.50,
    category: 'Caffetteria',
    available: true
  },

  // LISTINO CAFFETTERIA - APERITIVO
  {
    id: '58',
    name: 'Prosecco',
    description: '',
    price: 4.00,
    category: 'Aperitivo',
    available: true
  },
  {
    id: '59',
    name: 'Crodino',
    description: '',
    price: 3.50,
    category: 'Aperitivo',
    available: true
  },
  {
    id: '60',
    name: 'Cocktail San Pellegrino',
    description: '',
    price: 3.50,
    category: 'Aperitivo',
    available: true
  },
  {
    id: '61',
    name: 'Campari',
    description: '',
    price: 3.50,
    category: 'Aperitivo',
    available: true
  },
  {
    id: '62',
    name: 'Campari e prosecco',
    description: '',
    price: 5.00,
    category: 'Aperitivo',
    available: true
  },
  {
    id: '63',
    name: 'Aperol Spritz',
    description: '',
    price: 5.00,
    category: 'Aperitivo',
    available: true
  },
  {
    id: '64',
    name: 'Campari e spritz',
    description: '',
    price: 6.00,
    category: 'Aperitivo',
    available: true
  },
  {
    id: '65',
    name: 'Birra 0,33 bott.',
    description: '',
    price: 4.00,
    category: 'Aperitivo',
    available: true
  },
  {
    id: '66',
    name: 'Birra 0,3L - 0,5L',
    description: '',
    price: 3.50,
    category: 'Aperitivo',
    available: true
  },
  {
    id: '67',
    name: 'Birra 1L',
    description: '',
    price: 11.00,
    category: 'Aperitivo',
    available: true
  },
  {
    id: '68',
    name: 'Long drink',
    description: '',
    price: 7.00,
    category: 'Aperitivo',
    available: true
  },
  {
    id: '69',
    name: 'Pestati',
    description: '',
    price: 8.00,
    category: 'Aperitivo',
    available: true
  },

  // DESSERT
  {
    id: '70',
    name: 'Sorbetto al limone',
    description: '',
    price: 4.00,
    category: 'Dessert',
    available: true
  },
  {
    id: '71',
    name: 'Cheesecake',
    description: '',
    price: 4.00,
    category: 'Dessert',
    available: true
  },
  {
    id: '72',
    name: 'Tiramisù',
    description: '',
    price: 4.00,
    category: 'Dessert',
    available: true
  },
  {
    id: '73',
    name: 'Tartufo bianco',
    description: '',
    price: 4.00,
    category: 'Dessert',
    available: true
  },
  {
    id: '74',
    name: 'Tartufo nero',
    description: '',
    price: 4.00,
    category: 'Dessert',
    available: true
  },
  {
    id: '75',
    name: 'Tartufo corretto al caffè bianco',
    description: '',
    price: 5.00,
    category: 'Dessert',
    available: true
  },
  {
    id: '76',
    name: 'Tartufo corretto al caffè nero',
    description: '',
    price: 5.00,
    category: 'Dessert',
    available: true
  },

  // ANTIPASTI E STUZZICHERIA - CARNE
  {
    id: '77',
    name: 'Prosciutto crudo',
    description: 'Prosciutto crudo stagionato',
    price: 8.00,
    category: 'Antipasti e Stuzzicheria - Carne',
    available: true
  },
  {
    id: '78',
    name: 'Prosciutto crudo e melone',
    description: 'Prosciutto crudo con melone fresco',
    price: 10.00,
    category: 'Antipasti e Stuzzicheria - Carne',
    available: true
  },
  {
    id: '79',
    name: 'Caprese',
    description: 'Mozzarella, pomodoro e basilico',
    price: 8.00,
    category: 'Antipasti e Stuzzicheria - Carne',
    available: true,
    allergens: ['Latte']
  },
  {
    id: '80',
    name: 'Caprese e crudo',
    description: 'Caprese con aggiunta di prosciutto crudo',
    price: 10.00,
    category: 'Antipasti e Stuzzicheria - Carne',
    available: true,
    allergens: ['Latte']
  },
  {
    id: '81',
    name: 'Bruschetta al pomodoro',
    description: 'Bruschetta con pomodoro fresco',
    price: 4.00,
    category: 'Antipasti e Stuzzicheria - Carne',
    available: true,
    allergens: ['Glutine']
  },
  {
    id: '82',
    name: 'Olive all\'ascolana',
    description: 'Olive ripiene fritte',
    price: 6.00,
    category: 'Antipasti e Stuzzicheria - Carne',
    available: true,
    allergens: ['Glutine', 'Uova', 'Latte']
  },
  {
    id: '83',
    name: 'Patatine fritte',
    description: 'Patatine fritte croccanti',
    price: 4.00,
    category: 'Antipasti e Stuzzicheria - Carne',
    available: true
  },

  // PRIMI - CARNE
  {
    id: '84',
    name: 'Tortellini al pomodoro',
    description: 'Tortellini freschi con sugo di pomodoro',
    price: 10.00,
    category: 'Primi - Carne',
    available: true,
    allergens: ['Glutine', 'Uova', 'Latte'],
    specialPreparation: true
  },
  {
    id: '85',
    name: 'Tortellini al ragù',
    description: 'Tortellini freschi con ragù di carne',
    price: 13.00,
    category: 'Primi - Carne',
    available: true,
    allergens: ['Glutine', 'Uova', 'Latte'],
    specialPreparation: true
  },
  {
    id: '86',
    name: 'Gnocchi/chitarrina al pomodoro',
    description: 'Pasta fresca con sugo di pomodoro',
    price: 10.00,
    category: 'Primi - Carne',
    available: true,
    allergens: ['Glutine', 'Uova', 'Latte'],
    specialPreparation: true
  },
  {
    id: '87',
    name: 'Gnocchi/chitarrina al ragù',
    description: 'Pasta fresca con ragù di carne',
    price: 12.00,
    category: 'Primi - Carne',
    available: true,
    allergens: ['Glutine', 'Uova', 'Latte'],
    specialPreparation: true
  },
  {
    id: '88',
    name: 'Lasagna',
    description: 'Lasagna della casa',
    price: 13.00,
    category: 'Primi - Carne',
    available: true,
    allergens: ['Glutine', 'Uova', 'Latte'],
    specialPreparation: true
  },
  {
    id: '89',
    name: 'Spaghetti al pomodoro',
    description: 'Spaghetti con sugo di pomodoro',
    price: 8.00,
    category: 'Primi - Carne',
    available: true,
    allergens: ['Glutine', 'Uova', 'Latte']
  },

  // SECONDI - CARNE
  {
    id: '90',
    name: 'Entrecote di angus argentino con rucola e parmigiano',
    description: 'Entrecote di manzo con rucola e parmigiano',
    price: 22.00,
    category: 'Secondi - Carne',
    available: true,
    allergens: ['Latte']
  },
  {
    id: '91',
    name: 'Cotoletta alla milanese con patatine fritte',
    description: 'Cotoletta impanata con patatine',
    price: 10.00,
    category: 'Secondi - Carne',
    available: true,
    allergens: ['Glutine', 'Uova', 'Latte']
  },

  // CONTORNI
  {
    id: '92',
    name: 'Insalata verde',
    description: 'Insalata mista verde',
    price: 4.00,
    category: 'Contorni',
    available: true
  },
  {
    id: '93',
    name: 'Pomodoro a fette',
    description: 'Pomodoro fresco a fette',
    price: 3.50,
    category: 'Contorni',
    available: true
  },
  {
    id: '94',
    name: 'Melanzane e zucchine grigliate',
    description: 'Verdure grigliate miste',
    price: 6.00,
    category: 'Contorni',
    available: true
  },

  // ANTIPASTI FREDDI - PESCE
  {
    id: '95',
    name: 'Insalata di mare',
    description: 'Insalata mista di mare',
    price: 12.00,
    category: 'Antipasti Freddi - Pesce',
    available: true,
    allergens: ['Crostacei', 'Pesce', 'Molluschi']
  },
  {
    id: '96',
    name: 'Alici marinate con cipolla rossa e olio piccante',
    description: 'Alici fresche marinate',
    price: 10.00,
    category: 'Antipasti Freddi - Pesce',
    available: true,
    allergens: ['Pesce']
  },
  {
    id: '97',
    name: 'Sgombro marinato con rucola e aceto balsamico',
    description: 'Sgombro marinato',
    price: 10.00,
    category: 'Antipasti Freddi - Pesce',
    available: true,
    allergens: ['Pesce']
  },
  {
    id: '98',
    name: 'Alici salate e burrata',
    description: 'Alici salate con burrata fresca',
    price: 10.00,
    category: 'Antipasti Freddi - Pesce',
    available: true,
    allergens: ['Pesce', 'Latte']
  },
  {
    id: '99',
    name: 'Salmone affumicato',
    description: 'Salmone affumicato norvegese',
    price: 13.00,
    category: 'Antipasti Freddi - Pesce',
    available: true,
    allergens: ['Pesce']
  },
  {
    id: '100',
    name: 'Scampi alla catalana',
    description: 'Scampi freschi alla catalana',
    price: 16.00,
    category: 'Antipasti Freddi - Pesce',
    available: true,
    allergens: ['Crostacei']
  },

  // ANTIPASTI CALDI - PESCE
  {
    id: '101',
    name: 'Pepata di cozze',
    description: 'Cozze fresche pepate',
    price: 11.00,
    category: 'Antipasti Caldi - Pesce',
    available: true,
    allergens: ['Molluschi']
  },
  {
    id: '102',
    name: 'Soutè di vongole',
    description: 'Vongole veraci saltate',
    price: 13.00,
    category: 'Antipasti Caldi - Pesce',
    available: true,
    allergens: ['Molluschi']
  },
  {
    id: '103',
    name: 'Rospetto con pomodorini e olive taggiasche',
    description: 'Rospetto con pomodorini',
    price: 16.00,
    category: 'Antipasti Caldi - Pesce',
    available: true,
    allergens: ['Pesce']
  },
  {
    id: '104',
    name: 'Scampi al vino bianco e rosmarino',
    description: 'Scampi al vino bianco',
    price: 18.00,
    category: 'Antipasti Caldi - Pesce',
    available: true,
    allergens: ['Crostacei']
  },
  {
    id: '105',
    name: 'Tagliata di totano',
    description: 'Totano fresco tagliato',
    price: 17.00,
    category: 'Antipasti Caldi - Pesce',
    available: true,
    allergens: ['Molluschi']
  },
  {
    id: '106',
    name: 'Trippa di rospo',
    description: 'Trippa di rospo fresca',
    price: 15.00,
    category: 'Antipasti Caldi - Pesce',
    available: true,
    allergens: ['Pesce']
  },

  // PRIMI - PESCE
  {
    id: '107',
    name: 'Gnocchi/chitarrina allo scoglio bianco/rosè',
    description: 'Pasta fresca allo scoglio',
    price: 14.00,
    category: 'Primi - Pesce',
    available: true,
    allergens: ['Glutine', 'Crostacei', 'Pesce', 'Molluschi'],
    specialPreparation: true
  },
  {
    id: '108',
    name: 'Gnocchi/chitarrina al pesto di alici',
    description: 'Pasta con pesto di alici',
    price: 13.00,
    category: 'Primi - Pesce',
    available: true,
    allergens: ['Glutine', 'Pesce'],
    specialPreparation: true
  },
  {
    id: '109',
    name: 'Gnocchi/chitarrina ai scampetti e pomodorini freschi',
    description: 'Pasta con scampetti',
    price: 15.00,
    category: 'Primi - Pesce',
    available: true,
    allergens: ['Glutine', 'Crostacei'],
    specialPreparation: true
  },
  {
    id: '110',
    name: 'Gnocchi/chitarrina alle vongole',
    description: 'Pasta con vongole veraci',
    price: 13.00,
    category: 'Primi - Pesce',
    available: true,
    allergens: ['Glutine', 'Molluschi'],
    specialPreparation: true
  },
  {
    id: '111',
    name: 'Gnocchi/chitarrina alle pannocchie',
    description: 'Pasta con pannocchie',
    price: 15.00,
    category: 'Primi - Pesce',
    available: true,
    allergens: ['Glutine', 'Crostacei'],
    specialPreparation: true
  },
  {
    id: '112',
    name: 'Gnocchi/chitarrina ai calamari rossi',
    description: 'Pasta con calamari rossi',
    price: 13.00,
    category: 'Primi - Pesce',
    available: true,
    allergens: ['Glutine', 'Molluschi'],
    specialPreparation: true
  },
  {
    id: '113',
    name: 'Gnocchi/chitarrina con coda di rospo e scampetti',
    description: 'Pasta con coda di rospo',
    price: 16.00,
    category: 'Primi - Pesce',
    available: true,
    allergens: ['Glutine', 'Crostacei', 'Pesce'],
    specialPreparation: true
  },
  {
    id: '114',
    name: 'Gnocchi/chitarrina con mazzancolle e vongole',
    description: 'Pasta con mazzancolle',
    price: 14.00,
    category: 'Primi - Pesce',
    available: true,
    allergens: ['Glutine', 'Crostacei', 'Molluschi'],
    specialPreparation: true
  },
  {
    id: '115',
    name: 'Spaghetto alle vongole',
    description: 'Spaghetti alle vongole veraci',
    price: 12.00,
    category: 'Primi - Pesce',
    available: true,
    allergens: ['Glutine', 'Molluschi'],
    specialPreparation: false
  },
  {
    id: '116',
    name: 'Mezzo rigatone allo scoglio bianco/rosè',
    description: 'Rigatoni allo scoglio',
    price: 13.00,
    category: 'Primi - Pesce',
    available: true,
    allergens: ['Glutine', 'Crostacei', 'Pesce', 'Molluschi'],
    specialPreparation: false
  },

  // SECONDI - PESCE
  {
    id: '117',
    name: 'Frittura di calamari',
    description: 'Calamari fritti freschi',
    price: 14.00,
    category: 'Secondi - Pesce',
    available: true,
    allergens: ['Glutine', 'Molluschi']
  },
  {
    id: '118',
    name: 'Frittura di alici panate',
    description: 'Alici panate e fritte',
    price: 14.00,
    category: 'Secondi - Pesce',
    available: true,
    allergens: ['Glutine', 'Pesce']
  },
  {
    id: '119',
    name: 'Frittura di alici infarinate',
    description: 'Alici infarinate e fritte',
    price: 13.00,
    category: 'Secondi - Pesce',
    available: true,
    allergens: ['Glutine', 'Pesce']
  },
  {
    id: '120',
    name: 'Guazzetto (su prenotazione)',
    description: 'Guazzetto di pesce misto',
    price: 28.00,
    category: 'Secondi - Pesce',
    available: true,
    allergens: ['Crostacei', 'Pesce', 'Molluschi']
  },

  // PIZZERIA
  {
    id: '121',
    name: 'Focaccia',
    description: 'Focaccia semplice',
    price: 4.50,
    category: 'Pizzeria',
    available: true,
    allergens: ['Glutine']
  },
  {
    id: '122',
    name: 'Marinara',
    description: 'Pomodoro, aglio, origano',
    price: 5.50,
    category: 'Pizzeria',
    available: true,
    allergens: ['Glutine']
  },
  {
    id: '123',
    name: 'Margherita',
    description: 'Pomodoro, mozzarella, basilico',
    price: 6.50,
    category: 'Pizzeria',
    available: true,
    allergens: ['Glutine', 'Latte']
  },
  {
    id: '124',
    name: 'Prosciutto cotto',
    description: 'Pomodoro, mozzarella, prosciutto cotto',
    price: 7.50,
    category: 'Pizzeria',
    available: true,
    allergens: ['Glutine', 'Latte']
  },
  {
    id: '125',
    name: 'Salame piccante',
    description: 'Pomodoro, mozzarella, salame piccante',
    price: 7.50,
    category: 'Pizzeria',
    available: true,
    allergens: ['Glutine', 'Latte']
  },
  {
    id: '126',
    name: 'Wrustel',
    description: 'Pomodoro, mozzarella, wurstel',
    price: 7.50,
    category: 'Pizzeria',
    available: true,
    allergens: ['Glutine', 'Latte']
  },
  {
    id: '127',
    name: 'Salsiccia',
    description: 'Pomodoro, mozzarella, salsiccia',
    price: 7.50,
    category: 'Pizzeria',
    available: true,
    allergens: ['Glutine', 'Latte']
  },
  {
    id: '128',
    name: 'Mais',
    description: 'Pomodoro, mozzarella, mais',
    price: 7.50,
    category: 'Pizzeria',
    available: true,
    allergens: ['Glutine', 'Latte']
  },
  {
    id: '129',
    name: 'Zucchine',
    description: 'Pomodoro, mozzarella, zucchine',
    price: 7.50,
    category: 'Pizzeria',
    available: true,
    allergens: ['Glutine', 'Latte']
  },
  {
    id: '130',
    name: 'Melanzane',
    description: 'Pomodoro, mozzarella, melanzane',
    price: 7.50,
    category: 'Pizzeria',
    available: true,
    allergens: ['Glutine', 'Latte']
  },
  {
    id: '131',
    name: 'Cipolla',
    description: 'Pomodoro, mozzarella, cipolla',
    price: 7.50,
    category: 'Pizzeria',
    available: true,
    allergens: ['Glutine', 'Latte']
  },
  {
    id: '132',
    name: 'Carciofi',
    description: 'Pomodoro, mozzarella, carciofi',
    price: 7.50,
    category: 'Pizzeria',
    available: true,
    allergens: ['Glutine', 'Latte']
  },
  {
    id: '133',
    name: 'Funghi',
    description: 'Pomodoro, mozzarella, funghi',
    price: 7.50,
    category: 'Pizzeria',
    available: true,
    allergens: ['Glutine', 'Latte']
  },
  {
    id: '134',
    name: '4 stagioni',
    description: 'Pomodoro, mozzarella, prosciutto, funghi, carciofi, olive',
    price: 8.50,
    category: 'Pizzeria',
    available: true,
    allergens: ['Glutine', 'Latte']
  },
  {
    id: '135',
    name: 'Boscaiola',
    description: 'Pomodoro, mozzarella, salsiccia, funghi',
    price: 8.50,
    category: 'Pizzeria',
    available: true,
    allergens: ['Glutine', 'Latte']
  },
  {
    id: '136',
    name: 'Capricciosa',
    description: 'Pomodoro, mozzarella, prosciutto, funghi, carciofi',
    price: 8.50,
    category: 'Pizzeria',
    available: true,
    allergens: ['Glutine', 'Latte']
  },
  {
    id: '137',
    name: '4 formaggi',
    description: 'Quattro formaggi misti',
    price: 8.50,
    category: 'Pizzeria',
    available: true,
    allergens: ['Glutine', 'Latte']
  },
  {
    id: '138',
    name: 'Prosciutto crudo',
    description: 'Pomodoro, mozzarella, prosciutto crudo',
    price: 9.50,
    category: 'Pizzeria',
    available: true,
    allergens: ['Glutine', 'Latte']
  },
  {
    id: '139',
    name: 'Rucola e parmigiano',
    description: 'Pomodoro, mozzarella, rucola, parmigiano',
    price: 9.50,
    category: 'Pizzeria',
    available: true,
    allergens: ['Glutine', 'Latte']
  },
  {
    id: '140',
    name: 'Tonno',
    description: 'Pomodoro, mozzarella, tonno',
    price: 9.50,
    category: 'Pizzeria',
    available: true,
    allergens: ['Glutine', 'Pesce', 'Latte']
  },
  {
    id: '141',
    name: 'Alici',
    description: 'Pomodoro, mozzarella, alici',
    price: 9.50,
    category: 'Pizzeria',
    available: true,
    allergens: ['Glutine', 'Pesce', 'Latte']
  },
  {
    id: '142',
    name: 'Tartufo',
    description: 'Pomodoro, mozzarella, tartufo',
    price: 9.50,
    category: 'Pizzeria',
    available: true,
    allergens: ['Glutine', 'Latte']
  },
  {
    id: '143',
    name: 'Bufala',
    description: 'Pomodoro, mozzarella di bufala',
    price: 9.50,
    category: 'Pizzeria',
    available: true,
    allergens: ['Glutine', 'Latte']
  },
  {
    id: '144',
    name: 'Burrata e alici',
    description: 'Pomodoro, burrata, alici',
    price: 10.00,
    category: 'Pizzeria',
    available: true,
    allergens: ['Glutine', 'Pesce', 'Latte']
  }
];

const categoryInfo = {
  'Pizzeria': {
    name: 'Pizzeria',
    icon: Pizza, // Assuming Pizza icon
    gradient: 'from-sand-500 to-coral-500',
    color: 'text-sand-800',
    hoverGradient: 'from-sand-600 to-coral-600'
  },
  'Secondi - Pesce': {
    name: 'Secondi Mare',
    icon: Anchor, // Assuming Anchor icon
    gradient: 'from-teal-500 to-teal-700',
    color: 'text-teal-800',
    hoverGradient: 'from-teal-600 to-teal-800'
  },
  'Primi - Pesce': {
    name: 'Primi Mare',
    icon: Waves, // Assuming Waves icon
    gradient: 'from-ocean-600 to-teal-600',
    color: 'text-ocean-800',
    hoverGradient: 'from-ocean-700 to-teal-700'
  },
  'Antipasti Caldi - Pesce': {
    name: 'Antipasti Mare',
    icon: Shrimp, // Assuming Flame icon
    gradient: 'from-ocean-500 to-ocean-700',
    color: 'text-ocean-800',
    hoverGradient: 'from-ocean-600 to-ocean-800'
  },
  'Antipasti Freddi - Pesce': {
    name: 'Crudi Mare',
    icon: Fish, // Assuming Fish icon
    gradient: 'from-ocean-400 to-ocean-600',
    color: 'text-ocean-700',
    hoverGradient: 'from-ocean-500 to-ocean-700'
  },
  'Contorni': { // Updated name to reflect new category naming from SQL
    name: 'Contorni',
    icon: Salad, // Assuming Salad icon
    gradient: 'from-emerald-400 to-emerald-600',
    color: 'text-emerald-700',
    hoverGradient: 'from-emerald-500 to-emerald-700'
  },
  'Secondi - Carne': {
    name: 'Secondi Terra',
    icon: Sandwich, // Assuming Sandwich icon
    gradient: 'from-coral-500 to-coral-700',
    color: 'text-coral-800',
    hoverGradient: 'from-coral-600 to-coral-800'
  },
  'Primi - Carne': {
    name: 'Primi Terra',
    icon: Soup, // Assuming Soup icon
    gradient: 'from-coral-400 to-coral-600',
    color: 'text-coral-700',
    hoverGradient: 'from-coral-500 to-coral-700'
  },
  'Antipasti e Stuzzicheria - Carne': {
    name: 'Antipasti Terra',
    icon: ChefHat, // Assuming ChefHat icon
    gradient: 'from-sand-400 to-sand-600',
    color: 'text-sand-700',
    hoverGradient: 'from-sand-500 to-sand-700'
  },
  'Dessert': {
    name: 'Dessert',
    icon: Cake, // Assuming a suitable icon
    gradient: 'from-rose-400 to-rose-600',
    color: 'text-rose-700',
    hoverGradient: 'from-rose-500 to-rose-700'
  },
  'Aperitivo': {
    name: 'Aperitivo',
    icon: Martini, // Assuming a suitable icon
    gradient: 'from-orange-400 to-orange-600',
    color: 'text-orange-700',
    hoverGradient: 'from-orange-500 to-orange-700'
  },
  'Caffetteria': {
    name: 'Caffetteria',
    icon: Coffee, // Assuming a suitable icon
    gradient: 'from-amber-700 to-amber-900',
    color: 'text-amber-900',
    hoverGradient: 'from-amber-800 to-amber-950'
  },
  'Calici': {
    name: 'Calici',
    icon: Wine, // Assuming a suitable icon
    gradient: 'from-gray-400 to-gray-600',
    color: 'text-gray-700',
    hoverGradient: 'from-gray-500 to-gray-700'
  },
  'Vini Rossi': {
    name: 'Vini Rossi',
    icon: Wine, // Assuming a suitable icon
    gradient: 'from-red-600 to-red-800',
    color: 'text-red-900',
    hoverGradient: 'from-red-700 to-red-900'
  },
  'Vini Rosati': {
    name: 'Vini Rosati',
    icon: Wine, // Assuming a suitable icon
    gradient: 'from-pink-400 to-pink-600',
    color: 'text-pink-700',
    hoverGradient: 'from-pink-500 to-pink-700'
  },
  'Vini Bianchi': {
    name: 'Vini Bianchi',
    icon: Wine, // Assuming a suitable icon
    gradient: 'from-yellow-200 to-yellow-400',
    color: 'text-yellow-600',
    hoverGradient: 'from-yellow-300 to-yellow-500'
  },
  'Spumanti e Champagne': {
    name: 'Spumanti e Champagne',
    icon: BottleWine, // Assuming a suitable icon
    gradient: 'from-purple-400 to-purple-600',
    color: 'text-purple-700',
    hoverGradient: 'from-purple-500 to-purple-700'
  },
  'Birre': {
    name: 'Birre',
    icon: Beer, // Assuming a suitable icon like a beer mug
    gradient: 'from-yellow-600 to-yellow-800',
    color: 'text-yellow-900',
    hoverGradient: 'from-yellow-700 to-yellow-900'
  },
  'Bevande': {
    name: 'Bevande',
    icon: Coffee, // Assuming a suitable icon like a drink icon
    gradient: 'from-blue-400 to-blue-600',
    color: 'text-blue-700',
    hoverGradient: 'from-blue-500 to-blue-700'
  }
};

const allergenSymbols = {
  'Glutine': '🌾',
  'Crostacei': '🦐',
  'Uova': '🥚',
  'Pesce': '🐟',
  'Arachidi': '🥜',
  'Soia': '🫘',
  'Latte': '🥛',
  'Frutta a guscio': '🌰',
  'Sedano': '🥬',
  'Senape': '🌶️',
  'Semi di sesamo': '🫧',
  'Anidride solforosa': '⚠️',
  'Lupini': '🫛',
  'Molluschi': '🐚'
};

function Test() {
  const [selectedCategory, setSelectedCategory] = useState('Bevande');
  const [isLoaded, setIsLoaded] = useState(false);

  const categories = [
    'Antipasti Caldi - Pesce',
    'Antipasti Freddi - Pesce',
    'Antipasti e Stuzzicheria - Carne',
    'Primi - Pesce',
    'Primi - Carne',
    'Secondi - Carne',
    'Secondi - Pesce',
    'Pizzeria',
    'Contorni',
    'Dessert',
    'Aperitivo',
    'Caffetteria',
    'Calici',
    'Vini Rossi',
    'Vini Rosati',
    'Vini Bianchi',
    'Spumanti e Champagne',
    'Birre',
    'Bevande'
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
            <div></div>
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

            {/* <CategoryCard title={'Test'} icon={"Apple"} numberPlate={4}></CategoryCard> */}
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

            {/* <ItemCard title={'Pasta al ragù'} description={'Buonissima pasta al ragù'} price={10.00} allergens={[exampleAllergens]}></ItemCard> */}

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
                  <span className="text-sm lg:text-base">Lungomare Europa - Martinsicuro (TE)</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3 lg:gap-4">
                  <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-ocean-400 flex-shrink-0" />
                  <span className="text-sm lg:text-base">+39 329 328 3319</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3 lg:gap-4">
                  <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-ocean-400 flex-shrink-0" />
                  <span className="text-sm lg:text-base">08:00-00:00</span>
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
