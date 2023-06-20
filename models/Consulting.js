import mongoose from "mongoose";

const userSchema = mongoose.Schema({
user:[String],
	//Phase_1
	First_Name: String,
	Last_Name: String,
	Company: String,
	Email: String,
	Phone_Number: String,
	Address: String,
	City: String,
	Zip: String,
	Address_2: String,
	State_: String,
	United_States: String,
	Agreement: String,


	//Phase_2

	Description1: String,
	NRTL_CB_Scheme_Certification_Support: Boolean,
	Electrical_Safety_Test_Plan_Preparation: Boolean,
	FDA_510__k___Premarket_tification_Regulatory_Submission: Boolean,
	EMC_Test_Plan_Preparation: Boolean,
	FDA_De_vo_Program_Regulatory_Submission: Boolean,
	Preliminary_Design___Construction_Review__PDR__: Boolean,
	FDA_Pre_Submission_Request_for_Feedback: Boolean,
	Prepare_or_Review_Insulation_Isolation_Diagram: Boolean,
	FDA_513__g___Request_for_Classification: Boolean,
	Risk_Management_File_Review_and_Checklist_Completion: Boolean,
	EU_MDR_Technical_Documentation_Assessment: Boolean,
	Software_Lifecycle_Document_Review_and_Checklist_Completion: Boolean,
	EU_IVDR_Technical_Documentation_Assessment: Boolean,
	Usability_File_Review_and_Checklist_Completion: Boolean,
	UK_Medical_Device_Technical_Documentation_Assessment: Boolean,
	Accompanying_Documents_Review_and_Checklist_Completion: Boolean,
	UK_IVD_Technical_Documentation_Assessment: Boolean,
	NRTL_Recognition_for_rth_America: Boolean,
	Global_Market_Access___Regulatory_Requirements_Definition: Boolean,
	Coexistence_Risk_Assessment_and_Test_Plan: Boolean,
	Global_Market_Access___Radio_Registration: Boolean,
	Cybersecurity_Risk_Assessment_and_Test_Plan: Boolean,
	Global_Market_Access___Brazil_INMETRO_Certification: Boolean,
	Laboratory_Findings_Report_Review_and_Remediation: Boolean,
	Training___Medical_Device_Industry_Overview: Boolean,
	Training___Risk_Management_per_ISO_14971_2019: Boolean,
	Training___Medical_Electrical_Standards_including_AIM_7351731: Boolean,
	Training___Software_Lifecycle_and_FDA_Requirements: Boolean,
	Performance_Test_Method_Development_and_Validation: Boolean,
	Design_Verification_Support___Plans_and_Protocols: Boolean,
	Biological_Evaluation_Plans: Boolean,
	Formative_Usability_Study: Boolean,
	Summative_Usability_Study: Boolean,
	//array
	Applicable_Standards: String,
	Description_Phase2: String,
	file: String ,




});

export default mongoose.model("Consulting", userSchema);
