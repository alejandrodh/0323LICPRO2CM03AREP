module.exports = function(sequelize, dataTypes){
    let alias = "Movie"; //Es el nombre con el que identificaremos al modelo cuando lo necesitemos en un controlador.
    
    let cols = {
         id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        title: {
            type: dataTypes.STRING
        },
        rating:{
            type: dataTypes.DECIMAL
        },
        awards: {
            type: dataTypes.INTEGER
        },
        release_date:{
            type: dataTypes.DATE
        },
        length: {
            type: dataTypes.INTEGER
        },
        genre_id: {
            type: dataTypes.INTEGER
        },
        created_at:{
            type: dataTypes.DATE
        },
        updated_at:{
            type: dataTypes.DATE
        }
    }

    let conf = {
        // underscored: true,
        // tableName: "movies",
        //Si las tablas tienen los campos de auditoria con un nombre diferente a createdAt y updatedAt se lo indicamos así 👇
        createdAt: "created_at", //Le dice a la tabla cómo se llama el campo de auditoría en la tabla de la base de datos.
        updatedAt: "updated_at" //Le dice a la tabla cómo se llama el campo de auditoría en la tabla de la base de datos.
    }

    let movie = sequelize.define(alias, cols, conf);

    movie.associate = function(models){
        //Creo las relaciones con otros modelos
        movie.belongsTo(models.Genre, {
            as: "genre",
            foreignKey:"genre_id"
        })
    }

    return movie;
}