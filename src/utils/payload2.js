function getProposalPayload2() {
    return {
        "id": 8,
        "proposal": {
            "pricing": {
                "gst": 10,
                "totalCost": 208900,
                "netMeteringCost": 100,
                "installationCost": 190000,
                "applicableStateSubsidy": 100,
                "applicableCentralSubsidy": 100
            },
            "materials": [
                {
                    "brand": "Adani - NEW",
                    "product": "SOLAR PANEL",
                    "quantity": "246",
                    "description": "Mono crystalline 2.32",
                    "govtApproved": "NO",
                    "warrantyInYears": 25
                },
                {
                    "brand": "Sungrow",
                    "product": "INVERTER",
                    "quantity": "2",
                    "description": "50kW",
                    "govtApproved": "NO",
                    "warrantyInYears": 10
                },
                {
                    "brand": "Mehta Trading is Loong text how do we fit this?",
                    "product": "SOLAR BATTERY",
                    "quantity": "200",
                    "description": "5 ft x 8ft",
                    "govtApproved": "NO",
                    "warrantyInYears": 10
                }
            ],
            "otherInfo": [],
            "plantInfo": {
                "panelType": "MONO",
                "plantSize": 12,
                "plantType": "On-Grid",
                "description": "On Grid Monocrystalline Plant"
            },
            "paymentTerms": {
                "orderConfirmation": 20,
                "afterCommissioning": 10,
                "beforeMaterialDispatch": 40,
                "beforeInstallationBegins": 30
            }
        },
        "sentToCustomer": false,
        "createdAt": "2023-12-09T23:55:39.804Z",
        "updatedAt": "2023-12-10T11:44:03.775Z",
        "match": {
            "id": 2,
            "metadata": {
                "distance": "20KM",
                "timeline": "2 months",
                "matchScore": 20,
                "matchParameters": [
                    {
                        "param1": "param2"
                    }
                ]
            },
            "vendorFeedback": null,
            "customerFeedback": null,
            "status": "CONNECTED",
            "followUp": "2023-10-26",
            "comments": null,
            "createdAt": "2023-10-07T01:24:22.088Z",
            "updatedAt": "2023-12-06T13:10:45.100Z",
            "vendor": {
                "id": 49,
                "establishmentName": "DKS Solar Solutions Private Limited",
                "establishmentDate": "2022-09-01",
                "experienceInMW": 0.1,
                "plantSizeInMW": 0.015,
                "verificationStatus": "VERIFIED",
                "comments": null,
                "isActive": true,
                "hasLogo": true,
                "createdAt": "2023-07-04T07:16:03.742Z",
                "updatedAt": "2023-07-04T07:16:03.742Z",
                "address": {
                    "id": 33,
                    "street1": "cv",
                    "street2": null,
                    "landmark": null,
                    "locality": null,
                    "district": null,
                    "state": null,
                    "country": null,
                    "pinCode": 560005,
                    "identifierName": null,
                    "latitude": null,
                    "longitude": null,
                    "isActive": true,
                    "createdAt": "2023-07-04T07:16:03.742Z",
                    "updatedAt": "2023-07-29T14:25:40.751Z"
                },
                "contacts": [
                    {
                        "id": 79,
                        "fullName": "Rohan Shetty",
                        "phoneNumber": "918669093722",
                        "email": "rhshetty01@gmail.com",
                        "prefCommChannel": null,
                        "userSource": null,
                        "verificationStatus": "PENDING",
                        "comments": null,
                        "userType": "VENDOR",
                        "isActive": true,
                        "createdAt": "2023-10-30T11:49:37.518Z",
                        "updatedAt": "2023-10-30T13:11:34.245Z"
                    },
                    {
                        "id": 35,
                        "fullName": "sadsa",
                        "phoneNumber": "7758863335",
                        "email": "x@y.com",
                        "prefCommChannel": null,
                        "userSource": null,
                        "verificationStatus": "PENDING",
                        "comments": null,
                        "userType": "VENDOR",
                        "isActive": true,
                        "createdAt": "2023-10-07T01:31:15.799Z",
                        "updatedAt": "2023-10-07T01:31:15.799Z"
                    },
                    {
                        "id": 46,
                        "fullName": "Rohan Shetty",
                        "phoneNumber": "911231231239",
                        "email": "kuchbhi@gmail.com",
                        "prefCommChannel": "WHATSAPP",
                        "userSource": "WHATSAPP",
                        "verificationStatus": "PENDING",
                        "comments": null,
                        "userType": "CUSTOMER",
                        "isActive": true,
                        "createdAt": "2023-04-30T09:47:33.252Z",
                        "updatedAt": "2023-07-29T09:34:23.194Z"
                    },
                    {
                        "id": 8,
                        "fullName": "Test Auth",
                        "phoneNumber": "919960997651",
                        "email": "test@auth.com",
                        "prefCommChannel": null,
                        "userSource": null,
                        "verificationStatus": "PENDING",
                        "comments": null,
                        "userType": "VENDOR",
                        "isActive": true,
                        "createdAt": "2023-07-29T09:06:53.242Z",
                        "updatedAt": "2023-12-15T01:43:35.149Z"
                    },
                    {
                        "id": 14,
                        "fullName": "saad",
                        "phoneNumber": "12121331122",
                        "email": "12@asa.com",
                        "prefCommChannel": "WHATSAPP",
                        "userSource": null,
                        "verificationStatus": "PENDING",
                        "comments": "check date",
                        "userType": "VENDOR",
                        "isActive": true,
                        "createdAt": "2023-07-29T13:54:03.186Z",
                        "updatedAt": "2023-07-29T13:54:03.186Z"
                    }
                ],
                "documents": [
                    {
                        "id": 10,
                        "name": "Aadhar Card",
                        "description": "pehchan hai bhai uska",
                        "url": "s3://vaysolar-documents-staging/identities/49-1692097665008-IMG_9992 3.JPG",
                        "documentType": "IDENTITY",
                        "verificationStatus": "REJECTED",
                        "comments": "hello",
                        "isActive": true,
                        "createdAt": "2023-08-12T07:40:25.883Z",
                        "updatedAt": "2023-08-15T05:37:46.728Z"
                    },
                    {
                        "id": 11,
                        "name": "Certificate of Participation",
                        "description": "SolarBoi",
                        "url": "s3://vaysolar-documents-staging/certifications/49-1691847832430-04ddf2da-28dd-499e-9d2d-cf9c1690bac4 3.JPG",
                        "documentType": "CERTIFICATION",
                        "verificationStatus": "VERIFIED",
                        "comments": "check date",
                        "isActive": true,
                        "createdAt": "2023-08-12T08:13:52.875Z",
                        "updatedAt": "2023-08-12T08:13:52.875Z"
                    },
                    {
                        "id": 12,
                        "name": "Proposal Test",
                        "description": "test",
                        "url": "s3://vaysolar-documents-staging/proposals/49-1692169734018-26-49-1692097516802-21302B9D-3A2B-4B98-8EC0-2636BACE1EB7 3.JPG",
                        "documentType": "PROPOSAL",
                        "verificationStatus": "REJECTED",
                        "comments": "check date",
                        "isActive": true,
                        "createdAt": "2023-08-16T01:38:55.065Z",
                        "updatedAt": "2023-08-16T01:38:55.065Z"
                    },
                    {
                        "id": 9,
                        "name": "sasa",
                        "description": "sasaddas",
                        "url": "s3://vaysolar-documents-staging/references/49-1705325422480-2-1696777984953-Sept Invoice_1439135621 (1) (3).pdf",
                        "documentType": "REFERENCE",
                        "verificationStatus": "PENDING",
                        "comments": null,
                        "isActive": true,
                        "createdAt": "2024-01-15T08:00:22.980Z",
                        "updatedAt": "2024-01-15T08:00:22.980Z"
                    },
                    {
                        "id": 13,
                        "name": "sdsa",
                        "description": "dasas",
                        "url": "s3://vaysolar-documents-staging/identities/49-1705325570919-2-1696777984953-Sept Invoice_1439135621 (1) (1).pdf",
                        "documentType": "IDENTITY",
                        "verificationStatus": "PENDING",
                        "comments": null,
                        "isActive": true,
                        "createdAt": "2024-01-15T08:02:51.648Z",
                        "updatedAt": "2024-01-15T08:02:51.648Z"
                    },
                    {
                        "id": 116,
                        "name": "undefined Logo",
                        "description": "Logo for undefined",
                        "url": "s3://vaysolar-documents-staging/logos/49-1710789073932-test_logo_5.jpeg",
                        "documentType": "LOGO",
                        "verificationStatus": "PENDING",
                        "comments": null,
                        "isActive": true,
                        "createdAt": "2024-03-18T13:41:14.628Z",
                        "updatedAt": "2024-03-18T13:41:14.628Z"
                    }
                ]
            },
            "customer": {
                "id": 8,
                "fullName": "Test Auth",
                "phoneNumber": "919960997651",
                "email": "test@auth.com",
                "prefCommChannel": null,
                "userSource": null,
                "verificationStatus": "PENDING",
                "comments": null,
                "userType": "VENDOR",
                "isActive": true,
                "createdAt": "2023-07-29T09:06:53.242Z",
                "updatedAt": "2023-12-15T01:43:35.149Z",
                "propertyDetails": [
                    {
                        "id": 2,
                        "propertyType": "RESIDENTIAL",
                        "pinCode": 560005,
                        "shadowFreeArea": 210,
                        "billAmount": 1200,
                        "billMonth": "MAY",
                        "sanctionedLoad": 1,
                        "electricityBillUrl": "s3://vaysolar-documents-staging/electricity-bills/918669093722-gsfc-spendz-1apr22.pdf",
                        "monthsToInstall": null,
                        "followUp": null,
                        "verificationStatus": "PENDING",
                        "comments": null,
                        "winPercentage": null,
                        "createdAt": "2023-06-24T15:19:31.272Z",
                        "updatedAt": "2023-06-24T15:19:31.272Z",
                        "address": null
                    }
                ]
            }
        }
    }
}
    const proposalPayload2 = getProposalPayload2();

    console.log(proposalPayload2)    
