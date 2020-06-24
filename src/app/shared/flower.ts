import { Comment } from './comment';
export class Flower {
    id: string;
    name: string;
    image: string;
    featured: boolean;
    specifications: string;
    price: string;
    description: string;
    comments: Comment[];
}