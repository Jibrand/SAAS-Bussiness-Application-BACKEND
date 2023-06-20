





import mongoose from "mongoose";
import { formatWithOptions } from "util";

const userSchema = mongoose.Schema({








//1mmmmmmmmm
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//GENERAL								
									
Company_Name		:String,								
Address:String,	
City_State_Zip	:String,							
Contact:String,									
Phone:String,									
Email:String,									
Engineering_Contact:String,									
Phone:String,									
Email:String,									
//_DESCRIPTION_OF_PRODUCT_/_INTENDED_USE

Description :String,	
//_MODEL_NUMBER			

Model_Number:String,	

//_CLASSIFICATION	

Stationary:String,				
Fixed:String,				
Portable:String,				
Body_worn:String,				
Mobile:String,				
Hand_held:String,				
Class_I:String,				
Class_II:String,				
Internally_:String,				
USB_Powered:String,

//_SERVICES_REQUESTED	

ETL_Listing_for_North_America:String,								
ETL_Classification_for_North_America:String,								
ETL_Recognition_for_North_America:String,								
FDA_ASCA_Pilot_Program:String,								
EU_Test_Reports:String,								
IEC_Test_Reports:String,								
CB_Scheme_Evaluation:String,								
Limited_Production_Certification:String,								
Field_Label_Evaluation:String,								
Design_Review:String,								
EMC_Testing			:String,						
Test_Data_Only:String,								
ROHS_Evaluation:String,								
Performance_Testing:String,								
Intertek_Assurance_and_Consulting:String,								
Other:String,								
Testing_at_Manufacturers_Premises:String,							
Witness_Manufacturers_Testing:String,								
Intertek_Data_Acceptance_Program_SATELLITE:String,							
								
//REPORT_REVISION	

Report_Numbers_to_be_Revised:String,								
CDR_Listing_Report:String,								
CB_Reports:String,								
EU_Reports:String,								
Description_of_revision:String,	

//_INTENDED_MARKET_COUNTRIES	

Australia:String,		
Brazil:String,		
Canada:String,		
China:String,		
Denmark:String,		
European_Union:String,		
Israel:String,		
Japan:String,		
Korea:String,		
Mexico:String,		
Saudi_Arabia		:String,	
Singapore	:String,		
Switzerland:String,		
United_Kingdom		:String,	
United_States:String,		
Other:String,		
//_SPECIAL_REQUIRMENTS_FOR_FUNCTIONALITLY/TESTING_OF_THE_PRODUCT	

SPECIAL_REQUIRMENTS_FOR_FUNCTIONALITLY_TESTING_OF_THE_PRODUCT	:String,							
//_REQUESTED_STANDARDS_FOR_EVALUATION		
						
REQUESTED_STANDARDS_FOR_EVALUATION:			String,					
//_STANDARDS_QUESTIONS								


Would_you_like_your_product_evaluated_to_the_first_amendment_of_60601_Third_Edition:String,							
Does_your_product_incorporate_the_use_of_software:String,							
Do_you_have_a_risk_management_file_for_your_product_that_is_compliant_with_the_requirements_of_ISO_14971:String,							
Intertek_currently_does_not_offer_an_evaluation_of_EN_ISO_14971:String,_2012:String,_which_requires_a_review_of_all_items_in_the_Risk_Management_File_against_the_differences_between_the_requirements_of_the_Medical_Device_Directive_and_ISO_14971:String,_as_required_for_CE_marking_to_the_Medical_Device_Directive:String,_which_is_not_a_certification_provided_by_Intertek:String,								
Has_your_ISO_14971_Risk_Management_Process_been_reviewed_by_Intertek:String,								
If_Yes_to_above_question:String,_please_provide_Intertek_Project_Number_the_review_was_completed_under		:String,						
Usability_File__Would_you_like_Intertek_to_evaluate_your_Usability_Engineering_File_against_IEC_62366_2015:String,								
If_yes_to_a_usability_file_review_which_standard_would_you_like_Intertek_to_use:String,								
Does_your_product_have_alarms_incorporated_into_the_medical_device_606018:String,								
If_Yes_for_alarms_what_type_of_alarms_are_provided:String,								
Will_your_product_be_used_in_a_home_health_care_environment_606011:String,								
Does_your_product_incorporate_the_use_of_a_laser_60825:String,								
Does_your_product_incorporate_the_use_of_X_Ray:String,								
Does_your_product_use_batteries		:	String,					
If_yes_what_kind_of_battery_is_used:String,								
Does_your_product_incorporate_the_use_of_LEDs_as_luminaires_lamp_IEC_62471:String,								
Does_your_product_have_wireless_communication_capabilities:String,								
Will_your_product_be_used_in_a_emergency_medical_services_environment_606012:String,								
Is_the_product_rated_IP_rated_for_protection_against_solid_foreign_objects:String,								
Is_the_product_rated_IP_rated_for_protection_against_water		:String,						




//2mmmm
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//_EMC_REQUEST_FOR_QUOTE								
United_States:String,
  Canada:String,
    Europe:String,
      Other:String,      

//_Product_Information

Product_name_and_or_model:String,                      
Type_of_equipment_equipment_description:String,            
Where_is_the_equipment_intended_to_be_used:String,             
Does_the_equipment_have_wireless_transmit_capability:String,
Equipment_dimensions_and_weight:String,             

//_Power_Requirements_and_Equipment_Setup

DC:String,
fiftyHz :String,
sixtyHz:String,
Other_Power_Requirements_and_Equipment_Setup:String,

 one_two_zeroV:String,
 TWOthreezeroV:String,
 
 twozero8V:String,
   
 twofourzeroV:String,
   _380V:String,
     _460V:String,
       _Other_volt:String,
     



        Phase:String,
        Single:String,
        Three_Phase:String,

Air:String,

PSI:String,
Gas:String,
Water:String,
 GPM:String,
Other_Services:String,
Frequency_of_highest_clock_oscillator_in_your_system:String,
Approximate_set_up_time_for_your_device_in_hours:String,


// Cables
List_all_AC_and_I_O_cables_that_your_equipment_uses :String,
                           

//_Modes_of_Operation

ONE_The_estimated_worst_case_operating_modes_should_be_selected_representing_most_typical_functions_of_the_equipment_to_be_tested_and_fully_exercise_all_components_systems :String,
TWO_The_estimated_worst_case_operating_modes_should_be_selected_representing_most_typical_functions_of_the_equipment_to_be_tested_and_fully_exercise_all_components_systems :String,
 
 
//Monitoring_of_the_Equipment_Under_Test:String,
Please_provide_instructions_below_on_how_to_observe_the_equipment_under_test_to_verify_proper_operation_in_all_modes :String,



// 3mmmmmmm
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




ETLCB_Scheme_Certification_Support__Define_Applicable_Standards:String,
Electrical_Safety_Test_Plan_Preparation:String,
EMC_Test_Plan_Preparation:String,
Preliminary_Design__Construction_Review_PDR:String,
Prepare_or_Review_InsulationIsolation_Diagram:String,
Risk_Management_File_Review_and_Checklist_Completion:String,
Software_Lifecycle_Document_Review_and_Checklist_Completion:String,
Usability_File_Review_and_Checklist_Completion:String,
Accompanying_Documents_Review_and_Checklist_Completion:String,
Coexistence_Risk_Assessment__Test_Plan:String,
Cybersecurity_Risk_Assessment__Test_Plan:String,
Laboratory_Findings_Report_Review__Remediation:String,
EMC_Troubleshooting__Design_Review:String,
FDA_510k_Premarket_Notification_Regulatory_Submission:String,
FDA_De_Novo_Program_Regulatory_Submission:String,
FDA_Pre_Submission_Request_for_Feedback:String,
FDA_513g_Request_for_Classification:String,
EU_MDR_Technical_Documentation_Assessment:String,
EU_IVDR_Technical_Documentation_Assessment:String,
UK_Medical_Device_Technical_Documentation_Assessment:String,
UK_IVD_Technical_Documentation_Assessment:String,
Global_Market_Access___Regulatory_Requirements_Definition:String,
Global_Market_Access___Radio_Registration:String,
Global_Market_Access___Brazil_INMETRO_Certification:String,
Training___Medical_Device_Industry_Overview:String,
Training___Medical_Electrical_Standards_including_AIM_7351731:String,
Training___Risk_Management_per_ISO_14971_2019:String,
Training___Software_Lifecycle__FDA_Requirements:String,
Performance_Test_Method_Development__Validation:String,
Design_Verification_Support___Plans_and_Protocols:String,
Biological_Evaluation_Plans:String,
Formative_Usability_Study:String,
Summative_Usability_Study:String,


// 4mmmmm
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






//_GENERAL_PRODUCT_SPECIFICATIONS

Body_Worn					:String,				
Product_Classification:String,								
								
Length_of_Product_mm:String,								
								
Width_of_Product_mm:String,								
								
Height_of_Product_mm:String,								
								
Weight__of_Product_mm:String,								
 								
Transit_Operable:String,								
								
//_PRODUCT_ENVIRONMENTAL_SPECIFICATIONS								
								
Transport_and_Storage_Between_Uses:String,								
								
Minimum_Ambient_Temperature_C:String,								
								
Maximum_Ambient_Temperature_C:String,								
								
Maximum_Humidity:String,								
								
 Low:String,			High:String,	
								
BEFORE_Ambient_Temperature_Range_C:String,						 	
AFTER_Ambient_Temperature_Range_C:String,						 	
								
BEFORE_Relative_Humidity_Range:String,						 		
AFTER_Relative_Humidity_Range:String,						 	
								
BEFORE_Atmospheric_Pressure_Range_hPa:String,					 
AFTER_Atmospheric_Pressure_Range_hPa:String,			
//_SUPPLY_MAINS_CONDITIONS								
								
 
BEFORE_Voltage_Range_Vac:String,					 
AFTER_Voltage_Range_Vac:String,					 		
								
BEFORE_Voltage_Range_Vdc:String,					 	
AFTER_Voltage_Range_Vdc		:String,			 








// 5mmmmmmm
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//_GENERAL_LASER_INFORMATION								
								
Laser_Manufacturer:String,								
								
Model_Number:String,								
								
Laser_Classification:String,								
								
FDA_Accession_Number:String,								
								
// GENERAL_PRODUCT_INFORMATION								
								
Proposed_Product_Laser_Classification:String,								
								
Cooling_Means:String,								
								
Gas_Connection:String,								
								
// CONTINUOUS_WAVE_LASERS								
								
 							
								
Circular:String,				Beam_Diameter_CONTINUOUS_WAVE_LASERS:String,				
								
Retangular:String,				Length:String,			Width:String,
								
Wavelength:String,								
								
Maximum_Power:String,								
								
Minimum_Power:String,								
								
Duty_Cycle:String,								
								
// PULSUED_LASERS								
								
								
								
Circular:String,				Beam_Diameter_PULSUED_LASERS:String,				
								
Retangular:String,				Length:String,			Width:String,	
								
Wavelength:String,								
								
Maximum_Energy:String,								
								
Minimum_Energy:String,								
								
Repetition_Rate:String,								
								
Pulse_Width:String,								
								
Maximum_Power:String,				 			
								
Duty_Cycle:String,								
								
// LASER_SAFETY								
LASER_SAFETY:String,								
								
// BEAM_HAZARDS								
								
Optical_Density_for_Laser_Googles:String,								
								
Maximum_Permissible_Exposure_Limit:String,								
								
Nominal_Ocular_Hazard_Distance:String,								
								
Beam_Divergence:String,								
								
Focal_Distance:String,								
								
Recommended_Beam_Dump:String,								
								
NON_BEAM_HAZARDS					 :String,				
								
BEFORE_Toxin_Hazards:String,								
AFTER_Toxin_Hazards:String,								
								
BEFORE_Carcinogens:String,								
AFTER_Carcinogens:String,								
								
BEFORE_Flammable_Gases:String,								
AFTER_Flammable_Gases:String,								
								
BEFORE_Asphyxiation:String,								
AFTER_Asphyxiation:String,								
								
BEFORE_Explosion:String,								
AFTER_Explosion:String,								
								
// PERSONAL_PROTECTIVE_EQUIPMENT					 			
								
BEFORE_Coveralls:String,								
AFTER_Coveralls:String,								
								
BEFORE_Eye:String,								
AFTER_Eye:String,								
								
BEFORE_Hearing:String,								
AFTER_Hearing:String,								
								
BEFORE_Respirator:String,								
AFTER_Respirator:String,								
								
BEFORE_SCBA:String,								
AFTER_SCBA:String,								
								
BEFORE_Skin:String,								
AFTER_Skin:String,								
								
// FIRE_EXTINGUISHER								
								
BCF_Power:String,								
								
Carbon_Dioxide:String,								
								
Dry_Power:String,								
								
Foam:String,								
								
Nitrogen:String,								
								
Water:String,								
								
// RECOMMENDED_SAFE_OPERATION_INSTRUCTIONS_FOR_FIRING_LASER								
RECOMMENDED_SAFE_OPERATION_INSTRUCTIONS_FOR_FIRING_LASER:String,								
								
								
								
// INTERTEK_USE								
								
Location_INTERTEK_USE:String,								
								
Laser_Engineer_Level	:String,							
								
Engineer	:String,							
								
 					
// 6mmmmm
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//_TYPE_OF_INFUSION_PUMP								
								
Volumetric_Infusion_Pump	:String,						
								
Drip_rate_Infusion_Pump	:String,						
                            
Type_1___Continuous_Infusion_Flow_Only	:String,						
                            
Type_2___Non_continuous_Flow_Only	:String,						
                            
Type_3___Discrete_Delivery_of_a_Bolus:String,							
                            
Type_4___Type_1_Combined_With_Type_3_and_or_Type_2_in_Same_Equipment	:String,						
                            
Type_5___Profile_Pump:String,							
                            
// FLOW_RATES								
                            
Minimum				:String,				
                            
Intermediate				:String,				
                            
Maximum				:String,				
                            
// BOLUS								
                            
Minimum				:String,				
                            
Maximum				:String,				
                            
// INFUSION_SETS								
                            
Number_of_Infusion_Sets_Used_With_Equipment_Under_Test:String,								


// 7mmmmmmmmmmmmmmmmmmmmmmmmm
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    



// CLIENT_PROBE_QUESTIONAIRE								
								
Probe_Name:String,								
								
System_Name:String,								
Continuous_Wave						:String,		
Pulse_Type:String,								
Circular	:String,							
Acoustic_Radiation_Aperture:String,								
								
// CIRCULAR_APERTURES							
								
Diameter_mm:String,								
								
Focal_Location_mm:String,								
								
// RECTANGULAR_APERATURES								
								
Pitch_mm:String,								
								
Elevation_Height_mm:String,								
								
Evaluation_Focal_Location_mm:String,								
								
// OTHER_APERTURES								
								
Description:String,								
								
Focal_Location_mm:String,								
								
Aperature_Area_mm2:String,								
								
// SCANNING_FORMAT								
Linear				:String,				
								
								
Lines_per_Image:String,								
								
Frame_Rate:String,								
								
// SECTOR_FORMAT								
								
Scan_Angle_deg:String,								
								
ROC_OR_Apex_Distance_mm:String,								
								
// LINEAR_FORMAT								
								
Scan_Length_mm:String,								
								
								
								
// PULSE_TYPES_ADD_ADDITIONAL_ROWS_IF_NEEDED								
								
Number_of_Pulses_Types:String,								
Description:String,								
								
Nominal_Center_Frequency_MHz:String,								
								
// ADDITIONAL_INFORMATION_FOR_DOPPLER_PULSE_TYPES								
								
Number_of_PW_Gate_Sizes:String,								
								
Range_of_PW_Gate_Sizes:String,								
								
// FOCAL_LOCATIONS_ADD_ADDITIONAL_ROWS_IF_NEEDED								
								
Number_of_Focal_Locations:String,								
								
Focal_Depth_mm:String,								
								
Number_of_Elements_Used:String,								
								
Aperature_Area_mm2			:String,					
								
// NOTES								
NOTES:String,								
								



// 8mmmmmm

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GENERAL_X_RAY_INFORMATION							
							
X_Ray_Source:String,		 					
							
Model_Number:String,		 					
							
HV_Generator:String,							
							
Model_Number:String,		 					
							
Detector:String,		 					
							
Model_Number:String,		 					
							
X_Ray_Type_Purpose:String,							
							
							
							
// GENERAL_PRODUCT_INFORMATION							
							
Product:String,		 					
							
Model_Number:String,		 					
							
Ratings:String,		 					
							
Cooling_Means:String,		 					
							
Gas_Connection:String,		 					














///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

    name:String,
    Month:String,
    to: String,
    from: String,
    Dates: String,
    vendordetails: String,
    date_and_time_picker: String,
    approver: String,
    description: String,
    any_other_instructions_for_quoting: String,
    statement_for_qualification: String,
    status: String,
});

export default mongoose.model("RFQ_Manager", userSchema);