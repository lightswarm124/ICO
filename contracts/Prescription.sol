pragma solidity ^0.4.8;

contract Prescription {
  address Doctor;
  address Pharmacist;

  function Prescription () {
    Doctor = msg.sender;
  }
}
