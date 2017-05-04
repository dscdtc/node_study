var User = require('../lib/mongo').User;

module.exports = {
    // 注册用户
    create: function create(user) {
        return User.create(user).exec();
    },

    //通过用户名获取信息
    getUserByName: function getUserByName(name) {
        return User
            .findOne({ name: name})
            .addCreatedAt() // addCreatedAt 自定义插件（通过 _id 生成时间戳）
            .exec();
    }
};