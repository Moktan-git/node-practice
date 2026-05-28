const {Sequelize, DataTypes} = require("sequelize")
const sequelize = new Sequelize(DATABASE_URL="postgresql://postgres.deiowftukdrlxyvtilcz:meropailoblog@aws-1-ap-southeast-2.pooler.supabase.com:6543/postgres?pgbouncer=true")

sequelize.authenticate().then(()=>{
    console.log("Connection has been established successfully.");
}).catch((error)=>{
    console.error("Unable to connect to the database:", error);
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

sequelize.sync({alter: false}).then(()=>{
    console.log("Migrated vayo!");
}).catch((error)=>{
    console.error("Error aayo:", error);
})


module.exports = db 

