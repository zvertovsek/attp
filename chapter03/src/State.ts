import { StringOrNull } from './Types';

export interface IPersonState {
  FirstName: string;
  LastName: string;
  Address1: string;
  Address2: StringOrNull;
  Town: string;
  County: string;
  PhoneNumber: string;
  PostCode: string;
  DateOfBirth: StringOrNull;
  PersonId: string;
}


export interface IRecordState {
  IsActive: boolean;
}

export class RecordState implements IRecordState {
  public IsActive: boolean = false;
}

export type PersonRecord = RecordState & IPersonState;
