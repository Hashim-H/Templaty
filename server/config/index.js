const env = process.env

// module.exports = {
//   jwtSecret: env.JWT_SECRET,
//   mongoURL: env.MONGO_URL,
//   post: env.PORT,
//   googleId: env.GOOGLE_CLIENT_ID,
//   googleSecret: env.GOOGLE_CLIENT_SECRET,
//   googleCallbackURL: env.GOOGLE_CALLBACK_URL // 'www.your-domain.com/api/v1/auth/google/return'
// };

module.exports = {
    jwtSecret: "aadsbjfhgjahggoufhoausdhgoujhadsgoh0gajshg0u8w327-09487ahbsjgoh",
    mongoURL: "mongodb://admin:Ii12345678@ds241968.mlab.com:41968/keto",
    post: "3000",
    googleId: "684947437170-16pall7s57j3hphpmclvv47g8k7gp06v.apps.googleusercontent.com",
    googleSecret: "EsJVmbQZIqqmpPT2V6Q9P856",
    googleCallbackURL: "/auth/google/callback" // 'www.your-domain.com/api/v1/auth/google/return'
};