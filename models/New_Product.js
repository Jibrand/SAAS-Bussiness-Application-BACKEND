import mongoose from "mongoose"; 
// import AutoIncrement from "mongoose-auto-increment"; 

 
const userSchema = mongoose.Schema({  

  RFQCategory:String, 
    user: [String],  
    norfq:0,  
    //Phase_1   
    First_Name: String,
    Last_Name: String,
    super_id:String,
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
    END_DATE: String,
    START_DATE: String,

    //phase2
    description_phase2: String,
    AUSTRALIA: Boolean,
    JAPAN: Boolean,
    BRAZIL: Boolean,
    KOREA: Boolean,
    CANADA: Boolean,
    MEXICO: Boolean,
    CHINA: Boolean,
    SAUDI_ARABIA: Boolean,
    DENMARK: Boolean,
    SINGAPORE: Boolean,
    EUROPEAN_UNION: Boolean,
    SWITZERLAND: Boolean,
    UNITED_STATES: Boolean,
    OTHER: String,
    //array
    description_phase2_down: String,

    //PHASE3: Medical Safety
    DESCRIPTION_OF_PRODUCT_INTENDED_USE: String,
    Model_Number: String,
    Voltage: String,
    Frequency: String,
    Current_Power: String,
    Other_phas3_1: String,
    Stationary: String,
    Portable: String,
    Mobile: String,
    Class_I: String,
    Fixed: String,
    Body_worn: String,
    Hand_held: String,
    Class_II: String,
    Internally: String,
    USB_Powered: String,

    NRTL_Listing_for_North_America_Phase_3: Boolean,
    Field_Label_Evaluation: Boolean,
    NRTL_Classification_for_North_America: Boolean,
    Design_Review: Boolean,
    NRTL_Recognition_for_North_America: Boolean,
    EMC_Testing: Boolean,
    FDA_ASCA_Pilot_Program: Boolean,
    ROHS_Evaluation: Boolean,
    EU_Test_Reports: Boolean,
    Performance_Testing: Boolean,
    IEC_Test_Reports: Boolean,
    Witness_Manufacturer_s_Testing: Boolean,
    CB_Scheme_Evaluation: Boolean,
    Testing_at_Manufacturer_s_Premises: Boolean,
    Limited_Production_Certificate: Boolean,

    AUSTRALIA_Phase3: Boolean,
    JAPAN_Phase3: Boolean,
    BRAZIL_Phase3: Boolean,
    KOREA_Phase3: Boolean,
    CANADA_Phase3: Boolean,
    MEXICO_Phase3: Boolean,
    CHINA_Phase3: Boolean,
    SAUDI_ARABIA_Phase3: Boolean,
    DENMARK_Phase3: Boolean,
    SINGAPORE_Phase3: Boolean,
    EUROPEAN_UNION_Phase3: Boolean,
    SWITZERLAND_Phase3: Boolean,
    UNITED_STATES_Phase3: Boolean,
    OTHER_phase3_2_Phase3: String,

    SPECIAL_REQUIRMENTS_FOR_FUNCTIONALITLY_TESTING_OF_THE_PRODUCT: String,
    REQUESTED_STANDARDS_FOR_EVALUATION: String,

    Would_you_like_your_product_evaluated_to_the_first_amendment_of_60601_1_Third_Edition: Boolean,
    NRTL_Classification_for_North_America: Boolean,
    Do_you_have_a_risk_management_file_for_your_product_that_is_compliant_with_the_requirements_of_ISO_14971: Boolean,
    Has_your_ISO_14971_1_Risk_Management_Process_been_reviewed_by_DC: Boolean,
    Usability_File___Would_you_like_DC_to_evaluate_your_Usability_Engineering_File_against_IEC_62366_1_2015: Boolean,
    Ifto_a_usability_file_review_which_standard_would_you_like_DC_to_use: Boolean,
    Does_your_product_have_alarms_incorporated_into_the_medical_device_60601_1_8: Boolean,
    Will_your_product_be_used_in_a_home_health_care_environment_60601_1_11: Boolean,
    Does_your_product_incorporate_the_use_of_a_laser_60825: Boolean,
    Does_your_product_use_batteries_Ifwhat_kind_of_battery_is_used: Boolean,
    Does_your_product_incorporate_the_use_of_LEDs_as_luminaires_lamp_IEC_62471: Boolean,
    Will_your_product_be_used_in_a_emergency_medical_services_environment_60601_1_12: Boolean,
    Is_the_product_rated_IP_rated_for_protection_against_solid_foreign_objects: Boolean,
    Is_the_product_rated_IP_rated_for_protection_against_water: Boolean,


    NameName:String,


    //phase4  Medical EMC
    descriptionrotate: {
        type: String,
       
      }, 
      filerotate: { 
        type: String,
        
      },

    Product_name_and_or_model: String,
    Type_of_equipment: String,
    Where_is_the_equipment_intended_to_be_used: String,
    Does_the_equipment_have_wireless_transmit_capability: String,
    Equipment_dimensions_and_weight_: String,


    // 1 RADIO ROW
    Dc_radio_phase4: String,
    five_zero_Hz_radio_phase4: String,
    Six_Zero_Hz_radio_phase4: String,
    other_radio_phase4_1: String,

    // 2 RADIO ROW
    ONE_TWO_ZERO_V: String,
    TWO_FOUR_ZERO_V: String,
    FOUR_EIGHT_ZERO_V: String,
    other_radio_phase4_2: String,

    // 3 RADIO ROW 
    one: String,
    two: String,
    three: String,
    other_radio_phase4_3: String,

    // 4 Radio Row
    Air: String,
    Gas: String,
    Water: String,
    Other_radio_phase4_4: String,
    other_raioend: String,

    Frequency_: Boolean,
    Dc: Boolean,
    Voltage_phase4: Boolean,
    Current_In_Phase: Boolean,
    Services: Boolean,

    Frequency_of_highest_clock_oscillator_in_your_system: String,
    Approximate_set_up_time_for_your_device__in_hours: String,
    List_all_AC_and_I_O_cables_that_your_equipment_uses: String,
    Modes_of_Operation_1: String,
    Modes_of_Operation_2: String,
    REQUESTED_STANDARDS_FOR_EVALUATION_phase4: String,


    //PHASE 5
    Product_name_and_or_model_Phase_5:String,
    Type_of_equipment_Phase_5:String,
    Where_is_the_equipment_intended_be_used:String,
    Does_the_equipment_have_wireless_transmit_capability_Phase_6:String,
    Equipment_dimensions_and_weight:String,
    Enter_product_classification:String,
    Enter_length_of_the_product:String,
    Enter_width_of_the_product:String,
    Enter_height_of_the_product :String,
    Enter_weight_of_the_product:String,
    Transit_Operable:String,
    Transport_and_S_rage_Between_Uses:String,
    Maximum_Ambient_Temperature:String,
    Minimum_Ambient_Temperature:String,
    Maximum_Humidity:String,
    Ambient_Temperature_Range:String,
    Relative_Humidity_Range:String,
    Atmospheric_Pressure_Range:String,
    Ambient_Temperature_Range1:String,
    Relative_Humidity_Range2:String,
    Atmospheric_Pressure_Range3:String,
    Voltage_Range1A:String,
    Voltage_Range1B:String,
    Voltage_Range2A:String,
    Voltage_Range2B:String,
    Environmental_Operating_Conditions :"Boolean",
    Environmental_Operating_Conditions :"String",





// phase7
Laser_Manufacturer:String,
Laser_Classification:String,
Model_Number_phase7:String,
FDA_Accession_Number:String,
Transport_and_Storage_Between_Uses:String,
Cooling_Means:String,
Gas_Connection:String,
Circular_1:Boolean,
if_yes_Beam_Diameter_1:String,
Rectangular_1: Boolean,
if_yes_Length_1:String,
Width_1:String,
Wavelength1:String,
Maximum_Power1:String,
Duty_Cycle1:String,
Maximum_Power_2:String,
Circular: Boolean,
if_yes_Beam_Diameter:String,
Rectangular:Boolean,
if_yes_Length_:String,
Width_:String,
Wavelength:String,
Maximum_Energy_1:String,
Repetition_Rate:String,
Maximum_Energy:String,
Pulse_Width:String,
Duty_Cycle:String,
Maximum_Power_3:String,
Optical_Density_for_Laser_Googles:String,
Beam_Divergence:String,
Maximum_Permissible_Exposure_Limit:String,
Focal_Distance:String,
Nominal_Ocular_Hazard_Distance:String,
Recommended_Beam_Dump:String,
Toxin_Hazards:String,
Carcinogens:String,
Flammable_Gases:String,
Asphyxiation:String,
Explosion:String,

//scope/////
Toxin_Hazards_scope:String,
Carcinogens_scope:String,
Flammable_Gases_scope:String,
Asphyxiation_scope:String,
Explosion_scope:String,

//spoce
Coveralls:String,
Eye:String,
Hearing:String,
Respirator:String,
SCBA:String,
Skin:String,

//type
Coveralls_type:String,
Eye_type:String,
Hearing_type:String,
Respirator_type:String,
SCBA_type:String,
Skin_type:String,

//type

BCF_Power:String,
Foam:String,
Carbon_Dioxide:String,
Nitrogen:String,
Dry_Power:String,
Water_phase7:String,
Location:String,
Laser_Engineer_Level:String,
Engineer:String,
Approved: Boolean,
Signature:String,
Date:String,
Approved_1: Boolean,
Signature_1:String,
Date_1:String,



// phase7
Probe_Name:String,
System_Name:String,
Pulse_Type:String,
Acoustic_Radiation_Aperture:String,
Diameter:String,
Focal_Location_phase7:String,
Pitch:String,
Elevation_Height:String,
Evaluation_Focal_Location:String,
Description_phase_7:String,
Focal_Location:String,
Aperature_Area_1:String,
Lines_per_Image:String,
Frame_Rate:String,
Scan_Angle_:String,
ROC_Apex_Distance:String,
Scan_Length:String,
Number_of_Pulses_Types:String,
Description_phase_7_1:String,
Nominal_Center_Frequency_:String,
Number_of_PW_Gate_Sizes:String,
Range_of_PW_Gate_Sizes:String,
Number_of_Focal_Location:String,
Number_of_Element_Used:String,
Focal_Depth:String,
Aperature_Area_2:String,
notes:String,


// phase 8
X_Ray_Source:String,
Model_Number_phase_8_1:String,
Detector:String,
Model_Number_phase_8_2:String,
HV_Generator:String,
Model_Number_phase_8_3:String,
X_Ray_Type_Purpose:String,
Product_phase_8:String,
Model_Number_phase_4:String,
Ratings:String,
Cooling_Means_:String,
Gas_Connection_phase_8:String,





// phase9

 

VolumetricInfusionPump:Boolean,
Drip_rateInfusionPump:Boolean,
Type1_ContinuousInfusionFlowOnly:Boolean,
Type2_n_continuousFlowOnly:Boolean,
Type3_DiscreteDeliveryofaBolus:Boolean,
Type4_Type1CombinedWithType3and_orType2inSameEquipment:Boolean,
Type5_ProfilePump:Boolean,

Minimum_phase_9:String,
Intermediate_phase_9:String,
Maximum_phase_9:String,
Minimum_phase_9_2:String,
Maximum_phase_9_2:String,
ofInfusionSetsUsedWithEquipmentUnderTest:String,




Legend_1:Boolean,
Legend_2:Boolean,
Legend_3:Boolean,
Legend_4:Boolean,
Legend_5:Boolean,
Legend_6:Boolean,
Legend_7:Boolean,





Environmental_Operating_Conditions_fortext:String,
Does_the_equipment_have_wireless_transmit_capability_Phase_5:String,

NRTL_Classification_for_North_America_Phase_3:Boolean,

VolumetricInfusionPump:Boolean,
Drip_rateInfusionPump:Boolean,
Type1_ContinuousInfusionFlowOnly:Boolean,
Type2_n_continuousFlowOnly:Boolean,
Type3_DiscreteDeliveryofaBolus:Boolean,
Type4_Type1CombinedWithType3and_orType2inSameEquipment:Boolean,
Type5_ProfilePump:Boolean,


selectedOption:String, 
selectedOptionradio1:String,
  selectedOptionradio2:String,
  selectedOptionradio3:String,
  selectedOptionradio4:String,  
 
  text: {
    type: String,
  
  },
  


  
    file: {
      data: Buffer,
      contentType: String
    }, 
 
 
    fields:[{

      name  :String,  
      file  :String,  

    }],
    inputFields:[{
    

    firstName:String,
    id:String,
lastName:String,
  }],





//  Existing Products --Phase1
First_Name__ExistingProducts:String,
Last_Name__ExistingProducts:String,
Company__ExistingProducts:String,
Email__ExistingProducts:String,
Phone_Number__ExistingProducts:String,
Address__ExistingProducts:String,
City__ExistingProducts:String,
Zip__ExistingProducts:String,
Address_2__ExistingProducts:String,
State__ExistingProducts:String,
United_States__ExistingProducts:String,

//Existing Products --Phase2
Description__ExistingProducts:String,
EMC__Existing_Products:Boolean,
EMC__Existing_Products1:String,
SAFETY__Existing_Products:Boolean,
SAFETY__Existing_Products1:String,
LASER_SAFETY__Existing_Products:Boolean,
LASER_SAFETY__Existing_Products1:String,
MEDICAL_SAFETY__Existing_Products:Boolean,
MEDICAL_SAFETY__Existing_Products1:String,
IP_TESTING__Existing_Products:Boolean,
IP_TESTING__Existing_Products1:String,
EMC_3m_CHAMBER_TIME__Existing_Products:Boolean,
EMC_3m_CHAMBER_TIME__Existing_Products1:String,
EMC_10m_CHAMBER_TIME__Existing_Products:Boolean,
EMC_10m_CHAMBER_TIME__Existing_Products1:String,
ENVIRONMENTAL_CHAMBER_TIME__Existing_Products:Boolean,
ENVIRONMENTAL_CHAMBER_TIME__Existing_Products1:String,
Pleaseselectintendedmarketcountries:String,

inputFields2:[{
  firstName :String,
  id :String,
  lastName :String,
}],
inputFields1:[{
  firstName:String,
  id:String,
  lastName:String,
}],


//precompliance

Description__PreCompliance:String,
EMC__PreCompliance:Boolean,
EMC__PreCompliance1:String, 
SAFETY__PreCompliance:Boolean,
SAFETY__PreCompliance1:String,
LASER_SAFETY__PreCompliance:Boolean,
LASER_SAFETY__PreCompliance1:String,
MEDICAL_SAFETY__PreCompliance:Boolean,
MEDICAL_SAFETY__PreCompliance1:String,
IP_TESTING__PreCompliance:Boolean,
IP_TESTING__PreCompliance1:String,
EMC_3m_CHAMBER_TIME__PreCompliance:Boolean,
EMC_3m_CHAMBER_TIME__PreCompliance1:String,
EMC_10m_CHAMBER_TIME__PreCompliance:Boolean,
EMC_10m_CHAMBER_TIME__PreCompliance1:String,
ENVIRONMENTAL_CHAMBER_TIME__PreCompliance:Boolean,
ENVIRONMENTAL_CHAMBER_TIME__PreCompliance1:String,
Pleaseselectintendedmarketcountries__PreCompliance:String,

inputFields3:[{
  firstName:String,
  id:String,
  lastName:String,
}],

//Consulting
Description__Consulting:String,
NRTL_CB_Scheme_Certification_Support__Consulting:Boolean,
EMC_Troubleshooting_Design_Review__Consulting:Boolean,
Electrical_Safety_Test_Plan_Preparation__Consulting:Boolean,
FDA_510k_Premarket_Notification_Regulatory_Submission__Consulting:Boolean,
EMC_Test_Plan_Preparation__Consulting:Boolean,
FDA_De_Novo_Program_Regulatory_Submission__Consulting:Boolean,
Preliminary_Design___Construction_Review_PDR__Consulting:Boolean,
FDA_Pre_Submission_Request_for_Feedback__Consulting:Boolean,
Prepare_or_Review_Insulation_Isolation_Diagram__Consulting:Boolean,
FDA_513g_Request_for_Classification__Consulting:Boolean,
Risk_Management_File_Review_and_Checklist_Completion__Consulting:Boolean,
EU_MDR_Technical_Documentation_Assessment__Consulting:Boolean,
Software_Lifecycle_Document_Review_and_Checklist_Completion__Consulting:Boolean,
EU_IVDR_Technical_Documentation_Assessment__Consulting:Boolean,
Usability_File_Review_and_Checklist_Completion__Consulting:Boolean,
UK_Medical_Device_Technical_Documentation_Assessment__Consulting:Boolean,
Accompanying_Documents_Review_and_Checklist_Completion__Consulting:Boolean,
UK_IVD_Technical_Documentation_Assessment__Consulting:Boolean,
NRTL_Recognition_for_North_America__Consulting:Boolean,
Global_Market_Access__Regulatory_Requirements_Definition__Consulting:Boolean,
Coexistence_Risk_Assessment_Test_Plan__Consulting:Boolean,
Global_Market_Access__Radio_Registration__Consulting:Boolean,
 Global_Market_Access_Brazil_INMETRO_Certification__Consulting:Boolean,
Cybersecurity_Risk_Assessment_Test_Plan__Consulting:Boolean,
Laboratory_Findings_Report_Review_Remediation__Consulting:Boolean, 
Training__Medical_Device_Industry_Overview__Consulting:Boolean,
Training__Risk_Management_per_ISO_14971__Consulting:Boolean,
Training__Medical_Electrical_Standards_including_AIM_7351731__Consulting:Boolean,
Training__Software_Lifecycle_FDA_Requirements__Consulting:Boolean,
Performance_Test_Method_Development_Validation__Consulting:Boolean,
Design_Verification_Support__Plans_and_Protocols__Consulting:Boolean,
Biological_Evaluation_Plans__Consulting:Boolean,
Formative_Usability_Study__Consulting:Boolean,
Summative_Usability_Study__Consulting:Boolean,




inputFields4:[{
  firstName:String,
  id:String,
  lastName:String,
}],
inputFields5:[{
  firstName:String,
  id:String,
  lastName:String,
}],




id: {
  type: String,
  required: true,
  unique: true
}


});
// userSchema.plugin(AutoIncrement.plugin, {
//   model: 'NewProduct',
//   field: 'id',
//   startAt: 0,
//   incrementBy: 1
// });

export default mongoose.model("NewProduct", userSchema);
 