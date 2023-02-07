module.exports = (sequelize, DataTypes) => {
    const Notes = sequelize.define(
        "Notes",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            title: {
                type: DataTypes.STRING
            },
            description: {
                type: DataTypes.STRING
            },
            createdAt: {
                type: DataTypes.DATE
            },
            updatedAt: {
                type: DataTypes.DATE
            },
        },
        {
            tableName: "notes"
        }
    );
    return Notes;
}