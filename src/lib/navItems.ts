import { NavItems, DropdownContent } from "./types"
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