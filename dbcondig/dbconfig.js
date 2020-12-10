const oracledb = require("oracledb");

cns = {
  user: "system",
  password: "12345Juan",
  connectString : "localhost/MundoGuante"
}

async function Open(sql, binds, autoCommit) {
  let cnn = await oracledb.getConnection(cns);
  let result = await cnn.execute(sql, binds, { autoCommit });
  cnn.release();
  return result;
}

exports.Open = Open;
