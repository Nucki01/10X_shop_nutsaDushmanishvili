import type { Product } from '../types/product'

//The 3 main product categories in our dm (drogerie-markt) shop
export const CATEGORIES = [
  'All',
  'Skincare',
  'Hair Care',
  'Body & Personal Care',
] as const

// Sample list of 12 realistic dm (drogerie-markt) products organized into 3 categories
export const DM_PRODUCTS: Product[] = [
  // ==================== 1. SKINCARE ====================
  {
    id: 1,
    title: 'Balea Med Ultra Sensitive Wash Gel',
    brand: 'Balea',
    category: 'Skincare',
    price: 2.95,
    discountPercentage: 0,
    rating: 4.8,
    stock: 25,
    description:
      'Gentle fragrance-free facial cleansing gel with panthenol, ideal for sensitive and easily irritated skin.',
    thumbnail:
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 2,
    title: 'Balea Aqua Moisturizing Day Cream',
    brand: 'Balea',
    category: 'Skincare',
    price: 2.45,
    discountPercentage: 10,
    rating: 4.7,
    stock: 18,
    description:
      'Refreshing hydro day cream with thermal water and hyaluronic acid for 24-hour skin hydration.',
    thumbnail:
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 3,
    title: 'Balea Niacinamide 10% Refining Serum',
    brand: 'Balea',
    category: 'Skincare',
    price: 4.95,
    discountPercentage: 0,
    rating: 4.9,
    stock: 12,
    description:
      'Pore-refining facial serum with 10% niacinamide and 1% zinc to smooth skin texture and strengthen the skin barrier.',
    thumbnail:
      'https://images.unsplash.com/photo-1608248597359-0e6d526a6c18?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1608248597359-0e6d526a6c18?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 4,
    title: 'alverde NATURKOSMETIK Wild Rose Face Cream',
    brand: 'alverde',
    category: 'Skincare',
    price: 3.45,
    discountPercentage: 5,
    rating: 4.6,
    stock: 15,
    description:
      'Certified natural organic face cream with wild rose oil and shea butter to deeply nourish dry skin.',
    thumbnail:
      'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=800&q=80',
    ],
  },

  // ==================== 2. HAIR CARE ====================
  {
    id: 5,
    title: 'Balea Professional Repair + Care Shampoo',
    brand: 'Balea',
    category: 'Hair Care',
    price: 1.95,
    discountPercentage: 0,
    rating: 4.7,
    stock: 30,
    description:
      'Silicone-free repairing shampoo with keratin and argan oil for damaged, dry, and brittle hair.',
    thumbnail:
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 6,
    title: 'Balea Natural Beauty Hibiscus & Coconut Hair Milk',
    brand: 'Balea',
    category: 'Hair Care',
    price: 2.75,
    discountPercentage: 0,
    rating: 4.8,
    stock: 14,
    description:
      'Leave-in moisturizing hair milk with organic hibiscus extract and coconut milk for soft, frizz-free curls and waves.',
    thumbnail:
      'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 7,
    title: 'Isana Seidenglanz Shine Conditioner',
    brand: 'Isana',
    category: 'Hair Care',
    price: 1.45,
    discountPercentage: 0,
    rating: 4.5,
    stock: 22,
    description:
      'Smoothing hair conditioner with magnolia and lotus extract for silky shine and easy combing.',
    thumbnail:
      'https://images.unsplash.com/photo-1585232351009-aa87416fca90?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1585232351009-aa87416fca90?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 8,
    title: 'alverde Repair Hair Mask Avocado & Shea Butter',
    brand: 'alverde',
    category: 'Hair Care',
    price: 3.25,
    discountPercentage: 10,
    rating: 4.9,
    stock: 9,
    description:
      'Intensive organic hair treatment mask with avocado oil and shea butter to strengthen hair tips and prevent split ends.',
    thumbnail:
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
    ],
  },

  // ==================== 3. BODY & PERSONAL CARE ====================
  {
    id: 9,
    title: 'Balea Cream Shower Gel Buttermilk & Lemon',
    brand: 'Balea',
    category: 'Body & Personal Care',
    price: 0.85,
    discountPercentage: 0,
    rating: 4.8,
    stock: 40,
    description:
      'pH skin-neutral creamy shower gel with a fruity buttermilk and sweet lemon scent that protects skin from drying out.',
    thumbnail:
      'https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 10,
    title: 'Balea Med Rich Body Lotion 15% Urea',
    brand: 'Balea',
    category: 'Body & Personal Care',
    price: 2.65,
    discountPercentage: 0,
    rating: 4.9,
    stock: 20,
    description:
      'Intensive soothing body lotion with 15% urea, shea butter, and vitamin E for very dry and stressed skin.',
    thumbnail:
      'https://images.unsplash.com/photo-1601612628452-9e99ced43524?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1601612628452-9e99ced43524?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 11,
    title: 'Balea Sensitive Deodorant Roll-On 0% Aluminum',
    brand: 'Balea',
    category: 'Body & Personal Care',
    price: 1.15,
    discountPercentage: 0,
    rating: 4.6,
    stock: 28,
    description:
      'Gentle 24-hour deodorant roll-on with aloe vera and 0% aluminum or alcohol, suitable for use right after shaving.',
    thumbnail:
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 12,
    title: 'Balea Olive Oil & Shea Butter Hand Cream',
    brand: 'Balea',
    category: 'Body & Personal Care',
    price: 1.35,
    discountPercentage: 0,
    rating: 4.7,
    stock: 35,
    description:
      'Rich daily hand cream with virgin olive oil and shea butter to leave dry hands feeling soft and smooth.',
    thumbnail:
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80',
    ],
  },
]
