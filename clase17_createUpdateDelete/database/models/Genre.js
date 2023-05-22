module.exports = function(sequelize, dataTypes){
    let alias = "Genre"; //Es el nombre con el que identificaremos al modelo cuando lo necesitemos en un controlador.
    
    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        },
        ranking:{
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

    let genre = sequelize.define(alias, cols, conf);

    genre.associate = function(models){
        genre.hasMany(models.Movie, {
                as: 'movies',
                foreignKey: "genre_id"
            })
    }

    return genre
}