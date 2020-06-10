import { RecordState, IPersonState } from "./State";

export type StringOrNull = string | null;
export type PersonRecord = RecordState & IPersonState;
