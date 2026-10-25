export interface Project {
  id: string;
  title: string;
  category: string;
  type: 'Proyecto Real' | 'Demostración de Alto Rendimiento';
  description: string;
  clientNeed: string;
  solution: string;
  technologies: string[];
  imageSrc: string;
  liveUrl?: string;
  demoNote?: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  deliverables: string[];
  idealFor: string;
  estimatedTime: string;
  startingAtCop: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'precios' | 'tiempos' | 'hosting' | 'pagos';
}
