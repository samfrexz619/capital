import { NavItems, DropdownContent, CtaItems, AccItems } from "./types"
import { cardData } from "./data"
import { uid } from 'uid'

export const navItems: NavItems[] = [
  {
    path: '/',
    name: 'home',
    id: 1
  },
  {
    path: '/team',
    name: 'team',
    id: 2
  },
  {
    path: '/task',
    name: 'task',
    id: 3
  },
  {
    path: '/share',
    name: 'share',
    id: 4
  },
  {
    path: '/doc',
    name: 'documents',
    id: 5
  },
  {
    path: '/note',
    name: 'notes',
    id: 6
  },
  {
    path: '/favorite',
    name: 'favorite',
    id: 7
  },
]

export const dropdownContent: DropdownContent[] = [
  {
    subject: 'Applied',
    badge: '1745',
    id: uid(4)
  },
  {
    subject: 'shortlisted',
    badge: '453',
    id: uid(4)
  },
  {
    subject: 'technical interview',
    badge: '123',
    id: uid(4)
  },
  {
    subject: 'opportunity browsing',
    badge: '25',
    id: uid(4)
  },
  {
    subject: 'video interview I',
    badge: '25',
    id: uid(4)
  },
  {
    subject: 'video interview II',
    badge: '25',
    id: uid(4)
  },
  {
    subject: 'video interview III',
    badge: '25',
    id: uid(4)
  },
  {
    subject: 'offer',
    badge: '25',
    id: uid(4)
  },
  {
    subject: 'withdrawn',
    badge: '25',
    id: uid(4)
  },
]

export const ctaItems: CtaItems[] = [
  {
    icon: 'tag',
    id: uid(4)
  },
  {
    icon: 'user1',
    id: uid(4)
  },
  {
    icon: 'user2',
    id: uid(4)
  },
  {
    icon: 'user3',
    id: uid(4)
  },
  {
    icon: 'mail',
    id: uid(4)
  },
]

export const accItems: AccItems[] = [
  {
    title: 'personal information',
    id: uid(4),
    // info: [
    //   {}
    // ]
  },
  {
    title: 'education',
    id: uid(4),
    // info: [
    //   {}
    // ]
  },
  {
    title: 'work experience',
    id: uid(4),
    // info: [
    //   {}
    // ]
  },
  {
    title: 'activity filter',
    id: uid(4),
    // info: [
    //   {}
    // ]
  },
  {
    title: 'advanced filter',
    id: uid(4),
    // info: [
    //   {}
    // ]
  },
]

export  const sum = cardData.map(item => {
  const qualified = item.qualified.length
  const disqualified = item.disqualified.length
  return qualified + disqualified;
})

export const disqualified = cardData?.map(item => {
  const disqualified = item.disqualified.length
  return disqualified;
})