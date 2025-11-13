export type DishItem = {
  name: string;
  description: string;
  course: string;
  price: number;
};
export interface MenuItem {
  name: string;
  description: string;
  course: 'Starter' | 'Main Meal' | 'Dessert' | 'Drink';
  price: number;
}
