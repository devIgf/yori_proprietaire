export interface Message {
  id: number;
  content: string;
  subject?: string;
  date: Date;
  file:File|null,
  showDropdown: false
  }