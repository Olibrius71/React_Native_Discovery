import * as FileSystem from 'expo-file-system';

// Define path to the data folder and users.json file
const dataDirPath = `${FileSystem.documentDirectory}data`;
const usersFilePath = `${dataDirPath}/users.json`;

// Helper function to read users from users.json
const readUsersFile = async () => {
    const usersData = await FileSystem.readAsStringAsync(usersFilePath);
    return JSON.parse(usersData);
};

// Helper function to write users to users.json
const writeUsersFile = async (data) => {
    await FileSystem.writeAsStringAsync(usersFilePath, JSON.stringify(data, null, 2));
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Account {
    // Register a new user
    async create(email, password, username) {
        const users = await readUsersFile();
        const newUser = {
            id: getRandomInt(10000, 99999),
            email,
            password,
            username,
        };
        users.push(newUser);
        await writeUsersFile(users);
        return newUser;
    }
    
    // Sign in a user by checking the email and password
    async signIn(email, password) {
        const users = await readUsersFile();
        const user = users.find(
            (user) => user.email === email && user.password === password
        );
        if (!user) {
            throw new Error('Invalid credentials');
        }
        return user;
    }
    
    // Get user account by user ID
    async getAccount(userId) {
        const users = await readUsersFile();
        const user = users.find((user) => user.id === userId);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
    
    async returnTrue() {
        return true;
    }
}

export default Account;
