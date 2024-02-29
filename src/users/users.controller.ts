import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get() // get for /users or users?role=value
    findAll(@Query("role") role?: "INTERN" | "ENGINEER" | "ADMIN") {
        return []
    }
    @Get(":id") //users/:id
    findOne(@Param("id") id: string) {
        return { id }
    }
    @Post() // post/users
    create(@Body() user: {}) {
        return user;
    }
    @Patch(":id") //users/:id
    update(@Param("id") id: string, @Body() userUpdate: {}) {
        return {id, ...userUpdate};
    }
    @Delete(":id") //users/:id
    delete(@Param("id") id: string) {
        return {id};
    }
}
