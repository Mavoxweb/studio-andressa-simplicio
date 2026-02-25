export interface Service {
  id: string
  title: string
  tagline: string
  description: string
  image: string
  imageAlt: string
}

export interface PainPoint {
  id: string
  title: string
  description: string
  icon: 'sparkles' | 'frown' | 'clock' | 'alert'
}

export interface Metric {
  value: string
  label: string
}

export interface NavLink {
  label: string
  href: string
}
