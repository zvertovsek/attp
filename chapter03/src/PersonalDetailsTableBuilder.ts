import TableBuilder from "./Database/TableBuilder";

export class PersonalDetailsTableBuilder {
  public Build(): TableBuilder {
    const tableBuilder: TableBuilder = new TableBuilder();
    tableBuilder
      .WithDatabase("adv-ts-ch3")
      .WithTableName("People")
      .WithPrimaryField("PersonId")
      .WithIndexName("personId")
      .WithVersion(1);

    return tableBuilder;
  }
}
