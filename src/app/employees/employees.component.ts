import { Component,} from '@angular/core';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  tableHead=[{
    'no':'No',
    "name":'Name',
    "department":'Department',
    "date" : 'date'
  }]
tableData = [{
  no:1,
  name : "Priyanshi",
  department : "UI Designer",
  date : new Date()

},

{
  no:2,
  name : "Maahi",
  department : "Front end Designer",
  date : new Date()

},

{


  no:3,
  name : "Tanushi",
  department : "Developer",
  date : new Date()

},

{
  no:4,
  name : "Nidhi",
  department : "UI Designer",
  date : new Date()

},

{
  no:5,
  name : "Sahina",
  department : "UI Designer",
  date : new Date()

}]
}
