// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract adminData is Ownable(0x02e7520482045E2bA8a127C5d0D6E40a17024127),ReentrancyGuard {
    
    struct campaign{
        string title;
        string objetivo;
        string actividades;
        uint reward;
    }

    struct creator{
        string username;
        string descripcion;
        string red1;
        string red2;
        string red3;
        string red4;
    }

    struct enterprise{
        string name;
        string descripcion;
        string web;
        string red1;
        string red2;
    }

    uint countCamp;

    mapping (uint => campaign) public cantCampaign;
    mapping (uint => address[]) public cantVolunteers;
    mapping (uint => address[]) public creatorJobs;
    mapping (address => creator) public creators;
    mapping (address => enterprise) public enterprises;

    function setCampaign(string memory _title,string memory _objetivo,string memory _actividades,uint _reward) public onlyOwner{
        countCamp+=1;
        cantCampaign[countCamp]=campaign(_title,_objetivo,_actividades,_reward);
    }

    function setVolunteers(uint _num, address _volunteer)public onlyOwner{
        cantVolunteers[_num].push(_volunteer);
    }

    function setCreatorJobs(uint _num, address _volunteer) public onlyOwner {
        creatorJobs[_num].push(_volunteer);
    }

    function registerCreator(address _creator,string memory _username, string memory _red1, string memory _red2, 
    string memory _red3, string memory _red4, string memory _descripcion) public {
        creators[_creator] = creator(_username,_descripcion, _red1, _red2, _red3, _red4);
    }

    function registerEnterprise(address _enter, string memory _enterprise, string memory _descripcion, string memory _web, 
    string memory _red1, string memory _red2) public {
        enterprises[_enter] = enterprise(_enterprise,_descripcion,_web,_red1,_red2);
    }

      
}