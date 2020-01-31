"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./../business/entities/user");
const baseDatabase_1 = require("./baseDatabase");
class UserDatabase extends baseDatabase_1.BaseDatabase {
    createNewUser(input) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
        INSERT INTO ${UserDatabase.USERS_TABLE} (id, name, email, birthday, age, photo, password) 
        VALUES (
          '${input.getId()}', 
          '${input.getName()}', 
          '${input.getEmail()}', 
          '${input.getbirthday()}', 
          ${input.getAge()}, 
          '${input.getPhoto()}', 
          '${input.getPassword()}'
        );
      `);
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.connection.raw(`SELECT * FROM ${UserDatabase.USERS_TABLE} WHERE email='${email}'`);
            const returnedUser = query[0][0];
            if (!returnedUser) {
                throw new Error('User not found.');
            }
            const newUser = new user_1.User(returnedUser.name, returnedUser.email, returnedUser.password, returnedUser.id, returnedUser.birthday, returnedUser.age, returnedUser.photo);
            return newUser;
        });
    }
    verifyIfUserExists(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.connection.raw(`SELECT * FROM ${UserDatabase.USERS_TABLE} WHERE id='${id}';`);
            const returnedUser = query[0][0];
            return Boolean(returnedUser);
        });
    }
    getAllUsers(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.connection.raw(`SELECT id, name, email, birthday, age, photo FROM ${UserDatabase.USERS_TABLE} WHERE id<>"${userId}";`);
            const users = query[0];
            const usersArray = users.map(this.dbModelToUser);
            const result = usersArray.map((user) => {
                return {
                    id: user.getId(),
                    name: user.getName(),
                    birthday: user.getbirthday(),
                    age: user.getAge(),
                    photo: user.getPhoto()
                };
            });
            return result;
        });
    }
    getAllMatches(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.connection.raw(`
        SELECT
         u.id, 
         u.name, 
         u.email, 
         u.birthday, 
         u.age, 
         u.photo,
         rel.is_a_match 
        FROM ${UserDatabase.USERS_RELATIONS_TABLE} rel
        JOIN ${UserDatabase.USERS_TABLE} u ON rel.id_liked_one=u.id
        WHERE rel.id_that_liked="${userId}" AND rel.is_a_match=1;
      `);
            const users = query[0];
            const usersArray = users.map(this.dbModelToUser);
            const result = usersArray.map((user) => {
                return {
                    id: user.getId(),
                    name: user.getName(),
                    birthday: user.getbirthday(),
                    age: user.getAge(),
                    photo: user.getPhoto()
                };
            });
            return result;
        });
    }
    match(personWhoLikedId, likedPersonId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.connection.raw(`
        INSERT INTO ${UserDatabase.USERS_RELATIONS_TABLE} (id_that_liked, id_liked_one, is_a_match) 
        VALUES ('${personWhoLikedId}','${likedPersonId}', '${this.isAmatch()}');
        `);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    unmatch(personWhoLikedId, userToUnmatchId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.connection.raw(`
          DELETE FROM ${UserDatabase.USERS_RELATIONS_TABLE}
          WHERE (id_that_liked = '${personWhoLikedId}') and (id_liked_one = '${userToUnmatchId}');
        `);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.UserDatabase = UserDatabase;
UserDatabase.USERS_TABLE = 'users_astromatch';
UserDatabase.USERS_RELATIONS_TABLE = 'matches_astromatch';
