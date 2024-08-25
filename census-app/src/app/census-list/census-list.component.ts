import { Component, OnInit } from '@angular/core';
import { CensusService } from '../census.service';

@Component({
    selector: 'app-census-list',
    templateUrl: './census-list.component.html',
    styleUrls: ['./census-list.component.css']
})
export class CensusListComponent implements OnInit {
    censusRecords: any[] = [];

    constructor(private censusService: CensusService) { }

    ngOnInit(): void {
        this.getCensusRecords();
    }

    getCensusRecords(): void {
        this.censusService.getRecords().subscribe(records => {
            this.censusRecords = records;
        });
    }

    deleteRecord(id: string): void {
        this.censusService.deleteRecord(id).subscribe(() => {
            this.getCensusRecords();
        });
    }

    editRecord(record: any): void {
        // Logic for editing the record
    }
}
