module.exports = {
  description: 'An empty backend',
  dataSources: {
    db: {
      connector: 'memory'
    }
  },
  models: {
    user: {
      dataSource: 'db',
      public: true,
      options: {
        base: 'User',
        relations: {
          accessTokens: {
            model: 'accessToken',
            type: 'hasMany',
            foreignKey: 'userId'
          }
        }
      }
    },
    accessToken: {
      dataSource: 'db',
      public: false,
      options: {
        base: 'AccessToken'
      }
    }
  },
  app: {
    port: 3000,
    host: '0.0.0.0'
  }
};
