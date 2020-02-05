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
      ownRate: 3.49,
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
    // this.changeRateEstimate = this.changeRateEstimate.bind(this);
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
    this.hideInputError = this.hideInputError.bind(this);
    this.showInputError = this.showInputError.bind(this);
    this.hideLoan = this.hideLoan.bind(this);
    this.showLoan = this.showLoan.bind(this);
    this.hideOwnRate = this.hideOwnRate.bind(this);
    this.showOwnRate = this.showOwnRate.bind(this);
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.state.cost !== prevProps.state.cost) {
      this.setState({cost:this.props.state.cost});
      this.setState({
        cashDown: this.props.state.cost * .1
      }, ()=>{this.setMonthlyPayment()})
    }
    if (this.props.state.rate !== prevProps.state.rate) {
      this.setState({displayedRate:this.props.state.rate * this.state.creditScore,
        rateEstimate:this.props.state.rate
      }, ()=>{this.setMonthlyPayment()})
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
    this.hideInputError();
    this.showLoan();
    this.hideOwnRate();
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
  hideInputError() {
    document.getElementById("inputError").style.display="none"
  }
  showInputError() {
    document.getElementById("inputError").style.display="block"
  }
  hideLoan() {
    document.getElementById("loan").style.display="none"
    document.getElementById("cash").style.display="block"
    document.getElementById("container").style.height="125px"
  }
  showLoan() {
    document.getElementById("loan").style.display="block"
    document.getElementById("cash").style.display="none"
    document.getElementById("container").style.height="525px"
  }
  hideOwnRate() {
    document.getElementById("rate").style.display="block"
    document.getElementById("ownRate").style.display="none"
  }
  showOwnRate(event) {
    event.preventDefault()
    document.getElementById("ownRate").style.display="block"
    document.getElementById("rate").style.display="none"
  }
  // changeRateEstimate (event) {
  //   const key = 'displayedRate';
  //   const value = this.state.creditScore * this.state.rateEstimate;
  //   this.setState({
  //     [key]:value,
  //     maxCreditScore: event.target.value[1]
  //   }, ()=>{console.log('rateEstimate', this.state.rateEstimate)
  //   console.log('displayedRate', this.state.displayedRate)})
  // }
  setMonthlyPayment () {
    const carCost = Number(this.props.state.cost)
    const cash = Number(this.state.cashDown)
    const trade = Number(this.state.tradeInValue)
    const owe = Number(this.state.owed)
    const term = Number(this.state.term)
    if(document.getElementById("rate").style.display === "block") {
    var rate = Number(this.state.rateEstimate)
    } else if (document.getElementById("rate").style.display==="none") {
      var rate = Number(this.state.ownRate)
    }
    const credit = Number(this.state.creditScore)
    if (cash > carCost || trade > carCost || owe > 100000 || (cash + trade - owe) > carCost) {
      this.showInputError()
      if (this.state.cashDown > this.props.state.cost) {
        console.log('cashdown too much')
        document.getElementById("cashDown$").style.border="1px solid #e70404";
        document.getElementById("cashDown$").style.color="#e70404";
        document.getElementById("cashDown$").style.backgroundColor="#e4a2a2";
        document.getElementById("cashDownInput").style.border="1px solid #e70404";
        document.getElementById("cashDownInput").style.color="#e70404";
        document.getElementById("cashDownTitle").style.color="#e70404";
        
      }
      if (this.state.tradeInValue > this.props.state.cost) {
        console.log('trade in too much')
        document.getElementById("trade$").style.border="1px solid #e70404";
        document.getElementById("trade$").style.color="#e70404";
        document.getElementById("trade$").style.backgroundColor="#e4a2a2";
        document.getElementById("tradeInput").style.border="1px solid #e70404";
        document.getElementById("tradeInput").style.color="#e70404";
        document.getElementById("tradeTitle").style.color="#e70404";
        
      }
      if (this.state.owed > 100000) {
        console.log('owe too much')
        document.getElementById("owed$").style.border="1px solid #e70404";
        document.getElementById("owed$").style.color="#e70404";
        document.getElementById("owed$").style.backgroundColor="#e4a2a2";
        document.getElementById("owedInput").style.border="1px solid #e70404";
        document.getElementById("owedInput").style.color="#e70404";
        document.getElementById("owedTitle").style.color="#e70404";
      } 
      this.setState({
        myMonthlyPayment: '---'
      })
    } else {
      document.getElementById("cashDown$").style.border="1px solid #dad9d4";
      document.getElementById("cashDown$").style.color="#333d47";
      document.getElementById("cashDown$").style.backgroundColor="#ffffff";
      document.getElementById("trade$").style.border="1px solid #dad9d4";
      document.getElementById("trade$").style.color="#333d47";
      document.getElementById("trade$").style.backgroundColor="#ffffff";
      document.getElementById("owed$").style.border="1px solid #dad9d4";
      document.getElementById("owed$").style.color="#333d47";
      document.getElementById("owed$").style.backgroundColor="#ffffff";
      document.getElementById("cashDownInput").style.border="1px solid #dad9d4";
      document.getElementById("cashDownInput").style.color="#333d47"; 
      document.getElementById("tradeInput").style.border="1px solid #dad9d4";
      document.getElementById("tradeInput").style.color="#333d47";
      document.getElementById("owedInput").style.border="1px solid #dad9d4";
      document.getElementById("owedInput").style.color="#333d47";       document.getElementById("cashDownTitle").style.color="#333d47";
      document.getElementById("tradeTitle").style.color="#333d47";
      document.getElementById("owedTitle").style.color="#333d47";
      this.hideInputError();
      let n = term
      let r = rate * credit * .01 / 12
      let a = carCost - cash - (trade - owe)
      let d = (Math.pow(1+r, n) - 1) / (r * Math.pow(1+r, n))
      let payment = Math.round(a / d)
      this.setState({
        myMonthlyPayment: payment
      })
    }
  }
  onCreditChange (event) {
    let value1 = event.target.value.split(',')[0];
    const value2 = event.target.value.split(',')[1];
    if(document.getElementById("ownRate").style.display==="block") {
      var displayed = this.state.ownRate
      value1 = 1;
    } else if (document.getElementById("ownRate").style.display==="none") {
      var displayed = (value1 * this.state.rateEstimate).toFixed(2)
    }
    
    console.log('value1', value1)
    console.log('value2', value2)
    this.setState({
      creditScore: value1,
      maxCreditScore: value2,
      displayedRate: displayed
    }, ()=>{this.setMonthlyPayment()})
  }
  onFormChange (event) {
    const key = event.target.name;
    const value = event.target.value;
    // //console.log('what is this:', this)
    this.setState({
      [key]:value
    }, ()=>{this.setMonthlyPayment()})
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
      <div id="container">
      <div id="loan">
      <h3>What's It Going To Cost?</h3>
      <form id="costCalculator" onSubmit={this.onFormSubmit}>
      <div className="row">

      <label className="titles" id="cashDownTitle"> Cash Down</label>
      <input className="inputMoney" id="cashDown$" value="$" readOnly/>
        <input className="inputs formInput" id="cashDownInput" type="number" name="cashDown" value={this.state.cashDown} onChange={this.onFormChange} />
        <div className="helpHolder">
        <div className="help" onMouseOver={this.cashDownMouseover} onMouseOut={this.cashDownMouseout}>?
      <div className="helperText" id="cashDownHoverText">
      
      <h3 className="helperTitle"> Cash Down</h3>
      Cash down may include Security Deposit, First Month Payment, and any non-capitalized fees. The remaining amount reduces the capitalized cost of the vehicle for leased vehicles or the amount financed.
      </div>
      </div>
      </div>
      </div>
      <br></br>
      <div className="row">
      <label className="titles tradeIn" id="tradeTitle"> My Trade-In Value &nbsp;
      <i className="fas fa-calculator" style={{color:'green'}}>&nbsp;</i>
       </label>
        <input className="inputMoney" id="trade$" value="$" readOnly/>
      <input className="inputs formInput" id="tradeInput" type="number" name="tradeInValue" value={this.state.tradeInValue} onChange={this.onFormChange}/>
      <div className="helpHolder">
      <div className="help" onMouseOver={this.tradeInValueMouseover} onMouseOut={this.tradeInValueMouseout}>?
        <div className="helperText" id="tradeInValueHoverText">
        <h3 className="helperTitle"> Trade-In Value </h3>
        The value of your car. If you don't plan on trading in a vehicle this can be left as zero.
        </div>
        </div>   
        </div>
      </div>
      <br></br>
      <div className="row">
      <label className="titles" id="owedTitle"> Owed On Trade</label>
      
      <input className="inputMoney" id="owed$" value="$" readOnly/>
        <input className="inputs formInput" id="owedInput" type="number" name="owed" value={this.state.owed} onChange={this.onFormChange}/>
        <div className="helpHolder">
        <div className="help" onMouseOver={this.owedOnTradeMouseover} onMouseOut={this.owedOnTradeMouseout}>?
      <div className="helperText" id="owedOnTradeHoverText">
      <h3 className="helperTitle"> Owed On Trade </h3>
      The amount you owe on the car. If you don't plan on trading in a vehicle this can be left as zero.
      </div>
      </div>
      </div>
      </div>
      <br></br>
      <div className="row" id="rate">
      
      <label className="titles"> Rate Estimated By Echo Park:</label>
        <input className="inputs percent" name="rateEstimate" value={this.state.displayedRate} readOnly/>
        <input className="inputPercent" value="%" readOnly/>
        <div className="helpHolder">
        <div className="help" onMouseOver={this.rateEstimateMouseover} onMouseOut={this.rateEstimateMouseout}>?
        <div className="helperText" id="rateEstimateHoverText">
        <h3 className="helperTitle"> Standard Program </h3>
        The lowest available monthy payment financing program offered for this vehicle based on rates from participating lenders in your area. This rate is for well qualified buyers only, actual rates may vary.
        </div>
        </div> 
        </div>
        <br></br>
        <button onClick={this.showOwnRate}>Enter Own Rate</button>
      </div>
      <div className="row" id="ownRate">
      <label className="titles"> Enter Own Rate:</label>
        <input className="inputs percent" name="ownRate" value={this.state.ownRate} onChange={this.onFormChange}/>
        <input className="inputPercent" value="%" readOnly/>
        <br></br>
        <button onClick={this.hideOwnRate}>Use estimated Rate</button>
      </div>
      <br></br>
      <div id="inputError" style={{color:"#e70404"}}>
      No lender found, please enter your own rate
      <br></br>
      </div>
      <div className="row">
      
      <label className="titles"> Est. Credit Score</label>
      <select className="inputs" name="creditScore" id="creditScore" onChange={this.onCreditChange} >
      <option value="1,820">740-900</option>
      <option value="1.35,720">700-739</option>
      <option value="1.5,685">670-699</option>
      <option value="2,650">630-669</option>
      <option value="2.85,605">580-629</option>
        </select>
        <div className="helpHolder">
        <div className="help" onMouseOver={this.creditScoreMouseover} onMouseOut={this.creditScoreMouseout}>?
        <div className="helperText" id="creditScoreHoverText">
        <h3 className="helperTitle"> Est. Credit Score </h3>
        Your credit score is an approximate estimation of your credit worthiness and will impact your estimated monthly payment. Please enter a FICO credit score between 580 and 900.
        </div>
        </div>
        </div>
      </div>
      <br></br>
      <div className="row">
      <label className="titles" id="termCss"> Term</label>
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
      <div className="helpHolder">
      <div className="help" onMouseOver={this.termMouseover} onMouseOut={this.termMouseout}>?
        <div className="helperText" id="termHoverText">
        <h3 className="helperTitle"> Term </h3>
        The number of months over which payments will be payed.
        </div>
        </div>
        </div>
      </div>
      <br></br>
      </form>
      <div>
      <label className="titles" id="taxAndFeesCss">Taxes and Fees</label>
      <div className="helpHolder">
      <div className="help" onMouseOver={this.taxesAndFeesMouseover} onMouseOut={this.taxesAndFeesMouseout}>?
        <div className="helperText" id="taxesAndFeesHoverText">
        <h3 className="helperTitle"> General Disclaimer </h3>
        Taxes are an estimate based on the price of the vehicle as shown above and do not include additional taxes on additional product add-ons and services purchased at the dealership.
        </div>
        </div>
        </div>
        </div>
      <button id="calculateButton" onClick={this.showCalculateTaxesAndFees}>Calculate My Taxes and Fees &nbsp; <i className="fas fa-calculator" style={{color:'green'}}></i></button>
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
      <br></br>
      </div>
      <br></br>
      <label> 
      My Monthly Payment             <b>${this.state.myMonthlyPayment}</b>/mo  
      <div className="helpHolder">
      <div className="help" onMouseOver={this.myMonthlyPaymentMouseover} onMouseOut={this.myMonthlyPaymentMouseout}>?
      <div className="helperText" id="myMonthlyPaymentHoverText">
      <h3 className="helperTitle"> My Monthly Payment </h3>
      Monthly payment amount applies to qualified credit or lease applicants having minimum credit score of {this.state.maxCreditScore}. Taxes, title, and registration fees are additional. Your monthly payment is established based on a full review of your credit application and credit report.
      </div>
      </div>
      </div>
      </label>
      <br></br>
      <div className="cashOnly">
      or, &nbsp;
      <button onClick={this.hideLoan}>Plan to Pay Cash in Full</button>
      </div>
      </div>
      <div id="cash">
      <label>What's It Going to Cost?</label>
      <button onClick={this.showLoan}>Edit</button>
      <br></br>
      My Payments
      <br></br>
        $0
        <br></br>
      Plan to Pay Cash in Full
      </div>
      
      </div>
    )
  }
}

export default Form;

