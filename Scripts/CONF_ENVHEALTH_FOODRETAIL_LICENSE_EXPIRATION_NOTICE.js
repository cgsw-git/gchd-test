{
	"EnvHealth/Food Retail/*/Permit": {
		"45 Day Notice": {
			"notificationTemplate": "SS_PERMIT_ABOUT_TO_EXPIRE",
			"notificationReport": false,
			"notifyContactTypes": "Applicant, Accounts Receivable",
			"mailerSetType": "Renewal",
			"mailerSetStatus": "Closed",
			"mailerSetPrefix": "LIC_ABOUT_TO_EXPIRE", 
			"updateExpirationStatus": "Pending",
			"updateRecordStatus": false,
			"updateWorkflowTask": false,
			"updateWorkflowStatus": false,
			"nextNotificationDays": 45,
			"nextNotification": "Expiration Notice",
			"invoiceOnNotification": true
		},
		"Expiration Notice": {
			"notificationTemplate": "SS_PERMIT_EXPIRATION_FINAL_NOTICE",
			"notificationReport": false,
			"notifyContactTypes": "Applicant, Accounts Receivable",
			"mailerSetType": "Renewal",
			"mailerSetStatus": "Closed",
			"mailerSetPrefix": "EXPIRATION_NOTICE",
			"updateExpirationStatus": "Delinquent",
			"updateRecordStatus": "Active",
			"updateWorkflowTask": false,
			"updateWorkflowStatus": false,
			"nextNotificationDays": false,
			"nextNotification": false,
			"inspectionType": false,
			"scheduleOutDays": false,
			"cancelAllInspections":false,
			"penalizeOnNtofication":false,
			"assessFees": [{
				"feeCode":"LATE FEE","feeSchedule":"EH_PENALTIES","feeQuantity":1,"feeInvoice":"Y","feePeriod":"Final"
				}
			]
		}
	}
}