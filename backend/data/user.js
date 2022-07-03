import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'admin',
        email: 'admin@gmail.com',
        phone: 9087654312,
        password: bcrypt.hashSync('123',10),
        role: 'admin'
    },
    {
        name: 'vishwanath',
        email: 'vishwanathvishwabai@gmail.com',
        phone: 6385213119,
        password: bcrypt.hashSync('123',10),
        role: 'user'

    },
    {
        name: 'akash',
        email: 'akash@yahoo.com',
        phone: 9087654321,
        password: bcrypt.hashSync('123',10),
        role: 'maker'
    }

]

export default users;