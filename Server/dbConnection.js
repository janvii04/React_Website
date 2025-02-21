const Sequelize= require("sequelize")
const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD ,{
        host:process.env.DATABASE_LOCALHOST,
        dialect:"mysql"

    }

)
const connectionDB= async()=>{
    await sequelize.authenticate()
    .then(async()=>{
        await sequelize.sync({alter:false});
        console.log(`db connected and sync`);
    
    }
).catch((err)=>{
    console.log(err)
})
}
module.exports={
    sequelize:sequelize,
    connectionDB:connectionDB
}