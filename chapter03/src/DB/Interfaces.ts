export interface ITableBuilder {
  WithDatabase(databaseName: string): ITableBuilder;
  WithVersion(version: number): ITableBuilder;
  WithTableName(tableName: string): ITableBuilder;
  WithPrimaryField(primaryField: string): ITableBuilder;
  WithIndexName(indexName: string): ITableBuilder;
}

export interface ITable {
  Database(): string;
  Version(): number;
  TableName(): string;
  // PrimarField(): string;
  IndexName(): string;
  Build(database: IDBDatabase): void;
}
