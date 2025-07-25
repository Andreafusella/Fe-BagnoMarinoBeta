import axios from 'axios';
import type { LucideIcon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

const { VITE_BACKEND_URL } = import.meta.env;



export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    available: boolean;
    allergens?: string[];
    specialPreparation?: boolean;
  }

export interface IItem {
    id: number;
    name: number;
}

export interface IAllergenSymbols {
    [key: string]: string
}

export interface ICategory {
    id: number;
    icon: string;
    name: string;
    items: IItem[];
}

export interface ICategoryName {
    name: string;
}

export async function getAllergen(): Promise<IAllergenSymbols> {
    const response = await axios.get<IAllergenSymbols>(`${VITE_BACKEND_URL}/allergens`);
    return response.data;
}

export async function getCategoriesName(): Promise<ICategoryName[]> {
    const response = await axios.get<ICategoryName[]>(`${VITE_BACKEND_URL}/category`);
    return response.data;
}

export function getLucideIconByName(iconName: string): LucideIcon {
    const icon = (LucideIcons as unknown as Record<string, LucideIcon>)[iconName];
    return icon || LucideIcons.HelpCircle;
}