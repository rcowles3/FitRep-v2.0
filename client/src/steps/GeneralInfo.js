import AutoForm from 'react-auto-form'
import Button from 'react-bootstrap/lib/Button'
import classnames from 'classnames'
import Col from 'react-bootstrap/lib/Col'
import React from 'react'
import Row from 'react-bootstrap/lib/Row'

// import HealthCodeModal from '../modals/HealthCodeModal'
// import NeedsCalculatorModal from '../modals/NeedsCalculatorModal'
// import PermanentInsuranceModal from '../modals/PermanentInsuranceModal'
// import PolicyAdvisorModal from '../modals/PolicyAdvisorModal'

import {PRIVACY_POLICY_URL} from '../constants'
import {Gender, GeneralInfoModal, HealthCode, ProductCode, State} from '../enums'
import {dollarOptions, genderOptions, healthOptions, integerOptions, productOptions, stateOptions} from '../options'
import {debounce, isZip} from '../utils'

let FORM_DEFAULTS = {
  gender: Gender.MALE,
  stateCode: State.AL,
}

let FormField = ({children, error, id, label, modal}) =>
  <div className={classnames('form-group', {'has-error': !!error})}>
    <label htmlFor={id} className="col-sm-4 control-label">{label}</label>
    <div className="col-sm-4">
      {children}
    </div>
    {!!error && <Col sm={4} className="help-text">
      <p className="form-control-static">
        {error}
      </p>
    </Col>}
    {modal && <Col sm={4}>
      <p className="form-control-static">
        {modal}
      </p>
    </Col>}
  </div>

let GeneralInfo = React.createClass({
  getInitialState() {
    let {initialData, zipCode} = this.props
    return {
      form: initialData || {...FORM_DEFAULTS, zipCode},
      errors: {},
      modal: null
    }
  },

  hideModal({next = null} = {}) {
    this.setState({modal: null})
    if (next) {
      this.props.showModal(next)
    }
  },
  showModal(modal) {
    this.setState({modal})
  },

  handleChange(e, name, data, change) {
    this.setState({form: {...this.state.form, ...change}})
  },
  handleReset() {
    this.setState(this.getInitialState())
  },
  handleSubmit(e, data) {
    e.preventDefault()
    // if (Number(data.productCode) === ProductCode.PERMANENT) {
    //   return this.showModal(GeneralInfoModal.PERMANENT_INSURANCE)
    // }
    // if (!this.handleZipChange({target: {value: data.zipCode}})) {
    //   return
    // }
    // if (!data.reviewed) {
    //   return window.alert('You must indicate that you have read our privacy policy before proceeding.')
    // }
    this.props.getQuote(data)
  },
  handleZipChange(e) {
    let zipCode = e.target.value
    if (!zipCode) {
      this.setState({errors: {zipCode: 'A Zip code is required'}})
      return false
    }
    else if (!isZip(zipCode)) {
      this.setState({errors: {zipCode: 'Zip code must be 5 digts or 5+4 digits'}})
      return false
    }
    else {
      this.setState({errors: {}})
      return true
    }
  },

  setCoverage(coverage) {
    this.setState({form: {...this.state.form, coverage}})
  },
  setProductCode(productCode) {
    if (productCode) {
      this.setState({form: {...this.state.form, productCode}})
    }
  },
  setHealthCode(healthCode) {
    this.setState({form: {...this.state.form, healthCode}})
  },

  render() {
    let {errors, form} = this.state
    let {loading} = this.props
    return <div>
      <AutoForm className="form-horizontal" onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <div className="panel-body">
          <p><strong>Please answer a few basic questions to let your trainnee know more about you.</strong></p>
 
          <FormField label="Gender"> 
            <label className="radio-inline">
              <input type="radio" name="tobacco" value="Yes"checked={form.tobacco === 'Yes'}/> Female
            </label>
            <label className="radio-inline">
              <input type="radio" name="tobacco" value="No" checked={form.tobacco === 'No'}/> Male
            </label>
          </FormField>

          <FormField id="state" label="State">
            <select className="form-control" name="stateCode" id="stateCode" value={form.stateCode}>
              {stateOptions()}
            </select>
          </FormField>
          <FormField id="zipCode" label="Zip Code" error={errors.zipCode}>
            <input
              className="form-control"
              id="zipCode"
              name="zipCode"
              onChange={debounce(this.handleZipChange, 250)}
              type="text"
              value={form.zipCode}
            />
          </FormField>

          <FormField id="age" label="What is your availbility look like?">
            <input className="form-control" name="age" id="age" type="text" >
            
            </input>

          </FormField>



          <FormField id="healthCode" label="What is your main purpose as a trainer here?"
   >
               <select className="form-control" name="healthCode" id="healthCode" value={form.healthCode}>
              {healthOptions()}
            </select>
          </FormField>
  


        </div>
        <div className="panel-footer">
          <Row>
            <Col sm={12}>
              <Button className="pull-left" disabled={loading} onClick={this.handleReset}>Reset</Button>
              <Button type="submit" bsStyle="primary" className="pull-right" disabled={loading}>Next</Button>
            </Col>
          </Row>
        </div>
      </AutoForm>
      {this.renderModal()}
    </div>
  },

  renderModal() {
    // switch (this.state.modal) {
    //   case GeneralInfoModal.NEEDS_CALCULATOR:
    //     return <NeedsCalculatorModal
    //       setCoverage={this.setCoverage}
    //       onExit={this.hideModal}
    //     />
    //   case GeneralInfoModal.POLICY_ADVISOR:
    //     return <PolicyAdvisorModal
    //       setProductCode={this.setProductCode}
    //       onExit={this.hideModal}
    //     />
    //   case GeneralInfoModal.HEALTH_CODE:
    //     return <HealthCodeModal
    //       setHealthCode={this.setHealthCode}
    //       onExit={this.hideModal}
    //     />
    //   case GeneralInfoModal.PERMANENT_INSURANCE:
    //     return <PermanentInsuranceModal onExit={this.hideModal}/>
    // }
  }
})

export default GeneralInfo
