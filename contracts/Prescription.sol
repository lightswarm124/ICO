pragma solidity ^0.4.8;

contract Prescription {
  address Doctor;
  address Patient;
  address Pharmacist;
  bytes32 Drug;
  bool Active;
  //Max TotalDosage = 2^8 = 256
  uint8 TotalDosage;

  modifier CheckActive (bool _active) {
    if (Active == true) _;
  }

  function Prescription (
    address _doctor,
    byte32 _drug,
    uint8 _totalDosage
  ) {
    Patient = msg.sender;
    Doctor = _doctor;
    Drug = _drug;
    TotalDosage = _totalDosage;
    Active = true;
  }

  function Pharmacy (address _pharmacist) CheckActive (Active) {
    Pharmacist = _pharamcist;
    Active = false;
  }

  function () { throw; }
}
