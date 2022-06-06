import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor(props){
    super(props);
    this.state = {
        balance: 0,
        rate: 0,
        term: 0,
        output: '',
      };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name] : Number(event.target.value)
    })
  }

  calculate(balance, rate, term){
    let userAmount = balance;
    let monthlyRate = (rate/12)/100
    let monthlyTerm = term*12
    let expo = Math.pow((monthlyRate+1),monthlyTerm)
    let numerator = monthlyRate * expo
    let denominator = expo - 1
    let result = (userAmount*(numerator/denominator)).toFixed(2)
    this.setState({
      output: `$${result}, this is your monthly payment!`
    })
  }

  render() {
    return (
      <div className='container'>
        <div className="row">
          <span className="col-sm-4"></span>
          <div className="col-sm-6 page-header">
            <h3>Mortgage Calculator</h3>
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor="balance" className="text-right h5 col-sm-4 col-form-label">Loan Balance</label>
          <div className="col-sm-6">
            <input className="form-control" name='balance' id='balance' type='number' defaultValue={this.state.balance} onChange={this.handleChange}/>
          </div>
        </div>
        <div className='form-group row'>  
          <label htmlFor="rate" className="text-right h5 col-sm-4 col-form-label">Interest Rate (%)</label>
          <div className="col-sm-6">
            <input className="form-control" name='rate' id='rate' type='number' step='0.01' defaultValue={this.state.rate} onChange={this.handleChange}/>
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor="term" className="text-right h5 col-sm-4 col-form-label">Loan Term (years)</label>
          <div className="col-sm-6">
            <select className="form-control" name='term' id ='term' defaultValue={this.state.term} onChange={this.handleChange}>
              <option value='15'>15</option>
              <option value='30'>30</option>
            </select>
          </div>
        </div>  
          <div className='form-group row'>
          <span className="col-sm-4"></span>
            <div className='col-sm-6 text-left mt-4'>
              <button className='btn btn-success' name='submit' onClick={()=>this.calculate(this.state.balance, this.state.rate, this.state.term)}>Calculate</button>
              <div className='text-left h4' name="output" id="output">{this.state.output}</div>
            </div>
          </div>  
      </div>
    );
  }
}

//same thing just using hooks below:

// import React, {useState} from 'react';


// export default function App() {
 
//   const [userValues, setUserValues] = useState({
//     balance:'',
//     rate:'',
//     term:'',
    
//   })
//   const [results,setResults] = useState({
//     output:'',
//   })

//   const handleInputChange = (event) =>
//    setUserValues({ [event.target.name]: Number(event.target.value) });


//   const handleSubmitValues = (e) => {
//     e.preventDefault();
//     calculateResults(userValues);
//   };
//   console.log(userValues.balance,userValues.rate,userValues.term)

//   const calculateResults = ({balance, rate, term}) => {
//     let userAmount = Number(balance);
//     console.log(userAmount);
//     let monthlyRate = Number(rate)/ 12/ 100
//     let monthlyTerm = Number(term)*12
//     let expo = Math.pow((monthlyRate+1),monthlyTerm)
//     let numerator = monthlyRate * expo
//     let denominator = expo - 1
//     let resultTotal = (userAmount*(numerator/denominator)).toFixed(2)
    
//     setResults({
//       output:`${resultTotal} is your total!`,
//     })
    
//   }
  

//   return (
//     <div>
//         <div className='container'>
//         <div className="row">
//           <span className="col-sm-4"></span>
//           <div className="col-sm-6 page-header">
//             <h3>Mortgage Calculator</h3>
//           </div>
//         </div>
//         <div className='form-group row'>
//           <label htmlFor="balance" className="text-right h5 col-sm-4 col-form-label">Loan Balance</label>
//           <div className="col-sm-6">
//             <input className="form-control" name='balance' id='balance' type='number' defaultValue={userValues.balance} placeholder='Enter balance here' onChange={handleInputChange}/>
//           </div>
//         </div>
//         <div className='form-group row'>  
//           <label htmlFor="rate" className="text-right h5 col-sm-4 col-form-label">Interest Rate (%)</label>
//           <div className="col-sm-6">
//             <input className="form-control" name='rate' id='rate' type='number' step='0.01' defaultValue={userValues.rate} onChange={handleInputChange} placeholder='choose step%'/>
//           </div>
//         </div>
//         <div className='form-group row'>
//           <label htmlFor="term" className="text-right h5 col-sm-4 col-form-label">Loan Term (years)</label>
//           <div className="col-sm-6">
//             <select className="form-control" name='term' id ='term' defaultValue={userValues.term} onChange={handleInputChange}>
//               <option value='15'>15</option>
//               <option value='30'>30</option>
//             </select>
//           </div>
//         </div>  
//           <form className='form-group row' onSubmit={handleSubmitValues}>
//           <span className="col-sm-4"></span>
//             <div className='col-sm-6 text-left mt-4'>
//               <button className='btn btn-info' name='submit'> Calculate</button>
//               <div className='text-left h4' name="output" id='output'>{results.output}</div>
//             </div>
//           </form>  
//       </div>
//     </div>
//   )
// }


