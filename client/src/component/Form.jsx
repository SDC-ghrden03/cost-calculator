import React from 'react';

class Form extends React.Component {
  constructor(props){
    super(props) 
    this.state = {
      cost: 0,
      cashDown: 0,
      tradeInValue: 0,
      owed: 0,
      rateEstimate: 3.49,
      displayedRate: 3.49,
      creditScore: 1,
      maxCreditScore: 820,
      term: 24,
      zipcode: 'Zip Code',
      myMonthlyPayment: 0
    }
    this.setMonthlyPayment = this.setMonthlyPayment.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
    this.onCreditChange = this.onCreditChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.changeRateEstimate = this.changeRateEstimate.bind(this);
    this.enterZipcode = this.enterZipcode.bind(this);
    this.hideTaxesAndFees = this.hideTaxesAndFees.bind(this);
    this.hideAll = this.hideAll.bind(this);
    this.showTaxesAndFees = this.showTaxesAndFees.bind(this);
    this.showCalculateTaxesAndFees = this.showCalculateTaxesAndFees.bind(this);
    this.cashDownMouseover = this.cashDownMouseover.bind(this);
    this.cashDownMouseout = this.cashDownMouseout.bind(this);
    this.tradeInValueMouseover = this.tradeInValueMouseover.bind(this);
    this.tradeInValueMouseout = this.tradeInValueMouseout.bind(this);
    this.owedOnTradeMouseover = this.owedOnTradeMouseover.bind(this);
    this.owedOnTradeMouseout = this.owedOnTradeMouseout.bind(this);
    this.rateEstimateMouseover = this.rateEstimateMouseover.bind(this);
    this.rateEstimateMouseout = this.rateEstimateMouseout.bind(this);
    this.creditScoreMouseover = this.creditScoreMouseover.bind(this);
    this.creditScoreMouseout = this.creditScoreMouseout.bind(this);
    this.termMouseover = this.termMouseover.bind(this);
    this.termMouseout = this.termMouseout.bind(this);
    this.taxesAndFeesMouseover = this.taxesAndFeesMouseover.bind(this);
    this.taxesAndFeesMouseout = this.taxesAndFeesMouseout.bind(this);
    this.myMonthlyPaymentMouseover = this.myMonthlyPaymentMouseover.bind(this);
    this.myMonthlyPaymentMouseout = this.myMonthlyPaymentMouseout.bind(this);
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.state.cost !== prevProps.state.cost) {
      this.setState({cost:this.props.state.cost});
      this.setMonthlyPayment()
      this.setState({
        displayedRate: this.state.rateEstimate * this.state.creditScore
      })
    }
  }
  componentDidMount() {
    this.hideAll();
    this.cashDownMouseout();
    this.tradeInValueMouseout();
    this.owedOnTradeMouseout();
    this.rateEstimateMouseout();
    this.creditScoreMouseout();
    this.termMouseout();
    this.taxesAndFeesMouseout();
    this.myMonthlyPaymentMouseout();
  }
  
  hideAll () {
    const calculateTaxesAndFees = document.getElementById("calculateTaxesAndFees")
    const taxesAndFees = document.getElementById("taxesAndFees")
    const calculateButton = document.getElementById("calculateButton")
    if (calculateButton) {
    calculateTaxesAndFees.style.display="none"
    taxesAndFees.style.display="none"
    calculateButton.style.display="block"
    }
  }
  hideTaxesAndFees (event) {
    event.preventDefault();
    document.getElementById("calculateTaxesAndFees").style.display="block"
    document.getElementById("taxesAndFees").style.display="none"
    document.getElementById("calculateButton").style.display="none"
  }
  showCalculateTaxesAndFees(event) {
    event.preventDefault();
    document.getElementById("calculateTaxesAndFees").style.display="block";
    document.getElementById("calculateButton").style.display="none"
  }
  showTaxesAndFees(event) {
    event.preventDefault();
    document.getElementById("taxesAndFees").style.display="block";
    document.getElementById("calculateButton").style.display="none"
    document.getElementById("calculateTaxesAndFees").style.display="none";
  }
  changeRateEstimate (event) {
    const key = 'displayedRate';
    const value = event.target.value[0] * this.state.rateEstimate;
    this.setState({
      [key]:value,
      maxCreditScore: event.target.value[1]
    }, ()=>{console.log('rateEstimate', this.state.rateEstimate)
    console.log('displayedRate', this.state.displayedRate)})
  }
  setMonthlyPayment () {
    let n = this.state.term
    let r = this.state.rateEstimate * this.state.creditScore * .01 / 12
    let a = this.state.cost - this.state.cashDown - (this.state.tradeInValue - this.state.owed)
    let d = (Math.pow(1+r, n) - 1) / (r * Math.pow(1+r, n))
    let payment = Math.round(a / d)
    this.setState({
      myMonthlyPayment: payment
    })
  }
  onCreditChange (event) {
    const value1 = event.target.value.split(',')[0] * this.state.rateEstimate;
    const value2 = event.target.value.split(',')[1];
    console.log('value1', value1)
    console.log('value2', value2)
    this.setState({
      creditScore: value1,
      maxCreditScore: value2
    })
  }
  onFormChange (event) {
    const key = event.target.name;
    const value = event.target.value;
    // //console.log('what is this:', this)
    this.setState({
      [key]:value
    })
  }
  enterZipcode(event) {
    event.preventDefault();
    let zipcode = document.getElementById("zipcode").value;
    console.log(zipcode)
    this.props.getZipcode(zipcode)
    this.setState({
      zipcode: zipcode,
      rateEstimate:this.props.state.rate
    }, ()=>{console.log('rate', this.state.rate)})
    this.showTaxesAndFees(event)
  }
  
  onFormSubmit(event) {
    event.preventDefault();
    this.setMonthlyPayment();
  }
  cashDownMouseover (event) {
    event.preventDefault();
    document.getElementById("cashDownHoverText").style.display = "block";
  }
  cashDownMouseout () {
    document.getElementById("cashDownHoverText").style.display = "none";
  }
  tradeInValueMouseover (event) {
    event.preventDefault();
    document.getElementById("tradeInValueHoverText").style.display = "block";
  }
  tradeInValueMouseout () {
    document.getElementById("tradeInValueHoverText").style.display = "none";
  }
  owedOnTradeMouseover (event) {
    event.preventDefault();
    document.getElementById("owedOnTradeHoverText").style.display = "block";
  }
  owedOnTradeMouseout () {
    document.getElementById("owedOnTradeHoverText").style.display = "none";
  }
  rateEstimateMouseover (event) {
    event.preventDefault();
    document.getElementById("rateEstimateHoverText").style.display = "block";
  }
  rateEstimateMouseout () {
    document.getElementById("rateEstimateHoverText").style.display = "none";
  }
  creditScoreMouseover (event) {
    event.preventDefault();
    document.getElementById("creditScoreHoverText").style.display = "block";
  }
  creditScoreMouseout () {
    document.getElementById("creditScoreHoverText").style.display = "none";
  }
  termMouseover (event) {
    event.preventDefault();
    document.getElementById("termHoverText").style.display = "block";
  }
  termMouseout () {
    document.getElementById("termHoverText").style.display = "none";
  }
  taxesAndFeesMouseover (event) {
    event.preventDefault();
    document.getElementById("taxesAndFeesHoverText").style.display = "block";
  }
  taxesAndFeesMouseout () {
    document.getElementById("taxesAndFeesHoverText").style.display = "none";
  }
  myMonthlyPaymentMouseover (event) {
    event.preventDefault();
    document.getElementById("myMonthlyPaymentHoverText").style.display = "block";
  }
  myMonthlyPaymentMouseout () {
    document.getElementById("myMonthlyPaymentHoverText").style.display = "none";
  }
  render() {
    return (
      <div>
      <form id="costCalculator" onSubmit={this.onFormSubmit}>
      <label> Cash Down
        <input name="cashDown" value={this.state.cashDown} onChange={this.onFormChange} />
        <div onMouseOver={this.cashDownMouseover} onMouseOut={this.cashDownMouseout}>?</div>
        <div id="cashDownHoverText">
        <label> Cash Down</label>
        Cash down may include Security Deposit, First Month Payment, and any non-capitalized fees. The remaining amount reduces the capitalized cost of the vehicle for leased vehicles or the amount financed.
        </div>
      </label>
      <label> My Trade-In Value
        <input name="tradeInValue" value={this.state.tradeInValue} onChange={this.onFormChange}/>
        <div onMouseOver={this.tradeInValueMouseover} onMouseOut={this.tradeInValueMouseout}>?</div>
        <div id="tradeInValueHoverText">
        <label> Trade-In Value </label>
        The value of your car. If you don't plan on trading in a vehicle this can be left as zero.
        </div>
      </label>
      <label> Owed On Trade
        <input name="owed" value={this.state.owed} onChange={this.onFormChange}/>
        <div onMouseOver={this.owedOnTradeMouseover} onMouseOut={this.owedOnTradeMouseout}>?</div>
        <div id="owedOnTradeHoverText">
        <label> Owed On Trade </label>
        The amount you owe on the car. If you don't plan on trading in a vehicle this can be left as zero.
        </div>
      </label>
      <label> Rate Estimated By Echo Park:
        <input name="rateEstimate" value={this.state.displayedRate} readOnly/>
        <div onMouseOver={this.rateEstimateMouseover} onMouseOut={this.rateEstimateMouseout}>?</div>
        <div id="rateEstimateHoverText">
        <label> Standard Program </label>
        The lowest available monthy payment financing program offered for this vehicle based on rates from participating lenders in your area. This rate is for well qualified buyers only, actual rates may vary.
        </div>
      </label>
      <label> Est. Credit Score
      <select name="creditScore" id="creditScore" onChange={this.onCreditChange} >
      <option value="1,820">740-900</option>
      <option value="1.35,720">700-739</option>
      <option value="1.5,685">670-699</option>
      <option value="2,650">630-669</option>
      <option value="2.85,605">580-629</option>
        </select>
        <div onMouseOver={this.creditScoreMouseover} onMouseOut={this.creditScoreMouseout}>?</div>
        <div id="creditScoreHoverText">
        <label> Est. Credit Score </label>
        Your credit score is an approximate estimation of your credit worthiness and will impact your estimated monthly payment. Please enter a FICO credit score between 580 and 900.
        </div>
      </label>
      <label> Term
      <div className="radio-term" onChange={this.onFormChange}>
    <input type="radio" id="24" value={24} name="term"></input>
    <label htmlFor="24">24</label>
    <input type="radio" id="36" value={36} name="term"></input>
    <label htmlFor="36">36</label>
    <input type="radio" id="48" value={48} name="term"></input>
    <label htmlFor="48">48</label>
    <input type="radio" id="60" value={60} name="term"></input>
    <label htmlFor="60">60</label>
    <input type="radio" id="72" value={72} name="term"></input>
    <label htmlFor="72">72</label>
    <input type="radio" id="84" value={84} name="term"></input>
    <label htmlFor="84">84</label>
      </div>
      <div onMouseOver={this.termMouseover} onMouseOut={this.termMouseout}>?</div>
        <div id="termHoverText">
        <label> Term </label>
        The number of months over which payments will be payed.
        </div>
      </label>
      <button>Test</button>
      </form>
      <label>Taxes and Fees
      <div onMouseOver={this.taxesAndFeesMouseover} onMouseOut={this.taxesAndFeesMouseout}>?</div>
        <div id="taxesAndFeesHoverText">
        <label> General Disclaimer </label>
        Taxes are an estimate based on the price of the vehicle as shown above and do not include additional taxes on additional product add-ons and services purchased at the dealership.
        </div>
      </label>
      <button id="calculateButton" onClick={this.showCalculateTaxesAndFees}>Calculate My Taxes and Fees</button>
      <form id="calculateTaxesAndFees">
        <label> Where Will This Vehicle Be Registered?
          <input id="zipcode" name="zipcode" value={this.state.zipcode} onChange={this.onFormChange} />
        </label>
        <button onClick={this.hideAll}>Back</button>
        <button onClick={this.enterZipcode} >Next</button>
      </form>
      <div id="taxesAndFees">
      <label> 
        Taxes ${this.props.state.taxes}
      </label>
      <br></br>
      <label> 
        DMV Fees ${this.props.state.fees}
      </label>
      <br></br>
      <button onClick={this.hideAll}>Remove</button>
      <button onClick={this.hideTaxesAndFees}>Edit</button>
      </div>
      <label> 
      My Monthly Payment             ${this.state.myMonthlyPayment}/mo  
      <div onMouseOver={this.myMonthlyPaymentMouseover} onMouseOut={this.myMonthlyPaymentMouseout}>?</div>
      <div id="myMonthlyPaymentHoverText">
      <label> My Monthly Payment </label>
      Monthly payment amount applies to qualified credit or lease applicants having minimum credit score of {this.state.maxCreditScore}. Taxes, title, and registration fees are additional. Your monthly payment is established based on a full review of your credit application and credit report.
      </div>
      </label>
      </div>
    )
  }
}

export default Form;

// <select name = "term" onChange={this.onFormChange}>
//       <option value={24}>24</option>
//       <option value={36}>36</option>
//       <option value={48}>48</option>
//       <option value={60}>60</option>
//       <option value={72}>72</option>
//       <option value={84}>84</option>
//         </select>
// onChange={this.changeRateEstimate}