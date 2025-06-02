interface SearchOption {
  Doctors: Doctor[];
  Specializations: Specialization[];
  Hospitals: Hospital[];
  Diseases: Disease[];
}

interface Doctor {
  DoctorID: string;
  HospitalID: string;
  DoctorName: string;
  DoctorImage: string;
  SpecializationID: string;
  HospitalName: string;
  SpecializationName: string;
}

interface Specialization {
  SpecializationID: string;
  SpecializationName: string;
}

interface Hospital {
  HospitalID: string;
  HospitalName: string;
}

interface Disease {
  DiseaseID: string;
  Diseasedescription: string;
  SpecializationID: string;
  SpecializationName: string;
}
