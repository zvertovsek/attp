import React from 'react';
import { IPersonState } from "./State";
import { IValidation, NameValidation, AddressValidation, PhoneNumberValidation } from './Validations';
import { Col, Row } from 'reactstrap';

interface IValidationProps {
  CurrentState: IPersonState;
  CanSave: (canSave: boolean) => void;
}

export default class FormValidation extends React.Component<IValidationProps> {
  private failures: string[] = [];
  private validation: IValidation[];

  constructor(props: IValidationProps) {
    super(props);

    this.validation = new Array<IValidation>();
    this.validation.push(new NameValidation());
    this.validation.push(new AddressValidation());
    this.validation.push(new PhoneNumberValidation());
  }

  public render() {
    this.Validate();
    
    return (
      <Col>
        {this.failures.map((error: string) => {
          return (
            <Row key={error}>
              <Col><label>{error}</label></Col>
            </Row>
          );
        })}
      </Col>
    );
  }

  private Validate() {
    this.failures = new Array<string>();
    this.validation.forEach(validation => {
      validation.Validate(this.props.CurrentState, this.failures);
    });

    this.props.CanSave(this.failures.length === 0);
  }
}
