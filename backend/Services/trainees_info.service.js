const conn = require("../Config/db.config");
const { v4: uuidv4 } = require('uuid');
async function createTraineeInfo(data) {
  const connection = await conn.pool.getConnection();
  try {
    await connection.beginTransaction();

    // First, insert into trainees table
    const traineeId = uuidv4();
    const traineeSql = `INSERT INTO trainees (trainee_id, email, password) VALUES (?, ?, ?)`;
    await connection.query(traineeSql, [
      traineeId,
      `${data.first_name.toLowerCase()}.${data.last_name.toLowerCase()}@example.com`,
      'defaultpassword123'
    ]);

    // Then, insert into trainees_info table
    const traineeInfoSql = `INSERT INTO trainees_info 
      (id, trainee_id, first_name, middle_name, last_name, sex, phone, profession, account_number) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const [result] = await connection.query(traineeInfoSql, [
      uuidv4(),
      traineeId,
      data.first_name,
      data.middle_name,
      data.last_name,
      data.sex,
      data.phone,
      data.profession,
      data.account_number
    ]);

    await connection.commit();
    return result;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}




async function createTraineeInfo(data) {
  const connection = await conn.pool.getConnection();
  try {
    await connection.beginTransaction();


//     const traineeSql = `INSERT INTO trainees (trainee_id, email, password) VALUES (?, ?, ?)`;
//     await connection.query(traineeSql, [
//       data.trainee_id,
//       `${data.first_name.toLowerCase()}.${data.last_name.toLowerCase()}@example.com`,
//       'defaultpassword123'
//     ]);

//     // Then, insert into trainees_info table
//     const traineeInfoSql = `INSERT INTO trainees_info 
//       (id, trainee_id, first_name, middle_name, last_name, sex, phone, profession, account_number) 
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

//     const [result] = await connection.query(traineeInfoSql, [
//       uuidv4(),
//       data.trainee_id,
//       data.first_name,
//       data.middle_name,
//       data.last_name,
//       data.sex,
//       data.phone,
//       data.profession,
//       data.account_number
//     ]);

//     await connection.commit();
//     return result;
//   } catch (error) {
//     await connection.rollback();
//     throw error;
//   } finally {
//     connection.release();
//   }
// }
// async function createTraineeInfoWithJoin(data) {
//   const connection = await conn.pool.getConnection();
//   try {
//     await connection.beginTransaction();

//     const traineeId = uuidv4();
//     const traineeSql = `
//       INSERT INTO trainees (trainee_id, email, password) 
//       VALUES (?, ?, ?)
//     `;
//     await connection.query(traineeSql, [
//       traineeId,
//       `${data.first_name.toLowerCase()}.${data.last_name.toLowerCase()}@example.com`,
//       'defaultpassword123'
//     ]);

//     const traineeInfoSql = `
//       INSERT INTO trainees_info 
//       (id, trainee_id, first_name, middle_name, last_name, sex, phone, profession, account_number) 
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
//     `;
//     const [result] = await connection.query(traineeInfoSql, [
//       uuidv4(),
//       traineeId,
//       data.first_name,
//       data.middle_name,
//       data.last_name,
//       data.sex,
//       data.phone,
//       data.profession,
//       data.account_number
//     ]);

//     await connection.commit();
//     return result;
//   } catch (error) {
//     await connection.rollback();
//     throw error;
//   } finally {
//     connection.release();
//   }
// }


const traineeSql = `INSERT INTO trainees (trainee_id, email, password) VALUES (?, ?, ?)`;
await connection.query(traineeSql, [
  data.trainee_id,
  `${data.first_name.toLowerCase()}.${data.last_name.toLowerCase()}@example.com`,
  'defaultpassword123'
]);

// Then, insert into trainees_info table
const traineeInfoSql = `INSERT INTO trainees_info 
  (id, trainee_id, first_name, middle_name, last_name, sex, phone, profession, account_number) 
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

const [result] = await connection.query(traineeInfoSql, [
  uuidv4(),
  data.trainee_id,
  data.first_name,
  data.middle_name,
  data.last_name,
  data.sex,
  data.phone,
  data.profession,
  data.account_number
]);

await connection.commit();
return result;
} catch (error) {
await connection.rollback();
throw error;
} finally {
connection.release();
}
}

async function createTraineeInfoWithJoin(data) {
const connection = await conn.pool.getConnection();
try {
await connection.beginTransaction();

const traineeId = uuidv4();
const traineeSql = `
  INSERT INTO trainees (trainee_id, email, password) 
  VALUES (?, ?, ?)
`;
await connection.query(traineeSql, [
  traineeId,
  `${data.first_name.toLowerCase()}.${data.last_name.toLowerCase()}@example.com`,
  'defaultpassword123'
]);

const traineeInfoSql = `
  INSERT INTO trainees_info 
  (id, trainee_id, first_name, middle_name, last_name, sex, phone, profession, account_number) 
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`;
const [result] = await connection.query(traineeInfoSql, [
  uuidv4(),
  traineeId,
  data.first_name,
  data.middle_name,
  data.last_name,
  data.sex,
  data.phone,
  data.profession,
  data.account_number
]);

await connection.commit();
return result;
} catch (error) {
await connection.rollback();
throw error;
} finally {
connection.release();
}
}

// async function updateTraineeInfo(id, data) {
// const connection = await conn.pool.getConnection();
// try {
// await connection.beginTransaction();

// // Update trainees_info table first
// const updateTraineeInfoSql = `UPDATE trainees_info SET ? WHERE id = ?`;
// await connection.query(updateTraineeInfoSql, [data, id]);

// // Then update trainees table
// const updateTraineeSql = `UPDATE trainees SET email = ? WHERE trainee_id = (
//   SELECT trainee_id FROM trainees_info WHERE id = ?
// )`;
// await connection.query(updateTraineeSql, [
//   `${data.first_name.toLowerCase()}.${data.last_name.toLowerCase()}@example.com`,
//   id
// ]);

// await connection.commit();
// return getTraineeInfoById(id);
// } catch (error) {
// await connection.rollback();
// throw error;
// } finally {
// connection.release();
// }
// }


async function updateTraineeInfo(id, data) {
  const connection = await conn.pool.getConnection();
  try {
    await connection.beginTransaction();

    // Update trainees_info table
    const updateInfoQuery = `
      UPDATE trainees_info 
      SET first_name = ?,
          middle_name = ?,
          last_name = ?,
          sex = ?,
          phone = ?,
          profession = ?,
          account_number = ?
      WHERE id = ?
    `;

    await connection.query(updateInfoQuery, [
      data.first_name,
      data.middle_name || '',
      data.last_name,
      data.sex,
      data.phone,
      data.profession,
      data.account_number,
      id
    ]);

    // Update email in trainees table
    const updateEmailQuery = `
      UPDATE trainees t
      JOIN trainees_info ti ON t.trainee_id = ti.trainee_id
      SET t.email = ?
      WHERE ti.id = ?
    `;

    const newEmail = `${data.first_name.toLowerCase()}.${data.last_name.toLowerCase()}@example.com`;
    await connection.query(updateEmailQuery, [newEmail, id]);

    await connection.commit();

    // Return updated data
    const [updatedData] = await connection.query(
      'SELECT * FROM trainees_info WHERE id = ?',
      [id]
    );
    return updatedData[0];

  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}

async function deleteTraineeInfo(id) {
const connection = await conn.pool.getConnection();
try {
await connection.beginTransaction();

// Delete from trainees_info table first
const deleteTraineeInfoSql = `DELETE FROM trainees_info WHERE id = ?`;
await connection.query(deleteTraineeInfoSql, [id]);

// Then delete from trainees table
const deleteTraineeSql = `DELETE FROM trainees WHERE trainee_id = (
  SELECT trainee_id FROM trainees_info WHERE id = ?
)`;
await connection.query(deleteTraineeSql, [id]);

await connection.commit();
return true;
} catch (error) {
await connection.rollback();
throw error;
} finally {
connection.release();
}
}

async function getAllTraineesInfo() {
  const sql = `
    SELECT ti.*, t.email 
    FROM trainees_info ti 
    JOIN trainees t ON ti.trainee_id = t.trainee_id
  `;
  
  const connection = await conn.pool.getConnection();
  try {
    const [rows] = await connection.query(sql);
    return rows;
  } catch (error) {
    throw error;
  } finally {
    await connection.release();
  }
}

async function getTraineeInfoById(id) {
  const sql = `SELECT * FROM trainees_info WHERE id = ?`;
  const connection = await conn.pool.getConnection();
  try {
    const [rows] = await connection.query(sql, [id]);
    return rows[0];
  } catch (error) {
    throw error;
  } finally {
    await connection.release();
  }
}

// async function updateTraineeInfo(id, data) {
//   const sql = `UPDATE trainees_info SET ? WHERE id = ?`;
//   const connection = await conn.pool.getConnection();
//   try {
//     await connection.beginTransaction();
//     const [result] = await connection.query(sql, [data, id]);
//     await connection.commit();
//     if (result.affectedRows === 0) return null;
//     return getTraineeInfoById(id);
//   } catch (error) {
//     await connection.rollback();
//     throw error;
//   } finally {
//     await connection.release();
//   }
// }

async function deleteTraineeInfo(id) {
  const sql = `DELETE FROM trainees_info WHERE id = ?`;
  const connection = await conn.pool.getConnection();
  try {
    await connection.beginTransaction();
    const [result] = await connection.query(sql, [id]);
    await connection.commit();
    return result.affectedRows > 0;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    await connection.release();
  }
}

module.exports = {
  createTraineeInfo,
  getAllTraineesInfo,
  getTraineeInfoById,
  updateTraineeInfo,
  deleteTraineeInfo
};
