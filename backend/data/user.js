import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin',
        email: 'admin@gmail.com',
        phone: 1234567890,
        password: bcrypt.hashSync('123',10),
        isAdmin: true
    },
    {
        name: 'vishwanath',
        email: 'vishwanathvishwabai@gmail.com',
        phone: 6385213119,
        password: bcrypt.hashSync('123',10),

    },
    {
        name: 'akash',
        email: 'akash@yahoo.com',
        phone: 0987654321,
        password: bcrypt.hashSync('123',10),
        isOwner: true
    }

]

export default users;