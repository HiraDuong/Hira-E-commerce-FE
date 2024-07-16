interface Address {
    country: string;
    street: string;
    city: string;
    state: string;
    zip: string;
}

interface User {
    id: number;
    name: string;
    email: string;
    dob: Date;
    address: Address[];
    phone: string;
    roles: string[];
    isActive: boolean;
    password: string;
}

export type { User, Address };
