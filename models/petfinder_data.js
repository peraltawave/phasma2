// ANIMAL and PERSON MODEL (I combined them)
module.exports = function(sequelize, DataTypes) {
  // eslint-disable-next-line camelcase
  var petFinderData = sequelize.define("petfinder_data", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    animalSpecies: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    animalGenderMale: {
      type: DataTypes.STRING(255),
      allowNull: false
    },

    animalPic: {
      type: DataTypes.STRING(255), // THINKING THIS IS JUST A URL TO A PIC
      allowNull: true
    },
    animalFeatures: {
      type: DataTypes.TEXT, // notes on distinguishing features
      allowNull: true
    },
    foundStreet1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    foundStreet2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    latitude: {
      type: DataTypes.FLOAT(10, 6),
      allowNull: true,
      default: 0
    },
    longitude: {
      type: DataTypes.FLOAT(10, 6),
      allowNull: true,
      default: 0
    },
    personName: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    personEmail: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    foundDate: DataTypes.DATEONLY
  });
  // eslint-disable-next-line camelcase
  return petFinderData;
};
