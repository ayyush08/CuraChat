import { User } from "../models/user.model.js";
import { faker } from "@faker-js/faker";
const createUser = async(numUsers)=>{
    try {
        let usersPromise = [];
        for (let i = 0; i < numUsers;i++) {
            const tempUser = await User.create({
                name: faker.person.fullName(),
                username: faker.internet.displayName(),
                bio : faker.lorem.sentence(10),
                password: faker.internet.password(),
                avatar: {
                    public_id: faker.system.fileName(),
                    url: faker.image.avatar()
                }
            })
            usersPromise.push(tempUser)
            
        }
        await Promise.all(usersPromise)
        console.log("Users created successfully",numUsers);
        process.exit(1)
    } catch (error) {
        console.error("Error creating user: ",error)
        process.exit(1)
    }
}

export {createUser}