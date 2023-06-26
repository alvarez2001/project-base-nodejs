const userTypes = {
  ReadUserService: Symbol.for("ReadUserService"),
  WriteUserService: Symbol.for("WriteUserService"),
  WriteUserRepository: Symbol.for("WriteUserRepository"),
  ReadUserRepository: Symbol.for("ReadUserRepository")
};

export default userTypes;