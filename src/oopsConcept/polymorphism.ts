class Hospital{
    generateReport() {
        console.log("Generate report for hospital");

    }
}
class Doctor extends Hospital{
    generateReport(){
        console.log("Doctor generating report");
        
    }
}
class Laboratory extends Hospital{
    generateReport(){
        console.log("Laboratory generating report");

    }
}
class Pharmacy extends Hospital{
    generateReport(){
        console.log("Pharmacy generating report");
    }
}
const doctor = new Doctor;
const lab = new Laboratory;
const pharmacy = new Pharmacy;

doctor.generateReport();
lab.generateReport();
pharmacy.generateReport();