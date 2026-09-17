import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

export interface Person {
  name: string;
  citizenship: string;
  dateOfBirth: Date;
  gender: 'Female' | 'Male' | 'Non-binary';
  countryOfResidence: string;
}

const PEOPLE: Person[] = [
  { name: 'Amara Okafor', citizenship: 'Nigerian', dateOfBirth: new Date('1990-03-14'), gender: 'Female', countryOfResidence: 'Nigeria' },
  { name: 'Liam Johnson', citizenship: 'American', dateOfBirth: new Date('1985-07-22'), gender: 'Male', countryOfResidence: 'United States' },
  { name: 'Sofia Rossi', citizenship: 'Italian', dateOfBirth: new Date('1993-11-02'), gender: 'Female', countryOfResidence: 'Italy' },
  { name: 'Kenji Tanaka', citizenship: 'Japanese', dateOfBirth: new Date('1978-01-30'), gender: 'Male', countryOfResidence: 'Japan' },
  { name: 'Elif Yildiz', citizenship: 'Turkish', dateOfBirth: new Date('1996-05-18'), gender: 'Female', countryOfResidence: 'Turkey' },
  { name: 'Noah Smith', citizenship: 'British', dateOfBirth: new Date('1982-09-09'), gender: 'Male', countryOfResidence: 'United Kingdom' },
  { name: 'Mia Kowalski', citizenship: 'Polish', dateOfBirth: new Date('1999-12-25'), gender: 'Female', countryOfResidence: 'Poland' },
  { name: 'Arjun Patel', citizenship: 'Indian', dateOfBirth: new Date('1988-04-11'), gender: 'Male', countryOfResidence: 'India' },
  { name: 'Zara Ahmed', citizenship: 'Pakistani', dateOfBirth: new Date('1994-06-27'), gender: 'Non-binary', countryOfResidence: 'Pakistan' },
  { name: 'Lucas Müller', citizenship: 'German', dateOfBirth: new Date('1991-02-05'), gender: 'Male', countryOfResidence: 'Germany' },
  { name: 'Chloe Dubois', citizenship: 'French', dateOfBirth: new Date('1997-08-19'), gender: 'Female', countryOfResidence: 'France' },
  { name: 'Mateus Silva', citizenship: 'Brazilian', dateOfBirth: new Date('1986-10-03'), gender: 'Male', countryOfResidence: 'Brazil' },
  { name: 'Ingrid Larsen', citizenship: 'Norwegian', dateOfBirth: new Date('1995-01-16'), gender: 'Female', countryOfResidence: 'Norway' },
  { name: 'Youssef El-Sayed', citizenship: 'Egyptian', dateOfBirth: new Date('1980-03-28'), gender: 'Male', countryOfResidence: 'Egypt' },
  { name: 'Hana Kim', citizenship: 'South Korean', dateOfBirth: new Date('1998-07-07'), gender: 'Female', countryOfResidence: 'South Korea' },
  { name: 'Ethan Wilson', citizenship: 'Canadian', dateOfBirth: new Date('1989-11-23'), gender: 'Male', countryOfResidence: 'Canada' },
  { name: 'Valentina Torres', citizenship: 'Mexican', dateOfBirth: new Date('1992-05-30'), gender: 'Female', countryOfResidence: 'Mexico' },
  { name: 'Sami Virtanen', citizenship: 'Finnish', dateOfBirth: new Date('1984-09-12'), gender: 'Non-binary', countryOfResidence: 'Finland' },
  { name: 'Priya Sharma', citizenship: 'Indian', dateOfBirth: new Date('2000-02-14'), gender: 'Female', countryOfResidence: 'United Kingdom' },
  { name: 'Oliver Brown', citizenship: 'Australian', dateOfBirth: new Date('1987-06-06'), gender: 'Male', countryOfResidence: 'Australia' },
];

@Component({
  imports: [
    DatePipe,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  selector: 'app-people-list',
  styleUrl: './people-list.scss',
  templateUrl: './people-list.html',
})
export class PeopleList implements AfterViewInit {
  protected readonly displayedColumns: string[] = [
    'name',
    'citizenship',
    'dateOfBirth',
    'gender',
    'countryOfResidence',
  ];

  protected readonly dataSource = new MatTableDataSource<Person>(PEOPLE);

  @ViewChild(MatPaginator) private paginator!: MatPaginator;
  @ViewChild(MatSort) private sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (person, filter) =>
      [
        person.name,
        person.citizenship,
        person.gender,
        person.countryOfResidence,
        person.dateOfBirth.toLocaleDateString(),
      ]
        .join(' ')
        .toLowerCase()
        .includes(filter);
    this.dataSource.sortingDataAccessor = (person, columnName) =>
      columnName === 'dateOfBirth' ? person.dateOfBirth.getTime() : (person as never)[columnName];
  }

  protected applyFilter(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
