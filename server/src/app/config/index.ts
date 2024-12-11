import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  node_env: process.env.NODE_ENV,

  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  second_database_url: process.env.SECOND_DATABASE_URL,

  default_pass:process.env.DEFAULT_PASS,
  bcrypt_salt_round: process.env.BCRYPT_SALT_ROUNDS,

  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  jwt_access_expires_in:process.env.JWT_ACCESS_EXPIRES_IN,
  jwt_refresh_expires_in:process.env.JWT_REFRESH_EXPIRES_IN

};

// console.log("Primary DB URL:", process.env.DATABASE_URL);
// console.log("Secondary DB URL:", process.env.SECOND_DATABASE_URL);
