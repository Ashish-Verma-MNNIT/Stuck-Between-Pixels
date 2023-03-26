//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

//contract for certification of various companies
contract EcoFriendlyCertification {
    struct Certification {
        string productName;
        string certificationStandard;
        address certifiedBy;
        uint256 certificationDate;
        address certifiedTo;
    }

    Certification[] public certifications;

    //to tell whether a block is certifier or not
    mapping(address => bool) public certifiers;

    //to store transaction
    event CertificationCreated(
        string productName,
        string certificationStandard,
        address certifiedBy,
        uint256 certificationDate,
        address certifiedTo
    );

    constructor() {
        certifiers[msg.sender] = true;
    }

    modifier onlyCertifier() {
        require(
            certifiers[msg.sender],
            "Only authorized certifiers can use this function."
        );
        _;
    }

    // to add a new certifier
    function addCertifier(address _newCertifier) public onlyCertifier {
        certifiers[_newCertifier] = true;
    }

    // to remove a certifier
    function removeCertifier(address _certifierToRemove) public onlyCertifier {
        require(
            _certifierToRemove != msg.sender,
            "Cannot remove yourself as a certifier."
        );
        certifiers[_certifierToRemove] = false;
    }

    //create a certificate
    function createCertification(
        string memory _productName,
        string memory _certificationStandard,
        address _certifiedTo
    ) public onlyCertifier {
        uint256 certificationDate = block.timestamp;
        certifications.push(
            Certification(
                _productName,
                _certificationStandard,
                msg.sender,
                certificationDate,
                _certifiedTo
            )
        );
        emit CertificationCreated(
            _productName,
            _certificationStandard,
            msg.sender,
            certificationDate,
            _certifiedTo
        );
    }

    //to get details of a particular certificate
    function getCertification(
        uint256 _index
    ) public view returns (string memory, string memory, address, uint256) {
        require(_index < certifications.length, "Index out of range.");
        Certification memory cert = certifications[_index];
        return (
            cert.productName,
            cert.certificationStandard,
            cert.certifiedBy,
            cert.certificationDate
        );
    }

    // function transferCertificate(uint256 certificateId, address to) public {
    //     require(msg.sender == certificates[certificateId].owner, "Only the owner can transfer the certificate");
    //     require(certificates[certificateId].transferred == false, "Certificate has already been transferred");

    //     certificates[certificateId].transferred = true;
    //     certificates[certificateId].owner = to;

    //     emit CertificateTransferred(certificateId, msg.sender, to);
    // }
}
