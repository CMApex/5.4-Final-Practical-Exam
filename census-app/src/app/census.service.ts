import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface CensusRecord {
    _id?: string;
    year: number;
    censusTakerName: string;
    numberOfPeople: number;
    householdState: string;
    householdCity: string;
    householdAddress: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
    };
}

@Injectable({
    providedIn: 'root'
})
export class CensusService {
    private baseUrl = 'http://localhost:5000/api/census';

    constructor(private http: HttpClient) { }

    // Create a new record
    createRecord(record: CensusRecord): Observable<CensusRecord> {
        return this.http.post<CensusRecord>(this.baseUrl, record);
    }

    // Get all records
    getRecords(): Observable<CensusRecord[]> {
        return this.http.get<CensusRecord[]>(this.baseUrl);
    }

    // Update a record
    updateRecord(id: string, record: CensusRecord): Observable<CensusRecord> {
        return this.http.put<CensusRecord>(`${this.baseUrl}/${id}`, record);
    }

    // Delete a record
    deleteRecord(id: string): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}
