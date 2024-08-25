import { Component, OnInit, Input } from '@angular/core';
import { CensusService } from '../census.service';

@Component({
    selector: 'app-census-form',
    templateUrl: './census-form.component.html',
    styleUrls: ['./census-form.component.css']
})
export class CensusFormComponent implements OnInit {
    @Input() editMode = false;
    @Input() record: any = {
        year: '',
        censusTakerName: '',
        numberOfPeople: '',
        householdAddress: {
            street: '',
            city: '',
            state: '',
            zipCode: ''
        }
    };

    constructor(private censusService: CensusService) { }

    ngOnInit(): void { }

    onSubmit(): void {
        if (this.editMode) {
            this.censusService.updateRecord(this.record._id, this.record).subscribe();
        } else {
            this.censusService.createRecord(this.record).subscribe();
        }
    }
}
