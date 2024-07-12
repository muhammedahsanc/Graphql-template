const { pool } = require("../../../../../../config/db");

const getAllCustomers = async () => {
  try {
    const [rows] = await pool.query(`SELECT * FROM CustomerMaster`);
    console.log("Successfully fetched all customers");
    return rows;
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw new Error("Failed to fetch Customers");
  }
};
const InsertCustomer = async (args) => {
  try {
    const {
      CustName,
      CustGender,
      HouseName,
      CustAddr1,
      CustAddr2,
      LandMark,
      CustPlace,
      CustCity,
      DistrictName,
      StateName,
      CountryName,
      CustPin,
      CustContPerson,
      CustContPhone,
      CustPhone,
      CustMob,
      CustEmail,
      CustFax,
      CustWebsite,
      CustRegDate,
      CustDefltTouch,
      CardNo,
      OpeningAmount,
      Created_by,
      Last_modified_by,
      Company_id,
      Branch_id,
      Counter_id,
      IsActive,
      TranferStatus,
      refID,
      AreaId,
      Panchayathid,
      ReligionId,
      CustPanNo,
      CustGstNo,
      VoucherTypeId,
      careof,
      LedgerCreation,
      CustAdharno,
      Relationship,
      RelationName,
      PanType,
    } = args;
    const [result] = await pool.query(
      `INSERT INTO CustomerMaster (    CustName, CustGender, HouseName, CustAddr1, CustAddr2, LandMark, CustPlace, 
CustCity, DistrictName, StateName, CountryName, CustPin, CustContPerson, 
CustContPhone, CustPhone, CustMob, CustEmail, CustFax, CustWebsite, 
CustRegDate, CustDefltTouch, CardNo, OpeningAmount, Created_by, Last_modified_by, 
Company_id, Branch_id, Counter_id, IsActive, TranferStatus, refID, AreaId, 
Panchayathid, ReligionId, CustPanNo, CustGstNo, VoucherTypeId, careof, LedgerCreation, 
CustAdharno, Relationship, RelationName, PanType) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        CustName,
        CustGender,
        HouseName,
        CustAddr1,
        CustAddr2,
        LandMark,
        CustPlace,
        CustCity,
        DistrictName,
        StateName,
        CountryName,
        CustPin,
        CustContPerson,
        CustContPhone,
        CustPhone,
        CustMob,
        CustEmail,
        CustFax,
        CustWebsite,
        CustRegDate,
        CustDefltTouch,
        CardNo,
        OpeningAmount,
        Created_by,
        Last_modified_by,
        Company_id,
        Branch_id,
        Counter_id,
        IsActive,
        TranferStatus,
        refID,
        AreaId,
        Panchayathid,
        ReligionId,
        CustPanNo,
        CustGstNo,
        VoucherTypeId,
        careof,
        LedgerCreation,
        CustAdharno,
        Relationship,
        RelationName,
        PanType,
      ]
    );
    const [user] = await pool.query(
      "SELECT CustId FROM CustomerMaster WHERE CustId = ?",
      [result.insertId]
    );
    return user[0];
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw new Error("Failed to fetch Customers");
  }
};
const updateCustomer = async (args) => {
  try {
    const { CustId, ...fieldsToUpdate } = args;
    const updates = Object.keys(fieldsToUpdate)
      .map((key) => `${key} = ?`)
      .join(", ");

    const values = Object.values(fieldsToUpdate);

    if (updates.length > 0) {
      await pool.query(
        `UPDATE CustomerMaster SET ${updates} WHERE CustId = ?`,
        [...values, CustId]
      );
    }

    const [user] = await pool.query(
      "SELECT CustId FROM CustomerMaster WHERE CustId = ?",
      [CustId]
    );
    return user[0];
  } catch (error) {
    throw new Error("Failed to update user: " + error.message);
  }
};
const deleteCustomer = async (CustId) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM CustomerMaster WHERE CustId = ?",
      [CustId]
    );

    if (result.affectedRows > 0) {
      return { message: `Delete successful for CustId ${CustId}` };
    } else {
      return { error: `Customer with CustId ${CustId} not found` };
    }
  } catch (error) {
    console.error(`Error deleting customer with CustId ${CustId}:`, error);
    return {
      error: `An error occurred while deleting customer with CustId ${CustId}`,
    };
  }
};

module.exports = {
  getAllCustomers,
  InsertCustomer,
  updateCustomer,
  deleteCustomer,
};
