module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'drocker',
  database: 'meetapp',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
