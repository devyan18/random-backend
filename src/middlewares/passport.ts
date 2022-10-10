import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import UserModel, { IUserModel } from "@modules/user/models/user.model";

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

export default new Strategy(opts, async (payload, done) => {
  try {
    const user = await UserModel.findById(payload.userId).populate("person");

    if (user) {
      return done(null, user as IUserModel);
    }

    return done(null, false);
  } catch (error) {
    console.log(error);
    done(error, false);
  }
});
