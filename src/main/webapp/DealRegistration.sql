CRMid
To be considered in pipeline for 
FY
Sub-vertical
Geography
Country
Unit
Client
Deal - Description
Sub-vertical
Geography
Country
Unit
Client
Deal-Name
Aprrox. Deal Value (million USD)
CRM Stage
Deal Status
Deal Type
Service Line
Horizontal
Through Customer Connect/ Public Domain
"Passthru %
(Revenue to be passed to subContactor/Partner)"
Margin Range %
Tenure (Years)
Deal Size
Remarks(Reason for Loss/Win)
Competition
Bid Manager/SPOC
Scope
Important Contractual Clauses
Cust References
Proposed Core Team
Probability of Win
Commercial / Break Up Details
TPA(Third Party Analyst/External Consultant) involved
"
Geo"
Customer, Due Date  DealValue, Closure, Competition
Status 
Scope Clarity
Solutioning Capability
Solutioning Team
Partner Alliance Strength
Competitive Positioning
Relationship suite
Commercial Construct
Contract terms

CREATE TABLE IF NOT EXISTS `dealtrackerregistration` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `CRMid` varchar(100) NOT NULL,
  `usertype` varchar(100) NOT NULL,
  `bidmanager` varchar(100) NOT NULL,
  `subvertical` varchar(100) NOT NULL,
  `Geography` varchar(100) DEFAULT NULL,
  `country` varchar(100) NOT NULL,
  `unit` varchar(100) NOT NULL,
  `client` varchar(100) DEFAULT '0',
  `deal_Description` varchar(100) DEFAULT NULL,
  `deal_name` varchar(100) DEFAULT '0',
  `deal_Status` varchar(100) DEFAULT '0',
  `deal_type` varchar(100) DEFAULT NULL,
  `service_line varchar(100) DEFAULT NULL,
  `horizontal` varchar(100) DEFAULT '0',
  `throughconnect` varchar(100) DEFAULT NULL,
  `marginrange` varchar(100) DEFAULT NULL,
  `Tenure` varchar(100) DEFAULT NULL,
  `deal_size` varchar(100) DEFAULT NULL,
  `remarks` varchar(100) DEFAULT NULL,
  `competitions` varchar(100) DEFAULT NULL,
  `bidmanger` varchar(100) DEFAULT NULL,
  `custreferences` varchar(100) DEFAULT '0',
  `contractualcauses` varchar(100) DEFAULT '0',
  `commercialcontract` varchar(100) DEFAULT '0',
  `contractterms` varchar(100) DEFAULT NULL,
  `missschooldays` varchar(100) DEFAULT NULL,
  `eductnchallng` varchar(100) DEFAULT NULL,
  `schoolgrd` varchar(100) DEFAULT NULL,
  `formalassess` varchar(100) DEFAULT NULL,
  `impactQol` varchar(100) DEFAULT NULL,
  `condimpactschl` varchar(100) DEFAULT NULL,
  `condimpactschooldesc` varchar(100) DEFAULT NULL,

  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
