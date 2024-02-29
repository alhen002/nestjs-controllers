import {Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class UsersService {
   private users = [
       {
           id: "1",
           name: "Alexander Henting",
           email: "a.henting@posteo.de",
           role: "ADMIN"
       }
   ]

    findAll(role?: "INTERN" | "ENGINEER" | "ADMIN") {
       if (role) {
           return this.users.filter((user) => user.role === role)
       }
        return this.users;
    }

    findOne(id: string) {
       return this.users.find((user) => user.id === id)
    }

    create(user: {name: string, email: string, role: "INTERN"| "ENGINEER"|"ADMIN"}) {
       const usersByHighestId = [...this.users].sort((a,b) => parseInt(b.id) - parseInt(a.id));
       const newId = parseInt(usersByHighestId[0].id) + 1;

       const newUser = {
           id: newId.toString(),
           ...user
       }
       this.users.push(newUser);
       return newUser;
    }
    update(id: string, updatedUser: {name?: string, email?: string, role?: "INTERN"| "ENGINEER"|"ADMIN"} ) {
       this.users = this.users.map((user) => {
           if (user.id === id) {
               return {
                   ...user,
                   ...updatedUser
               };
           }
           return user;
       })
        return this.findOne(id)
    }

    delete(id: string) {
       const removedUser = this.findOne(id)

        this.users = this.users.filter((user) => user.id !== id)

        return removedUser;
    }
}
