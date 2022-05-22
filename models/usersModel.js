// import users from '../data/user.js';
// import notices from '../data/notices.js';
import usersMongo from '../Database/usersMongo.js';

class UserModel {

    async getUser(user) {
        console.log(`---> userModel::getUser ${user.username}`);

        const users = await usersMongo.getUsers(user);
        
        return users;
    }

    async createUser(user) {
        console.log(`---> userModel::createUser ${user.username}`);

        await usersMongo.createUser(user);
        const users = await usersMongo.getUsers(user);

        return users;

    }

    getUserNotices(user){
        console.log(`---> userModel::getUser ${user.username}`);

        return undefined;
    }

    // updatePassword(user) {
    //     console.log(`---> userModel::updatePassword ${user.username}/${user.password}`);

    //     const _user = users.find(element => (element.username == user.username));
    //     if (_user !== undefined) { _user.password = user.newpassword; }

    //     console.log(`---> userModel::updatePassword ${_user.password}/${user.newpassword}`);

    //     return _user;

    // }
    
    // addProfileData(user) {
    //     console.log(`---> userModel::addProfileData ${user.username}`);
    //     const _user = users.find(element => (element.username == user.username));
    //     if (_user !== undefined) { _user.profiledata = user.profiledata; }

    //     return _user;
    // }

    // addGrantPrivileges(user) {
    //     console.log(`---> userModel::addGrantPrivileges ${user.username}`);
    //     const _user = users.find(element => (element.username == user.username));
    //     if (_user !== undefined) { _user.grants = user.grants; }

    //     return _user;
    // }

    // deleteGrantPrivileges(user) {
    //     console.log(`---> userModel::deleteGrantPrivileges ${user.username}`);
    //     const _user = users.find(element => (element.username == user.username));
    //     if (_user !== undefined) {
    //         _user.grants = _user.grants.filter(element => !user.grants.includes(element));
    //     }

    //     return _user;
    // }


    // insertGrantPrivileges(user) {
    //     console.log(`---> userModel::insertGrantPrivileges ${user.username}`);
    //     const _user = users.find(element => (element.username == user.username));
    //     // merge Arrays without Duplicates
    //     // if (_user !== undefined) { _user.grants.push(...user.grants); }
    //     if (_user !== undefined) {
    //         _user.grants = [...new Set([..._user.grants, ...user.grants])];

    //     }

    //     return _user;
    // }

    // dropUser(user) {
    //     console.log(`---> userModel::dropUser ${user.username}`);
    //     const _user = users.find(element => (element.username == user.username));
    //     if (_user !== undefined) { _user.active = 0; }

    //     return _user;

    // }

    // raiseUser(user) {
    //     console.log(`---> userModel::raiseUser ${user.username}`);
    //     const _user = users.find(element => (element.username == user.username));
    //     if (_user !== undefined) { _user.active = 1; }

    //     return _user;

    // }
}

export default new UserModel();