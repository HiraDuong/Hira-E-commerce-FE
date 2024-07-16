import { User } from "../src/types/user.types";

const user: User = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    dob: new Date("1980-01-01"),
    isActive: true,
    address: [{
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001",
        country: "USA"
    }],
    phone: "212-555-1234",  
    roles: ["admin", "user"],
    password: "password123"
};

export default user;