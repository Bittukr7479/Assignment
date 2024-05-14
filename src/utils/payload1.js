function getProposalPayload1() {
    return {
      "matchId": 646,
      "proposal": {
        "plantInfo": {
          "plantSize": 24,
          "plantType": "ONGRID",
          "panelType": "Mono",
          "description": "Vipul test"
        },
        "materials": [
          {
            "brand": "ADANI",
            "product": "SOLAR PANEL",
            "quantity": "87",
            "description": "",
            "govtApproved": "YES",
            "warrantyInYears": 30
          }
        ],
        "paymentTerms": {
          "orderConfirmation": "",
          "beforeMaterialDispatch": "",
          "beforeInstallationBegins": "",
          "afterCommissioning": ""
        },
        "pricing": {
          "installationCost": 182000,
          "gst": 13.8,
          "netMeteringCost": 0,
          "applicableStateSubsidy": "",
          "applicableCentralSubsidy": "",
          "totalCost": 207116
        },
        "otherInfo": []
      }
    };
  }
  
  const proposalPayload1 = getProposalPayload1();
  
  console.log(proposalPayload1);
   