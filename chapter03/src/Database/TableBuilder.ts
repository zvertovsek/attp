import { StringOrNull } from "../Types";

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

export default class TableBuilder implements ITableBuilder, ITable {
  private database: StringOrNull = "";
  private tableName: StringOrNull = "";
  private primaryField: StringOrNull = "";
  private indexName: StringOrNull = "";
  private version: number = 1;

  public WithDatabase(databaseName: string): ITableBuilder {
    this.database = databaseName;
    return this;
  }

  public WithVersion(versionNumber: number): ITableBuilder {
    this.version = versionNumber;
    return this;
  }

  public WithTableName(tableName: string): ITableBuilder {
    this.tableName = tableName;
    return this;
  }

  public WithPrimaryField(primaryField: string): ITableBuilder {
    this.primaryField = primaryField;
    return this;
  }

  public WithIndexName(indexName: string): ITableBuilder {
    this.indexName = indexName;
    return this;
  }

  public Database(): string {
    return this.database;
  }

  public Version(): number {
    return this.version;
  }

  public TableName(): string {
    return this.tableName;
  }

  public IndexName(): string {
    return this.indexName;
  }

  public Build(database: IDBDatabase): void {
    const parameters: IDBObjectStoreParameters = { keyPath: this.primaryField };
    const objectStore = database.createObjectStore(this.tableName, parameters);
    objectStore!.createIndex(this.indexName, this.primaryField);
  }
}
