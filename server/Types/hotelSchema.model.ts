
export interface HotelInterface {
    name: string;
    type: string;
    address: string;
    contact: number;
    distance: string;
    description: string;
    title: String;
    photos?: string[];
    rating?: number;
    rooms: string[];
    cheapestPrice: number;
    featured?: boolean;
}