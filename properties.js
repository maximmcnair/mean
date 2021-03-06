var _ = require('lodash')
  , path = require('path')

  , baseProperties =
    { port: 4101
    , root: __dirname
    , session:
      { secret: 'dayz-G0n3-b____ai' }
    , db: 'mongodb://localhost/day-by-day'
    }

  , properties =
    { development:
      { port: 4001 }
    }


module.exports = function () {
  var env = process.env.NODE_ENV || 'development'
  return _.extend({ environment: env }, baseProperties, properties[env])
}