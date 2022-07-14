import bcrypt from 'bcrypt';

const createHash = async (password) => {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash('password', salt);
    return hash;
};

const passwords = ['anonymous123', 'edward123', 'jason123', 'richter123'];

passwords.forEach((password) => {
    (async () => {
        const hash = await createHash('nnn');
        console.log(`${password} --> ${hash}`);
    })();
});
