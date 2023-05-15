module.exports = function(sequelize, dataTypes){
    let alias = "Movie"; //Es el nombre del modelo en el controlador

    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        title: {
            type: dataTypes.STRING
        },
        length: {
            type: dataTypes.INTEGER
        },
        genre_id: {
            type: dataTypes.INTEGER
        },
        created_At:{
            type: dataTypes.DATE
        },
        updated_At:{
            type: dataTypes.DATE
        }
    }

    let config = {
        tableName:"movies",
        
    }

    let movie = sequelize.define(alias, cols, config);
    return movie

}