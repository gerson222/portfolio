export interface Skills {
  imagen: string;
  titulo: string;
  color: string;
  value: number;
}

export const skillsData: Skills[] = [
  {
    imagen: 'https://example.com/javascript-icon.png',
    titulo: 'JavaScript',
    color: 'primary',
    value: 80,
  },
  {
    imagen: 'https://example.com/python-icon.png',
    titulo: 'Python',
    color: 'accent',
    value: 70,
  },
  {
    imagen: 'https://example.com/java-icon.png',
    titulo: 'Java',
    color: 'warn',
    value: 60,
  },
  {
    imagen: 'https://example.com/css-icon.png',
    titulo: 'CSS',
    color: 'primary',
    value: 90,
  },
  {
    imagen: 'https://example.com/html-icon.png',
    titulo: 'HTML',
    color: 'accent',
    value: 85,
  },
  {
    imagen: 'https://example.com/angular-icon.png',
    titulo: 'Angular',
    color: 'warn',
    value: 75,
  },
  {
    imagen: 'https://example.com/typescript-icon.png',
    titulo: 'TypeScript',
    color: 'primary',
    value: 80,
  },
];
